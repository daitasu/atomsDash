<template lang="pug">
  transition(
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  )
    Ball(v-if="show && obstacleNo === 2" :width="width" :height="height" :bottom="bottom")
    Wall(v-if="show && obstacleNo === 1" :width="width" :height="height")
</template>

<script>
import Wall from "~/components/atoms/Obstacles/Wall";
import Ball from "~/components/atoms/Obstacles/Ball";
import Velocity from "velocity-animate";

export default {
  components: {
    Wall,
    Ball
  },
  props: {
    width: { type: Number, default: 50 },
    height: { type: Number, default: 80 },
    bottom: { type: Number, default: 100 },
    obstacleNo: { type: Number, default: 1 },
    show: { type: Boolean, default: false },
    index: { type: Number, default: 0 }
  },
  data() {
    return {
      duration: 3000
    };
  },
  methods: {
    beforeEnter(el) {
      Velocity(el, { left: "105%" }, { duration: 0, loop: false, easing: "linear" });
    },
    enter(el) {
      this.measurePosition(el);
      Velocity(el, { left: "-5%" }, { duration: this.duration, loop: false, easing: "linear" });
      setTimeout(() => this.$emit("delete", this.index), this.duration);
    },
    leave(el) {
      this.$emit("appearNext", this.index);
    },
    measurePosition(el) {
      const style = window.getComputedStyle(el);
      this.$emit("set", "positionX", style.left, this.index);
      this.$emit("set", "positionY", style.bottom, this.index);

      if (this.show) {
        setTimeout(() => this.measurePosition(el), 30);
      }
    }
  }
};
</script>
