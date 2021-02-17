import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  mutations: {
    loadAll(state,response){
      state.products.splice(0,state.products.length);
        response.forEach(element => {
          state.products.push(element);
        });
    }
  },
  actions: {
    loadAll(context) {
      api.getProducts()
      .then((response) => {
        context.commit('loadAll', response.data);
       })
    }
  },
  modules: {
  }
})
