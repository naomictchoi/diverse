/*
$(document).ready(function(){

map = $K.map('#map', 600, 400);
map.loadMap(<%= asset_path('asia.svg') %>, function() {
    map.addLayer('countries', {
        styles: {
            fill: '#ee9900'
        },
        title: function(d) {
            return d.countryName;
        }
    });
});

*/