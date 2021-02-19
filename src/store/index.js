import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    product:[]
  },
  mutations: {
    loadAll(state,response){
      state.products.splice(0,state.products.length);
        response.forEach(element => {
          state.products.push(element);
        });
    },
    loadOne(state,response){
      state.product=response;
    }
  },
  actions: {
    loadAll(context) {
      api.getProducts()
      .then((response) => {
        context.commit('loadAll', response.data);
       })
    },
    loadOne(context,id) {
      api.getProduct(id)
      .then((response) => {
        context.commit('loadOne', response.data);
       })
    }
  },
  modules: {
  }
})
