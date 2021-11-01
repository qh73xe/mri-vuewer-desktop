<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">{{ msg }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    msg: "",
  }),
  mounted: function () {
    window.eel.hello_world()((val) => {
      console.log(val);
      this.msg = val;
    });
  },
};
</script>
