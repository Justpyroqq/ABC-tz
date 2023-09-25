<template>
  <div class="questionChapter container">
    <div class="container">
      <h2 class="questionChapter__title question question_up">
        {{ questionChapter.question }}
      </h2>
      <buttonsAll />
      <span class="endnote">
         {{ questionChapter.end }}
    </span>
    </div>
  </div>
</template>

<script>
import buttonsAll from "@/components/buttonsAll";

export default {
  components: {
    buttonsAll,
  },
};
</script>

<style>

.questionChapter__title {
    margin-bottom: 45px;
}

</style>