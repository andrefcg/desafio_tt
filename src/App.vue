<template>
    <div id="app">
        <!-- 
        <div id="nav">
        <router-link to="/">Login</router-link> |
        <router-link to="/vendas">Vendas</router-link> |
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
        </div>
        -->
        <router-view />
    </div>
</template>

<style>
@font-face {
    font-family: Brothers;
    src: url('./assets/Brothers Regular.otf');
}

#app {
    font-family: Brothers, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #212529;
    height: 100vh;
    width: 100vw;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #212529;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

html, body
{
    height: 100vh;
    width: 100vw;
}
</style>
