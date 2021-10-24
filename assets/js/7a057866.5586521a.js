"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[334], {
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
  2397:
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
      sidebar_position: 8,
      title: 'IE 11 兼容'
    };
    var _contentTitle = undefined;
    var _metadata = {
      "unversionedId": "advance/ie11",
      "id": "advance/ie11",
      "isDocsHomePage": false,
      "title": "IE 11 兼容",
      "description": "兼容原则",
      "source": "@site/docs/advance/ie11.mdx",
      "sourceDirName": "advance",
      "slug": "/advance/ie11",
      "permalink": "/boilerplate-ui-framework-site/docs/advance/ie11",
      "tags": [],
      "version": "current",
      "sidebarPosition": 8,
      "frontMatter": {
        "sidebar_position": 8,
        "title": "IE 11 兼容"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "JIT 模式",
        "permalink": "/boilerplate-ui-framework-site/docs/advance/jit"
      },
      "next": {
        "title": "配置文件详解",
        "permalink": "/boilerplate-ui-framework-site/docs/advance/config-files"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: '兼容原则',
      id: '兼容原则',
      children: [],
      level: 2
    }, {
      value: '原理',
      id: '原理',
      children: [{
        value: 'js',
        id: 'js',
        children: [],
        level: 3
      }, {
        value: 'css',
        id: 'css',
        children: [],
        level: 3
      }],
      level: 2
    }, {
      value: '使用',
      id: '使用',
      children: [{
        value: 'js',
        id: 'js-1',
        children: [],
        level: 3
      }, {
        value: 'css',
        id: 'css-1',
        children: [],
        level: 3
      }],
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
      .kt)("h2", {
        "id": "兼容原则"
      }, "\u517C\u5BB9\u539F\u5219"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u9879\u76EE\u57FA\u4E8E Docusaurus@v2 \u4E0E Tailwind@v2 \u7248\u672C\u642D\u5EFA, \u5F88\u53EF\u60DC\u5B83\u4FE9\u90FD\u653E\u5F03\u4E86\u5BF9 IE 11 \u7684\u652F\u6301."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6240\u4EE5\u8BE5\u9879\u76EE\u5BF9 IE 11 \u652F\u6301\u7684\u539F\u5219\u4E3A"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("ol", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "li"
      }, "js \u4EE3\u7801\u8FD0\u884C\u4E0D\u62A5\u9519, \u4FDD\u8BC1 ie 11 \u7684\u7528\u6237\u80FD\u6B63\u5E38\u6267\u884C\u4E1A\u52A1\u6D41\u7A0B")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "li"
      }, "UI \u7EC4\u4EF6 css \u4EE3\u7801\u5C3D\u91CF\u517C\u5BB9 ie 11, \u5C3D\u91CF\u907F\u514D\u9875\u9762\u6392\u7248\u9519\u4E71")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "li"
      }, "ie 11 \u7528\u6237\u53EF\u4EE5\u9002\u5F53\u7684\u727A\u7272\u4E00\u4E9B\u52A0\u8F7D\u901F\u5EA6\u548C\u9875\u9762\u6548\u679C"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("br", null), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        "className": "admonition admonition-danger alert alert--danger"
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
        "d": "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
      }))), "Docusaurus \u4F7F\u7528\u4E86 css var \u5BFC\u81F4\u518D ie 11 \u8BBF\u95EE\u8BE5 docs \u7F51\u7AD9\u65F6, \u5BFC\u81F4\u6837\u5F0F\u9519\u4E71.")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u8FD9\u4E2A\u73B0\u5728\u65E0\u529E\u6CD5\u89E3\u51B3\u9664\u975E Docusaurus \u4FEE\u6539\u81EA\u5DF1\u7684\u6E90\u4EE3\u7801."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "Tailwind \u6253\u5305\u51FA\u6765\u7684 UI \u7EC4\u4EF6\u5E93, \u662F\u53EF\u4EE5\u652F\u6301 ie 11"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u8FD9\u4E5F\u5C31\u610F\u5473\u7740, \u8BE5 docs \u7F51\u7AD9\u4E0D\u652F\u6301 ie 11, \u4F46\u662F UI \u7EC4\u4EF6\u5E93\u652F\u6301 ie 11,"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u5982\u679C\u4F60\u7684\u7F51\u7AD9\u4EC5\u4EC5\u53EA\u662F\u5F15\u7528 UI \u7EC4\u4EF6\u5E93, \u90A3\u4E48\u606D\u559C\u4F60, \u4F60\u7684\u7F51\u7AD9\u652F\u6301 ie 11"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "原理"
      }, "\u539F\u7406"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "js"
      }, "js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BA9\u6211\u4EEC\u6765\u5148\u770B\u770B\u5982\u4F55\u652F\u6301 ie 11,"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u9488\u5BF9 js \u90E8\u5206, \u5728\u6253\u5305\u547D\u4EE4\u6267\u884C, \u4F1A\u5C06 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "build"), " \u76EE\u5F55\u4E2D\u6240\u6709\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, ".js"), " \u6587\u4EF6 (ESModule \u6587\u4EF6\u9664\u5916),"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5168\u90E8\u901A\u8FC7 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Babel"), " \u8F6C\u6362, \u8FBE\u5230\u652F\u6301 ie 11 \u7684\u76EE\u5F55"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6E90\u4EE3\u7801\u8BF7\u53C2\u8003 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "scripts/ie11.js")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "css"
      }, "css"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6700\u5934\u75BC\u7684\u83AB\u8FC7\u4E8E css \u4EE3\u7801\u4E2D\u7684 var."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8FD9\u91CC\u5C1D\u8BD5\u4E86\u517C\u5BB9\u5E93\u90FD\u6CA1\u6709\u529E\u6CD5\u8FBE\u5230\u5B8C\u7F8E\u517C\u5BB9, \u53C2\u8003"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://github.com/postcss/postcss-custom-properties"
      }, "postcss-custom-properties"), ", ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://www.npmjs.com/package/css-vars-ponyfill"
      }, "css-vars-ponyfill")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8FD9\u4E9B\u5E93\u8FD0\u884C\u7684\u539F\u7406, \u65E0\u975E\u4E5F\u5C31\u662F\u5C06 css \u6587\u4EF6\u8F6C\u6362\u4E3A AST \u6811, \u7136\u540E\u5C06\u7528\u5230 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "var()"), " \u7684\u5C5E\u6027\u66FF\u6362\u4E3A\u5BF9\u5E94\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "--"), " \u53D8\u91CF."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F46\u662F\u8FD9\u79CD\u601D\u8DEF\u65E0\u6CD5\u89E3\u51B3\u4E0B\u9762\u8FD9\u79CD\u60C5\u51B5"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-html"
      }, "<style>\n  .col-3 {\n    --width: 30px;\n  }\n  .col-4 {\n    --width: 40px;\n  }\n\n  .col {\n    width: var(--width);\n  }\n</style>\n<div class=\"col col-3\"></div>\n<div class=\"col col-4\"></div>\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u4E0A\u8FF0\u4EE3\u7801\u4E00\u6837, \u6B64\u65F6\u5C31\u5224\u65AD ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, ".col"), " \u6837\u5F0F\u540D\u5BF9\u5E94\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "--width"), " \u5230\u5E95\u662F\u591A\u5C11"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F46\u662F\u6070\u6070 Docusaurus \u6E90\u7801\u4E2D\u5927\u91CF\u91C7\u7528\u4E86\u8FD9\u79CD\u5199\u6CD5, \u5BFC\u81F4\u8F6C\u6362\u540E\u7684\u6548\u679C\u4E0D\u5C3D\u4EBA\u610F"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u76F8\u53CD Tailwind \u7684\u4EE3\u7801, \u8F6C\u6362\u7387\u5C31\u975E\u5E38\u7684\u9AD8. \u56E0\u6B64\u6211\u4EEC\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4E0A\u9762\u7684\u8FD9\u79CD\u5199\u6CD5"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-css"
      }, ".tw .active\\:scale-95:active {\n  --tw-scale-x: 0.95;\n  --tw-scale-y: 0.95;\n  -webkit-transform: var(--tw-transform);\n  transform: var(--tw-transform);\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u56E0\u6B64\u5728\u6253\u5305\u65F6\u4F1A\u901A\u8FC7 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "postcss-css-variables"), " \u5E93\u5C06 UI \u7EC4\u4EF6\u5E93\u751F\u6210\u4E00\u4EFD\u8F6C\u6362\u8FC7 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "css var"), " \u7684\u6587\u4EF6, \u5176\u540D\u5B57\u4E3A ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "[name].ie11.css")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8FD9\u6837\u7684\u8BDD\u53EA\u9700\u8981\u5224\u65AD\u7528\u6237\u662F ie 11 \u6D4F\u89C8\u5668, \u5F15\u7528\u8BE5 css \u6587\u4EF6\u5373\u53EF, \u5BF9\u5E94\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u5F80\u4E0B\u770B"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6E90\u4EE3\u7801\u8BF7\u53C2\u8003 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "scripts/ie11.js")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "使用"
      }, "\u4F7F\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u7684\u9879\u76EE\u9700\u8981\u517C\u5BB9 ie 11. \u8BF7\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\u5230\u4F60\u7684 html \u6587\u4EF6\u4E2D"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "js-1"
      }, "js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-javascript",
        "metastring": "title=\"header.html\"",
        "title": "\"header.html\""
      }, "//  \u4EE5\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u662F\u52A0\u8F7D ie 11 \u5BF9\u5E94\u9700\u8981\u7684 polyfill \u7684\u6587\u4EF6\n//  \u8BF7\u4FDD\u8BC1\u5B83\u5728\u4F60\u7684\u4E1A\u52A1\u903B\u8F91 js \u6267\u884C\u524D\u52A0\u8F7D\n//  \u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1 js \u7684\u90E8\u5206\u652F\u6301 ie 11\n(function () {\n  var u = navigator.userAgent;\n\n  if (/MSIE \\d|Trident.*rv:/.test(u)) {\n    var polyfillScript = document.createElement(\"script\");\n    polyfillScript.type = \"text/javaScript\";\n    polyfillScript.src =\n      \"https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js\";\n    document.getElementsByTagName(\"head\")[0].appendChild(polyfillScript);\n  }\n})();\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "css-1"
      }, "css"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u73B0\u5728\u6211\u4EEC\u6765\u770B\u770B css \u90E8\u5206\u7684\u517C\u5BB9"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-javascript",
        "metastring": "title=\"header.html\"",
        "title": "\"header.html\""
      }, "(function () {\n  //  \u5728\u8FD9\u91CC\u9700\u8981\u4FEE\u6539\u6210\u4F60\u7684 ui \u7EC4\u4EF6\u5E93\u6253\u5305\u51FA\u6765\u7684 css \u6587\u4EF6\n  var uiCssFileName = \"boilerplate-ui-framework.css\";\n  var u = navigator.userAgent;\n\n  if (/MSIE \\d|Trident.*rv:/.test(u)) {\n    window.addEventListener(\"DOMContentLoaded\", function () {\n      var links = document.querySelectorAll(\"link\");\n\n      for (var i = 0; i < links.length; i++) {\n        var link = links[i];\n\n        if (~link.href.indexOf(uiCssFileName)) {\n          link.href = link.href.replace(\n            uiCssFileName,\n            uiCssFileName.replace(\".css\", \".ie11.css\")\n          );\n        }\n      }\n    });\n  }\n})();\n")));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);