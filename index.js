// testing asy run and call backs console.log("hey")
(async () => {
    const MBTOKEN = "pk.eyJ1IjoiZGlhbml0YTk1NiIsImEiOiJjbTNuamNzam0wdHRrMmxxMW81MHMxMTdpIn0.-1QhN4HjJq36viH82gJUtg";

    //const mapConfig = { // Q: Should i remove mapConfig?
    //    container: 'map', // container ID
    //    center: [-98.5, 28.5], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    //    zoom: 7 // starting zoom
   // };

    const genMap = async() => {
        mapboxgl.accessToken = MBTOKEN;
        return new mapboxgl.Map({
            container: 'map', // container ID
            center: [-98.5, 28.5], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 7 // starting zoom
        })

    };

    const addMarkers = async(data, map) => {
        console.log(data.features)
        data.features.forEach(feature => {
            //console.log(feature.properties.Latitude)
            //console.log(feature.properties.Longitude)
            const lat = feature.properties.Latitude;
            const long = feature.properties.Longitude;
            const address = feature.properties.address;
            const stanzaEs = feature.content.stanzaEs;
            const stanzaEn = feature.content.stanzaEn;
            const articleImg = feature.content.articleImg;
            const articleLink = feature.content.articleLink;
            const audioFile = feature.content.audioFile; 
            const audioHtml = `
                <div class="custom-audio-player">
                    <button class="play-button" onclick="togglePlay(this)">Listen Now</button>
                    <audio src="${audioFile}" type="audio/mpeg"></audio>
                </div>
`;

            const marker = new mapboxgl.Marker()
                .setLngLat([long,lat])  
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h1>${address}</h1> 
                    ${audioHtml}
                    <p class="stanzaEs">${stanzaEs}</p> 
                    <p class="stanzaEn">${stanzaEn}</p> 
                    <p>
                        <a href="${articleLink}" target="_blank">Read full article</a>
                    </p>
                    <div class="news-image">
                        <img src="${articleImg}" alt="Article Image"></img>
                    </div> 
                              
                `))

            .addTo(map); 

            // Global function for play/pause toggle
                window.togglePlay = function(button) {
                    const audio = button.nextElementSibling;

                    //pause all other audio elements
                    document.querySelectorAll('audio').forEach((a) => {
                        if (a !== audio) {
                            a.pause();
                            const otherButton = a.previousElementSibling;
                            if (otherButton) otherButton.textContent = "Play";
                        }
                    });

                    //toogle play/pause for the clicked button
                    if (audio.paused) {
                        audio.play();
                        button.textContent = "Pause";
                    } else {
                        audio.pause();
                        button.textContent = "Play";
                    }
                };

            const markerEl = marker.getElement();
            markerEl.dataset.id = feature.id;
            console.log(markerEl)
        });
        }

        // creating chapters for each location //NEW
    const chapters = {};
    data.features.forEach((feature)=> {
        const id = 'chapter-${feature.id}'; 
        chapters[id] = {
            center: [feature.properties.Longitude, feature.properties.Latitude],
            zoom: 8,
            pitch: 0,
            bearing:0,
            content: [feature.properties.content]
        };
    });

      // creating active chapter
      let activeChapterName = 'chapter-1';
      function setActiveChapter(chapterName) {
          if (chapterName === activeChapterName) return;
  
          map.flyTo({
            center: chapters[chapterName].center,
            zoom: chapters[chapterName].zoom,
      });
  
          document.getElementById(chapterName).classList.add('active');
          document.getElementById(activeChapterName).classList.remove('active');
  
          activeChapterName = chapterName;
      };
  
      function isElementOnScreen(id) {
          const element = document.getElementById(id);
          const bounds = element.getBoundingClientRect();
          return bounds.top < window.innerHeight && bounds.bottom > 0;
      };

      // On every scroll event, check which element is on screen
      let scrollTimeout;
      window.onscroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          for (const chapterName in chapters) {
              if (isElementOnScreen(chapterName)) {
                  setActiveChapter(chapterName);
                  break;
              }
          }
        }, 100);
    };
   
    //placing chapters to a sidebar
    const addChaptersToSidebar = (data, containerId) => {
        const featuresDiv = document.querySelector("#features");
        const container = document.getElementById(containerId);
        data.features.forEach((feature) => {
            const id = `chapter-${feature.id}`;
            const section = document.createElement('section');
            section.id = id;
            section.innerHTML = `
                <h3>${feature.properties.address}</h3>
                <p>${feature.content.stanzaEn}</p>
                <audio controls>
                    <source src="${feature.content.audioFile}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <a href="${feature.content.articleLink}" target="_blank">Read Article</a>
                <img src="${feature.content.articleImg}" alt="Article Image">
            `;
            container.appendChild(section);
            //sidebar += section;
            //featuresDiv.innerHTML = sidebar;
        });
        //console.log(section);
    };

    const map = await genMap();
    await addMarkers(data, map)
    const markerElement = document.querySelector('.mapboxgl-marker[data-id="1"]');
    markerElement.click()
    addChaptersToSidebar(data, 'features')

})();
