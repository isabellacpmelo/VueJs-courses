export default {
    methods: {
       removerItem() {
        this.items.pop()
       } 
    },
    created() {
        console.log('removerItemListaMixin criado!')
    }
}