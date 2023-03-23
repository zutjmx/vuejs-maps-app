import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoienV0am14IiwiYSI6ImNrcWl0dGppYjJyZzEzMG1veTZ4M3dhc2cifQ.l7kSx843R1kqNxcTlxA7qg';


if(!navigator.geolocation) {
    alert('Tu navegador no soporta Geolocation');
    throw new Error('Tu navegador no soporta Geolocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

