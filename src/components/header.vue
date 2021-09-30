<template>
  <header>
    <div class="wrap wrap-px">
      <router-link to="/" class="logo">MeetApp</router-link>
      <div>
        <nav>
          <a href="#">link</a>
          <a href="#">link</a>
          <a href="#">link</a>
          <a href="#">link</a>
        </nav>
        <div class="authorization">
          <a href="#">Sign-in</a>
          <a href="#">Sign-up</a>
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

      a {
        padding: 5px;
      }
    }
  }
}
</style>
