# File System Access API

::: tip
此功能仅在安全上下文 （HTTPS） 中可用。且无法获取到文件的真实路径。
:::

文件系统访问 API 允许读取、写入和文件管理功能。

## 概念和用法

此 API 允许与用户本地设备或用户可访问的网络文件系统上的文件进行交互。此 API 的核心功能包括读取文件、写入或保存文件以及对目录结构的访问。

与文件和目录的大多数交互都是通过句柄完成的。父 FileSystemHandle 类帮助定义两个子类：FileSystemFileHandle 和 FileSystemDirectoryHandle，分别用于文件和目录。

这些句柄表示用户系统上的文件或目录。必须首先通过向用户显示文件或目录选取器来访问它们。允许这样做的方法是 window.showOpenFilePicker 和 window.showDirectoryPicker。调用这些命令后，文件选取器将自行显示，用户可以选择文件或目录。成功完成此操作后，将返回句柄。您还可以通过 HTML 拖放 API 的 DataTransferItem.getAsFileSystemHandle（） 方法访问文件句柄。

句柄提供自己的功能，根据是否选择了文件或目录，存在一些差异（有关特定详细信息，请参阅接口部分）。然后，您可以访问所选目录的文件数据或信息（包括子级）。

还有“保存”功能，使用FilesystemWriteableFileStream接口。要保存的数据采用 Blob、字符串对象、字符串文本或缓冲区的格式后，可以打开流并将数据保存到文件中。这可以是现有文件，也可以是新文件。

这个API开辟了网络一直缺乏的潜在功能。尽管如此，在设计API时，安全性一直是最大的问题，除非用户明确允许，否则不允许访问文件/目录数据。

## 试试看

请参阅[文本编辑器](https://googlechromelabs.github.io/text-editor/)演示中的文件系统访问 API 的实际应用。

### 资料来源

- [File_System_Access_API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API) - MDN[2022-06-26]
- [文本编辑器](https://web.dev/file-system-access/) - web.dev[2022-06-26]
