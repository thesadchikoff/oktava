<template>
    <div class="wrapper">
        <div class="title">
            <router-link to="/">На главную</router-link>
            <h1>Таблица лидеров</h1>
            <div class="plug"/>
        </div>
        <div class="users-wrapper" v-if="sessions.length > 0">
            <div class="session-item" v-for="(session, index) in sessions" :key="session.id">
                <div class="flex-start">
                    <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         viewBox="0 0 30 30" fill="none">
                        <path d="M25 18.7503C25 24.0684 21.7274 26.402 19.1985 27.189C19.0932 27.2217 18.995 27.2242 18.9075 27.2034C18.5467 27.1177 18.3678 26.6377 18.6274 26.2645C19.7279 24.683 21 22.2701 21 20.0003C21 17.562 18.9449 14.6834 17.3401 12.9079C16.9733 12.502 16.3333 12.7706 16.3133 13.3173C16.247 15.1288 15.9612 17.5525 14.7285 19.4519C14.5301 19.7577 14.1089 19.783 13.8829 19.4971C13.4977 19.0101 13.1126 18.4083 12.7275 17.933C12.52 17.677 12.1451 17.6734 11.9058 17.9C10.9728 18.7834 9.66667 20.161 9.66667 21.8753C9.66667 23.0376 10.117 24.2562 10.6251 25.2367C10.8778 25.7244 10.4957 26.3019 10.0225 26.1994C9.97239 26.1885 9.92121 26.17 9.86966 26.143C7.64133 24.9736 5 22.6048 5 18.7503C5 14.8172 10.3879 9.36878 12.4451 4.2214C12.7697 3.40916 13.7701 3.02749 14.4659 3.55754C18.6799 6.76761 25 12.9729 25 18.7503Z"
                              fill="url(#paint0_linear_19_31)"/>
                        <path opacity="0.5"
                              d="M9.66675 21.8755C9.66675 23.0379 10.1171 24.2565 10.6252 25.2369C10.8779 25.7246 10.4958 26.3021 10.0226 26.1997C10.625 26.875 14.5953 27.3969 18.9076 27.2037C18.5468 27.118 18.3678 26.6379 18.6275 26.2648C19.728 24.6833 21.0001 22.2704 21.0001 20.0005C21.0001 17.5623 18.945 14.6837 17.3402 12.9082C16.9733 12.5022 16.3334 12.7708 16.3134 13.3176C16.2471 15.1291 15.9613 17.5527 14.7286 19.4522C14.5302 19.758 14.109 19.7833 13.883 19.4974C13.4978 19.0103 13.1127 18.4086 12.7275 17.9333C12.5201 17.6772 12.1451 17.6737 11.9058 17.9003C10.9729 18.7837 9.66675 20.1612 9.66675 21.8755Z"
                              fill="url(#paint1_linear_19_31)"/>
                        <defs>
                            <linearGradient id="paint0_linear_19_31" x1="15" y1="3.31299" x2="15" y2="27.2168"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF8B49"/>
                                <stop offset="1" stop-color="#E43B06"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_19_31" x1="15.3334" y1="12.7124" x2="15.3334" y2="27.2443"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF8B49"/>
                                <stop offset="1" stop-color="#D10505"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg v-if="index === 1" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         viewBox="0 0 30 30" fill="none">
                        <path d="M25 18.7503C25 24.0684 21.7274 26.402 19.1985 27.189C19.0932 27.2217 18.995 27.2242 18.9075 27.2034C18.5467 27.1177 18.3678 26.6377 18.6274 26.2645C19.7279 24.683 21 22.2701 21 20.0003C21 17.562 18.9449 14.6834 17.3401 12.9079C16.9733 12.502 16.3333 12.7706 16.3133 13.3173C16.247 15.1288 15.9612 17.5525 14.7285 19.4519C14.5301 19.7577 14.1089 19.783 13.8829 19.4971C13.4977 19.0101 13.1126 18.4083 12.7275 17.933C12.52 17.677 12.1451 17.6734 11.9058 17.9C10.9728 18.7834 9.66667 20.161 9.66667 21.8753C9.66667 23.0376 10.117 24.2562 10.6251 25.2367C10.8778 25.7244 10.4957 26.3019 10.0225 26.1994C9.97239 26.1885 9.92121 26.17 9.86966 26.143C7.64133 24.9736 5 22.6048 5 18.7503C5 14.8172 10.3879 9.36878 12.4451 4.2214C12.7697 3.40916 13.7701 3.02749 14.4659 3.55754C18.6799 6.76761 25 12.9729 25 18.7503Z"
                              fill="url(#paint0_linear_50_2)"/>
                        <path opacity="0.5"
                              d="M9.66675 21.8755C9.66675 23.0379 10.1171 24.2565 10.6252 25.2369C10.8779 25.7246 10.4958 26.3021 10.0226 26.1997C10.625 26.875 14.5953 27.3969 18.9076 27.2037C18.5468 27.118 18.3678 26.6379 18.6275 26.2648C19.728 24.6833 21.0001 22.2704 21.0001 20.0005C21.0001 17.5623 18.945 14.6837 17.3402 12.9082C16.9733 12.5022 16.3334 12.7708 16.3134 13.3176C16.2471 15.1291 15.9613 17.5527 14.7286 19.4522C14.5302 19.758 14.109 19.7833 13.883 19.4974C13.4978 19.0103 13.1127 18.4086 12.7275 17.9333C12.5201 17.6772 12.1451 17.6737 11.9058 17.9003C10.9729 18.7837 9.66675 20.1612 9.66675 21.8755Z"
                              fill="url(#paint1_linear_50_2)"/>
                        <defs>
                            <linearGradient id="paint0_linear_50_2" x1="15" y1="3.31299" x2="15" y2="27.2168"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4563FF"/>
                                <stop offset="1" stop-color="#00072E"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_2" x1="15.3334" y1="12.7124" x2="15.3334" y2="27.2443"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0D218C"/>
                                <stop offset="1" stop-color="#102385"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg v-if="index === 2" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         viewBox="0 0 30 30" fill="none">
                        <path d="M25 18.7503C25 24.0684 21.7274 26.402 19.1985 27.189C19.0932 27.2217 18.995 27.2242 18.9075 27.2034C18.5467 27.1177 18.3678 26.6377 18.6274 26.2645C19.7279 24.683 21 22.2701 21 20.0003C21 17.562 18.9449 14.6834 17.3401 12.9079C16.9733 12.502 16.3333 12.7706 16.3133 13.3173C16.247 15.1288 15.9612 17.5525 14.7285 19.4519C14.5301 19.7577 14.1089 19.783 13.8829 19.4971C13.4977 19.0101 13.1126 18.4083 12.7275 17.933C12.52 17.677 12.1451 17.6734 11.9058 17.9C10.9728 18.7834 9.66667 20.161 9.66667 21.8753C9.66667 23.0376 10.117 24.2562 10.6251 25.2367C10.8778 25.7244 10.4957 26.3019 10.0225 26.1994C9.97239 26.1885 9.92121 26.17 9.86966 26.143C7.64133 24.9736 5 22.6048 5 18.7503C5 14.8172 10.3879 9.36878 12.4451 4.2214C12.7697 3.40916 13.7701 3.02749 14.4659 3.55754C18.6799 6.76761 25 12.9729 25 18.7503Z"
                              fill="url(#paint0_linear_50_5)"/>
                        <path opacity="0.5"
                              d="M9.66675 21.8755C9.66675 23.0379 10.1171 24.2565 10.6252 25.2369C10.8779 25.7246 10.4958 26.3021 10.0226 26.1997C10.625 26.875 14.5953 27.3969 18.9076 27.2037C18.5468 27.118 18.3678 26.6379 18.6275 26.2648C19.728 24.6833 21.0001 22.2704 21.0001 20.0005C21.0001 17.5623 18.945 14.6837 17.3402 12.9082C16.9733 12.5022 16.3334 12.7708 16.3134 13.3176C16.2471 15.1291 15.9613 17.5527 14.7286 19.4522C14.5302 19.758 14.109 19.7833 13.883 19.4974C13.4978 19.0103 13.1127 18.4086 12.7275 17.9333C12.5201 17.6772 12.1451 17.6737 11.9058 17.9003C10.9729 18.7837 9.66675 20.1612 9.66675 21.8755Z"
                              fill="url(#paint1_linear_50_5)"/>
                        <defs>
                            <linearGradient id="paint0_linear_50_5" x1="15" y1="3.31299" x2="15" y2="27.2168"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7DF453"/>
                                <stop offset="1" stop-color="#051200"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_5" x1="15.3334" y1="12.7124" x2="15.3334" y2="27.2443"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5DBC3C"/>
                                <stop offset="1" stop-color="#082000"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <b class="rating-count">{{ index + 1 }}</b>
                    <div class="user-info">
              <span class="user-name">
                  {{ session.user.first_name }}
              </span>
                        <span class="company">
                  Компания: <b>{{ session.user.company }}</b>
              </span>
                    </div>
                </div>
                <div class="score">
                    <b>{{ session.score }}</b>
                    <span>score</span>
                </div>
            </div>
        </div>
        <div class="no-session-wrapper" v-else>
            <div class="label">
                <span>Сессии отсутствуют</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.5"
                          d="M21 6.20766V11.4061C21 16.8106 16.761 19.4332 14.1014 20.5469C13.38 20.849 13.0193 21 12 21C10.9807 21 10.62 20.849 9.89856 20.5469C7.23896 19.4332 3 16.8106 3 11.4061V6.20766C3 4.05201 3 2.97418 3.70725 2.38442C4.4145 1.79467 5.49553 1.97202 7.6576 2.32673L8.71202 2.49971C10.3523 2.76881 11.1724 2.90336 12 2.90336C12.8276 2.90336 13.6477 2.76881 15.288 2.49971L16.3424 2.32673C18.5045 1.97202 19.5855 1.79467 20.2927 2.38442C21 2.97418 21 4.05201 21 6.20766Z"
                          fill="#4872FF"/>
                    <path d="M7.17107 8.78309C7.29454 8.53986 7.75695 8.207 8.50016 8.207C9.24338 8.207 9.70579 8.53986 9.82926 8.78309C10.0144 9.14782 10.4649 9.29574 10.8354 9.11349C11.2059 8.93123 11.3562 8.48781 11.1711 8.12308C10.7123 7.21935 9.60365 6.73047 8.50016 6.73047C7.39668 6.73047 6.28804 7.21935 5.82926 8.12308C5.64411 8.48781 5.79439 8.93123 6.16492 9.11349C6.53544 9.29574 6.98591 9.14782 7.17107 8.78309Z"
                          fill="#4872FF"/>
                    <path d="M15.5002 8.207C14.7569 8.207 14.2945 8.53986 14.1711 8.78309C13.9859 9.14782 13.5354 9.29574 13.1649 9.11349C12.7944 8.93123 12.6441 8.48781 12.8293 8.12308C13.288 7.21935 14.3967 6.73047 15.5002 6.73047C16.6037 6.73047 17.7123 7.21935 18.1711 8.12308C18.3562 8.48781 18.2059 8.93123 17.8354 9.11349C17.4649 9.29574 17.0144 9.14782 16.8293 8.78309C16.7058 8.53986 16.2434 8.207 15.5002 8.207Z"
                          fill="#4872FF"/>
                    <path d="M7.99594 13.8125C7.696 14.0937 7.67123 14.5731 7.9569 14.8683C8.2402 15.1612 8.70946 15.1748 9.00977 14.9007L9.01531 14.896L9.02419 14.8888C9.02939 14.8846 9.03592 14.8795 9.04379 14.8734C9.06315 14.8586 9.09073 14.8384 9.12649 14.8143C9.22721 14.7463 9.39425 14.6462 9.63305 14.5429C10.1081 14.3373 10.8804 14.1131 12 14.1131C13.1196 14.1131 13.8919 14.3373 14.367 14.5429C14.6058 14.6462 14.7728 14.7463 14.8735 14.8143C14.9239 14.8483 14.9578 14.8743 14.9758 14.8888L14.9862 14.8973L14.9909 14.9014C15.2913 15.1748 15.76 15.1609 16.0431 14.8683C16.3288 14.5731 16.3172 14.1058 16.0172 13.8246L16.016 13.8234L16.0146 13.8221L16.0115 13.8192L16.0041 13.8125L15.9842 13.7949C15.9688 13.7815 15.9489 13.7647 15.9244 13.745C15.8754 13.7056 15.8081 13.6548 15.7218 13.5965C15.5491 13.4799 15.3005 13.3339 14.9706 13.1912C14.3081 12.9045 13.3304 12.6366 12 12.6366C10.6696 12.6366 9.69192 12.9045 9.02945 13.1912C8.6995 13.3339 8.45092 13.4799 8.2782 13.5965C8.19189 13.6548 8.1246 13.7056 8.07562 13.745C8.05113 13.7647 8.03121 13.7815 8.01576 13.7949L7.99594 13.8125Z"
                          fill="#4872FF"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import {URL} from "@/config";
