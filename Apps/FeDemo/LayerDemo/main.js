require([
            'Cesium'
        ],
    function(
        Cesium
    ) {
    'use strict';

    var viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider : new Cesium.UrlTemplateImageryProvider({
            url : 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gail'
        }),
        terrainProvider : new Cesium.CesiumTerrainProvider({
            url : 'http://data.marsgis.cn/terrain/'
        })
    });

});
