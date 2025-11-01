# npm和yarn的危险行为

### resolutions
resolutions 可以让项目的依赖包以及依赖包的依赖包统一版本，比如
<Mind :src="$withBase('/images/npm-dangerous-act-1.md')" height="200px"/>
项目依赖新版的lodash 和 moment，而项目依赖的antd包的嵌套依赖却依赖老版本的，在开发项目时，就有可能导致包版本冲突。或者 一些如 codecc 的安全检查会提示升级版本，完善漏洞。   


- <Te s b>好的解决方法</Te>： 升级antd版本，处理好嵌套依赖包，这是一个比较大的工作量，好处是，版本关系清晰，不会有隐藏bug。  


- <Te d b>坏的解决方法</Te>：使用 `resolutions` 强制将项目的指定依赖包的版本统一，包括递归嵌套包版本  

###### resolutions讲解

package.json
```json
{
    "resolutions": {
        "lodash": "4.17.15",
        "moment": "2.29.4"
    },
    "dependencies": {
        "antd": "^3.26.20",
        "lodash": "^4.17.15",
        "moment": "^2.29.4"
    },
}
```
resolutions 字段 只在 yarn 工具下有效，强制项目的所有 lodash 和 moment 版本都为 resolutions 指定的版本。  

让 npm 也起作用  
package.json
```json
{
    "scripts": {
        "preinstall": "npx npm-force-resolutions"
    }
}
```
`npm install ` 时，强制 resolutions 起作用。  

这样虽然可以简单快捷粗暴的一次性处理版本冲突和版本老旧的问题，但是却埋下了隐患，比如 lodash 或者 moment 的大版本功能已经修改了，antd 并不支持 更新的 lodash 和 moment，这时候项目中就会出现意料之外的难以排查的bug。