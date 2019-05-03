<template lang="pug">
  div.character(:class="isJumping")
    Atom(:size="size" :selectedAtomNo="atomNo" :left="left" :bottom="bottom")
</template>

<script>
import Atom from "~/components/atoms/Characters/DefaultAtom";

export default {
  components: {
    Atom
  },
  props: {
    size: { type: Number, default: 90 },
    atomNo: { type: Number, default: 10 },
    playing: { type: Boolean, default: false }
  },
  data() {
    return {
      jumping: false,
      center: null,
      bottom: 100,
      left: 150
    };
  },
  computed: {
    isJumping() {
      return this.jumping ? "jumping" : "";
    }
  },
  watch: {
    playing: function(playing) {
      this.measurePosition();
    }
  },
  created() {
    this.atomNo = this.$store.state.atomNo;
    this.center = this.bottom;
    window.addEventListener("keydown", this.onJump);
    window.addEventListener("touchstart", this.onJump);
  },
  destroyed() {
    window.addEventListener("keydown", this.onJump);
    window.removeEventListener("touchstart", this.onJump);
  },
  methods: {
    onJump(event) {
      if (this.jumping) {
        return;
      }
      if (this.$ua.deviceType() === "pc" && event.keyCode !== 32) {
        return;
      }
      this.jumping = true;

      const radius = 400;
      let t = 0;

      const timer = setInterval(() => {
        const jumpHeight = Math.sin((Math.PI * t++) / 100) * radius;

        this.bottom = this.center + jumpHeight;

        if (jumpHeight < 0) {
          clearInterval(timer);
          this.bottom = this.center;
          this.jumping = false;
        }
      }, 20);
    },
    measurePosition() {
      this.$emit("set", "positionX", this.left);
      this.$emit("set", "positionY", this.bottom);

      if (this.playing) {
        setTimeout(() => this.measurePosition(), 50);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.character {
  position: absolute;
  bottom: 100px;
  left: 0;
  z-index: 0;
}
.ball {
  border-radius: 50%;
  background-color: #000;
  z-index: 1;
}
</style>
