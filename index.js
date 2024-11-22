// testing asy run and call backs console.log("hey")
(async () => {
    const MBTOKEN = "pk.eyJ1IjoiZGlhbml0YTk1NiIsImEiOiJjbTNuamNzam0wdHRrMmxxMW81MHMxMTdpIn0.-1QhN4HjJq36viH82gJUtg";

    const mapConfig = {
        container: 'map', // container ID
        center: [-98.5, 28.5], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 7 // starting zoom
    }

    const genMap = async() => {
        mapboxgl.accessToken = MBTOKEN;
        return new mapboxgl.Map({
            container: 'map', // container ID
            center: [-98.5, 28.5], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 7 // starting zoom
        })

    }

   const addMarkers = async(datajson, map) => {
        console.log(datajson.features)
        data.features.forEach(feature => {
            //console.log(feature.properties.Latitude)
            //console.log(feature.properties.Longitude)
            const lat = feature.properties.Latitude;
            const long = feature.properties.Longitude;
            const address = feature.properties.address;
            const stanza = feature.content.stanza;
            const articleImg = feature.content.articleImg;
            const articleLink = feature.content.articleLink;
            const audioFile = feature.content.audioFile; 
            const audioHtml = `
                <div class="custom-audio-player">
                    <button class="play-button" onclick="togglePlay(this)">▶</button>
                    <audio src="${audioFile}" type="audio/mpeg"></audio>
                </div>
`;

            const marker = new mapboxgl.Marker()
                .setLngLat([long,lat])  
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h1>${address}</h1> 
                    ${audioHtml}
                    <p class="stanza">${stanza}</p> 
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
                    if (audio.paused) {
                        audio.play();
                        button.textContent = "⏸";
                    } else {
                        audio.pause();
                        button.textContent = "▶";
                    }
                };

            const markerEl = marker.getElement();
            markerEl.dataset.id = feature.id;
            console.log(markerEl)
        });
        }

    const map = await genMap();
    await addMarkers(data, map)
    const markerElement = document.querySelector('.mapboxgl-marker[data-id="1"]');
    markerElement.click()

})();
