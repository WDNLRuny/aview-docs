<template>
	<div ref="player" style="width: 100%;height: auto;aspect-ratio: 16/9;background-color: black;position: relative;">
		<video
			ref="video"
			style="width: 100%;height: 100%;"
			@play="data.isPlay = true"
			@pause="data.isPlay = false"
			@timeupdate="timeupdate"
			@loadedmetadata="loadedmetadata"
			@enterpictureinpicture="data.isPip = true"
			@leavepictureinpicture="data.isPip = false"
			src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a16472f1-2802-4eaa-bd22-ddfe64c43a86/9b320a69-f509-413d-b4ca-2bc3edec054b.mp4"
		></video>
		<div @mousemove="data.hidekj" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;display: flex;flex-direction: column;">
			<div v-show="data.show" style="text-align: center;background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0));color: #fff;" @mousedown="mousedown">标题</div>
			<div style="flex: 1;cursor:pointer;" :class="{ hideCursor: !data.show }" @click="single" @dblclick="double"></div>
			<div v-show="data.show" style="background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6));color: #fff;">
				<div style="display: flex;align-items: center;">
					<div @click="data.isPlay ? pause() : play()">
						<svg v-if="data.isPlay" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1751" width="20" height="20">
							<path
								d="M320 128A64 64 0 0 0 256 192v640a64 64 0 0 0 128 0v-640A64 64 0 0 0 320 128z m384 0A64 64 0 0 0 640 192v640a64 64 0 0 0 128 0v-640A64 64 0 0 0 704 128z"
								p-id="1752"
								fill="#ffffff"
							></path>
						</svg>
						<svg v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
							<path
								d="M829.696 584.405333c-3.626667 3.712-17.28 19.584-29.994667 32.597334-74.538667 82.133333-311.765333 216.533333-413.568 257.536-15.445333 6.613333-54.528 20.565333-75.434666 21.461333a123.733333 123.733333 0 0 1-57.301334-13.952 119.893333 119.893333 0 0 1-50.858666-57.856c-6.4-16.853333-16.426667-67.2-16.426667-68.096C176.213333 701.013333 170.666667 611.456 170.666667 512.512c0-94.293333 5.504-180.181333 13.653333-236.117333 0.938667-0.853333 10.922667-63.445333 21.802667-84.906667C226.176 152.32 265.258667 128 307.072 128h3.626667c27.264 0.938667 84.565333 25.258667 84.565333 26.197333 96.298667 41.088 329.002667 168.874667 405.376 253.824 0 0 21.504 21.802667 30.890667 35.413334 14.549333 19.626667 21.802667 43.861333 21.802666 68.096 0 27.093333-8.149333 52.309333-23.637333 72.832z"
								fill="#ffffff"
							></path>
						</svg>
					</div>
					<div style="width: 80px;font-size: 11px;text-align: center;">{{ data.ybf }}</div>

					<!-- 总进度条 -->
					<div ref="zjdt" @mousedown="zjdtMousedown" style="flex: 1;background-color: rgba(133, 133, 133, 0.3);position: relative;height: 3px;">
						<!-- 已加载完成的进度 -->
						<div ref="yjz" style="background-color: rgba(0, 255, 255, 0.3);"></div>
						<!-- 正在播放的进度 -->
						<div ref="jdt" style="background-color: rgba(0, 255, 255, 0.3);position: relative;width: 0%;height: 100%;">
							<div
								ref="kzd"
								style="border-radius: 50%;background-color: rgba(255, 255, 255, 0.7);position: absolute;right: 0;width: 10px;height: 10px;margin-top: -3.5px;margin-right: -5px;"
							></div>
						</div>
					</div>
					<div style="width: 80px;font-size: 11px;text-align: center;">{{ data.zsc }}</div>
				</div>
				<div style="display: flex;justify-content: flex-end;">
					<div @click="hzh" style="">
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
							<path
								d="M768 213.333333H256a85.333333 85.333333 0 0 0-85.333333 85.333334v426.666666a85.333333 85.333333 0 0 0 85.333333 85.333334h170.666667a42.666667 42.666667 0 1 1 0 85.333333H256a170.666667 170.666667 0 0 1-170.666667-170.666667V298.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h512a170.666667 170.666667 0 0 1 170.666667 170.666667v128a42.666667 42.666667 0 1 1-85.333334 0V298.666667a85.333333 85.333333 0 0 0-85.333333-85.333334z m-128 341.333334a128 128 0 0 0-128 128v85.333333a128 128 0 0 0 128 128h170.666667a128 128 0 0 0 128-128v-85.333333a128 128 0 0 0-128-128h-170.666667z"
								p-id="1966"
								fill="#ffffff"
							></path>
						</svg>
					</div>
					<div @click="wyqp" style="">
						<svg v-if="data.isFullscreen" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
							<path
								d="M746.2 131.1H279.9c-90.1 0-163.5 73.4-163.5 163.5v466.2c0 90.1 73.4 163.5 163.5 163.5h466.2c90.1 0 164.1-73.4 163.5-163.5V294.6c0.1-90.2-73.3-163.5-163.4-163.5zM282.5 566.8h150.4c20.5 0 37.9 16.8 38.5 38.5v150.4c0 21.1-16.8 37.9-37.9 37.9-10.6 0-19.9-4.4-26.7-11.2s-11.2-16.8-11.2-26.7v-58.4L259.4 833.6c-14.9 14.9-39.2 14.9-54.1 0-14.9-14.9-14.9-39.2 0-54.1l136.2-136.2h-58.4c-21.1 0-37.9-16.8-37.9-37.9 0-21.2 16.2-38.6 37.3-38.6z m458.7-86.9H590.8c-20.5 0-37.9-16.8-38.5-38.5V291c0-21.1 16.8-37.9 37.9-37.9 10.6 0 19.9 4.4 26.7 11.2s11.2 16.8 11.2 26.7v58.4l136.2-136.2c14.9-14.9 39.2-14.9 54.1 0 14.9 14.9 14.9 39.2 0 54.1L682.1 403.5h58.4c21.1 0 37.9 16.8 37.9 37.9 0.1 21.1-16.1 38.5-37.2 38.5z"
								p-id="1632"
								fill="#ffffff"
							></path>
						</svg>
						<svg v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
							<path
								d="M747.1 116.6H280.9c-90.1 0-163.5 73.4-163.5 163.5v466.2c0 90.1 73.4 163.5 163.5 163.5h466.2c90.1 0 164.1-73.4 163.5-163.5V280.1c0-90.2-73.3-163.5-163.5-163.5z m-363 713.6H233.6c-20.5 0-37.9-16.8-38.5-38.5V641.3c0-21.1 16.8-37.9 37.9-37.9 10.6 0 19.9 4.4 26.7 11.2 6.8 6.8 11.2 16.8 11.2 26.7v58.4l136.2-136.2c14.9-14.9 39.2-14.9 54.1 0 14.9 14.9 14.9 39.2 0 54.1L325 753.8h58.4c21.1 0 37.9 16.8 37.9 37.9s-16.1 38.5-37.2 38.5z m257.5-642.8H792c20.5 0 37.9 16.8 38.5 38.5v150.4c0 21.1-16.8 37.9-37.9 37.9-10.6 0-19.9-4.4-26.7-11.2-6.8-6.8-11.2-16.8-11.2-26.7V318L618.5 454.2c-14.9 14.9-39.2 14.9-54.1 0-14.9-14.9-14.9-39.2 0-54.1l136.2-136.2h-58.4c-21.1 0-37.9-16.8-37.9-37.9s16.1-38.6 37.3-38.6z"
								p-id="1430"
								fill="#ffffff"
							></path>
						</svg>
					</div>
					<div @click="qp" style="">
						<svg v-if="data.isFullscreen2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
							<path
								d="M384 512a128 128 0 0 0 128-128V170.666667a42.666667 42.666667 0 1 0-85.333333 0v213.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 1 0 0 85.333333h213.333333z m277.333333 42.666667a128 128 0 0 0-128 128v170.666666a42.666667 42.666667 0 1 0 85.333334 0v-170.666666a42.666667 42.666667 0 0 1 42.666666-42.666667H853.333333a42.666667 42.666667 0 1 0 0-85.333333h-192z"
								fill="#ffffff"
							></path>
						</svg>
						<svg v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
							<path
								d="M256 170.666667a128 128 0 0 0-128 128v213.333333a42.666667 42.666667 0 1 0 85.333333 0V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h213.333333a42.666667 42.666667 0 1 0 0-85.333333H256z m512 682.666666a128 128 0 0 0 128-128v-170.666666a42.666667 42.666667 0 1 0-85.333333 0v170.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-192a42.666667 42.666667 0 1 0 0 85.333333H768z"
								fill="#ffffff"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div id="J_prismPlayer"></div>
