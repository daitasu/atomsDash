<template lang="pug">
  v-layout(row, justify-center, align-center)
    v-flex(xs10)
    v-flex(xs2).text-xs-left.px-2.py-1
      div
        GameText(:text="characterInfo")
      div
        GameText(:text="scoreInfo")
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
import GameText from "~/components/atoms/Text/GameText";
import { getSymbol } from "~/modules/master";

export default {
  components: {
    StartDialog,
    LoseDialog,
    Character,
    Wall,
    Earth,
    GameText
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
      obstacleHeight: 40,
      score: 0
    };
  },
  computed: {
    getSymbol: () => getSymbol,
    characterInfo() {
      return `atom: ${this.getSymbol("ELEMENT_SYMBOL", this.$store.state.atomNo)}`;
    },
    scoreInfo() {
      return `score: ${Math.floor(this.score)}`;
    }
  },
  methods: {
    play() {
      this.playing = true;
      this.score = 0;
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
      } else {
        this.score = this.score + 1 / 10;
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
