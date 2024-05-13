import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vue = createApp(App)

vue.directive('texto', {
    // chamado antes que os atributos do elemento ou ouvintes de event (event listeners) sejam aplicados
    created(el) {
        console.log(el.style)
        el.style.color = 'red'
        el.style.fontSize = '150%'

        let textoOriginal = el.innerText
        let tamanhoOriginal = textoOriginal.length
        let textoAjustado = ''
        // truncar o texto em 22 caracter e adicionar '...'
        if(tamanhoOriginal > 25)
            textoAjustado = `${textoOriginal.substring(0, 22)}...`
        else
            textoAjustado = textoOriginal

        el.innerText = textoAjustado
    }
})

vue.use(createPinia())
vue.use(router)

vue.mount('#app')
