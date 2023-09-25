<template>
  <div class="recordingPage">
    <div class="contaioner recordingPage__container">
      <img src="@/assets/img/record.svg" alt="Запись" class="recordingPage__img" />
      <div
        class="recordingPage__line"
        :style="{ '--rec-line': recPercent + '%' }"
      ></div>
      <span class="recordingPage__line_percent"> {{ recPercent }}% </span>
      <h2 class="recordingPage__line_title">
        {{ recordingPage.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recPercent: 0,
      recInterval: null
    };
  },
  mounted() {
    this.recording();
  },
  methods: {
    recording() {
      this.recInterval = setInterval(() => {
        this.recPercent++;
        if (this.recPercent === 100) {
          clearInterval(this.recInterval);
          this.$router.push({ name: 'Result' })
        }
      }, 50);
    },
  },
  beforeDestroy() {
    clearInterval(this.recInterval)
  },
};
</script>

<style>
.recordingPage__container {
  padding-top: 205px;
}

.recordingPage__img {
  margin-bottom: 40px;
  width: 300px;
  height: 140px;
}

.recordingPage__line {
  position: relative;
  margin-bottom: 25px;
  width: 400px;
  height: 5px;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
}

.recordingPage__line::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: var(--rec-line);
  height: 100%;
  background-color: #f6c866;
}

.recordingPage__line_percent {
  margin-bottom: 12px;
  font-weight: 300;
  font-size: 32px;
  line-height: 1.15;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
}

.recordingPage__line_title {
  font-weight: 300;
  font-size: 24px;
  line-height: 1.1666;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
}

@media (min-width: 50px) and (max-width: 575px) {
  .recordingPage__img {
    width: 150px;
    height: 70px;
  }
  .recordingPage__line {
    width: 260px;
  }
  .recordingPage__line_percent {
    font-size: 20px;
  }
  .recordingPage__line_title {
    font-size: 12px;
  }
}

</style>