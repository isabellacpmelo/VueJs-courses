<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    name: 'Lead',
    // created () {
    //     console.log(this.$route.params.id)
    // },
}
</script>

<template>
    <h5>Detalhes do Lead {{ $route.params.id }}</h5>
</template>