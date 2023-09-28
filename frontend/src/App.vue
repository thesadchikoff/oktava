<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import PrimaryButton from "@/components/PrimaryButton.vue";
</script>

<template>
    <section class="wrapper">
        <header class="header">
            <RouterLink to="/">
                <img src="@/assets/logo.png" alt="logo" width="150">
            </RouterLink>
            <nav>
                <RouterLink to="/leadersboard">
                    <primary-button>Турнирная таблица</primary-button>
                </RouterLink>
            </nav>
        </header>
        <RouterView class="router-view"/>
    </section>
</template>

<style lang="scss" scoped>
.wrapper {
    a {
        text-decoration: none;
    }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .router-view {
    flex: 1;
  }

  .header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
      align-items: center;
    border-bottom: 1px solid rgba(220, 220, 220, 0.43);
      span {
          font-weight: bold;
          font-size: 20px;
          background: -webkit-linear-gradient(#7b87ff, #172b91);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }
    nav {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
