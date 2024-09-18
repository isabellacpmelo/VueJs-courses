<!-- eslint-disable vue/multi-word-component-names -->
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
    name: 'Servico',
    mixins: [ApiMixin],
    created () {
        this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
    },
    watch: {
        // eslint-disable-next-line no-unused-vars
        $route(to, from) {
            this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        }
    },
}
</script>

<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            {{ dados.servico }}
        </div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
</template>