<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app)
      v-list
        v-list-tile(v-for="(item, i) in items" :key="i" :to="item.to" router exact)
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title(v-text="item.title" style="font-weight: 600; font-size: 18px;")
    v-toolbar(:clipped-left="clipped" fixed app class="light-blue lighten-5")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn(icon @click.stop="clipped = !clipped")
        v-icon web
      v-toolbar-title(v-text="title")
      v-spacer
    v-content
      v-container
        nuxt
    v-footer(:fixed="fixed" app)
      span &copy; 2019
</template>

<script>
export default {
  created() {
    console.log(this);
  },
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
        },
        {
          icon: "contacts",
          title: "デモ",
          to: "/demo"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "AtomsDash!!!"
    };
  }
};
</script>
