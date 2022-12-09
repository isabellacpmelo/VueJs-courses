<!-- @format -->

<template>
  <div>
    <Topo @navegar="componente = $event" />
    <Conteudo v-if="visibilidade" :conteudo="componente" />
  </div>
</template>

<script>
import Conteudo from "./components/layouts/Conteudo.vue";
import Topo from "./components/layouts/Topo.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
  }),
  components: {
    Conteudo,
    Topo,
  },
};
</script>

<style scoped></style>
