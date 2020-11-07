<template>
    <div>
        <div class="bg"></div>
        <img src="../assets/bg_line_green.svg" alt="" class="side_bg1">
        <img src="../assets/bg_line_yellow.svg" alt="" class="side_bg2">

        <div class="main" v-if="session">
            <ul v-for="(item, index) in store.state.questions.slice(a, b)" :key="index">
                <li >
                    <h1>{{item.name}}</h1>
                    <h2>{{item.amount}}</h2>
                    <p>{{item.info}}</p>
                </li>
                <button @click="selectResponse(item)" v-on:click="next" :class="select ? check(item) : ''">Done</button>
                <button v-on:click="next">skip</button>
            </ul>
            <div class="bared">
                <div class="bar" :style="{ 'width' : bar + '%'}"></div>
            </div>
        </div>
        <div class="score" v-else>
            <h1>You completd</h1>
            {{score}}/{{store.state.questions.length}}
            <button @click="restart">restart</button>
            <button @click="mode">Change mode</button>
            <button @click="home">Home</button>
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
                if(store.state.questions.length - 1 == state.a){
                    state.session = false
                }
                state.a++
                state.b++
                state.select = false
                state.bar += 10
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
            mode
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
}
.side_bg2{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
}.bar{
    background: green;
    height: 10px;
}
</style>