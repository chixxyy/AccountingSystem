<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="flex items-center">
        <img alt="Vue logo" class="logo w-16 h-16" src="@/assets/logo.svg" />
      </RouterLink>

      <nav class="space-x-6 text-xl">
        <RouterLink to="/add" class="hover:text-indigo-200 transition-colors duration-300">記帳</RouterLink>
        <RouterLink to="/invest" class="hover:text-indigo-200 transition-colors duration-300">投資</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer class="bg-gray-800 text-white p-4 mt-8">
    <div class="container mx-auto text-center">
      <p>&copy; 歡迎來到記帳小站<span style="color: red;"><a href="https://github.com/chixxyy">&trade; 聯絡我</a></span></p>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
}

nav a {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
}
</style>
