<template>
    <button @click="handler" :disabled="disable">
        <slot/>
    </button>
</template>

<script>
export default {
    name: "PrimaryButton",
    props: {
        handler: Function,
        disable: Boolean
    }
}
</script>

<style scoped>
button {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    cursor: pointer;
    padding: 15px 25px;
    background-color: #4361FF;
    border-radius: 5px;
    outline: none;
    border: none;
    color: white;
    font-weight: 500;
    box-shadow: 0px 4px 10px 0px rgba(67, 97, 255, 0.51);
    &:hover {
        filter: brightness(130%);
    }
}
button:disabled {
    box-shadow: none;
    opacity: 60%;
    cursor: unset;
}
</style>