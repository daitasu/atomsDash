<template lang="pug">
  v-layout(row wrap style="text-align: center;").pl-2
    v-alert.success-alert(v-model="success" color="#03b961" dismissible type="success" transition="fade-transition")
      div {{`キャラクターを${currentCharacter}に変更しました`}}
    CharacterSelect(:dialog="show" :atomNo="selectedAtomNo" @ok="onOk()" @ng="onNg()" @dismiss="onNg()" text="この原子で遊びますか？")
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(1)") {{ getSymbol("ELEMENT_SYMBOL", 1) }}
            Atom(:size="size" :selectedAtomNo="1" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.hidden
        v-flex(xs3).px-1
          v-card.hidden
        v-flex(xs3).px-1
          v-card.hidden
    v-flex(xs6).pt-2
      v-layout(row, wrap)
        v-flex(xs3).px-1
          v-card.hidden
        v-flex(xs3).px-1
          v-card.hidden
        v-flex(xs3).px-1
          v-card.hidden
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(2)") {{ getSymbol("ELEMENT_SYMBOL", 2) }}
            Atom(:size="size" :selectedAtomNo="2" :top="top" :bottom="bottom")
    v-flex(xs6).pt-2
      v-layout(row, wrap)
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(3)") {{ getSymbol("ELEMENT_SYMBOL", 3) }}
            Atom(:size="size" :selectedAtomNo="3" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(4)") {{ getSymbol("ELEMENT_SYMBOL", 4) }}
            Atom(:size="size" :selectedAtomNo="4" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(5)") {{ getSymbol("ELEMENT_SYMBOL", 5) }}
            Atom(:size="size" :selectedAtomNo="5" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(6)") {{ getSymbol("ELEMENT_SYMBOL", 6) }}
            Atom(:size="size" :selectedAtomNo="6" :top="top" :bottom="bottom")
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(7)") {{ getSymbol("ELEMENT_SYMBOL", 7) }}
            Atom(:size="size" :selectedAtomNo="7" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(8)") {{ getSymbol("ELEMENT_SYMBOL", 8) }}
            Atom(:size="size" :selectedAtomNo="8" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(9)") {{ getSymbol("ELEMENT_SYMBOL", 9) }}
            Atom(:size="size" :selectedAtomNo="9" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(10)") {{ getSymbol("ELEMENT_SYMBOL", 10) }}
            Atom(:size="size" :selectedAtomNo="10" :top="top" :bottom="bottom")
</template>

<script>
import Atom from "~/components/atoms/Characters/DefaultAtom";
import CharacterSelect from "~/components/molecules/Dialogs/CharacterSelectDialog";
import { getSymbol, getName } from "~/modules/master";

export default {
  components: {
    Atom,
    CharacterSelect
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
.hidden {
  display: none;
}
.card {
  height: 125px;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background-color: #ddd !important;
  }
}
.success-alert {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 10px;
  border-radius: 8px;
}
</style>
