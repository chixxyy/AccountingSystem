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
      <Pie :data="chartData" :options="chartOptions" />
    </div>

    <div class="charts bg-white p-6 rounded-lg shadow-lg mt-6">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">月份</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">收入</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">支出</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(data, index) in monthlyData" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">{{ data.month }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ data.income }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ data.expense }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const totalIncome = ref(50000);
const totalExpense = ref(30000);

const chartData = ref({
  labels: ['收入', '支出'],
  datasets: [
    {
      label: '財務摘要',
      backgroundColor: ['#42A5F5', '#FF6384'],
      data: [totalIncome.value, totalExpense.value]
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: '收入與支出比例'
    }
  }
});

const monthlyData = ref([
  { month: '一月', income: 5000, expense: 3000 },
  { month: '二月', income: 10000, expense: 5000 },
  { month: '三月', income: 15000, expense: 7000 },
  { month: '四月', income: 20000, expense: 10000 },
  { month: '五月', income: 25000, expense: 12000 },
  { month: '六月', income: 30000, expense: 15000 },
  { month: '七月', income: 35000, expense: 18000 },
  { month: '八月', income: 40000, expense: 20000 },
  { month: '九月', income: 45000, expense: 25000 },
  { month: '十月', income: 50000, expense: 30000 },
  { month: '十一月', income: 55000, expense: 35000 },
  { month: '十二月', income: 60000, expense: 40000 },
]);
</script>