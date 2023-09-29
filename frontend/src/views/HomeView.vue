<script setup>
import {reactive, ref, watch} from "vue";
import ArrowLeft from "@/components/icons/ArrowLeft.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {useToast} from "primevue/usetoast";
import Toast from 'primevue/toast';
import router from "@/router";
import {URL} from "@/config";

const toast = useToast();


const route = useRoute();

const personal_information = reactive({
    name: "",
    email: "",
    company: "",
    phone: ""
})

const steps = reactive({
    step: route.query.step || 1,
    data: {
        personal_information: {
            name: "",
            email: "",
            company: "",
            phone: ""
        },
    }

})
const isValidEmail = ref(false);

const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValidEmail.value = regex.test(personal_information.email);
};

const categories = ref([])
const getAllCategories = async () => {
    await axios.get(`${URL}/categories`).then(res => categories.value = res.data)
}
const nextStep = () => {
    getAllCategories()
    steps.step = steps.step + 1
    if (!steps.data.personal_information.name && !steps.data.personal_information.email && !steps.data.personal_information.company) {
        steps.data.personal_information.name = personal_information.name
        steps.data.personal_information.email = email.value
        steps.data.personal_information.company = personal_information.company
        steps.data.personal_information.phone = personal_information.phone
    }
}

const disabledButton = (firstArgument, secondArgument, thirdArgument, fourthArgument) => {
    return !(firstArgument && secondArgument && thirdArgument && fourthArgument);

}
const email = ref('')
const characterCount = ref(0);
watch(email, (newValue, oldValue) => {
    if (newValue.length > oldValue.length) {
        isValidEmail.value = false
        // Вызов обработчика при добавлении символа
        console.log('Добавлен символ:', newValue[newValue.length - 1]);
    } else if (newValue.length < oldValue.length) {
        isValidEmail.value = false
        // Вызов обработчика при удалении символа
        console.log('Удален символ:', oldValue[oldValue.length - 1]);
    }

    characterCount.value = newValue.length;
});
const createUser = async () => {
    try {
        await axios.post(`${URL}/users`, personal_information).then((res) => {
            localStorage.setItem('user_id', res.data.id)
            localStorage.setItem('user_name', res.data.first_name)
            toast.add({
                severity: 'success',
                summary: 'Добро пожаловать!',
                detail: `${res.data.first_name}, Вы успешно запустили сессию!`,
                life: 3000
            })
        })
        await router.push("/tests/")
    } catch (e) {
        console.log(e.response.data.message);
        toast.add({severity: 'error', summary: 'Error!', detail: e.response.data.message, life: 3000})
    }
}
const prevStep = () => {
    steps.step = steps.step - 1
}
</script>

