import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { defineRule, configure } from 'vee-validate'
import { required, email, max, min, size, one_of } from '@vee-validate/rules'

import Vuebar from 'vuebar'

configure({
  validateOnInput: true
})

defineRule('required', required)

defineRule('oneOf', one_of)

defineRule('max', max)

defineRule('min', min)

defineRule('email', email)

defineRule('size', size)

defineRule('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password does not match'
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)

app.use(Vuebar)

app.mount('#app')