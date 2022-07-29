let myMap = L.map("map", {
    center: [41.515111142650824, -112.22313302713114],
    zoom: 4
});

let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);

/* GeoJson */
let geo = './static/data/geo_states.json'


// retrieving
d3.json(geo).then(function(data) {

    console.log(data);
    L.geoJson(data).addTo(myMap);
});