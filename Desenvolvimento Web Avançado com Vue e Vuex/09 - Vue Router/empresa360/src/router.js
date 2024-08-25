import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'

const routes = [
    {
        path: '/',
        component: Site,
    },
    {
        path: '/home',
        component: Home,
        children: [
            { path: 'vendas', component: Vendas },
            { path: 'servicos', component: Servicos }
        ]
    },
    {
        path: '/login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // routes: routes,
})

export default router