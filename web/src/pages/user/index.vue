<template>
  <div class="meetings-info">
    <section class="user">
      <div class="wrap wrap-px wrap-py">
        <div class="user-head">
          <div class="table-name">User's profile data:</div>
          <div class="actions">
            <router-link class="btn" to="/edit-profile"
              >Edit profile</router-link
            >
          </div>
        </div>
        <hr />
        <div class="fields">
          <div>
            <div class="field">
              <div class="field-property">ID:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.id || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">First Name:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.firstName || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Last Name:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.lastName || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Email:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.email || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Phone:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.phone || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Role:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.role || "N/A" }}</div>
            </div>
          </div>
          <div>
            <div class="field">
              <div class="field-property">Country:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.country || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">City:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.city || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Adress:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.address || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Company Name:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.companyName || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Created:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.createdAt || "N/A" }}</div>
            </div>
            <div class="field">
              <div class="field-property">Last Updated:</div>
              <div class="table-line"></div>
              <div class="field-value">{{ userData.updatedAt || "N/A" }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="meetings">
      <div class="wrap wrap-px wrap-py">
        <div class="meetings-action">
          <div class="table-name">Meetings</div>
          <div>
            <router-link class="btn" to="/create-meet">Create meet</router-link>
          </div>
        </div>
        <hr />
        <div class="table">
          <div class="table-head">
            <div class="date span-2">Date</div>
            <div class="description span-8">Description</div>
            <div class="status span-1">Status</div>
            <div class="action span-1">Action</div>
          </div>
          <hr />
          <!-- TODO: Create page for more info about meet -->
          <!-- TODO: Create global css for tables -->
          <div class="table-rows">
            <div v-for="meet in meetings" :key="meet.id" class="row">
              <div class="date span-2">{{ meet.date }}</div>
              <div class="description span-8">{{ meet.description }}</div>
              <div class="status span-1">{{ meet.status }}</div>
              <router-link class="action btn span-1" to="/edit-meet"
                >Edit meet</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 1,
      userData: {},
      meetings: [],
    };
  },
  created() {
    // this.axios.get(`/api/users/${this.userId}`).then((resp) => {
    //   console.log(resp);
    // });
    this.axios.get(`/api/users/${this.userId}`).then((resp) => {
      return (this.userData = resp.data);
    });
    this.axios.get("/api/appointments/").then((resp) => {
      return (this.meetings = resp.data);
    });
  },
  methods: {
    // Сюда подставляется id пользователя из vuex, которое доступно после авторизации
    // или сразу делать это в криэйтед с использованием id текущего пользователя
    getUserData(id) {
      this.axios.get(`/api/users/${id}`);
    },
  },
};
</script>

<style lang="scss">
.meetings-info {
  .user {
    margin-bottom: 24px;
    .wrap {
      background-color: #f6f6f6;
      border-radius: 3px;
      box-shadow: 0 2px 10px 1px #d8d8d8;

      .user-head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          padding: 5px;
        }
      }

      .fields {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  .meetings {
    .wrap {
      background-color: #f6f6f6;
      border-radius: 3px;
      box-shadow: 0 2px 10px 1px #d8d8d8;

      .meetings-action {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        a {
          padding: 5px;
        }
      }

      .table {
        .table-head {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }

        .table-rows {
          display: grid;
          gap: 5px;

          .row {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
          }
        }

        .date {
          white-space: nowrap;
        }

        .description {
          padding: 0 40px;
          word-wrap: break-word;
        }

        .status {
          place-self: center;
        }

        .action {
          place-self: center;
        }
      }
    }
  }
}
</style>
