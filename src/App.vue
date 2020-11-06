<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
