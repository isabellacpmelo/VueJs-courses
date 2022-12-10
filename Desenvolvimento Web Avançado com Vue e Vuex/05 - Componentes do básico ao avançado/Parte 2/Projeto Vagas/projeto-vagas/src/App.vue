<!-- @format -->

<template>
  <div>
    <vagas-favoritas />

    <Topo @navegar="componente = $event" />

    <alerta v-if="exibirAlerta">
      <template v-slot:titulo>
        <h5>Titulo do alerta</h5>
      </template>
      <template v-slot:descricao>
        <p>Descricao do alerta</p>
      </template>
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
