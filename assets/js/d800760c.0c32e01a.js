"use strict";
(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[597],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


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
function createElement (type, props) {
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




/***/ }),

/***/ 3127:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={sidebar_position:2,title:'使用线上的资源文件'};var contentTitle='起因';var metadata={"unversionedId":"paths/use-remote-source","id":"paths/use-remote-source","isDocsHomePage":false,"title":"使用线上的资源文件","description":"大部分情况下, 我们需要使用开源库来解决解决 UI 交互, 比如常见的 'jquery' 和 'lazyload.js'","source":"@site/docs/paths/use-remote-source.mdx","sourceDirName":"paths","slug":"/paths/use-remote-source","permalink":"/boilerplate-ui-framework-site/docs/paths/use-remote-source","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"使用线上的资源文件"},"sidebar":"tutorialSidebar","previous":{"title":"创建一个组件","permalink":"/boilerplate-ui-framework-site/docs/paths/create-a-component"},"next":{"title":"在文档中显示图片","permalink":"/boilerplate-ui-framework-site/docs/paths/use-image"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'引入',id:'引入',children:[],level:2},{value:'配置 typescript 声明',id:'配置-typescript-声明',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"起因"},"\u8D77\u56E0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5927\u90E8\u5206\u60C5\u51B5\u4E0B, \u6211\u4EEC\u9700\u8981\u4F7F\u7528\u5F00\u6E90\u5E93\u6765\u89E3\u51B3\u89E3\u51B3 UI \u4EA4\u4E92, \u6BD4\u5982\u5E38\u89C1\u7684 'jquery' \u548C 'lazyload.js'"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"引入"},"\u5F15\u5165"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8981\u60F3\u5C06\u8FD9\u4E9B\u8D44\u6E90\u6587\u4EF6\u5F15\u5165\u5230\u6587\u6863\u4E2D, \u4E14\u5728 UI \u7EC4\u4EF6\u5E93\u4E2D\u8C03\u7528, \u53EA\u9700\u6309\u4EE5\u4E0B\u914D\u7F6E\u5373\u53EF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BA9\u6211\u4EEC\u5148\u8FDB\u5165\u6839\u76EE\u5F55\u7684 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u6587\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-javascript","metastring":"title=\"docusaurus.config.js\"","title":"\"docusaurus.config.js\""},"//  \u5728\u4E0B\u9762\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u53EF\u4EE5\u6DFB\u52A0\u8FDC\u7A0B\u7684 js \u6587\u4EF6\n//  \u4E5F\u53EF\u4EE5\u52A0\u8F7D\u672C\u5730\u7684 js \u6587\u4EF6, \u4F46\u662F\u8FD9\u4E2A\u6587\u4EF6\u9700\u8981\u653E\u5230 static \u76EE\u5F55\u4E0B\nconst scripts = [\n  \"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js\",\n];\n\n//  \u5728\u4E0B\u9762\u8FD9\u4E2A\u6570\u7EC4\u6DFB\u52A0\u8FDC\u7A0B css \u6587\u4EF6\n//  \u8FD9\u91CC\u4E5F\u53EF\u4EE5\u52A0\u8F7D\u672C\u5730\u7684 css \u6587\u4EF6\n//  \u6CE8\u610F, \u8BF7\u4E0D\u8981\u5220\u9664 \"/fonts/style.css\"\nconst stylesheets = [\"/fonts/style.css\"];\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"配置-typescript-声明"},"\u914D\u7F6E typescript \u58F0\u660E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u6211\u4EEC\u5F15\u7528\u7684\u8FDC\u7A0B js \u6587\u4EF6, \u80FD\u641C\u7D22\u5230\u5BF9\u5E94\u7684 types \u5305\u7684\u8BDD(",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.typescriptlang.org/dt/search?search="},"\u70B9\u51FB\u6211\u8FDB\u884C\u641C\u7D22"),") \u53EF\u4EE5\u901A\u8FC7 npm \u5B89\u88C5\u5BF9\u5E94 types"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5B89\u88C5\u5B8C\u6210\u540E\u5373\u53EF\u4F7F\u5F97\u8BE5 js \u652F\u6301 typescript \u7684\u529F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u6CA1\u6709\u627E\u5230\u5BF9\u5E94 types \u5305, \u90A3\u4E48\u53EA\u9700\u5728\u4E0B\u9762\u8FD9\u4E2A\u6587\u4EF6\u8FDB\u884C\u914D\u7F6E\u5373\u53EF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6BD4\u5982\u6211\u4EEC\u5F15\u7528\u4E86\u4E00\u4E2A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"nanoscroller")," \u63D2\u4EF6, \u5047\u8BBE\u8BE5\u63D2\u4EF6\u8FD8\u672A\u53D1\u5E03\u5BF9\u5E94 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"types"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6B64\u65F6\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u65F6, typescript \u4F1A\u8B66\u544A\u4F60(\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u7BA1)\u65E0\u6CD5\u627E\u5230 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"nanoscorller")," \u8FD9\u4E2A\u4E1C\u897F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-javascript"},"$().nanoscroller();\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u53EA\u9700\u8981\u6765\u5230 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"types/global.d.ts")," \u4E2D, \u8FDB\u884C\u7C7B\u578B\u58F0\u660E\u5373\u53EF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"declare global {\n  //  \u6DFB\u52A0 window \u4E0A\u7684\u5168\u5C40\u53D8\u91CF\n  interface Window {\n    //  \u5982\u679C\u6211\u4EEC\u60F3\u5728 window \u4E0A\u81EA\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\n    //  \u53EA\u9700\u8981\u8FD9\u6837\u5199\n    myData: any;\n  }\n  //  \u6DFB\u52A0 JQuery \u5B9E\u4F8B\u65B9\u6CD5\n  interface JQuery {\n    //  \u6B64\u65F6 nanoscroller \u662F\u5B9E\u4F8B\u65B9\u6CD5, \u4E5F\u5C31\u662F\u901A\u8FC7 $().nanoscroller() \u6389\u7528\u7684\n    //  \u90A3\u4E48\u6211\u4EEC\u53EA\u9700\u8981\u8FD9\u6837\u5199, \u5373\u53EF\n    nanoscroller(options?: any): void;\n  }\n  //  \u6DFB\u52A0 JQuery \u5DE5\u5177\u65B9\u6CD5\n  interface JQueryStatic {\n    //  \u5982\u679C\u6211\u4EEC\u5B89\u88C5\u7684\u662F `Velocity`, \u90A3\u4E48\u5B83\u5C06\u4F1A\u662F\u4E00\u4E2A \u5DE5\u5177\u65B9\u6CD5,\n    //  \u4E5F\u5C31\u662F\u901A\u8FC7 $.Velocity() \u8FDB\u884C\u8C03\u7528\n    //  \u90A3\u4E48\u6211\u4EEC\u9700\u8981\u8FD9\u6837\u5199\n    Velocity(options: any): void;\n  }\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);