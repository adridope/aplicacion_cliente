import axios from 'axios';
const baseURL = 'http://batoilogic.my/api/productos/';

export default {
  getProducts() {
    return axios.get(baseURL)
  }/*,
  getState(id) {
    return axios.get(baseURL+'states/'+ id)
  },
  getUser(email){
    return axios.get(baseURL+'users?email='+ email)
  },
  editOrder(order){
    return axios.put(baseURL+'orders/'+ order.id, order)
  }*/
}