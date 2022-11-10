<template>
  <div>
    <div>Learn <button @click="jumpIndex">回到首页</button></div>
    <div>
      <span>{{ state.count }}</span>
      <span>{{ double }}</span>
      <button @click="add">增加</button>
      <button @click="handleChild"></button>
    </div>
    <Child
      ref="childRef"
      v-model="state.testModel"
      v-model:age="state.age"
      :name="state.name"
      @change-name="changeName"
    >
      这是默认插槽
      <template #title>这是具名插槽</template>
      <template #footer="{ content, slotScope }"
        >这是带值插槽 {{ slotScope.xxxx }} - {{ content }}</template
      >
    </Child>
    <Life class="testClass" style="color: red" />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch, ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import Child from './components/child.vue';
import Life from './components/life.vue';

const router = useRouter();

const childRef = ref();

const state = reactive({ count: 1, name: 'charles', testModel: 123, age: 21 });

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

nextTick(() => {
  console.log('---------------');
  console.log(childRef.value.xxxx);
});

const handleChild = () => {
  childRef.value.alertX();
};

const add = () => {
  state.count++;
};

const jumpIndex = () => {
  router.push({ path: '/' });
};

const changeName = (name) => {
  state.name = name;
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
