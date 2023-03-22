import { defineComponent, onMounted, ref } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();

        const {/* isLoading,  userLocation,*/ isUserLocationReady} = usePlacesStore();

        onMounted(() => {
           console.log(mapElement.value); 
        });

        return {
            //isLoading, 
            //userLocation,
            isUserLocationReady,
            mapElement
        }
    }
});