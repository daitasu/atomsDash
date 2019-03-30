<template lang="pug">
  v-layout(row wrap style="text-align: center;").pl-2
    CharacterSelect(:dialog="show" :atomNo="selectedAtomNo" @ok="onOk()" @ng="onNg()" @dismiss="onNg()" text="この原子で遊びますか？")
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(1)") H
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
          v-card.card(@click="selectCharacter(2)") He
            Atom(:size="size" :selectedAtomNo="2" :top="top" :bottom="bottom")
    v-flex(xs6).pt-2
      v-layout(row, wrap)
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(3)") Li
            Atom(:size="size" :selectedAtomNo="3" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(4)") Be
            Atom(:size="size" :selectedAtomNo="4" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(5)") B
            Atom(:size="size" :selectedAtomNo="5" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(6)") C
            Atom(:size="size" :selectedAtomNo="6" :top="top" :bottom="bottom")
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(7)") N
            Atom(:size="size" :selectedAtomNo="7" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(8)") O
            Atom(:size="size" :selectedAtomNo="8" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(9)") F
            Atom(:size="size" :selectedAtomNo="9" :top="top" :bottom="bottom")
        v-flex(xs3).px-1
          v-card.card(@click="selectCharacter(10)") Ne
            Atom(:size="size" :selectedAtomNo="10" :top="top" :bottom="bottom")
</template>

<script>
import Atom from "~/components/atoms/Characters/DefaultAtom";
import CharacterSelect from "~/components/molecules/Dialogs/CharacterSelectDialog";

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
      selectedAtomNo: 0
    };
  },
  methods: {
    onOk() {
      // TODO: add mutating selected atom 
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
</style>
