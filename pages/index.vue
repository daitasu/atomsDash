<template lang="pug">
  v-layout.hoge(column, justify-center, align-center)
    Ball
    Earth
</template>

<script>
import Earth from "~/components/atoms/Fields/Earth.vue";
import Ball from "~/components/atoms/Charactors/Ball.vue";

export default {
  components: {
    Earth,
    Ball
  }
};
</script>
