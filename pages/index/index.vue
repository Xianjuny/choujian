<template>
	<view id="page">
		<image class="pond-head" src="/static/html/image/pond-head.png" mode="widthFix"></image>
		<view class="container-out">
			<view class="container-in">
				<view class="content-out" v-for="(box,index) in list" :key="index"
					:style="{left: box.left + 'rpx', top: box.top + 'rpx', 'background-color': index == indexSelect ? colorAwardSelect : colorAwardDefault}">
					<image class="pond-name-img" :src="box.image_url" alt=""></image>
					<text class="pond-name">{{box.name}}</text>
				</view>
			</view>
			<view class="start-btn" @click="startBtn">
				<image src="/static/html/image/pond-button.png" style="height:300rpx;width:100%;" alt=""></image>
				<image src="/static/html/image/pond-cj.png" :style="{'top': btntop + 'rpx'}"
					style="position:absolute;left:30rpx;height:290rpx;width:300rpx;" alt=""></image>
			</view>
			<view class="circle" v-for="(item,index) in circleList" :key="index"
				:style="{'top': item.topCircle + 'rpx', 'left': item.leftCircle + 'rpx', 'background-color': index % 2 == 0 ? colorCircleFirst : constcolorCircleSecond }">
			</view>
		</view>
		<view v-if="prize===1" class="prize">
			<view class="prize-box">
				<image class="prize-img" src="/static/html/image/pond-success.png" alt=""></image>
				<view class="prize-msg">
					<view>恭喜</view>
					<view>抽中{{prize_name}}</view>
					<view class="continue" @click="conTinue">继续抽奖</view>
				</view>
			</view>
		</view>
		<view class="prize" v-if="prize == 2">
			<view class="prize-box">
				<image class="prize-img2" src="/static/html/image/pond-empty.png" alt=""></image>
				<view class="prize-msg">
					<view>谢谢参与</view>
					<view>再换个姿势抽奖</view>
					<view class="continue" @click="conTinue">继续抽奖</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref,
		onMounted
	} from 'vue';
	const list = reactive([{
			id: 1,
			type: 1,
			name: '十元代金卷',
			image_url: '/static/html/image/djj.jpg',
			left: 10,
			top: 10
		},
		{
			id: 2,
			type: 2,
			name: '谢谢参与',
			image_url: '/static/html/image/djj.jpg',
			left: 107,
			top: 10
		},
		{
			id: 3,
			type: 1,
			name: '笔记本电脑',
			image_url: '/static/html/image/djj.jpg',
			left: 204,
			top: 10
		},
		{
			id: 4,
			type: 1,
			name: '20元优惠券',
			image_url: '/static/html/image/djj.jpg',
			left: 301,
			top: 10
		},
		{
			id: 5,
			type: 1,
			name: '500积分',
			image_url: '/static/html/image/djj.jpg',
			left: 398,
			top: 10
		},
		{
			id: 6,
			type: 1,
			name: '100元现金',
			image_url: '/static/html/image/djj.jpg',
			left: 495,
			top: 10
		},
		{
			id: 7,
			type: 1,
			name: '健身卡一张',
			image_url: '/static/html/image/djj.jpg',
			left: 495,
			top: 107
		},
		{
			id: 8,
			type: 2,
			name: '谢谢参与',
			image_url: '/static/html/image/djj.jpg',
			left: 495,
			top: 204
		}, {
			id: 9,
			type: 1,
			name: '20元优惠券',
			image_url: '/static/html/image/djj.jpg',
			left: 495,
			top: 301
		},
		{
			id: 10,
			type: 1,
			name: '500积分',
			image_url: '/static/html/image/djj.jpg',
			top: 398,
			left: 495
		},
		{
			id: 11,
			type: 1,
			name: '100元现金',
			image_url: '/static/html/image/djj.jpg',
			top: 495,
			left: 495
		}, {
			id: 12,
			type: 1,
			name: '十元代金卷',
			image_url: '/static/html/image/djj.jpg',
			left: 398,
			top: 495,
		},
		{
			id: 13,
			type: 2,
			name: '谢谢参与',
			image_url: '/static/html/image/djj.jpg',
			left: 301,
			top: 495,
		},
		{
			id: 14,
			type: 1,
			name: '笔记本电脑',
			image_url: '/static/html/image/djj.jpg',
			left: 204,
			top: 495,
		},
		{
			id: 15,
			type: 1,
			name: '20元优惠券',
			image_url: '/static/html/image/djj.jpg',
			left: 107,
			top: 495,
		},
		{
			id: 16,
			type: 1,
			name: '500积分',
			image_url: '/static/html/image/djj.jpg',
			left: 10,
			top: 495,
		},
		{
			id: 17,
			type: 1,
			name: '100元现金',
			image_url: '/static/html/image/djj.jpg',
			left: 10,
			top: 398,
		}, {
			id: 18,
			type: 1,
			name: '笔记本电脑',
			image_url: '/static/html/image/djj.jpg',
			left: 10,
			top: 301,
		},
		{
			id: 19,
			type: 1,
			name: '20元优惠券',
			image_url: '/static/html/image/djj.jpg',
			left: 10,
			top: 204,
		},
		{
			id: 20,
			type: 1,
			name: '500积分',
			image_url: '/static/html/image/djj.jpg',
			left: 10,
			top: 107,
		}
	])
	const circleList = ref([])
	const colorCircleFirst = ref("#F12416")
	const constcolorCircleSecond = ref("#FFFFFF")
	const colorAwardDefault = ref("#F5F0FC")
	const colorAwardSelect = ref("#ffe400")
	const btntop = ref(0) // 按钮的样式
	const time = ref(null) // 定时器
	const indexSelect = ref(0) // 奖品下标
	const lottert = ref(0) // 中奖下标
	const prize = ref(0) // 是否中奖
	const prize_name = ref('') // 奖品名字
	const men = ref(false)
	const init = () => {
		let cleft; // e
		let ctop; // a
		const dian = [];
		for (var j = 0; j < 24; j++) {
			if (j == 0) {
				cleft = 5;
				ctop = 5;
			} else if (j < 6) {
				ctop = 5;
				cleft += 105;
			} else if (j == 6) {
				ctop = 5;
				cleft = 630;
			} else if (j < 12) {
				ctop += 105;
				cleft = 630;
			} else if (j == 12) {
				ctop = 630;
				cleft = 630;
			} else if (j < 18) {
				ctop = 630;
				cleft -= 105;
			} else if (j == 18) {
				ctop = 630;
				cleft = 5;
			} else {
				if (!(j < 24)) return;
				ctop -= 105, cleft = 5;
			}
			dian.push({
				topCircle: ctop,
				leftCircle: cleft
			})
		}
		circleList.value = dian
		console.log("cric", circleList.value)
		console.log("prie", prize.value)
	};
	const toggleColors = () => {
		if (colorCircleFirst.value == '#FFFFFF') {
			colorCircleFirst.value = '#F12416'
			constcolorCircleSecond.value = '#FFFFFF'
		} else {
			colorCircleFirst.value = '#FFFFFF'
			constcolorCircleSecond.value = '#F12416'
			btntop.value = 0
		}
	}
	const toggleBtnTop = () => {
		if (btntop.value === 0) {
			btntop.value = -20;
		} else {
			btntop.value = 0;
		}
	};

	function randomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function clearTimer() {
		if (time.value) {
			clearInterval(time.value);
			time.value = null;
		}
	}
	const startBtn = () => {
		if (time.value) {
			return;
		} else {
			clearInterval(btntopInterval);
			men.value = true
			btntop.value = 0
			lottert.value = 0
			var i = indexSelect.value
			var times = null
			const s = ref(0)
			let running = true;
			const update = () => {
				if (!running) return;
				if (time.value) {
					console.log("ssvalue", end.value)
					clearTimer();
					// s.value=0
				}
				time.value = setInterval(() => {
					i++;
					i %= 20;
					if (end.value > 0) {
						indexSelect.value = i
						s.value = s.value + 100; //加速
						end.value = end.value - 1
						if (lottert.value > 0 && i + 1 === lottert.value) {
							setTimeout(() => {
								btntop.value = btntop.value === 0 ? -20 : 0
								btntopInterval = setInterval(toggleBtnTop, 900);
								clearTimer()
								clearendtimse()
								end.value=0
								if (list[i].type === 2) {
									prize.value = 2
									running = false;
									console.log("s1",s.value)
									return;
								} else {
									prize_name.value = list[i].name
									prize.value = 1
									running = false;
									console.log("s11",s.value)
									return;
								}
							}, 500)

						}
					} else {
						s.value = s.value + 1;
						indexSelect.value = i
						if (lottert.value > 0 && i + 1 === lottert.value) {
							btntop.value = btntop.value === 0 ? -20 : 0
							setTimeout(() => {
								if (list[i].type === 2) {
									prize.value = 2
									running = false;
									s.value = 0
									clearTimer()
									clearendtimse()
									btntopInterval = setInterval(toggleBtnTop, 900);
									console.log("s2",s.value)
									return;
								} else {
									clearTimer()
									clearendtimse()
									end.value=0
									prize_name.value = list[i].name
									prize.value = 1
									running = false;
									s.value = 0
									btntopInterval = setInterval(toggleBtnTop, 900);
									console.log("s22",s.value)
									return;
								}

							}, 500)

						}
					}
					update()
				}, 10 + s.value)
			}
			update()
			setTimeout(function() {
				lottert.value = randomNum(1, 20)
				//endtimse()
				console.log("ss", lottert.value)
				end.value = 10
			}, 3e3)
		}
	};

	let colorInterval;
	let btntopInterval;
	const endtime = ref(null);
	const end = ref(0)
	const endtimse = () => {
		endtime.value = setInterval(() => {
			end++
			console.log("s", end)
		}, 1000)
	}
	const conTinue = () => {
		men.value = false
		prize.value = 0
	}

	function clearendtimse() {
		if (endtime.value) {
			clearInterval(endtime.value);
			endtime.value = null;
		}
	}
	onMounted(() => {
		init();
		colorInterval = setInterval(toggleColors, 900);
		btntopInterval = setInterval(toggleBtnTop, 900);
	});
