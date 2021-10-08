<template>
  <div class="sign-up">
    <div class="wrap wrap-px wrap-py wrap-xs">
      <!-- TODO: need components -->
      <form action="">
        <label>
          Email:
          <input v-model="fields.email" type="email" required />
        </label>
        <label>
          Password
          <input v-model="fields.password" type="password" required />
        </label>
        <label>
          First Name:
          <input v-model="fields.firstName" type="text" required />
        </label>
        <div class="action">
          <button class="btn" @click="SignUp()">Sign-Up</button>
          <button class="btn" @click="show()">show users</button>
          <router-link class="btn" to="/sign-in">Sign-In</router-link>
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
        email: "",
        password: "",
        firstName: "",
      },
    };
  },
  created() {
    this.axios.get("/api/users").then((resp) => {
      console.log("Users:", resp.data);
    });
  },
  methods: {
    SignUp() {
      const fields = { ...this.fields };
      // Это плохое решение для валидации (рользователь может найти данные других пользователей)
      // this.axios.get("/api/users").then((resp) => {
      //   resp.data.forEach((element) => {
      //     if (fields.email === element.email) {
      //       return console.log("This email is already taken!");
      //     }
      //   });
      // });
      return (
        this.axios
          .post("/api/users", fields, {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          })
          // TODO: Не удается вывести кастомное сообщение ошибки
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
          })
      );
    },
    SignIn() {
      return this.axios.get("/api/users/");
    },
    // function for testing
    show() {
      this.axios.get("/api/users").then((resp) => {
        console.log("Users:", resp.data);
      });
    },
  },
};
</script>

<style lang="scss">
.sign-up {
  .wrap {
    background-color: #f6f6f6;
    box-shadow: 0 2px 10px 1px #d8d8d8;
    border-radius: 3px;

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
  }
}
</style>
