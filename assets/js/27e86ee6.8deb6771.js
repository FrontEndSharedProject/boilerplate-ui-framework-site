"use strict";
(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[904],{

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

/***/ 1339:
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
var _excluded=["components"];var frontMatter={sidebar_position:7,title:'JIT 模式'};var contentTitle=undefined;var metadata={"unversionedId":"advance/jit","id":"advance/jit","isDocsHomePage":false,"title":"JIT 模式","description":"因为Tailwind CSS的设计原理，在开发时会先帮你生成一堆的class，CSS文件最少3MB起步🤷‍♂️。随着开发下去需要的Variants只会变得越来越多，开发中产生的CSS文件甚至变成10-20 MB都是可能的，还会连带拖慢载入的时间。","source":"@site/docs/advance/jit.mdx","sourceDirName":"advance","slug":"/advance/jit","permalink":"/boilerplate-ui-framework-site/docs/advance/jit","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"JIT 模式"},"sidebar":"tutorialSidebar","previous":{"title":"自动部署","permalink":"/boilerplate-ui-framework-site/docs/advance/deploy"},"next":{"title":"Card 组件","permalink":"/boilerplate-ui-framework-site/docs/components/card"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Just-in-Time 模式的新功能',id:'just-in-time-模式的新功能',children:[],level:2},{value:'启用JIT 模式',id:'启用jit-模式',children:[],level:2},{value:'新功能',id:'新功能',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u56E0\u4E3ATailwind CSS\u7684\u8BBE\u8BA1\u539F\u7406\uFF0C\u5728\u5F00\u53D1\u65F6\u4F1A\u5148\u5E2E\u4F60\u751F\u6210\u4E00\u5806\u7684class\uFF0CCSS\u6587\u4EF6\u6700\u5C113MB\u8D77\u6B65\uD83E\uDD37\u200D\u2642\uFE0F\u3002\u968F\u7740\u5F00\u53D1\u4E0B\u53BB\u9700\u8981\u7684Variants\u53EA\u4F1A\u53D8\u5F97\u8D8A\u6765\u8D8A\u591A\uFF0C\u5F00\u53D1\u4E2D\u4EA7\u751F\u7684CSS\u6587\u4EF6\u751A\u81F3\u53D8\u621010-20 MB\u90FD\u662F\u53EF\u80FD\u7684\uFF0C\u8FD8\u4F1A\u8FDE\u5E26\u62D6\u6162\u8F7D\u5165\u7684\u65F6\u95F4\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u65F6\u5019JIT\u6A21\u5F0F\u5C31\u6D3E\u4E0A\u7528\u573A\u5566\uFF01Tailwind CSS 2.0\u6B63\u5F0F\u4E0A\u7EBF\u7684Just-in-Time (\u7B80\u79F0JIT )\u7F16\u8BD1\u5668\uFF0C\u53EF\u4EE5\u5728\u5199HTML\u65F6\u53CA\u65F6\u7F16\u8BD1CSS\uFF0C\u5927\u5E45\u7F29\u77ED\u7F16\u8BD1\u65F6\u95F4\uFF0C\u4EE5\u53CA\u7F29\u5C0F\u4EA7\u751F\u7684\u6587\u4EF6\u5927\u5C0F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"just-in-time-模式的新功能"},"Just-in-Time \u6A21\u5F0F\u7684\u65B0\u529F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u8D85\u5FEB\u901F\u7684\u7F16\u8BD1\u65F6\u95F4 \u3002 \u539F\u672CTailwind CLI\u7F16\u8BD1\u9700\u89813-8\u79D2\uFF0C\u5728 JIT\u6A21\u5F0F \u4E0B\u4EC5\u9700 0.8\u79D2 \u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u76F4\u63A5\u4F7F\u7528\u4EFB\u610FVariants \u3002 \u4E0D\u7528\u518D\u70E6\u607C\u9700\u4E0D\u9700\u8981\u5F00 active \u3001 focus \u6216 disabled \u7B49\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u4EFB\u610F\u503CCSS class \u3002 \u53EF\u4EE5\u76F4\u63A5\u5728HTML\u91CC\u5199\u50CF top-","[247px]"," \u8FD9\u6837\u7684class\uFF0C\u5C06\u4F1A\u81EA\u52A8\u751F\u6210\u3002 \u800C\u4E14\u4E5F\u53EF\u4EE5\u4F7F\u7528Variants\uFF1A lg:top-","[587px]"," \u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728develop\u548Cproduction\u4EA7\u751F\u4E00\u6837\u7684CSS \u3002 \u4E0D\u9700\u8981\u70E6\u607C\u4E0A\u7EBF\u540E\u4F1A\u4E0D\u4F1A\u6709class\u7075\u5F02\u7684\u6D88\u5931~"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728\u5F00\u53D1\u65F6\u6709\u66F4\u597D\u7684\u6D4F\u89C8\u5668\u6548\u80FD \u3002 \u56E0\u4E3Adevelop\u548Cproduction\u7684CSS\u5927\u5C0F\u4E00\u6837\u5C0F\uFF0C\u672C\u5730\u9884\u89C8\u65F6\u4E0D\u4F1A\u51FA\u73B010-20 MB\u7684CSS\uFF0C\u5F00\u542F\u76F8\u5173\u5F00\u53D1\u5DE5\u5177\u4E5F\u4E0D\u4F1A\u8F7D\u5165\u5F88\u4E45\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"启用jit-模式"},"\u542F\u7528JIT \u6A21\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8981\u5F00\u542F\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728 tailwind.config.js \u91CC\u628A mode \u8BBE\u6210 'jit' \u5C31\u884C\u4E86"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-javascript"},"module.exports = {\n  mode: 'jit',\n  theme: {\n    // ...\n  }\n  // ...\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"新功能"},"\u65B0\u529F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://lucas-yang.vercel.app/post/tailwindcss-jit/"},"https://lucas-yang.vercel.app/post/tailwindcss-jit/")));};MDXContent.isMDXComponent=true;

/***/ })

}]);