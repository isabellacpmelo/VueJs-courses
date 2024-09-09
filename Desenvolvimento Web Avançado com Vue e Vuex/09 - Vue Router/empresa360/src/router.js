import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue';
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Leads from '@/components/vendas/Leads.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'

const routes = [
    {
        path: '/',
        component: Site,
    },
    {
        path: '/home',
        component: Home,
        children: [
            { 
                path: 'vendas',
                component: Vendas, 
                children: [
                    {
                        path: 'leads',
                        component: Leads,
                    },
                    {
                        path: 'leads/:id',
                        component: Lead,
                    },
                    {
                        path: 'contratos',
                        component: Contratos,
                    },
                    {
                        path: '',
                        component: VendasPadrao,
                    },
                ]
            },
            {
                path: 'servicos', 
                component: Servicos 
            },
            {
                path: 'dashboard', 
                component: Dashboard
            }
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