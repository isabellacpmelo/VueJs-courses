<!-- @format -->

<template>
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
            Informe palavras que esteja relacionadas com o título da vaga que
            você procura
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-outline-dark mt-2" type="button">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesquisarVaga",
};
</script>
