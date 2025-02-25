// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

module.exports = (config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    ...{
      '@': path.resolve(__dirname, 'src/'),
    },
  };
  return config;
};
