<template>
  <div>HOME <button @click="jumpLearn">Learn</button></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const jumpLearn = () => {
  router.push({ path: '/learn' });
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
