<template lang="pug">
v-dialog(v-model="dialog" width="370")
  v-card(style="border-radius: 10px;")
    v-card-text.text-md-center(style="font-weight: 400") {{ "GAME OVER" }}
    v-divider
    v-card-actions
      v-spacer.text-md-center
        v-btn(color="primary" flat="" @click="onOk()") {{ "RESTART" }}
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, default: true },
    onOk: { type: Function, default: () => {} }
  }
};
</script>
