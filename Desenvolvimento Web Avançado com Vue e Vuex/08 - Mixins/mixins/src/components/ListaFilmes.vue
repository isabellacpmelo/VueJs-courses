<script>
export default {
    name: 'ListaFilmes',
    data: () => ({
        filmes: [],
        filme: '',
    }),
    methods: {
        adicionarFilme() {
            this.filmes.push(this.filme)
        }
    }
}
</script>

<template>
    <div>
        <h3>Lista Filmes</h3>
        <input
            v-model="filme"
            type="text"
            placeholder="Nome do Filme"
        >
        <button type="button" @click="adicionarFilme">
            Adicionar
        </button>
        <br>
        <ul>
            <li v-for="(filme, index) in filmes" :key="index">
                {{ filme }}
            </li>
        </ul>
    </div>
</template>
