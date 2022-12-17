<script setup>
import { ref } from 'vue'

const imgp = ref(null);

let src = ref(null);

const show = (data)=>{
	src.value = `data:image/png;base64,${data.data}`;
	setTimeout(imgp.value.click,100)
}

const captureScreenshot1 = ()=>{
	aview.webview.cdp("Page.captureScreenshot").then(show);
}

const captureScreenshot2 = ()=>{
	aview.webview.cdp("Page.captureScreenshot",{captureBeyondViewport:true}).then(show);
}

const captureScreenshot3 = ()=>{
	var dom = document.querySelector('.VPDoc');
	var rect = dom.getBoundingClientRect();
	aview.webview.cdp("Page.captureScreenshot",{
		captureBeyondViewport:true,
		clip:{
			x:rect.left + document.documentElement.scrollLeft,
			y:rect.top + document.documentElement.scrollTop,
			width:rect.width,
			height:rect.height,
			scale:1
		}}).then(show)
}

const mouseScreenArea =  () => {
	aview.mouse.screenArea().then(ab => {
		src.value = URL.createObjectURL(new Blob([ab]));
		setTimeout(imgp.value.click,100)
	})
}


</script>


# 截图


## webview.cdp("Page.captureScreenshot")

截取页面图片

<n-image ref="imgp" style="display:none;" :src="src"/>

### 从表面捕获屏幕截图

``` js
aview.webview.cdp("Page.captureScreenshot").then(data => {
	console.log(data)
})
```

<n-button @click="captureScreenshot1">测试</n-button>

### 捕获视口之外的屏幕截图

``` js
aview.webview.cdp("Page.captureScreenshot",{captureBeyondViewport:true}).then(data => {
	console.log(data)
})
```

<n-button @click="captureScreenshot2">测试</n-button>

### 捕获指定区域的屏幕截图

``` js
//获取元素位置
var rect = document.querySelector('header').getBoundingClientRect();

aview.webview.cdp("Page.captureScreenshot",{
	captureBeyondViewport:true,
	clip:{
		x:rect.left + document.documentElement.scrollLeft,
		y:rect.top + document.documentElement.scrollTop,
		width:rect.width,
		height:rect.height,
		scale:1
	}}).then(data => {
	console.log(data)
})
```

<n-button @click="captureScreenshot3">测试</n-button>

## mouse.screenArea

屏幕选区工具

<n-button @click="mouseScreenArea">测试</n-button>