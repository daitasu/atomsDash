<template lang="pug">
  v-layout(row wrap style="text-align: center;").pl-2
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
import { getSymbol } from "~/modules/master";

export default {
  components: {
    Atom
  },
  props: {
    size: { type: Number, default: 90 },
    top: { type: Number, default: 35 },
    bottom: { type: Number, default: 10 },
    selectCharacter: { type: Function, default: () => {} }
  },
  computed: {
    getSymbol: () => getSymbol
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
