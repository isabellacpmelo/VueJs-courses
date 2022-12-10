<!-- @format -->

<template>
  <div>
    <vagas-favoritas />
    <Topo @navegar="componente = $event" />
    <alerta v-if="exibirAlerta">
      <div class="alert alert-success" role="alert">
        <h5>Título do alerta</h5>
        <hr />
        <p>Descricao do alerta</p>
      </div>
    </alerta>
    <Conteudo v-if="visibilidade" :conteudo="componente" />
  </div>
</template>

<script>
import Alerta from "./components/comuns/Alerta.vue";
import Conteudo from "./components/layouts/Conteudo.vue";
import Topo from "./components/layouts/Topo.vue";
import VagasFavoritas from "./components/comuns/VagasFavoritas.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
    exibirAlerta: false,
  }),
  components: {
    Alerta,
    Conteudo,
    Topo,
    VagasFavoritas,
  },
  mounted() {
    this.emitter.on("alerta", () => {
      this.exibirAlerta = true;
      setTimeout(() => (this.exibirAlerta = false), 3000);
    });
  },
};
</script>

<style scoped></style>
