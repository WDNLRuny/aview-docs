<script setup>
	import { ref, reactive,onUnmounted } from 'vue';
	
	const ge = ref(null);
	let qp = false;
	
	
	
	const keydown = e => {
		if (qp) {
			qp = false;
			document.exitFullscreen();
		} else {
			qp = true
			ge.value.requestFullscreen();
		}
	};
	
	const keydown2 = e => {
		aview.winform.fullScreen();
	};
	
	
	let hkId = aview.winform.reghotkey(keydown, 0, 122)
	let hkId2 = aview.winform.reghotkey(keydown2, 2, 122)
	
	console.log(hkId,hkId2);
	
	onUnmounted(()=>{
		aview.winform.unreghotkey(hkId);
		aview.winform.unreghotkey(hkId2);
	})
</script>

<iframe ref="ge" src="https://miniroyale.io/" style="border:none;width:100%;height: auto;aspect-ratio: 16/9;background-color: black;"></iframe>



- F11 网页全屏/退出全屏
- Ctrl + F11 全屏/退出全屏