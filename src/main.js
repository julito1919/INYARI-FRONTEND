import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueAxios from 'vue-axios';
import Axios from 'axios'



import '@fortawesome/fontawesome-free/css/all.css'; 
import 'startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import 'startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js'
import 'startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'
import 'startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js'


import 'bootstrap/dist/js/bootstrap.js'



const app= createApp(App)

app.use(router);
app.use(VueSweetalert2);
app.use(VueAxios, Axios);
app.mount('#app');




