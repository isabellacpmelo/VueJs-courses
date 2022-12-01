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
        <Indicador
          titulo="Vagas abertas"
          indicador="25"
          bg="bg-dark"
          color="text-white" />
      </div>
      <div class="col-4">
        <Indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white" />
      </div>
      <div class="col-4">
        <Indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark" />
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
  },
  data: () => ({
    usuariosOnline: 0,
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000); //a cada 1s
  },
};
</script>

<style scoped></style>
