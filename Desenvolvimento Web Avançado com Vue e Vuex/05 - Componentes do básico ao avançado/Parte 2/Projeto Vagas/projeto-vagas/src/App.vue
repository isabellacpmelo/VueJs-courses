<!-- @format -->

<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">
      Desmontar o componente Conteudo
    </button>
    <Topo :funcaoCallback="acao" />
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
    acao(p1, p2) {
      console.log(
        "Funão de callback definida no componente Pai e chamada no componente Filho"
      );
      console.log(p1);
      console.log(p2);
    },
  },
};
</script>

<style scoped></style>
