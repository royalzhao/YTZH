import Vue from 'vue'
import AMap from 'vue-amap/dist';

Vue.use(AMap)
AMap.initAMapApiLoader({
    // 申请的高德key
    key: '3c16d5b586c54f89af0c95ad48fe3c9f',
    // 插件集合
    plugin: ['']
});