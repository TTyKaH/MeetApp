<template>
  <div class="edit-profile">
    <div class="wrap wrap-px wrap-py">
      <div class="field">
        <div>
          <div class="field-property">field:</div>
          <div class="field-value">some value</div>
        </div>
        <a href="#">action</a>
      </div>
      <div class="field">
        <div>
          <div class="field-property">field:</div>
          <div class="field-value">some value</div>
        </div>
        <a href="#">action</a>
      </div>
      <div class="field">
        <div>
          <div class="field-property">field:</div>
          <div class="field-value">some value</div>
        </div>
        <a href="#">action</a>
      </div>
      <div class="field">
        <div>
          <div class="field-property">field:</div>
          <div class="field-value">some value</div>
        </div>
        <a href="#">action</a>
      </div>
      <div class="field">
        <div>
          <div class="field-property">field:</div>
          <div class="field-value">some value</div>
        </div>
        <a href="#">action</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.edit-profile {
  .wrap {
    background-color: #f6f6f6;
    display: grid;
    gap: 5px;

    .field {
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
      }
    }
  }
}
</style>
