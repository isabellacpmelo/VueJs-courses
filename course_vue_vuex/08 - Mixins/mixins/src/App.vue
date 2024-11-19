<script>
import ListaFilmes from './components/ListaFilmes.vue';
import ListaPessoas from './components/ListaPessoas.vue';
import ListaVideoGames from './components/ListaVideoGames.vue';

export default {
  components: {
    ListaFilmes,
    ListaPessoas,
    ListaVideoGames,
  }
}
</script>

<template>
  <div style="display: flex; flex-direction: row;">
    <div style="flex-basis: 33%;">
      <ListaFilmes />
    </div>
    <div style="flex-basis: 33%;">
      <ListaPessoas />
    </div>
    <div style="flex-basis: 33%;">
      <ListaVideoGames />
    </div>
  </div>
</template>
