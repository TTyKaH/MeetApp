<template>
  <div class="edit-profile">
    <div class="wrap wrap-px wrap-py wrap-xs">
      <form action="">
        <label>
          First Name:
          <input v-model="fields.firstName" type="text" />
        </label>
        <label>
          Last Name:
          <input v-model="fields.lastName" type="text" />
        </label>
        <label>
          Birthday:
          <input v-model="fields.birthday" type="text" />
        </label>
        <label>
          Email:
          <input v-model="fields.email" type="text" />
        </label>
        <label>
          Phone:
          <input v-model="fields.phone" type="text" />
        </label>
        <label>
          Company Name (if you have):
          <input v-model="fields.companyName" type="text" />
        </label>
        <label>
          Country:
          <input v-model="fields.country" type="text" />
        </label>
        <label>
          City:
          <input v-model="fields.city" type="text" />
        </label>
        <label>
          Address
          <input v-model="fields.address" type="text" />
        </label>
        <div class="action">
          <button class="btn" @click="updateUser()">Update Meet</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1, // user id
      fields: {
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
        phone: "",
        companyName: "",
        country: "",
        city: "",
        address: "",
      },
    };
  },
  created() {
    this.axios.get(`/api/users/${this.id}`).then((resp) => {
      this.fields.firstName = resp.data.firstName;
      this.fields.lastName = resp.data.lastName;
      this.fields.birthday = resp.data.birthday;
      this.fields.email = resp.data.email;
      this.fields.phone = resp.data.phone;
      this.fields.companyName = resp.data.companyName;
      this.fields.country = resp.data.country;
      this.fields.city = resp.data.city;
      this.fields.address = resp.data.address;
    });
  },
  methods: {
    updateUser() {
      const fields = { id: this.id, ...this.fields };
      this.axios.put(`/api/users/${this.id}`, fields);
    },
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
