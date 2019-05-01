<template lang="pug">
  section
    template(v-for="c, index in clouds")
      transition(
        v-on:before-enter="beforeEnter"
        v-on:enter="el => enter(el, index)"
      )
        v-icon.cloud(v-if="c.show" :key="index" :size="c.size" :style="`top:${c.top}px;`") cloud
</template>

<script>
import Velocity from "velocity-animate";

export default {
  props: {
    playing: { type: Boolean, default: false }
  },
  data() {
    return {
      clouds: [
        {
          size: 40,
          top: 20,
          show: false
        },
        {
          size: 40,
          top: 20,
          show: false
        },
        {
          size: 40,
          top: 20,
          show: false
        }
      ]
    };
  },
  watch: {
    playing(playing) {
      if (playing) {
        this.clouds[0].show = true;
      }
    }
  },
  methods: {
    beforeEnter(el) {
      Velocity(el, { left: "105%" }, { duration: 0, loop: false, easing: "linear" });
    },
    enter(el, index) {
      Velocity(el, { left: "-5%" }, { duration: 10000, loop: false, easing: "linear" });
      setTimeout(() => {
        const next = index + 1 < this.clouds.length ? index + 1 : 0;
        this.clouds[next].size = this.getRandom(2, 4) * 20;
        this.clouds[next].top = this.getRandom(1, 4) * 30;
        this.clouds[next].show = true;
      }, 7000);
      setTimeout(() => {
        this.clouds[index].show = false;
      }, 10000);
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
  }
};
</script>

<style lang="scss" scoped>
.cloud {
  position: absolute;
  color: #999;
  z-index: 0 !important;
}
</style>
