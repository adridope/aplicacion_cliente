<template>
  <div id="app">
    <header>
    <nav class="navbar">
        <div>
            <router-link class="navbar-brand" id="header-logo" to="/"><img src="logo.svg" alt="logo"></router-link>
            <div class="d-block d-lg-none" id="nav-button"><span></span><span></span><span></span></div>
            <ul id="main-menu">
                <li><router-link class="navbar-brand headerLink" to="/">Inicio</router-link></li>
                <li><router-link class="navbar-brand headerLink" to="/products">Productos</router-link></li>
                <li>
                    <router-link id="registerButtonMobile" class="btn d-lg-none" to="/register">Regístrate</router-link>
                    <router-link id="loginButtonMobile" class="btn  d-lg-none" to="/login">Inicia Sesión</router-link>
                    
                    <img id="userIconMobile" class="d-lg-none" src="img/users/placeholder/foto.png" alt="Icono">
                    <router-link id="loginButtonMobile" class="btn  d-lg-none" to="/logout">Cerrar sesión</router-link>
                    <router-link to="/shoppingCart"><img class="d-lg-none" src="carro.svg" alt="carro"></router-link>
                </li>
            </ul>
            
              <router-link id="registerButton" class="btn d-none d-lg-block" to="/register">Regístrate</router-link>
              <router-link id="loginButton" class="btn d-none d-lg-block" to="/login">Inicia Sesión</router-link>

              <router-link id="userIcon" to="/"><img class="d-none d-lg-block" src="/img/users/placeholder/foto.png" alt="Icono"></router-link>
              <router-link id="loginButton" class="btn d-none d-lg-block" to="/logout">Cerrar sesión</router-link>
              <router-link id="header-logo-carrito" to="/shoppingCart"><img class="d-none d-lg-block" src="carro.svg" alt="carro"></router-link>
        </div>
    </nav>
</header>
    <router-view></router-view>

    <footer>

    <div class="row contenido">

        <div class="d-none d-md-block col-12 col-lg-4">

            <img style="width: 258px" src="text-logo.svg" alt="logo">

            <p>
                Batoilogic es una empresa comprometida con sus clientes ofreciendo gran variedad
                de productos de la mejor calidad, supliendo a minoristas y proveedores.
                Actualmente es una de las empresas líderes en Alcoy, donde tiene una presencia directa.
                También hace entrega de productos a clientes internacionales, con tal de suplir la necesidad de sus clientes.
            </p>

        </div>

        <div class="col-12 col-md-5 col-lg-3">

            <h2>Información de contacto</h2>

            <ul>
                <li id="phone">+34 688 888 888</li>
                <li id="mail">soporte@batoilogic.com</li>
            </ul>

            <div class="social-media-icons">
                <a href="#"><img src="https://img.icons8.com/material-sharp/24/ffffff/facebook-f.png" alt="Facebook"></a>
                <a href="#"><img src="https://img.icons8.com/android/24/ffffff/twitter.png" alt="Twitter"></a>
                <a href="#"><img src="https://img.icons8.com/metro/26/ffffff/instagram-new.png" alt="Instagram"></a>
                <a href="#"><img src="https://img.icons8.com/android/24/ffffff/linkedin.png" alt="Linkedin"></a>
                <a href="#"><img src="https://img.icons8.com/metro/26/ffffff/youtube.png" alt="YouTube"></a>
            </div>

        </div>

        <div class="col-12 col-md-3 col-lg-2">

            <h2>Sobre la empresa</h2>

            <ul>
                <li><a href="">Sobre la empresa</a></li>
                <li><a href="">Sobre nosotros</a></li>
            </ul>

        </div>

        <div class="d-none d-md-block col-12 col-md-4 col-lg-3">

            <h2>Categorías</h2>

            <ul>
                <li><a href="#">Categoría 1</a></li>
                <li><a href="#">Categoría 2</a></li>
                <li><a href="#">Categoría 3</a></li>
                <li><a href="#">Categoría 4</a></li>
                <li><a href="#">Categoría 5</a></li>
            </ul>

        </div>

    </div>
    <div class="row derechos">
        <small><a href="https://icons8.com/" target="_blank">Iconos extraidos de icons8.</a></small>
    </div>

    </footer>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
