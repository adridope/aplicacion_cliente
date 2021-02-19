"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURL = 'http://batoilogic.my/api/productos/';
var _default = {
  getProducts: function getProducts() {
    return _axios["default"].get(baseURL);
  },
  getProduct: function getProduct(id) {
    return _axios["default"].get(baseURL + id);
  }
  /*,
  getState(id) {
   return axios.get(baseURL+'states/'+ id)
  },
  getUser(email){
   return axios.get(baseURL+'users?email='+ email)
  },
  editOrder(order){
   return axios.put(baseURL+'orders/'+ order.id, order)
  }*/

};
exports["default"] = _default;