<template>
	<div>
		<headerMain />
		<heroChapter />
		<secretChapter />
		<forecastChapter />
		<questionChapter />
		<footerMain />
	</div>
</template>

<script>
import headerMain from "@/components/headerMain";
import heroChapter from "@/components/heroChapter";
import secretChapter from "@/components/secretChapter";
import forecastChapter from "@/components/forecastChapter";
import questionChapter from "@/components/questionChapter";
import footerMain from "@/components/footerMain";

export default {
	data() {
		return {};
	},
	components: {
		headerMain,
		heroChapter,
		secretChapter,
		forecastChapter,
		questionChapter,
		footerMain,
	},
};
</script>

<style>
@font-face {
	font-family: "Roboto";
	src: url("@/assets/fonts/Roboto-Light.woff2") format("woff2"),
		url("@/assets/fonts/Roboto-Light.woff") format("woff"),
		url("@/assets/fonts/Roboto-Light.ttf") format("ttf");
	font-display: swap;
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: "Roboto";
	src: url("@/assets/fonts/Roboto-Regular.woff2") format("woff2"),
		url("@/assets/fonts/Roboto-Regular.woff") format("woff"),
		url("@/assets/fonts/Roboto-Regular.ttf") format("ttf");
	font-display: swap;
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: "Roboto";
	src: url("@/assets/fonts/Roboto-Medium.woff2") format("woff2"),
		url("@/assets/fonts/Roboto-Medium.woff") format("woff"),
		url("@/assets/fonts/Roboto-Medium.ttf") format("ttf");
	font-display: swap;
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: "Roboto";
	src: url("@/assets/fonts/Roboto-Bold.woff2") format("woff2"),
		url("@/assets/fonts/Roboto-Bold.woff") format("woff"),
		url("@/assets/fonts/Roboto-Bold.ttf") format("ttf");
	font-display: swap;
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "BadScript";
	src: url("@/assets/fonts/BadScript-Regular.woff2") format("woff2"),
		url("@/assets/fonts/BadScript-Regular.woff") format("woff"),
		url("@/assets/fonts/BadScript-Regular.ttf") format("ttf");
	font-display: swap;
	font-weight: 400;
	font-style: normal;
}

:root {
	--rec-line: 0;
}

body {
	background-color: #202024;
	font-family: "Roboto", sans-serif;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-size: 25px;
	line-height: 100%;
	font-weight: 400;
	text-align: center;
	text-decoration: none;
	list-style: none;
	color: #fff;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.question {
	font-size: 25px;
	color: #f6c866;
}

.question_up {
	text-transform: uppercase;
	line-height: 1.4;
}

.bgd-img {
	width: 100%;
	height: 100%;
	border: none;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: transparent;
	background-size: cover;
}

.container-main {
	margin: 0 auto;
	width: 100%;
	height: 100%;
	max-width: 1920px;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto 110px;
	width: 100%;
	max-width: 1440px;
}

.endnote {
	font-size: 16px;
	font-weight: 300;
	line-height: 1.2;
	letter-spacing: 0.1em;
	color: rgba(255, 255, 255, 0.6);
	opacity: 0.8;
}

.btn {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 35px;
	width: 310px;
	height: 70px;
	border: none;
	border-radius: 50px;
	font-size: 20px;
	font-weight: 400;
	color: #fff;
	background: linear-gradient(
		90deg,
		rgba(246, 200, 102, 0.9) -6.5%,
		rgba(254, 173, 53, 0.9) 100%
	);
	overflow: hidden;
}

.btn_gradient {
	position: absolute;
	top: 0;
	left: 0;
	width: 155px;
	height: 100%;
	background: linear-gradient(
		248.67deg,
		rgba(255, 255, 255, 0) 30.84%,
		rgba(255, 255, 255, 0.29) 46.06%,
		rgba(255, 255, 255, 0) 64.04%
	);
	animation-name: btn_gradient_anim;
	animation-duration: 2.5s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
}

@keyframes btn_gradient_anim {
	0% {
		left: -155px;
		opacity: 0;
	}
	100% {
		left: 310px;
		opacity: 1;
	}
}

@media (min-width: 50px) and (max-width: 700px) {
	.container {
		margin: 0 auto 55px;
	}
	.question {
		font-size: 16px;
		line-height: 1.5625;
	}
	.question_up {
		text-transform: uppercase;
		line-height: 1.5625;
	}
	.btn {
		margin-bottom: 20px;
		width: 180px;
		height: 40px;
		font-size: 14px;
	}
	.btn-gradient {
		width: 87px;
	}
	.endnode {
		font-size: 12px;
		line-height: 1.1666;
	}
	.header__up {
		padding-top: 21px;
		padding-bottom: 11px;
		margin-bottom: 7px;
		font-size: 12px;
		line-height: 1.1666;
	}
	.header__down {
		font-size: 20px;
		line-height: 1.15;
	}
	.heroChapter__background {
		height: 700px;
	}
	.heroChapter__img {
		width: 250px;
		height: 250px;
	}
	.heroChapter__img_on {
		padding: 47px;
	}

	.heroChapter__title_heading {
		width: 500px;
		margin-bottom: 23px;
	}
	.secretChapter__container {
		position: relative;
		padding: 58px 22px 32px;
		margin-bottom: 40px;
		width: 255px;
		height: 252px;
	}
	.secretChapter__img {
		top: -39px;
		width: 78px;
		height: 78px;
	}
	.secretChapter__text {
		font-size: 16px;
		font-weight: 500;
		line-height: 1.5625;
	}
	.secretChapter__text_color {
		font-size: 20px;
		line-height: 1.25;
	}
	.forecastChapter__container {
		height: 331px;
	}
	.forecastChapter__text {
		padding-top: 20px;
		width: 219px;
		font-size: 16px;
		font-weight: 500;
		line-height: 1.5625;
	}
	.forecastChapter__text_color {
		font-size: 20px;
		line-height: 1.25;
	}
	.questionChapter__title {
		margin-bottom: 27px;
	}
	.footerMain__container {
		margin-bottom: 0;
	}
	.footerMain__rune {
		width: 32px;
		height: 10px;
	}
	.footerMain__rune_top {
		margin-bottom: 37px;
	}
	.footerMain__rune_bot {
		margin-bottom: 97px;
	}
	.footerMain__text {
		margin-bottom: 33px;
		font-size: 20px;
		line-height: 1.4;
	}
	.footerMain__right {
		right: -30px;
		width: 84px;
		height: 44px;
	}
	.footerMain__left {
		bottom: 70px;
		left: -12.5px;
		width: 50px;
		height: 50px;
	}
}
</style>
