<!-- @format -->

<template>
  <div>
    <div v-for="(vaga, index) in vagas" :key="index" class="row mt-5">
      <div class="col">
        <Vaga v-bind="vaga" />
      </div>
    </div>
  </div>
</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "ListaVagas",
  props: {
    vagas: {
      type: Array,
    },
  },
  components: {
    Vaga,
  },
};
</script>
