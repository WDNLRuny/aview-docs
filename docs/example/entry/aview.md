# 打开 aview

## 启动 aview.exe


通过 config.json 配置文件
前面已经教你通过配置启动 aview 程序

### createAview

参数与启动参数一样，也可以直接传 js 对象
string | object

```
var config = {
	homepage:"https://aview.wdnl.xyz",
	border: "none",
	userDataDir: "@\\aview\\appData"
}
var config = "";
var aview = aview.aardio.createAview(config);
```

## 所有范例

按库分类把

- windows 窗口
  - 入门
  - 多 webview 窗口
  - 无边框窗口
  - 消息回调
  - 创建控件
  - 外部窗口
  - 自适应屏幕
  - 透明窗口
  - 菜单
  - 快捷键
  - 文件拖放
  - 任务栏显示进度
  - 托盘图标
  - 提示控件
- aardio 语言
  - 多线程调用
  - 协同程序
- 调用其他语言
  - powershell
  - 命令行与批处理
- web 应用
  - WebSocket
  - HTTP服务器
- 网络应用
  - 网络管理
  - ftp
  - http 请求
  - 下载文件
  - smtp 邮件发送
- 文本处理
  - 编码转换
  - 哈希加密
- 文件操作
  - 压缩解压
  - 监视文件
  - 读写文件
  - 文件对话框
  - 特殊路径
- 图形图像
  - 截图
  - 后台抓屏
- 视频音频
  - 视频
  - 音频
- COM 组件
- 操作系统
- 自动化