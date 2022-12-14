import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/vela-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/icons/icons.scss'
import Ripple from 'primevue/ripple';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.directive('ripple', Ripple);
app.mount('#app')
