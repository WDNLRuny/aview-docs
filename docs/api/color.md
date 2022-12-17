# color 颜色

参考 `color`

## 函数

### rgb(红,绿,蓝)

转换RGB颜色分量为数值

### argb(红,绿,蓝,透明度)

转换ARGB颜色分量为数值

### rgbReverse(颜色数值)

ARGB颜色转值转RGB

RGB分量中R、B的位置互换


### argbReverse(颜色数值)

RGB颜色转值转ARGB

RGB分量中R、B的位置互换,并修改高位透明分量为0xFF

### parse("#FFFFFF")

解析网页兼容的颜色代码

支持#RGB,#RRGGBB,#RRGGBBAA三种格式,#号可省略

#RGB,#RRGGBB返回GDI兼容的RGB值 

#RRGGBBAA返回GDI+兼容的ARGB格式颜色值

失败返回 `null`

### stringify(颜色数值,是否ARGB)

生成网页兼容的文本

如果是ARGB数值，返回#RRGGBBAA格式字符串

#RRGGBBAA可用于HTMLayout,Sciter,以及最新版的chrome也可以支持

### distance(clr,clr2,true)

计算GDI颜色值的色差

### hsb(h,s,b)

转换HSB颜色分量为ARGB格式颜色数值

返回一个值,可用于gdi+,plus控件等


















