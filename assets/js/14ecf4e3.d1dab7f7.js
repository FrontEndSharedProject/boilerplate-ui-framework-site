"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[280], {
  /***/
  3905:
  /***/
  function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */
      "Zo": function Zo() {
        return (
          /* binding */
          MDXProvider
        );
      },

      /* harmony export */
      "kt": function kt() {
        return (
          /* binding */
          createElement
        );
      }
      /* harmony export */

    });
    /* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */

    /* harmony import */


    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};

      var target = _objectWithoutPropertiesLoose(source, excluded);

      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    var isFunction = function isFunction(obj) {
      return typeof obj === 'function';
    };

    var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

    var withMDXComponents = function withMDXComponents(Component) {
      return function (props) {
        var allComponents = useMDXComponents(props.components);
        return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
          components: allComponents
        }));
      };
    };

    var useMDXComponents = function useMDXComponents(components) {
      var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
      var allComponents = contextComponents;

      if (components) {
        allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
      }

      return allComponents;
    };

    var MDXProvider = function MDXProvider(props) {
      var allComponents = useMDXComponents(props.components);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
        value: allComponents
      }, props.children);
    };

    var TYPE_PROP_NAME = 'mdxType';
    var DEFAULTS = {
      inlineCode: 'code',
      wrapper: function wrapper(_ref) {
        var children = _ref.children;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
      }
    };
    var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
      var propComponents = props.components,
          mdxType = props.mdxType,
          originalType = props.originalType,
          parentName = props.parentName,
          etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

      var components = useMDXComponents(propComponents);
      var type = mdxType;
      var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

      if (propComponents) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
          ref: ref
        }, etc), {}, {
          components: propComponents
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
        ref: ref
      }, etc));
    });
    MDXCreateElement.displayName = 'MDXCreateElement';

    function createElement(type, props) {
      var args = arguments;
      var mdxType = props && props.mdxType;

      if (typeof type === 'string' || mdxType) {
        var argsLength = args.length;
        var createElementArgArray = new Array(argsLength);
        createElementArgArray[0] = MDXCreateElement;
        var newProps = {};

        for (var key in props) {
          if (hasOwnProperty.call(props, key)) {
            newProps[key] = props[key];
          }
        }

        newProps.originalType = type;
        newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
        createElementArgArray[1] = newProps;

        for (var i = 2; i < argsLength; i++) {
          createElementArgArray[i] = args[i];
        }

        return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
      }

      return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
    }
    /***/

  },

  /***/
  3957:
  /***/
  function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */


    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */
      "frontMatter": function frontMatter() {
        return (
          /* binding */
          _frontMatter
        );
      },

      /* harmony export */
      "contentTitle": function contentTitle() {
        return (
          /* binding */
          _contentTitle
        );
      },

      /* harmony export */
      "metadata": function metadata() {
        return (
          /* binding */
          _metadata
        );
      },

      /* harmony export */
      "toc": function toc() {
        return (
          /* binding */
          _toc
        );
      },

      /* harmony export */
      "default": function _default() {
        return (
          /* binding */
          MDXContent
        );
      }
      /* harmony export */

    });
    /* harmony import */


    var _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
    /* harmony import */


    var _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);
    /* harmony import */


    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */


    var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);

    var _excluded = ["components"];
    var _frontMatter = {
      sidebar_position: 6,
      title: '主题配置'
    };
    var _contentTitle = undefined;
    var _metadata = {
      "unversionedId": "paths/theme-config",
      "id": "paths/theme-config",
      "isDocsHomePage": false,
      "title": "主题配置",
      "description": "为了方便后期好维护, 请尽量使用 plugins 完成你对自定义 Utilities 和 Components 的需求",
      "source": "@site/docs/paths/theme-config.mdx",
      "sourceDirName": "paths",
      "slug": "/paths/theme-config",
      "permalink": "/boilerplate-ui-framework-site/docs/paths/theme-config",
      "tags": [],
      "version": "current",
      "sidebarPosition": 6,
      "frontMatter": {
        "sidebar_position": 6,
        "title": "主题配置"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "适当的使用 apply",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/apply"
      },
      "next": {
        "title": "Grid",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/grid"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: '过程',
      id: '过程',
      children: [],
      level: 2
    }, {
      value: '主题配置',
      id: '主题配置',
      children: [],
      level: 2
    }, {
      value: 'Utilities',
      id: 'utilities',
      children: [],
      level: 2
    }, {
      value: 'Components',
      id: 'components',
      children: [],
      level: 2
    }];
    var layoutProps = {
      toc: _toc
    };
    var MDXLayout = "wrapper";

    function MDXContent(_ref) {
      var components = _ref.components,
          props = (0, _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__
      /* ["default"] */
      .Z)(_ref, _excluded);
      return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(MDXLayout, (0, _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__
      /* ["default"] */
      .Z)({}, layoutProps, props, {
        components: components,
        mdxType: "MDXLayout"
      }), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        "className": "admonition admonition-tip alert alert--success"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-heading"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h5", {
        parentName: "div"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("span", {
        parentName: "h5",
        "className": "admonition-icon"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("svg", {
        parentName: "span",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "12",
        "height": "16",
        "viewBox": "0 0 12 16"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("path", {
        parentName: "svg",
        "fillRule": "evenodd",
        "d": "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
      }))), "tip")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u4E3A\u4E86\u65B9\u4FBF\u540E\u671F\u597D\u7EF4\u62A4, \u8BF7\u5C3D\u91CF\u4F7F\u7528 plugins \u5B8C\u6210\u4F60\u5BF9\u81EA\u5B9A\u4E49 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://tailwindcss.com/docs/adding-new-utilities#using-a-plugin"
      }, "Utilities"), " \u548C ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://tailwindcss.com/docs/extracting-components#writing-a-component-plugin"
      }, "Components"), " \u7684\u9700\u6C42"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "过程"
      }, "\u8FC7\u7A0B"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5728 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "/UI/themeConfigs"), " \u4E2D\u914D\u7F6E\u7684\u4E3B\u9898\u4EE5\u53CA ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Utilities"), " \u548C ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Components"), " \u5C06\u4F1A\u5728\u6253\u5305\u540E"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4E00\u5E76\u8F93\u51FA\u5230 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "/build/dist/"), " \u76EE\u5F55\u4E2D (\u4E0E UI \u7EC4\u4EF6\u5E93\u540C\u7EA7), \u8FD9\u6837\u80FD\u4FDD\u8BC1\u5176\u4ED6\u9879\u76EE\u5728\u5B89\u88C5 UI \u5E93\u540E, \u4F9D\u7136\u80FD\u8BFB\u53D6\u5230\u76F8\u540C\u7684\u914D\u7F6E"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4E14 Tailwind \u4EE3\u7801\u63D0\u793A\u4E5F\u80FD\u6B63\u5E38\u5DE5\u4F5C"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "主题配置"
      }, "\u4E3B\u9898\u914D\u7F6E"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5728\u4E0B\u9762\u4EE3\u7801\u4E2D, \u8FDB\u884C\u4E3B\u9898\u7684\u914D\u7F6E, \u8BE5\u914D\u7F6E\u4F1A\u4E0E\u6839\u76EE\u5F55\u4E2D\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "tailwind.config.js"), " \u5408\u5E76"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-javascript",
        "metastring": "title=\"/UI/themeConfigs/theme.js\"",
        "title": "\"/UI/themeConfigs/theme.js\""
      }, "const colors = require(\"tailwindcss/colors\");\n\nmodule.exports = {\n  colors: {\n    ...colors,\n    gray: {\n      ...colors.gray,\n    },\n    custom: {\n      100: \"#f20\",\n    },\n  },\n  textType: {\n    h1: \"28/36/44|1.2|700\",\n    h2: \"28/30/36|1.2|700\",\n  },\n};\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "utilities"
      }, "Utilities"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5728\u4E0B\u9762\u4EE3\u7801\u4E2D\u914D\u7F6E\u4F60\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Utilities")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u53EA\u9700\u5728 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "addUtilities"), " \u4E2D\u4F20\u5165\u4E00\u4E2A \u7C7B\u578B\u4E3A css-in-js[] \u7684\u503C\u5373\u53EF"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "css-in-js \u8BED\u6CD5\u8BF7\u53C2\u8003 (", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://tailwindcss.com/docs/plugins#css-in-js-syntax"
      }, "Css-in-js"), ")"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        "className": "admonition admonition-tip alert alert--success"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-heading"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h5", {
        parentName: "div"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("span", {
        parentName: "h5",
        "className": "admonition-icon"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("svg", {
        parentName: "span",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "12",
        "height": "16",
        "viewBox": "0 0 12 16"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("path", {
        parentName: "svg",
        "fillRule": "evenodd",
        "d": "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
      }))), "tip")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u4E3A\u4FDD\u8BC1\u540E\u671F\u7684\u6269\u5C55\u6027, \u8BF7\u5C3D\u91CF\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5B9E\u73B0\u81EA\u5B9A\u4E49 Utilities"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-javascript",
        "metastring": "title=\"/UI/themeConfigs/utilities.js\"",
        "title": "\"/UI/themeConfigs/utilities.js\""
      }, "const plugin = require(\"tailwindcss/plugin\");\n\nmodule.exports = plugin(function ({ addUtilities }) {\n  addUtilities([\n    {\n      \".btn\": {\n        display: \"inline-block\",\n        \"min-width\": \"214px\",\n        \"border-radius\": \"0.25rem\",\n        \"padding-top\": \"18px\",\n        \"padding-bottom\": \"18px\",\n        \"padding-left\": \"48px\",\n        \"padding-right\": \"48px\",\n        \"text-align\": \"center\",\n        \"transition-duration\": \"300ms\",\n        \"transition-timing-function\": \"linear\",\n        \":hover\": {\n          color: \"#fff\",\n          \"text-decoration\": \"none\",\n        },\n      },\n    },\n  ]);\n});\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "components"
      }, "Components"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        "className": "admonition admonition-tip alert alert--success"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-heading"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h5", {
        parentName: "div"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("span", {
        parentName: "h5",
        "className": "admonition-icon"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("svg", {
        parentName: "span",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "12",
        "height": "16",
        "viewBox": "0 0 12 16"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("path", {
        parentName: "svg",
        "fillRule": "evenodd",
        "d": "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
      }))), "tip")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u5982\u679C\u4F60\u7684\u6837\u5F0F\u4EE3\u7801\u9700\u8981\u6709 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, ".tw"), " \u7684\u7EA6\u675F, \u8BF7\u4F7F\u7528 Utilities"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u521B\u5EFA\u65B9\u5F0F\u4E0E\u4E0A\u9762\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Utilities"), " \u7C7B\u4F3C."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://tailwindcss.com/docs/extracting-components#writing-a-component-plugin"
      }, "\u70B9\u51FB\u6211\u53C2\u8003\u5B98\u65B9\u6587\u6863")));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);