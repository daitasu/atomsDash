<template lang="pug">
  transition(name="jump")
    div.area(v-if="isJumping" :style="`width: ${size}; height: ${size};`")
      div.ball(:style="`width: ${size}; height: ${size};`")
</template>

<script>
import Velocity from "velocity-animate";

export default {
  props: {
    size: { type: String, default: "80px" },
    playing: { type: Boolean, default: false }
  },
  data() {
    return {
      jumping: false
    };
  },
  created() {
    window.addEventListener("keydown", this.onJump);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onJump);
  },
  computed: {
    isJumping() {
      return this.jumping;
    }
  },
  methods: {
    onJump(event) {
      if (this.jumping) {
        return;
      }
      this.jumping = true;
      setTimeout(() => {
        this.jumping = false;
      }, 2000);
    },
    measurePosition() {
      const elem = this.$el;
      const style = window.getComputedStyle(elem);
      this.$emit("set", "characterX", style.left);
      this.$emit("set", "characterY", style.bottom);
      if (this.playing) {
        setTimeout(() => this.measurePosition(), 50);
      }
    },
    customBeforeAppearHook(el) {
      Velocity(el, { bottom: "100px" }, { duration: 100 });
      Velocity(el, { bottom: "300px" }, { duration: 2000 });
    }
  },
  watch: {
    playing: function(playing) {
      this.measurePosition();
    }
  }
};
</script>

<style lang="scss" scoped>
.area {
  position: absolute;
  bottom: 100px;
  left: 450px;
  z-index: 0;
}
.ball {
  border-radius: 50%;
  background-color: #000;
  z-index: 1;
}
.jump-enter-active {
  animation-name: jump;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}
// .jump-leave-active {
//   animation-name: jump;
//   animation-duration: 1s;
//   animation-timing-function: ease-out;
//   animation-delay: 0;
//   animation-iteration-count: 1;
//   animation-direction: reverse;
//   animation-fill-mode: none;
//   animation-play-state: running;
// }

@keyframes jump {
  0% {
    bottom: 100px;
  }
  50% {
    bottom: 300px;
  }
  100% {
    bottom: 100px;
  }
}
</style>
