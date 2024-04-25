<template>
    <div>
      <i 
        v-for="estrela in estrelas"
        :key="estrela.id"
        @click="marcarAvaliacao(estrela.id)"
        :class="estrela.estilo"
      />

      {{ avaliacao }}
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
      avaliacao: 0,
    }
  ),
  created() {
    this.iniciarEstrelas()
  },
  methods: {
    iniciarEstrelas() {
      for(let i = 0; i < this.numeroEstrelas; i++) {
        this.estrelas[i] = { id: i, estilo: 'bi-star estrela'}
      }
    },
    marcarAvaliacao(e) {
      this.iniciarEstrelas()

      this.avaliacao = e + 1
      for(let i = 0; i < this.avaliacao; i++) {
        this.estrelas[i] = { id: i, estilo: 'bi-star-fill estrela preenchida'}
      }
    }
  }
}
</script>

<style scoped>
  .estrela {
    font-size: 1.5rem;
    color: #ccc;
    margin-left: 1px;
    margin-right: 1px;
  }

  .preenchida {
    color: #FC0;
  }
</style>