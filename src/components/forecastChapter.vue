<template>
    <div class="forecastChapter container">
        <div class="forecastChapter__container">
            <div class="forecastChapter__background bgd-img">
                <img src="@/assets/img/statue.png" alt="">
            </div>
            <p class="forecastChapter__text">
              {{ forecastChapter.text }}  <br />
                <span class="forecastChapter__text_color">
                    {{ forecastChapter.textColor }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style>

.forecastChapter__container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 606px;
}

.forecastChapter__background {
    opacity: 0.8;
}

.forecastChapter__text {
    position: absolute;
    padding-top: 50px;
    width: 380px;
    line-height: 1.4;
}

.forecastChapter__text_color {
    color: #f6c866;
}

</style>