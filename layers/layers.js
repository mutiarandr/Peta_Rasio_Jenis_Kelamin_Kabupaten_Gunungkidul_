var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RasioJenisKelaminKabupatenGunungkidul_2 = new ol.format.GeoJSON();
var features_RasioJenisKelaminKabupatenGunungkidul_2 = format_RasioJenisKelaminKabupatenGunungkidul_2.readFeatures(json_RasioJenisKelaminKabupatenGunungkidul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RasioJenisKelaminKabupatenGunungkidul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RasioJenisKelaminKabupatenGunungkidul_2.addFeatures(features_RasioJenisKelaminKabupatenGunungkidul_2);
var lyr_RasioJenisKelaminKabupatenGunungkidul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RasioJenisKelaminKabupatenGunungkidul_2, 
                style: style_RasioJenisKelaminKabupatenGunungkidul_2,
                popuplayertitle: 'Rasio Jenis Kelamin Kabupaten Gunungkidul ',
                interactive: true,
    title: 'Rasio Jenis Kelamin Kabupaten Gunungkidul <br />\
    <img src="styles/legend/RasioJenisKelaminKabupatenGunungkidul_2_0.png" /> Rasio Jenis Kelamin Sangat Rendah (94,06-96,13%)<br />\
    <img src="styles/legend/RasioJenisKelaminKabupatenGunungkidul_2_1.png" /> Rasio Jenis Kelamin Rendah (96,13-97,14%)<br />\
    <img src="styles/legend/RasioJenisKelaminKabupatenGunungkidul_2_2.png" /> Rasio Jenis Kelamin Sedang (97,14-97,84%)<br />\
    <img src="styles/legend/RasioJenisKelaminKabupatenGunungkidul_2_3.png" /> Rasio Jenis Kelamin Tinggi (97,84-98,62%)<br />\
    <img src="styles/legend/RasioJenisKelaminKabupatenGunungkidul_2_4.png" /> Rasio Jenis Kelamin Sangat Tinggi (98,62-100,36%)<br />' });
var format_NamaKecamatan_3 = new ol.format.GeoJSON();
var features_NamaKecamatan_3 = format_NamaKecamatan_3.readFeatures(json_NamaKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaKecamatan_3.addFeatures(features_NamaKecamatan_3);
var lyr_NamaKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaKecamatan_3, 
                style: style_NamaKecamatan_3,
                popuplayertitle: 'Nama Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/NamaKecamatan_3.png" /> Nama Kecamatan'
            });
var format_BatasAdministrasi_4 = new ol.format.GeoJSON();
var features_BatasAdministrasi_4 = format_BatasAdministrasi_4.readFeatures(json_BatasAdministrasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_4.addFeatures(features_BatasAdministrasi_4);
var lyr_BatasAdministrasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_4, 
                style: style_BatasAdministrasi_4,
                popuplayertitle: 'Batas Administrasi',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasi_4.png" /> Batas Administrasi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_RasioJenisKelaminKabupatenGunungkidul_2.setVisible(true);lyr_NamaKecamatan_3.setVisible(true);lyr_BatasAdministrasi_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_RasioJenisKelaminKabupatenGunungkidul_2,lyr_NamaKecamatan_3,lyr_BatasAdministrasi_4];
lyr_RasioJenisKelaminKabupatenGunungkidul_2.set('fieldAliases', {'WADMKC': 'Kecamatan', 'Join_Rasio': 'Rasio Jenis Kelamin (%)', });
lyr_NamaKecamatan_3.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'Join_Rasio': 'Join_Rasio', });
lyr_BatasAdministrasi_4.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'Join_Rasio': 'Join_Rasio', });
lyr_RasioJenisKelaminKabupatenGunungkidul_2.set('fieldImages', {'WADMKC': 'TextEdit', 'Join_Rasio': 'TextEdit', });
lyr_NamaKecamatan_3.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'Join_Rasio': 'TextEdit', });
lyr_BatasAdministrasi_4.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'Join_Rasio': 'TextEdit', });
lyr_RasioJenisKelaminKabupatenGunungkidul_2.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Rasio': 'inline label - always visible', });
lyr_NamaKecamatan_3.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'Join_Rasio': 'no label', });
lyr_BatasAdministrasi_4.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'Join_Rasio': 'no label', });
lyr_BatasAdministrasi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});