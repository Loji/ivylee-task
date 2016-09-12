// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var autoprefixer = require('autoprefixer');
var postcss = require('broccoli-postcss');

module.exports = function (defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'ng2-dnd/**/*.+(js|js.map)',
    ]
  })

  var cssOptions = {
    plugins: [
      {
        module: autoprefixer,
        options: {
          browsers: ['last 3 versions']
        }
      }
    ]
  }
  return postcss(app, cssOptions);

}
