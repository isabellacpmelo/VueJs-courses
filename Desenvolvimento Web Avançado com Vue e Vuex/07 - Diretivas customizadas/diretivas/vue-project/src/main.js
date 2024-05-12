import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vue = createApp(App)

vue.directive('teste', {
    // chamado antes que os atributos do elemento ou ouvintes de event (event listeners) sejam aplicados
    created() {
        console.log('A diretiva foi aplicada com sucesso')
    }
})

vue.use(createPinia())
vue.use(router)

vue.mount('#app')
