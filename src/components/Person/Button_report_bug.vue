<template>
  <div>
    <button class="open-modal-btn" @click="openModal">{{ $t('person_card.button_report_bug')}}</button>
    <!-- Сообщить об ошибке -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2>{{ $t('person_card.button_report_bug') }}</h2>
            <button @click="closeModal" class="close"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="errorTitle">{{ $t('person_card.name_error')}}:</label>
              <input v-model="title" type="text" id="errorTitle" class="form-control" required maxlength="60">
            </div>
            <div class="form-group">
              <label for="errorDescription">{{ $t('person_card.description_error')}}:</label>
              <textarea v-model="text" id="errorDescription" class="form-control wider-input" required maxlength="256"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="submitForm" class="btn btn-primary">{{ $t('person_card.send_error')}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    props: {
        person_id:{
            type: Number,
            required: true
        }
    },
  data() {
    return {
        isModalOpen: false,
        title: "",
        text: "",
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitForm(event) {
        event.preventDefault();
        const data = {
            title: this.title,
            text: this.text,
            person_id: this.person_id
        };
        const apiUrl = process.env.VUE_APP_HOST_BACKEND;
        axios.post(`${apiUrl}/api/v1/persons/callbacks/`, data)
          .then(response => {
            alert('Success, you send callback.');
            this.isModalOpen = false;
          })
          .catch(error => {
            alert('Try again !');
            console.error(error);
          });
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  width: 600px;
  background-color: #fff;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-size: 20px;
}

.close {
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  position: relative;
  width: 24px;
  height: 24px;
}

.close::before {
  content: "\00D7";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close:hover {
  color: red;
}

.open-modal-btn {
  background-color: #0056b3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.wider-input {
  width: 100%;
  max-width: 100%;
  height: 200%;
}
</style>
