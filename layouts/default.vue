<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app)
      v-list
        v-list-tile(v-for="(item, i) in items" :key="i" :to="item.to" router exact)
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title(v-text="item.title" style="font-weight: 600; font-size: 18px;")
    v-toolbar(:clipped-left="clipped" fixed app class="light-blue lighten-4")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-toolbar-title(v-text="title" style="font-size: 22px; font-weight: 400; font-family: 'Arial Rounded MT Bold'")
      v-spacer
      v-img.github(src="/github-circle.svg" aspect-ratio="1" :max-width="30" @click="jumpGithub")
    v-content.blue.lighten-5
      v-container
        nuxt
    v-footer(:fixed="fixed" app)
      v-spacer
      span(style="font-size: 15px;")  &copy; 2019@daitasu
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "directions_bike",
          title: "ゲーム",
          to: "/"
        },
        {
          icon: "contacts",
          title: "キャラクター選択",
          to: "/select"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "AtomsDash!!!"
    };
  },
  methods: {
    jumpGithub() {
      window.open("https://github.com/daitasu/atomsDash", "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.github:hover {
  cursor: pointer;
  color: #999;
}
</style>
