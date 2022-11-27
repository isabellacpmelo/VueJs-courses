<!-- @format -->

<template>
  <div>
    <h1>Componente Conteudo</h1>
    <p>Conteudo - Propriedade $style: {{ $style }}</p>
    <div :class="$style.teste">Class teste</div>
    <div :id="$style['teste-1']">ID teste-1</div>
    <home-view />
    <publicar-vaga />
  </div>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "Conteudo",
  components: {
    HomeView: Home,
    PublicarVaga,
  },
};
</script>

<style module>
.teste {
  background-color: red;
}
#teste-1 {
  background-color: yellow;
}
</style>
