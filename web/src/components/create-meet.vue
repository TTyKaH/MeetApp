<template>
  <div class="create-meet">
    <div class="wrap wrap-px wrap-py wrap-sm">
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
          <button class="btn" type="submit">Create meet</button>
        </div>
      </form>
      <div class="calendar">
        Calendar
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.create-meet {
  .wrap {
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    gap: 24px;

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

    .calendar {
      align-self: flex-start;

      > div {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;

        > div {
          width: 25px;
          height: 25px;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
