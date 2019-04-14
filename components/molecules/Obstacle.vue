<template lang="pug">
  transition(
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  )
    Wall(v-if="showWall" :width="width" :height="height")
</template>

<script>
import Wall from "~/components/atoms/Obstacles/Wall";
import Velocity from "velocity-animate";

export default {
  components: {
    Wall
  },
  props: {
    width: { type: Number, default: 50 },
    height: { type: Number, default: 80 },
    playing: { type: Boolean, default: false }
  },
  data() {
    return {
      duration: 5000,
      showWall: false
    };
  },
  watch: {
    playing(playing) {
      this.showWall = playing;
    }
  },
  methods: {
    beforeEnter(el) {
      Velocity(el, { left: "105%" }, { duration: 0, loop: false, easing: "linear" });
    },
    enter(el) {
      if (this.playing) {
        this.measurePosition(el);
      }
      Velocity(el, { left: "-5%" }, { duration: this.duration, loop: false, easing: "linear" });
      setTimeout(() => {
        this.showWall = false;
      }, this.duration);
    },
    leave(el) {
      if (this.playing) {
        this.showWall = true;
      }
    },
    measurePosition(el) {
      const style = window.getComputedStyle(el);
      this.$emit("set", "obstacleX", style.left);
      this.$emit("set", "obstacleY", style.bottom);

      if (this.playing && this.showWall) {
        setTimeout(() => this.measurePosition(el), 50);
      }
    }
  }
};
</script>
