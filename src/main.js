import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/general.scss'
import router from './routes/router'



createApp(App).use(router).mount('#app')
