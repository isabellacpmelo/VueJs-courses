<!-- @format -->

<template>
  <div>
    <div :class="estiloAlerta" role="alert">
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
  props: { tipo: String },
  computed: {
    estiloAlerta() {
      switch (this.tipo) {
        case "erro":
          return "alert alert-danger";
        case "sucesso":
          return "alert alert-success";
        default:
          "alert alert-success";
      }
    },
  },
};
</script>
