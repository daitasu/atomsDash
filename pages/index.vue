<template lang="pug">
  v-layout.hoge(column, justify-center, align-center)
    Ball
    Earth
    Wall
</template>

<script>
import Earth from "~/components/atoms/Fields/Earth.vue";
import Ball from "~/components/atoms/Charactors/Ball.vue";
import Wall from "~/components/atoms/Obstacles/Wall.vue";

export default {
  components: {
    Earth,
    Ball,
    Wall
  }
};
</script>
