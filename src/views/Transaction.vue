<template>
  <section class="dashboard p-6" style="height: 100vh; width: 100vw;">
    <h1 class="text-2xl font-bold mb-6">新增記錄</h1>

    <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8" style="width: 80vw;">
      <form @submit.prevent="addTransaction" class="flex flex-col gap-4">
        <label class="block">
          <span class="text-gray-700 font-medium">類型：</span>
          <select 
            v-model="newTransaction.type"
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
          >
            <option value="income">收入</option>
            <option value="expense">支出</option>
          </select>
        </label>

        <label class="block">
          <span class="text-gray-700 font-medium">金額：</span>
          <input 
            type="number" 
            v-model="newTransaction.amount" 
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </label>

        <button 
          type="submit" 
          class="mt-4 px-4 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 focus:ring focus:ring-indigo-300 focus:outline-none"
        >
          新增
        </button>
      </form>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8" style="width: 80vw;">
      <h1 class="text-2xl font-bold mb-6">統計數據</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">總收入</h3>
          <p class="text-3xl text-green-500">{{ totalIncome }}</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">總支出</h3>
          <p class="text-3xl text-red-500">{{ totalExpense }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto" style="width: 80vw;">
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
              <td class="px-6 py-4">{{ t.type === 'income' ? '收入' : '支出' }}</td>
              <td class="px-6 py-4">{{ t.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import Swal from 'sweetalert2';

const newTransaction = ref({ type: 'income', amount: 0 });
const transactions = ref([
  { type: 'income', amount: 5000 },
  { type: 'expense', amount: 3000 },
]);

const totalIncome = computed(() => {
  return transactions.value
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
});

const totalExpense = computed(() => {
  return transactions.value
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
});

function addTransaction() {
  transactions.value.push({ ...newTransaction.value });
  newTransaction.value = { type: 'income', amount: 0 };
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "新增完成",
    showConfirmButton: true,
    timer: 1500,
  });
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>