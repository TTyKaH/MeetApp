<template>
  <div class="create-meet">
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
        <v-date-picker v-model="fields.date" />
        <div class="action">
          <button class="btn" type="submit" @click="createMeet()">
            Create meet
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
      fields: {
        clientID: "",
        description: "",
        date: null,
      },
    };
  },
  created() {
    this.axios.get("/api/appointment").then((resp) => {
      console.log("appointments:", resp.data);
    });
  },
  methods: {
    createMeet() {
      const fields = { ...fields };
      return this.axios
        .post("/api/appointment/", fields, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        })
        .catch((error) => {
          if (error.response) {
            console.log("error", error);
            console.log("error.response", error.response);
            // console.log("error.response.status", error.response.status);
            // console.log("error.response.data", error.response.data);
            // console.log("error.response.headers", error.response.headers);
          } else if (error.request) {
            // console.log("error.request", error.request);
          } else {
            // console.log("Error", error.message);
          }
          // console.log("error config", error.config);
        });
    },
  },
};
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

      .calendar {
        align-self: flex-start;
        margin-top: 10px;

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

      .action {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
    }
  }
}
</style>
