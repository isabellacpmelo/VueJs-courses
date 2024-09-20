import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Servico from '@/components/servicos/Servico.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue';
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue';
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
        alias: '/app',
        component: Home,
        children: [
            { 
                path: 'vendas',
                component: Vendas, 
                children: [
                    {
                        path: 'leads',
                        component: Leads,
                        name: 'leads'
                    },
                    {
                        path: 'leads/:id',
                        alias: ['/l:id', 'pessoa/:id', '/:id'],
                        component: Lead,
                        name: 'lead'
                    },
                    {
                        path: 'contratos',
                        component: Contratos,
                        name: 'contratos'
                    },
                    {
                        path: '',
                        component: VendasPadrao,
                        name: 'vendas'
                    },
                ]
            },
            {
                path: 'servicos', 
                component: Servicos,
                name: 'servicos',
                children: [
                    {
                        path: ':id',
                        alias: '/s/:id',
                        name: 'servico',
                        components: {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores,
                        },
                    },
                ]
            },
            {
                path: 'dashboard', 
                components: {
                    default: Dashboard,
                    rodape: DashboardRodape,
                }
            },
            {
                path: '/redirecionamento-1',
                redirect: '/home/servicos',
            },
            {
                path: '/redirecionamento-2',
                redirect: { name: 'leads' },
            },
            {
                path: '/redirecionamento-3',
                redirect: '/home/vendas',
            },
            {
                path: '/redirecionamento-4',
                redirect: { name: 'vendas' },
            },
            {
                path: '/redirecionamento-5',
                redirect: to => {
                    // podemos programar algo antes do redirecionamento ser efetivado
                    console.log(to)

                    // return '/home/vendas'
                    return { name: 'vendas' }
                },
            },
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