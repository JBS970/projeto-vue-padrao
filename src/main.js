import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')//Cria a montagem dentro da Tag html #app(id) do /public/index.html ,que é monitorada pelo vue
