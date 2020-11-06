<template>
  <div>
    <Nav />
    <img class="bg" src="./assets/bg.svg" alt="" srcset="">
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

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
  font-family: 'gilroy',Helvetica, Arial, sans-serif;
}
body{
  background: black;
}
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none    
}
</style>
