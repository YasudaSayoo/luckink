<template>
  <div>{{ count }} <button @click="increase()" type="button">+</button></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let count = ref(1);
    const increase = () => ++count.value;
    return {
      count,
      increase,
    };
  },
});
</script>

<style scoped></style>
