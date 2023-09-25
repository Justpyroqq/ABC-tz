<template>
    <div class="header__container_index">
        <h4 class="header__up">
            {{ headerStart.title }}
        </h4>
        <h3 class="header__down">
            {{ headerStart.subtitle }}
        </h3>
    </div>
</template>

<script>

</script>

<style>
.header__up {
    padding-top: 35px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
}

.header__down {
    font-weight: 300;
    font-size: 25px;
    line-height: 1.16;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
}

.header__container_index {
    margin-bottom: 42px;
}
</style>