<TitleList></TitleList>

## 将字符串保存到文件并下载
```ts
export function stringSaveAsFile(data: string, fileName: string) {
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  const objectURL = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = objectURL;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(objectURL);
}
```

## a标签下载
```ts
export function downloadFromUrl(url: string) {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.click();
}
```


## 获取 url get 参数
```ts
export function getQueryVariable(variable: string): string {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  const { length } = vars;
  for (let i = 0; i < length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return window.decodeURIComponent(pair[1]);
    }
  }
  return '';
}
```
## 将文件读成字符串
```ts
export function readFileAsText(file: File) {
  return new Promise((resolve) => {
    {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        if (e.target.readyState === FileReader.DONE) {
          resolve(e.target.result);
        }
      };
      reader.readAsText(file);
    }
  });
}
```

## 将文件读成base64字符串
先读成 data url 格式，再截取 base64 url 的内容
```ts
// 先读成 data url 格式
export function readFileAsDataUrl(file: File) {
  return new Promise((resolve) => {
    {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        if (e.target.readyState === FileReader.DONE) {
          resolve(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  });
}

// 再截取 base64 url 的内容
readFileAsDataUrl(file).then((url)=>url.split(';base64,')[1])
```

### 将base64字符串转化成文件(与上面的文件转base64成对应)
```ts
// 获取 base64 内容，拼接成 data url，再模拟a标签下载
export function base64SaveAsFile(base64Text: string, fileName: string) {
  // data url 前缀要与 上面的 readFileAsDataUrl 的前缀一直，作为还原字符流使用
  const dataUrlprefix = 'data:application/octet-stream;base64,';
  const anchor = document.createElement('a');
  anchor.href = `${dataUrlprefix}${base64Text}`;;
  link.download = fileName;
  anchor.click();
}
```
### 将字符串转为 base64 的通用方式
先转字符串转为 Blob，再转为 file 再 转为 dataUrl 再截取 base64 内容
```ts
function stringToFile(string, fileName) {
  const blob = new Blob([string], {
    type: 'text/plain',
  });
  return new File([blob], fileName);
}
const text = 'hello 全世界'
readFileAsDataUrl(stringToFile(text, 'xx.zip')).then(url=>{
  // 获得base内容
  return url.split(';base64,')[1];
})

```

## 将多个字符串压缩成 .zip
```ts
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export interface StringFile {
  fileName: string;
  content: string;
}
export function arrayStringSaveAsZip(strings: StringFile[], folderName: string) {
  const zip = new JSZip();
  const folder = zip.folder(folderName);
  strings.forEach((string) => {
    folder.file(string.fileName, string.content);
  });
  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, `${folderName}.zip`);
  });
}
```

## base64加解密
- 无 encodeURIComponent 方式
```ts
export function base64Encode(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const base64 = btoa(String.fromCharCode(...data));
  return base64;
}

export function base64Decode(str) {
  return new TextDecoder().decode(Uint8Array.from(atob(str), (c) => c.charCodeAt(0)));
}
```