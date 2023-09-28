import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "vue-query";
import PrimeVue from "primevue/config";
import "@/assets/theme.css"
import ToastService from 'primevue/toastservice';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin);
app.use(PrimeVue, { ripple: true  });
app.use(ToastService);
// @ts-ignore


app.mount('#app')
