<template>
<nav v-if="!isAdminRoute">
  <nav class="navbar navbar-expand-lg navbar-light sticky-top shadow" id="main_navbar">
    <div class="container-fluid" style="margin-top: 15px;">
      <router-link to="/" class="navbar-brand" id="brand_label">
        <img src="@/assets/images/logo/Icon-removebg-preview.png" alt="Logo">
        <span>Потерь.НЕТ</span>
      </router-link>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style="height: 40px; width: 40px; "></span>
        </button>
      </div>
      <div class="header_test-fill-mode" style="">
        <span class="header_test-fill-mode-span">{{ $t('base.header_test') }}</span>
      </div>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center" id="navbar_text">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">{{ $t('base.navbar.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/persons" class="nav-link active" aria-current="page">{{ $t('base.navbar.search_people') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link active" aria-current="page">{{ $t('base.navbar.news') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/statistic" class="nav-link active" aria-current="page">{{ $t('base.navbar.statistic') }}</router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link to="/message" class="nav-link active" aria-current="page">Сообщить о погибшем</router-link>-->
<!--          </li>-->
          <!-- <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link active" aria-current="page">{{ $t('base.navbar.login') }}</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/registration" class="nav-link active" aria-current="page">{{ $t('base.navbar.registration') }}</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a @click="handleLogout" class="nav-link active">{{ $t('base.navbar.quit') }}</a>
          </li> -->
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="@/assets/images/lang/choise_lang.png" alt="Язык" style="width: 25px;">
  </a>
  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" id="language-dropdown">
    <li v-for="language in supportedLanguages" :key="language.code" @click="changeLanguage(language)">
      <a class="dropdown-item">{{ language.name }}</a>
    </li>
  </ul>
</li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</nav>
</template>

<script>


export default {
  data() {
    return {
      supportedLanguages: [
      { code: 'uk', name: 'Українська' },
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' },
      ],
      selectedLanguage: 'en',

    };
  },
  methods: {
    changeLanguage(language) {
      this.selectedLanguage = language.code;
      this.$i18n.locale = language.code;

      const pageTitleKey = this.$route.meta.titleKey;
      if (pageTitleKey) {
        const pageTitle = this.$t(pageTitleKey);
        document.title = pageTitle;
      }
    },

  },
  computed: {
    isAdminRoute() {
      return this.$route.path.startsWith('/admin');
    },
    isLoggedIn() {
      // Вернуть состояние авторизации из вашего хранилища или другого места,
      // где хранится информация о состоянии авторизации пользователя
      return this.$store.state.isLoggedIn;
    },
    handleLogout() {
      // Ваша логика для выполнения выхода пользователя
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style>

.dropdown-menu li {
  width: 100%;
  text-align: center;
}

.dropdown-menu li a {
  display: block;
  padding: 10px;
  color: black;
  font-size: 1rem;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: transparent; /* Убираем фон при наведении */
  border-radius: 10px;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  transition: all 0.1s ease;
  font-size: 1rem;
}

.dropdown-menu li:hover a {
  background-color: #0dcaf0; /* Добавляем фон только для выбранного языка */
  color: white; /* Задаем цвет текста для выбранного языка */
}

.header_test-fill-mode {
  position: absolute;
  background-color: lightgray;
  padding: 0 5px;
  top: 5px;
  left: 50%;
  width: 320px;
  margin-left: -160px;
  text-align: center;
  z-index: 2;
}

.header_test-fill-mode-span {
  display: block;
  font-weight: 500;
  color: black;
  font-size: 15px;
  line-height: normal;
  padding: 2px 0;
}

#main_navbar {
  background-color: white;
}

#brand_label {
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  font-family: 'Roboto Slab', serif;
  color: black;
  font-size: 2rem;
}

#navbar_text {
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  font-family: 'Roboto Slab', serif;
  color: black;
  font-size: 1.2rem;
}

#navbar_text :hover {
  background-color: #0dcaf0;
  border-radius: 10px;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  transition: all 0.1s ease;
  font-size: 1.4rem;
}

.dropdown-toggle::after {
  display: none; /* Скрыть стрелку */
}

.dropdown-menu {
  margin-top: 0; /* Добавляем верхний отступ */
}

.dropdown-menu li {
  width: 100%;
  text-align: center;
}

.dropdown-menu li a {
  display: block;
  padding: 10px;
  color: black;
  font-size: 1rem;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: #0dcaf0;
  border-radius: 10px;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  transition: all 0.1s ease;
  font-size: 1.2rem;
}


</style>