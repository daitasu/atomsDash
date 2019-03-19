<template lang="pug">
  v-layout(row wrap style="text-align: center;").pl-2
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).p-2
          v-card.card H
            Atom(:size="size" :selectedAtomNo="1" :top="top" :bottom="bottom" :right="right" :left="left")
        v-flex(xs3).p-2 
          v-card.hidden
        v-flex(xs3).p-2
          v-card.hidden
        v-flex(xs3).p-2
          v-card.hidden
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).p-2
          v-card.hidden
        v-flex(xs3).p-2 
          v-card.hidden
        v-flex(xs3).p-2
          v-card.hidden
        v-flex(xs3).p-2
          v-card.card He
            Atom(:size="size" :selectedAtomNo="2" :top="top" :bottom="bottom" :right="right" :left="left")
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).p-2
          v-card.card Li
            Atom(:size="size" :selectedAtomNo="3" :top="top" :bottom="bottom" :right="right" :left="left")
        v-flex(xs3).p-2 
          v-card.card Be
            Atom(:size="size" :selectedAtomNo="4" :top="top" :bottom="bottom" :right="right" :left="left")
        v-flex(xs3).p-2
          v-card.card B
            Atom(:size="size" :selectedAtomNo="5" :top="top" :bottom="bottom" :right="right" :left="left")
        v-flex(xs3).p-2
          v-card.card C
            Atom(:size="size" :selectedAtomNo="6" :top="top" :bottom="bottom" :right="right" :left="left")
    v-flex(xs6).pt-2
      v-layout(row, wrap).p-1
        v-flex(xs3).p-2
          v-card.card N
            Atom(:size="size" :selectedAtomNo="7" :top="top" :bottom="bottom" :right="right" :left="left")
        v-flex(xs3).p-2 
          v-card.card O
            Atom(:size="size" :selectedAtomNo="8" :top="top" :bottom="bottom" :right="right" :left="left")
        v-flex(xs3).p-2
          v-card.card F
            Atom(:size="size" :selectedAtomNo="9" :top="top" :bottom="bottom" :right="right" :left="left")
        v-flex(xs3).p-2
          v-card.card Ne
            Atom(:size="size" :selectedAtomNo="10" :top="top" :bottom="bottom" :right="right" :left="left")
</template>

<script>
import Atom from "~/components/atoms/Charactors/DefaultAtom";

export default {
  components: {
    Atom
  },
  data() {
    return {
      size: 30,
      top: 35,
      bottom: 10,
      left: 0,
      right: 0
    };
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
