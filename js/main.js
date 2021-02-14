// Create a map object.
var mymap = L.map('map', {
  center: [39.04, -99.60],
  zoom: 4,
  maxZoom: 12,
  minZoom: 1,
  detectRetina: true
});

// Add a base map.
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

// Add airports GeoJSON Data
// Null variable that will hold airport data
var airports = null;

// Build up a set of colors from colorbrewer's dark2 category
var colors = chroma.scale('Dark2').mode('lch').colors(3);

// Dynamically append style classes to this page. This style classes will be used for colorize the markers.
for (i = 0; i < 2; i++) {
  $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}

// Get GeoJSON and put on it on the map when it loads
airports= L.geoJson.ajax("assets/airports.geojson", {
  // assign a function to the onEachFeature parameter of the cellTowers object.
  // Then each (point) feature will bind a popup window.
  // The content of the popup window is the value of `feature.properties.airport name`
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.AIRPT_NAME);
    return feature.properties.CNTL_TWR;
  },
  pointToLayer: function (feature, latlng) {
    var id = 0;
    if (feature.properties.CNTL_TWR == "Y") { id = 0; }
    else if (feature.properties.CNTL_TWR == "N")  { id = 1; }
    else { id = 2;}
    return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-plane marker-color-' + (id + 1).toString() })});
  },
  attribution: 'US Airport Data &copy; USGS | US States &copy; Mike Bostock of D3 | Base Map &copy; CartoDB | Made By Zhi Ye'
}).addTo(mymap);

// Set function for color ramp
colors = chroma.scale('YlOrRd').colors(5);

function setColor(count) {
  var id = 0;
  if (count > 32) { id = 4; }
  else if (count > 22 && count <= 32) { id = 3; }
  else if (count > 12 && count <= 22) { id = 2; }
  else if (count > 2 &&  count <= 12) { id = 1; }
  else  { id = 0; }
  return colors[id];
}

// Set style function that sets fill color.md property equal to airport count
function style(feature) {
  return {
    fillColor: setColor(feature.properties.count),
    fillOpacity: 0.4,
    weight: 2,
    opacity: 1,
    color: '#b4b4b4',
    dashArray: '4'
  };
}

// Add county polygons
// Create counties variable, and assign null to it.
var states = null;
states = L.geoJson.ajax("assets/us-states.geojson", {
    style: style
}).addTo(mymap);

// Create Leaflet Control Object for Legend
var legend = L.control({position: 'topright'});

// Function that runs when legend is added to map
legend.onAdd = function () {
  // Create Div Element and Populate it with HTML
  var div = L.DomUtil.create('div', 'legend');
  div.innerHTML += '<b>Airport Count by State</b><br />';
  div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p> 32+ </p>';
  div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p> 23-32 </p>';
  div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p> 13-22 </p>';
  div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p> 2-12 </p>';
  div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p> 0 </p>';
  div.innerHTML += '<hr><b>Air Control Tower Present<b><br />';
  div.innerHTML += '<i class="fa fa-plane marker-color-1"></i><p> Yes </p>';
  div.innerHTML += '<i class="fa fa-plane marker-color-2"></i><p> No </p>';
  // Return the Legend div containing the HTML content
  return div;
};

// Add a legend to map
legend.addTo(mymap);

// Add a scale bar to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);

L.control.ruler().addTo(map);

