<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" :href="url" target="_blank">
        <img src="/eonlogo.png" />
      </a>
      <span class="navbar-item name">{{ appTitle }}</span>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          A Starter Template
        </div>
      </div>
      <div class="navbar-end">
        <Login/>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
import {ref} from "vue";
import Login from './Login.vue';
export default ({
    setup() {
        const appTitle = ref('ArcGIS & Vite');
        const url= import.meta.env.VITE_URL;
        return {appTitle, url};
    },
    components:{Login}
})
</script>
