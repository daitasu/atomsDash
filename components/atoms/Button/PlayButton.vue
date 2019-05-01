<template lang="pug">
  v-btn(color="primary" large @click="onOk()" style="z-index:3; border-radius: 8px;")
    div.button-text {{ "PLAY GAME" }}
</template>

<script>
export default {
  props: {
    onOk: { type: Function, default: () => {} }
  }
};
</script>

<style lang="scss" scoped>
.button-text {
  display: block;
  font-weight: 600;
  font-size: 25px;
}
</style>
