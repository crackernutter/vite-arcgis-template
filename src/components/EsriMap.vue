<template>
  <div class="esri-wrapper">
    <div id="esrimap" ref="esrimap"></div>
  </div>
</template>
<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { nextTick } from "vue";

export default ({
    setup() {
        const esrimap = new Map({
      basemap: "satellite",
    });
    const view = new MapView({
      container: "esrimap",
      map: esrimap,
      center: [-98, 37],
      zoom: 5,
    });
    return {esrimap, view}
    },
    created() {
    nextTick(() => {
      this.view.container = this.$refs.esrimap;
    });
  }
})
</script>
<style scoped>
.esri-wrapper,
#esrimap {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
