<script>
  export default {
    name: 'App',
  }
</script>

<template>
  <p 
    v-texto="{ cor: 'blue', tamanhoFonte: '200%', totalCaracteres: 15}"
  >
    Minha primeira diretiva customizada
  </p>
  <p
    v-texto="{ cor: 'orange', tamanhoFonte: '80%', totalCaracteres: 6}"
  >
    Teste
  </p>
</template>
