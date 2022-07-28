let myMap = L.map("map", {
    center: [41.515111142650824, -112.22313302713114],
    zoom: 4
});

/* GeoJson */
let geo = './static/data/geo_states.json'


// Retrieve data in json through d3 and transform into markers for layers
d3.json(geo).then(function(data) {

    console.log(data);
    L.geoJson(data).addTo(myMap);
});