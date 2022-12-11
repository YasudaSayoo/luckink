<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    {{ msg }} {{ showMsg() }} <br />
    <button @click="goPage('/ref')">refの使い方</button> <br />
    <button @click="goPage('/reactive')">reactiveの使い方</button> <br />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomeView",
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
    const router = useRouter();
    let msg = ref("hello world");
    const goPage = (url: string) => {
      router.push(url);
    };
    function showMsg() {
      return "こんにちは";
    }
    return {
      msg,
      showMsg,
      goPage,
    };
  },
});
</script>