</template>

<script setup>
import { ref, reactive, onUnmounted,onMounted } from 'vue';

const player = ref(null);
const video = ref(null);

const zjdt = ref(null);
const yjz = ref(null);
const jdt = ref(null);

let jdtm = false;
const zjdtMousedown = e => {
	jdtm = true;

	let isPlay = data.isPlay;

	let { screenX, pageX, offsetX } = e;

	let elContent = zjdt.value.getBoundingClientRect();
	let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	let scrollY = document.documentElement.scrollTop || document.body.scrollTop;

	//进度条相对于文档左边的距离
	let x = elContent.x + scrollX;

	let width = zjdt.value.offsetWidth;
	let duration = video.value.duration;

	video.value.currentTime = (duration * (pageX - x)) / width;

	let m = e => {
		if (jdtm) {
			isPlay && pause();
			video.value.currentTime = (duration * (e.pageX - x)) / width;
		}
	};
	let m2 = () => {
		jdtm = false;
		isPlay && play();
		window.removeEventListener('mousemove', m);
		window.removeEventListener('mouseup', m2);
	};

	window.addEventListener('mousemove', m);
	window.addEventListener('mouseup', m2);
};

const data = reactive({
	show: false,
	isPlay: false,
	isPip: false, //是否画中画
	isFullscreen: false, //是否网页全屏
	isFullscreen2: false, //是否全屏
	hidetimer: null,
	ybf: '00:00:00',
	zsc: '00:00:00',
	hidekj() {
		this.show = true;
		clearTimeout(this.hidetimer);
		this.hidetimer = setTimeout(() => {
			this.show = false;
		}, 2000);
	}
});

