<template>
  <div class="meets-list">
    <div class="wrap wrap-px wrap-py">
      <!-- need more tools and columns -->
      <div class="meetings-action">
        <div class="table-name">Meetings list:</div>
        <div>
          <router-link class="btn" to="/admin/create-meet"
            >Create meet</router-link
          >
        </div>
      </div>
      <hr />
      <div class="meetings-table">
        <div class="table-head">
          <div class="span-3">Date</div>
          <div class="span-6">Description</div>
          <div class="span-1">Status</div>
          <div class="span-2">Action</div>
        </div>
        <hr />
        <div class="table-rows">
          <div v-for="(meet, idx) in meetings" :key="idx" class="row">
            <div class="span-3">{{ meet.date }}</div>
            <div class="span-6">
              {{ meet.description }}
            </div>
            <div class="span-1">{{ meet.status }}</div>
            <div class="span-2 actions">
              <router-link class="btn" to="/admin/edit-meet"
                >Edit meet</router-link
              >
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
      meetings: [],
    };
  },
  created() {
    this.axios.get("/api/appointments/").then((resp) => {
      return (this.meetings = resp.data);
    });
  },
};
</script>

<style lang="scss">
.meets-list {
  .wrap {
    background-color: #f6f6f6;
    border-radius: 3px;
    box-shadow: 0 2px 10px 1px #d8d8d8;
  }

  .meetings-action {
    display: flex;
    justify-content: space-between;

    a {
      padding: 5px;
    }
  }

  .meetings-table {
    .table-head {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
    }

    .table-rows {
      display: grid;
      gap: 20px;

      .row {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(12, 1fr);
        word-break: break-all;

        .actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: start;
          gap: 20px;
        }
      }
    }
  }
}
</style>
