<template lang="pug">
  hr
</template>

<script>
import Velocity from "velocity-animate";

export default {
  props: {
    playing: { type: Boolean, default: false }
  },
  watch: {
    playing(val) {
      if (val) {
        Velocity(this.$el, { backgroundPosition: "-100% -100%" }, { duration: 50000, loop: true, easing: "linear" });
      } else {
        Velocity(this.$el, "stop");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  height: 100px;
  width: 100%;
  border-top: 4px #000000 solid;
  display: block;
  position: absolute;
  bottom: 0;
  background: #a1887f;
  background-image: radial-gradient(#666 10%, transparent 0), radial-gradient(#666 10%, transparent 0);
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
}
</style>
