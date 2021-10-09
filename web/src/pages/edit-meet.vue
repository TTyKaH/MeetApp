<template>
  <div class="edit-meet">
    <div class="wrap wrap-px wrap-py wrap-xs">
      <form action="">
        <label>
          Who do you want to meet? (write ID)
          <input v-model="fields.clientID" type="text" />
        </label>
        <label>
          Describe the reason for your meeting!
          <textarea v-model="fields.description" rows="4" type="text" />
        </label>
        <div class="calendar">
          Choose date!
          <v-date-picker v-model="fields.date" />
        </div>
        <div class="action">
          <button class="btn" type="submit" @click="updateMeet()">
            Update Meet
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1, // meet id
      fields: {
        clientID: "",
        description: "",
        date: "",
      },
    };
  },
  created() {
    this.axios.get(`/api/appointments/${this.id}`).then((resp) => {
      this.fields.clientID = resp.data.clientID;
      this.fields.description = resp.data.description;
      this.fields.date = resp.data.date;
    });
  },
  methods: {
    updateMeet() {
      const fields = { id: this.id, ...this.fields };
      this.axios.put(`/api/appointments/${this.id}`, fields);
    },
  },
};
</script>

<style lang="scss">
.edit-meet {
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
