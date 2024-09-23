<!-- eslint-disable vue/multi-word-component-names -->
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
    name: 'Leads',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi('http://localhost:3000/contratos')
    }

}
</script>

<template>
    <div>
        <h5>Contratos</h5>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Lead</th>
                    <th scope="col">Serviço</th>
                    <th scope="col">Data Início</th>
                    <th scope="col">Data Fim</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dado in dados" :key="dado.id">
                    <td>{{ dado.id }}</td>
                    <td>{{ dado.leadId }}</td>
                    <td>{{ dado.servicoId }}</td>
                    <td>{{ dado.data_inicio }}</td>
                    <td>{{ dado.data_fim }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>