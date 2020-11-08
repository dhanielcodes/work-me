<template>
    <div>
        <div class="bg"></div>
        <img src="../assets/bg_line_green.svg" alt="" class="side_bg1 side">
        <img src="../assets/bg_line_yellow.svg" alt="" class="side_bg2 side">
        <div class="start" v-if="start">
            <h1>ADVANCE</h1>
            <button @click="start = false" class="count">Start</button>
            <h2><router-link to="/get_started">Cancel</router-link></h2>
        </div>
            <div v-else class="overv">
                <div class="main" v-if="session">
                    <ul v-for="(item, index) in store.state.advance.slice(a, b)" :key="index">
                        <li >
                            <h1>{{item.name}}</h1>
                            <h2>{{item.amount}}</h2>
                            <p>{{item.info}}</p>
                        </li>
                        <div class="btns">
                            <button @click="selectResponse(item)" v-on:click="next" :class="select ? check(item) : ''">Done</button>
                            <button v-on:click="next">Skip</button>
                        </div>
                    </ul>
                    <div class="bared">
                        <div class="bar" :style="{ 'width' : bar + '%'}"></div>
                    </div>
                </div>
                <div class="score" v-else>
                    <h1>You completed</h1>
                    <h2>{{score}}/{{store.state.advance.length}} Workouts</h2>
                    <div class="btns">
                        <button @click="restart">Restart</button>
                        <button @click="mode">Change mode</button>
                        <button @click="home">Home</button>
                    </div>
                
                </div>
            </div>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store/index'

export default {
    setup () {
        const state = reactive({
            store: store,
            a: 0,
            b: 1,
            select: false,
            score: 0,
            session: true,
            bar: 0,
            start: true,
            router: useRouter(),
        })
        const selectResponse = (e) => {
                state.select = true

                if(e.done){
                    state.score++
                }
        }
        const check = () => {
                if(status.done){
                    return 'done'
                }else{
                    return 'undone'
                }
        }
        const next = () => {
                if(store.state.advance.length - 1 == state.a){
                    state.session = false
                }
                state.a++
                state.b++
                state.select = false
                state.bar = state.bar + (100/store.state.advance.length)
        }


        const restart = () => {
                state.score = 0
                state.a = 0
                state.b = 1
                state.select = false
                state.session = true
                state.bar = 0
        }
        const home = () => state.router.push('/')
        const mode = () => state.router.push('/get_started')   
        


        return {
            ...toRefs(state),
            selectResponse,
            check,
            next,
            restart,
            home,
            mode,
        }
    },
}
</script>

<style scoped>
.bg{
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.side_bg1{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right:0;
    width: 150px;
}
.side_bg2{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 150px;
}
.start{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center
}
.count{
    margin-top: 20px;
    transition: all 300ms;
    font-size: 100px;
    padding: 20px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    background: #34CEFF;
    outline: none;
}
.start h2{
     margin-top: 40px;
}
.start a{
    font-size: 20px;
    transition: all 300ms;
    padding: 20px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    background-color: #EE7272
}
ul{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    text-align: center;
    list-style: none;
    width: 80%;
}
ul h1, h2{
    font-weight: 500;
}
ul p{
    width: 90%;
    margin: auto;
    margin-top: 40px;
}
.btns{
    margin-top: 50px;
}
.btns button{
    padding: 20px;
    font-size: 20px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    outline: none;
}
.btns button:nth-child(1){
    background: #3DFC44;
}
.btns button:nth-child(2){
    background: #EE7272;
}

.bared{
    width: 70%;
    background: rgba(197, 191, 191, 0.514);
    height: 30px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px 20px 0px 0px;
    overflow: hidden;
}
.bar{
    background: #3DFC44;
    height: 100%;
    width: 0%;
    transition: all .3s;
}
/* SCORE */

.score{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    text-align: center;
    list-style: none;
    width: 80%;
}
.score .btns button{
    font-size: clamp(13px, 3vw, 20px);
    padding: 10px;
}
.score .btns button:nth-child(1){
    background: #90A9FF;
}
.score .btns button:nth-child(2){
    background: #000000;
}
.score .btns button:nth-child(3){
    background: #34CEFF;
}
.score h1{
    font-weight: 500;
    font-size: 45px;
}
.score h2{
    margin-top: 40px;
    font-size: 40px;

}
@media (max-width: 900px){
    .side{
        display: none;
    }
}
</style>