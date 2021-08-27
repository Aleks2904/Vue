import {
  createApp
} from 'vue'
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store';
import numberFormat from "@/helpers/numberFormat";


const app = createApp(App);

app
  .use(router)
  .use(store)
  .mount('#app');

app.config.globalProperties.$filters = {
  numberFormat
}