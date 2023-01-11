import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createStore } from 'vuex';



/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)



createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
