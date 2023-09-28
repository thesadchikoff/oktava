<template>
  <div class="start-test-wrapper">
      <form @submit.prevent.stop @keyup.enter="currentQuestionIndex === test.questions.length - 1 ? pushAnswersToServer() : nextQuestion()" class="test-box" v-if="test">
          <div class="count-box">
              <span @click="selectAnswerFromCount(count)" :class="['test-count', {'active-count': currentQuestionIndex + 1 === count}]" v-for="count in test.questions.length" :key="count">
                  {{count}}
              </span>
          </div>
<!--          <h1>{{test.questions[currentQuestionIndex].question_name}}</h1>-->
          <span class="answer-description">
              <b>{{currentQuestionIndex + 1}}</b>. {{test.questions[currentQuestionIndex].question_description}}
          </span>
          <div v-if="test.questions[currentQuestionIndex].photo_answer.length > 0">
              <div class="picture-block">
                  <Image v-for="picture in test.questions[currentQuestionIndex].photo_answer" :src="picture.photo_url" :alt="picture.id" :key="picture.id" width="450" height="250" preview />
              </div>
              <span style="font-size: 14px">Нажмите на изображение, чтобы увеличить</span>
          </div>
          <div class="answer-block">
                  <label class="answer-item" v-for="answer in test.questions[currentQuestionIndex].answer" :key="answer.id" :for="answer.id">
                      <RadioButton v-model="selectedItems[currentQuestionIndex].ans" :name="test" :value="answer.answer" :input-id="answer.id"/>
<!--                      <input @change="handleSelection(answer)" type="radio" multiple="multiple" name="answerInput" :id="answer.id">-->
                      {{answer.answer}}
                  </label>
          </div>
          <primary-button v-if="currentQuestionIndex !== test.questions.length - 1" :disable="buttonDisable" :handler="nextQuestion">Следующий вопрос</primary-button>
          <primary-button @keyup.enter="pushAnswersToServer()" v-if="currentQuestionIndex === test.questions.length - 1" :handler="pushAnswersToServer">Завершить тест</primary-button>
      </form>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

interface ICompleteAnswer {
    question_id: string
    correct_answer: string,
}

import {computed, onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import PrimaryButton from "@/components/PrimaryButton.vue";
import RadioButton from 'primevue/radiobutton';
import Image from "primevue/image";
import {URL} from "@/config";

const buttonDisable = ref(false)
const test = ref(null)
const isStartedTest = ref(false)
const route = useRoute()
const questions = ref([])
const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const completeAnswers = ref(test.value ? test.value.questions : [])
const selectedItems = ref([])
const completeAnswersDetect = (ans) => {
    selectedItems.value.push(ans)
}
const pushAnswersToServer = () => {
    axios.post(`${URL}/correct-answers/check`, {
        user_id: localStorage.getItem('user_id'),
        answers: selectedItems.value
    }).then(res => {
        localStorage.setItem('percent', res.data?.percent)
        localStorage.setItem('correct_answers', res.data?.correct)
        localStorage.setItem('score', res.data?.session.score)
        router.push('/win')
    })
}
const selectAnswerFromCount = (index) => {
    currentQuestionIndex.value = index - 1
}
const currentQuestion = computed(() => {
    return test.value.questions[currentQuestionIndex.value];
});

const nextQuestion = () => {
    if (currentQuestionIndex.value === test.value.questions.length - 1) {
        buttonDisable.value = true
        return
    }
    currentQuestionIndex.value++
};
onMounted(() => {
    axios.get(`${URL}/tests/${route.params.id}`).then(res => {
        test.value = res.data
        console.log(res.data.questions.length)
        completeAnswers.value = res.data.questions.map(item => item.answer)
        res.data.questions.forEach((item) => {
            console.log(item.answer);
            selectedItems.value.push({
                ans: "",
                question_id: item.answer[0].question_id
            })
        })
    })
})
const handleSelection = (item) => {
    if(selectedItems.value.includes(item)) {
        const index = selectedItems.value.indexOf(item)
        selectedItems.value.splice((index, 1))
    } else {
        selectedItems.value.push(item)
    }
}
</script>

<style lang="scss">
@media (max-width: 391px) {
    .picture-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        max-width: 100px;
        span {
            img {
                width: 100px;
                height: 100px;
            }
        }
    }
}
.note {
  padding: 10px;
  background: rgba(243, 129, 13, 0.16);
  color: #d96923;
  border-left: 7px solid orange;
}
.test-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .picture-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .answer-description {
    font-size: 20px;
    padding: 20px;
    background-color: rgba(67, 97, 255, 0.18);
  }
  gap: 40px;
  .answer-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .answer-item {
      padding: 20px;
      -webkit-box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);
      border-radius: 10px;
      border: 1px solid rgba(67, 97, 255, 0.25);
    }
  }
}
.test-wrapper {
  padding: 20px;

  .test-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.11);

    .btn {
      padding: 0 50px;
      height: 40px;
    }
  }

  .test-body {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
.start-test-wrapper {
  height: max-content;
  padding: 20px;
  .test-box {
  }
  @media (max-width: 391px) {

    .count-box {
      display: flex;
      width: 100%;
      overflow-x: auto; /* Включаем горизонтальную прокрутку */
      white-space: nowrap;
      gap: 20px;
      -webkit-overflow-scrolling: touch;
      padding: 10px;
      .test-count {
        padding: 20px;
      }
    }

    .count-box .test-count {
      cursor: pointer;
      width: 15px;
      font-size: 14px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #4361FF;
      border-radius: 10px;
    }
  }
  .count-box {
    display: flex;
    justify-content: space-between;
    .active-count {
      background-color: #4361FF;
      color: white;
    }
    .test-count {
      cursor: pointer;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #4361FF;
      border-radius: 10px;
    }
  }
}
</style>