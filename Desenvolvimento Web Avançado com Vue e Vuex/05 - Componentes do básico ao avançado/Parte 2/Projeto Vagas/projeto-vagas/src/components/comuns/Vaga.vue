<!-- @format -->

<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo:
        {{ getTipo }}
        | Data: {{ publicacao }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vaga",
  props: {
    titulo: {
      type: String,
      required: true,
      //   validator(prop) {
      //     console.log("Prop: ", prop);
      //     if (prop.length < 6) return false;
      //     return true;
    },
    descricao: {
      type: String,
      required: true,
    },
    salario: {
      type: [Number, String],
      required: true,
    },
    modalidade: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    publicacao: {
      type: String,
    },
  },
  computed: {
    getModalidade() {
      switch (this.modalidade) {
        case "1":
          return "Home Office";
          "";
        case "2":
          return "Presencial";
          "";
      }
      return "";
    },
    getTipo() {
      switch (this.tipo) {
        case "1":
          return "CLT";
        case "2":
          return "PJ";
      }
      return "";
    },
  },
  //   created() {
  //     console.log(this.titulo, typeof this.titulo);
  //   },
};
</script>
