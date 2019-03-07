<template lang="pug">
  section
    div.wall.approaching(:style="`width: ${width}; height: ${height};`")
</template>

<script>
export default {
  props: {
    width: { type: String, default: "50px" },
    height: { type: String, default: "80px" }
  }
};
</script>

<style lang="scss">
.wall {
  background-color: #555;
  position: absolute;
  bottom: 100px;
  right: -5%;
}
.approaching {
  animation-name: approach;
  animation-duration: 7s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 5;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}

@keyframes approach {
  0% {
    right: -5%;
  }
  100% {
    right: 105%;
  }
}
</style>
