<!-- @format -->

<template>
  <div>
    <Topo />
    <Conteudo />
  </div>
</template>

<script>
import Conteudo from "./components/layouts/Conteudo.vue";
import Topo from "./components/layouts/Topo.vue";

export default {
  components: {
    Conteudo,
    Topo,
  },
};
</script>
