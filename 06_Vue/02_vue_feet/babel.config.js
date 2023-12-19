module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@bebel/preset-env", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ] 
}
