import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vue = createApp(App)

vue.directive('texto', {
    // chamado antes que os atributos do elemento ou ouvintes de event (event listeners) sejam aplicados
    created(el, binding) {
        console.log(binding.value)
        if(binding?.value?.cor)
            el.style.color = binding.value.cor
        if(binding?.value?.tamanhoFonte)
            el.style.fontSize = binding.value.tamanhoFonte

        let textoOriginal = el.innerText
        let tamanhoOriginal = textoOriginal.length
        let textoAjustado = ''

        const totalCaracteres = binding?.value?.totalCaracteres ? binding.value.totalCaracteres : 25
        if(tamanhoOriginal > totalCaracteres)
            textoAjustado = `${textoOriginal.substring(0, totalCaracteres - 3)}...`
        else
            textoAjustado = textoOriginal

        el.innerText = textoAjustado
    }
})

vue.use(createPinia())
vue.use(router)

vue.mount('#app')
