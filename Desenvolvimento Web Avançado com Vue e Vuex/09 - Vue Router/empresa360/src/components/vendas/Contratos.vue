<!-- eslint-disable vue/multi-word-component-names -->
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
    name: 'Leads',
    mixins: [ApiMixin],
    data: () => ({
        // http://localhost:3000/contratos?_expand=lead&_expand=servico&data_inicio_gte=2022-01-01&data_inicio_lte=2022-01-31&id_like=3
        parametrosDeRelacionamento: '_expand=lead&_expand=servico',
        formPesquisa: {
            id_like: '',
            data_inicio_gte: '',
            data_inicio_lte: '',
        },
    }),
    methods: {
        pesquisar() {
            console.log(this.formPesquisa)

            Object.keys(this.formPesquisa).forEach(chave => {
                if(this.formPesquisa[chave] == '') delete this.formPesquisa[chave]
            })

            console.log(this.formPesquisa)

            const queryParams = new URLSearchParams(this.formPesquisa).toString()
            console.log(queryParams)
            const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
            this.getDadosApi(url)
        }
    },
    created() {
        const queryParams = new URLSearchParams(this.$route.query).toString()
        console.log(queryParams)
        const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
        this.getDadosApi(url)
    },
    beforeRouteUpdate(to, from, next) {
        // console.log(to.query) // objeto => URLSearchParams
        const queryParams = new URLSearchParams(to.query).toString()
        // console.log(queryParams)
        const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
        console.log(url)
        this.getDadosApi(url)

        next()
    }

}
</script>

<template>
    <div>
        <div class="card mb-4">
            <div class="card-header">Contratos</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <label class="form-label">ID Contrato:</label>
                        <input type="text" class="form-control" v-model="formPesquisa.id_like">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Data início:</label>
                        <div class="input-group">
                            <input type="date" class="form-control" v-model="formPesquisa.data_inicio_gte">
                            <input type="date" class="form-control" v-model="formPesquisa.data_inicio_lte">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="pesquisar">Pesquisar</button>
            </div>
        </div>

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
                    <td>{{ dado.lead.nome }}</td>
                    <td>{{ dado.servico.servico }}</td>
                    <td>{{ dado.data_inicio }}</td>
                    <td>{{ dado.data_fim }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>