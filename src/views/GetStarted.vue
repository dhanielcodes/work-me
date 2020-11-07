<template>
    <div class="start">
        <hr>
        <div class="main">
            <router-link to="/beginner" class="min">
                <h2>Beginner</h2>
                <p>10 workouts</p>
            </router-link>
             <router-link to="/advance" class="min">
                <h2>Advance</h2>
                <p>20 workouts</p>
            </router-link>
             <router-link to="/pro" class="min">
                <h2>Pro</h2>
                <p>30 workouts</p>
            </router-link>
        </div>
        <hr>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
.start{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
.main{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    flex-wrap: wrap;
}
.min{
    background: white;
    padding: 20px;
    display: grid;
    place-items: center;
    width: 200px;
    height: 150px;
    text-decoration: none;
    color: black;
    border-radius: 10px;
    margin: 5px;
}
.min h2{
    font-weight: 500;
    font-size: 30px
}
@media (max-width: 419px) {
    .main{
        height: 50vh;
        overflow: hidden;
        overflow-y: scroll
    }
    .main::-webkit-scrollbar{
        width: 0;
    }
}
</style>