import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//  -- inicio rotas
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // routes: routes,
})

// -- fim rodas

const Vue = createApp(App)
Vue.use(router) // adicionando as configurações de rotas a instância do Vue
Vue.mount('#app')
