module.exports = {
  outputDir: "../mri-vuewer/ui",

  pages: {
    index: {
      entry: "src/main.js",
      title: "MRI-VUEWER-DESKTOP",
    },
  },

  transpileDependencies: [
    'vuetify'
  ]
};
