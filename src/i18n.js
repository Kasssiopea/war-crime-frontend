import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'uk', // язык по умолчанию
  messages: {

    // EN translator
    en: {
      base: {
        header_test: 'The site is in testing and filling mode',
        navbar: {
          home: 'Home',
          news: 'News',
          statistic: 'Statistic',
          search_people: 'Search',
          login: 'Log In',
          registration: 'Registration',
          person: 'Questionnaire',
          quit: 'Log out',
         },
        footer: {
          about_us_title: 'INFORMATION ABOUT US',
          about_us_text: 'We are gathering facts about the losses of the russian army and other military formations, involved in the armed aggression of the russian federation against Ukraine.\n' +
              'Our goal is to collect the maximum number of them.',
          contacts: 'Contacts'
        }
      },
      home: {
        title: 'Потерь.НЕТ',
        counter: {
          text_1: 'We have already collected',
          text_2: 'facts about the losses of the russian army and other military formations involved in the armed aggression of the russian federation against Ukraine.',
          text_3: 'The information presented on the site is obtained from open sources.',
        },
        carousel: {
            text_1: 'New publications'
        },
        partners: {
          text_1: 'Our partners'
        },
        news: {
          text_1: 'Latest news'
        }
      },
      search: {
        form:{
          placeholder: 'Enter name and last name to search',
          title: 'Search',
          butt_search: 'Search',
          butt_clear: 'Clear',

        },
        titles:{
          title: 'New publications',
          title_filter: 'Filter',
        },
      },
      person: {
        birthday: 'Date of birth:',
        unit: 'Military base:',
        clarified: 'The information is being clarified',
      },
      news: {
        news_title: 'News',
        important_news: 'Important news',
        general_news: 'General news',
      },
      statistic: {
        description: 'Here you can find statistical data about' +
            ' the losses of the russian army and other military' +
            ' formations involved in the armed aggression of' +
            ' the russian federation against Ukraine from 2014' +
            ' to the present time.',
        military_rank: 'Military rank',
        military_rank_sea: 'Navy rank',
        military_base: 'Military formations',
        date: 'Age',
        date_death: 'Year of death',
      },
      login: {
        login_title: 'Log in',
        login: 'Login:',
        password: 'Password:',
        login_placeholder: 'Enter your login',
        password_placeholder: 'Enter your password',
        alert: "The username or password you entered is incorrect"
      },
      registration: {
        registration_title: 'Registration',
        registration_button: 'Register',
        login: 'Login:',
        login_placeholder: 'Your login',
        email: 'Email:',
        email_placeholder: 'Your email ',
        password: 'Password:',
        password_placeholder: 'Create a password',
        confirm_password: 'Repeat the password',
        confirm_password_placeholder: 'Repeat the password',
        verif_mail: 'Please confirm your mail'
      },
      person_card:{
          personal_data: 'General information',
          date_of_birthday: 'Date of birth',
          citizenship: 'Citizenship',
          passport: 'Passport',
          individual_identification_number: 'Identification code',
          place_of_birthday: 'Place of birth',
          place_of_living: 'Place of residence',
          additional_info: 'Additional information',
          place_where_accident: 'Place of incident',
          date_of_dead: 'Date of death',
          place_of_rip: 'Place of burial',
          date_of_rip: 'Date of burial',
          type_of_army: 'Type of army',
          rank: 'Military rank',
          job_title: "Position",
          military_unit: 'Military base',
          military_from: 'The location of the military base',
          button_report_bug: 'Report an error',
          name_error: 'Error name',
          description_error: 'Error Description',
          send_error: 'Send',
          info: 'Information',
          source: 'Source',
          service: 'Service',
      },
    ranks: {
        "РЯДОВОЙ": "Private",
        "ЕФРЕЙТОР": "Corporal",
        "МЛАДШИЙ СЕРЖАНТ": "Lance Sergeant",
        "СЕРЖАНТ": "Sergeant",
        "СТАРШИЙ СЕРЖАНТ": "Staff Sergeant",
        "СТАРШИНА": "Sergeant major",
        "ПРАПОРЩИК": "Warrant officer",
        "СТАРШИЙ ПРАПОРЩИК": "Senior Warrant Officer",
        "МЛАДШИЙ ЛЕЙТЕНАНТ": "Sub-lieutenant",
        "ЛЕЙТЕНАНТ": "Lieutenant",
        "СТАРШИЙ ЛЕЙТЕНАНТ": "Senior Lieutenant",
        "КАПИТАН": "Captain",
        "МАЙОР": "Major",
        "ПОДПОЛКОВНИК": "Lieutenant colonel",
        "ПОЛКОВНИК": "Colonel",
        "ГЕНЕРАЛ-МАЙОР": "Major General",
        "ГЕНЕРАЛ-ЛЕЙТЕНАНТ": "Lieutenant General",
        "ГЕНЕРАЛ-ПОЛКОВНИК": "Colonel General",
        "ГЕНЕРАЛ АРМИИ": "General of the Army",
        "МАРШАЛ РОССИЙСКОЙ ФЕДЕРАЦИИ": "Marshal of the Russian Federation",
        "МАТРОС": "Colonel General",
        "СТАРШИЙ МАТРОС": "Senior sailor",
        "СТАРШИНА 1 СТАТЬИ": "Petty officer of 1st article",
        "СТАРШИНА 2 СТАТЬИ": "Petty officer of 2nd articles",
        "ГЛАВНЫЙ СТАРШИНА": "Chief sergeant major",
        "ГЛАВНЫЙ КОРАБЕЛЬНЫЙ СТАРШИНА": "Chief ship sergeant major",
        "МИЧМАН": "Chief ship sergeant major",
        "СТАРШИЙ МИЧМАН": "Senior midshipman",
        "КАПИТАН-ЛЕЙТЕНАНТ": "Lieutenant Commander",
        "КАПИТАН 3 РАНГА": "Captain of 3rd rank",
        "КАПИТАН 2 РАНГА": "Captain of 2nd rank",
        "КАПИТАН 1 РАНГА": "Captain of 1st rank",
        "АДМИРАЛ": "Admiral",
        "Сухопутные войска": "Ground troops",
        "Воздушно-космические силы": "Aerospace Forces",
        "Военно-Морской Флот": "Navy",
        "Ракетные войска стратегического назначения": "Strategic Missile Forces",
        "Воздушно-десантные войска": "Airborne Forces",
        "Войска национальной гвардии Российской Федерации": "Troops of the National Guard of the Russian Federation",
        "Другие подразделения МО РФ": "Other units of the Russian Defense Ministry",
        "МВД": "MIA",
        "ЧВК": "Private military companies",
        "Незаконные вооружённые формирования": "Illegal armed formations",
        "55+": "55+",
        "От 45 до 55": "From 45 to 55",
        "От 35 до 45": "From 35 to 45",
        "От 25 до 35": "From 25 to 35",
        "От 18 до 25": "From 18 to 25",
        "2014": "2014",
        "2015": "2015",
        "2016": "2016",
        "2017": "2017",
        "2018": "2018",
        "2019": "2019",
        "2020": "2020",
        "2021": "2021",
        "2022": "2022",
        "2023": "2023",
        "2024": "2024"
  }

    },


    // RU translator
    ru: {
      base: {
        header_test: 'Сайт в режиме тестировання и наполнения',
        navbar: {
          home: 'Главная',
          news: 'Новости',
          statistic: 'Статистика',
          search_people: 'Поиск',
          login: 'Вход',
          registration: 'Регистрация',
          person: 'Анкета',
          quit: 'Выйти',
        },
        footer: {
          about_us_title: 'ИНФОРМАЦИЯ О НАС',
          about_us_text: 'Мы собираем факты о потерях российской армии и других военных формирований, задействованных в вооруженной агрессии российской федерации против Украины.\n' +
              'Наша цель - собрать максимальное их количество.',
          contacts: 'Контакты'
        }
      },
      home: {
        title: 'Потерь.НЕТ',
        counter: {
          text_1: 'Нами уже собрано',
          text_2: 'фактов, о потерях российской армии и других военных формирований, задействованных в вооруженной агрессии российской федерации против Украины.',
          text_3: 'Информация, изложенная на сайте, получена из открытых источников.',
        },
        carousel: {
            text_1: 'Новые публикации                                     '
        },
        partners: {
          text_1: 'Наши Партнёры'
        },
        news: {
          text_1: 'Последние новости'
        },
      },
      search: {
        form:{
          placeholder: 'Введите Ф.И.О. для поиска',
          title: 'Поиск',
          butt_search: 'Поиск',
          butt_clear: 'Очистить',
        },
        titles:{
          title: 'Новые публикации',
          title_filter: 'Фильтр',
        },
      },
      person: {
        birthday: 'Дата рождения:',
        unit: 'Воинская часть:',
        clarified: 'Уточняется',

      },
      news: {
        news_title: 'Новости',
        important_news: 'Важные события',
        general_news: 'Общие новости',
      },
      statistic: {
        description: 'Тут Вы можете найти статистические данные о' +
            ' потерях российской армии и других военных формирований,' +
            ' задействованных в вооруженной агрессии российской' +
            ' федерации против Украины, с 2014 года по нынешнее время.',
        military_rank: 'Воинские звание',
        military_rank_sea: 'Военно-морские звание',
        military_base: 'Военные формирования',
        date: 'Возраст',
        date_death: 'Года гибели',
      },
      login: {
        login_title: 'Вход',
        login: 'Логин:',
        password: 'Пароль:',
        login_placeholder: 'Введите логин',
        password_placeholder: 'Введите пароль',
        alert: "Неверное имя пользователя или пароль"
      },
      registration: {
        registration_title: 'Регистрация',
        registration_button: 'Зарегистрироваться',
        login: 'Логин:',
        login_placeholder: 'Ваш логин',
        email: 'Email:',
        email_placeholder: 'Ваша электронная почта ',
        password: 'Создайте пароль:',
        confirm_password: 'Повторите пароль:',
        password_placeholder: 'Введите пароль',
        confirm_password_placeholder: 'Повторите пароль',
        verif_mail: 'Пожалуйста подтвердите почту'
      },
      person_card:{
          personal_data: 'Общая информация',
          date_of_birthday: 'Дата рождения',
          citizenship: 'Гражданство',
          passport: 'Паспорт',
          individual_identification_number: 'Идентификационный код',
          place_of_birthday: 'Место рождения',
          place_of_living: 'Место жительства',
          additional_info: 'Дополнительная информация',
          place_where_accident: 'Место гибели',
          date_of_dead: 'Дата гибели',
          place_of_rip: 'Место погребения',
          date_of_rip: 'Дата погребения',
          type_of_army: 'Род войск',
          rank: 'Воинское звание',
          job_title: "Должность",
          military_unit: 'Воинская часть',
          military_from: 'Местонахождение воинской части',
          button_report_bug: 'Сообщить об ошибке',
          name_error: 'Название ошибки',
          description_error: 'Описание ошибки',
          send_error: 'Отправить',
          info: 'Информация',
          source: 'Источники',
          service: 'Служба',
      },
      ranks: {
        "РЯДОВОЙ": "Рядовой",
        "ЕФРЕЙТОР": "Ефрейтор",
        "МЛАДШИЙ СЕРЖАНТ": "Младший сержант",
        "СЕРЖАНТ": "Сержант",
        "СТАРШИЙ СЕРЖАНТ": "Старший сержант",
        "СТАРШИНА": "Старшина",
        "ПРАПОРЩИК": "Прапорщик",
        "СТАРШИЙ ПРАПОРЩИК": "Старший прапорщик",
        "МЛАДШИЙ ЛЕЙТЕНАНТ": "Младший лейтенант",
        "ЛЕЙТЕНАНТ": "Лейтенант",
        "СТАРШИЙ ЛЕЙТЕНАНТ": "Старший лейтенант",
        "КАПИТАН": "Капитан",
        "МАЙОР": "Майор",
        "ПОДПОЛКОВНИК": "Подполковник",
        "ПОЛКОВНИК": "Полковник",
        "ГЕНЕРАЛ-МАЙОР": "Генерал-майор",
        "ГЕНЕРАЛ-ЛЕЙТЕНАНТ": "Генерал-лейтенант",
        "ГЕНЕРАЛ-ПОЛКОВНИК": "Генерал-полковник",
        "ГЕНЕРАЛ АРМИИ": "Генерал армии",
        "МАРШАЛ РОССИЙСКОЙ ФЕДЕРАЦИИ": "Маршал российской федерации",
        "МАТРОС": "Матрос",
        "СТАРШИЙ МАТРОС": "Старший матрос",
        "СТАРШИНА 1 СТАТЬИ": "Старшина 1 статьи",
        "СТАРШИНА 2 СТАТЬИ": "Старшина 2 статьи",
        "ГЛАВНЫЙ СТАРШИНА": "Главный старшина",
        "ГЛАВНЫЙ КОРАБЕЛЬНЫЙ СТАРШИНА": "Главный корабельний старшина",
        "МИЧМАН": "Мичман",
        "СТАРШИЙ МИЧМАН": "Старший мичман",
        "КАПИТАН-ЛЕЙТЕНАНТ": "Капитан-лейтенант",
        "КАПИТАН 3 РАНГА": "Капитан 3 ранга",
        "КАПИТАН 2 РАНГА": "Капитан 2 ранга",
        "КАПИТАН 1 РАНГА": "Капитан 1 ранга",
        "АДМИРАЛ": "Адмирал",
        "Сухопутные войска": "Сухопутные войска",
        "Воздушно-космические силы": "Воздушно-космические силы",
        "Военно-Морской Флот": "Военно-Морской Флот",
        "Войска национальной гвардии Российской Федерации": "Войска национальной гвардии Российской Федерации",
        "Ракетные войска стратегического назначения": "Ракетные войска стратегического назначения",
        "Воздушно-десантные войска": "Воздушно-десантные войска",
        "Другие подразделения МО РФ": "Другие подразделения МО РФ",
        "МВД": "МВД",
        "ЧВК": "ЧВК",
        "Незаконные вооружённые формирования": "Незаконные вооружённые формирования",
        "55+": "55+",
        "От 45 до 55": "От 45 до 55",
        "От 35 до 45": "От 35 до 45",
        "От 25 до 35": "От 25 до 35",
        "От 18 до 25": "От 18 до 25",
        "2014": "2014",
        "2015": "2015",
        "2016": "2016",
        "2017": "2017",
        "2018": "2018",
        "2019": "2019",
        "2020": "2020",
        "2021": "2021",
        "2022": "2022",
        "2023": "2023",
        "2024": "2024"
  }
    },


    // UK translator
    uk: {
      base: {
        header_test: 'Сайт в режимі тестування та наповнення',
        navbar: {
          home: 'Головна',
          news: 'Новини',
          statistic: 'Статистика',
          search_people: 'Пошук',
          login: 'Вхід',
          registration: 'Реєстрація',
          person: 'Анкета',
          quit: 'Вихід',
       },
        footer: {
          about_us_title: 'Інформація про нас',
          about_us_text: 'Ми збираємо факти про втрати російської армії та інших військових формувань,\n' +
              '                   задіяних у збройній агресії російської федерації проти України.\n' +
              '                   Наша мета - зібрати максимальну їх кількість.',
          contacts: 'Контакти'
        }
      },
      home: {
        title: 'Потерь.НЕТ',
        counter: {
          text_1: 'Нами вже зібрано',
          text_2: 'фактів, про втрати російської армії та інших військових формувань, задіяних у збройній агресії російської федерації проти України.',
          text_3: 'Інформація, викладена на сайті, отримана з відкритих джерел.',
        },
        carousel: {
            text_1: 'Нові публікації'
        },
        partners: {
          text_1: 'Наші Партнери'
        },
        news: {
          text_1: 'Останні новини'
        },
      },
      search: {
        form:{
          placeholder: 'Введіть П.І.Б. для пошуку',
          title: 'Пошук',
          butt_search: 'Пошук',
          butt_clear: 'Очистити',
        },
        titles:{
          title: 'Нові публікації',
          title_filter: 'Фільтр',
        },
      },
      person: {
        birthday: 'Дата народження:',
        unit: 'Військова частина:',
        clarified: 'Уточнюється',
      },
      news: {
        news_title: 'Новини',
        important_news: 'Важливі події',
        general_news: 'Загальні новини',
      },
      statistic: {
        description: 'Тут Ви можете знайти статистичні дані' +
            ' про втрати російськох армії та інших військових' +
            ' формувань, задіяних у збройній агресії російської' +
            ' федерації проти України, з 2014 року по теперешній час.',
        military_rank: 'Військові звання',
        military_rank_sea: 'Військово-морські звання',
        military_base: 'Військові формування',
        date: 'Вік',
        date_death: 'Рік загибелі',

      },
      login: {
        login_title: 'Вхід',
        login: 'Логін:',
        password: 'Пароль:',
        login_placeholder: 'Введіть логін',
        password_placeholder: 'Введіть пароль',
        alert: "Неправильне ім'я користувача або пароль"
      },
      registration: {
        registration_title: 'Реєстрація',
        registration_button: 'Зареєструватися',
        login: 'Логін:',
        login_placeholder: 'Ваш логін',
        email: 'Email:',
        email_placeholder: 'Ваша електронна пошта ',
        password: 'Створіть пароль:',
        confirm_password: 'Повторіть пароль:',
        password_placeholder: 'Створіть пароль',
        confirm_password_placeholder: 'Повторіть пароль',
        verif_mail: 'Будь ласка, підтвердіть пошту'
      },
      person_card:{
              personal_data: 'Загальна інформація',
              date_of_birthday: 'Дата народження',
              citizenship: 'Громадянство',
              passport: 'Паспорт',
              individual_identification_number: 'Ідентифікаційний код',
              place_of_birthday: 'Місце народження',
              place_of_living: 'Місце проживання',
              additional_info: 'Додаткова інформація',
              place_where_accident: 'Місце загибелі',
              date_of_dead: 'Дата загибелі',
              place_of_rip: 'Місце поховання',
              date_of_rip: 'Дата поховання',
              type_of_army: 'Рід військ',
              rank: 'Військове звання',
              job_title: "Посада",
              military_unit: 'Військова частина',
              military_from: 'Місцезнаходження військової частини',
              button_report_bug: 'Повідомити про помилку',
              name_error: 'Назва помилки',
              description_error: 'Опис помилки',
              send_error: 'Відправити',
              info: 'Інформація',
              source: 'Джерела',
              service: 'Служба'
          },
      ranks: {
        "РЯДОВОЙ": "Рядовий",
        "ЕФРЕЙТОР": "Єфрейтор",
        "МЛАДШИЙ СЕРЖАНТ": "Молодший сержант",
        "СЕРЖАНТ": "Сержант",
        "СТАРШИЙ СЕРЖАНТ": "Старший сержант",
        "СТАРШИНА": "Старшина",
        "ПРАПОРЩИК": "Прапорщик",
        "СТАРШИЙ ПРАПОРЩИК": "Старший прапорщик",
        "МЛАДШИЙ ЛЕЙТЕНАНТ": "Молодший лейтенант",
        "ЛЕЙТЕНАНТ": "Лейтенант",
        "СТАРШИЙ ЛЕЙТЕНАНТ": "Старший лейтенант",
        "КАПИТАН": "Капітан",
        "МАЙОР": "Майор",
        "ПОДПОЛКОВНИК": "Підполковник",
        "ПОЛКОВНИК": "Полковник",
        "ГЕНЕРАЛ-МАЙОР": "Генерал-майор",
        "ГЕНЕРАЛ-ЛЕЙТЕНАНТ": "Генерал-лейтенант",
        "ГЕНЕРАЛ-ПОЛКОВНИК": "Генерал-полковник",
        "ГЕНЕРАЛ АРМИИ": "Генерал армії",
        "МАРШАЛ РОССИЙСКОЙ ФЕДЕРАЦИИ": "Маршал російской федерації",
        "МАТРОС": "Матрос",
        "СТАРШИЙ МАТРОС": "Старший матрос",
        "СТАРШИНА 1 СТАТЬИ": "Старшина 1 статті",
        "СТАРШИНА 2 СТАТЬИ": "Старшина 2 статті",
        "ГЛАВНЫЙ СТАРШИНА": "Головний старшина",
        "ГЛАВНЫЙ КОРАБЕЛЬНЫЙ СТАРШИНА": "Головний корабельний старшина",
        "МИЧМАН": "Мічман",
        "СТАРШИЙ МИЧМАН": "Старший мічман",
        "КАПИТАН-ЛЕЙТЕНАНТ": "Капітан-лейтенант",
        "КАПИТАН 3 РАНГА": "Капітан 3 рангу",
        "КАПИТАН 2 РАНГА": "Капітан 2 рангу",
        "КАПИТАН 1 РАНГА": "Капітан 1 рангу",
        "АДМИРАЛ": "Адмірал",
        "Сухопутные войска": "Сухопутні війська",
        "Воздушно-космические силы": "Повітряно-космічні сили",
        "Военно-Морской Флот": "Військово-морський флот",
        "Ракетные войска стратегического назначения": "Ракетні війська стратегічного призначення",
        "Воздушно-десантные войска": "Повітряно-десантні війська",
        "Войска национальной гвардии Российской Федерации": "Війська національної гвардії Російської Федерації",
        "Другие подразделения МО РФ": "Інші підрозділи МО РФ",
        "МВД": "МВС",
        "ЧВК": "ПВК",
        "Незаконные вооружённые формирования": "Незаконні збройні формування",
        "55+": "55+",
        "От 45 до 55": "Від 45 до 55",
        "От 35 до 45": "Від 35 до 45",
        "От 25 до 35": "Від 25 до 35",
        "От 18 до 25": "Від 18 до 25",
        "2014": "2014",
        "2015": "2015",
        "2016": "2016",
        "2017": "2017",
        "2018": "2018",
        "2019": "2019",
        "2020": "2020",
        "2021": "2021",
        "2022": "2022",
        "2023": "2023",
        "2024": "2024"
  }
    },
  },
});


export const getTitleTranslation = (key) => {
  return i18n.global.t(key);
};

export default i18n;
