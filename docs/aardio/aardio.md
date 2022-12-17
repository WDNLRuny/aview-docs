# aardio 基础库

请注意 aardio 对象是代理在 JavaScript 中的 Proxy 对象，如果把 Proxy 作为参数传入 aardio 的方法中 Proxy 对象会转换为 com 对象而不是一个 table，部分 aardio 对象会报错

JavaScript 访问 namespace 与 class 重复的 aardio 对象会出现只能访问 class 的问题

因此访问 class 使用首字母大写， namespace 使用首字母小写即可正常访问

## Win

