<template>
  <MapView/>
</template>

<script lang="ts">
import MapView from '@/components/mapview/MapView.vue';
import { usePlacesStore } from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Home',
  components: {
    MapView
  },
  setup() {
      usePlacesStore();
  },
});
</script>
