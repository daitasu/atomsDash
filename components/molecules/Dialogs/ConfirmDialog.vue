<template lang="pug">
v-dialog(v-model="dialog" width="370" persistent)
  v-card(style="border-radius: 10px;")
    v-card-title.title.text-xs-center
      div {{ text }}
    v-card-text.text-xs-center.py-2(v-if="caution" style="font-weight: 400") 
      div(style="color: #444") {{ caution }}
    v-divider
    v-card-actions
      v-spacer.text-xs-center
        v-btn(color="red" flat="" @click="onNg()") {{ ngText }}
      v-spacer.text-xs-center
        v-btn(color="primary" flat="" @click="onOk()") {{ okText }}
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, default: false },
    onOk: { type: Function, default: () => {} },
    onNg: { type: Function, default: () => {} },
    okText: { type: String, default: "START" },
    ngText: { type: String, default: "CLOSE" },
    text: { type: String, default: "" },
    caution: { type: String, default: "" }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: block;
  font-weight: 600;
  font-size: 28px;
}
</style>
