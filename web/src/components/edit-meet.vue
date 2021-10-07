<template>
  <div class="edit-meet">
    <div class="wrap wrap-px wrap-py wrap-sm">
      <div class="fields">
        <div class="field">some field about meet<a href="#">action</a></div>
        <div class="field">some field about meet<a href="#">action</a></div>
        <div class="field">some field about meet<a href="#">action</a></div>
        <div class="field">some field about meet<a href="#">action</a></div>
        <div class="field">some field about meet<a href="#">action</a></div>
      </div>
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
.edit-meet {
  .wrap {
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .fields {
      display: grid;
      gap: 5px;

      .field {
        display: flex;
        justify-content: space-between;
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
