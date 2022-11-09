<template>
  <div>
    <div>Learn <button @click="jumpIndex">回到首页</button></div>
    <div>
      <span>{{ state.count }}</span>
      <span>{{ double }}</span>
      <button @click="add">增加</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const state = reactive({ count: 1 });

const double = computed(() => state.count * 2);

watch(
  () => state.count,
  (newVal, oldVal) => {
    console.log('--------');
    console.log(newVal);
    console.log(oldVal);
  },
  {
    immediate: true,
    deep: true,
  }
);

const add = () => {
  state.count++;
};

const jumpIndex = () => {
  router.push({ path: '/' });
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
