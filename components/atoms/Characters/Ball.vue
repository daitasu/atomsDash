<template lang="pug">
  div.area(:class="isJumping" :style="`width: ${size}; height: ${size};`")
    div.ball(:style="`width: ${size}; height: ${size};`")
</template>

<script>
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
      return this.jumping ? "jumping" : "";
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
  // background-color: rgba(255, 193, 77, 0.783);
  position: absolute;
  bottom: 100px;
  left: 150px;
  z-index: 0;
}
.ball {
  border-radius: 50%;
  background-color: #000;
  z-index: 1;
}
.jumping {
  animation-name: jump;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}

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
