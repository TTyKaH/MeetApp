<template>
  <div class="admin">
    <div class="statistic">
      <div class="wrap wrap-px wrap-py">
        Statistic:
        <hr />
        <!-- this felds like an action -->
        <div class="fields">
          <a class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </a>
          <a class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </a>
          <a class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </a>
          <a class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </a>
          <a class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </a>
          <a class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </a>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="wrap wrap-px wrap-py">
        Menu:
        <hr />
        <div>
          <div class="actions-group">
            actions group name
            <div>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
            </div>
          </div>
          <div class="actions-group">
            actions group name
            <div>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
            </div>
          </div>
          <div class="actions-group">
            actions group name
            <div>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.admin {
  display: grid;
  gap: 24px;

  .wrap {
    background-color: #f6f6f6;
    border-radius: 3px;
    box-shadow: 0 2px 10px 1px #d8d8d8;
  }

  a {
    padding: 5px;
  }

  .statistic {
    hr {
      margin: 10px 0 20px;
    }

    .fields {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3, 1fr);

      .field {
        display: flex;
        gap: 10px;
      }
    }
  }

  .menu {
    hr {
      margin: 10px 0 20px;
    }

    .wrap > div {
      display: grid;
      gap: 20px;
    }

    .actions-group {
      display: grid;
      gap: 10px;

      > div {
        display: flex;
        gap: 20px;
      }
    }
  }
}
</style>
