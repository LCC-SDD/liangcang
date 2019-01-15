// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugin from './plugin'
import store from './store'
import 'amfe-flexible/index.js'
import Error from './plugin/axios/404'
import VueI18n from 'vue-i18n'

Vue.use(plugin)
Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.prototype.$Error = Error

const messages = {
  zh:{
    message:{
      hello:"好好学习，天天向上"
    }
  },
  en:{
    message:{
      hello:"good good study, day day up!"
    }
  }
}
const i18n = new VueI18n({
  locale:'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
})
