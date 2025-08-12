import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import AnimeAll from './components/animeAll.vue'

const app = createApp(App)
app.component('AnimeOld', AnimeAll)
app.use(createPinia())
app.mount('#app')
