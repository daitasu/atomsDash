<template lang="pug">
  div.ball(:style="`width: ${width}px; height: ${height}px; bottom: ${bottom}px`")
</template>

<script>
export default {
  props: {
    width: { type: Number, default: 40 },
    height: { type: Number, default: 40 },
    bottom: { type: Number, default: 300 }
  }
};
</script>

<style lang="scss">
.ball {
  background-color: #555;
  position: absolute;
  border-radius: 20px;
}
</style>