const sessions = ref([])

onMounted(() => {
    axios.get(`${URL}/correct-answers/sessions`).then((res) => sessions.value = res.data)
})

</script>

<style lang="scss" scoped>
@media (max-width: 391px) {
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .plug {
      display: none;
    }

    h1 {
      font-size: 16px;
    }

    a {
      text-decoration: none;
      font-weight: 500;
      color: #4361FF;
    }
  }
  .no-session-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    .label {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .wrapper {
    padding: 20px;

    h1 {
      text-align: center;
    }

    .users-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .session-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        border: 1px solid rgba(67, 97, 255, 0.23);
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);

        .score {
          position: relative;
          min-width: 80px;
          min-height: 50px;
          background-color: #4361FF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 5px;

          span {
            position: absolute;
            bottom: -13px;
            padding: 5px 10px;
            font-size: 12px;
            border-radius: 5px;
            background-color: #ff5656;
            color: white;
          }
        }

        .flex-start {
          display: flex;
          gap: 20px;
          align-items: center;

          .user-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 10px;

            .user-name {
              font-weight: bold;
              font-size: 18px;
            }

            .company {
              font-size: 14px;
              font-weight: 500;
              color: rgba(16, 16, 16, 0.62);
            }
          }

          .rating-count {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(67, 97, 255, 0.27);
            color: #101010;
            border: 2px solid #4361FF;
            border-radius: 100%;
          }
        }
      }
    }
  }
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-weight: 500;
    color: #4361FF;
  }
}

.no-session-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  .label {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.wrapper {
  padding: 20px;

  h1 {
    text-align: center;
  }

  .users-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .session-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 20px;
      border: 1px solid rgba(67, 97, 255, 0.23);
      border-radius: 5px;
      -webkit-box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);
      box-shadow: 0px 0px 21px 0px rgba(34, 60, 80, 0.2);

      .score {
        position: relative;
        min-width: 80px;
        min-height: 50px;
        background-color: #4361FF;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 5px;

        span {
          position: absolute;
          bottom: -13px;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 5px;
          background-color: #ff5656;
          color: white;
        }
      }

      .flex-start {
        display: flex;
        gap: 20px;
        align-items: center;

        .user-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;

          .user-name {
            font-weight: bold;
            font-size: 18px;
          }

          .company {
            font-size: 14px;
            font-weight: 500;
            color: rgba(16, 16, 16, 0.62);
          }
        }

        .rating-count {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(67, 97, 255, 0.27);
          color: #101010;
          border: 2px solid #4361FF;
          border-radius: 100%;
        }
      }
    }
  }
}
</style>