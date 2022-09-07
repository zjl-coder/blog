<template>
  <div style="margin-top: 20px">
    <div>
      <label>加密</label>
      <input v-model="encryptValue" />
    </div>
    <div style="margin-top: 20px">{{ ciphertext }}</div>
    <div style="margin-top: 20px">
      <label>解密</label>
      <input v-model="decryptValue" />
    </div>
    <div style="margin-top: 20px">{{ plaintext }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    ciphertext() {
      if (this.encryptValue.length) {
        const text = this.encryptValue
          .split('')
          .map((i) => {
            return String.fromCharCode(i.charCodeAt() + 1);
          })
          .join('');
        return text;
      }
      return '';
    },
    plaintext() {
      if (this.decryptValue.length) {
        const text = this.decryptValue
          .split('')
          .map((i) => {
            return String.fromCharCode(i.charCodeAt() - 1);
          })
          .join('');
        return text;
      }
      return '';
    },
  },
  data() {
    return {
      encryptValue: '',
      decryptValue: '',
    };
  },
};
</script>
