'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _whichCountry = require('which-country');

var _whichCountry2 = _interopRequireDefault(_whichCountry);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return new _bluebird2.default(function (resolve) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var country = (0, _whichCountry2.default)([position.coords.longitude, position.coords.latitude]);
      resolve(country);
    }, function (error) {
      console.log('ERROR', error);
    });
  });
};