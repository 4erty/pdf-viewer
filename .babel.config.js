module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      "loose": true,
      "modules": false,
      "useBuiltIns": "usage",
    }]
  ];
  const plugins = [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-regenerator',
  ];

  return {
    presets,
    plugins
  };
}