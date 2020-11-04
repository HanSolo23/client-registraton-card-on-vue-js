import Vue from 'vue';
import Vuelidate from "vuelidate";
import App from './App.vue';

Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.config.devtools = true;

function onSelect(e) {
  e.preventDefault();
  const select = e.currentTarget;
  select.focus();
  if (e.target.tagName === 'OPTION') {
    e.target.selected = !e.target.selected;
    select.dispatchEvent(new Event('change'));
  }
}

export default {
  dir: Vue.directive('multiple-without-ctrl', {
    bind: el => el.addEventListener('mousedown', onSelect),
    unbind: el => el.removeEventListener('mousedown', onSelect),
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app');
