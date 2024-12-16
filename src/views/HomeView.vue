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
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </section>
</template>


<script setup>
import { ref, computed } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const transactions = ref([
  { type: 'income', amount: 5000 },
  { type: 'expense', amount: 2000 },
  { type: 'expense', amount: 1000 },
]);

const totalIncome = computed(() =>
  transactions.value.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
);
const totalExpense = computed(() =>
  transactions.value.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
);

const chartData = computed(() => ({
  labels: ['總收入', '總支出'], // X軸
  datasets: [
    {
      label: '金額',
      data: [totalIncome.value, totalExpense.value], // Y軸
      backgroundColor: ['#4CAF50', '#FF6347'], // 顏色
      borderColor: ['#388E3C', '#D32F2F'],
      borderWidth: 1,
    },
  ],
}));

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '財務圖表',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
      },
    },
  },
};
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
