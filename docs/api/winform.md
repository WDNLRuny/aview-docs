# winform

aview.winform

参考 `win.form`

## 属性

### bgcolor

- 类型: `Number`

  背景颜色。

### dpiScaleX

- 类型: `Number`

  窗口当前使用的DPI横坐标缩放系数。
  
  这是一个以小数表示百分比的数，例如 1.25 表示 125%，
  窗口未使用缩放或未完成缩放初始化时，值可能为 null。


### dpiScaleY

- 类型: `Number`

  窗口当前使用的DPI纵坐标缩放系数。
  
  这是一个以小数表示百分比的数，例如 1.25 表示 125%，
  窗口未使用缩放或未完成缩放初始化时，值可能为 null。

### height

- 类型: `Number`

  窗口高度

### hwnd

- 类型: `Number`

  窗口句柄

### left

- 类型: `Number`

  左侧坐标

### menu

  窗口的菜单。

### restoreFullScreen

- 类型: `Boolean`

  当前是否全屏状态。

### text

- 类型: `String`

  窗口标题。

### top

- 类型: `Number`

  顶部坐标。

### width

- 类型: `Number`

  窗口宽度。


## 方法

### addEventListener()

注册事件监听器，当触发指定的事件时，指定的回调函数就会被执行。

**参数**
- `type` 监听的事件类型，大小写敏感。
- `listener` 触发事件执行的回调函数。

### close()

关闭窗口。

### center()

居中窗口，并调整以保证显示在可见范围内。

**参数**
- `hwnd` 目标窗口句柄，如果为空则取父窗口或所有者窗口，为0表示桌面。

### fullScreen()

切换全屏，必须在窗口显示以后才能调用此函数。<br>
注意窗口最小化状态无法全屏。

**参数**
- `fullScreen` 为 true 切换到全屏，false 取消全屏，不指定参数则切换全屏。

### getPos()

返回相对父窗口客户区的坐标、宽、高。

**参数**
- `parent` 参数为 true 返回相对屏幕的坐标、宽、高。

**返回值:** `{x, y, width, height}`

### hide()

隐藏窗口。

### hitCaption()

模拟拖动顶层父窗口标题栏。

### hitClose()

模拟点击顶层父窗口关闭按钮。

### hitMax()

模拟点击顶层父窗口最大化、还原按钮。

返回值为是否最大化指令。

### hitMin()

模拟点击顶层父窗口最小化按钮。

### isZoomed()

是否最大化。

### msgbox()

弹出对话框

**参数**
- `str` 显示的数据。
- `title` 指定对话框标题。
- `style` 自定义样式，设为0去掉图标以及提示音。
- `timeout` 限定显示时间，以毫秒为单位，超时自动关闭。

### msgboxErr()

弹出错误对话框。

**参数**
- `str` 显示的数据。
- `title` 指定对话框标题。

### msgboxTest()

弹出询问对话框。

**参数**
- `str` 显示的数据。
- `title` 指定对话框标题。

### reghotkey()

注册系统热键，全局有效。

**参数**
- `func` 按下系统热键时触发此回调函数。
- `mod` 控制键，[TF_MOD_* 常量值](https://learn.microsoft.com/zh-cn/windows/win32/tsf/tf-mod--constants)，0为不按下控制键。
- `vk` 虚拟键，[虚拟键代码](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/virtual-key-codes)。

**返回值:** `id` 用于[注销系统热键](#unreghotkey)

### removeEventListener()

删除使用 [addEventListener](#addeventlistener) 方法添加的事件监听器。<br>
若传入的参数不能用于确定当前注册过的任何一个事件监听器，该函数不会起任何作用。

**参数**
- `type` 目标事件。
- `listener` 需要从目标事件移除的事件监听器函数。

### resize()

调整窗口大小。

**参数**
- `width` 宽度。
- `height` 高度。

### setIcon()

修改窗口图标。<br>
参数可选指定图标句柄、或图标路径、网络图片。<br>
指定其中一个图标，另一个会设为相同图标。

**参数**
- `sicon` 小图标。
- `licon` 大图标。

### setPos()

调整窗口位置或排序，所有参数可选。<br>
同时指定 x、y 则移动位置。<br>
同时指定 width、height 则改变大小。<br>
指定插入位置则调整Z序。

**参数**
- `x` 横向坐标。
- `y` 纵向坐标。
- `width` 宽度。
- `height` 高度。
- `after` 插入位置（句柄或_HWND前缀常量）。


### show()

显示窗口。

**参数**
- `flag`

### transparent()

启用分层窗口，设置窗口透明度。

**参数**
- `alpha` 透明度，0-255 或 true、false。
- `color` 透明颜色，如果指定了透明颜色，透明度参数将被忽略。

### unreghotkey()

注销系统热键。

**参数**
- `id` [注册系统热键](#reghotkey)返回的 id。


## 事件

当事件触发时，事件监听器的回调函数执行并接收一个 event 对象。

event.returnValue 属性作为事件返回值。

### activate

激活窗口时触发此事件。

**event:**
- `state` 表示窗口是否激活，请参考 [WM_ACTIVATE](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-activate) 消息参数说明。
- `hwndOther` 在激活时表示另外一个取消激活的窗口句柄，取消激活时表示激活的窗口句柄。
- `minimized` 指明当前窗口是否最小化状态。

### activateApp

不同的应用程序窗口被激活时触发此事件。

**event:**
- `activated` 窗口是否激活。
- `threadId` 另一个交接激活状态的线程ID。

### adjust

窗口缩放后触发该事件。

**event:**
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

**event:**
- `data` 接收到的字符串值
- `dataType` 接收到的数值

### dpiChanged

当窗口的(dpi) 更改时触发此事件。

窗口收到 [WM_DPICHANGED](https://learn.microsoft.com/zh-cn/windows/win32/hidpi/wm-dpichanged) 消息。

**event:**
- `dpiX` 窗口新 DPI 的 X 轴值
- `dpiY` 窗口新 DPI 的 Y 轴值

### minimize

用户点击最小化按钮触发此事件。

返回 true 可阻止默认消息传递，取消最小化过程。

### posChanged

窗口大小、位置更改后触发此事件。

窗口接收到 [WM_WINDOWPOSCHANGED](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-windowposchanged) 消息。

**event:**
- `flags` 窗口位置。请参考 [WINDOWPOS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-windowpos) 结构体。
- `hwndInsertAfter` 以 Z 顺序 (前向后位置) 窗口的位置。
- `x` 窗口左边缘的位置。
- `y` 窗口上边缘的位置。
- `cx` 窗口宽度（以像素为单位）。
- `cy` 窗口高度（以像素为单位）。