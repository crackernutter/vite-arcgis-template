import { createApp } from 'vue'
import  store  from './store'
import App from './App.vue'

import '@arcgis/core/assets/esri/themes/light/main.css';
import 'bulma/css/bulma.min.css';

createApp(App).use(store).mount('#app')
