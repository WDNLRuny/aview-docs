# winform

aview.winform

参考 `win.form`

## 属性

### bgcolor

`number` 背景颜色。

### dpiScaleX

`number` 窗口当前使用的DPI横坐标缩放系数。

### dpiScaleY

`number` 窗口当前使用的DPI纵坐标缩放系数。

### height

`number` 窗口高度。

### hwnd

`number` 窗口句柄。

### left

`number` 左侧坐标。

### menu

`menu` 窗口的菜单。

### restoreFullScreen

`boolean` 当前是否全屏状态。

### text

`string` 窗口标题。

### top

`number` 顶部坐标。

### width

`number` 窗口宽度。


## 方法

### `close()`

关闭窗口。

### `center()`

居中窗口，并调整以保证显示在可见范围内。


+ 类型

	``` ts
	center(hwnd?: number): void
	```
    
    `hwnd` 目标窗口句柄，如果为空则取父窗口或所有者窗口，为0表示桌面。  

### fullScreen()

切换全屏。

+ 类型

	``` ts
	fullScreen(flag?: boolean): boolean
	```
	`flag` 为 `true` 全屏，`false` 取消全屏，不指定参数则切换全屏
	
	返回值为当前是否全屏

::: warning 注意
必须在窗口显示以后才能调用此函数。窗口最小化状态无法全屏。
::: 

### getPos()

返回相对父窗口客户区的坐标、宽、高。

+ 类型

	``` ts
	getPos(screen?: boolean): {
		x: number,
		y: number,
		width: number,
		height: number
	}
	```
	
	`screen` 为 `true` 时返回相对屏幕的坐标、宽、高。

### hide()

隐藏窗口。

### hitCaption()

模拟拖动顶层父窗口标题栏。

### hitClose()

模拟点击顶层父窗口关闭按钮。

### hitMax()

模拟点击顶层父窗口最大化、还原按钮。  
返回是否最大化指令。

### hitMin()

模拟点击顶层父窗口最小化按钮。

### isZoomed()

是否最大化。

### msgbox()

弹出对话框。

+ 类型

	``` ts
	msgbox(str: string, title?: string, style?: number, timeout?: number): void
	```
    
    `str` 显示的数据。  
    `title` 指定对话框标题。  
	`style` 自定义样式，设为0去掉图标以及提示音。  
	`timeout` 限定显示时间，以毫秒为单位，超时自动关闭。  

### msgboxErr()

弹出错误对话框。

+ 类型

	``` ts
	msgboxErr(str: string, title?: string): void
	```
    
    `str` 显示的数据。  
    `title` 指定对话框标题。

### msgboxTest()

弹出询问对话框。

+ 类型

	``` ts
	msgboxTest(str: string, title?: string): boolean
	```
    
    `str` 显示的数据。  
    `title` 指定对话框标题。
	
	点击确定返回 `true`，其他返回 `false`。

### reghotkey()

注册系统热键，全局有效。

