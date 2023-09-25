<template>
  <div class="footerMain">
    <div class="footerMain__container">
      <div class="footerMain__rune footerMain__rune_top"></div>
      <p class="footerMain__text">
        {{ footerMain.textUp }} <br />
        {{ footerMain.textDown }}
      </p>
      <div class="footerMain__rune footerMain__rune_bot"></div>
      <div class="footerMain__right"></div>
      <div class="footerMain__left"></div>
    </div>
  </div>
</template>

<script>
</script>

<style>

.footerMain__container {
  position: relative;
  margin-bottom: 0px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.footerMain__rune {
  width: 55px;
  height: 17px;
  background-size: contain;
}

.footerMain__rune_top {
  margin-bottom: 80px;
  background-image: url("@/assets/img/rune2.svg");
}

.footerMain__rune_bot {
  margin-bottom: 150px;
  background-image: url("@/assets/img/rune1.svg");
}

.footerMain__text {
  margin-bottom: 80px;
  width: 300px;
  line-height: 1.4;
  font-family: "BadScript";
}

.footerMain__right {
  border: none;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  background-size: cover;
  position: absolute;
  top: 0px;
  left: 80%;
  width: 300px;
  height: 155px;
  background-image: url("@/assets/img/eye.svg");
  opacity: 0.2;
}

.footerMain__left {
  border: none;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  background-size: cover;
  position: absolute;
  bottom: 50px;
  right: 90%;
  width: 160px;
  height: 160px;
  background-image: url("@/assets/img/moon.svg");
  opacity: 0.2;
}

</style>