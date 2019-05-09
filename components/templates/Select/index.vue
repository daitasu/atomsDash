<template lang="pug">
  div(style="text-align: center;")
    v-alert.success-alert(v-model="success" color="#03b961" dismissible type="success" transition="fade-transition")
      div {{`キャラクターを${currentCharacter}に変更しました`}}
    CharacterSelect(:dialog="show" :atomNo="selectedAtomNo" @ok="onOk()" @ng="onNg()" @dismiss="onNg()" text="この原子で遊びますか？")
    PeriodicTable(:size="size" :top="top" :bottom="bottom" :selectCharacter="selectCharacter")
</template>

<script>
import Atom from "~/components/atoms/Characters/DefaultAtom";
import CharacterSelect from "~/components/molecules/Dialogs/CharacterSelectDialog";
import PeriodicTable from "~/components/organisms/PeriodicTable";
import { getSymbol, getName } from "~/modules/master";

export default {
  components: {
    Atom,
    CharacterSelect,
    PeriodicTable
  },
  data() {
    return {
      size: 90,
      top: 35,
      bottom: 10,
      show: false,
      selectedAtomNo: 0,
      success: false
    };
  },
  computed: {
    getSymbol: () => getSymbol,
    getName: () => getName,
    currentCharacter() {
      return this.getName("ELEMENT_SYMBOL", this.$store.state.atomNo);
    }
  },
  watch: {
    success(val) {
      if (val) {
        setTimeout(() => (this.success = false), 3000);
      }
    }
  },
  methods: {
    onOk() {
      this.$store.commit("SET_ATOM_NO", this.selectedAtomNo);
      this.success = true;
      this.show = false;
    },
    onNg() {
      this.show = false;
    },
    selectCharacter(atomNo) {
      this.selectedAtomNo = atomNo;
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.success-alert {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 10px;
  border-radius: 8px;
}
</style>
