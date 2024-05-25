<script>
import listaMixin from '@/mixins/listaMixin'
import removerItemListaMixin from '@/mixins/removerItemListaMixin'

export default {
    name: 'ListaVideoGames',
    data: () => ({
        titulo: 'Lista Video Games'
    }),
    mixins: [listaMixin, removerItemListaMixin]
}
</script>

<template>
    <div>
        <h3>{{ titulo }}</h3>
        <input
            v-model="item"
            type="text"
            placeholder="Nome da pessoa"
        >
        <button type="button" @click="adicionarItem">
            Adicionar
        </button>
        <br>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
            </li>
        </ul>
        <button type="button" @click="removerItem">
            Remover
        </button>
    </div>
</template>
