<template>
  <div id="nav">
    <router-link to="/">Usuarios </router-link> |
    <router-link to="/pedidos">Pedidos</router-link> |
    <router-link to="/inventario">Inventario</router-link> |
    <router-link to="/ventas">Ventas</router-link> 
    <router-view />

    
  </div>
  
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
