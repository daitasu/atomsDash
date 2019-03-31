<template lang="pug">
v-dialog(v-model="dialog" width="370")
  v-card(style="border-radius: 10px;")
    v-card-title.title.text-xs-center
      div ゲームを始めよう!!!
    v-card-text.text-xs-center(style="font-weight: 400") 
      div スペースキーでジャンプします
    v-divider
    v-card-actions
      v-spacer.text-xs-center
        v-btn(color="primary" flat="" @click="onOk()") {{ "START" }}
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, default: true },
    onOk: { type: Function, default: () => {} }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: block;
  font-weight: 600;
  font-size: 25px;
}
</style>
