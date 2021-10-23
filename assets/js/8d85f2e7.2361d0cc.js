"use strict";
(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[367],{

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

/***/ 8326:
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
var _excluded=["components"];var frontMatter={sidebar_position:4,title:'打包'};var contentTitle=undefined;var metadata={"unversionedId":"advance/build","id":"advance/build","isDocsHomePage":false,"title":"打包","description":"只需执行下面代码即可 (打包应该由 CI 处理, 因为要自动部署.)","source":"@site/docs/advance/build.mdx","sourceDirName":"advance","slug":"/advance/build","permalink":"/boilerplate-ui-framework-site/docs/advance/build","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"打包"},"sidebar":"tutorialSidebar","previous":{"title":"项目配置","permalink":"/boilerplate-ui-framework-site/docs/advance/config"},"next":{"title":"打包后的使用","permalink":"/boilerplate-ui-framework-site/docs/advance/use-as-a-package"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Output 文件说明',id:'output-文件说明',children:[],level:2},{value:'配置',id:'配置',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53EA\u9700\u6267\u884C\u4E0B\u9762\u4EE3\u7801\u5373\u53EF (\u6253\u5305\u5E94\u8BE5\u7531 CI \u5904\u7406, \u56E0\u4E3A\u8981\u81EA\u52A8\u90E8\u7F72.)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-shell"},"$ yarn build\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"output-文件说明"},"Output \u6587\u4EF6\u8BF4\u660E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6267\u884C\u5B8C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"build")," \u547D\u4EE4\u540E, \u4F1A\u5728\u6839\u76EE\u5F55\u4E2D\u751F\u6210 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"build")," \u76EE\u5F55"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BE5\u76EE\u5F55\u53EF\u4EE5\u76F4\u63A5\u62D6\u62FD\u5230\u670D\u52A1\u5668\u4E0A (\u6216\u8005\u90E8\u7F72) \u6765\u5F62\u6210\u7F51\u7AD9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E0B\u9762\u53EA\u4ECB\u7ECD\u51E0\u4E2A\u5173\u952E\u7684\u6587\u4EF6\u5939"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"\uD83D\uDCE6build\n \u2523 \uD83D\uDCC2assets\n \u2523 \uD83D\uDCC2blog\n \u2523 \uD83D\uDCC2dist   //  dist \u76EE\u5F55\u4E2D\u5305\u542B\u7684\u662F UI \u7EC4\u4EF6\u5E93\u6253\u5305\u51FA\u6765\u7684\u6587\u4EF6, \u8FD9\u4E2A\u6587\u4EF6\u5939\u53EF\u4EE5\u76F4\u63A5\u7528\u4F5C\u4E0E npm \u53D1\u5E03\n \u2503 \u2523 \uD83D\uDCC2assets   //  \u5B58\u653E UI \u7EC4\u4EF6\u5E93\u4E2D\u7528\u5230\u7684\u9759\u6001\u8D44\u6E90\u6587\u4EF6\n \u2503 \u2503 \u2517 \uD83D\uDCC2fonts  //  UI \u7EC4\u4EF6\u5E93\u7684\u5B57\u4F53\u56FE\u6807\n \u2503 \u2523 \uD83D\uDCC2js       //  types \u76EE\u5F55\n \u2503 \u2523 \uD83D\uDCDCboilerplate-ui-framework.css     //  UI \u7EC4\u4EF6\u5E93\u7684 css \u6587\u4EF6\n \u2503 \u2523 \uD83D\uDCDCboilerplate-ui-framework.es.js   //  UI \u7EC4\u4EF6\u5E93\u7684 Js \u6587\u4EF6 ES Modules \u6A21\u5F0F\n \u2503 \u2523 \uD83D\uDCDCboilerplate-ui-framework.umd.js  //  UI \u7EC4\u4EF6\u5E93\u7684 JS \u6587\u4EF6 UMD \u6A21\u5F0F\n \u2503 \u2523 \uD83D\uDCDCindex.d.ts                       //  UI \u7EC4\u4EF6\u5E93 JS \u5BF9\u5E94\u7684 types \u6587\u4EF6\n \u2503 \u2523 \uD83D\uDCDCtailwind.config.js               //  UI \u7EC4\u4EF6\u5E93\u7528\u5230\u7684 tailwind \u914D\u7F6E\n \u2503 \u2517 \uD83D\uDCDCtailwindSafelist.json            //  UO \u7EC4\u4EF6\u5E93\u4F7F\u7528 purge \u540E\u5B58\u7559\u7684 classlist\n \u2523 \uD83D\uDCC2docs\n \u2523 \uD83D\uDCC2fonts\n \u2523 \uD83D\uDCC2img\n \u2523 \uD83D\uDCDC.nojekyll\n \u2523 \uD83D\uDCDC404.html\n \u2523 \uD83D\uDCDCindex.html     //  \u7F51\u7AD9\u5165\u53E3\u6587\u4EF6\n \u2517 \uD83D\uDCDCsitemap.xml\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"配置"},"\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6253\u5305\u51FA\u6765\u540E\u6587\u4EF6\u7684\u540D\u79F0, \u4F60\u53EF\u4EE5\u4FEE\u6539 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"package.json")," \u4E2D\u5BF9\u5E94\u7684\u4EE5\u4E0B\u5B57\u6BB5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"name\": \"boilerplate-ui-framework\", //  \u6253\u5305\u51FA\u6765\u540E\u6587\u4EF6\u7684\u540D\u79F0\n  \"main\": \"build/dist/boilerplate-ui-framework.umd.js\", //  \u6307\u5B9A\u5165\u53E3\u6587\u4EF6\n  \"module\": \"build/dist/boilerplate-ui-framework.es.js\" //  \u6307\u5B9A es module \u5F15\u7528\u65F6\u7684\u5165\u53E3\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);