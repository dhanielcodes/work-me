<template>
  <div>
    <Nav />
    <img class="bg" src="./assets/bg.svg" alt="" srcset="">
    <router-view v-slot="trans">
      <transition name="v">
          <component :is="trans.Component"></component>
      </transition>
    </router-view>
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
.v-enter-active, .v-leave-active{
  transition: all .3s
}
.v-enter-active{
  transition-delay: .5s;
}
.v-enter-from, .v-leave-to{
  opacity: 0;
}
.v-leave-from, .v-enter-to{
  opacity: 1;
}
</style>
