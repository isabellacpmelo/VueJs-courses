<!-- @format -->

<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
        <Indicador />
      </div>
      <div class="col-4">
        <Indicador />
      </div>
      <div class="col-4">
        <Indicador />
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
export default {
  components: {
    PesquisarVaga,
    Indicador,
  },
  name: "Home",
  activated() {
    console.log("Componente é ativado");
  },
  deactivated() {
    console.log("Componente é desativado");
  },
  beforeUnmount() {
    console.log("Antes de desmontar/destruir");
  },
  unmounted() {
    console.log("Desmontado/destruido");
  },
};
</script>

<style scoped></style>
