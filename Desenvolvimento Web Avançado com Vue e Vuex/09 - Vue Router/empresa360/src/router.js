import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
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
                        path: 'leads/:id/:outroParametro',
                        props: true,
                        /*
                        props: {
                            id: 4,
                            outroParametro: 'pt-br'
                        },
                        */
                       /*
                       props: route => {
                            console.log('Rota ativa:', route)

                            let teste = route.query.idioma ? route.query.idioma : route.params.outroParametro

                            console.log(teste)
                            //?idioma=pt-br
                            // implementando uma lógica para definir as props que serão submetidas para o componente roteado

                            return {
                                id: parseInt(route.params.id) + 1,
                                outroParametro: teste
                            }
                        },
                       */
                        alias: [
                            '/l:id/:outroParametro',
                            'pessoa/:id/:outroParametro',
                            '/:id/:outroParametro'
                        ],
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
                        props: {
                            default: true,
                            indicadores: true,
                            opcoes: true,
                        },
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
        ]
    },
    {
        path: '/login',
        component: Login,
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
    {
        // path: '*',
        path: '/:catchAll(.*)*',
        component: PaginaNaoEncontrada
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // routes: routes,
})

export default router