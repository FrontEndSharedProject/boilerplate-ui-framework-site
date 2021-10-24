"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ['./docs/**/*.{md,mdx}', './src/**/*.{js,jsx,ts,tsx}', './UI/**/*.{js,jsx,ts,tsx}'],
  important: ".tw",
  darkMode: false,
  // or 'media' or 'class'
  theme: {
    //  https://docs.tailwindchina.com/docs/customizing-colors#-1
    colors: _objectSpread(_objectSpread({}, colors), {}, {
      gray: _objectSpread({}, colors.gray)
    }),
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")]
};