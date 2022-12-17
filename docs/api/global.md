# global 全局名字空间

参考 `global`

aardio 所有的全局变量可通过 global.变量名 访问


## 属性

### _AARDIO_VERSION

aardio 内核版本号


### _ARGV

解析后的进程启动参数表

### _CMDLINE

命令行参数的原始文本

### _HAPPICON

应用程序图标句柄

### _HINSTANSE

当前应用程序的实例句柄

### _WIN10_LATER

当前系统是否为WIN10/Win2016或之后的版本

### _WIN7_LATER 

当前系统是否为WIN7/Win2008 R2或之后的版本

### _WIN_64

当前系统是否为64位

### _WIN_VER_BUILD

Windows 构建版本号

### _WIN_VER_MAJOR

Windows 主版本号

### _WIN_VER_MINOR

Windows 副版本号


## 函数

### collectgarbage(...参数)

`collect` 运行完整的垃圾回收

`count` 查询内存占用(Kb)

`restart` 重启垃圾收集器

`setpause` 垃圾收集暂停时间值,第二参数除以100代表内存回收前要等多久，默认值为200，指定内存达到上一个周期结束时的两倍时进入下一个周期，函数返回原来的设置值

`setstepmul` 设置垃圾收集器步长倍增器的值

`step,1` 进行一次垃圾回收迭代,参数2越大，执行的次数越多，执行时间越久,如果已经是最后一次迭代返回true


### error(错误信息,错误级别)

抛出一个错误


### errput(错误信息,错误标题)

输出错误信息

如果参数@1为空则忽略不执行,参数@2可省略

此函数会首先触发默认错误处理程序，如果错误处理程序或 onError 返回 null 则不输出错误信息


### eval("__")

将字符串转换为代码执行,并返回一个或多个值

失败抛出异常