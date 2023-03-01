// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

import {
	useTitle
} from '@vueuse/core'

import {
	computed,
	watch,
	ref
} from 'vue'

import naiveUi from 'naive-ui'
import '../styles/index.scss'

import configCreate from '../components/configCreate.vue'
import fileOperate from '../components/fileOperate.vue'


if (typeof window == "object" && window.aview) {
	window.isAview = !!window.aview;
	aview.winform.title = "aview";
	
	let shadow = aview.win.ui.shadow(aview.winform);

	aview.winform.addEventListener("adjust", (e) => {
		console.log(e);
	})

	aview.winform.addEventListener("activate", (e) => {
		// console.log(e);
	})

	aview.winform.addEventListener("close", (e) => {
		e.returnValue = null;
	})

	const keydown = e => {
		console.log(e);
	};

	document.addEventListener('keydown', keydown);
	
}



export default {
	...DefaultTheme,
	Layout: MyLayout,
	enhanceApp(ctx) {
		let {
			app,
			router,
			siteData
		} = ctx;

		// extend default theme custom behaviour.
		DefaultTheme.enhanceApp(ctx)

		app.use(naiveUi)
		// register your custom global components
		// app.component('configCreate', configCreate)
		// app.component('fileOperate', fileOperate)

	}
}
