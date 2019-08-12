import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //状态
    points:10
  },
  mutations: {  //变化,可以认为所有的state都是由mutation来驱动变化的。 也可以认为它是个setter.
    increase(state,data){
        state.points = data ;
    }
  },
  actions: {  //行动
    increaseAction({commit},data){
        commit('increase',data);
    }
  },
  getters:{
    get_points:state =>{
        return state.points
    }
  }
})
