<TitleList></TitleList>

# AST抽象语法树

## 简介
AST([Abstract Syntax Tree](https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E8%AA%9E%E6%B3%95%E6%A8%B9))抽象语法树,或简称语法树(Syntax tree). 是源代码语法结构的一种抽象表示. 它以树状的形式表现编程语言的语法结构, 树上的每一个节点都表示源代码中的一种结构。  

AST与编程语言的种类无关，所有高级编程语言都可以使用AST来抽象表示 。

###### 在线AST工具
在线代将代码转换为可视化的AST树网址：[https://astexplorer.net/](https://astexplorer.net/)   
![A Image](./images/ast-language.png)  
支持非常多的语言在线转换AST

###### 为什么说是抽象语法
之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。  
比如，`嵌套括号`被隐含在树的结构中，并没有以节点的形式呈现；而类似于 `if(){}` 这样的条件跳转语句，可以使用带有三个分支的节点来表示。  

*如图所示，没有表示出`()`和`{}`的节点，直接拆解代码逻辑*  
![A Image](./images/ast1.png)  

和抽象语法树相对的是具体语法树（通常称作[分析树](https://zh.wikipedia.org/wiki/%E5%88%86%E6%9E%90%E6%A0%91)）。一般的，在源代码的翻译和[编译](https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E5%99%A8)过程中，[语法分析器](https://zh.wikipedia.org/wiki/%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90)创建出分析树，然后从分析树生成AST。一旦AST被创建出来，在后续的处理过程中，比如语义分析阶段，会添加一些信息。

## AST能做什么
- 语法检查、代码风格检查、格式化代码、语法高亮、错误提示、自动补全等.
- 代码混淆压缩.
- 优化变更代码,改变代码结构等.
- 代码裁剪.

## JavaScript AST
javascript parser： 把JS代码转换成 抽象语法树的解析器.  

浏览器在执行JS之前会把源码通过解析器转化成抽象语法树,再进一步转换成字节码甚至机器码.

###### 常用的javascript parser
- [Esprima](https://github.com/jquery/esprima)
- [UglifyJS2](https://github.com/mishoo/UglifyJS) webpack将这个工具作为插件(plugin)，对es5代码进行压缩。
- [Traceur](https://github.com/google/traceur-compiler)
- [Acorn](https://github.com/acornjs/acorn)
- [Espree](https://github.com/eslint/espree)
- [Shfit](https://github.com/shapesecurity/shift-parser-js)

### AST解析过程
分类两部分
- **分词**: 将整个代码字符串分割成最小**语法单元**数组
- **语法分析**: 在分词基础上建立分析**语法单元**之间的关系

###### 语法单元
