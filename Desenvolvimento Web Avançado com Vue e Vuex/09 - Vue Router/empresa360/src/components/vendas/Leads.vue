<!-- eslint-disable vue/multi-word-component-names -->
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
    name: 'Leads',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi('http://localhost:3000/leads')
    },
    // beforeRouteEnter(to, from, next) {}
    beforeRouteEnter() {
        console.log('Guarda de componente beforeRouteEnter:', 'Método executado dentro do componente')
    }

}
</script>

<template>
    <div>
        <h5>Leads</h5>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">TELEFONE</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dado in dados" :key="dado.id">
                    <td>{{ dado.id }}</td>
                    <td>{{ dado.nome }}</td>
                    <td>{{ dado.telefone }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'lead', 
                                params: {id: dado.id, outroParametro: `teste_${dado.id}`}
                                }"
                            class="btn btn-sm btn-primary"
                        >
                            <i
                                class="bi bi-pencil-square"
                                style="cursor: pointer" 
                            />
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>