<template>
  <div class="admin">
    <div class="statistic">
      <div class="wrap wrap-px wrap-py">
        <div class="table-name">Statistic:</div>
        <hr />
        <!-- this felds like an action -->
        <div class="fields">
          <div>
            <router-link class="field" to="/admin/users-list">
              <div class="field-property">Admins count:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ users.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/users-list">
              <div class="field-property">All Users count:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ users.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/users-list">
              <div class="field-property">Users count:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ users.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/users-list">
              <div class="field-property">Organizations count:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ users.length }}</div>
            </router-link>
          </div>
          <div>
            <router-link class="field" to="/admin/meets-list">
              <div class="field-property">Meets count:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ meetings.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/meets-list">
              <div class="field-property">Active Meets:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ meetings.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/meets-list">
              <div class="field-property">On Approval:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ meetings.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/meets-list">
              <div class="field-property">Closed Meets:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ meetings.length }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="wrap wrap-px wrap-py">
        <div class="table-name">
          Go to specific lists: (lead to lists with specific sort)
        </div>
        <hr />
        <div>
          <div class="actions-group">
            Users:
            <div>
              <router-link to="/admin/users-list" class="btn"
                >All Users</router-link
              >
              <router-link to="/admin/users-list" class="btn"
                >Users Consumers</router-link
              >
              <router-link to="/admin/users-list" class="btn"
                >Users Organizations</router-link
              >
              <router-link to="/admin/users-list" class="btn"
                >Users Admins</router-link
              >
              <router-link to="/admin/users-list" class="btn"
                >Users Banned</router-link
              >
            </div>
          </div>
          <div class="actions-group">
            Meets:
            <div>
              <router-link to="/admin/meets-list" class="btn"
                >All Meets</router-link
              >
              <router-link to="/admin/meets-list" class="btn"
                >Meets Created by Consumers</router-link
              >
              <router-link to="/admin/meets-list" class="btn"
                >Meets Created by Organizations</router-link
              >
              <router-link to="/admin/meets-list" class="btn"
                >Meets Active</router-link
              >
              <router-link to="/admin/meets-list" class="btn"
                >Meets on Approval</router-link
              >
              <router-link to="/admin/meets-list" class="btn"
                >Meets Closed</router-link
              >
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
      users: {},
      meetings: [],
    };
  },
  created() {
    this.axios.get(`/api/users/`).then((resp) => {
      return (this.users = resp.data);
    });
    this.axios.get("/api/appointments/").then((resp) => {
      return (this.meetings = resp.data);
    });
  },
};
</script>

<style lang="scss">
.admin {
  display: grid;
  gap: 24px;

  .wrap {
    background-color: #f6f6f6;
    border-radius: 3px;
    box-shadow: 0 2px 10px 1px #d8d8d8;
  }

  .fields {
    grid-template-columns: repeat(2, 1fr);
  }

  a {
    padding: 5px;
  }

  .menu {
    .wrap > div {
      display: grid;
      gap: 20px;
    }

    .actions-group {
      display: grid;
      gap: 10px;

      > div {
        display: flex;
        gap: 20px;
      }
    }
  }
}
</style>
