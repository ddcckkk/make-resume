var autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
      autoprefixer({
          browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
      })
    ]
}
