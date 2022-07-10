<template>
  <span v-bind:class="classObject">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    b: {
      type: Boolean,
      default: false,
    },
    w: {
      type: Boolean,
      default: false,
    },
    s: {
      type: Boolean,
      default: false,
    },
    d: {
      type: Boolean,
      default: false,
    },
    i: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classObject: {
        'color-warn': this.w,
        'background-color-warn': this.w && this.b,
        'color-danger': this.d,
        'background-color-danger': this.d && this.b,
        'color-success': this.s,
        'background-color-success': this.s && this.b,
        'color-info': this.i,
        'background-color-info': this.i && this.b,
      }
    }
  }
};
</script>

<style scoped>
.color-warn {
  color: #ad9000;
}
.background-color-warn {
  background-color: #fffae3;
}
.color-danger {
  color: #cc0000;
}
.background-color-danger {
  background-color: #ffe0e0;
}
.color-success {
  color: #3eaf7c;
}
.background-color-success {
  background-color: #bcebdc;
}
.color-info {
  color: #0052d9;
}
.background-color-info {
  background-color: #d4e3fc;
}
</style>