</script>

<style scoped lang="scss">
	/* AB模板网 整站模板下载 */
	/* 模板：Www.AdminBuy.Cn */
	/* 仿站：Fang.AdminBuy.Cn */
	/* 素材：Sc.AdminBuy.Cn */
	/* js特效：js.AdminBuy.Cn */
	/* QQ：9490489 */

	#page {
		width: 100%;
		height: 100vh;
		position: relative;
		background-color: #f12416;
	}

	.pond-head {
		width: 100%;
		// height: 400rpx;
		object-fit: contain;
	}

	.container-out {
		height: 650rpx;
		width: 650rpx;
		background-color: #F47915;
		margin: 16rpx auto 15rpx auto;
		border-radius: 8rpx;
		position: relative;
	}

	.circle {
		position: absolute;
		display: block;
		border-radius: 50%;
		height: 15rpx;
		width: 15rpx;
	}

	.content-out {
		position: absolute;
		height: 83rpx;
		width: 90rpx;
		background-color: #f5f0fc;
		border-radius: 8rpx;
		box-shadow: 0 8rpx 0 #FFCEC0;
	}

	.container-in {
		width: 600rpx;
		height: 600rpx;
		background-color: #f12416;
		border-radius: 10rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.pond-name-img {
		position: absolute;
		top: 6rpx;
		left: 0;
		width: 100%;
		height: 46rpx;
		z-index: 1;
	}

	.pond-name {
		position: absolute;
		top: 75%;
		color: #c62015;
		width: 98rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 19rpx;
		text-align: center;
	}

	.start-btn {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 8rpx;
		height: 350rpx;
		width: 350rpx;
		color: #f6251e;
		text-align: center;
		font-weight: bolder;
		display: flex;
		justify-content: center;
		align-items: center;
		// line-height: 300rpx;
	}

	.prizes {
		background: rgba(0, 0, 0, 0.25);
		position: absolute;
		left: 0;
		top: 0;
	}

	.prize {
		background: rgba(0, 0, 0, 0.25);
		position: absolute;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-ms-grid-row-align: center;
		align-items: center;
		z-index: 100;
	}

	.prize-box {
		margin: 0 auto;
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.prize-img {
		width: 100vw;
		max-height: 231px;
		max-width: 375px;
	}

	.prize-img2 {
		width: 100vw;
		max-height: 120px;
		max-width: 375px;
	}

	.prize-msg {
		margin-top: -7px;
		width: 78.5vw;
		max-width: 294.5px;
		text-align: center;
		background: #ffffff;
		padding-bottom: 6px;
		font-size: 13pt;
	}

	.prize_name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.continue {
		width: 240px;
		height: 40px;
		margin: 28px auto;
		background: #ff5c5c;
		line-height: 40px;
		color: #ffffff;
		border-radius: 20px;
	}

	.men {
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 1;
		left: 0;
		top: 0;
	}
</style>