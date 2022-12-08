<!-- @format -->

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Vagas</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="navegarPara()">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="navegarPara()"
                >Publicar Vaga</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Topo",
  methods: {
    navegarPara() {
      // console.log("Chegamos até aqui");
      this.$emit("nomeDoEventoQueSeraCapturadoNoComponentePai", (p1, p2) => {
        console.log("emissão de callback emitida pelo componente filho");
        console.log("p1:", p1);
        console.log("p2:", p2);
      });
    },
  },
};
</script>
