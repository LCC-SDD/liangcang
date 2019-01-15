import axios from 'axios'
import { stat } from 'fs';

axios.defaults.baseURL="http://192.168.39.213:7002"

axios.interceptors.request.use(config=>{
    return config
})

axios.interceptors.response.use(config=>{
    // console.log(config)
    if(config.status === 200){
        return config.data
    }
},err=>{
    // console.log(err.response.status)
    // for(i in status){
    //     console.log(JSON.stringify(err.response.status))
    // }
    // let sus = err.response.status
    // return sus
    // switch(sus){
    //     case '429' :
    //         alert(1);
    //     break;
    // }
})

export default {
    install(Vue,options){
        Vue.prototype.$axios = axios
    }
}