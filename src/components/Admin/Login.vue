<template>
  <div class="login-container">
    <h2>Вход в админ-панель</h2>
    <form @submit="login">
      <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Выполните запрос к API для проверки учетных данных пользователя
      // Здесь можно использовать axios или другую библиотеку для HTTP-запросов
      // Например:
      axios.post('/api/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        // Обработка успешного входа в админ-панель
        // Например, сохранение токена аутентификации в хранилище или куки
        console.log('Успешный вход в админ-панель');
        // Перенаправление пользователя на главную страницу админ-панели
        this.$router.push('/admin/dashboard');
      })
      .catch(error => {
        // Обработка ошибки входа в админ-панель
        console.error('Ошибка входа в админ-панель:', error);
        // Очистка полей формы или вывод сообщения об ошибке
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 10px;
}
input {
  padding: 10px;
  margin-bottom: 15px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>