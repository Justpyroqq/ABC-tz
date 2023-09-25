<template>
  <div class="heroChapter container">
    <div class="heroChapter__background bgd-img"></div>
    <div class="heroChapter__img">
      <img
        class="heroChapter__img_under"
        src="@/assets/img/pent.png"
        alt="Пентаграмма"
      />
      <img class="heroChapter__img_on" src="@/assets/img/woman.png" alt="Девушка" />
    </div>
    <h2 class="heroChapter__title_heading question">
      {{ heroChapter.heading }} <br />
      <span class="heroChapter__title_heading question question_up">
        {{ heroChapter.headingUp }}
      </span>
    </h2>
    <div class="heroChapter__buttons">
      <buttonsAll />
      <span class="heroChapter__endnote endnote">
        {{ heroChapter.end }}
      </span>
    </div>
  </div>
</template>
margin: 0 auto 150px;
<script>
import buttonsAll from "@/components/buttonsAll";

export default {
  components: {
    buttonsAll,
  },
};
</script>

<style>

.heroChapter {
  margin: 0 auto 110px; 
}

.heroChapter__img {
  position: relative;
  width: 385px;
  height: 385px;
  margin: 0 auto;
}

.heroChapter__img_under {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0, 8;
}

.heroChapter__img_on {
  position: relative;
  z-index: 0;
  border-radius: 50%;
  padding: 75px;
}
.heroChapter__background {
  position: absolute;
  top: 0;
  right: 0;
  height: 1000px;
  background-image: url("@/assets/img/blik.png");
}

.heroChapter__title_heading {
  width: 500px;
  margin-bottom: 40px;
}

.heroChapter__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>