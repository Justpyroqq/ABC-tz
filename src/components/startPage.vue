<template>
  <div>
    <headerMain />
    <heroChapter> </heroChapter>
    <secretChapter />
    <forecastChapter />
    <questionChapter />
    <footerMain />
  </div>
</template>

<script>
import headerMain from "@/components/headerMain";
import heroChapter from "@/components/heroChapter";
import secretChapter from "@/components/secretChapter";
import forecastChapter from "@/components/forecastChapter";
import questionChapter from "@/components/questionChapter";
import footerMain from "@/components/footerMain";

export default {
  data() {
    return {};
  },
  components: {
    headerMain,
    heroChapter,
    secretChapter,
    forecastChapter,
    questionChapter,
    footerMain,
  },
};
</script>

<style>

</style>