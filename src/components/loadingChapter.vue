<template>
  <div class="loadingChapter">
    <div class="container loadingChapter__container">
      <img src="@/assets/img/loading.svg" alt="загрузка" class="loadingChapter__img" />
      <h2 class="loadingChapter__text">
        {{ loadingChapter.text }}
      </h2>
    </div>
  </div>
</template>

<script>
</script>

<style>
.loadingChapter__container {
  padding-top: 250px;
}

.loadingChapter__img {
  margin-bottom: 60px;
  width: 145px;
  height: 145px;
  animation-name: loading-rotate;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.loadingChapter__text {
  font-weight: 300;
  font-size: 24px;
  line-height: 1.1666;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
}

@keyframes loading-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 50px) and (max-width: 700px) {
  .loadingChapter__img {
    margin-bottom: 30px;
    width: 75px;
    height: 75px;
  }
}
</style>