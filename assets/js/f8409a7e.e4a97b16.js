"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[206], {
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
  9568:
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
      sidebar_position: 1
    };
    var _contentTitle = '介绍';
    var _metadata = {
      "unversionedId": "intro",
      "id": "intro",
      "isDocsHomePage": false,
      "title": "介绍",
      "description": "该项目基于 Tailwindcss , Docusaurus 和 Typescript 搭建.",
      "source": "@site/docs/intro.mdx",
      "sourceDirName": ".",
      "slug": "/intro",
      "permalink": "/boilerplate-ui-framework-site/docs/intro",
      "tags": [],
      "version": "current",
      "sidebarPosition": 1,
      "frontMatter": {
        "sidebar_position": 1
      },
      "sidebar": "tutorialSidebar",
      "next": {
        "title": "创建一个组件",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/create-a-component"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: '项目使用',
      id: '项目使用',
      children: [],
      level: 2
    }, {
      value: '项目结构与介绍',
      id: '项目结构与介绍',
      children: [],
      level: 2
    }, {
      value: '项目命令',
      id: '项目命令',
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
      .kt)("h1", {
        "id": "介绍"
      }, "\u4ECB\u7ECD"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
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
      }, "\u8BE5\u9879\u76EE\u57FA\u4E8E ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://tailwindcss.com/"
      }, "Tailwindcss"), " , ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://docusaurus.io/zh-CN/"
      }, "Docusaurus"), " \u548C ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://www.typescriptlang.org/"
      }, "Typescript"), " \u642D\u5EFA.\n\u5728\u4F7F\u7528\u4E4B\u524D\u8BF7\u786E\u4FDD\u4F60\u4E86\u89E3\u4EE5\u4E0B\u6280\u672F\u6808"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("ol", {
        parentName: "div"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, "\u57FA\u672C\u7684 JS \u4E0E Css \u5F00\u53D1\u6280\u80FD"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, "\u719F\u6089 Typescript \u4E0E Scss \u8BED\u6CD5"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, "\u638C\u63E1 Tailwind \u914D\u7F6E\u4E0E\u4F7F\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, "\u719F\u6089 Docusaurus \u914D\u7F6E\u4E0E\u90E8\u7F72"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, "\u57FA\u7840\u7684 React \u8BED\u6CD5")))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "Let's discover ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, "Docusaurus in less than 5 minutes"), "."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "项目使用"
      }, "\u9879\u76EE\u4F7F\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u9879\u76EE\u4F5C\u4E3A\u6A21\u677F\u6587\u4EF6, \u53EA\u9700\u8981 Fork \u6216\u8005 \u4E0B\u8F7D\u540E\u5373\u53EF\u4F7F\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u7528\u7F16\u8F91\u5668\u6253\u5F00\u540E, \u9700\u8981\u5148\u5B89\u88C5\u4F9D\u8D56\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        "className": "admonition admonition-info alert alert--info"
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
        "width": "14",
        "height": "16",
        "viewBox": "0 0 14 16"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("path", {
        parentName: "svg",
        "fillRule": "evenodd",
        "d": "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
      }))), "info")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u8BE5\u9879\u76EE\u4F7F\u7528 node \u6700\u65B0\u7A33\u5B9A\u7248 v14.15.0 \u642D\u5EFA, \u8BF7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u65F6, \u786E\u4FDD\u4F60\u7684 node js \u7248\u672C\u4E3A\u5BF9\u5E94\u7248\u672C, \u4EE5\u6B64\u907F\u514D\u4E0D\u5FC5\u8981\u7684 bug\n(\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 NVM \u6765\u63A7\u5236\u4F60\u672C\u5730\u7684 node \u7248\u672C)"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-shell"
      }, "$ yarn install\n# \u6216\u8005\n$ npm install\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-shell"
      }, "$ yarn run serve\n# \u6216\u8005\n$ npm run serve\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5230\u6B64\u5904\u5DF2\u7ECF\u6210\u529F\u8FD0\u884C\u8D77\u6765\u8BE5\u9879\u76EE\u4E86, \u662F\u4E0D\u662F\u975E\u5E38\u7B80\u5355!"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "项目结构与介绍"
      }, "\u9879\u76EE\u7ED3\u6784\u4E0E\u4ECB\u7ECD"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4EE5\u4E0B\u53EA\u9488\u5BF9\u5F00\u53D1\u8005\u9700\u8981\u4F7F\u7528\u5230\u7684\u76EE\u5F55\u8FDB\u884C\u6CE8\u91CA, \u672A\u6CE8\u91CA\u7684\u76EE\u5F55, \u5F00\u53D1\u8005\u4E5F\u65E0\u9700\u4E86\u89E3"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-text"
      }, "\uD83D\uDCE6 dir\n \u2523 \uD83D\uDCC2.docusaurus\n \u2523 \uD83D\uDCC2docs   //  \u6587\u6863\u76EE\u5F55, \u4E0B\u9762\u5B58\u653E\u7684\u53EF\u4EE5\u672A .md \u6216\u8005 .mdx \u6587\u4EF6. \u8BE5\u76EE\u5F55\u4E0B\u6587\u4EF6\u7684\u8DEF\u5F84\u7ED3\u6784\u4F1A\u5BF9\u5E94\u751F\u6210\u7F51\u7AD9\u8FDE\u63A5\u4E0E\u76EE\u5F55\u7ED3\u6784\n \u2503 \u2523 \uD83D\uDCC2folder\n \u2503 \u2517 \uD83D\uDCDCintro.mdx\n \u2523 \uD83D\uDCC2plugins\n \u2523 \uD83D\uDCC2scripts\n \u2523 \uD83D\uDCC2src\n \u2503 \u2523 \uD83D\uDCC2components   //  \u8BE5\u6587\u4EF6\u5939\u7528\u4E8E\u5B58\u653E docs \u4E2D mdx \u6587\u4EF6\u6240\u9700\u8981\u7528\u5230\u7684 React \u7EC4\u4EF6. \u8BF7\u4E0D\u8981\u5C06 UI \u7EC4\u4EF6\u5E93\u7684\u7EC4\u4EF6\u653E\u7F6E\u6B64\u5904!!!\n \u2503 \u2523 \uD83D\uDCC2css          //  \u6B64\u6587\u4EF6\u7528\u4E8E\u5B58\u653E Docusaurus \u5168\u5C40\u6837\u5F0F\u8868, \u5982\u679C\u4F60\u60F3\u8981\u81EA\u5B9A\u4E49\u6587\u6863\u4E2D\u6837\u5F0F\u7684\u663E\u793A, \u53EF\u4EE5\u5728\u6B64\u5904\u4FEE\u6539. \u8BF7\u4E0D\u8981\u5C06 UI \u7EC4\u4EF6\u5E93\u7684\u6837\u5F0F\u4EE3\u7801\u653E\u7F6E\u6B64\u5904!!!\n \u2503 \u2503 \u2517 \uD83D\uDCDCcustom.scss    //  \u9ED8\u8BA4\u5168\u5C40\u81EA\u5B9A\u4E49 scss \u6587\u4EF6(\u53EA\u5F71\u54CD\u6587\u6863\u4E2D style \u7684\u6E32\u67D3, \u4E0D\u4F1A\u5F71\u54CD\u5230 UI \u7EC4\u4EF6\u5E93)\n \u2503 \u2517 \uD83D\uDCC2pages        //  \u5982\u679C\u4F60\u60F3\u8981\u5728\u8BE5\u7F51\u7AD9\u4E0A\u521B\u5EFA\u591A\u4E2A page \u53EF\u4EE5\u518D\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E2D\u8FDB\u884C\u7F16\u5199. \u5177\u4F53\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003 Docusaurus \u5B98\u65B9\u6587\u6863\n \u2523 \uD83D\uDCC2static         //  \u9759\u6001\u8D44\u6E90\u6587\u4EF6, \u8BE5\u6587\u4EF6\u5939\u4E0B\u7528\u4E8E\u5B58\u653E Docusaurus \u7684\u9759\u6001\u6587\u4EF6. UI \u7EC4\u4EF6\u5E93\u7684\u5B57\u4F53\u6587\u4EF6\u4E5F\u5B58\u653E\u5728\u6B64\u5904\n \u2503                  //  \u9664\u6B64\u4E4B\u5916 \u6587\u6863\u4E2D\u7528\u5230\u7684\u6D4B\u8BD5\u56FE\u7247\u548C\u7F51\u7AD9\u7684 logo \u4E5F\u90FD\u53EF\u4EE5\u653E\u5728\u6B64\u5904\n \u2503                  //  \u5207\u8BB0, \u8BF7\u4E0D\u8981\u5C06 UI \u7EC4\u4EF6\u5E93\u7684\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u653E\u7F6E\u6B64\u5904!!! (fonts \u9664\u5916)\n \u2503 \u2523 \uD83D\uDCC2fonts        //  UI \u7EC4\u4EF6\u5E93\u7684 fonts \u5305, \u8BE5\u5305\u4E3A\u5B8C\u6574\u7684 icoMoon \u4E0B\u8F7D\u540E\u7684\u6587\u4EF6\n \u2523 \uD83D\uDCC2UI             //  UI \u5E93\u6838\u5FC3\u6587\u4EF6\n \u2503 \u2523 \uD83D\uDCC2js           //  js \u4EE3\u7801\u5B58\u653E\n \u2503 \u2503 \u2523 \uD83D\uDCC2components\n \u2503 \u2503 \u2503 \u2523 \uD83D\uDCDCCard.ts\n \u2503 \u2503 \u2503 \u2517 \uD83D\uDCDCindex.ts\n \u2503 \u2503 \u2517 \uD83D\uDCDCindex.ts\n \u2503 \u2523 \uD83D\uDCC2scss         //  scss \u4EE3\u7801\u5B58\u653E\n \u2503 \u2503 \u2523 \uD83D\uDCC2components\n \u2503 \u2503 \u2517 \uD83D\uDCDCindex.scss\n \u2503 \u2523 \uD83D\uDCC2themeConfigs   //  \u8BE5\u76EE\u5F55\u5B58\u653E UI \u63A7\u4EF6\u7684\u914D\u7F6E\u6587\u4EF6, \u5E76\u4E14\u4F1A\u4E00\u5E76\u88AB\u6253\u5305\u5230 dist \u76EE\u5F55\n \u2503 \u2523 \uD83D\uDCC2types          //  types \u6587\u4EF6\u5B58\u653E\n \u2503 \u2517 \u2517 \uD83D\uDCDCglobal.d.ts  //  \u8BE5\u6587\u4EF6\u7528\u4E8E typescript \u7684\u5168\u5C40\u58F0\u660E\u6587\u4EF6, \u7C7B\u4F3C\u4E8E window \u4E0A\u7684\u53D8\u91CF, \u4EE5\u53CA Jquery \u7684\u63D2\u4EF6 \u90FD\u53EF\u4EE5\u5728\u6B64\u5904\u8FDB\u884C\u58F0\u660E\n \u2523 \uD83D\uDCDC.gitignore\n \u2523 \uD83D\uDCDCbabel.config.js\n \u2523 \uD83D\uDCDCdocusaurus.config.js\n \u2523 \uD83D\uDCDCpackage.json\n \u2523 \uD83D\uDCDCREADME.md\n \u2523 \uD83D\uDCDCsidebars.js\n \u2523 \uD83D\uDCDCtailwind.config.js\n \u2523 \uD83D\uDCDCtsconfig.json\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "项目命令"
      }, "\u9879\u76EE\u547D\u4EE4"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-shell"
      }, "# \u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\n$ yarn run serve\n\n# \u542F\u52A8\u4E3B\u9898\u9884\u89C8\u529F\u80FD\n$ yarn run serve:theme\n\n# \u6253\u5305\n$ yarn run build\n")));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);