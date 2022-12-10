<!-- @format -->

<template>
  <div>
    <div class="alert alert-success" role="alert">
      <slot name="titulo">
        <h3>Título da mensagem de feedback</h3>
      </slot>
      <hr />
      <slot>
        <p>Mensagem de feedback</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alerta",
};
</script>
