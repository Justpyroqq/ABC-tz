<template>

    <div class="secretChapter__container">
      <img src="@/assets/img/hands.svg" class="secretChapter__img" alt="" />
      <h2 class="secretChapter__text">
         {{ secretChapter.textOne }}   <br />
        <span class="secretChapter__text_color">
            {{ secretChapter.textColor }}
        </span>
        {{ secretChapter.textTwo }}
    </h2>
    </div>

</template>

<script>

</script>

<style>

.secretChapter__container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 130px 40px 85px;
    margin: 0 auto 110px;
    width: 425px;
    height: 435px;
    border: 1px solid #ffffff;
    border-radius: 3px;
}

.secretChapter__img {
    position: absolute;
    top: -67.5px;
    width: 135px;
    height: 135px;
    border-radius: 50%;
}

.secretChapter__text {
    line-height: 1.4;
}

.secretChapter__text_color {
    color: #f6c866;
}

</style>