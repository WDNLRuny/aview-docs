# webview

aview.webview

参考 `web.view`

## 属性

### defaultBackgroundColor 

- 类型：`Number`

网页默认背景色, GDI+ 兼容的 ARGB 格式数值，颜色透明度仅支持透明或不透明。

### hwndChrome <Badge type="info" text="只读" />

- 类型：`Number`

网页窗口句柄。

### isVisible 

- 类型：`Boolean`

浏览器控件是否显示。


## 方法

### cdp(method: string, params: any)

调用 WebView2 内置 CDP 接口，返回 Promise，[CDP 文档](https://chromedevtools.github.io/devtools-protocol/)。

**参数**
- `method` 指定 CDP 方法
- `params` 指定调用参数

**示例**
~~~ js
aview.webview.cdp("Browser.getVersion").then(data => console.log(data))
~~~

### focus()

网页窗口设置为输入焦点。




















