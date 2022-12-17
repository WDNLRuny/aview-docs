<template>
	<n-space vertical>
		<n-form ref="formRef" :model="model" label-placement="left" :label-width="160" :style="{
			maxWidth: '640px'
		}">
			<n-form-item label="首页" path="homepage">
				<n-input v-model="model.homepage" placeholder="https://aview.wdnl.xyz" />
			</n-form-item>
			<n-form-item label="数据目录">
				<n-input v-model="model.userDataDir" placeholder="默认是程序根目录,支持系统变量路径: %LOCALAPPDATA%\aview" />
			</n-form-item>
			<n-form-item label="启用开发者工具">
				<!-- <el-select v-model="model.enalbeDevTools"><el-option v-for="item in selector.boolean" :label="item.lable" :value="item.value" /></el-select> -->
			</n-form-item>
			<n-form-item label="启用右键菜单">
				<!-- <el-select v-model="model.enalbeDefaultContextMenus"><el-option v-for="item in selector.boolean" :label="item.lable" :value="item.value" /></el-select> -->
			</n-form-item>
			<n-form-item label="命令行">
				<n-input v-model="model.commandLine" placeholder="chromium 命令行" />
			</n-form-item>
			<!-- winfrom -->
			<n-form-item label="窗口标题">
				<n-input v-model="model.text" placeholder="默认等于 homepage" />
			</n-form-item>
			<n-form-item label="窗口图标">
				<n-input v-model="model.icon" placeholder="默认是程序图标,支持本地与网络ico文件" />
			</n-form-item>
			<n-form-item label="窗口类名">
				<n-input v-model="model.className" placeholder="AVIEW_FORM" />
			</n-form-item>
			<n-form-item label="宽度">
				<n-input v-model="model.width" placeholder="800" />
			</n-form-item>
			<n-form-item label="高度">
				<n-input v-model="model.height" placeholder="600" />
			</n-form-item>
			<n-form-item label="显示在任务栏">
				<n-input v-model="model.exmode" placeholder="appwindow" />
			</n-form-item>
			<n-form-item label="边框">
				<n-input v-model="model.border" placeholder="resizable" />
			</n-form-item>
			<n-form-item label="是否显示标题栏">
				<n-input v-model="model.title" />
			</n-form-item>
			<n-form-item label="系统菜单">
				<n-input v-model="model.sysmenu" />
			</n-form-item>
			<n-form-item label="是否显示最小化按钮">
				<n-input v-model="model.sysmenu" />
			</n-form-item>
		</n-form>
	</n-space>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

const defaultConfig = {
	// webview 参数
	homepage: null, //首页,正常情况下必填
	userDataDir: null, //数据目录，注意相同用户目录下的 webview 启动参数必须相同,默认是根目录
	enalbeDevTools: false, //启用开发者工具
	enalbeDefaultContextMenus: false, //启用默认右键菜单
	commandLine: null, //chromium 命令行，相同用户目录下的 commandLine 必须相同

	// winfrom 参数
	text: null, //窗口标题，标题为空则创建无边框，无标题栏窗口，默认为主程序文件名
	icon: null, //窗口图标, 默认为 主程序图标
	className: 'AVIEW_FORM', //窗口类名
	parent: null, //父窗口句柄
	width: 800, //宽度
	height: 600, //高度
	exmode: 'appwindow', //扩展样式，appwindow显示在任务栏；toolwindow不显示在任务栏
	border: 'resizable', //边框，none无边框无标题栏；thin细边框；resizable可调整大小边框；dialog frame固定大小边框
	title: true, //是否显示标题栏，对于无边框窗口、或无标题栏窗口此项无效
	sysmenu: true, //系统菜单，是否显示系统菜单，窗口标题为空时此项无效
	min: true, //是否显示最小化按钮
	max: true, //是否显示最大化按钮
	minimize: false, //最小化
	maximize: false, //最大化
	bgcolor: 16777215, //背景色，16进制转10进制，json不支持16进制写法
	topmost: false, //窗口置顶

	// winfrom 方法参数
	show: true, //窗口创建时是否显示窗口
	x: 0, //距离屏幕左边的位置
	y: 0, //距离屏幕上边的位置
	center: true, //居中窗口，优先于x,y
	enableDpiScaling: true, //是否开启窗口自适应,webview已内置了自适应，只设置win窗口
	transparent: null, //透明窗口，透明窗口不可改变大小，显示窗口之前调用



	//启动一个多线程服务器,不支持 history，不支持 https
	//注意，设置此项 homepage 将自动转换为 http://${ip}:${port}/${defalutDocument}
	simpleHttpServer: {
		ip: "0.0.0.0", //默认设为"0.0.0.0"也即监听本机所有IP,访问此服务端也不限制IP,限制仅本机可以访问建议写127.0.0.1
		port: null, //端口为0或省略则自动选择未用端口
		backlog: null, //请求队列大小
		documentBase: null, //网站根目录，应当设置为应用程序根目录下的相对路径,例如 "/res/web/"
		defalutDocument: "index.html", //默认文档
		threadNum: 2,//服务器线程数
	}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function genOptions(depth = 2, iterator = 1, prefix = ''): any {
	const length = 12;
	const options = [];
	for (let i = 1; i <= length; ++i) {
		if (iterator === 1) {
			options.push({
				value: `${i}`,
				label: `${i}`,
				disabled: i % 5 === 0,
				children: genOptions(depth, iterator + 1, '' + i)
			});
		} else if (iterator === depth) {
			options.push({
				value: `${prefix}-${i}`,
				label: `${prefix}-${i}`,
				disabled: i % 5 === 0
			});
		} else {
			options.push({
				value: `${prefix}-${i}`,
				label: `${prefix}-${i}`,
				disabled: i % 5 === 0,
				children: genOptions(depth, iterator + 1, `${prefix}-${i}`)
			});
		}
	}
	return options;
}
export default defineComponent({
	setup() {
		const selector = {
			boolean: [
				{
					lable: 'true',
					value: true
				},
				{
					lable: 'false',
					value: false
				}
			]
		};
		const formRef = ref(null);
		const model = ref(JSON.parse(JSON.stringify(defaultConfig)));
		return {
			updateDisabled: ref(false),
			formRef,
			model,
			selector,
			generalOptions: ['groode', 'veli good', 'emazing', 'lidiculous'].map(v => ({
				label: v,
				value: v
			})),
			options: genOptions(),
			treeSelectOptions: [
				{
					label: 'Rubber Soul',
					key: 'Rubber Soul',
					children: [
						{
							label: 'Drive My Car',
							key: 'Drive My Car'
						},
						{
							label: 'Michelle',
							key: 'Michelle'
						}
					]
				}
			],
			autoCompleteOptions: computed(() => {
				return ['@gmail.com', '@163.com', '@qq.com'].map(suffix => {
					const prefix = model.value.autoCompleteValue.split('@')[0];
					return {
						label: prefix + suffix,
						value: prefix + suffix
					};
				});
			})
		};
	}
});
</script>
