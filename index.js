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

// define playAudio. 

    const playAudio = () => {
        const audioElement = document.getElementById('myAudio');
        audioElement.play().catch(error => {
            console.error("error playing audio", error);
        });
    };

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

            const marker = new mapboxgl.Marker()
                .setLngLat([long,lat])  
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h1>${address}</h1> 
                    <div class="stanza-with-audio">
                        <button class="play-button" onClick="playAudio('${audioFile}')">▶</button>
                        <p class="stanza">${stanza}</p> 
                    </div>
                    <p>
                        <a href="${articleLink}" target="_blank">Read full article</a>
                    </p>
                    <div class="news-image">
                        <img src="${articleImg}" alt="Article Image"></img>
                    </div>
                    <audio id="audio-${feature.id}" src="${audioFile}"></audio>           
                `))
                .addTo(map);  
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
