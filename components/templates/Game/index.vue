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
    Character(:playing="playing" @set="setCharacterPosition" :size="character.size")
    template(v-for="o, index in obstacles")
      Obstacle(@set="setObstaclePosition" @delete="deleteObstacle" @appearNext="appearNextObstacle" :obstacleNo="o.obstacleNo" :show="o.show" :width="o.width" :height="o.height" :index="index")
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
      character: {
        size: 90,
        positionX: 0,
        positionY: 0
      },
      obstacles: [
        {
          width: 50,
          height: 40,
          show: false,
          obstacleNo: 1,
          positionX: 0,
          positionY: 0
        },
        {
          width: 50,
          height: 40,
          show: false,
          obstacleNo: 1,
          positionX: 0,
          positionY: 0
        },
        {
          width: 50,
          height: 40,
          show: false,
          obstacleNo: 1,
          positionX: 0,
          positionY: 0
        },
        {
          width: 50,
          height: 40,
          show: false,
          obstacleNo: 1,
          positionX: 0,
          positionY: 0
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
    playing(val) {
      if (val) {
        this.obstacles[0].show = true;
        setTimeout(() => {
          this.obstacles[1].show = true;
        }, this.getRandom(1, 3 * 1000));
      } else {
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].show = false;
        }
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
    judge(index) {
      // 半径を足し、左端から中心点までの距離を出す
      const characterX = this.character.positionX;
      const characterY = this.character.positionY;
      const obstacleX = this.obstacles[index].positionX;
      const obstacleY = this.obstacles[index].positionY;

      const totalRadiusX = this.character.size / 2 + this.obstacles[index].width / 2;
      const distanceX = Math.abs(obstacleX - characterX);
      const totalRadiusY = this.character.size / 2 + this.obstacles[index].height / 2;
      const distanceY = Math.abs(obstacleY - characterY);

      if (distanceX < totalRadiusX && distanceY < totalRadiusY) {
        this.showLose = true;
        this.playing = false;
      }
    },
    setCharacterPosition(name, value) {
      this.character[name] = parseInt(value, 10) + this.character.size / 2;
      if (this.playing) {
        this.score = this.score + 1 / 5;
      }
    },
    setObstaclePosition(name, value, index) {
      switch (name) {
        case "positionX":
          this.obstacles[index].positionX = parseInt(value, 10) + this.obstacles[index].width / 2;
          break;
        case "positionY":
          this.obstacles[index].positionY = parseInt(value, 10) + this.obstacles[index].height / 2;
          break;
      }
      this.judge(index);
    },
    deleteObstacle(index) {
      this.obstacles[index].show = false;
      this.obstacles[index].positionX = 0;
      this.obstacles[index].positionY = 0;
    },
    setNextObstacle(index) {
      this.obstacles[index] = {
        obstacleNo: this.getRandom(1, 2),
        height: this.getRandom(1, 4) * 40,
        width: 50,
        show: true,
        positionX: 0,
        positionY: 0
      };
    },
    appearNextObstacle(index) {
      if (this.playing) {
        const nextPair = index + 2 < this.obstacles.length ? index + 2 : 0 + (index % 2);
        if (nextPair % 2 === 0) {
          this.setNextObstacle(nextPair);
        } else {
          setTimeout(() => this.setNextObstacle(nextPair), this.getRandom(2, 4) * 1500);
        }
      }
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
  }
};
</script>
