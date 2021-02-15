<template>
    <div class="modal-background">
        <div class="modal-content">
        <span class="close-button" @click="$emit('close-modal')">
            <i class="material-icons">close</i>
        </span>
        <div class="modal-header">
            <h1>Vehicle Scene Details</h1>
        </div>
        <div class="modal-body">
            <div class="type">
                <p class="label">Type</p>
                <span>Vehicle</span>
            </div>
            <div class="number">
                <p>Scene Number</p>
                <span>#3456</span>
            </div>
            <div class="location">
                <p>Location</p>
                <span>Kampala</span>
            </div>
            <div class="date">
                <p>Date Of First Activity</p>
                <span>3  /  21  /  2021</span>
            </div>
            <div class="date">
                <p>Time Of First Activity</p>
                <span>10  :  30 PM</span>
            </div>
            <div class="avatar-wrapper">
                <div class="avatar">
                    <i class="mdi mdi-account-circle"></i>
                </div>
                <div class="avatar-info">
                    <p>Opio Gideon</p>
                    <small>Officer</small>
                </div>
            </div>
        <div class="modal-footer">
            <button class="cancel">
            CANCEL
            </button>
            <button class="save">
            SAVE
            </button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CreateNewScene"
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.modal-background {
  font-family: $display-font;
  width: 100%;
  position: fixed;
  z-index: 7;
  left: 0;
  top: 0;
  background-color: rgba($black, 0.3);

  .modal-content {
    width: 757px;
    background-color: $white;
    margin: 80px auto;
    border-radius: 4px;

    .close-button {
      display: block;
      float: right;
      margin: 25px;
    }

    .modal-header {
      position: relative;
      padding: 85px 0 42px 35px;

      h1 {
        font-size: 24px;
        padding: 0;
      }
    }

    .modal-body {
        div {
            p {
                margin: 0;
                padding-bottom: 5px;
                font-size: 14px;
                font-weight: 600;
                color: $secondary-dark;
            }

            span {
                font-size: 14px;
                font-weight: 400;
                color: $tertiary;
            }
        }
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      padding: 24px 33px 32px 0;

      button {
        width: 107px;
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 12px;
        border-radius: 4px;
        border: none;
      }

      .cancel {
        color: $secondary;
        background-color: $white;
        margin-right: 35px;
      }

      .save {
        color: $white;
        background-color: $lead;
      }
    }
  }
}
</style>
