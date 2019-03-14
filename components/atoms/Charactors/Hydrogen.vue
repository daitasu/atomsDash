<template lang="pug">
  div.area(:style="`width: 90px; height: 90px;`")
    transition(
      appear
      v-on:before-appear="customBeforeAppearHook"
      v-on:appear="customAppearHook"
    )
      div.electron-shell(:style="`width: 90px; height: 90px;`")
        div.electron-1
    div.neutron(:style="`width: 30px; height: 30px;`")
</template>

<script>
import Velocity from "velocity-animate";

export default {
  methods: {
    customBeforeAppearHook: function(el) {
      Velocity(el, { rotateZ: "360deg" }, { duration: 5000, loop: true, easing: "linear" });
    },
    // CSS と組み合わせて使う時、done コールバックはオプションです
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
  bottom: 100px;
  left: 150px;
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
}
.electron-1 {
  /* 擬似要素の指定を書く */
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
</style>
