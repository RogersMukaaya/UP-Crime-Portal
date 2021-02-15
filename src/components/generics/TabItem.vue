<template>
  <li :class="isTabItemActive">
    <input
      :id="id"
      v-bind="$attrs"
      type="radio"
      @input="$parent.$emit('input', $event.target.value)"
    />
    <label :for="id">
        <p>{{ label }}</p>
        <badge v-if="countVal > 0" :label="count" :color="badgeColor" />
    </label>
    </li>
</template>

<script>
    import Badge from "@/components/generics/Badge.vue";

    let counter = 0;

    export default {
        name: "TabItem",

        components: {
            "badge": Badge,
        },

        props: {
            id: {
                type: String,
                default() {
                    return `tab-item-${counter++}`;
                }
            },

            label: {
                type: String,
                required: true
            },

            count: {
                type: [Number, String],
                default: 0,
                required: false
            },

            responsiveIcon: {
                type: Boolean,
                default: false,
                required: false
            },

            icon: {
                type: String,
                required: false
            },

            badgeColor: {
                type: String,
                default: "blue",
                required: false
            },

            isActive: {
                type: Boolean,
                default: false,
                required: false
            },

            route: {
                type: [Object, String],
                required: false
            }
        },

        computed: {
            countVal() {
              return parseInt(this.count);
            },

            isTabItemActive() {
              if (this.isActive == false) {
                return "tab";
              } else {
                return "active";
              }
            }
        }
    };
</script>

<style lang="scss" scoped>
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.tab {
  display: inline-block;
  height: 48px;

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 0 16px;
    height: inherit;
    cursor: pointer;

    i {
      color: $tertiary;
    }

    p {
        margin: 0;
        font-weight: 500;
        line-height: 150%;
        color: $tertiary;
        white-space: nowrap;
    }

    p + .badge {
      margin-left: 8px;
    }

    &:hover {
      background: $quaternary;
    }
  }

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
  }
}

.active {
  display: inline-block;
  height: 48px;

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 0 16px;
        height: 46px;
    cursor: pointer;
    border-top: 2px solid rgba($lead, 0);
    border-bottom: 2px solid $lead;
    box-shadow: 0 1px 0 0 $lead;

    i {
      color: $lead;
    }

    p {
      font-weight: 500;
      line-height: 150%;
      color: $lead;
    }

    p + .badge {
      margin-left: 8px;
    }

    &:hover {
      background: $quaternary;
    }
  }

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
  }
}

.iconic {
  i {
    display: none;
    font-size: 24px;
  }
}
</style>
