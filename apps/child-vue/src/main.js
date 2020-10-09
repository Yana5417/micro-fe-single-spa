import Vue from 'vue'
import VueRouter from 'vue-router'
import SingleSpaVue from 'single-spa-vue'
import App from './App.vue'

Vue.config.productionTip = false

const appOptions = {
  el: '#vue', // 挂载到父应用id为vue的标签中
  VueRouter,
  render: h => h(App)
}

const vueLifeCycle = SingleSpaVue({
  Vue,
  appOptions
});

export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

