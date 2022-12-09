<!-- @format -->

<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "Conteudo",
  props: {
    conteudo: {
      type: String,
      required: true,
    },
  },
  components: {
    Home,
    PublicarVaga,
  },
};
</script>
