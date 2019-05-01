<template lang="pug">
v-dialog(v-model="dialog" width="420")
  v-card(style="position: relative;")
    v-card-text.text-xs-center(style="padding-bottom: 120px")
      div {{ text }}
      div.atom-name {{ getName("ELEMENT_SYMBOL", atomNo) }}
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
import { getName } from "~/modules/master";

export default {
  components: {
    Atom
  },
  props: {
    dialog: { type: Boolean, default: false },
    okText: { type: String, default: "OK" },
    ngText: { type: String, default: "CANCEL" },
    text: { type: String, default: "" },
    atomNo: { type: Number, default: 0 }
  },
  computed: {
    getName: () => getName
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

<style lang="scss" scoped>
.atom-name {
  font-weight: 600;
  font-size: 20px;
}
</style>
