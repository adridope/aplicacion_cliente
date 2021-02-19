"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _api = _interopRequireDefault(require("../api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    products: [],
    product: []
  },
  mutations: {
    loadAll: function loadAll(state, response) {
      state.products.splice(0, state.products.length);
      response.forEach(function (element) {
        state.products.push(element);
      });
    },
    loadOne: function loadOne(state, response) {
      state.product = response;
    }
  },
  actions: {
    loadAll: function loadAll(context) {
      _api["default"].getProducts().then(function (response) {
        context.commit('loadAll', response.data);
      });
    },
    loadOne: function loadOne(context, id) {
      _api["default"].getProduct(id).then(function (response) {
        context.commit('loadOne', response.data);
      });
    }
  },
  modules: {}
});

exports["default"] = _default;