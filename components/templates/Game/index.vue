<template lang="pug">
  v-layout.hoge(column, justify-center, align-center)
    section
      StartDialog(:dialog="showStart" :onOk="play")
    Ball
    Earth
    Wall(:playing="playing" ref="wallPosition")
</template>

<script>
import StartDialog from "~/components/molecules/Dialogs/StartDialog";
import Earth from "~/components/atoms/Fields/Earth";
import Ball from "~/components/atoms/Charactors/Ball";
import Wall from "~/components/atoms/Obstacles/Wall";

export default {
  components: {
    StartDialog,
    Ball,
    Wall,
    Earth
  },
  data() {
    return {
      playing: false,
      showStart: true,
      obstacleX: null,
      charactorX: null
    };
  },
  methods: {
    play() {
      this.playing = true;
      this.showStart = false;
    },
    judge() {
      console.log("obstacleX ->", this.obstacleX);
    }
  },
  watch: {
    playing: function() {
      console.log(this.$refs);
    }
  }
};
</script>
