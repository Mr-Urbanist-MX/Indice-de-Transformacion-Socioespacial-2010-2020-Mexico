// BASEMAPS //
let osm = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/about">OpenStreetMap</a> | © <a href="https://www.hotosm.org/">Humanitarian</a> | © <a href="https://www.esri.com/es-es/home">ESRI</a> | © <a href="https://github.com/Mr-Urbanist-MX">Mr Urbanist MX</a> | contributors'});
let hdm = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/about">OpenStreetMap</a> | © <a href="https://www.hotosm.org/">Humanitarian</a> | © <a href="https://www.esri.com/es-es/home">ESRI</a> | © <a href="https://github.com/Mr-Urbanist-MX">Mr Urbanist MX</a> | contributors'});
let esrisat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© <a href="https://www.openstreetmap.org/about">OpenStreetMap</a> | © <a href="https://www.hotosm.org/">Humanitarian</a> | © <a href="https://www.esri.com/es-es/home">ESRI</a> | © <a href="https://github.com/Mr-Urbanist-MX">Mr Urbanist MX</a> | contributors'});
let esrigray = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© <a href="https://www.openstreetmap.org/about">OpenStreetMap</a> | © <a href="https://www.hotosm.org/">Humanitarian</a> | © <a href="https://www.esri.com/es-es/home">ESRI</a> | © <a href="https://github.com/Mr-Urbanist-MX">Mr Urbanist MX</a> | contributors'});
//  CONFIGURACIÓN LIENZO //
let map = L.map('map', {
    layers: [esrigray],
    tap: false,
    center: new L.LatLng(19.50, -99.15),
    zoom: 10,
    minZoom: 6,
    fullscreenControl: true,
    fullscreenControlOptions: {
        title: 'Activar Pantalla completa',
        titleCancel: 'Apagar Pantalla completa'
    }
});
map.on('Activar Pantalla completa',
    function () {
        if (window.console) window.console.log('Activar Pantalla completa');
});
map.on('Apagar Pantalla completa',
    function () {
        if (window.console) window.console.log('Apagar Pantalla completa');
});
let toggleFullscreen = function () {
map.toggleFullscreen();
};
// TITULO //
let info = L.control();
    info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
        return this._div;
        };
        info.update = function (props) {
            this._div.innerHTML = `<h3>ÍTSE (2010-2020)</h3>`;
        };
        info.addTo(map);
// SIDEPANEL CARACTERISITCAS//
let sidepanelLeft = L.control.sidepanel('mySidepanelLeft', {
    tabsPosition: 'left',
    darkMode: true,
    startTab: 'tab-1'
}).addTo(map);
// ESCALA //
let Escala = L.control.scale({ position: 'bottomright'}).addTo(map);
// MINIBASEMAP //
let MMUrl='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
let MMap = new L.TileLayer(MMUrl, {minZoom: 0, maxZoom: 10,});
let miniMap = new L.Control.MiniMap(MMap, { toggleDisplay: true, position: 'bottomleft'}).addTo(map);					
// CARTOGRAFIA GEOJSON (CAPAS) //
// POLIGONOS (CAPAS) //
let GU3 = L.geoJson(gu_3, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
                color: '#ffffff',
                fillColor: '#894444',
    };}}).bindPopup(function (layer){
    return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);

let GU2 = L.geoJson(gu_2, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
                color: '#ffffff',
                fillColor: '#cd6666',
    };}}).bindPopup(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);

let GU1 = L.geoJson(gu_1, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
        color: '#ffffff',
        fillColor: '#ffbebe',
    };}}).bindPopup(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);

let SC = L.geoJson(sc_0, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
        color: '#ffffff',
        fillColor: '#ffffbe',
    };}}).bindPopup(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);

let DU1 = L.geoJson(du_1, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
        color: '#ffffff',
        fillColor: '#bed2ff',
    };}}).bindPopup(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);

let DU2 = L.geoJson(du_2, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
        color: '#ffffff',
        fillColor: '#7a8ef5',
    };}}).bindPopup(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);

let DU3 = L.geoJson(du_3, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
        color: 'ffffff',
        fillColor: '#002673',
    };}}).bindPopup(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);

let NA = L.geoJson(na_0, {style: function (feature){
    return {
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.9,
        color: '#000000',
        fillColor: '#ffffff',
    };}}).bindPopup(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).bindTooltip(function (layer){
        return "<div style=text-align:center><h4>CLAVE AGEB Urbana: " + layer.feature.properties.CVEGEO +
            "</div><hr><table><tr><td>ITSE 2010-2020 : " + layer.feature.properties.CLAS_GD +
            "</td></tr><tr><td>Sumatoria ITSE 2010-2020: " + layer.feature.properties.GD +
            "</td></tr><tr><td>Valor Población Total: " + layer.feature.properties.PT_GD +
            "</td></tr><tr><td>Valor Población 0-4 años: " + layer.feature.properties.PN_GD +
            "</td></tr><tr><td>Valor Población 64 años y más: " + layer.feature.properties.PM_GD +
            "</td></tr><tr><td>Valor Promedio de hijos: " + layer.feature.properties.PF_GD +   
            "</td></tr><tr><td>Valor Grado de Escolaridad: " + layer.feature.properties.GE_GD +
            "</td></tr><tr><td>Valor Vivienda Totales por AGEB: " + layer.feature.properties.VT_GD +
            "</td></tr><tr><td>Valor Promedio de ocupantes por cuarto: " + layer.feature.properties.OC_GD +
            "</td></tr><tr><td>Valor Viviendas con computadora: " + layer.feature.properties.VC_GD +
            "</td></tr></table>"
    }).addTo(map);



let ZM_M = L.geoJson(zm_0m, {style: function (feature){
    return {
        weight: 1.5,
        opacity: 1,
        color: '#9b9b9b',
    };}}).addTo(map);

let ZM = L.geoJson(zm_00, {style: function (feature){
    return {
        weight: 2.5,
        opacity: 1,
        color: '#000000',
    };}}).addTo(map);

// ACTIVAR CAPAS //
let baseLayers = {
        'OpenStreetMap Humanitarian': hdm,
        'OpenStreetMap Standard': osm,
        'ESRI Satelital': esrisat,
        'ESRI Dark Basemap': esrigray,
    };               
let overlays = {
        "Gentrificación Urbana Fuerte": GU3,
        "Gentrificación Urbana Media": GU2,
        "Gentrificación Urbana Ligera": GU1,
        "Sin Cambios": SC,
        "Declinación Urbana Ligera": DU1,
        "Declinación Urbana Media": DU2,
        "Declinación Urbana Fuerte": DU3,
        "No Aplica": NA,
        // "Delimitación Zona Metropolitana": ZM,
        // "Delimitación Municipal": ZM_M,
    };
let layerControl = L.control.layers(baseLayers, overlays, {collapsed: false,}).addTo(map);
// RESET VIEW (REGRESAR VISTA IN INICIAL) //
L.control.resetView({
    position: "topleft",
    title: "Posición inicial",
    latlng: L.latLng([19.50, -99.15]),
    zoom: 10,
}).addTo(map);