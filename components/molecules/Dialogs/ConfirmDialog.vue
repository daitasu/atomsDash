<template lang="pug">
v-dialog(v-model="dialog" width="420")
  v-card
    v-card-text.text-md-center {{ text }}
    v-divider
    v-card-actions
      v-spacer.text-md-center
        v-btn(color="error" flat="" @click="onNG" data-test="confirm-ng") {{ ngText }}
      v-spacer.text-md-center
        v-btn(color="primary" flat="" @click="onOK" data-test="confirm-ok") {{ okText }}
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, default: false },
    onOk: { type: Function, default: () => {} },
    onNg: { type: Function, default: () => {} },
    okText: { type: String, default: "決定する" },
    ngText: { type: String, default: "キャンセル" },
    text: { type: String, default: "" }
  }
};
</script>
