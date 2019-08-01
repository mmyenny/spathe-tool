import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import router from './router'

Vue.config.productionTip = false
Vue.use(Buefy)


new Vue({
    render: h => h(App),
    router,
    data: {
        name: "App"
    }
}).$mount('#app')