<template>
    <div id="app">
        
        <router-view />
    </div>
</template>

<style>
@font-face {
    font-family: Brothers;
    src: url('./assets/Brothers Regular.otf');
}

#app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
