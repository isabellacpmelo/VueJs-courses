<script>
  export default {
    name: 'App',
    data: () => ({
      configuracaoTexto: {
        cor: 'orange', 
        tamanhoFonte: '80%',
        totalCaracteres: 6,
      }
    })
  }
</script>

<template>
  <p 
    v-texto="{ cor: 'blue', tamanhoFonte: '200%', totalCaracteres: 15}"
  >
    Minha primeira diretiva customizada
  </p>
  <p
    v-texto="configuracaoTexto"
  >
    Teste
  </p>
  <div v-posicao:absolute="30" v-texto="{cor: 'green'}">
    Olá! eu sou um binding de argumento e valor.
  </div>

  <span>Código A:</span>
  <input type="text">
  <span
    v-informacao:simples.umClickMouse="'Você encontrará o código A na parte frontal do equipamento'"
  >
   <strong class="info">i</strong>
  </span>

  <span>Código B:</span>
  <input type="text">
  <span
    v-informacao:simples.doisClicksMouse="'Você encontrará o código B na parte frontal do equipamento'"
  >
   <strong class="info">i</strong>
  </span>
</template>

<style>
input {
  margin: 5px;
}

.info {
  background-color: rgb(230, 185, 126);
  color: black;
  font-weight: 800;
  padding: 1px;
  width: 10px;
  height: 30px;
  border: 1px solid #b99797;
  border-radius: 999px;
  cursor: pointer;
  margin: 2px;
}
</style>