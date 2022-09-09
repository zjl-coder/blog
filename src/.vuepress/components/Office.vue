<template>
  <iframe :src="url" :width="width" :height="height" frameborder="0"> </iframe>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://zjl-coder.github.io/blog/images/test.docx',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '800px',
    },
  },
  computed: {
    url() {
      return `https://view.officeapps.live.com/op/view.aspx?src=${this.src}`;
    },
  },
};
</script>
