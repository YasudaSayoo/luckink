<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    {{ msg }} {{ showMsg() }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  // vue2
  // data(){
  //   return {
  //     msg: "hello world"
  //   }
  // },
  // methods: {
  //   showMsg() {
  //     return "こんにちは"
  //   }
  // },

  // vue3 setup
  setup() {
    let msg = ref("hello world")
    function showMsg() {
      return "こんにちは"
    }
    return {
      msg,
      showMsg
    }
  }
});
</script>
