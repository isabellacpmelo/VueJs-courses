<!-- @format -->

<template>
  <div>
    <alerta />
    <vagas-favoritas />
    <Topo @navegar="componente = $event" />
    <Conteudo v-if="visibilidade" :conteudo="componente" />
  </div>
</template>

<script>
import Alerta from "./components/comuns/Alerta.vue";
import Conteudo from "./components/layouts/Conteudo.vue";
import Topo from "./components/layouts/Topo.vue";
import VagasFavoritas from "./components/comuns/VagasFavoritas.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
  }),
  components: {
    Alerta,
    Conteudo,
    Topo,
    VagasFavoritas,
  },
};
</script>

<style scoped></style>
