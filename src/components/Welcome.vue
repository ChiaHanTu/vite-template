<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store";
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<template>
  <header>
    <img
      alt="elementPlus logo"
      class="logo"
      src="@/assets/elementPlus.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">
          <el-button type="primary">Home</el-button>
        </RouterLink>
        <RouterLink to="/about">
          <el-button type="primary">About</el-button>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
