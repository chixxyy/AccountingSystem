<template>
    <div class="view">
        <h1>動態路由 (id: {{ id }})</h1>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'; // route狀態，router方法
import axios from 'axios';

export default {
  setup() {
    const route = useRoute(); // 獲取當前的路由對象
    const id = route.params.id; // 提取路由參數中的 id
    return { id }; // 將 id 返回到模板
  }
}

onMounted(async() => {
  const data = await axios.get()
})
</script>
