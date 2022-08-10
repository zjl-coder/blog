<TitleList></TitleList>

# *.d.ts全局类型声明

在ts中定义一个全局类型只需要在 **.d.ts** 文件中的类型声明前加上 <Te d>declare</Te> 关键字即可。  

### d.ts文件失效常见原因

###### import 导致失效
**d.ts导入import其它类型导致全局类型失效问题排查及解决办法**  


如果声明在声明全局类型的文件中使用import关键字引入了其他模块中的类型，就会发现全局变量类型声明失效了。  

原因在于，在一个.d.ts文件中引入了其他模块，就会使ts类型系统将其视为一个模块，导致其中的所有类型即使添加了declare关键字也不能直接全局使用。  

custom.ts
```ts
export interface CustomProps {
  loading: boolean;
}
```
typings.d.ts
```ts
import { CustomProps } from 'custom.ts';

declare interface Window {
  store: {
    state: any;
  }
}
```
在使用 <Te d>window.store</Te> 的地方就会抛出错误，store 在类型 <Te d>Window</Te> 上不存在。 `typing.d.ts`文件失效了。  

**解决办法**：[*.d.ts导入import其它类型导致全局类型失效问题排查及解决办法](https://juejin.cn/post/6981281393812701191)



