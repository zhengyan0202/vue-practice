<template>
    <el-row class="home-wrap">
        <el-col class="map-wrap">
            <div id="map"></div>
        </el-col>
    </el-row>
</template>
<script>
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import {defaults as defaultControls, ScaleLine, MousePosition} from 'ol/control'
import 'ol/ol.css'

//Open Street Map 地图层
let OSM = new TileLayer({
        source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
    });
// 高德地图层
let gaodeMapLayer = new TileLayer({
        source: new XYZ({
            url:'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
        })
    });
// google地图层
let googleMapLayer = new TileLayer({
        source: new XYZ({
            url:'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
        })
    });

export default {
    data() {
        return {

        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            var map = new Map({ 
                target: 'map',
                layers: [gaodeMapLayer],
                view: new View({
                    projection: 'EPSG:4326',
                    center: [108.93676, 34.28466],
                    zoom: 4,
                    minZoom: 3,
                    maxZoom: 20
                }),
                controls: defaultControls().extend([
                    new ScaleLine(),
                    new MousePosition()
                ])
            });
        }
    }
}
</script>
<style scoped>
    .home-wrap{
        height: 100%;
        width: 100%;
    }
    .map-wrap{
        width: 100%;
        height: 100%;
    }
    #map{
        width: 100%;
        height: 100%;
    }
</style>