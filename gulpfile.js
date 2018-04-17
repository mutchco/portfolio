const gulp = require('gulp');
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs-then-native');

gulp.task('default', function () {
  return jsdoc2md.render({ files: 'src/**/*.js', 'module-index-format': 'table', 'global-index-format': 'table' })
  .then(output => fs.writeFile('docs/api.md', output));
});