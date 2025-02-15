// Mapbox setup
mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbml0YTk1NiIsImEiOiJjbTNuamNzam0wdHRrMmxxMW81MHMxMTdpIn0.-1QhN4HjJq36viH82gJUtg'; // Replace with your Mapbox access token
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.3, 28.5],
    zoom: 7
});

// hard code data
const data = {
    "type": "FeatureCollection",
    "name": "gdf",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "id": 0,
            "properties": {
                "address": "Karnes County, Texas",
                "Latitude": 28.8791858,
                "Longitude": -97.9062893
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -97.9062893,
                    28.8791858
                ]
            },
            "content": {
                "stanzas": {
                    "es": "En el condad de Carnes. \nmiren lo que ha sucedido,\nmurió el Cherife Mayor. \nquednado Roman herido",
                    "en": "In the county of Karnes, \nLook what has happened; \nThe Major Sheriff died, \nLeaving Román badly wounded.",
                },
                "audioFile": "audio/GC 1 Mixdown.mp3",
                "articleImg": "articleImg/Cortez_is_in_Bexar_Jail._the_Slayer_of_Sheriffs__San_Antonio_Express_published_as_The_Daily_Express___June_25_1901__p1_4.png",
                "articleLink": "articleImg/Cortez_is_in_Bexar_Jail._the_Slayer_of_Sheriffs__San_Antonio_Express_published_as_The_Daily_Express___June_25_1901__p1_4.pdf"
            }
        },
        {
            "type": "Feature",
            "id": 1,
            "properties": {
                "address": "Gonzales County, Texas",
                "Latitude": 29.4436555,
                "Longitude": -97.5108636
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -97.5108636,
                    29.4436555
                ]
            },
            "content": {
                "stanzas": {
                    "es": "Tiró con rumbo a Gonzales \nsin ninguna timidez:\n--Síganme rinches cobardes, \nyo soy Gregorio Cortez.",
                    "en": "He struck out for Gonzales \nWithout showing any fear, \n'Follow me, cowardly rangers, \nI am Gregorio Cortez.'",
                },
                "audioFile": "audio/GC 10Mixdown.mp3",
                "articleImg": "articleImg/Hot_on_His_Trail__Dallas_Morning_News__June_18_1901__p1.png",
                "articleLink": "articleImg/Hot_on_His_Trail__Dallas_Morning_News__June_18_1901__p1.pdf"

            }
        },
        {
            "type": "Feature",
            "id": 2,
            "properties": {
                "address": "Belmont, Gonzalez County, Texas",
                "Latitude": 29.5241066,
                "Longitude": -97.6875125
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -97.6875125,
                    29.5241066
                ]
            },
            "content": {
                "stanzas": {
                    "es": "Se fue de Belmont al rancho, \nlo alacanzaron a rodear, \npoquitos más de trescientos, \ny allí les brincó el corral.",
                    "en": "From Belmont he went to the ranch,\nThey succeeded in surrounding him, \nQuite a few more than three hundred,\nBut there he jumped their corral.",
                },
                "audioFile": "audio/GC 11 Mixdown.mp3",
                "articleImg": "articleImg/Officers_on_Hot_Trails._Many_Determined_Men_Are_in__San_Antonio_Express_published_as_The_Daily_Express___June_18_1901__p1_2.png",
                "articleLink": "articleImg/Officers_on_Hot_Trails._Many_Determined_Men_Are_in__San_Antonio_Express_published_as_The_Daily_Express___June_18_1901__p1_2.pdf"

            }
        },
        {
            "type": "Feature",
            "id": 3,
            "properties": {
                "address": "Laredo, Texas",
                "Latitude": 27.5075005,
                "Longitude": -99.5069922
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -99.5069922,
                    27.5075005
                ]
            },
            "content": {
                "stanzas": {
                    "es": "Salió Gregorio Cortez, \nsalió con rumbo a Laredo, \nno lo quisieron seguir \nporque le tuvieron miedo.",
                    "en": "Gregorio Cortez went out, \nHe went towards Laredo \nThey decided not to follow \nBecause they were afraid of him.",
                },
                "audioFile": "audio/GC 14Mixdown.mp3",
                "articleImg": "articleImg/Cortez_Has_Been_Identified._William_Loueary_and__San_Antonio_Express_published_as_The_Daily_Express___June_24_1901__p1_2.png",
                "articleLink": "articleImg/Cortez_Has_Been_Identified._William_Loueary_and__San_Antonio_Express_published_as_The_Daily_Express___June_24_1901__p1_2.pdf"

            }
        },
        {
            "type": "Feature",
            "id": 4,
            "properties": {
                "address": "Encinal, Texas",
                "Latitude": 28.0406329,
                "Longitude": -99.3552096
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -99.3552096,
                    28.0406329
                ]
            },
            "content": {
                "stanzas": {
                    "es": "Allá por El Encinal, \nsegún lo que aquí se dice, \nle formaron un corral y les mató otro cherife.",
                    "en": "Over by El Encinal,\nAccording to what we hear, \nThey made him a corral, \n And he killed them another sheriff.",
                },
                "audioFile": "audio/GC 17 Mixdown.mp3",
                "articleImg": "articleImg/Cortez_Eludes_Pursuers_Wily_Fugitive_Seems_to_Have__San_Antonio_Express_published_as_The_Daily_Express___June_22_1901__p1_2.png",
                "articleLink": "articleImg/Cortez_Eludes_Pursuers_Wily_Fugitive_Seems_to_Have__San_Antonio_Express_published_as_The_Daily_Express___June_22_1901__p1_2.pdf"

            }
        }
    ]
};

