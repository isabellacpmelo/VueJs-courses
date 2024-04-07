import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

const app = createApp(App)

app.use(Maska) // plugin feito para o vue
app.config.globalProperties.$moment = moment // propriedade global - lib para javascript

app.mount('#app')