const wyqp = () => {
	if (data.isFullscreen) {
		document.exitFullscreen();
		data.isFullscreen = false;
	} else {
		player.value.requestFullscreen();
		data.isFullscreen = true;
	}
};

const qp = () => {
	if (data.isFullscreen2) {
		document.exitFullscreen();
		data.isFullscreen = false;
		aview.winform.fullScreen();
		data.isFullscreen2 = aview.winform.isFullScreen();
	} else {
		player.value.requestFullscreen();
		data.isFullscreen = true;
		aview.winform.fullScreen();
		data.isFullscreen2 = aview.winform.isFullScreen();
	}
};

const hzh = () => {
	if (data.isPip) {
		document.exitPictureInPicture();
	} else {
		video.value.requestPictureInPicture();
	}
};

function formatDuring(mss) {
	var hours = Math.floor(mss / (60 * 60));
	var minutes = Math.floor((mss % (60 * 60)) / 60);
	var seconds = Math.floor(mss % 60);
	return { hours: hours >= 10 ? hours : '0' + hours, minutes: minutes >= 10 ? minutes : '0' + minutes, seconds: seconds >= 10 ? seconds : '0' + seconds };
}

const mousedown = () => aview.winform.hitCaption();

const timeupdate = () => {
	var s = formatDuring(video.value.currentTime);
	data.ybf = `${s.hours}:${s.minutes}:${s.seconds}`;

	let res = (video.value.currentTime / video.value.duration) * 100;
	jdt.value.style.width = res + '%';
};

const loadedmetadata = () => {
	var s = formatDuring(video.value.duration);
	data.zsc = `${s.hours}:${s.minutes}:${s.seconds}`;
};

let timer;
const single = () => {
	clearTimeout(timer);
	timer = setTimeout(kz, 200);
};
const double = () => {
	clearTimeout(timer);
	wyqp();
};

const play = () => {
	video.value.play();
};

const pause = () => {
	video.value.pause();
};

const kz = () => {
	if (data.isPlay) {
		pause();
	} else {
		play();
	}
};

const keydown = e => {
	console.log(e);
	if (e.keyCode == 32) {
		kz();
		e.preventDefault();
	}
};

onUnmounted(() => {
	document.addEventListener('keydown', keydown);
	document.removeEventListener('keydown', keydown);
});


onMounted(()=>{
	// var player = new Aliplayer({
	//         id: 'J_prismPlayer',
	//         source: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a16472f1-2802-4eaa-bd22-ddfe64c43a86/9b320a69-f509-413d-b4ca-2bc3edec054b.mp4',//播放地址，可以是第三方点播地址，或阿里云点播服务中的播放地址。
	//       },function(player){
	//         console.log('The player is created.')
	//      });
})
</script>

<style>
.hideCursor {
	cursor: none !important;
}
</style>
