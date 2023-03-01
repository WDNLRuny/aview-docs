<template>
	<div ref="bodyScrollbar" v-show="clientHeight > innerHeight" class="bodyScrollbar">
		<div ref="thumb" :style="thumbStyle" class="thumb" @mousedown.stop="thumbmousedown"></div>
	</div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
	data() {
		return {
			scrollTop: 0,
			innerHeight: 0,
			clientHeight: 0,
			ismousedown: false,
			y: 0,
			sTop: 0
		};
	},
	computed: {
		thumbStyle() {
			return {
				height: (this.innerHeight / this.clientHeight) * 100 + '%',
				top: this.scrollTop * (this.innerHeight / this.clientHeight) + 'px'
			};
		}
	},
	setup() {},
	created() {
		window.addEventListener('scroll', e => {
			this.update();
		});

		const resizeObserver = new ResizeObserver(entries => this.update());
		resizeObserver.observe(document.body);

		document.addEventListener('mousemove', e => {
			if (this.ismousedown) {
				this.scrollTo(e.y);
				e.preventDefault();
			}
		});

		document.addEventListener('mouseup', () => {
			this.ismousedown = false;
		});
	},
	methods: {
		scrollTo(y) {
			let sy = y - this.y + this.sTop;
			window.scrollTo(0, (sy / window.innerHeight) * document.body.clientHeight);
		},
		update() {
			this.scrollTop = this.getScrollTop();
			this.innerHeight = window.innerHeight;
			this.clientHeight = document.body.clientHeight;
		},
		thumbmousedown(e) {
			if (e.button === 0) {
				this.y = e.y;
				this.sTop = e.y - e.offsetY;
				this.ismousedown = true;
			}
		},
		getScrollTop() {
			var scrollPos;
			if (window.pageYOffset) {
				scrollPos = window.pageYOffset;
			} else if (document.compatMode && document.compatMode != 'BackCompat') {
				scrollPos = document.documentElement.scrollTop;
			} else if (document.body) {
				scrollPos = document.body.scrollTop;
			}
			return scrollPos;
		}
	}
});
</script>

<style lang="scss" scoped>
.bodyScrollbar {
	position: fixed;
	top: 0px;
	right: 0px;
	width: 10px;
	height: 100vh;
	//background-color: #88c1fa;
	z-index: 99999;

	.thumb {
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px var(--scrollbar-color);
		background: var(--scrollbar-color);
		min-height: 30px;
		position: absolute;
		width: 100%;
	}
}
</style>
