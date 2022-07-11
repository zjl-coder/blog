# web前端性能指标

## 辅助工具 Lighthouse
chrome浏览器的 Lighthouse 性能分析插件。

### 实测数据，核心网页指标评估
- First Contentful Paint (FCP)  
    首次内容渲染时间标记了渲染出首个文本或首张图片的时间
- Largest Contentful Paint (LCP)  
    渲染出最大文本或图片的时间
- Cumulative Layout Shift (CLS)  
    “累积布局偏移”旨在衡量可见元素在视口内的移动情况  

    *累积布局偏移(CLS) 是对页面加载期间所有意外布局偏移总和的度量。 布局转换是元素从一帧到下一帧的可见移动。 例如，如果渲染的横幅消息首先加载并可见，但一秒钟后，图像加载并垂直向下推动横幅，这被视为布局转换*
- First Input Delay (FID)  
    首次输入延迟，用于记录在 FCP 和 TTI （Time to Interactive） 之间用户首次与页面交互时响应的延迟

### 实验室数据
- First Contentful Paint  
  首次内容渲染时间标记了渲染出首个文本或首张图片的时间
- Largest Contentful Paint  
  渲染出最大文本或图片的时间
- Cumulative Layout Shift  
  “累积布局偏移”旨在衡量可见元素在视口内的移动情况
- Time to Interactive  
  可交互时间是指网页需要多长时间才能提供完整交互功能
- Speed Index  
  速度指数表明了网页内容的可见填充速度。  
  页面内容渲染所消耗的时间
- Total Blocking Time  
  首次内容渲染 (FCP) 和可交互时间之间的所有时间段的总和，当任务用时超过 50 毫秒时，该数值以毫秒表示