<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
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
