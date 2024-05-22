import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import texto from './directives/texto.js'
import posicao from './directives/posicao.js'
import informacao from './directives/informacao'

const vue = createApp(App)

vue.directive('texto', texto)

vue.directive('posicao', posicao)

vue.directive('informacao', informacao)

vue.use(createPinia())
vue.use(router)

vue.mount('#app')
