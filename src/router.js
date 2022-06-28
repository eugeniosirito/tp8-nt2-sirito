//importar la dependecia de vue
import Vue from 'vue'

//importar la dependecia de vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Formulario from './componentes/Formulario.vue'
import Usuario from './componentes/Mockapi.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/' },
        { path: '/formulario', component: Formulario },
        { path: '/usuario', component: Usuario }
    ]
})