<template>
  <footer>
    <div class="wrap">
      <router-link to="/" class="logo">MeetApp</router-link>
      <div>
        <!-- <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background-color: #f6f6f6;
  box-shadow: 0 0 10px 1px #d8d8d8;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      a {
        padding: 5px;
      }
    }
  }
}
</style>
