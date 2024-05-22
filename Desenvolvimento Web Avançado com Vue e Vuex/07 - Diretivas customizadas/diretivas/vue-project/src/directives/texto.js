// chamado antes que os atributos do elemento ou ouvintes de event (event listeners) sejam aplicados
export default{
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
}