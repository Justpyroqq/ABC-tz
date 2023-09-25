<template>
	<div class="testPage">
		<div v-if="!showLoading">
			<div class="container testPage__container">
				<div
					:class="{
						testPage__container_white:
							getCurrentQuestion.whiteBackDescription,
					}"
				>
					<p
						class="testPage__text"
						:class="{
							testPage__text_white:
								getCurrentQuestion.whiteBackDescription,
						}"
					>
						{{ getQuestionDescription }}
					</p>
				</div>
				<div class="bgd-img testPage__img_eye"></div>
			</div>

			<div class="container testPage__question_container">
				<h1 class="testPage__title question question_up">
					{{ getCurrentQuestion.title }}
				</h1>

				<form
					v-if="getCurrentQuestion.selectBirthDay"
					@submit.prevent="nextQuestion()"
					class="testPage__question_btn_form"
				>
					<select class="select" id="day" v-model="day" required>
						<option class="option" value="">
							{{ testPage.day }}
						</option>
						<option class="option" v-for="i in 31" :key="i">
							{{ i }}
						</option>
					</select>
					<select class="select" id="month" v-model="month" required>
						<option class="option" value="">
							{{ testPage.month }}
						</option>
						<option class="option" v-for="i in 12" :key="i">
							{{ i }}
						</option>
					</select>
					<select class="select" id="year" v-model="year" required>
						<option class="option" value="">
							{{ testPage.year }}
						</option>
						<option class="option" v-for="i in 101" :key="i">
							{{ new Date().getFullYear() - i }}
						</option>
					</select>
					<button class="btn" type="submit">
						<div class="btn_gradient"></div>
						{{ testPage.next }}
					</button>
				</form>

				<template v-else>
					<div
						v-for="(answer, ansIndex) in getCurrentQuestion.answers"
						:key="ansIndex"
					>
						<button
							:value="ansIndex"
							@click="nextQuestion()"
							class="btn testPage__question_btn"
						>
							<div class="btn_gradient"></div>
							{{ answer }}
						</button>
					</div>
				</template>
			</div>

			<div class="endnote">
				{{ currentEnd }}
			</div>

			<div class="bgd-img testPage__img_moon"></div>
		</div>
		<loadingChapter v-if="showLoading" />
	</div>
</template>

<script>
import loadingChapter from "@/components/loadingChapter";

export default {
	components: {
		loadingChapter,
	},
	data() {
		return {
			currentQuestionIndex: 0,
			showLoading: false,
			loadingTimeout: null,
			day: "",
			month: "",
			year: "",
		};
	},
	computed: {
		getQuestions() {
			return this.testPage.questions;
		},
		getCurrentQuestion() {
			return this.getQuestions[this.currentQuestionIndex];
		},
		getQuestionDescription() {
			if (this.getCurrentQuestion.dynamicDescription) {
				if (this.day && this.month && this.year) {
					const birthYear = parseInt(this.year);
					const currentYear = new Date().getFullYear();
					const age = currentYear - birthYear;

					if (age >= 18 && age < 35) {
						return this.getCurrentQuestion.description[0];
					} else if (age >= 35 && age < 45) {
						return this.getCurrentQuestion.description[1];
					} else if (age >= 45) {
						return this.getCurrentQuestion.description[2];
					} else {
						return this.getCurrentQuestion.description[0];
					}
				} else {
					return this.getCurrentQuestion.description[0];
				}
			} else {
				return this.getCurrentQuestion.description[0];
			}
		},
		numberOfQuestions() {
			return this.getQuestions.length;
		},
		currentEnd() {
			return `${this.testPage.question} ${
				this.currentQuestionIndex + 1
			}-${this.numberOfQuestions}`;
		},
	},
	methods: {
		nextQuestion() {
			if (this.currentQuestionIndex < this.numberOfQuestions - 1) {
				this.currentQuestionIndex++;

				if (this.getCurrentQuestion.loading) {
					this.showLoading = true;
					clearTimeout(this.loadingTimeout);
					this.loadingTimeout = setTimeout(() => {
						this.showLoading = false;
					}, 2000);
				}
			} else {
				this.$router.push({ name: "Recording" });
			}
		},
	},
	beforeDestroy() {
		clearTimeout(this.loadingTimeout);
	},
};
</script>

<style scoped>
.testPage__container {
	position: relative;
	padding: 48px 42px 37px 43px;
	margin-bottom: 74px;
	width: 100%;
	min-height: 224px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.testPage__img_eye {
	position: absolute;
	z-index: 9999;
	bottom: 10px;
	right: 28.3333%;
	width: 150px;
	height: 75px;
	background-image: url("@/assets/img/eye.svg");
	opacity: 0.2;
}

.testPage__text {
	width: 425px;
	font-family: "BadScript", sans-serif;
	line-height: 1.4;
	opacity: 0.6;
	color: #fff;
}

.testPage__text_white {
	width: 425px;
	font-family: "BadScript", sans-serif;
	line-height: 1.4;
	color: #202024;
	opacity: 1;
}

.testPage__question_container {
	position: relative;
	justify-content: flex-start;
	margin-bottom: 230px;
}

.testPage__title {
	margin-bottom: 22px;
	width: 500px;
}

.testPage__question_btn_form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.testPage__img_moon {
	position: absolute;
	bottom: 85px;
	left: calc(25% - 43px);
	width: 90px;
	height: 90px;
	background-image: url("@/assets/img/moon.svg");
	opacity: 0.2;
}

.testPage__container_white {
	position: relative;
	padding: 10px 15px;
	border-radius: 5px;
	background-color: #fff;
	color: #202024;
}

.testPage__container_white::after {
	content: "";
	position: absolute;
	z-index: -1;
	right: 33px;
	bottom: -25px;
	border: 15px solid transparent;
	border-top: 30px solid #fff;
	color: #202024;
}

.testPage__text::after {
	content: "";
	position: absolute;
	color: #202024;
}

.select {
	margin-bottom: 35px;
	width: 310px;
	height: 70px;
	border: none;
	border-radius: 50px;
	font-size: 20px;
	font-weight: 400;
	color: #202024;
	text-align: center;
	text-align-last: center;
	background: linear-gradient(
		90deg,
		rgba(228, 228, 228, 0.9) -6.2%,
		rgba(203, 203, 203, 0.9) 100%
	);
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	overflow: hidden;
}

.option {
	border-radius: 50px;
	color: #202024;
}

.endnote {
	position: absolute;
	bottom: 20px;
	left: 0;
	right: 0;
}

@media (min-width: 50px) and (max-width: 700px) {
	.testPage__container {
		padding: 22px 30px 16px;
		margin-bottom: 36px;
		min-height: 124px;
		overflow: hidden;
	}
	.testPage__text {
		padding: 0 12px 8px;
		width: 259px;
		font-family: "BadScript", sans-serif;
		font-size: 14px;
		line-height: 1.428;
	}

	.testPage__img_eye {
		bottom: 5px;
		right: -25px;
		width: 84px;
		height: 44px;
	}
	.testPage__question_container {
		margin-bottom: 100px;
	}
	.testPage__title {
		margin-bottom: 40px;
		width: 302px;
	}

	.endnote {
		font-size: 12px;
		line-height: 1.1666;
	}

	.testPage__img_moon {
		bottom: 350px;
		left: -13px;
		width: 52px;
		height: 52px;
	}
	.select {
		margin-bottom: 20px;
		width: 180px;
		height: 40px;
		font-size: 14px;
	}
}
</style>
