<template>
  <div class="sign-in">
    <div class="wrap wrap-px wrap-py wrap-xs">
      <!-- TODO: need components -->
      <form action="">
        <label>
          Input name
          <input type="text" />
        </label>
        <label>
          Input name
          <input type="text" />
        </label>
        <div class="action">
          <button class="btn" type="submit">Sign-In</button>
          <router-link class="btn" to="/sign-up">Sign-Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sign-in {
  .wrap {
    background-color: #f6f6f6;
    box-shadow: 0 2px 10px 1px #d8d8d8;
    border-radius: 3px;

    form {
      display: grid;
      gap: 10px;

      label {
        display: grid;
        gap: 5px;
      }

      .action {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
    }
  }
}
</style>
