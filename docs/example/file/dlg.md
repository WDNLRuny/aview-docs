# fsys.dlg

<script setup>
let open = ()=>{
	let tray = aview.win.util.tray(aview.winform);
	tray.tip = "鼠标提示" //设置鼠标提示 
	tray.pop(`托盘消息通知:
	Win10 以下显示为汽泡提示,Win10/11 开启专注助手以后仅发送到通知区,
	Win10/11 获取通知消息请使用 dotNet.toastListener 扩展库。`,"托盘消息通知");
	
	tray.clicked = (e)=>{console.log(e)}
}
</script>

## 选择单文件对话框

<n-space>
    <n-button @click="open">单选文件</n-button>
    <n-button type="tertiary">
      指定文件类型
    </n-button>
</n-space>

```js
1
```

## 选择多文件对话框

<n-space>
    <n-button>单选文件</n-button>
    <n-button type="tertiary">
      指定文件类型
    </n-button>
</n-space>
  
```js
1
```

## 保存文件对话框

<el-row class="mb-4">
    <el-button>保存文件</el-button>
    <el-button type="primary">覆盖时显示确认对话框</el-button>
    <el-button type="success">指定文件类型</el-button>
</el-row>

```js
2
```

## 目录对话框

<el-row class="mb-4">
    <el-button>打开目录对话框</el-button>
</el-row>

```js
3
```