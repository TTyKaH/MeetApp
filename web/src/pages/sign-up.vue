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
          <input v-model="fields.name" type="text" required />
        </label>
        <div class="action">
          <button class="btn" @click="createUser()">Sign-Up</button>
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
        name: "",
      },
    };
  },
  created() {
    this.axios.get("/api/users").then((resp) => {
      console.log("Users:", resp.data);
    });
  },
  methods: {
    createUser() {
      const fields = { ...this.fields };
      console.log("зашли в createUser");
      return this.axios.post("/api/users", fields, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    },
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
