<template lang="pug">
  div
    Ball1
    Ball2
    Ball3
    Ball4
    //- Character(:size="50" :selectedAtomNo="1" :top="0" :bottom="100" :right="0" :left="0")
    div(style="position:absolute; bottom: 100px;")
      Atom(:size="50" :selectedAtomNo="1" :top="0" :bottom="100" :right="0" :left="550")
    div(style="position:absolute; bottom: 100px;")
      Atom(:size="50" :selectedAtomNo="10" :top="0" :bottom="100" :right="0" :left="750")
</template>

<script>
// import Earth from "~/components/atoms/Fields/Earth";
import Atom from "~/components/atoms/Characters/DefaultAtom";
import Character from "~/components/molecules/Character";

import Ball1 from "~/components/atoms/Characters/Ball1";
import Ball2 from "~/components/atoms/Characters/Ball2";
import Ball3 from "~/components/atoms/Characters/Ball3";
import Ball4 from "~/components/atoms/Characters/Ball4";

export default {
  components: {
    Atom,
    Ball1,
    Ball2,
    Ball3,
    Ball4,
    Character
  }
};
</script>
