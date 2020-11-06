<template>
  <div class="nav">
    <router-link to="/"><h3>Work-me</h3></router-link>
    <img src="../assets/about.svg" alt="" srcset="">
  </div>
</template>

<script>
export default {
  name: 'Nav',
  
}
</script>

<style scoped>
.nav{
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between
}
a{
  text-decoration: none;
}
h3{
  font-style: italic;
  color: white;
  font-size: 25px;
  font-weight: 100
}
img{
  cursor: pointer;
}
</style>
