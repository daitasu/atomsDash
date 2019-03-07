<template lang="pug">
  section
    div.ball(:class="isJumping" :style="`width: ${size}; height: ${size};`")
</template>

<script>
export default {
  props: {
    size: { type: String, default: "80px" }
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
      return this.jumping ? "jump" : "";
    }
  },
  methods: {
    onJump(event) {
      console.log("キーボードが押された");
      if (this.jumping) {
        return;
      }
      this.jumping = true;
      setTimeout(() => {
        this.jumping = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.ball {
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  bottom: 100px;
  left: 150px;
}
.jump {
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}

@keyframes fadeIn {
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
