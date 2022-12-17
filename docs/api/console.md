# console 控制台窗口

参考 `console`

## 属性

### utf8

 控制台是否启用UTF-8编码
 
 所有线程设置必须相同,否则会导致重新打开控制台,如果操作系统为英文环境,控制台启用 UTF-8 可正常显示中文,
 
 此值为 null（默认值） 时由 aardio 自动选择编码（WIN10 以上系统默认开启 UTF-8）
 
 启用这个选项在 WIN10 以下系统可能出现显示不正常的问题, 但有一些程序，例如 Electron 主进程输出默认需要打开此选项

## 函数

### open()

打开控制台窗口

如果控制台窗口已打开,该函数不进行任何操作

如果参数为 true 则将 console.utf8 设为 true，请参考 console.utf8 的说明

此函数重定向 msvcrt.dll 定义的 stdin,stdout,stderr 到控制台

### setLoadingDots(动画字符数组,是否显示在尾部,动画间隔毫秒数)

指定showLoading函数使用的默认动画字符数组

除参数@1必须指定之外，其他参数可选

### showLoading(状态文本,动画颜色)

所有参数都可以省略,状态文本为false关闭动画,

调用console.open,console.log等函数都能自动关闭动画

参数@2只能使用 console.color 的成员值











