import { createRouter,createWebHistory } from "vue-router"

import Login from "./pages/Login.vue"
import index from "./pages/index.vue"
import index1 from "./pages/index1.vue"
import index2 from "./pages/index2.vue"
import index3 from "./pages/index3.vue"
import index4 from "./pages/index4.vue"
import index5 from "./pages/index5.vue"
import index6 from "./pages/index6.vue"
import index7 from "./pages/index7.vue"
import pagoefectivo from "./pages/pagoefectivo.vue"
import pagoefectivopendiente from "./pages/pagoefectivopendiente.vue"
import avancematricula from "./pages/avancematricula.vue"
import confirmacion from "./pages/confirmacion.vue"
import matriculador from "./pages/matriculador.vue"

import requisitos from "./pages/requisitos.vue"

import usuario from "./pages/usuario.vue"



pagoefectivopendiente
const routes=[
    {
        name:'index',
        path:'/index',
        component:index
    },
    {
        name:'login',
        path:'/',
        component:Login
    },
    {
        name:'usuario',
        path:'/usuario',
        component:usuario
    },
    {
        name:'index1',
        path:'/index1',
        component:index1
    },
    {
        name:'index2',
        path:'/index2',
        component:index2
    },
    {
        name:'index3',
        path:'/index3',
        component:index3
    },
    {
        name:'index4',
        path:'/index4',
        component:index4
    },
    {
        name:'index5',
        path:'/index5',
        component:index5
    },
    {
        name:'index6',
        path:'/index6',
        component:index6
    } ,
    {
        name:'index7',
        path:'/index7',
        component:index7
    } ,
    {
        name:'pagoefectivo',
        path:'/pagoefectivo',
        component:pagoefectivo
    },
    {
        name:'pagoefectivopendiente',
        path:'/pagoefectivopendiente',
        component:pagoefectivopendiente
    },
    {
        name:'requisitos',
        path:'/requisitos',
        component:requisitos
    },
    {
        name:'avancematricula',
        path:'/avancematricula',
        component:avancematricula
    },
    {
        name:'confirmacion',
        path:'/confirmacion',
        component:confirmacion
    },
    {
        name:'matriculador',
        path:'/matriculador',
        component:matriculador
    }
];

const router =createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router