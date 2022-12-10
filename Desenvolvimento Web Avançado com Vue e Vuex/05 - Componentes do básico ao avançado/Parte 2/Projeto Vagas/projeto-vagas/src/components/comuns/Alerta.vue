<!-- @format -->

<template>
  <div>
    <div class="alert alert-success" role="alert">
      <slot name="titulo"></slot>
      <hr />
      <slot name="descricao"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alerta",
};
</script>
