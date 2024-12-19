<template>
    <section class="dashboard p-6">
      <h1 class="text-2xl font-bold mb-6">投資總覽</h1>
  
      <div class="summary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">投資項目</h3>
          <p class="text-3xl">{{ totalInvestments }}</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">總金額</h3>
          <p class="text-3xl text-green-500">{{ totalAmount }}</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold mb-2">平均收益率</h3>
          <p class="text-3xl text-blue-500">{{ averageReturnRate }}%</p>
        </div>
      </div>
  
      <div class="charts bg-white p-6 rounded-lg shadow-lg">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
  
      <div class="charts bg-white p-6 rounded-lg shadow-lg mt-6">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">投資項目</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金額</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">收益率</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="investment in investments" :key="investment.id">
              <td class="px-6 py-4 whitespace-nowrap">{{ investment.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ investment.amount }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ investment.returnRate }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  const investments = ref([
    { id: 1, name: '股票', amount: 10000, returnRate: 5 },
    { id: 2, name: '基金', amount: 20000, returnRate: 7 },
    { id: 3, name: '債券', amount: 15000, returnRate: 3 },
  ]);
  
  const totalInvestments = computed(() => investments.value.length);
  const totalAmount = computed(() => investments.value.reduce((sum, investment) => sum + investment.amount, 0));
  const averageReturnRate = computed(() => {
    const totalReturn = investments.value.reduce((sum, investment) => sum + investment.returnRate, 0);
    return (totalReturn / investments.value.length).toFixed(2);
  });
  
  const chartData = ref({
    labels: investments.value.map(investment => investment.name),
    datasets: [
      {
        label: '金額',
        backgroundColor: '#42A5F5',
        data: investments.value.map(investment => investment.amount)
      },
      {
        label: '收益率',
        backgroundColor: '#66BB6A',
        data: investments.value.map(investment => investment.returnRate)
      }
    ]
  });
  
  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: '投資數據'
      }
    }
  });
  </script>