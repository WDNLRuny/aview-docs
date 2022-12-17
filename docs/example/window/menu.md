### 菜单
<script setup>
import menus from './components/menu.vue'
</script>

```js
var winform = aview.winform;
var menuHelp = aview.win.ui.popmenu(winform); //创建弹出菜单
menuHelp.add('关于', function(id) {
	winform.msgbox('关于');
});
menuHelp.add(); //添加分隔线
menuHelp.addTable([
	['帮助', () => winform.msgbox('帮助')],
	[/*分割线*/],
	['退出', () => winform.close()]
]);
var menu = aview.win.ui.menu(winform); //创建主菜单
var menuData = [
	['文件', [
		['打开文件', () => winform.msgbox(aview.fsys.dlg.open())], 
		['打开目录', () => winform.msgbox(aview.fsys.dlg.dir())]]],
	['测试菜单', [
		['子菜单1', [
			['子菜单1-1', () => winform.msgbox('子菜单1-1')], 
			['子菜单1-2', () => winform.msgbox('子菜单1-2')]]],
		[/*分割线*/],
		['子菜单2', [
			['子菜单2-1', () => winform.msgbox('子菜单2-1')], 
			['子菜单2-2', () => winform.msgbox('子菜单2-2')]]],
		],
	]
];
menu.addTable(menuData);
menu.add('帮助', menuHelp);
menu.redraw(); //重绘菜单
```

<menus></menus>