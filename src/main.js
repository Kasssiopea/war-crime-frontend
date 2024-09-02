import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import i18n from './i18n'



createApp(App)
    .use(bootstrap)
    .use(i18n)
    .use(store)
    .use(router)
    .use(VueGtag, {
    config: { id: 'G-366L35J664' }
    })
    .mount('#app')
