# gdi GDI绘图

参考 `gdi`

## 函数

### getDpiScale(hdc,hwnd)

获取屏幕DPI缩放系数,参数可选

返回2个表示百分比的小数值,1表示100%,

第一个返回值为 x 轴缩放,第二个返回值为 y 轴缩放,2个返回值通常都是一样的

### getDpi(hdc,hwnd)

获取屏幕DPI,即每英寸像素点数,参数可选

### getPixel(x,y,hwnd)

抓像素颜色,句柄为可选参数

### getPixel(x,y,color,hwnd)

修改像素颜色,句柄为可选参数

