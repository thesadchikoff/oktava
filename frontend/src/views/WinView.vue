<template>
    <div class="wrapper">
   
        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" fill="none">
            <path d="M82 50.3333L56.6667 75.6667L44 63M63 120C31.5198 120 6 94.4802 6 63C6 31.5198 31.5198 6 63 6C94.4802 6 120 31.5198 120 63C120 94.4802 94.4802 120 63 120Z"
                  stroke="#5DBC3C" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="result">
            <span><b>{{ name }}</b>, Вы преодолели все преграды и завершили игру "Стражи КИИ"!
Ваш результат – <b>{{ score }}</b> баллов.
Вы уверенно чувствуете себя в кибер-пространстве и готовы быть в авангарде Стражей Кибербезопасности! Поздравляем!
</span>
            <Message :closable="false" style="border: none;width: 100%;">
                <span style="font-size: 14px; text-align: justify-all">
                    Теперь, Вы можете направиться к <b>стенду № 1</b> и забрать свой заслуженный подарок! Пусть эта победа напоминает о Вашей силе и возможностях, вдохновляет на новые приключения и достижения!
                </span>
            </Message>

            <router-link to="/">
                <primary-button>На главную</primary-button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import PrimaryButton from "@/components/PrimaryButton.vue";
import {ref} from "vue";
import Message from "primevue/message";

const name = ref(localStorage.getItem("user_name"))
const score = ref(localStorage.getItem("score"))
</script>

<style lang="scss" scoped>
.wrapper {
  a {
    text-decoration: none;
  }

  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
  }
}
</style>