<!-- @format -->

<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div>{{ titulo }}</div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label">Favoritar</label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo:
        {{ getTipo }}
        | Data: {{ getPublicacao }}
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
    },
    modalidade: {
      type: String,
    },
    tipo: {
      type: String,
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
        case "2":
          return "Presencial";
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
    getPublicacao() {
      let dataPublicacao = new Date(this.publicacao);

      return dataPublicacao.toLocaleDateString("pt-BR");
    },
  },
  //   created() {
  //     console.log(this.titulo, typeof this.titulo);
  //   },
};
</script>
