<template lang="pug">
v-dialog(v-model="dialog" width="370")
  v-card(style="border-radius: 10px;")
    v-card-text.text-md-center {{ "GAME OVER" }}
    v-divider
    v-card-actions
      v-spacer.text-md-center
        v-btn(color="primary" flat="") {{ "RESTART" }}
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
