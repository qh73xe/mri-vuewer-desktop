<template>
  <v-app-bar app color="primary" dark style="z-index: 99">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-text-field
      flat
      rounded
      solo
      hide-details
      label="Search"
      v-model="keyword"
      background-color="primary lighten-1"
      prepend-inner-icon="mdi-magnify"
    />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "MAppBar",
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
    },
    version: {
      get() {
        return this.$store.state.version;
      },
    },
    title: {
      get() {
        return `${this.name} ver ${this.version}`;
      },
    },
    keyword: {
      get() {
        return this.$store.state.search.input;
      },
      set(val) {
        this.$store.commit("search/input", val);
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("drawer", val);
      },
    },
  },
  mounted: function () {
    this.$store.action("FetchAppInfo");
  },
};
</script>
