<template>
	<div>
		<n-space vertical :size="12" v-if="fsysfile">
			<n-descriptions bordered>
				<n-descriptions-item label="文件名">苹果</n-descriptions-item>
				<n-descriptions-item label="文件类型">{{fsysfile.type()}}</n-descriptions-item>
				<n-descriptions-item label="路径">{{fsysfile.path}}</n-descriptions-item>
				<n-descriptions-item label="大小">{{fsysfile.size()}}</n-descriptions-item>
				<n-descriptions-item label="创建时间">{{fsysfile.getTime2().creation}}</n-descriptions-item>
				<n-descriptions-item label="修改时间">{{fsysfile.getTime2().write}}</n-descriptions-item>
				<n-descriptions-item label="访问时间">{{fsysfile.getTime2().access}}</n-descriptions-item>
				<n-descriptions-item label="属性">只读{{fsysfile.isReadonly}}  隐藏{{fsysfile.isHidden}}</n-descriptions-item>
			</n-descriptions>
		</n-space>
		<n-button @click="openFile" type="primary">打开文件</n-button>
	</div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
	data() {
		return {
			fsysfile:null
		};
	},
	setup() {},
	methods: {
		openFile() {
			let path = aview.sync.fsys.dlg.open();
			let fsysfile = aview.sync.fsys.file(path);
			
			fsysfile.isHidden = !!aview.sync.fsys.isHidden(path);
			fsysfile.isReadonly = !!aview.sync.fsys.isReadonly(path) 
			
			this.fsysfile = fsysfile
			
			
			
			console.log(this.fsysfile);
		}
	}
});
</script>

<style></style>
