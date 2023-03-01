# fsys 文件操作

参考 `fsys`


## 属性

### opFlags

fsys 库函数 copy,move,delete,deleteEx,rename 未指定 flags 参数时使用的默认值，
默认为 0x614，指定此值为 0 则默认显示文件操作界面与错误信息界面。

该选项详细说明请参考 [FILEOP_FLAGS](https://docs.microsoft.com/en-us/windows/win32/api/shellapi/ns-shellapi-shfileopstructw) 文档

### opError

fsys 库函数 copy,move,delete,deleteEx,rename 最后一次执行的错误代码，操作成功为 0。

这个值也是系统函数 SHFileOperationW 返回的错误代码，仅供调试时参考。

此错误代码可作为 lasterr 函数的参数获取错误信息，但并不完全准确。

请参考： https://docs.microsoft.com/en-us/windows/win32/api/shellapi/nf-shellapi-shfileoperationw 


## 方法

### copy()

复制文件或目录。

*参数*
- `path` - 源路径。可以是多个路径组成的数组。
- `to` - 目标路径。如果目标路径的父目录不存在，请先用 [fsys.createDir](#createdir) 创建该目录。
- `flag` (可选) - FOF选项。
- `title` (可选) - 进度标题。
- `hwnd` (可选) - 父窗口句柄。

*返回值*

`Promise` - 完成后，成功返回 `true`。

### createDir()

创建目录。

*参数*
- `dir` - 目录路径。
- `clear` - 是否清空重建。

*返回值*

`Promise` - 完成后，返回创建成功的完整文件路径。


### searchFile()

检查指定目录下是否包含指定文件。

*参数*
- `filename` string - 文件名。
- `dir` string (可选) - 检查目录。为空则检查程序根目录、当前工作目录、系统目录。

*返回值*

`Promise` - 完成后，如果存在返回完整路径，否则返回 `undefined`。

### setAttributes()

设置文件属性。请参阅 [文件属性常量](https://learn.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants)。

*参数*
- `path` string - 文件路径。
- `attr` number - 文件属性。多个属性用 `|` 运算符连接。

### getAttributes()

获取文件属性。请参阅 [文件属性常量](https://learn.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants)。

*参数*
- `path` string - 文件路径。

*返回值*

如果函数成功，则返回值包含指定文件的属性。

### isDir()

路径是否目录。

*参数*
- `path` string - 目录路径。

### isReadonly()

文件是否只读。

*参数*
- `path` string - 文件路径。

### isSystem()

是否系统文件。

*参数*
- `path` string - 文件路径。

### isHidden()

是否隐藏文件。

*参数*
- `path` string - 文件路径。

::: warning 注意
WIN10 新版存在设为隐藏文件后变只读的问题。
:::

### list()

搜索指定目录下的文件，不搜索子目录下的文件。

*参数*
- `dir` - 目录路径。
- `pattern` (可选) - 模式匹配。
- `wildcard` (可选) - 通配符。默认值是`*.*`，也可以传入包含多个通配符的数组。

*返回值*

`Promise` - 完成后，返回 `Object`
  - `files` 文件名数组。
  - `folders` 子目录数组。
  - `alldirs` 全部子目录数组。


### delete()

删除文件或目录。

*参数*
- `path` - 路径。可以是多个路径组成的数组，文件名支持通配符。
- `flag` (可选) - FOF选项。
- `title` (可选) - 进度标题。
- `hwnd` (可选) - 父窗口句柄。

*返回值*

`Promise` - 完成后，成功返回 `true`。

### move()

移动文件或目录。

*参数*
- `path` - 源路径。可以是多个路径组成的数组。
- `to` - 目标路径。如果目标路径已存在或源路径含通配符则移动到目标目录下面，否则复制文件或目录到目标路径。如果目标路径的父目录不存在，请先用 [fsys.createDir](#createdir) 创建该目录。
- `flag` (可选) - FOF选项。
- `title` (可选) - 进度标题。
- `hwnd` (可选) - 父窗口句柄。

*返回值*

`Promise` - 完成后，成功返回 `true`。

### rename()

重命名文件或目录。

*参数*
- `path` - 源路径。
- `to` - 目标路径。
- `flag` (可选) - FOF选项。

*返回值*

`Promise` - 完成后，成功返回 `true`。

### replace()

替换文件内容。

*参数*
- `path` - 文件路径。
- `substr` - 将被 newSubStr 替换的字符串，支持模式匹配。
- `newSubStr` - 替换 substr 的字符串。
- `number` (可选) - 替换次数，不指定替换次数则替换所有匹配串。

*返回值*

- `Promise` - 完成后，成功返回替换次数，否则返回 `null`。