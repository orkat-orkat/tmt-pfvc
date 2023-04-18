import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  //ルーターを router/index.js からインポート

createApp(App).use(router).mount('#app')