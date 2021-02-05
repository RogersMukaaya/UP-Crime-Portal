<template>
  <span :class="['badge', badgeType, badgeSize, badgeFill, badgeColor]">
    <slot />
  </span>
</template>

<script>
export default {
  name: "BaseBadge",

  props: {
    badgeType: {
      type: String,
      default: "default",
      required: false
    },

    badgeFill: {
      type: String,
      default: "semi-solid",
      required: false
    },

    badgeColor: {
      type: [String, Object],
      default: "primary",
      required: false
    },

    badgeSize: {
      type: String,
      default: "regular",
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/sass/abstract/variables.scss";
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.badge {
  display: inline-block;

  // Badge Types
  &,
  &.default {
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 2px 4px;
  }

  &.rounded {
    padding: 2px 8px;
    border-radius: 50px;
  }

  // Badge Size
  &.large {
    font-size: 18px;
  }

  &.medium {
    font-size: 16px;
  }

  &.regular {
    font-size: 13px;
  }

  &.small {
    font-size: 12px;
  }

  &.dynamic {
    font-size: inherit;
  }

  // Badge Fills and Statuses
  &.semi-solid {
    &,
    &.primary,
    &.info,
    &.blue {
      background: lighten($accent-color, 40%);
      color: $accent-color;
    }

    &.secondary,
    &.gray {
      background: $light-gray;
      color: $dark-gray;
    }

    &.success,
    &.green {
      background: lighten($green, 50%);
      color: $green;
    }

    &.warning,
    &.question,
    &.yellow {
      background: lighten($yellow, 40%);
      color: $yellow;
    }

    &.danger,
    &.error,
    &.red {
      background: lighten($red, 35%);
      color: $red;
    }
  }

  &.solid {
    &,
    &.primary,
    &.info,
    &.blue {
      background: $accent-color;
      color: $white;
    }

    &.secondary,
    &.gray {
      background: $dark-gray;
      color: $white;
    }

    &.success,
    &.green {
      background: $green;
      color: $white;
    }

    &.warning,
    &.question,
    &.yellow {
      background: $yellow;
      color: $white;
    }

    &.danger,
    &.error,
    &.red {
      background: $red;
      color: $white;
    }
  }

  &.bordered {
    &,
    &.primary,
    &.info,
    &.blue {
      border: 1px solid $accent-color;
      background: $white;
      color: $accent-color;
    }

    &.secondary,
    &.gray {
      border: 1px solid $dark-gray;
      background: $white;
      color: $dark-gray;
    }

    &.success,
    &.green {
      border: 1px solid $green;
      background: $white;
      color: $green;
    }

    &.warning,
    &.question,
    &.yellow {
      border: 1px solid $yellow;
      background: $white;
      color: $yellow;
    }

    &.danger,
    &.error,
    &.red {
      border: 1px solid $red;
      background: $white;
      color: $red;
    }
  }
}
</style>
