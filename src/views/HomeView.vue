<template>
  <section class="dashboard p-6">
    <h1 class="text-2xl font-bold mb-6">財務摘要</h1>
    
    <div class="summary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div class="bg-white p-4 rounded-lg shadow-lg text-center">
        <h3 class="text-xl font-semibold mb-2">總收入</h3>
        <p class="text-3xl text-green-500">{{ totalIncome }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-lg text-center">
        <h3 class="text-xl font-semibold mb-2">總支出</h3>
        <p class="text-3xl text-red-500">{{ totalExpense }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-lg text-center">
        <h3 class="text-xl font-semibold mb-2">餘額</h3>
        <p class="text-3xl" :class="totalIncome - totalExpense >= 0 ? 'text-blue-500' : 'text-red-500'">
          {{ totalIncome - totalExpense }}
        </p>
      </div>
    </div>

    <div class="charts bg-white p-6 rounded-lg shadow-lg">
      <p class="text-center text-gray-500">這裡插入圖表</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const transactions = ref([
  { type: 'income', amount: 5000 },
  { type: 'expense', amount: 2000 },
  { type: 'expense', amount: 1000 },
]);

const totalIncome = transactions.value
  .filter(t => t.type === 'income')
  .reduce((sum, t) => sum + t.amount, 0);

const totalExpense = transactions.value
  .filter(t => t.type === 'expense')
  .reduce((sum, t) => sum + t.amount, 0);
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.summary {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.charts {
  margin-top: 2rem;
}
</style>
