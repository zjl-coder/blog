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
export function stringSaveAsFile(url: string, filename: string) {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
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