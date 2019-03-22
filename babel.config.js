
module.exports = api => {
  const isTest = api.env('test');
  return {
    presets: [
      [
        '@babel/preset-env', {
          loose: true,
          modules: false,
          // useBuiltIns: 'entry',
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-transform-spread',
      '@babel/plugin-transform-regenerator',
    ],
    env: {
      test: {
        presets: ['@babel/preset-env'],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-destructuring',
          '@babel/plugin-transform-spread',
          '@babel/plugin-transform-regenerator',
        ],
      },
    },
  };
};
