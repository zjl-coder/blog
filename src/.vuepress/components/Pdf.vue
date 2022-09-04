<template>
    <object :data="src" type="application/pdf" :width="width" :height="height">
        <param name="SRC" :value="src">
    </object>
    <!-- <iframe :src="$withBase('./images/字节前端算法2021-2022.pdf')" width="100%" height="700px"></iframe> -->
</template>

<script>
export default {
  props: {
    src: {
      type: Boolean,
      default: '',
    },
    height: {
      type: Boolean,
      default: '700px',
    },
    width: {
      type: Boolean,
      default: '100%',
    },
  },
  data() { return {} }
};
</script>