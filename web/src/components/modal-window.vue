<template>
  <div class="modal">
    <div class="modal-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>