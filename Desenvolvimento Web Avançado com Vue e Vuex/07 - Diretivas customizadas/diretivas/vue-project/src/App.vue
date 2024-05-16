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
</template>
