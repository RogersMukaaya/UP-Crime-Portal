<template>
  <div
    :class="[
      shadow ? 'shadowed' : '',
      elevation ? 'elevation-' + elevation : '',
      hover ? 'hoverable' : '',
      padding ? 'padding-' + padding : '',
      display
    ]"
    class="card"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    elevation: {
      type: String,
      required: false
    },

    hover: {
      type: Boolean,
      required: false
    },

    shadow: {
      type: Boolean,
      required: false
    },

    padding: {
      type: String,
      required: false
    },

    display: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/variables.scss";
@import "@/stylesheets/sass/abstract/mixins.scss";

.card {
  background: $white;
  border: 1px solid $light-gray;
  border-radius: 4px;
  overflow: hidden;
  transition-duration: 0.2s;

  img,
  a {
    @include user-select(none);
    text-decoration: none;
  }

  &.inline {
    display: inline-block;
  }

  &.padding-small {
    padding: 8px 12px;
  }

  &.padding-regular {
    padding: 12px 16px;
  }

  &.padding-medium {
    padding: 16px 20px;
  }

  &.padding-large {
    padding: 20px 24px;
  }

  &.padding-none {
    padding: 0;
  }

  &.elevation-low,
  &.shadowed {
    box-shadow: $elevation-default;

    &.hoverable:hover {
      box-shadow: $elevation-hover;
    }
  }

  &.elevation-medium {
    box-shadow: $elevation-mid;

    &.hoverable:hover {
      box-shadow: $elevation-high;
    }
  }

  &.elevation-high {
    box-shadow: $elevation-high;

    &.hoverable:hover {
      box-shadow: $elevation-mid-high;
    }
  }
}

.card.applicant,
.card.facility {
  &:hover {
    box-shadow: $elevation-hover;
  }
}

.card.checked {
  box-shadow: $elevation-blue-mid;
  border-color: $blue;

  &:hover {
    box-shadow: $elevation-blue-high;
  }
}
</style>
