<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <About />
  </div>
</template>

<script>
import Header from "./Header.vue"
import About from "./About.vue"
export default {
  components: {
    Header,
    About
}
}
</script>