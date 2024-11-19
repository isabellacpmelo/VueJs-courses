import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'
import 'moment/locale/pt-br'

const app = createApp(App)

app.use(Maska) // plugin feito para o vue
app.config.globalProperties.$moment = moment // propriedade global - lib para javascript
app.config.globalProperties.$moment.locale('pt-br')

app.mount('#app')
