import Vue from 'vue'
import Vuex from 'vuex'
import twoModules from './two'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name:'haha',
        num:0
    },
    actions:{
        suibian(state){
            state.commit('douxing',{
                haha:1,
                caca:2
            })
        }
    },
    mutations:{
        douxing(state,{
            haha,
            caca
        }){
            state.num += caca
        }
    },
    getters:{},
    modules:{
        twoModules
    }
})