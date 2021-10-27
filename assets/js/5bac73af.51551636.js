"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[65], {
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
  7443:
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
      "Grid": function Grid() {
        return (
          /* binding */
          _Grid
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
      sidebar_position: 7,
      title: 'Grid'
    };
    var _contentTitle = undefined;
    var _metadata = {
      "unversionedId": "paths/grid",
      "id": "paths/grid",
      "isDocsHomePage": false,
      "title": "Grid",
      "description": "export const Grid = () => {",
      "source": "@site/docs/paths/grid.mdx",
      "sourceDirName": "paths",
      "slug": "/paths/grid",
      "permalink": "/boilerplate-ui-framework-site/docs/paths/grid",
      "tags": [],
      "version": "current",
      "sidebarPosition": 7,
      "frontMatter": {
        "sidebar_position": 7,
        "title": "Grid"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "主题配置",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/theme-config"
      },
      "next": {
        "title": "Global js",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/globaljs"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: '起因',
      id: '起因',
      children: [],
      level: 2
    }];

    var _Grid = function Grid() {
      return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        className: "container border border-2 border-black"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        className: "row border border-2 border-red-400"
      }, [2, 2].map(function (value, key) {
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
        /* .mdx */
        .kt)("div", {
          className: "col-24 md:col-12"
        }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
        /* .mdx */
        .kt)("div", {
          className: "border border-2 border-blue-400"
        }, key + 1, " of ", value));
      })), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        className: "row border border-2 border-red-400"
      }, [3, 3, 3].map(function (value, key) {
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
        /* .mdx */
        .kt)("div", {
          className: "col"
        }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
        /* .mdx */
        .kt)("div", {
          className: "border border-2 border-blue-400"
        }, key + 1, " of ", value));
      })));
    };

    var layoutProps = {
      toc: _toc,
      Grid: _Grid
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
        "id": "起因"
      }, "\u8D77\u56E0"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u56E0\u4E3A IE 11 \u4E0D\u652F\u6301 Grid \u5E03\u5C40\u4E2D\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "auto place"), " \u529F\u80FD, \u4F46\u662F\u5982\u679C\u6211\u4EEC\u5148\u7528 Grid \u5B9E\u73B0\u7C7B\u4F3C ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "bootstrap"), " \u7684 layout \u529F\u80FD,"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u90A3\u4E48\u8FD9\u4E2A ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "auto place"), " \u662F\u80AF\u5B9A\u8981\u7528\u5230\u7684, \u4E0D\u7136\u4F60\u4E0D\u53EF\u80FD\u5199\u51E0\u5341\u4E2A(\u53EF\u80FD\u66F4\u591A) ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "grid-area: a;"), " \u5BF9\u5427."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u56E0\u6B64\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\u5982\u679C\u4F60\u8981\u517C\u5BB9 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "IE 11"), " \u90A3\u4E48\u8FD9\u4E2A tailwind \u4E2D\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Grid"), " \u529F\u80FD\u5C31\u5F97\u627E\u5230\u5BF9\u5E94\u7684\u89E3\u51B3\u65B9\u6848"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4E8E\u662F\u4E4E\u6211\u4EEC\u5C31\u91C7\u7528\u4E86 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://tailwind-bootstrap-grid.netlify.app/"
      }, "tailwind-bootstrap-grid")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u4E4B\u524D\u7528\u8FC7 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "bootstrap"), " \u7684\u8BDD\u90A3\u4E48\u57FA\u672C\u4E0D\u9700\u8981\u5B66\u4E60\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u63D2\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("section", {
        className: "tw"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(_Grid, {
        mdxType: "Grid"
      })), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("br", null), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-html"
      }, "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-24 md:col-12\">\n      <div class=\"border\">1 of 2</div>\n    </div>\n    <div class=\"col-24 md:col-12\">\n      <div class=\"border\">2 of 2</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"border\">1 of 3</div>\n    </div>\n    <div class=\"col\">\n      <div class=\"border\">2 of 3</div>\n    </div>\n    <div class=\"col\">\n      <div class=\"border\">3 of 3</div>\n    </div>\n  </div>\n</div>\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, " ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "strong",
        "href": "https://tailwind-bootstrap-grid.netlify.app/"
      }, "\u66F4\u591A\u5185\u5BB9\u8BF7\u9605\u8BFB\u5B98\u65B9\u6587\u6863"), " ")));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);