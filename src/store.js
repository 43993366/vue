import Vuex from 'vuex' 
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        logFlag:'false'
    }
})

export default store