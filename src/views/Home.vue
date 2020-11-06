<template>
    <div class="home">
        <h1>WORK ME OUT !</h1>
        <hr>
        <router-link to="/get_started">GET STARTED</router-link>
    </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.home{
    display: grid;
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
.home h1{
    font-size: clamp(50px, 6vw, 100px);
    font-weight: 200;
}
.home a{
    background: #3D67FC;
    color: white;
    text-decoration: none;
    width: 200px;
    padding: 15px 10px;
    font-style: italic;
    font-size: 25px;
    margin: auto;
    border-radius: 10px;
    margin-top: 10px;
}
</style>