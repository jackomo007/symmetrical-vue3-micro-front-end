<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">

    <Header />

    <div class="mt-5 mb-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const Header = defineAsyncComponent(() => import("remote/Header"));

export default {
  components:{
    Header
  },
}
</script>