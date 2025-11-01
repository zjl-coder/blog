# 前端性能监控

**性能监控分为加载文件监控和ajax监控**  

文件加载性能监控可以通过` window.performance `计算获取  

统计页面性能
```js
function perforPage() {
    if (!window.performance) return;
    let timing = performance.timing;
          conf.performance = {
    // DNS解析时间
    dnst: timing.domainLookupEnd - timing.domainLookupStart || 0,
    //TCP建立时间
    tcpt: timing.connectEnd - timing.connectStart || 0,
    // 白屏时间
    wit: timing.responseStart - timing.navigationStart || 0,
    //dom渲染完成时间
    domt: timing.domContentLoadedEventEnd - timing.navigationStart || 0,
    //页面onload时间
    lodt: timing.loadEventEnd - timing.navigationStart || 0,
    // 页面准备时间
    radt: timing.fetchStart - timing.navigationStart || 0,
    // 页面重定向时间
    rdit: timing.redirectEnd - timing.redirectStart || 0,
    // unload时间
    uodt: timing.unloadEventEnd - timing.unloadEventStart || 0,
    //request请求耗时
    reqt: timing.responseEnd - timing.requestStart || 0,
    //页面解析dom耗时
    andt: timing.domComplete - timing.domInteractive || 0
    };
}
```

统计资源文件获取性能，单个文件获取开始时间和获取结束时间。主要统计图片资源，css资源，js资源  

ajax请求性能统计，则通过改写ajax请求函数，在ajax请求发起之前记录请求开始时间，ajaxStartTime, 然后在ajax success 或者 error 或者 finally 中记录请求结束时间 ajaxEndTime 则，ajax请求时间 = ajaxEndTime - ajaxStartTime;   

获取 uv (独立访客，Unique Visitor) 和 pv (访问量，page view)。

