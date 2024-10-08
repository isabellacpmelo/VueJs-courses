<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    name: 'Indicadores',
    props: ['id'],
    created() {
        // console.log('props:', this.id)
    }
}
</script>

<template>
    <div>
        <h5>Componente Indicadores</h5>
        <p>Poderiamos recuperar os indicadores do serviço id {{ id }}</p>
    </div>
</template>