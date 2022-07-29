<template>
  <div class="titlelist">
    <a v-for="menu in list" :key="menu.innerText" :href="menu.hash" :class="{active: isActiveHash(menu.hash)}">
      <component :is="menu.localName">{{menu.innerText.substring(2)}}</component>
    </a>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [],
      hash: '',
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.hash = val.hash.substring(1);
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    isActiveHash(str){
      return decodeURIComponent(str) === `#${this.hash}`;
    }
  },
  mounted(){
    const node = []
    for(let i = 2; i <=6; i++){
      node.push(`div.theme-default-content h${i}`)
    }
    const hlist = document.querySelectorAll(node.join(','));
    const menus = [];
    const length = hlist.length;
    for(let i = 0; i < length; i++){
      menus.push({
        localName: hlist[i].localName,
        innerText: hlist[i].innerText,
        hash: hlist[i].childNodes[0].hash,
      })
    }
    this.list = menus;
  }
}
</script>

<style lang="scss" scoped>
.titlelist {
  position: fixed;
  top: 100px;
  right: 10px;
  max-height: 650px;
  max-width: 260px;
  overflow: auto;
  a {
    &:hover {
      text-decoration: none;
    }
  }
  .active {
    color: #ad9000;
  }
  h2 {
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    line-height: 16px;
    font-size: 16px;
    font-weight: normal;
    border: none;
  }
  h3 {
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    line-height: 14px;
    font-size: 14px;
    font-weight: normal;
    border: none;
    padding-left: 5px;
  }
  h4 {
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    line-height: 12px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    padding-left: 10px;
  }
  h5 {
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    line-height: 12px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    padding-left: 15px;
  }
  h6 {
    margin: 0px;
    margin-bottom: 10px;
    padding: 0px;
    line-height: 12px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    padding-left: 20px;
  }
}
@media screen and (max-width: 1260px) {
  .titlelist {
    display: none;
  }
}
</style>