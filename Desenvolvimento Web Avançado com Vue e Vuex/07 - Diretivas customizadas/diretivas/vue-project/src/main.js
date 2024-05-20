import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vue = createApp(App)

vue.directive('texto', {
    // chamado antes que os atributos do elemento ou ouvintes de event (event listeners) sejam aplicados
    created(el, binding) {
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

vue.directive('posicao', {
    created(el, binding) {
        const posicoesPossiveis = ['relative', 'fixed', 'absolute']
        if (posicoesPossiveis.includes(binding?.arg)) {
            el.style.position = binding?.arg
            el.style.top = `${binding.value}px`
        }
    }
})

vue.directive('informacao', {
    created(el, binding) {
        console.log('el:', el)
        console.log('binding:', binding)

        let funcao = null

        if (binding.arg === undefined || binding.arg === 'simples') {
            funcao = function() {
                let informacaoSpan = document.createElement('spam')
                informacaoSpan.style.position = 'absolute'
                informacaoSpan.style.padding = '2px'
                informacaoSpan.style.background = '#ddd'
                informacaoSpan.style.fontSize = '8px'
                informacaoSpan.style.color = '#000'
                informacaoSpan.innerText = binding.value

                el.appendChild(informacaoSpan)

                informacaoSpan.addEventListener('click', (event) => {
                    event.stopPropagation()
                    informacaoSpan.remove()
                })
            }
        }

        if (binding.arg === 'destacado') {
            funcao = function() {
                let informacaoDivContainer = document.createElement('div')
                let informacaoDiv = document.createElement('div')
                informacaoDiv.innerText = binding.value
                
                informacaoDivContainer.style.width = '100%'
                informacaoDivContainer.style.height = '100%'
                informacaoDivContainer.style.display = 'flex'
                informacaoDivContainer.style.flexDirection = 'row'
                informacaoDivContainer.style.alignItems = 'center'
                informacaoDivContainer.style.justifyContent = 'center'
                informacaoDivContainer.style.background = '#ddd'
                informacaoDivContainer.style.position = 'absolute'
                informacaoDivContainer.style.top = '0'
                informacaoDivContainer.style.zIndex= '10'

                informacaoDiv.style.padding = '30px'
                informacaoDiv.style.background = '#fba'
                informacaoDiv.style.color = '#000'

                informacaoDivContainer.appendChild(informacaoDiv)
                el.appendChild(informacaoDivContainer)

                informacaoDivContainer.addEventListener('click', (event) => {
                    event.stopPropagation()
                    informacaoDivContainer.remove()
                })
            }
        }

        if (binding.modifiers['umClickMouse']) {
            el.addEventListener('click', funcao)
        }

        if (binding.modifiers['doisClicksMouse']) {
            el.addEventListener('dblclick', funcao)
        }
    }
})

vue.use(createPinia())
vue.use(router)

vue.mount('#app')
