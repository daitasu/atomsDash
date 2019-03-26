<template>
  <transition
    name="custom-classes"
    enter-active-class="fade-start"
    leave-active-class="fade-stop"
  >
    <div v-if="fade" class="area" :style="`width: ${size}; height: ${size};`">
      <div class="ball" :style="`width: ${size}; height: ${size};`" />
    </div>
  </transition>
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
  watch: {
    playing: function(playing) {
      this.measurePosition();
    }
  },
  created() {
    window.addEventListener("keydown", this.onJump);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onJump);
  },
  methods: {
    onJump(event) {
      if (this.fade) {
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
  }
};
</script>

<style lang="scss" scoped>
.area {
  position: absolute;
  bottom: 100px;
  left: 250px;
  z-index: 0;
}
.ball {
  border-radius: 50%;
  background-color: #555;
  z-index: 1;
}

.fade-start {
  animation: fade-in 1s;
}
.fade-stop {
  animation: fade-in 1s reverse;
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
