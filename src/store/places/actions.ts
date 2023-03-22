import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit }  ) {
        //TODO: Colocar un loading.
        navigator.geolocation.getCurrentPosition(
            ({coords}) => commit('setLngLat', coords),
            (err) => {
                console.error(err);
                throw new Error('Sin geolocalización');
            }
        );
    }
}



export default actions;
