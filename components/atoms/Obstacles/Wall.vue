<template lang="pug">
  div.wall(:style="`width: ${width}px; height: ${height}px;`")
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 50 },
    height: { type: Number, default: 80 }
  }
};
</script>

<style lang="scss">
.wall {
  background-color: #555;
  position: absolute;
  bottom: 100px;
}
</style>
