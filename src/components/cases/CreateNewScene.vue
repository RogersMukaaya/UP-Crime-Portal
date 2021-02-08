<template>
  <div class="modal-background">
    <div class="modal-content">
      <span class="close-button" @click="$emit('close-modal')">
        <i class="material-icons">close</i>
      </span>
      <div class="modal-header">
        <h1>Create a Scene</h1>
      </div>
      <div class="modal-body">
        <div class="select-dropdown">
          <p class="label">Type</p>
          <div class="select-dropdown-container">
            <div class="select-items-container">
              <div class="current-item">
                <div class="current-item">
                  <p>Vehicle</p>
                </div>
              </div>
            </div>
            <span class="material-icons">
              expand_more
            </span>
          </div>
        </div>
        <div class="case-number">
            <label class="label" for="name">Case Number</label>
            <input type="number" name="name" placeholder="33467" />
        </div>
        <div class="case-number">
            <label class="label" for="name">Location</label>
            <input type="type" name="name" placeholder="Kampala" />
        </div>
        <div class="row-inputs-date-time">
          <div class="case-date">
            <label class="label" for="date">Date of First Activity</label>
            <input type="date" name="date" />
          </div>
          <div class="case-date">
            <label class="label" for="time">Time of First Activity</label>
            <input type="time" name="time" />
          </div>
        </div>
        <div class="add-attachment">
          <p class="label">Name</p>
          <div class="add-attachment-container">
            <div class="added-attachment">
              <span class="material-icons">
                insert_photo
              </span>
            </div>
            <button class="add">
              Add
            </button>
          </div>
        </div>
        <div class="add-victims">
          <p class="label">Created by</p>
          <div class="add-victims-container">
            <div class="added-victims">
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
            <button class="add">
              Edit
            </button>
          </div>
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
  position: absolute;
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
      padding-left: 35px;

        .select-dropdown {
            display: flex;
            flex-direction: column;
            width: 600px;

            .label {
                margin: 0;
                padding-bottom: 5px;
                font-size: 14px;
                font-weight: 600;
                color: $secondary-dark;
            }

            .select-dropdown-container {
                display: flex;
                justify-content: space-between;
                border: 1px solid $border;
                border-radius: 4px;

                .select-items-container {
                    .current-item {
                    p {
                        margin-left: 16px;
                        font-size: 14px;
                        font-weight: 400;
                        color: $tertiary;
                    }
                    }
                }

                span {
                    padding: 12px;
                    color: $secondary;
                }
            }
        }

        .case-number {
            display: flex;
            flex-direction: column;
            padding-right: 16px;
            padding-top: 37px;

            .label {
                margin: 0;
                padding-bottom: 5px;
                font-size: 14px;
                font-weight: 600;
                color: $secondary-dark;
            }

            input {
                width: 600px;
                height: 47px;
                border: 1px solid $border;
                border-radius: 4px;
                outline: none;
                // padding-left: 16px;
                padding: 0 16px;
            }
        }

        .scene-number {
          display: flex;
          flex-direction: column;
          width: 134px;
          padding-right: 16px;

          .label {
            margin: 0;
            padding-bottom: 5px;
            font-size: 14px;
            font-weight: 600;
            color: $secondary-dark;
          }

          .scenes-count {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 134px;
            height: 47px;
            border: 1px solid $border;
            border-radius: 4px;
            outline: none;
            padding-left: 16px;

            p {
              font-size: 14px;
              font-weight: 400;
              color: $tertiary;
            }

            .add-scene {
              width: 18px;
              height: 18px;
              margin: 0 16px;
              border-radius: 50%;
              color: $white;
              border: none;
              background-color: $secondary;
            }

            .add-scene:hover {
              cursor: pointer;
            }
          }
        }

      .row-inputs-date-time {
        width: 600px;
        display: flex;
        justify-content: space-between;

        .case-date {
          display: flex;
          flex-direction: column;
          width: 206px;
          padding-right: 16px;
          padding-top: 37px;

          .label {
            margin: 0;
            padding-bottom: 5px;
            font-size: 14px;
            font-weight: 600;
            color: $secondary-dark;
          }

          input {
            width: 100%;
            height: 47px;
            border: 1px solid $border;
            border-radius: 4px;
            outline: none;
            padding: 0 16px;
          }
        }
      }

      .add-attachment {
        padding-top: 37px;

        .label {
          margin: 0;
          padding-bottom: 5px;
          font-size: 14px;
          font-weight: 600;
          color: $secondary-dark;
        }

        .add-attachment-container {
          display: flex;
          align-items: center;

          .added-attachment {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 47px;
            background: rgba(9, 0, 73, 0.2);
            border-radius: 4px;
            margin-right: 35px;
          }

          .add {
            width: 51px;
            height: 32px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 4px 12px;
            background: #ffffff;
            border: 1px solid #e2e6e8;
            border-radius: 4px;
          }

          .add:hover {
            cursor: pointer;
          }
        }
      }

      .add-victims {
        padding-top: 37px;

        .label {
          margin: 0;
          padding-bottom: 5px;
          font-size: 14px;
          font-weight: 600;
          color: $secondary-dark;
        }
        .add-victims-container {
          display: flex;
          align-items: center;

          .added-victims {
            margin-right: 35px;

            .avatar-wrapper {
              display: flex;
              align-items: center;

              .avatar {
                margin-right: 4px;

                i {
                  font-size: 50px;
                  color: $secondary;
                }
              }

              .avatar-info {
                display: flex;
                flex-direction: column;
                color: $secondary;

                p {
                  margin: 0;
                  font-size: 14px;
                  font-weight: 400;
                  color: $secondary;
                }

                small {
                  font-size: 12px;
                  text-align: left;
                  color: $tertiary;
                }
              }
            }
          }

          .add {
            width: 51px;
            height: 32px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 4px 12px;
            background: #ffffff;
            border: 1px solid #e2e6e8;
            border-radius: 4px;
          }

          .add:hover {
            cursor: pointer;
          }
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

::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: $tertiary;
}
</style>
