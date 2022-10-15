import { createApp } from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueLogger from 'vuejs3-logger'
import router from './router'
import createApi from './Api'

const options = {
  isEnabled: true,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: false,
  separator: '|',
  showConsoleColors: true
};

const app = createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(VueLogger, options)
  .use(router)

app.config.globalProperties.$api = createApi()

app.mount('#app')
