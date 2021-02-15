<template>
  <div :class="['badge', bStyle, color]">
    <i v-if="icon" :class="'mdi mdi-' + icon"></i>
    <p class="t-sm bold">
      {{ label }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Badge",

  props: {
    color: {
      type: String,
      default: "",
      required: false
    },

    bStyle: {
      type: String,
      default: "",
      required: false
    },

    icon: {
      type: String,
      default: "",
      required: false
    },

    label: {
      type: [String, Number],
      default: "",
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>

    @import "@/stylesheets/sass/abstract/up-crime-pad.scss";

    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: $lead;
        color: $white;
        height: 20px;
        min-width: 24px;
        padding: 0 8px;
        border-radius: 50px;

        i {
            font-size: 13px;
            margin-right: 4px;
            margin-left: -4px;
        }

        p {
            font-size: 12px;
            line-height: 150%;
            letter-spacing: 0em;
        }

        // colors

        &.red {
            background: $danger;
        }

        &.blue {
            background: $lead;
        }

        &.green {
            background: $success;
        }

        &.yellow {
            background: $warning;
        }

        &.white {
            background: $white;
            border: 1px solid $quaternary;
            color: $secondary;
        }

        // style

        &.rectangle {
                border-radius: 3px;
                height: 25px;

            p {
                text-transform: uppercase;
                font-size: 14px;
                line-height: 150%;
                letter-spacing: -0.005em;
            }

            i {
                font-size: 15px;
            }
        }
    }
</style>