<template>
    <div v-if="steps.step === 1">
        <div class="test-wrapper">
            <div class="test-title">
                <h1>Добро пожаловать в мир "Стражей КИИ"!</h1>
                <primary-button @click="nextStep" class="btn">Начать</primary-button>
            </div>
            <div class="test-body">
                <p class="intro">
                    Игра, которая представляет собой захватывающий вызов для всех, кто жаждет проверить свои навыки в
                    области информационной безопасности, этичного взлома и пентестинга!
                    Здесь Вам предстоит пройти несколько вопросов, каждый из которых проверит Ваши знания и навыки в
                    области Red Team Hacking. Суть игры – собрать как можно больше правильных ответов и получить
                    заслуженный приз на Стенде № 1.
                    Ну что, Вы готовы принять вызов "Стражей КИИ" и показать, на что способны? Тогда начинаем!
                </p>

                <span class="note">
               Пожалуйста, помните, что "Стражи КИИ" - это игра только для обучения и оценки навыков в области этичного взлома. Вы должны соблюдать законы и этические принципы при выполнении заданий, а результаты игры не должны использоваться в незаконных или вредоносных целях.
            </span>
            </div>
        </div>
    </div>
    <main class="main-wrapper" v-else-if="steps.step === 2">
        <Toast/>
        <form @submit.prevent.stop class="auth-form">
            <h1>Добро пожаловать!</h1>
            <input v-model="personal_information.name" type="text" placeholder="Укажите своё имя*">
            <input v-model="personal_information.email" type="email" placeholder="Укажите свою почту*">
            <input v-model="personal_information.company" type="text" placeholder="Из какой Вы компании?*">
            <input v-model="personal_information.phone" type="number" placeholder="Укажите свой телефон*">
            <div>
                <p class="valid" v-if="isValidEmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clip-path="url(#clip0_58_10)">
                            <path d="M12.0227 7.52275C12.2424 7.30308 12.2424 6.94692 12.0227 6.72725C11.8031 6.50758 11.4469 6.50758 11.2273 6.72725L7.875 10.0795L6.77275 8.97725C6.55308 8.75758 6.19692 8.75758 5.97725 8.97725C5.75758 9.19692 5.75758 9.55308 5.97725 9.77275L7.47725 11.2727C7.69692 11.4924 8.05308 11.4924 8.27275 11.2727L12.0227 7.52275Z"
                                  fill="#5DBC3C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9 0.9375C4.5472 0.9375 0.9375 4.5472 0.9375 9C0.9375 13.4528 4.5472 17.0625 9 17.0625C13.4528 17.0625 17.0625 13.4528 17.0625 9C17.0625 4.5472 13.4528 0.9375 9 0.9375ZM2.0625 9C2.0625 5.16852 5.16852 2.0625 9 2.0625C12.8315 2.0625 15.9375 5.16852 15.9375 9C15.9375 12.8315 12.8315 15.9375 9 15.9375C5.16852 15.9375 2.0625 12.8315 2.0625 9Z"
                                  fill="#5DBC3C"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_58_10">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Email действительный
                </p>
                <p class="invalid" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clip-path="url(#clip0_58_8)">
                            <path d="M7.52272 6.72724C7.30306 6.50757 6.9469 6.50757 6.72723 6.72724C6.50756 6.94691 6.50756 7.30307 6.72723 7.52274L8.20449 9L6.72725 10.4772C6.50758 10.6969 6.50758 11.0531 6.72725 11.2727C6.94692 11.4924 7.30307 11.4924 7.52274 11.2727L8.99998 9.79549L10.4772 11.2727C10.6969 11.4924 11.053 11.4924 11.2727 11.2727C11.4924 11.0531 11.4924 10.6969 11.2727 10.4772L9.79548 9L11.2727 7.52275C11.4924 7.30308 11.4924 6.94693 11.2727 6.72726C11.0531 6.50759 10.6969 6.50759 10.4772 6.72726L8.99998 8.2045L7.52272 6.72724Z"
                                  fill="#F81C1C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9 0.9375C4.5472 0.9375 0.9375 4.5472 0.9375 9C0.9375 13.4528 4.5472 17.0625 9 17.0625C13.4528 17.0625 17.0625 13.4528 17.0625 9C17.0625 4.5472 13.4528 0.9375 9 0.9375ZM2.0625 9C2.0625 5.16852 5.16852 2.0625 9 2.0625C12.8315 2.0625 15.9375 5.16852 15.9375 9C15.9375 12.8315 12.8315 15.9375 9 15.9375C5.16852 15.9375 2.0625 12.8315 2.0625 9Z"
                                  fill="#F81C1C"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_58_8">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Email недействительный
                </p>
                <p class="invalid" v-if="!personal_information.phone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clip-path="url(#clip0_58_8)">
                            <path d="M7.52272 6.72724C7.30306 6.50757 6.9469 6.50757 6.72723 6.72724C6.50756 6.94691 6.50756 7.30307 6.72723 7.52274L8.20449 9L6.72725 10.4772C6.50758 10.6969 6.50758 11.0531 6.72725 11.2727C6.94692 11.4924 7.30307 11.4924 7.52274 11.2727L8.99998 9.79549L10.4772 11.2727C10.6969 11.4924 11.053 11.4924 11.2727 11.2727C11.4924 11.0531 11.4924 10.6969 11.2727 10.4772L9.79548 9L11.2727 7.52275C11.4924 7.30308 11.4924 6.94693 11.2727 6.72726C11.0531 6.50759 10.6969 6.50759 10.4772 6.72726L8.99998 8.2045L7.52272 6.72724Z"
                                  fill="#F81C1C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9 0.9375C4.5472 0.9375 0.9375 4.5472 0.9375 9C0.9375 13.4528 4.5472 17.0625 9 17.0625C13.4528 17.0625 17.0625 13.4528 17.0625 9C17.0625 4.5472 13.4528 0.9375 9 0.9375ZM2.0625 9C2.0625 5.16852 5.16852 2.0625 9 2.0625C12.8315 2.0625 15.9375 5.16852 15.9375 9C15.9375 12.8315 12.8315 15.9375 9 15.9375C5.16852 15.9375 2.0625 12.8315 2.0625 9Z"
                                  fill="#F81C1C"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_58_8">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Номер телефона не указан
                </p>
            </div>
            <primary-button v-if="isValidEmail" :handler="createUser"
                            :disable="disabledButton(personal_information.name, personal_information.email, personal_information.company, personal_information.phone)">
                Далее
                <arrow-left/>
            </primary-button>
            <primary-button :handler="validateEmail" v-else>Проверить</primary-button>
        </form>
    </main>
</template>

<style lang="scss" scoped>
@media (max-width: 391px) {
    .test-title {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 20px;
        button {
            width: 100%;
        }
    }
}
.intro {

  text-align: center;
  text-indent: 40px;
  margin: 0 auto;
}

.valid {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  font-size: 13px;
  background-color: rgba(0, 128, 0, 0.14);
  border-radius: 5px;
  color: green;
}

.invalid {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  font-size: 13px;
  background-color: rgba(232, 34, 34, 0.11);
  border-radius: 5px;
  color: red;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .auth-form {
    padding: 0 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      text-decoration: none;

      button {
        width: 100%;
      }
    }

    .button-section {
      display: flex;
      align-items: center;
      gap: 10px;

      a {
        text-decoration: none;
      }
    }

    input {
      outline: none;
      padding: 15px 25px;
      border-radius: 5px;
      border: 2px solid #4361FF;
      font-size: 14px;
      font-weight: 500;
    }

    .category-item {
      padding: 10px;
      border: 2px solid #4361FF;
      display: flex;
      gap: 5px;
      border-radius: 5px;
      cursor: pointer;

      sup {
        padding: 2px 5px;
        background-color: #ff5656;
        color: white;
        border-radius: 5px;
      }
    }

    .active-item {
      background-color: #4361FF;
      color: white;
    }
  }
}
</style>