// Create marker on the map
//store markers
const markers = {};


//function to create markers
function createMarker(feature) {
    const marker = new mapboxgl.Marker({
        color: 'black'
    })
        .setLngLat(feature.geometry.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(createPopUpContent(feature)))
        .addTo(map);

    markers[feature.id] = marker;
}

//Create dynamic scroll content and markers
function createPopUpContent(feature) {
    return `
            <h3>${feature.properties.address}</h3>
            ${feature.content.audioFile ? createAudioPlayer(feature) : ''}
            <p class= "stanza"${feature.content.stanzas.en}</p>
        `;
}

data.features.forEach((feature) => {
    //create a marker for each feature
    createMarker(feature);
    createScrollContent(feature);
});

// create dynamic scroll content for each feature
function createScrollContent(feature) {
    const { address } = feature.properties;
    const { stanzas, audioFile, articleImg, articleLink } = feature.content;

    const section = document.createElement('section');
    section.id = feature.id;
    section.innerHTML = `
                <h1>${feature.properties.address}</h1>
                ${createAudioPlayer(feature, 'es')}
                <p class="stanzas">${feature.content.stanzas.en}</p>
                <p><a href="${feature.content.articleLink}" target="_blank">Read full article</a></p>
                <div class="news-image">
                    <img src="${feature.content.articleImg}" alt="Article Image">
                </div>
            `;
    console.log(section.innerHTML);
    document.getElementById('features').appendChild(section);
}

//Synchronize map with scrolling
const chapters = data.features.reduce((acc, feature) => {
    acc[feature.id] = {
        center: feature.geometry.coordinates,
        zoom: 10
    };
    return acc;
}, {});

let activeChapterName = data.features[0].id;
let activeAudio = null; //def globally

//set active chapter section

map.on('scroll', () => {
    const activeChapter = getActiveChapter(); // Logic to find the active chapter
    if (activeChapter && activeChapter !== activeChapter) {
        setActiveChapter(activeChapter)
    }
});

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    resetActiveAudio();

    if (chapters[chapterName]) {
        map.flyTo(chapters[chapterName]);
    } else {
        console.error(`Chapter ${chapterName} does not exist.`);
        return;
    }

    updateActiveMarker(chapterName);
    updateActiveSection(chapterName);
}


