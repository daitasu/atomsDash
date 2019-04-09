<template lang="pug">
v-card.light-blue.lighten-4.pa-1
  v-card.text-xs-center.light-blue.lighten-5
    GameText(:text="text")
</template>

<script>
import GameText from "~/components/atoms/Text/GameText";

export default {
  components: {
    GameText
  },
  props: {
    text: { type: String, default: "" }
  }
};
</script>

<style lang="scss" scoped>
.atom-name {
  font-weight: 600;
  font-size: 20px;
}
</style>
