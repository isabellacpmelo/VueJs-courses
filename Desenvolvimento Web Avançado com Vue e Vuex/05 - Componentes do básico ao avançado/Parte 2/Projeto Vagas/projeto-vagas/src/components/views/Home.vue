<!-- @format -->

<template>
  <div>
    <h1>Componente Home</h1>
  </div>
</template>

<script>
export default {
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
