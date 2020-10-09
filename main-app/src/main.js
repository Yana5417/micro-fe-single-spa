import Vue from 'vue'
import router from 'vue-router'
import { registerApplication, start } from 'single-spa'
import App from './App.vue'

Vue.config.productionTip = false

registerApplication('childVueApp',
  async () => {
    console.log('加载vue模块');
  },
  location => location.pathname.startsWith('/vue') // 切换到/vue路径下
)

start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
