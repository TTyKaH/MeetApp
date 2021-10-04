<template>
  <div class="users-list">
    <div class="wrap wrap-px wrap-py">
      <div class="table">
        <div class="head">
          <div class="first-name">First Name</div>
          <div class="second-name">Second Name</div>
          <div class="date-reg">date reg</div>
          <div class="role">role</div>
          <!-- for user: - service "consumer" or "provider"  -->
          <div class="subrole">subrole</div>
          <div class="act-meets">Active meets</div>
          <div class="cnsd-meets">Under consid. meets</div>
          <div class="clsd-meets">Closed meets</div>
        </div>
        <hr />
        <div class="rows">
          <div class="row">
            <div class="first-name">Lion</div>
            <div class="second-name">Demon</div>
            <div class="date-reg">23/05/2013</div>
            <div class="role">user</div>
            <div class="subrole">consumer</div>
            <div class="act-meets">4</div>
            <div class="cnsd-meets">2</div>
            <div class="clsd-meets">6</div>
          </div>
          <div class="row">
            <div class="first-name">Pudge</div>
            <div class="second-name">Huk</div>
            <div class="date-reg">23/05/2013</div>
            <div class="role">user</div>
            <div class="subrole">provider</div>
            <div class="act-meets">3</div>
            <div class="cnsd-meets">1</div>
            <div class="clsd-meets">2</div>
          </div>
          <div class="row">
            <div class="first-name">Alex</div>
            <div class="second-name">Brown</div>
            <div class="date-reg">23/05/2013</div>
            <div class="role">admin</div>
            <div class="subrole">-</div>
            <div class="act-meets">3</div>
            <div class="cnsd-meets">1</div>
            <div class="clsd-meets">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.users-list {
  .wrap {
    background-color: #f6f6f6;
    border-radius: 3px;
    box-shadow: 0 2px 10px 1px #d8d8d8;
  }

  .table {
    .head {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);

      .first-name {
        grid-column: span 1;
      }
      .second-name {
        grid-column: span 2;
      }
      .date-reg {
        grid-column: span 1;
      }
      .role {
        grid-column: span 1;
        place-self: center;
      }
      .subrole {
        grid-column: span 1;
        place-self: center;
      }
      .act-meets {
        grid-column: span 2;
        place-self: center;
      }
      .cnsd-meets {
        grid-column: span 2;
        place-self: center;
      }
      .clsd-meets {
        grid-column: span 2;
        place-self: center;
      }
    }

    .rows {
      display: grid;
      gap: 20px;

      .row {
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        .first-name {
          grid-column: span 1;
        }
        .second-name {
          grid-column: span 2;
        }
        .date-reg {
          grid-column: span 1;
        }
        .role {
          grid-column: span 1;
          place-self: center;
        }
        .subrole {
          grid-column: span 1;
          place-self: center;
        }
        .act-meets {
          grid-column: span 2;
          place-self: center;
        }
        .cnsd-meets {
          grid-column: span 2;
          place-self: center;
        }
        .clsd-meets {
          grid-column: span 2;
          place-self: center;
        }
      }
    }
  }
}
</style>
