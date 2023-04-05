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

            const myLocationPopUp = new Mapboxgl.Popup({offset: [0, -25]})
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Esta es mi ubicación</h4>
                    <p>No muy precisa en Coyoacán</p>
                    <p>${userLocation.value}</p>
                `);

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopUp)
                .addTo(map);

            //TODO: Establecer el mapa en Vuex


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