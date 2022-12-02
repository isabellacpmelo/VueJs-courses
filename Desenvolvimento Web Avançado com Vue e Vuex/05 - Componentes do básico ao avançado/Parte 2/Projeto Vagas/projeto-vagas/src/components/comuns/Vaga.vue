<!-- @format -->

<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        Salário: R$ {{ salario }} | Modalidade: {{ modalidade }} | Tipo:
        {{ tipo }}
        | Data: {{ publicacao }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vaga",
  props: {
    titulo: String,
    descricao: String,
    salario: Number,
    modalidade: String,
    tipo: String,
    publicacao: String,
  },
  created() {
    console.log(this.titulo, typeof this.titulo);
    console.log(this.descricao, typeof this.descricao);
    console.log(this.salario, typeof this.salario);
    console.log(this.modalidade, typeof this.modalidade);
    console.log(this.tipo, typeof this.tipo);
    console.log(this.publicacao, typeof this.publicacao);
  },
};
</script>
