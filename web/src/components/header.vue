<template>
  <header>
    <div class="wrap wrap-px">
      <router-link to="/" class="logo">MeetApp</router-link>
      <div>
        <nav>
          <router-link to="/">home</router-link>
          <!-- v-if -->
          <router-link to="/admin">admin</router-link>
          <router-link to="/admin">user's list</router-link>
          <router-link to="/admin">meet's list</router-link>
          <!-- v-if -->
          <router-link to="/user">user</router-link>
          <router-link to="/user">create meet</router-link>
          <router-link to="/user">edit profile</router-link>
        </nav>
        <!-- переключение через vuex - переменная "isSigniN" -->
        <div class="authorization">
          <div>
            <router-link class="btn" to="/sign-in">Sign-In</router-link>
            <router-link class="btn" to="/sign-up">Sign-Up</router-link>
          </div>
          <router-link class="btn" to="/">Sign-Out</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
header {
  background-color: #f6f6f6;
  box-shadow: 0 0 10px 1px #d8d8d8;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      gap: 100px;

      nav {
        display: flex;
        align-items: center;
      }

      .authorization {
        display: flex;
        gap: 5px;

        > div {
          display: flex;
          gap: 5px;
        }
      }

      a {
        padding: 5px;
      }
    }
  }
}
</style>
