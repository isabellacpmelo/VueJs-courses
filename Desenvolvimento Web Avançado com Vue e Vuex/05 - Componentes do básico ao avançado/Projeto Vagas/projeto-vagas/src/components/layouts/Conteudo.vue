<!-- @format -->

<template>
  <div>
    <p>Conteudo</p>
    <home-view />
    <publicar-vaga />
  </div>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "../views/PublicarVaga.vue";

export default {
  name: "Conteudo",
  components: {
    HomeView: Home,
    PublicarVaga,
  },
};
</script>
