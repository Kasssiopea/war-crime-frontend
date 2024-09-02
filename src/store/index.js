import { createStore } from 'vuex'
import axios from 'axios';

const AUTH_TOKEN_KEY = 'authToken';

export default createStore({
  state: {
    isLoggedIn: false,
    authToken: null,
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setAuthToken(state, authToken) {
      state.authToken = authToken;
      // Сохраняем authToken в localStorage при изменении
      localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    },
    loadAuthToken(state) {
      // Загружаем authToken из localStorage при инициализации
      const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
      if (authToken) {
        state.authToken = authToken;
        state.isLoggedIn = true;
      }
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      // Здесь выполняется отправка запроса по API для авторизации
      // Можно использовать, например, axios или fetch для отправки запроса
      axios.post(`${process.env.VUE_APP_HOST_BACKEND}/api/v1/login/`, {
          username,
          password,
        })
        .then((response) => {
          // Обработка успешного ответа от сервера
          const authToken = response.data.access; // Получаем токен из ответа сервера
          commit('setAuthToken', authToken); // Сохраняем токен в состоянии хранилища
          commit('setLoggedIn', true); // Устанавливаем флаг авторизации в true
        })
        .catch((error) => {
          // Обработка ошибки при отправке запроса
          console.error(error);
        });
    },
    logout({ commit }) {
      // Здесь выполняется логика выхода из системы
      commit('setAuthToken', null); // Очищаем токен в состоянии хранилища
      commit('setLoggedIn', false); // Устанавливаем флаг авторизации в false
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    authToken(state) {
      return state.authToken;
    },
  },
   plugins: [store => store.commit('loadAuthToken')],
});