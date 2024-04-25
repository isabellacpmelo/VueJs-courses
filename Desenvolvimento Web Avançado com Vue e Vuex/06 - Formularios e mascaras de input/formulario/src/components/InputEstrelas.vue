<template>
    <div>
      <i v-for="estrela in estrelas" :key="estrela.id" :class="estrela.estilo"></i>
    </div>
</template>

<script>
export default {
  name: 'InputEstrelas',
  props: {
    numeroEstrelas: {
      type: Number,
      required: true
    }
  },
  data: () => (
    {
      estrelas: [],
    }
  ),
  created() {
    this.iniciarEstrelas();
  },
  methods: {
    iniciarEstrelas() {
      for(let i = 0; i < this.numeroEstrelas; i++) {
        this.estrelas[i] = { id: i, estilo: 'bi-star-fill estrela'}
      }
    }
  }
}
</script>

<style scoped>
  .estrela {
    font-size: 1.5rem;
    color: #999;
    margin-left: 1px;
    margin-right: 1px;
  }
</style>