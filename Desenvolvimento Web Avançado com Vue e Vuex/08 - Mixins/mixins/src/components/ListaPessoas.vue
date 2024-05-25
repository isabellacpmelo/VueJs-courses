<script>
import listaMixin from '@/mixins/listaMixin'

export default {
    name: 'ListaPessoas',
    mixins: [listaMixin]
}
</script>

<template>
    <div>
        <h3>Lista Pessoas</h3>
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
    </div>
</template>
