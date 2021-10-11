<template>
  <div class="admin">
    <div class="statistic">
      <div class="wrap wrap-px wrap-py">
        Statistic:
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
              <div class="field-property">Users count:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ users.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/users-list">
              <div class="field-property">Organizations count:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ users.length }}</div>
            </router-link>
            <router-link class="field" to="/admin/users-list">
              <div class="field-property">Banned:</div>
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
        Menu:
        <hr />
        <div>
          <div class="actions-group">
            actions group name
            <div>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
            </div>
          </div>
          <div class="actions-group">
            actions group name
            <div>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
            </div>
          </div>
          <div class="actions-group">
            actions group name
            <div>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
              <a class="action btn">action</a>
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

  a {
    padding: 5px;
  }

  .statistic {
    hr {
      margin: 10px 0 20px;
    }

    .fields {
      display: grid;
      gap: 40px;
      grid-template-columns: repeat(2, 1fr);
      white-space: nowrap;

      .field {
        display: flex;
        gap: 10px;
      }

      .table-line {
        background-color: #000;
        width: 100%;
        height: 1px;
        align-self: flex-end;
        margin: 0 5px 4px 5px;
        opacity: 0.25;
      }
    }
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
