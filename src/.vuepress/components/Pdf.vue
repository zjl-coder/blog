<template>
  <object :data="src" type="application/pdf" :width="width" :height="height">
    <param name="SRC" :value="src" />
  </object>
  <!-- <iframe :src="$withBase('./images/字节前端算法2021-2022.pdf')" width="100%" height="700px"></iframe> -->
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '700px',
    },
    width: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {};
  },
};
</script>
