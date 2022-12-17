<script setup>
import { ref, onUnmounted } from 'vue'

const isAview = window.isAview;

if (isAview) {
	//注册系统热键
	let hkId = aview.winform.reghotkey(() => {
		aview.winform.msgbox("Ctrl+G");
	}, 2, 71)

	var hotkey = aview.key.hotkey(aview.winform)

	hotkey.reg(
		"CTRL", "K",
		() => aview.winform.msgbox("CTRL+K")
	)

	onUnmounted(() => {
		aview.winform.unreghotkey(hkId);
		hotkey.close();
	})

}
</script>


### 窗口快捷键

通过[JS键盘事件](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)可以给任意元素绑定快捷键

### 系统热键

winform.reghotkey

系统热键全局有效，即使切换到桌面上的其他程序窗口，热键仍然有效
页面刷新不会

```js
//注册系统热键
let hkId = aview.winform.reghotkey(()=>{
	aview.winform.msgbox("Ctrl+G");
},2,71)

//删除之前注册的热键
aview.winform.unreghotkey(hkId);
```


### 超级热键

key.hotkey

超级热键是操作系统级别的热键，系统全局可用。 

```js
 //创建超级热键,必须用于窗口程序中
var hotkey = aview.key.hotkey(aview.winform);

//添加新的热键方案
hotkey.reg(
    "CTRL","K", 
    () => aview.winform.msgbox("CTRL+K")
)

//关闭热键方案管理器
hotkey.close();
```

