<template>
    <div class="wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" fill="none">
            <g clip-path="url(#clip0_14_22)">
                <path d="M63 40.2221V65.8888M63 120.75C31.1056 120.75 5.25 94.8944 5.25 63C5.25 31.1056 31.1056 5.25 63 5.25C94.8944 5.25 120.75 31.1056 120.75 63C120.75 94.8944 94.8944 120.75 63 120.75ZM63.3196 85.1388V85.7804L62.6804 85.7779V85.1388H63.3196Z" stroke="#FF4444" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_14_22">
                    <rect width="126" height="126" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        <div class="result">
            <span><b>{{name}}</b>, к сожалению Вы не перешли проходной балл.</span>
            <span>Ваш результат: <b>{{percent}}%</b></span>
            <span>Вы ответили верно на <b>{{correct_answers}}</b> вопросов из <b>20</b></span>
            <router-link to="/">
                <primary-button>На главную</primary-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
    name: "DefeatView",
    components: {PrimaryButton},
    data() {
        return {
            name: localStorage.getItem('user_name'),
            percent: localStorage.getItem('percent'),
            correct_answers: localStorage.getItem('correct_answers')
        }
    }
}
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
        text-align: center;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
}
</style>