<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    name: 'Opcoes',
    props: ['id'],
    created() {
        // console.log('Parametro via props', this.id)
    }
}
</script>

<template>
     <div>
        <h5>Componente Indicadores</h5>
        <p>Poderiamos recuperar as opções do serviço id {{ id }}</p>
    </div>
</template>