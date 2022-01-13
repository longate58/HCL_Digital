
    let myMap = L.map('myMap').setView([10.4756721, -66.5309073], 16)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //Fondo del mapa
    	maxZoom: 60, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors - Long Art Digital',

    }).addTo(myMap);

    let iconMarker = L.icon({ //Agrega nuestro marcador
        iconUrl: 'img/marker.png',
        iconSize: [35, 60],
        iconAnchor: [30, 60]
    })

    let marker2 = L.marker([10.4759721, -66.5322674], { icon: iconMarker }).addTo(myMap)



/// ---- Polígono  GIRAZOLES DE ZAMORA----
var geojsonFeaturePolygon = [
  {"type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [[ [-66.533768600,  10.482652700], [-66.533854800,  10.482683000], [-66.533931800,  10.482541200], [-66.534092600,  10.482246400], [-66.534187600,  10.482072300], [-66.534538800,  10.481408700], [-66.534670900,  10.481159300], [-66.534858600,  10.480804600], [-66.534863000,  10.480796300], [-66.535146200,  10.480139800], [-66.535206800,  10.479999400], [-66.535918100,  10.478832600], [-66.536055400,  10.478448500], [-66.536138800,  10.478119600], [-66.536541700,  10.476370800], [-66.536602100,  10.476102800], [-66.536922800,  10.474678900], [-66.537012200,  10.474266800], [-66.537026600,  10.474200600], [-66.537057200,  10.474020100], [-66.537068000,  10.473956400], [-66.537095900,  10.473844300], [-66.537111400,  10.473800200], [-66.537163700,  10.473650800], [-66.537231400,  10.473524500], [-66.537392400,  10.473224400], [-66.537457600,  10.473088600], [-66.537803600,  10.472368400], [-66.537732800,  10.472202300], [-66.537328500,  10.471338500], [-66.536947800,  10.470772900], [-66.536432900,  10.471406500], [-66.536016900,  10.471918400], [-66.535986500,  10.471729300], [-66.535843700,  10.471666500], [-66.535523800,  10.471559600], [-66.534688800,  10.471280700], [-66.534629500,  10.471260900], [-66.534004100,  10.471052000], [-66.533985500,  10.471045800], [-66.533786900,  10.471108900], [-66.533655700,  10.471150500], [-66.533378600,  10.471238500], [-66.533368700,  10.471203800], [-66.533065500,  10.470145900], [-66.533018000,  10.469964800], [-66.532967100,  10.469828800], [-66.532948900,  10.469740600], [-66.532945400,  10.469723800], [-66.532800900,  10.470002400], [-66.532696000,  10.470274400], [-66.532517100,  10.471068200], [-66.532453300,  10.471351600], [-66.532451700,  10.471358700], [-66.532379000,  10.471679800], [-66.532047700,  10.472872600], [-66.531813600,  10.473790400], [-66.531646100,  10.474468100], [-66.531624200,  10.474542900], [-66.531597700,  10.474602200], [-66.531570600,  10.474649700], [-66.531492300,  10.474808500], [-66.531480700,  10.474833000], [-66.531472800,  10.474852700], [-66.531386000,  10.474999000], [-66.531120100,  10.475485300], [-66.531077400,  10.475563500], [-66.531005800,  10.475680200], [-66.530770000,  10.476065000], [-66.530702800,  10.476255700], [-66.530653100,  10.476472200], [-66.530655600,  10.476521900], [-66.530678000,  10.476967200], [-66.530693000,  10.477264400], [-66.530713000,  10.477661000], [-66.530718700,  10.477865500], [-66.530733400,  10.478388900], [-66.530753700,  10.478914500], [-66.530765400,  10.479194800], [-66.530789200,  10.479376600], [-66.530803900,  10.479455900], [-66.530807400,  10.479462200], [-66.530875600,  10.479667900], [-66.531059000,  10.479895100], [-66.531095600,  10.479940000], [-66.531184800,  10.480014600], [-66.531338200,  10.480155100], [-66.531367900,  10.480182400], [-66.531399300,  10.480221600], [-66.531428500,  10.480258100], [-66.531459600,  10.480297100], [-66.531476200,  10.480350000], [-66.531489100,  10.480371700], [-66.531506100,  10.480408300], [-66.531522500,  10.480440200], [-66.531530100,  10.480545400], [-66.531519900,  10.480583300], [-66.531514800,  10.480602300], [-66.531507000,  10.480630900], [-66.531499200,  10.480659700], [-66.531484700,  10.480713600], [-66.531271000,  10.481262800], [-66.531158600,  10.481551600], [-66.531775700,  10.481820000], [-66.533104400,  10.482398000], [-66.533407800,  10.482525700], [-66.533768600,  10.482652700] ]]}}]

function stylePolygon(feature) {
  return {
    weight: 2.5, // grosor de línea
    color: 'blue', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'yellow', // color de relleno
    fillOpacity: 0.1 // transparencia de relleno
  };
};

var polygon = new L.geoJson(geojsonFeaturePolygon, {
  style: stylePolygon
}).addTo(myMap);

//------------------------------------------------------
    // Capas de superposicón

    var MapaBase = {
      "OpenStreetMap": osm,
      "Satelital": esri
    };

    L.control.groupedLayers(MapaBase).addTo(map);


//---------------------------------------------------
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});