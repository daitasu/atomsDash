<template lang="pug">
  v-template.game-text {{text}}
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" }
  }
};
</script>

<style lang="scss" scoped>
.game-text {
  color: #000;
  font-size: 25px;
  font-weight: 700;
}
</style>
