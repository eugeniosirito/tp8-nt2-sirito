<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h4>Trabajo Práctico Nº8</h4>
      <NavBar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './componentes/NavBar.vue'

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
