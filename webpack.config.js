const path = require('path');

module.exports = {
  // The entry point file described above
  entry: './public/assets/js/index.js',
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'public/assets/js/'),
    filename: 'bundle.js'
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
};