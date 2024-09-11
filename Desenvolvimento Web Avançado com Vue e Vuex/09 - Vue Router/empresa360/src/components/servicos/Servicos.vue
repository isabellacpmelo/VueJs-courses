<!-- eslint-disable vue/multi-word-component-names -->
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
    name: 'Servicos',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi('http://localhost:3000/servicos')
    }

}
</script>

<template>
    <div>
        <h5>Serviços</h5>
        <hr>
        <div class="row">
            <div v-for="dado in dados" :key="dado.id" class="col">
                <div class="card" style="width: 11rem">
                    <img class="card-img-top" :src="`/img/${dado.icone}`">
                    <div class="card-body text-center">
                        <p class="card-text">
                            {{ dado.servico}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>