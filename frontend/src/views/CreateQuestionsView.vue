<template>
  <div class="wrapper">
      <h1>Создание вопроса</h1>
      <div class="create-question-block">
          <div class="question-title">
              <label for="username">Описание вопроса</label>
              <InputText type="text" v-model="value" placeholder="Укажите вопрос"/>
          </div>
          <div class="question-answers">
              <label for="username">Ответы на вопрос</label>
              <div v-for="(input, index) in inputs" :key="index" class="input-box">
                  <InputText type="text" v-model="input.answer_name" placeholder="Укажите ответ"/>
                  <svg @click="removeInput(inputs, index)" v-if="index > 0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#6C6D6F"/>
                      <path opacity="0.5" d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#6C6D6F"/>
                  </svg>
              </div>
              <Button @click="addInput(inputs)" class="btn" label="Создать еще"/>
          </div>
          <div class="question-answers">
              <label for="username">Укажите правильный ответ</label>
              <InputText type="text" v-model="correctAnswer" placeholder="Укажите ответ"/>
          </div>
          <div class="question-answers" v-if="inputsForScreens.length > 0">
              <label for="username">Скриншоты к вопросу (Если требуется)</label>
              <div v-for="(input, index) in inputsForScreens" :key="index" class="input-box">
                  <InputText type="text" v-model="input.answer_name" placeholder="Указывать только URL изображения"/>
                  <svg @click="removeInput(inputsForScreens, index)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#6C6D6F"/>
                      <path opacity="0.5" d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#6C6D6F"/>
                  </svg>
              </div>
              <Button v-if="inputsForScreens.length > 0" type="button" label="Создать еще" @click="addInput(inputsForScreens)" class="btn"/>
          </div>
          <div class="question-answers" v-else>
              <Button class="submit-button" @click="addScreend" label="Добавить скриншоты"/>
          </div>
          <div class="submit-box">
              <div>
                  <Button :loading="loading" class="submit-button" @click="submitQuestionOnServer" label="Создать вопрос"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {ref} from "vue";
import axios from "axios";
const loading = ref(false)
const value = ref("")
const correctAnswer = ref("")
const inputs = ref([{ answer_name: '' }]);
const inputsForScreens = ref([]);
import {URL} from "@/config";

const addInput = (arr) => {
    arr.push({ answer_name: '' });
};

const removeInput = (arr, index) => {
    arr.splice(index, 1);
};
const addScreend = () => {
    return inputsForScreens.value.push({answer_name: ""})
}
const submitQuestionOnServer = () => {
    if (!value.value && !correctAnswer.value) return alert("Вы оставили пустые поля")
    for (const item of inputs.value) {
        if (!item.answer_name) return alert("Вы оставили пустые поля")
    }
    for (const item of inputsForScreens.value) {
        if (!item.answer_name) return alert("Вы оставили пустые поля")
    }
    loading.value = true
    axios.post(`${URL}/questions`, {
        question_name: value.value,
        correct_answer: correctAnswer.value,
        answers: inputs.value,
        photo_answers: inputsForScreens.value
    }).then(res => console.log(res.data)).finally(() => loading.value = false)
    value.value = "";
    correctAnswer.value = "";
    inputs.value = [{answer_name: ""}];
    inputsForScreens.value = []
}
</script>

<style lang="scss" scoped>
.submit-box {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    flex: 1;
    width: 600px;
}
.submit-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrapper {
    padding: 20px;
    display: flex;
    gap: 50px;
    align-items: center;
  .create-question-block {
    width: 100%;
    display: flex;
      height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    input {
      width: 600px;
    }
    .question-title {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .question-answers {
      display: flex;
        width: 600px;
      flex-direction: column;
      gap: 15px;
        .input-box {
            position: relative;
            display: flex;
            align-items: center;
            svg {
                position: absolute;
                right: 10px;
                cursor: pointer;
            }
        }
    }
  }
}
</style>