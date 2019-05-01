<template lang="pug">
  v-layout(row, justify-center, align-center)
    v-flex(xs10)
    v-flex(xs2 style="z-index: 3;").text-xs-left.px-2.py-1
      div
        GameText(:text="characterInfo")
      div
        GameText(:text="scoreInfo")
    section
      StartDialog(:dialog="showStart" :onOk="play")
      LoseDialog(:dialog="showLose" :onOk="play")
    Scene(:playing="playing")
    Character(:playing="playing" @set="setPosition" :size="characterSize")
    Obstacle(@set="setPosition" @delete="deleteObstacle" @appearNext="appearNextObstacle" :obstacleNo="obstacleNo" :show="showObstacle" :width="obstacleWidth" :height="obstacleHeight" :index="1")
    Obstacle(@set="" @delete="deleteObstacle" @appearNext="appearNextObstacle" :obstacleNo="obstacleNo2" :show="showObstacle2" :width="obstacleWidth2" :height="obstacleHeight2" :index="2")
    Earth(:playing="playing")
</template>

<script>
import StartDialog from "~/components/molecules/Dialogs/StartDialog";
import LoseDialog from "~/components/molecules/Dialogs/LoseDialog";
import Earth from "~/components/atoms/Fields/Earth";
import Character from "~/components/molecules/Character";
import Obstacle from "~/components/molecules/Obstacle";
import Scene from "~/components/molecules/Scene";
import GameText from "~/components/atoms/Text/GameText";
import { getSymbol } from "~/modules/master";

export default {
  components: {
    StartDialog,
    LoseDialog,
    Character,
    Obstacle,
    Scene,
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
      showObstacle: false,
      obstacleWidth: 50,
      obstacleHeight: 40,
      obstacleNo: 1,
      showObstacle2: false,
      obstacleWidth2: 50,
      obstacleHeight2: 40,
      obstacleNo2: 1,
      obstacles: [
        {
          width: 50,
          height: 40,
          show: false,
          obstacleNo: 1
        },
        {
          width: 50,
          height: 40,
          show: false,
          obstacleNo: 1
        },
        {
          width: 50,
          height: 40,
          show: false,
          obstacleNo: 1
        }
      ],
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
  watch: {
    playing(playing) {
      if (playing) {
        this.showObstacle = true;
        setTimeout(() => {
          this.showObstacle2 = true;
        }, this.getRandom(1, 3 * 1000));
      } else {
        this.showObstacle = false;
        this.showObstacle2 = false;
      }
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
    },
    deleteObstacle(index) {
      switch (index) {
        case 1:
          this.showObstacle = false;
          break;
        case 2:
          this.showObstacle2 = false;
          break;
      }
    },
    appearNextObstacle(index) {
      if (this.playing) {
        switch (index) {
          case 1:
            this.obstacleNo = this.getRandom(1, 2);
            this.obstacleHeight = this.getRandom(1, 4) * 40;
            this.showObstacle = true;
            break;
          case 2:
            this.obstacleNo2 = this.getRandom(1, 2);
            this.obstacleHeight2 = this.getRandom(1, 4) * 40;
            setTimeout(() => {
              this.showObstacle2 = true;
            }, this.getRandom(1, 3) * 1000);
            break;
        }
      }
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
  }
};
</script>
