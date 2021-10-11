<template>
  <div class="users-list">
    <div class="wrap wrap-px wrap-py">
      <div class="table">
        <!-- TODO: table head will be use sorter component -->
        <div class="table-head">
          <div class="span-1">ID</div>
          <div class="span-2">First Name</div>
          <div class="span-2">Second Name</div>
          <div class="span-3">Email</div>
          <div class="span-1">Role</div>
          <div class="span-3">Actions</div>
        </div>
        <hr />
        <div class="table-rows">
          <div v-for="(user, idx) in users" :key="idx" class="row">
            <div class="span-1">{{ user.id }}</div>
            <div class="span-2">{{ user.firstName }}</div>
            <div class="span-2">{{ user.lastName }}</div>
            <div class="span-3">{{ user.email }}</div>
            <div class="span-1">{{ user.role }}</div>
            <div class="span-3 actions">
              <button class="btn">View</button>
              <button class="btn">Edit</button>
              <button class="btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.axios.get("/api/users/").then((resp) => {
      return (this.users = resp.data);
    });
  },
};
</script>

<style lang="scss">
.users-list {
  .wrap {
    background-color: #f6f6f6;
    border-radius: 3px;
    box-shadow: 0 2px 10px 1px #d8d8d8;
  }

  .table {
    .table-head {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
      white-space: nowrap;
    }

    .table-rows {
      display: grid;
      gap: 20px;

      .row {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(12, 1fr);
        white-space: nowrap;

        .actions {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
}
</style>
