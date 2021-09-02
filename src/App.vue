<script setup>

import Navbar from './components/Navbar.vue';
import EsriMap from './components/EsriMap.vue';
</script>

<template>
<div class="content">
  <Navbar/>
  <EsriMap class="maps"/>
  
</div>
</template>

<style>
#app, html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  width:100%;
  margin:0;
  padding: 0;
  overflow-y:hidden!important; /* strange bulma issue */
}

.content{
  display:flex;
  flex-flow:column;
  height:100vh;
  width:100vw;
}
.maps{
  flex: 1;
}
</style>
