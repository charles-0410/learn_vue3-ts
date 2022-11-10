<template>
  <div>
    这是子组件> {{ props.name }}
    <button @click="handleChangeName">改名</button> {{ modelValue }} 年龄：{{
      age
    }}
  </div>
  <div><slot /></div>
  <div><slot name="title" /></div>
  <div><slot name="footer" :slot-scope="state" content="这是底部"></slot></div>
  <div>
    <p>姓名：{{ store.data.name }}</p>
    <p>性别：{{ store.data.sex }}</p>
    <p>{{ store.doubleCount }}</p>
    <button @click="updateStore">修改store信息</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, defineExpose, reactive, toRefs } from 'vue';
import { useStore } from '../../../store/index.ts';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  modelValue: Number,
  age: Number,
});

const store = useStore();

console.log(store);

const state = reactive({ xxxx: 666 });

const emit = defineEmits(['changeName', 'update:modelValue', 'update:age']);

const handleChangeName = () => {
  emit('changeName', 'Jack');
  emit('update:modelValue', 999);
  emit('update:age', 66);
};

const updateStore = () => {
  // 通过 actions 定义的方法修改 state
  // store.updateData({ name: 'Jack', sex: '女' }, 6);
  // 通过 store 直接修改
  // store.data = { name: 'Jack', sex: '女' };
  // 同时改变多个状态
  store.$patch((state) => {
    state.data = { name: 'Jack', sex: '女' };
    state.count = 20;
  });
};

defineExpose({
  ...toRefs(state),
  alertX() {
    alert(state.xxxx);
  },
});
</script>
