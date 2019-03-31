<template lang="pug">
  v-layout.hoge(column, justify-center, align-center)
    section
      StartDialog(:dialog="showStart" :onOk="play")
      LoseDialog(:dialog="showLose" :onOk="play")
    Character(:playing="playing" @set="setPosition" :size="characterSize")
    Wall(:playing="playing" @set="setPosition" :width="obstacleWidth" :height="obstacleHeight")
    Earth
</template>

<script>
import StartDialog from "~/components/molecules/Dialogs/StartDialog";
import LoseDialog from "~/components/molecules/Dialogs/LoseDialog";
import Earth from "~/components/atoms/Fields/Earth";
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
        characterX: 0,
        obstacleY: 0,
        characterY: 0
      },
      characterSize: 90,
      obstacleWidth: 50,
      obstacleHeight: 40
    };
  },
  methods: {
    play() {
      this.playing = true;
      this.showStart = false;
      this.showLose = false;
    },
    judge() {
      const { obstacleX, characterX, obstacleY, characterY } = this.positions;

      const totalRadiusX = this.characterSize / 2 + this.obstacleWidth / 2;
      const distanceX = Math.abs(obstacleX - characterX);
      const totalRadiusY = this.characterSize / 2 + this.obstacleHeight / 2;
      const distanceY = Math.abs(obstacleY - characterY);

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
        case "characterX":
        case "characterY":
          modifiedValue = parseInt(value, 10) + this.characterSize / 2;
          break;
      }
      this.positions[name] = modifiedValue;
      this.judge();
    }
  }
};
</script>
