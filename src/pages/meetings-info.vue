<template>
  <div class="meetings-info">
    <section class="user">
      <div class="wrap wrap-px wrap-py">
        <div class="user-head">
          <div class="user-id">user id</div>
          <div class="actions">
            <a class="btn" href="#">Edit profile</a>
          </div>
        </div>
        <div class="user-data">
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
          <div class="field">
            <div class="field-property">field:</div>
            <div class="field-value">some value</div>
          </div>
        </div>
      </div>
    </section>
    <section class="meetings">
      <div class="wrap wrap-px wrap-py">
        <div class="meetings-action">
          Meetings
          <div>
            <router-link class="btn" to="/create-meet">Create meet</router-link>
          </div>
        </div>
        <div class="meetings-table">
          <div class="table-head">
            <div class="date">Date</div>
            <div class="desc">Description</div>
            <div class="status">Status</div>
            <div class="action">Action</div>
          </div>
          <hr />
          <div class="table-rows">
            <div class="row">
              <div class="date">a/a/a time</div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="status">Status</div>
              <router-link class="btn" to="/edit-meet">Edit meet</router-link>
            </div>
            <div class="row">
              <div class="date">a/a/a time</div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="status">Status</div>
              <router-link class="btn" to="/edit-meet">Edit meet</router-link>
            </div>
            <div class="row">
              <div class="date">a/a/a time</div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="status">Status</div>
              <router-link class="btn" to="/edit-meet">Edit meet</router-link>
            </div>
            <div class="row">
              <div class="date">a/a/a time</div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="status">Status</div>
              <router-link class="btn" to="/edit-meet">Edit meet</router-link>
            </div>
            <div class="row">
              <div class="date">a/a/a time</div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="status">Status</div>
              <router-link class="btn" to="/edit-meet">Edit meet</router-link>
            </div>
            <div class="row">
              <div class="date">a/a/a time</div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="status">Status</div>
              <router-link class="btn" to="/edit-meet">Edit meet</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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
        margin-bottom: 24px;

        a {
          padding: 5px;
        }
      }

      .user-data {
        display: grid;
        gap: 5px;

        .field {
          display: flex;
        }
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

      .meetings-table {
        .table-head {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          justify-items: center;

          .date {
            grid-column: span 1;
          }
          .desc {
            grid-column: span 9;
          }
          .status {
            grid-column: span 1;
          }
          .action {
            grid-column: span 1;
          }
        }

        hr {
          margin: 10px 0 20px;
        }

        .table-rows {
          display: grid;
          gap: 5px;

          .row {
            display: grid;
            grid-template-columns: repeat(12, 1fr);

            .date {
              grid-column: span 1;
              place-self: center;
            }
            .desc {
              grid-column: span 9;
              padding: 0 40px;
            }
            .status {
              grid-column: span 1;
              place-self: center;
            }
            .btn {
              grid-column: span 1;
              place-self: center;
            }
          }
        }
      }
    }
  }
}
</style>
