<template>
  <div class="resultPage">
    <div class="container resultPage__container">
      <div class="flex flex-col resultPage__thx">
        <p class="resultPage__thx_text">
          {{ resultPage.thx }}<br />
          <span class="resultPage__thx_text_up">
            {{ resultPage.thxUp }}
          </span>
        </p>
      </div>
      <span class="resultPage__learn">
        {{ resultPage.learn }}
      </span>
      <div class="resultPage__event">
        <span class="question question_up resultPage__event_text">
          {{ resultPage.textOne }} {{ formattedNextDay }}
        </span>
        <span class="question">
          {{ resultPage.textTwo }}
        </span>
      </div>
      <span class="resultPage__do">
        {{ resultPage.do }}
      </span>
      <a class="btn resultPage__btn" @click="jsonData">
        <div class="btn-gradient btn-gradietn_resultPage"></div>
        {{ resultPage.btn }}
      </a>
      <footer class="resultPage__footer">
        <div class="container resultPage__footer_container">
          <span class="resultPage__footer_text">
            {{ resultPage.warn }}
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  computed: {
    formattedCurrentDate() {
      return this.formatDate(this.currentDate);
    },
    formattedNextDay() {
      const nextDay = new Date(this.currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return this.formatDate(nextDay);
    },
  },
  methods: {
    formatDate(date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
    jsonData() {
      axios
        .get("https://swapi.dev/api/people/1/")
        .then((response) => (console.log(response.data)));
    },
  },
};
</script>

<style scoped>
.resultPage__container {
  padding-top: 55px;
  margin-bottom: 0px;
}

.resultPage__thx {
  position: relative;
  padding: 20px 15px;
  margin-bottom: 35px;
  width: 480px;
  height: 165px;
  border-radius: 5px;
  background-color: #fff;
}

.resultPage__thx::after {
  content: "";
  position: absolute;
  right: 33px;
  bottom: -35px;
  border: 15px solid transparent;
  border-top: 30px solid #fff;
}

.resultPage__thx_text {
  margin-top: 10px;
  color: #202024;
}

.resultPage__thx_text_up {
  color: #202024;
  font-weight: 700;
}

.resultPage__learn {
  margin-bottom: 16px;
  width: 422px;
  font-weight: 300;
}

.resultPage__event {
  padding: 64px 50px 38px;
  margin-bottom: 32px;
  width: 480px;
  border: 1px solid #fff;
}

.resultPage__event_text {
  font-weight: 700;
}

.resultPage__do {
  margin-bottom: 35px;
  width: 470px;
  font-weight: 300;
}

.resultPage__btn {
  cursor: pointer;
  width: 400px;
  height: 80px;
  font-weight: 400;
  line-height: 1.15;
  background: linear-gradient(
    90deg,
    rgba(76, 217, 100, 0.9) -6.2%,
    rgba(50, 185, 73, 0.9) 100%
  );
}

.resultPage__footer_container {
  bottom: 0;
  width: 294px;
}

.resultPage__footer_text {
  position: absolute;
  bottom: -7.5px;
  padding: 0 13px;
  width: 294px;
  font-size: 7px;
  line-height: 1.285;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #9d9d9d;
}

.btn-gradietn_resultPage {
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
  animation-name: btn-gradient-anim-resultPage;
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes btn-gradient-anim-resultPage {
  0% {
    left: -155px;
    opacity: 0;
  }
  100% {
    left: 400px;
    opacity: 1;
  }
}

@media (min-width: 50px) and (max-width: 575px) {
  .resultPage__container {
    padding-top: 24px;
    margin-bottom: 0;
    height: 600px;
  }
  .resultPage__thx {
    position: relative;
    padding: 6px 13px;
    margin-bottom: 28px;
    width: 259px;
    height: 84px;
  }
  .resultPage__thx_text {
    margin: 0;
    font-size: 14px;
    line-height: 1.2857;
  }
  .resultPage__thx_text_up {
    font-size: 14px;
    line-height: 1.2857;
  }
  .resultPage__learn {
    margin-bottom: 25px;
    width: 219px;
    font-size: 14px;
  }
  .resultPage__event {
    padding: 13px 13px 8px;
    margin-bottom: 19px;
    width: 259px;
    border: 1px solid #fff;
    font-size: 16px;
  }
  .resultPage__do {
    margin-bottom: 21px;
    width: 233px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.1428;
  }
  .resultPage__btn {
    margin-bottom: 0;
    width: 238px;
    height: 48px;
    font-weight: 400;
    line-height: 1.15;
    background: linear-gradient(
      90deg,
      rgba(76, 217, 100, 0.9) -6.2%,
      rgba(50, 185, 73, 0.9) 100%
    );
  }
}
</style>