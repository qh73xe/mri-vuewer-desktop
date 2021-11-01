<template>
  <v-app>
    <m-app-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MAppBar from "@/components/MAppBar";

export default {
  name: "App",
  components: {
    MAppBar,
  },
};
</script>
