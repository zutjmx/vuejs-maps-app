/* eslint-disable */
import Mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();

        const {/* isLoading,*/  userLocation, isUserLocationReady} = usePlacesStore();

        const initMap = async () => {

            if(!mapElement.value) throw new Error('Elemento DIV no existe');
            if(!userLocation.value) throw new Error('No existe la ubicación del usuario');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });
        }

        onMounted(() => {
           if(isUserLocationReady.value) {
            return initMap();
           }
           //console.log('Aún no se tiene Geolocalización');            
        });

        watch(isUserLocationReady, (nuevoValor) => {
            if(isUserLocationReady.value) {
                initMap();
            }            
        });

        return {
            //isLoading, 
            //userLocation,
            isUserLocationReady,
            mapElement
        }
    }
});