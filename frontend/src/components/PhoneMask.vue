<template>
    <div>
        <b-form-input class="line disabled-bold form-control form-control-sm is-valid phone-input"
                      type="tel"
                      :value="value"
                      @input="change"
                      placeholder="+7 (___) ___ __ __"
                      :class="{'is-invalid': !valid}"/>
        <b-form-invalid-feedback v-if="!nonValidated" v-show="!valid">
            <template v-if="errorMessage">
                {{errorMessage}}
            </template>
            <template v-else-if="required">
                Поле обязательно для заполнения
            </template>
        </b-form-invalid-feedback>
    </div>
</template>

<script>
import Inputmask from "inputmask";
import MaskedInput from 'vue-text-mask';

export default {
    name: "PhoneInput",
    components: {
        MaskedInput,
    },
    props: {
        value: {
            type: [Date, String],
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        valid: {
            type: [Boolean, Object],
            default: true,
        },
        validationData: {
            type: Object,
            default: () => {
            },
        },
        state: null,
        required: {
            type: Boolean,
            default: false,
        },
        nonValidated: {
            type: Boolean,
            default: false,
        },
        errorMessage: {
            type: String,
            default: 'Ошибка заполнения данных',
        }
    },
    mounted() {
        let selector = document.getElementsByClassName('phone-input');
        this.bindPhoneMask(selector);
    },
    methods: {
        change(value) {
            if (!value) return;
            let val = value;
            if (val[0] === '8') {
                val = val.replace('8', '+7');
            }
            if (val.replace(/[^0-9]+/g, '') === '789') {
                val = '79';
            }
            this.$emit('input', val);
        },
        bindPhoneMask(inputElement, regexMask = null, placeholder = null) {
            if (!regexMask) regexMask = '^\\+7 \\([3489]\\d\\d\\) \\d\\d\\d \\d\\d \\d\\d$';
            if (!placeholder) placeholder = '+7 (___) ___ __ __';

            Inputmask({
                regex: regexMask,
                placeholder: placeholder,
                postValidation: buffer => {
                    let nums = buffer.join('').replace(/[^0-9]+/g, '');
                    let hasSevenNumbersInARow = (/(\d)\1{6}/g).test(nums);
                    return !hasSevenNumbersInARow;
                }
            }).mask(inputElement);
        },
    }
}
</script>