<template>
  <div class="app">
    <div>
      <Header></Header>
      <div class="content">
        <router-view />
      </div>
    </div>
    <Footer></Footer>
    <!-- <ModalWindow>
      <SignIn />
    </ModalWindow> -->
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
// import ModalWindow from "@/components/modal-window";
// import SignIn from "@/components/sign-in";

export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
.app {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;

  .content {
    margin: 40px 0;
  }

  footer {
    justify-self: flex-end;
  }
}
</style>
