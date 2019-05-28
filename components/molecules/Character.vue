<template lang="pug">
  div.character(:class="isJumping" :style="`bottom: ${bottom + size / 2}px;`")
    Atom(:size="size" :selectedAtomNo="atomNo" :left="left")
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
      jumping2: false,
      timer: 0,
      earthPoint: null,
      aeroPoint: null,
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
    this.earthPoint = this.bottom;
    window.addEventListener("keydown", this.onJump);
    window.addEventListener("touchstart", this.onJump);
  },
  destroyed() {
    window.addEventListener("keydown", this.onJump);
    window.removeEventListener("touchstart", this.onJump);
  },
  methods: {
    onJump(event) {
      if (this.jumping && this.jumping2) {
        return;
      }
      if (this.jumping) {
        clearInterval(this.timer);
        this.jumping2 = true;
        const radius = 150;
        let t = 0;
        this.aeroPoint = this.bottom;
        const aeroTimer = setInterval(() => {
          const jumpHeight = Math.sin((Math.PI * t++) / 70) * radius;
          this.bottom = this.aeroPoint + jumpHeight;

          if (this.bottom < this.earthPoint) {
            clearInterval(aeroTimer);
            this.bottom = this.earthPoint;
            this.jumping = false;
            this.jumping2 = false;
          }
        }, 20);
        return;
      }

      if (this.$ua.deviceType() === "pc" && event.keyCode !== 32) {
        return;
      }
      this.jumping = true;

      const radius = 150;
      let t = 0;

      this.timer = setInterval(() => {
        const jumpHeight = Math.sin((Math.PI * t++) / 70) * radius;
        this.bottom = this.earthPoint + jumpHeight;

        if (this.bottom < this.earthPoint) {
          clearInterval(this.timer);
          this.bottom = this.earthPoint;
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
