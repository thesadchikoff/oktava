<template>
  <div class="tests-wrapper" v-if="tests">
      <h1>Все тесты</h1>
      <div class="items-box">
          <router-link :to="'/test/' + test.id" class="test" v-for="test in tests" :key="test.id">
              <div class="title">
                  <span class="test-title">"Стражи КИИ"</span>
                  <span class="test-count">Тест содержит 20 вопросов</span>
              </div>
              <Button style="background-color: white; color: black;" label="Перейти"/>
          </router-link>
      </div>
  </div>
  <div v-else>
      <h1>Загрузка...</h1>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import Button from "primevue/button";
import {URL} from "@/config";

const tests = ref(null)
const route = useRoute()
console.log("Route: " + route);
onMounted(() => {
    axios.get(`${URL}/tests`).then(res => tests.value = res.data)
})
</script>

<style lang="scss" scoped>
.tests-wrapper {
    padding: 20px;
    h1 {
        color: rgba(24, 24, 24, 0.57);
    }
  .items-box {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    a {
      .title {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 200px;
      text-decoration: none;
    }
    .test {
      padding: 10px;
      background: rgb(114,106,255);
      background: linear-gradient(90deg, rgba(114,106,255,1) 0%, rgba(70,70,255,1) 38%, rgba(111,174,232,1) 100%);
      color: white;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .test-count {
        font-size: 14px;
      }
      .test-title {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
</style>