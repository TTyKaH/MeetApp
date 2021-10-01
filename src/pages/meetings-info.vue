<template>
  <div class="meetings-info">
    <section class="user">
      <div class="wrap wrap-px wrap-py">
        <div class="user-head">
          <div class="user-id">user id</div>
          <div class="actions">
            <a href="">action</a>
            <a href="">action</a>
            <a href="">action</a>
          </div>
        </div>
        <div class="user-data">
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
        </div>
      </div>
    </section>
    <section class="meetings">
      <div class="wrap wrap-px wrap-py">
        <div class="meetings-action">
          Meetings
          <div>
            <a href="#">action</a>
            <a href="#">action</a>
            <a href="#">action</a>
          </div>
        </div>
        <div class="meetings-table">
          <div class="row">some info about meet <a href="#">action</a></div>
          <div class="row">some info about meet <a href="#">action</a></div>
          <div class="row">some info about meet <a href="#">action</a></div>
          <div class="row">some info about meet <a href="#">action</a></div>
          <div class="row">some info about meet <a href="#">action</a></div>
          <div class="row">some info about meet <a href="#">action</a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.meetings-info {
  .user {
    margin-bottom: 24px;
    .wrap {
      background-color: #f6f6f6;
      border-radius: 3px;
      box-shadow: 0 2px 10px 1px #d8d8d8;

      .user-head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        a {
          padding: 5px;
        }
      }

      .user-data {
        display: grid;
        gap: 5px;

        .field {
          display: flex;
        }
      }
    }
  }

  .meetings {
    .wrap {
      background-color: #f6f6f6;
      border-radius: 3px;
      box-shadow: 0 2px 10px 1px #d8d8d8;

      .meetings-action {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        a {
          padding: 5px;
        }
      }

      .meetings-table {
        display: grid;
        gap: 5px;

        .row {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
