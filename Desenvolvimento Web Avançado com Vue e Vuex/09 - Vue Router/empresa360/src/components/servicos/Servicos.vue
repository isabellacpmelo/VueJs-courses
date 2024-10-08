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
            <div v-for="dado in dados" :key="dado.id" class="col mb-2">
                <div class="card" style="width: 11rem">
                    <img class="card-img-top" :src="`/img/${dado.icone}`">
                    <div class="card-body text-center">
                        <router-link 
                            :to="{ name: 'servico', params: {id: dado.id} }"
                            >
                            <p class="card-text">
                                {{ dado.servico}}
                            </p>
                            </router-link>
                    </div>
                </div>
            </div>
        </div>

        <router-view class="mt-3" /> <!-- default -->
        <router-view name="opcoes" class="mt-3" />
        <router-view name="indicadores" class="mt-3" />
    </div>
</template>