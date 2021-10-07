<template>
  <section>
    <div class="wrap wrap-px">
      <div class="filler span-3">
        Plan and choose a convenient time for the meeting!
      </div>
      <div class="filler">
        In future this place will be contain have info filler
      </div>
      <div class="filler span-2">
        In future this place will be contain have info filler
      </div>
      <div class="filler">
        In future this place will be contain have info filler
      </div>
      <div class="filler span-2">
        In future this place will be contain have info filler
      </div>
      <div class="filler">
        In future this place will be contain have info filler
      </div>
      <div class="filler span-2">
        In future this place will be contain have info filler
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // created() {
  //   this.axios.get("/api/users").then((resp) => {
  //     console.log(resp);
  //   });
  // },
};
</script>

<style lang="scss">
section {
  .wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  .filler {
    display: flex;
    justify-content: center;
    background-color: #f6f6f6;
    box-shadow: 0 2px 10px 1px #d8d8d8;
    font-size: 24px;
    padding: 25px 10px;
    border-radius: 3px;
  }
}
</style>
