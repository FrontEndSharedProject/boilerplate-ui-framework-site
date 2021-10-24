"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[513], {
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
  6706:
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
      sidebar_position: 2,
      title: '命名与代码风格'
    };
    var _contentTitle = undefined;
    var _metadata = {
      "unversionedId": "advance/standard",
      "id": "advance/standard",
      "isDocsHomePage": false,
      "title": "命名与代码风格",
      "description": "中文文档文案排版",
      "source": "@site/docs/advance/standard.mdx",
      "sourceDirName": "advance",
      "slug": "/advance/standard",
      "permalink": "/boilerplate-ui-framework-site/docs/advance/standard",
      "tags": [],
      "version": "current",
      "sidebarPosition": 2,
      "frontMatter": {
        "sidebar_position": 2,
        "title": "命名与代码风格"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "MDX 使用",
        "permalink": "/boilerplate-ui-framework-site/docs/advance/mdx"
      },
      "next": {
        "title": "项目配置",
        "permalink": "/boilerplate-ui-framework-site/docs/advance/config"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: '中文文档文案排版',
      id: '中文文档文案排版',
      children: [],
      level: 2
    }, {
      value: '代码风格',
      id: '代码风格',
      children: [],
      level: 2
    }, {
      value: '文件命名规范',
      id: '文件命名规范',
      children: [{
        value: '属于 components 的文件需要大写开头',
        id: '属于-components-的文件需要大写开头',
        children: [],
        level: 3
      }, {
        value: 'class 命名',
        id: 'class-命名',
        children: [],
        level: 3
      }, {
        value: 'js 变量命名',
        id: 'js-变量命名',
        children: [],
        level: 3
      }, {
        value: 'typescript',
        id: 'typescript',
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
        "id": "中文文档文案排版"
      }, "\u4E2D\u6587\u6587\u6863\u6587\u6848\u6392\u7248"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u7EDF\u4E00\u4E2D\u6587\u6587\u6848\u3001\u6392\u7248\u7684\u76F8\u5173\u7528\u6CD5\uFF0C\u964D\u4F4E\u56E2\u961F\u6210\u5458\u4E4B\u95F4\u7684\u6C9F\u901A\u6210\u672C\uFF0C\u589E\u5F3A\u7F51\u7AD9\u6C14\u8D28\u3002"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, "\u5F3A\u70C8\u5EFA\u8BAE\u7F16\u5199\u6587\u6863\u4E4B\u524D\u5148\u9605\u8BFB ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "strong",
        "href": "https://github.com/mzlogin/chinese-copywriting-guidelines"
      }, "\u4E2D\u6587\u6587\u6848\u6392\u7248\u6307\u5317"), " ")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "代码风格"
      }, "\u4EE3\u7801\u98CE\u683C"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4EE3\u7801\u98CE\u683C\u4F9D\u7136\u91C7\u7528 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://prettier.io/"
      }, "Prettier"), " \u4E14\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "文件命名规范"
      }, "\u6587\u4EF6\u547D\u540D\u89C4\u8303"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6587\u4EF6\u547D\u540D\u6574\u4F53\u4F7F\u7528 \u5C0F\u9A7C\u5CF0 \u4E0E \u5927\u9A7C\u5CF0\u547D\u540D\u89C4\u5219, \u8BF7", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, "\u4E0D\u8981"), "\u4F7F\u7528 \u4E32\u70E7\u5F0F\u547D\u540D"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-text"
      }, "\u2705 UI/js/components/CardList/index.ts\n\u2705 UI/js/components/CardList.ts\n\u2705 UI/scss/components/CardList.scss\n\n\u274C UI/js/components/card-list/index.ts\n\u274C UI/js/components/card_list/index.ts\n\u274C UI/js/components/card-list.ts\n\u274C UI/js/components/card_list.ts\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "属于-components-的文件需要大写开头"
      }, "\u5C5E\u4E8E components \u7684\u6587\u4EF6\u9700\u8981\u5927\u5199\u5F00\u5934"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u6211\u4EEC\u8981\u5199\u4E00\u4E2A Button \u7684 UI \u7EC4\u4EF6, \u90A3\u4E48\u5B83\u5BF9\u5E94\u7684 js \u548C css \u4EE3\u7801\u6587\u4EF6\u547D\u540D\u5E94\u4E3A"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-text"
      }, "\u2705 UI/js/components/CardList.ts\n\u2705 UI/scss/components/CardList.scss\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F60\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "components"), " \u4E0B\u9762\u7684\u5B50\u7EA7 \u6587\u4EF6/\u6587\u4EF6\u5939 \u90FD\u9700\u8981\u8FDB\u884C\u9996\u5B57\u6BCD\u5927\u5199 (index \u9664\u5916)"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u7684\u4E1A\u52A1\u9700\u6C42\u8FC7\u4E8E\u590D\u6742, \u5BFC\u81F4\u4EE3\u7801\u8981\u62C6\u5206\u6210\u591A\u4E2A\u6587\u4EF6, \u90A3\u4E48\u53EF\u4EE5\u5728 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "compoents"), " \u4E0B\u9762\u521B\u5EFA\u5BF9\u5E94\u6587\u4EF6\u7ED3\u6784"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-text"
      }, "\u2705 UI/js/components/CardList/index.ts\n\u2705 UI/js/components/CardList/types.ts\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5173\u4E8E\u662F\u5426\u90FD\u9700\u8981\u521B\u5EFA \u7EC4\u4EF6\u6587\u4EF6\u5939, \u8FD9\u4E2A\u56E0\u60C5\u51B5\u800C\u5B9A, \u5982\u679C\u8BE5\u7EC4\u4EF6\u53EA\u6709\u4E00\u4E2A\u6587\u4EF6, \u90A3\u4E48\u65E0\u9700\u521B\u5EFA \u7EC4\u4EF6\u6587\u4EF6\u5939."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F46\u662F\u5982\u679C\u4F60\u60F3\u4FDD\u6301\u7EDF\u4E00, \u5373\u4F7F\u4E00\u4E2A\u6587\u4EF6\u4E5F\u521B\u5EFA\u4E86\u7EC4\u4EF6\u6587\u4EF6\u5939, \u8FD9\u4E5F\u662F\u53EF\u4EE5\u7684"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "class-命名"
      }, "class \u547D\u540D"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "class \u547D\u540D\u91C7\u7528 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, " \u4E32\u70E7\u5F0F "), " \u547D\u540D\u6CD5"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-scss"
      }, ".v-card-name {\n}\n.v-button-list {\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "js-变量命名"
      }, "js \u53D8\u91CF\u547D\u540D"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u91C7\u7528 \u5C0F\u9A7C\u5CF0 \u547D\u540D\u6CD5"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre"
      }, "let cardName = ''\nlet cardList = ''\n\nconst getName = function(){}\n\nfunction handleEvent(){}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5E38\u91CF\u9700\u8981\u9996\u5B57\u6BCD\u5927\u5199"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre"
      }, "const Name = \"\"\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u7C7B\u547D\u540D\u9700\u8981\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-typescript"
      }, "class ButtonGroup extend Component {\n\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "typescript"
      }, "typescript"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5C3D\u91CF\u4E0D\u8981\u7EF4\u62A4\u5B57\u7B26\u4E32, \u91C7\u7528 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "enum"), " \u5904\u7406"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-typescript"
      }, "enum ECardStatus {\n  ACTIVE = \"active\",\n  DISABLED = \"disabled\",\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u7C7B\u4F7F\u7528 \u5927\u9A7C\u5CF0 \u547D\u540D\u6CD5"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre"
      }, "\u274C class foo {}\n\u2705 class Foo {}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u7C7B\u6210\u5458\uFF08\u53D8\u91CF\u3001\u65B9\u6CD5\uFF09 \u4F7F\u7528 \u5C0F\u9A7C\u5CF0"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre"
      }, "\u274C\nclass Foo {\n  Bar: number;\n  Baz(): number {}\n}\n\n\n\u2705\nclass Foo {\n  bar: number;\n  baz(): number {}\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u63A5\u53E3\u4F7F\u7528 \u5927\u9A7C\u5CF0\u547D\u540D\u6CD5 \u4E14\u4E0D\u80FD\u5728\u524D\u9762\u52A0 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, "I")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre"
      }, "\u274C\ninterface IFoo {\n  Bar: number;\n  Baz(): number;\n}\n\n\n\u2705\ninterface Foo {\n  bar: number;\n  baz(): number;\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5C3D\u91CF\u907F\u514D\u5F62\u6210 anytype \u7684\u60C5\u51B5, \u4EFB\u4F55\u5730\u65B9\u89E3\u51B3\u4E0D\u4E86 \u5C31\u4F7F\u7528 any \u7C7B\u578B\u4EE3\u66FF, \u8FD9\u662F\u4E0D\u5BF9\u7684\u505A\u6CD5(\u67D0\u4E9B\u7279\u6B8A\u60C5\u51B5\u9664\u5916)"));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);