<template lang="pug">
  div.area(:style="`width: ${size}px; height: ${size}px; top: ${top}px; bottom: ${bottom}px; right: ${right}px; left: ${left}px;`")
    transition(
      appear
      v-on:before-appear="customBeforeAppearHookL"
      v-on:appear="customAppearHook"
    )
      div.electron-shell(:style="`width: ${size}px; height: ${size}px;`")
        div.electron-1(v-if="selectedAtomNo > 6" :class="isOutermostL")
        div.electron-2(v-if="selectedAtomNo > 7" :class="isOutermostL")
        div.electron-3(v-if="selectedAtomNo > 8" :class="isOutermostL")
        div.electron-4(v-if="selectedAtomNo > 9" :class="isOutermostL")
        transition(
          appear
          v-on:before-appear="customBeforeAppearHookL2"
          v-on:appear="customAppearHook"
        )
          div.electron-shell(:style="`width: ${size}px; height: ${size}px; transform: rotateZ(45deg);`")
            div.electron-1(v-if="selectedAtomNo > 2" :class="isOutermostL")
            div.electron-2(v-if="selectedAtomNo > 3" :class="isOutermostL")
            div.electron-3(v-if="selectedAtomNo > 4" :class="isOutermostL")
            div.electron-4(v-if="selectedAtomNo > 5" :class="isOutermostL")
    transition(
      appear
      v-on:before-appear="customBeforeAppearHookK"
      v-on:appear="customAppearHook"
    )
      div.electron-shell(:style="`width: ${size * 2 / 3 }px; height: ${size * 2 / 3}px;`")
        div.electron-1(v-if="selectedAtomNo > 0" :class="isOutermostK")
        div.electron-2(v-if="selectedAtomNo > 1" :class="isOutermostK")
    div.neutron(:style="`width: ${size / 3}px; height: ${size / 3}px;`")
</template>

<script>
import Velocity from "velocity-animate";

export default {
  props: {
    size: { type: Number, default: 40 },
    selectedAtomNo: { type: Number, default: 10 },
    top: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
    left: { type: Number, default: 0 }
  },
  computed: {
    isOutermostK: function() {
      return this.selectedAtomNo < 3 ? "outermost" : "";
    },
    isOutermostL: function() {
      return this.selectedAtomNo < 11 ? "outermost" : "";
    }
  },
  created() {
    console.log("higehogheog");
  },
  methods: {
    customBeforeAppearHookK: function(el) {
      Velocity(el, { rotateZ: "360deg" }, { duration: 5000, loop: true, easing: "linear" });
    },
    customBeforeAppearHookL: function(el) {
      Velocity(el, { rotateZ: "360deg" }, { duration: 3000, loop: true, easing: "linear" });
    },
    customBeforeAppearHookL2: function(el) {
      Velocity(el, { rotateZ: "90deg" }, { duration: 3000, loop: true, easing: "linear" });
    },
    customAppearHook: function(el, done) {
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
.area {
  background-color: rgba(255, 193, 77, 0.783);
  position: absolute;
  margin: auto;
  z-index: 0;
}
.electron-shell {
  background-color: #fff;
  border-radius: 50%;
  border: solid 1px #000;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 0;
}
.electron-1 {
  display: inline-block;
  background-color: #4b90f9;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  left: -5px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}
.electron-2 {
  display: inline-block;
  background-color: #4b90f9;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  right: -5px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}
.electron-3 {
  display: inline-block;
  background-color: #4b90f9;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  top: -5px;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 1;
}
.electron-4 {
  display: inline-block;
  background-color: #4b90f9;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  bottom: -5px;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 1;
}
.electron-5 {
  display: inline-block;
  background-color: #4b90f9;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  left: -5px;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}
.neutron {
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding: 5%;
}
.outermost {
  background-color: #ff0000f1;
}
</style>
