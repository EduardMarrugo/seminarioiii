import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from './lang/es.json'
import en from './lang/en.json'

Vue.use(VueI18n)

const messages = { es,en }
  
const i18n = new VueI18n({
    locale: 'es', 
    messages, 
})

export default  i18n