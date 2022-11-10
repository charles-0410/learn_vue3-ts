<template>
  <div>生命周期</div>
  <!-- template模板中访问&使用透传 Attributes -->
  <span v-bind="$attrs">Fallthrough attribute: {{ $attrs }}</span>
  <div>{{ injectData }}</div>
  <span class="text">测试 v-bind CSS变量注入</span>
</template>

<script lang="ts">
// 如果使用了 `<script setup>` 需要额外的 `<script>` 块来书写这个选项声明
// 使用普通的 <script> 来声明选项
export default {
  // 禁用 Attributes 继承
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  useAttrs,
  inject,
  ref,
  watchEffect,
} from 'vue';

console.log('--------生命周期');
console.log('--------created');
onBeforeMount(() => {
  console.log('--------onBeforeMount');
});
onMounted(() => {
  console.log('--------onMounted');
});

// 在 JS 中访问透传 Attributes
const attrs = useAttrs();
console.log('------------useAttrs');
console.log(attrs);

// 注入上层组件提供的数据 - Provide
const injectData = inject('provideVal');

// watchEffect
const num = ref(0);
setInterval(() => {
  num.value++;
}, 2000);
watchEffect(() => {
  console.log('num 值改变：' + num.value);
});

// v-bind css var
const textColor = ref('blue');
</script>

<style scoped>
.text {
  color: v-bind('textColor');
}
</style>
