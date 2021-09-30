<template>
  <div class="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
