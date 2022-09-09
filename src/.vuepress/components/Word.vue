<template>
  <div>
    <div ref="word" v-html="wordText"></div>
    <iframe
      src="https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls"
      width="100%"
      height="100%"
      frameborder="1"
    >
    </iframe>
    <!-- <iframe :src="'https://docs.google.com/viewer?url="fileurl"></iframe> -->
  </div>
</template>

<script>
import { convertToHtml } from 'mammoth/mammoth.browser';
import axios from 'axios';

export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      wordText: '',
    };
  },
  mounted() {
    axios({
      method: 'get',
      responseType: 'arraybuffer',
      url: this.src,
    }).then((res) => {
      convertToHtml({ arrayBuffer: new Uint8Array(res.data) }).then((resultObject) => {
        this.wordText = resultObject.value;
      });
    });
  },
};
</script>
