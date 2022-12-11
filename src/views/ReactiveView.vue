<template>
  <div>
    <ul>
      <li v-for="v in category" :key="v.id">{{ v.title }}</li>
    </ul>
    <button @click="addCategory">プラス</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface ICategory {
  id: number;
  title: string;
}

export default defineComponent({
  setup() {
    let category = reactive<Array<ICategory>>([
      { id: 1, title: "鶏肉" },
      { id: 2, title: "豚肉" },
      { id: 3, title: "牛肉" },
    ]);
    function addCategory() {
      category.push({ id: 2, title: "魚肉" });
    }

    return {
      category,
      addCategory,
    };
  },
});
</script>

<style scoped></style>
