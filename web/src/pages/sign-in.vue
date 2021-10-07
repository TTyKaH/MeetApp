<template>
  <div class="sign-in">
    <div class="wrap wrap-px wrap-py wrap-xs">
      <form action="">
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="text" />
        </label>
        <div class="action">
          <button class="btn span-2" type="submit">Sign-In</button>
          <button class="btn" type="submit">Sign-Up</button>
          <button class="btn" type="submit">Close</button>
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
        gap: 24px;
      }
    }
  }
}
</style>