+ 类型

	``` ts
	reghotkey(func: () => void, mod: number, vk: number): number
	```
    
    `func` 按下系统热键时触发此回调函数。  
    `mod` 为控制键，使用_MOD_前缀的常量表示，0为不按下控制键。  
    `vk` 为虚拟键码，使用_VK_前缀的常量表示。
	
	返回热键 `id` 用于[注销系统热键](#unreghotkey)
	
+ 示例

    ``` js
    aview.winform.reghotkey(function(){
        console.log('Ctrl+D')
	}, 0x2/*_MOD_CONTROL*/, 'D'.charCodeAt())
    ```

### resize()

调整窗口大小。

+ 类型

	``` ts
	resize(width: number, height: number): void
	```
    
    `width` 宽度。 
    `height` 高度

### setIcon()

修改窗口图标。

+ 类型

	``` ts
	setIcon(sicon: string, licon: string): void
	```
	
	`sicon` 小图标。  
	`licon` 大图标。  
	
    参数可选指定图标句柄、或图标路径、网络图片。  
	窗口和任务栏显示小图标,ALT+TAB显示大图标,  
    指定其中一个图标，另一个会设为相同图标。
	
   

### setPos()

调整窗口位置或排序。

+ 类型

	``` ts
	setIcon(x?: number, y?: number, width?: number,height?: number,after?: number): void
	```
	
	`x` 横向坐标。同时指定 x、y 则移动位置。  
	`y` 纵向坐标。  
	`width` 宽度。同时指定 width、height 则改变大小。  
	`height` 高度。  
	`after` 插入位置。指定插入位置则调整Z序。

### show()

显示窗口，并指定显示参数。  
默认在显示窗口时会自动缩放窗口以适应系统DPI设置。  
调整控件字体或文本样式的代码建议在窗体显示后再执行。

+ 类型

	``` ts
	show(flag?: number | boolean): void
	```
	
	`flag` 可使用_SW_前缀的常量参数，也可使用布尔值显示或隐藏窗口。

### transparent()

启用分层窗口，设置窗口透明度。  
设为分层窗口以后不应再改变窗口大小。

+ 类型

	``` ts
	transparent(alpha: number | boolean, color?: number): void
	```
	
	`alpha` 为 0-255 设置透明度，为 `true` 启用分层窗口，`false` 取消窗口透明。   
	`color` 透明颜色 `0x00bbggrr`，如果指定了透明颜色，透明度参数将被忽略。
	
### unreghotkey()

注销系统热键。

+ 类型

	``` ts
	unreghotkey(id: number): void
	```
	
	`id` [注册系统热键](#reghotkey)返回的 id。

## 事件

当事件触发时，事件监听器的回调函数执行并接收一个 event 对象。

event.returnValue 属性值作为事件返回值。

### activate

激活窗口时触发此事件。

*event:*
- `state` 表示窗口是否激活，请参考 [WM_ACTIVATE](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-activate) 消息参数说明。
- `hwndOther` 在激活时表示另外一个取消激活的窗口句柄，取消激活时表示激活的窗口句柄。
- `minimized` 指明当前窗口是否最小化状态。

### activateApp

不同的应用程序窗口被激活时触发此事件。

*event:*
- `activated` 窗口是否激活。
- `threadId` 另一个交接激活状态的线程ID。

### adjust

窗口缩放后触发该事件。

*event:*
- `cx` 窗口客户区宽度。
- `cy` 窗口客户区高度。
- `wParam` 请参考 [WM_SIZE](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-size) 消息参数说明。

### beforeShowWindow

窗体显示或隐藏前触发此事件。

### beforeSystemEndSesssion

即将关机执行此回调，不可执行耗时操作。

### close

窗体关闭前触发此事件。

返回非 null 值可阻止窗口关闭。

### copyData

窗口收到 [WM_COPYDATA](https://learn.microsoft.com/zh-cn/windows/win32/dataxchg/wm-copydata) 消息。

*event:*
- `data` 接收到的字符串值
- `dataType` 接收到的数值

### dpiChanged

当窗口的(dpi) 更改时触发此事件。

窗口收到 [WM_DPICHANGED](https://learn.microsoft.com/zh-cn/windows/win32/hidpi/wm-dpichanged) 消息。

*event:*
- `dpiX` 窗口新 DPI 的 X 轴值
- `dpiY` 窗口新 DPI 的 Y 轴值

### minimize

用户点击最小化按钮触发此事件。

返回 true 可阻止默认消息传递，取消最小化过程。

### posChanged

窗口大小、位置更改后触发此事件。

窗口接收到 [WM_WINDOWPOSCHANGED](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-windowposchanged) 消息。

*event:*
- `flags` 窗口位置。请参考 [WINDOWPOS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-windowpos) 结构体。
- `hwndInsertAfter` 以 Z 顺序 (前向后位置) 窗口的位置。
- `x` 窗口左边缘的位置。
- `y` 窗口上边缘的位置。
- `cx` 窗口宽度（以像素为单位）。
- `cy` 窗口高度（以像素为单位）。