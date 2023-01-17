import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faYoutube, faFacebook, faTwitter, faEnvelope, faInstagram, faPhone } from '@fortawesome/free-brands-svg-icons'

library.add(faYoutube);
library.add(faFacebook);
library.add(faTwitter);
library.add(fa);
library.add(faYoutube);
library.add(faYoutube);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
