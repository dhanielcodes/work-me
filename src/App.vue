<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components:{
    Nav
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
*{
  font-family: 'inter';
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
