<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-image">
        <img src="../assets/logo.png" />
        <h3>UP Crime Portal</h3>
      </div>
      <div class="right-content">
        <div class="navbar-links">
          <ul>
            <li>
              Cases
              <p>3</p>
            </li>
            <li class="disabled">
              People
            </li>
            <li class="disabled">
              Files
            </li>
            <li class="disabled">
              Settings
            </li>
          </ul>
        </div>
        <div class="navbar-profile">
          <div class="avatar-wrapper">
            <div class="avatar">
              <i class="mdi mdi-account-circle"></i>
            </div>
            <div class="avatar-info">
              <p>Opio Gideon</p>
              <small>Officer</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabItem"
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.navbar {
  font-family: $display-font;
  height: 80px;
  display: flex;
  align-items: center;
  background: $lead;
  padding: 0 47px;

  .navbar-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navbar-image {
      width: 230px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: $white;

      img {
        width: 35px;
        height: 38px;
        margin-right: 16px;
      }

      h3 {
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: 800;
        color: $lead;
      }
    }

    .right-content {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      .navbar-links {
        align-self: flex-end;
        margin-right: 66px;

        ul {
          display: flex;
          margin: 0;
          list-style-type: none;

          li {
            display: flex;
            align-items: center;
            font-size: 20px;
            color: $white;
            padding: 12px;
            border-bottom: 3px solid $white;

            p {
              background: $danger;
              color: $white;
              height: 20px;
              min-width: 24px;
              padding: 0 4px;
              border-radius: 50px;
              font-size: 12px;
              line-height: 150%;
              letter-spacing: 0em;
              margin-left: 12px;
              text-align: center;
            }
          }

          li:hover {
            cursor: pointer;
            opacity: 1;
          }

          .disabled {
            opacity: 0.5;
            border-bottom: none;
          }
        }
      }

      .navbar-profile {
        .avatar-wrapper {
          display: flex;
          align-items: center;

          .avatar {
            margin-right: 12px;

            i {
              font-size: 45px;
              color: $white;
            }
          }

          .avatar-info {
            display: flex;
            flex-direction: column;
            color: $white;

            p {
              margin: 0;
              font-size: 22px;
              font-weight: 600;
            }

            small {
              font-size: 13px;
              opacity: 0.7;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
