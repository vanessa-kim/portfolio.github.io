const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "scss/_index.scss";`
      },
    },
  },
}
