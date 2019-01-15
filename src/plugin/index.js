import axios from './axios'
import mint from 'mint-ui'

export default {
    install(Vue,options){
        Vue.use(axios)
        Vue.use(mint)
    }
}