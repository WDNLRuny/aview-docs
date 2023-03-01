# webview

aview.webview

参考 `web.view`

## 属性

### defaultBackgroundColor 

`number` 网页默认背景色, ARGB 格式数值，颜色透明度仅支持透明或不透明。

### hwndChrome

`number` 网页窗口句柄。

### isVisible 

`boolean` 浏览器控件是否显示。


## 方法

### cdp()

调用 WebView2 内置 CDP 接口，[CDP 文档](https://chromedevtools.github.io/devtools-protocol/)。

*参数*
- `method` string - 指定 CDP 方法。如 `DOM.querySelector`。
- `params` object (可选) - 指定调用参数。

*返回*

`Promise` - 完成后返回调用结果值。

*示例*
~~~ js
aview.webview.cdp("Browser.getVersion").then(data => console.log(data))
~~~

### focus()

网页窗口设置为输入焦点。




