//pause and reset the active audio if any
function resetActiveAudio() {
    if (activeAudio && !activeAudio.paused) {
        activeAudio.pause();
        activeAudio.currentTime = 0;
        const playButton = document.querySelector(`button[onclick*="${activeAudio.id}"]`);
        if (playButton) playButton.textContent = "play"; //reset button text
    }
}
//note: change marker colors
function updateActiveMarker(chapterName) {
    if (markers[activeChapterName]) {
        markers[activeChapterName].getElement().innerHTML = '<div class="marker-icon-default"></div>';
    }
    if (markers[chapterName]) {
        markers[chapterName].getElement().innerHTML = '<div class="marker-icon-active"></div>'; //set previous marker background to red
    }

    activeChapterName = chapterName;
}
// highlist the active section and marker
function updateActiveSection(chapterName) {
    document.getElementById(chapterName).classList.add('active');
    document.getElementById(activeChapterName).classList.remove('active');
};

// Scroll event listener
window.onscroll = () => {
    for (const feature of data.features) {
        if (isElementOnScreen(feature.id)) {
            //resetActiveAudio(); //stop any play
            setActiveChapter(feature.id);
            break;
        }
    }
};
// Interesect TESTING
function handleIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const featureId = entry.target.id;
            if (activeChapterName !== featureId) {
                //resetActiveAudio();
                setActiveChapter(featureId);
                activeChapter = featureId;
            }
        }
    });
};

const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.5, // Adjust the threshold as needed
});
///

data.features.forEach(feature => {
    const element = document.getElementById(feature.id);
    if (element) observer.observe(element);
});
// Function to check if the section is in the viewport
function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
};

//intersection obserrver to a pause audio when article image is in view
function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
};

function toggleAudio(audioSrc, audioId) {
    const audio = document.getElementById(audioId);
    const playButton = document.querySelector(`button[onclick="toggleAudio('${audioSrc}', '${audioId}')"]`);

    if (audio.paused) {
        //resetActiveAudio();
        audio.play();
        playButton.textContent = "Pause";
        activeAudio = audio //update activeAudio
        syncAudioWithText(audio); //set the active audio
    } else {
        audio.pause();
        playButton.textContent = "play";
    }
};

function syncAudioWithText(audio) {
    const spans = document.querySelectorAll(".audio-text");
    audio.ontimeupdate = () => {
        spans.forEach(span => {
            const start = parseFloat(span.dataset.start);
            const end = parseFloat(span.dataset.end);
            span.classList.toggle("active", audio.currentTime >= start && audio.currentTime <= end);
        });
    };

    audio.onended = () => {
        spans.forEach(span => span.classList.remove("active"));
    };
};

function createAudioPlayer(feature) {
    const stanzaLines = feature.content.stanzas.es.split('\n');
    const startTimes = [5, 11, 17, 23]; // Adjust timing based on your data for the highlight of each line
    const endTimes = [10, 16, 22, 30]; // Adjust timing based on your data for the highlight of each line

    let stanzaSpans = '';
    stanzaLines.forEach((line, index) => {
        stanzaSpans += `
                    <span class="audio-text" data-start="${startTimes[index]}" data-end="${endTimes[index]}">${line}</span>
                `;
    });
    //inline audio player html
    return `
                <div class="inline-audio-player">
                    <div class="text-audio-wrapper">
                        <button class="play-btn" onclick="toggleAudio('${feature.content.audioFile}', 'popup-audio-${feature.id}')">Play</button>
                        <p class="audio-text-wrapper">
                            ${stanzaSpans}
                        </p>
                    </div>
                    <audio id="popup-audio-${feature.id}" src="${feature.content.audioFile}" hidden></audio>
                </div>
            `;
};
//reset map view
document.getElementById('reset-map-view').addEventListener('click', () => {
    const firstFeature = data.features[1];
    const [lng,lat] = firstFeature.geometry.coordinates;

    map.flyTo({
        center: [lng, lat], // Your initial center coordinates
        zoom: 7, // Your initial zoom level
        essential: true // Ensures smooth animation
    });
});