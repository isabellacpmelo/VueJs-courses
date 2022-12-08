<!-- @format -->

<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">
      Desmontar o componente Conteudo
    </button>
    <Topo
      @nomeDoEventoQueSeraCapturadoNoComponentePai="$event('Texto 1', 125)" />
    <Conteudo v-if="visibilidade" />
  </div>
</template>

<script>
import Conteudo from "./components/layouts/Conteudo.vue";
import Topo from "./components/layouts/Topo.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
  }),
  components: {
    Conteudo,
    Topo,
  },
  methods: {
    desmontarComponente() {
      this.visibilidade = false;
    },
    acao(event) {
      console.log(event.msg);
    },
  },
};
</script>

<style scoped></style>
