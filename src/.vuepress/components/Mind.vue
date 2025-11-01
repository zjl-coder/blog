<template>
  <svg ref="markmap" :style="style"></svg>
</template>

<script>
import { Transformer } from 'markmap-lib';
import * as markmap from 'markmap-view';
import axios from 'axios';

const { Markmap, loadCSS, loadJS, deriveOptions } = markmap;

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
    scale: {
      type: Boolean,
      default: true,
    },
    translate: {
      type: Boolean,
      default: true,
    },
    showBorder: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style() {
      return `width: ${this.width}; height: ${this.height}; ${this.showBorder ? 'border: solid 1px #eee' : ''}`;
    },
  },
  mounted() {
    axios({
      method: 'get',
      url: this.src,
      responseType: 'text',
    }).then((res) => {
      const transformer = new Transformer();
      const { root, features } = transformer.transform(res.data);
      const { styles, scripts } = transformer.getUsedAssets(features);
      if (styles) loadCSS(styles);
      if (scripts) loadJS(scripts, { getMarkmap: () => markmap });
      Markmap.create(
        this.$refs.markmap,
        deriveOptions({
          zoom: this.scale,
          pan: this.translate,
        }),
        root,
      );
    });
  },
};
</script>
