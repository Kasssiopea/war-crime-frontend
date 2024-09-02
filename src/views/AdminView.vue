<template>
  <div>
    <template v-if="isAuthenticated">
      <!-- Компонент панели управления (dashboard) -->
      <Dashboard />
    </template>
    <template v-else>
      <!-- Компонент страницы входа (login) -->
      <Login />
    </template>
  </div>
</template>

<script>
import Dashboard from '@/components/Admin/Dashboard.vue';
import Login from '@/components/Admin/Login.vue';

export default {
  components: {
    Dashboard,
    Login
  },
  computed: {
    isAuthenticated() {
      // Ваша логика проверки авторизации
      // Например, проверка наличия и валидности токена
      const token = localStorage.getItem('token'); // Получите токен из хранилища (localStorage)
      return !!token; // Верните true, если токен существует и действителен, иначе верните false
    }
  }
};
</script>