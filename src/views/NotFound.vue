<template>
    <h1>404</h1>
</template>

<script setup>
import router from '@/router';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
    setTimeout(() => {
        router.push('/')
    },3000);
})

</script>