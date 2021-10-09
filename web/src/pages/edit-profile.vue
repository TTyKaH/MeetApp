<template>
  <div class="edit-profile">
    <div class="wrap wrap-px wrap-py">
      <form action="">
        <label>
          First Name:
          <input v-model="fields.firstName" type="text" />
        </label>
        <label>
          Last Name:
          <textarea v-model="fields.lastName" rows="4" type="text" />
        </label>
        <label>
          Birthday:
          <textarea v-model="fields.lastName" rows="4" type="text" />
        </label>
        <label>
          Email:
          <textarea v-model="fields.lastName" rows="4" type="text" />
        </label>
        <label>
          Phone:
          <textarea v-model="fields.lastName" rows="4" type="text" />
        </label>
        <label>
          Company Name (if you have):
          <textarea v-model="fields.lastName" rows="4" type="text" />
        </label>
        <div class="action">
          <button class="btn" type="submit">Update Meet</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        firstName: "",
        lastName: "",
      },
    };
  },
};
</script>

<style lang="scss">
.edit-profile {
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

      .calendar {
        display: grid;
        gap: 10px;
      }

      .action {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }
  }
}
</style>
