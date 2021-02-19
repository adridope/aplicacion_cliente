"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _ListadoProductos = _interopRequireDefault(require("../views/ListadoProductos.vue"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

var _Logout = _interopRequireDefault(require("../components/Logout.vue"));

var _SinglePageProduct = _interopRequireDefault(require("../components/SinglePageProduct.vue"));

var _Register = _interopRequireDefault(require("../views/Register.vue"));

var _ShoppingCart = _interopRequireDefault(require("../views/ShoppingCart.vue"));

var _Inicio = _interopRequireDefault(require("../views/Inicio.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Inicio',
  component: _Inicio["default"]
}, {
  path: '/products',
  name: 'Products',
  component: _ListadoProductos["default"]
}, {
  path: '/products/:id',
  name: 'SinglePageProduct',
  component: _SinglePageProduct["default"]
}, {
  path: '/login',
  name: 'Login',
  component: _Login["default"]
}, {
  path: '/logout',
  name: 'Logout',
  component: _Logout["default"]
}, {
  path: '/register',
  name: 'Register',
  component: _Register["default"]
}, {
  path: '/shoppingCart',
  name: 'ShoppingCart',
  component: _ShoppingCart["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;