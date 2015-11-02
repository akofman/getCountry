'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _whichCountry = require('which-country');

var _whichCountry2 = _interopRequireDefault(_whichCountry);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_params) {
  var params = _extends({ errorHandler: function errorHandler() {
      return null;
    }, options: {} }, _params);
  return new _bluebird2.default(function (resolve) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var country = (0, _whichCountry2.default)([position.coords.longitude, position.coords.latitude]);
      resolve(country);
    }, params.errorHandler, params.options);
  });
};