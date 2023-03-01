# file 文件对象

## 构造函数

### aview.fsys.file()

*参数*
- `path` - 文件路径。
- `mode` - 指定数值指定打开模式。默认为只读模式。
- `sharemode` - 默认为 _FILE_SHARE_READ | _FILE_SHARE_WRITE。
- `creation` - 默认值为 _OPEN_EXISTING。
- `flagsAndAttributes` - 文件属性。
- `secAttrib`
- `template`

参数详细用法参考此函数源码与 [CreateFile](https://learn.microsoft.com/zh-cn/windows/win32/api/fileapi/nf-fileapi-createfilea) 参数用法。

::: warning 注意
由于 aardio 与 webview2 互相调用时会将参数转换为 json，这会使较大的数据在转换时出现无响应，建议单次读写操作不要超过 10 MB。
或使用 [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API) 读取、写入和文件管理。
:::

## 属性

### path

文件路径

## 方法

### readTo()

读取直到以指定的字符串结束。该函数每次仅读取一个字节，效率较低。

*参数*
- `ends` - 结束字符串。返回值不包含结束字符串。

*返回值*

`Promise` - 完成后，返回读取到的字符串。

### read()

读取指定长度的字节。

*参数*
- `len` (可选) - 字节长度。为 `null` 读取一行文本, 为 `-1` 读取所有内容到文件尾部。

*返回值*

`Promise` - 完成后，返回读取到的字符串。

### readAll()

读取所有内容。

*返回值*

`Promise` - 完成后，返回读取到的字符串。

### write()

写入字符串。

*参数*
- `str`  - 写入的字符串。

*返回值*

`Promise` - 完成后，成功返回 true。


### seek()

移动文件指针。返回当前文件指针位置。

*参数*
- `mode` (可选) - 文件指针移动的起点。此参数的取值可为下列值之一：
  - `set` - 起点为零或文件的开头。
  - `cur` (默认值) - 起点是文件指针的当前值。
  - `end` - 起始点是当前文件结束位置。
- `off` (可选) - 移动文件指针的字节数。正值将文件中的指针向前移动，负值将文件指针向后移动。

### flush()

刷新缓冲区。

### delete()

关闭并删除文件。

### close()

关闭文件句柄。

### seteof()

将当前文件位置设为文件末尾，用于快速改变文件大小，成功返回 `true`。

### size()

返回文件大小。