### 配置文件

aview 的默认配置文件是根目录的 `aview.config.json` 文件。

**也可以通过命令行参数配置:**

```
# url
$ aview.exe "https://aview.wdnl.xyz/aview.config.json"

# json
$ aview.exe '{"start_url":"https://aview.wdnl.xyz"}'

# 本地文件
$ aview.exe "D:\aview.config.json"
```

## 配置项

### start_url

- 类型：`string`

  首页。为空或无法访问时自动退出程序。

### isStatusBarEnabled

- 类型：`boolean`
- 默认值：`false`

  是否在网页窗口底部显示默认状态栏。

### areDevToolsEnabled

- 类型：`boolean`
- 默认值：`false`

  是否启用开发者工具。

### areDefaultContextMenusEnabled

- 类型：`boolean`
- 默认值：`false`

  是否启用默认右键菜单。
  
### userDataDir

- 类型：`string`
- 默认值：`%LOCALAPPDATA%\aview`

  用户数据文件夹的目录路径，支持使用 [环境变量](https://ss64.com/nt/syntax-variables.html)。
  
  WebView2 应用使用用户数据文件夹（[UDF](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/user-data-folder)）来存储浏览器数据，例如 Cookie、权限和缓存的资源。
  
  首次运行会初始化这个目录，启动会稍慢点。

### commandLine

- 类型：`string | Array<string>`

  chromium 命令行，请参考 [chromium-command-line-switches](https://peter.sh/experiments/chromium-command-line-switches/)
  
  ``` json
  {
	"commandLine":"--disable-web-security --proxy-server=127.0.0.1:8080",
	"commandLine":[
		"--disable-web-security",
		"--proxy-server=127.0.0.1:8080",
	]
  }
  ```

### text

- 类型：`string`
- 默认值：`aview`

  窗口标题。
  
  窗口标题不会跟随网页 title 而变化，可通过 [winform.text](/api/winform.html#text) 属性改变窗口标题。

### icon

- 类型：`string`

  窗口图标，默认使用程序图标。

### className

- 类型：`string`
- 默认值：`AVIEW_FORM`

  窗口类名。

### parent

- 类型：`number`

  父窗口句柄。

### width

- 类型：`number`
- 默认值：`800`

  窗口宽度。

### height

- 类型：`number`
- 默认值：`600`

  窗口高度。

### exmode

- 类型：`string`
- 默认值：`appwindow`

  扩展样式。
  
  **可用值:**
  - `appwindow` 显示在任务栏
  - `toolwindow` 不显示在任务栏

### border

- 类型：`string`
- 默认值：`resizable`

  边框样式。
  
  **可用值:**
  - `none` 无边框无标题栏
  - `thin` 细边框
  - `resizable` 可调整大小边框
  - `dialog frame` 固定大小边框

### title

- 类型：`boolean`
- 默认值：`true`

  是否显示标题栏，对于无边框窗口此项无效。

### sysmenu

- 类型：`boolean`
- 默认值：`true`

  是否显示系统菜单，窗口标题为空时此项无效。

### min

- 类型：`boolean`
- 默认值：`true`

  是否显示最小化按钮。

### max

- 类型：`boolean`
- 默认值：`true`

  是否显示最大化按钮。

### minimize

- 类型：`boolean`
- 默认值：`false`

  窗口最小化。

### maximize

- 类型：`boolean`
- 默认值：`false`

  窗口最大化。

### bgcolor

- 类型：`number`
- 默认值：`16777215`

  窗口背景色。

### topmost

- 类型：`boolean`
- 默认值：`false`

  窗口是否置顶。

### show

- 类型：`boolean`
- 默认值：`true`

  窗口是否在创建时显示，默认居中显示。
  
  显示速度取决于首页响应速度。

### update

- 类型：`boolean`
- 默认值：`false`

  是否开启自动更新。
  
