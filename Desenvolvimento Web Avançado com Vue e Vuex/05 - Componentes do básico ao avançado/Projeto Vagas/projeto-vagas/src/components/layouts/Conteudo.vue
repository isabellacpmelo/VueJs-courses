<!-- @format -->

<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <!-- <p>Conteudo - Propriedade $style: {{ $style }}</p> -->
    <!-- <div :class="$style.teste">Class teste</div>
    <div :id="$style['teste-1']">ID teste-1</div> -->
    <home-view />
    <publicar-vaga />
  </div>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "Conteudo",
  components: {
    HomeView: Home,
    PublicarVaga,
  },
  data: () => ({
    teste: "O componente foi criado",
    titulo: "Componente Conteudo",
  }),
  methods: {
    atualizarComponente() {
      this.titulo += "*";
    },
  },
  created() {
    console.log("Criado", this.teste);
  },
  beforeCreate() {
    console.log("Antes de criar", this.teste);
  },
  beforeMount() {
    console.log("Antes de montar o template");
  },
  mounted() {
    console.log("Montado");
  },
  beforeUpdate() {
    console.log("Antes de atualizar");
  },
  updated() {
    console.log("Atualizado");
  },
  beforeUnmount() {
    console.log("Antes de desmontar/destruir");
  },
  unmounted() {
    console.log("Desmontado/destruido");
  },
  // errorCaptured() {
  //   console.log("Erro capturado");
  // },
  // renderTracked() {
  //   console.log("Re-renderização rastreada");
  // },
  // renderTriggered() {
  //   console.log("Re-renderização acionada");
  // },
  // activated() {
  //   console.log("Componente é ativado");
  // },
  // deactivated() {
  //   console.log("Componente é desativado");
  // },
};
</script>

<style module>
.teste {
  background-color: red;
}
#teste-1 {
  background-color: yellow;
}
</style>
