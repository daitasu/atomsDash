<template lang="pug">
  div.area(:class="isFading" :style="`width: ${size}; height: ${size};`")
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
      fade: false
    };
  },
  created() {
    window.addEventListener("keydown", this.onJump);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onJump);
  },
  computed: {
    isFading() {
      return this.fade ? "fade" : "";
    }
  },
  methods: {
    onJump(event) {
      if (this.jumping) {
        return;
      }
      this.fade = true;
      setTimeout(() => {
        this.fade = false;
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
.fade {
  animation: fade-in 1s;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
