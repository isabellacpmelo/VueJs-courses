<!-- @format -->

<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Pesquisar Vagas</h2>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="">Título da Vaga</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pesquise por palavras chaves, por exemplo 'PHP', 'Pleno', 'Analista'" />
                <small class="form-text text-muted">
                  Informe palavras que esteja relacionadas com o título da vaga
                  que você procura
                </small>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn btn-outline-dark mt-2" type="button">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
        <div class="h-100 p-5 rounded-3 border bg-dark text-white">
          <p>Vagas abertas</p>
          <h2>25</h2>
        </div>
      </div>
      <div class="col-4">
        <div class="h-100 p-5 rounded-3 border bg-dark text-white">
          <p>Profissionais Cadastrados</p>
          <h2>125</h2>
        </div>
      </div>
      <div class="col-4">
        <div class="h-100 p-5 rounded-3 border bg-light text-dark">
          <p>Visitantes Online</p>
          <h2>15</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  activated() {
    console.log("Componente é ativado");
  },
  deactivated() {
    console.log("Componente é desativado");
  },
  beforeUnmount() {
    console.log("Antes de desmontar/destruir");
  },
  unmounted() {
    console.log("Desmontado/destruido");
  },
};
</script>

<style scoped></style>
