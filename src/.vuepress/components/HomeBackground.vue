<template>
  <!-- 你的首页内容 -->
  <div class="home-container">
    <!-- 页面内容 -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.updateWallpaper();
    // 可选：设置定时切换，例如每30分钟更换一次随机壁纸[citation:6]
    // setInterval(this.updateWallpaper, 30 * 60 * 1000);
  },
  methods: {
    async updateWallpaper() {
      try {
        // 使用随机壁纸接口，避免缓存可加时间戳[citation:6]
        // `https://bing.biturl.top/?resolution=1920x1080&index=random&t=${Date.now()}`;
        // 或者使用今日壁纸：`https://bing.biturl.top/?resolution=1920x1080&index=0`;
        
        const apiUrl = 'https://bing.biturl.top/?resolution=1920x1080&index=0';
        const response = await fetch(apiUrl);
        const data = await response.json();
        const wallpaperUrl = data?.url;
        const copyright = data?.copyright;
        console.log('今日Bing壁纸:', copyright);
        // 创建Image对象预加载，避免直接设置时出现空白
        const img = new Image();
        img.onload = () => {
          // 所有页面都应用
          // document.body.style.backgroundImage = `url(${wallpaperUrl})`;
          // 如果只想应用于特定容器，例如 .home-container
          document.querySelector('.home-container').style.backgroundImage = `url(${wallpaperUrl})`;
        };
        img.src = wallpaperUrl;
      } catch (error) {
        console.error('加载壁纸失败:', error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-size: cover;
  background-position: center;
}
</style>