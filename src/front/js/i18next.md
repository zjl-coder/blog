# i18next

## index.js
i18next 的入口文件，主要是对外暴露 i18next 对象及其 API

## i18next.js


## languageUtils.js
实现了 i18next 的语言工具

## pluralResolver.js
实现了 i18next 的复数形式处理。

## utils.js
提供了一些辅助方法，如浅复制、深复制、数组合并等。

## Translator.js
i18next 的翻译器，负责将语言资源翻译成指定语言的文本。主要的 API 包括 translate() 和 t()，用于进行翻译。

## ResourceStore.js
语言资源存储器，用于存储和管理不同语言的语言资源。主要的 API 包括 addResourceBundle() 和 getResource()。

## Interpolator.js
用于对语言资源中的变量进行替换。主要的 API 包括 interpolate() 和 nest()。

## PluralResolver.js
用于处理复数形式。主要的 API 包括 getSuffix() 和 get()。
