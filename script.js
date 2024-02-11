
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYS1oZWluMSIsImEiOiJjbHMyOWllNW8wa2J3MmpsZHM1eHk0b3oxIn0.9g1JErkZTD4sg70-swx-YQ'

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/anna-hein1/clsezuixj037101qs7pnn05r8',
    center: [-79.39, 43.66],
    zoom: 10
});

map.on('load', () => {
    map.addSource('pool', {
        type: 'geojson',
        data: { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "name": "UofT Pool" }, "geometry": { "coordinates": [-79.40090853084943, 43.66279934389698], "type": "Point" }, "id": 0 }] }
    });
    map.addLayer({
        'id': 'pool',
        'type': 'circle',
        'source': 'pool',
        'paint': {
            'circle-color': 'yellow green',
            'circle-radius': 10,
        }
    });
    // Load an image from an external URL.
    map.loadImage(
        'data:image/png;base64,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',
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage('flower', image);

            // Add a data source containing one point feature.
            map.addSource('geometries', {
                'type': 'geojson',
                'data':
                {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "coordinates": [
                                    [
                                        -79.40897912709185,
                                        43.66575966551673
                                    ],
                                    [
                                        -79.40092766561587,
                                        43.66776294483071
                                    ]
                                ],
                                "type": "LineString"
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "coordinates": [
                                    [
                                        -79.37431686369735,
                                        43.66193777265619
                                    ],
                                    [
                                        -79.40102419947581,
                                        43.66778270636888
                                    ]
                                ],
                                "type": "LineString"
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "coordinates": [
                                    [
                                        -79.37153912711196,
                                        43.648687306427775
                                    ],
                                    [
                                        -79.400898880671,
                                        43.66769209228957
                                    ]
                                ],
                                "type": "LineString"
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "coordinates": [
                                    [
                                        -79.36521301743925,
                                        43.6845328157184
                                    ],
                                    [
                                        -79.40057798407135,
                                        43.66796572905946
                                    ]
                                ],
                                "type": "LineString"
                            }
                        }
                    ],
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': '<a href="https://www.toronto.ca/explore-enjoy/parks-gardens-beaches/gardens-and-horticulture/conservatories/allan-gardens-conservatory/" target="_blank"title="Opens in a new window" > Allan Gardens Conservatory</a> was once owned by the University of Toronto, but was donated to the Friends of Allan Gardens and the City considers it a heritage building. </p> ',
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-79.37436043373603,
                                    43.6619106763101]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': '<a href="https://www.evergreen.ca/evergreen-brick-works/" target="_blank"title="Opens in a new window" > Evergreen Brick Works</a> is a unique, hidden gem of Toronto.The campus- style layout of the organizations buildings offers visitors many experiences, including ice skating, walking down trails filled with native plants and public art, and strolling through the farmers market every Saturday.</p> ',
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-79.365228054378,
                                    43.6843915071656]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': '<a href="http://www.stlawrencemarket.com/pages/read_more_st_lawrence_market/" target="_blank"title="Opens in a new window" > The St. Lawrrence Farmer`s Market </a> is lovely and very popular place to visit on a Saturday morning, where one can shop for freshly caught fish, just-picked produce and hand-made jewelry or soap. </p> ',
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-79.37149128896091,
                                    43.64857394802587]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': '<a href="https://www.instagram.com/commonsort/?hl=en" target="_blank"title="Opens in a new window" > Common Sort </a> is one of my favorite places to shop. This thrift store offers a variety of clothing, ranging from chic, going out dresses and tops, to everyday jeans. </p> ',
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-79.40894137301585,
                                    43.66572741769312]
                            }
                        },

                    ]
                }
            });
            // Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'geometries', // reference the data source
                'layout': {
                    'icon-image': 'flower', // reference the image
                    'icon-size': 0.25
                },
                'filter': ['==', '$type', 'Point']
            }),
                map.addLayer({
                    'id': 'distances',
                    'type': 'fill',
                    'source': 'geometries',
                    'paint': {
                        'stroke-color': 'dark green', // Test alternative colours and style properties
                        'stroke-opacity': 0.4
                    },
                    'filter': ['==', '$type', 'LineString']
                });
            map.on('click', 'points', (e) => {
                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'points', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'points', () => {
                map.getCanvas().style.cursor = '';
            });
        }
    );
});