<template>
  <header>
    <div class="wrap wrap-px">
      <router-link to="/" class="logo">MeetApp</router-link>
      <div>
        <nav>
          <router-link to="/meetings-info">link</router-link>
          <a href="#">link</a>
          <a href="#">link</a>
          <a href="#">link</a>
        </nav>
        <!-- переключение через vuex - переменная "isSigniN" -->
        <div class="authorization">
          <div>
            <a href="#">Sign-in</a>
            <a href="#">Sign-up</a>
          </div>
          <a href="#">Sign-out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  background-color: #f6f6f6;
  box-shadow: 0 0 10px 1px #d8d8d8;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      gap: 100px;

      nav {
        display: flex;
        align-items: center;
      }

      a {
        padding: 5px;
      }
    }
  }
}
</style>
