<template lang="pug">
  div.wall(:style="`width: ${width}px; height: ${height}px;`" :class="isPlaying")
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 50 },
    height: { type: Number, default: 80 },
    playing: { type: Boolean, default: false }
  },
  computed: {
    isPlaying() {
      return this.playing ? "approaching" : "";
    }
  },
  watch: {
    playing: function(playing) {
      this.measurePosition();
    }
  },
  methods: {
    measurePosition() {
      const elem = this.$el;
      const style = window.getComputedStyle(elem);
      this.$emit("set", "obstacleX", style.left);
      this.$emit("set", "obstacleY", style.bottom);
      if (this.playing) {
        setTimeout(() => this.measurePosition(), 50);
      }
    }
  }
};
</script>

<style lang="scss">
.wall {
  background-color: #555;
  position: absolute;
  bottom: 100px;
  left: 105%;
}
.approaching {
  animation-name: approach;
  animation-duration: 7s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 5;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}

@keyframes approach {
  0% {
    left: 105%;
  }
  100% {
    left: -5%;
  }
}
</style>
