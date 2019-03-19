<template lang="pug">
  v-layout.hoge(column, justify-center, align-center)
    section
      StartDialog(:dialog="showStart" :onOk="play")
      LoseDialog(:dialog="showLose" :onOk="play")
    Character(:playing="playing" @set="setPosition")
    Wall(:playing="playing" @set="setPosition")
    Earth
</template>

<script>
import StartDialog from "~/components/molecules/Dialogs/StartDialog";
import LoseDialog from "~/components/molecules/Dialogs/LoseDialog";
import Earth from "~/components/atoms/Fields/Earth";
// import Ball from "~/components/atoms/Charactors/Ball";
import Character from "~/components/molecules/Character";
import Wall from "~/components/atoms/Obstacles/Wall";

export default {
  components: {
    StartDialog,
    LoseDialog,
    Character,
    Wall,
    Earth
  },
  data() {
    return {
      playing: false,
      showStart: true,
      showLose: false,
      positions: {
        obstacleX: 0,
        charactorX: 0,
        obstacleY: 0,
        charactorY: 0
      },
      charactorSize: 80,
      obstacleWidth: 50,
      obstacleHeight: 80
    };
  },
  computed: {},
  methods: {
    play() {
      this.playing = true;
      this.showStart = false;
      this.showLose = false;
    },
    judge() {
      const { obstacleX, charactorX, obstacleY, charactorY } = this.positions;

      const totalRadiusX = this.charactorSize / 2 + this.obstacleWidth / 2;
      const distanceX = Math.abs(obstacleX - charactorX);
      const totalRadiusY = this.charactorSize / 2 + this.obstacleHeight / 2;
      const distanceY = Math.abs(obstacleY - charactorY);

      if (distanceX < totalRadiusX && distanceY < totalRadiusY) {
        this.showLose = true;
        this.playing = false;
      }
    },
    setPosition(name, value) {
      let modifiedValue = 0;
      // 半径を足し、左端から中心点までの距離を出す
      switch (name) {
        case "obstacleX":
          modifiedValue = parseInt(value, 10) + this.obstacleWidth / 2;
          break;
        case "obstacleY":
          modifiedValue = parseInt(value, 10) + this.obstacleHeight / 2;
          break;
        case "charactorX":
        case "charactorY":
          modifiedValue = parseInt(value, 10) + this.charactorSize / 2;
          break;
      }
      this.positions[name] = modifiedValue;
      this.judge();
    }
  }
};
</script>
