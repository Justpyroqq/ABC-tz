<template>
  <div class="buttons">

    <router-link to="/test" class="btn">
      <div class="btn_gradient"></div>
      {{ buttonsAll.btnYes }}
    </router-link>

    <router-link to="/test" class="btn">
      <div class="btn_gradient"></div>
      {{ buttonsAll.btnNo }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "buttonsAll",
};
</script>

<style scoped>
</style>