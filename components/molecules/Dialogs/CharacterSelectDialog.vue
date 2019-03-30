<template lang="pug">
v-dialog(v-model="dialog" width="420")
  v-card(style="position: relative;")
    v-card-text.text-md-center(style="padding-bottom: 120px") {{ text }}
      Atom(:selectedAtomNo="atomNo" :size="90")
    v-divider
    v-card-actions
      v-spacer.text-md-center
        v-btn(color="error" flat="" @click="onNg()" data-test="confirm-ng") {{ ngText }}
      v-spacer.text-md-center
        v-btn(color="primary" flat="" @click="onOk()" data-test="confirm-ok") {{ okText }}
</template>

<script>
import Atom from "~/components/atoms/Characters/DefaultAtom";

export default {
  components: {
    Atom
  },
  props: {
    dialog: { type: Boolean, default: false },
    okText: { type: String, default: "決定する" },
    ngText: { type: String, default: "キャンセル" },
    text: { type: String, default: "" },
    atomNo: { type: Number, default: 0 }
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.$emit("dismiss");
      }
    }
  },
  methods: {
    onOk() {
      this.$emit("ok");
    },
    onNg() {
      this.$emit("ng");
    }
  }
};
</script>
