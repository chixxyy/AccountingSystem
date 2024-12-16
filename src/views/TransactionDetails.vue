<template>
    <section class="p-6">
      <h1 class="text-2xl font-bold mb-6">記錄清單</h1>
      
      <div class="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="bg-indigo-600 text-white">
              <th class="px-6 py-4 text-left">類型</th>
              <th class="px-6 py-4 text-left">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(t, index) in transactions" :key="index" class="border-b">
              <td class="px-6 py-4">{{ t.type }}</td>
              <td class="px-6 py-4">{{ t.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const transactions = ref([
    { type: '收入', amount: 5000 },
    { type: '支出', amount: 2000 },
  ]);
  </script>