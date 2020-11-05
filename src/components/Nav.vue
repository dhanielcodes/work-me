<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/get_started">About</router-link>
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

</style>
