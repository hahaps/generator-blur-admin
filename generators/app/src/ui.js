'use strict';

var path = require('path');
var fs   = require('fs');

module.exports = function (GulpAngularGenerator) {

  var BASE = '/src/assets';

  var getAllFiles = function (dir) {
    var filesArr = [];
    var _dir = function(dirpath) {
      var files = fs.readdirSync(dirpath);
      files.forEach(function (item, index) {
        var info = fs.statSync(path.join(dirpath, item));
        if (info.isDirectory()) {
          _dir(path.join(dirpath, item));
        } else {
          filesArr.push(path.join(dirpath, item));
        }
      });
    }
    _dir(dir);
    return filesArr;
  }

  /**
   * Add files of the navbar and the main view depending on the ui framework
   * and the css preprocessor
   */
  GulpAngularGenerator.prototype.uiFiles = function uiFiles() {

    this.files.push({
      src: 'src/_index.html',
      dest: 'src/index.html',
      template: true
    });

    this.files.push({
      src: 'src/_auth.html',
      dest: 'src/auth.html',
      template: true
    });

    this.files.push({
      src: 'src/_reg.html',
      dest: 'src/reg.html',
      template: true
    });

    // console.log(getAllFiles(path.join(this._sourceRoot, BASE)));
  };
};
