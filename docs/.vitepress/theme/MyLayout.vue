<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme';
import { defineComponent, computed, ref, onMounted } from 'vue';
import { darkTheme } from 'naive-ui';

import BodyScrollbar from '../components/BodyScrollbar.vue';

const { Layout } = DefaultTheme;

const show = ref(null);
show.value = window.isAview && !aview.winform.restoreFullScreen;

let osThemeRef = ref(null);
let theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null));

const html = document.querySelector('html');

const observer = new MutationObserver(function(mutations) {
	osThemeRef.value = html.className;
});
observer.observe(html, { attributes: true });

let hitMin = () => aview.winform.hitMin();
let hitMax = () => aview.winform.hitMax();
let close = () => aview.winform.close();
let hitCaption = () => aview.winform.hitCaption();

let isMax = ref(null);
if (window.isAview) {
	window.addEventListener('resize', () => {
		isMax.value = aview.winform.isZoomed();
		show.value = !aview.winform.restoreFullScreen;
	});
}
let down = false;
let d = e => {
	if (down) {
		hitCaption();
		down = false;
	}
};
document.addEventListener('mousemove', d);
document.addEventListener('mouseup', e => {
	down = false;
});

let m = e => {
	if (e.target == nav || e.target == navContentBody) {
		down = true;
	}
};
let nav = null;
let navContentBody  = null;
onMounted(() => {
	nav = document.querySelector('.VPNav .content');
	navContentBody = document.querySelector('.VPNav .content .content-body');
	nav.addEventListener('mousedown', m);

	nav.addEventListener('dblclick', hitMax);
	nav.onselectstart = () => false;
});
</script>

<template>
	<n-config-provider :theme="theme">
		<Layout>
			<template #nav-bar-content-after>
				<div v-if="show" style="display: flex;padding-left: 10px;">
					<svg @click="hitMin" class="nb" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M45.60213333 478.13973333h932.79573334c22.9376 0 33.86026667 11.4688 34.4064 34.4064 0 22.9376-11.4688 34.4064-34.4064 34.4064H45.60213333c-22.9376 0-34.4064-11.4688-34.4064-34.4064 0-23.48373333 11.4688-34.4064 34.4064-34.4064z"
						></path>
					</svg>
					<svg @click="hitMax" v-if="!isMax" class="nb" title="最大化" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M926.45937303 97.54062697v828.2973677H97.54062697V97.54062697h828.91874606m4.97102697-77.6722963h-838.8608c-39.7682157 0-72.07989097 32.31167525-72.07989097 72.07989096v839.48217837c0 39.7682157 32.31167525 72.07989097 72.07989097 72.07989097h839.48217837c39.7682157 0 72.07989097-32.31167525 72.07989096-72.07989097v-838.8608c0-40.38959408-32.31167525-72.70126933-72.70126933-72.70126933 0.62137837 0 0 0 0 0z"
						></path>
					</svg>
					<svg @click="hitMax" v-else class="nb" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M739.95130434 284.04869566v658.32336695H81.62793739V284.04869566h658.32336695m0.60787015-75.98376812H80.4121971c-41.33516985 0-75.37589797 33.43285797-75.37589797 75.37589797V943.5878029c0 41.33516985 33.43285797 75.37589797 75.37589797 75.37589797h660.14697739c41.33516985 0 75.37589797-33.43285797 75.37589797-75.37589797V283.44082551c0-41.94304-33.43285797-75.37589797-75.37589797-75.37589797z"
							p-id="6301"
						></path>
						<path
							d="M944.19567304 5.64416928H282.83295536c-41.33516985 0-74.16015768 33.43285797-74.76802782 74.16015768v77.1995084h75.98376812V81.62793739h658.32336695v658.32336695h-75.98376812V815.93507246H943.5878029c41.33516985 0 74.16015768-33.43285797 74.76802782-74.76802782V79.80432696c0-40.72729971-33.43285797-74.16015768-74.16015768-74.16015768z"
						></path>
					</svg>
					<svg @click="close" class="close nb" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M578.36284173 512l422.30899284-422.30899284c18.09895683-18.09895683 18.09895683-48.2638849 0-66.36284173-18.09895683-18.09895683-48.2638849-18.09895683-66.36284173 0l-422.30899284 422.30899284-422.30899284-422.30899284c-18.09895683-18.09895683-48.2638849-18.09895683-66.36284173 0-18.09895683 18.09895683-18.09895683 48.2638849 0 66.36284173l422.30899284 422.30899284-422.30899284 422.30899284c-18.09895683 18.09895683-18.09895683 48.2638849 0 66.36284173 18.09895683 18.09895683 48.2638849 18.09895683 66.36284173 0l422.30899284-422.30899284 422.30899284 422.30899284c18.09895683 18.09895683 48.2638849 18.09895683 66.36284173 0 18.09895683-18.09895683 18.09895683-48.2638849 0-66.36284173l-422.30899284-422.30899284z"
						></path>
					</svg>
				</div>
			</template>
			
			<template #layout-bottom>
				<BodyScrollbar></BodyScrollbar>
			</template>
		</Layout>
	</n-config-provider>
</template>

<style lang="scss">
$c-text: #4a6988;


.nb {
	width: 20px;
	height: 20px;
	padding: 4px;
	fill: var(--vp-c-text-1);
	border-radius: 4px;

	&:hover {
		background-color: rgba($c-text, 0.1);
	}

	&:active {
		background-color: rgba($c-text, 0.3);
	}
}

.close {
	fill: #ff5500;
}

.close:hover {
	fill: #fff;
	background-color: rgba(230, 0, 0, 0.7);
}

.close:active {
	fill: #fff;
	background-color: rgba(230, 0, 0, 0.8);
}
</style>
