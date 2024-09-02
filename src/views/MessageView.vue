<template>
  <section>
    <div class="container">
      <form @submit.prevent="handleSubmit">

        <div class="row">
          <h2 class="heading">Данные о погибшем</h2>

          <div class="col-lg">
          <h3 class="text-center">Общая информация</h3>
            <div class="mb-3">
              <label for="last_name" class="form-label">Фамилия:</label>
              <input type="text" id="last_name" v-model="last_name" class="form-control" required>
              <div class="invalid-feedback">Фамилия.</div>
            </div>
            <div class="mb-3">
              <label for="first_name" class="form-label">Имя:</label>
              <input type="text" id="first_name" v-model="first_name" class="form-control" required>
              <div class="invalid-feedback">Имя.</div>
            </div>
            <div class="mb-3">
              <label for="middle_name" class="form-label">Отчество:</label>
              <input type="text" id="middle_name" v-model="middle_name" class="form-control" >
              <div class="invalid-feedback">Отчество.</div>
            </div>
            <div class="mb-3">
              <label for="citizenship" class="form-label">Гражданство:</label>
              <input type="text" id="citizenship" v-model="citizenship" class="form-control" >
              <div class="invalid-feedback">Гражданство.</div>
            </div>
            <div class="mb-3">
              <label for="place_of_birthday" class="form-label">Место рождения:</label>
              <input type="text" id="place_of_birthday" v-model="place_of_birthday" class="form-control" >
              <div class="invalid-feedback">Место рождения.</div>
            </div>
            <div class="mb-3">
              <label for="place_of_living" class="form-label">Место жительства:</label>
              <input type="text" id="place_of_living" v-model="place_of_living" class="form-control" >
              <div class="invalid-feedback">Место жительства.</div>
            </div>
            <div class="mb-3">
              <label for="place_where_accident" class="form-label">Место гибели:</label>
              <input type="text" id="place_where_accident" v-model="place_where_accident" class="form-control" >
              <div class="invalid-feedback">Место гибели.</div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="data_when_accident_day" class="form-control-lg">День гибели:</label>
                    <select id="data_when_accident_day" v-model="data_when_accident_day" class="form-select">
                      <option value="">-- Выберите --</option>
                      <option v-for="day in days" :value="day" :key="day">{{ day }}</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="data_when_accident_month" class="form-control-lg">Месяц гибели:</label>
                    <select id="data_when_accident_month" v-model="data_when_accident_month" class="form-select">
                      <option value="">-- Выберите --</option>
                      <option v-for="(month, index) in months" :value="index + 1" :key="month">{{ month }}</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="data_when_accident_year" class="form-control-lg">Год гибели:</label>
                    <select id="data_when_accident_year" v-model="data_when_accident_year" class="form-select">
                      <option value="">-- Выберите --</option>
                      <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="place_of_rip" class="form-label">Место погребения:</label>
              <input type="text" id="place_of_rip" v-model="place_of_rip" class="form-control" >
              <div class="invalid-feedback">Место погребения.</div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="place_of_rip_date_day" class="form-control-lg">День погребения:</label>
                    <select id="place_of_rip_date_day" v-model="place_of_rip_date_day" class="form-select">
                      <option value="">-- Выберите --</option>
                      <option v-for="day in days" :value="day" :key="day">{{ day }}</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="place_of_rip_date_month" class="form-control-lg">Месяц погребения:</label>
                    <select id="place_of_rip_date_month" v-model="place_of_rip_date_month" class="form-select">
                      <option value="">-- Выберите --</option>
                      <option v-for="(month, index) in months" :value="index + 1" :key="month">{{ month }}</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="place_of_rip_date_year" class="form-control-lg">Год погребения:</label>
                    <select id="place_of_rip_date_year" v-model="place_of_rip_date_year" class="form-select">
                      <option value="">-- Выберите --</option>
                      <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <h3 class="text-center">Служба</h3>
            <div class="mb-3">
              <label for="type_of_army_choice" class="form-label">Род войск:</label>
              <select id="type_of_army_choice" v-model="type_of_army_choice" class="form-select" >
                <option value="">-- Выберите --</option>
                <option value="Сухопутные войска">Сухопутные войска</option>
                <option value="Воздушно-космические силы">Воздушно-космические силы</option>
                <option value="Военно-Морской Флот">Военно-Морской Флот</option>
                <option value="Войска национальной гвардии Российской Федерации">Войска национальной гвардии Российской Федерации</option>
                <option value="Ракетные войска стратегического назначения">Ракетные войска стратегического назначения</option>
                <option value="Воздушно-десантные войска">Воздушно-десантные войска</option>
                <option value="Другие подразделения МО РФ">Другие подразделения МО РФ</option>
                <option value="МВД">МВД</option>
                <option value="ЧВК">ЧВК</option>
                <option value="Незаконные вооружённые формирования">Незаконные вооружённые формирования</option>
              </select>
              <div class="invalid-feedback">Пожалуйста, выберите род войск.</div>
            </div>
            <div class="mb-3">
              <label for="rank_choice" class="form-label">Воинское звание:</label>
              <select id="rank_choice" v-model="rank_choice" class="form-select" >
                <option value="">-- Выберите --</option>
                <option value="Рядовой">Рядовой</option>
                <option value="Ефрейтор">Ефрейтор</option>
                <option value="Младший сержант">Младший сержант</option>
                <option value="Сержант">Сержант</option>
                <option value="Старший сержант">Старший сержант</option>
                <option value="Старшина">Старшина</option>
                <option value="Прапорщик">Прапорщик</option>
                <option value="Старший прапорщик">Старший прапорщик</option>
                <option value="Младший лейтенант">Младший лейтенант</option>
                <option value="Лейтенант">Лейтенант</option>
                <option value="Старший лейтенант">Старший лейтенант</option>
                <option value="Капитан">Капитан</option>
                <option value="Майор">Майор</option>
                <option value="Подполковник">Подполковник</option>
                <option value="Полковник">Полковник</option>
                <option value="Генерал-майор">Генерал-майор</option>
                <option value="Генерал-лейтенант">Генерал-лейтенант</option>
                <option value="Матрос">Матрос</option>
                <option value="Старший матрос">Старший матрос</option>
                <option value="Старшина 1 статьи">Старшина 1 статьи</option>
                <option value="Старшина 2 статьи">Старшина 2 статьи</option>
                <option value="Главный старшина">Главный старшина</option>
                <option value="Главный корабельний старшина">Главный корабельний старшина</option>
                <option value="Мичман">Мичман</option>
                <option value="Старший мичман">Старший мичман</option>
                <option value="Капитан-лейтенант">Капитан-лейтенант</option>
                <option value="Капитан 3 ранга">Капитан 3 ранга</option>
                <option value="Капитан 2 ранга">Капитан 2 ранга</option>
                <option value="Капитан 1 ранга">Капитан 1 ранга</option>
              </select>
              <div class="invalid-feedback">Пожалуйста, выберите воинское звание.</div>
            </div>
            <div class="mb-3">
              <label for="job_title" class="form-label">Должность:</label>
              <input type="text" id="job_title" v-model="job_title" class="form-control" >
              <div class="invalid-feedback">Должность.</div>
            </div>
            <div class="mb-3">
              <label for="military_unit" class="form-label">Воинская часть::</label>
              <input type="text" id="military_unit" v-model="military_unit" class="form-control" >
              <div class="invalid-feedback">Служба.</div>
            </div>
            <div class="mb-3">
              <label for="military_from" class="form-label">Местонахождение воинской части:</label>
              <input type="text" id="military_from" v-model="military_from" class="form-control" >
              <div class="invalid-feedback">Местонахождение воинской части.</div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
          <h3 class="text-center">Дополнительная информация</h3>
            <div class="mb-3">
              <label for="additional_info" class="form-label">Дополнительная информация:</label>
              <textarea id="additional_info" v-model="additional_info" class="form-control" rows="6"></textarea>
              <div class="invalid-feedback">Дополнительная информация.</div>
            </div>
            <div class="mb-3">
              <label for="source" class="form-label">Источник:</label>
              <textarea id="source" v-model="source" class="form-control" ></textarea>
              <div class="invalid-feedback">Пожалуйста, введите источник.</div>
            </div>
            <div class="mb-3">
                              <label for="images" class="form-label">Фотографии (максимум 3, каждая не более 2 МБ):</label>
                              <input type="file" id="images" ref="images" accept="image/*" multiple @change="handleFileChange" class="form-control">
                              <div class="invalid-feedback">Пожалуйста, загрузите фотографии.</div>
                            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Отправить</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      last_name: '',
      first_name: '',
      middle_name: '',
      citizenship: '',
      place_of_birthday: '',
      place_of_living: '',
      place_where_accident: '',
      data_when_accident_day: '',
      data_when_accident_month: '',
      data_when_accident_year: '',
      place_of_rip: '',
      place_of_rip_date_day: '',
      place_of_rip_date_month: '',
      place_of_rip_date_year: '',
      type_of_army_choice: '',
      rank_choice: '',
      job_title: '',
      military_unit: '',
      military_from: '',
      additional_info: '',
      source: '',
      images: [],
      days: [...Array(31).keys()].map(day => day + 1),
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      years: [...Array(100).keys()].map(year => 2023 - year),
    };
  },
  methods: {

    handleSubmit() {
      const formData = {
          last_name: this.last_name,
          first_name: this.first_name,
          middle_name: this.middle_name,
          citizenship: this.citizenship,
          place_of_birthday: this.place_of_birthday,
          place_of_living: this.place_of_living,
          place_where_accident: this.place_where_accident,
          data_when_accident_day: this.data_when_accident_day,
          data_when_accident_month: this.data_when_accident_month,
          data_when_accident_year: this.data_when_accident_year,
          place_of_rip: this.place_of_rip,
          place_of_rip_date_day: this.place_of_rip_date_day,
          place_of_rip_date_month: this.place_of_rip_date_month,
          place_of_rip_date_year: this.place_of_rip_date_year,
          type_of_army_choice: this.type_of_army_choice,
          rank_choice: this.rank_choice,
          job_title: this.job_title,
          military_unit: this.military_unit,
          military_from: this.military_from,
          additional_info: this.additional_info,
          source: this.source,

        };


      const headers = {
            'Authorization': `JWT ${this.$store.state.authToken}`,
      };


      const apiUrl = process.env.VUE_APP_HOST_BACKEND;
      axios.post(`${apiUrl}/api/v1/persons/message/`, formData, {headers: headers})
        .then((response) => {
          console.log(response);

        })
        .catch((error) => {
          console.error(error);
          console.log({headers: headers})
          console.log(typeof `JWT ${this.$store.state.authToken}`);
        });

    },
    handleFileChange(event) {
    const files = event.target.files;
    this.images = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const imageData = {
          name: file.name,
          size: file.size,
          type: file.type,
          dataURL: reader.result,
        };

        this.images.push(imageData);
        console.log(this.images); // Выводим содержимое массива в консоль
      };
    }
  },
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.form-label {
  font-weight: bold;
}

.invalid-feedback {
  color: red;
}

.form-control-lg{


}

.heading {
  margin-bottom: 20px; /* Отступ снизу для создания промежутка между надписью и колонками */
  text-align: center;
}

</style>