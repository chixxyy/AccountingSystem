<template>
    <section class="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">新增記錄</h1>
  
      <form 
        @submit.prevent="addTransaction"
        class="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
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
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newTransaction = ref({ type: 'income', amount: 0 });
  const transactions = ref([]);
  
  function addTransaction() {
    transactions.value.push({ ...newTransaction.value });
    newTransaction.value = { type: 'income', amount: 0 };
    alert('記錄已新增！');
  }
  </script>
  