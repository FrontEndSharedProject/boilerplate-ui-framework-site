(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[282],{

/***/ 3646:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(7228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 6860:
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8206:
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 319:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(3646);

var iterableToArray = __webpack_require__(6860);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableSpread = __webpack_require__(8206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 4973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Translate; },
  "I": function() { return /* binding */ translate; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(2982);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//*
Minimal implementation of a React interpolate component.
We don't ship a markdown parser nor a feature-complete i18n library on purpose.
More details here: https://github.com/facebook/docusaurus/pull/4295
*/var ValueRegexp=/{\w+}/g;var ValueFoundMarker='{}';// does not care much
function interpolate(text,values){var elements=[];var processedText=text.replace(ValueRegexp,function(match){// remove {{ and }} around the placeholder
var key=match.substr(1,match.length-2);var value=values===null||values===void 0?void 0:values[key];if(typeof value!=='undefined'){var element=/*#__PURE__*/react.isValidElement(value)?value:// For non-React elements: basic primitive->string conversion
String(value);elements.push(element);return ValueFoundMarker;}else{return match;// no match? add warning?
}});// No interpolation to be done: just return the text
if(elements.length===0){return text;}// Basic string interpolation: returns interpolated string
else if(elements.every(function(el){return typeof el==='string';})){return processedText.split(ValueFoundMarker).reduce(function(str,value,index){var _a;return str.concat(value).concat((_a=elements[index])!==null&&_a!==void 0?_a:'');},'');}// JSX interpolation: returns ReactNode
else{return processedText.split(ValueFoundMarker).reduce(function(array,value,index){return[].concat((0,toConsumableArray/* default */.Z)(array),[/*#__PURE__*/react.createElement(react.Fragment,{key:index},value,elements[index])]);},[]);}}function Interpolate(_ref){var children=_ref.children,values=_ref.values;if(typeof children!=='string'){console.warn('Illegal <Interpolate> children',children);throw new Error('The Docusaurus <Interpolate> component only accept simple string values');}return interpolate(children,values);}
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(7529);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage(_ref){var id=_ref.id,message=_ref.message;var _a,_b;if(typeof id==='undefined'&&typeof message==='undefined'){throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');}return(_b=(_a=codeTranslations[id!==null&&id!==void 0?id:message])!==null&&_a!==void 0?_a:message)!==null&&_b!==void 0?_b:id;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate(_ref2,values){var message=_ref2.message,id=_ref2.id;var localizedMessage=getLocalizedMessage({message:message,id:id});return interpolate(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near the text?
function Translate(_ref3){var children=_ref3.children,id=_ref3.id,values=_ref3.values;if(children&&typeof children!=='string'){console.warn('Illegal <Translate> children',children);throw new Error('The Docusaurus <Translate> component only accept simple string values');}var localizedMessage=getLocalizedMessage({message:children,id:id});return interpolate(localizedMessage,values);}

/***/ }),

/***/ 8143:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.VK; },
/* harmony export */   "HashRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.UT; },
/* harmony export */   "Link": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.rU; },
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.VA; },
/* harmony export */   "NavLink": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.OL; },
/* harmony export */   "Prompt": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NL; },
/* harmony export */   "Redirect": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.l_; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.AW; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.F0; },
/* harmony export */   "StaticRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.gx; },
/* harmony export */   "Switch": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.rs; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Gn; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.LX; },
/* harmony export */   "useHistory": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.k6; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.TH; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.UO; },
/* harmony export */   "useRouteMatch": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.$B; },
/* harmony export */   "withRouter": function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_0__.EN; }
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3727);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

/***/ 8084:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useGlobalData; },
/* harmony export */   "useAllPluginInstancesData": function() { return /* binding */ useAllPluginInstancesData; },
/* harmony export */   "usePluginData": function() { return /* binding */ usePluginData; }
/* harmony export */ });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2263);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO annoying constant duplication
// if we import something from outside the /client folder,
// the tsc directory structure is affected
// import {DEFAULT_PLUGIN_ID} from '../../constants';
var DEFAULT_PLUGIN_ID='default';function useGlobalData(){var _useDocusaurusContext=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),globalData=_useDocusaurusContext.globalData;if(!globalData){throw new Error('Docusaurus global data not found.');}return globalData;}function useAllPluginInstancesData(pluginName){var globalData=useGlobalData();var pluginGlobalData=globalData[pluginName];if(!pluginGlobalData){throw new Error("Docusaurus plugin global data not found for \"".concat(pluginName,"\" plugin."));}return pluginGlobalData;}function usePluginData(pluginName){var pluginId=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_PLUGIN_ID;var pluginGlobalData=useAllPluginInstancesData(pluginName);var pluginInstanceGlobalData=pluginGlobalData[pluginId];if(!pluginInstanceGlobalData){throw new Error("Docusaurus plugin global data not found for \"".concat(pluginName,"\" plugin with id \"").concat(pluginId,"\"."));}return pluginInstanceGlobalData;}

/***/ }),

/***/ 2389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useIsBrowser; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9913);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useIsBrowser(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ ._);}

/***/ }),

/***/ 8408:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _toConsumableArray=__webpack_require__(319)["default"];var _slicedToArray=__webpack_require__(3038)["default"];Object.defineProperty(exports, "__esModule", ({value:true}));exports.getDocVersionSuggestions=exports.getActiveDocContext=exports.getActiveVersion=exports.getLatestVersion=exports.getActivePlugin=void 0;var router_1=__webpack_require__(8143);// get the data of the plugin that is currently "active"
// ie the docs of that plugin are currently browsed
// it is useful to support multiple docs plugin instances
function getActivePlugin(allPluginDatas,pathname){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var activeEntry=Object.entries(allPluginDatas).find(function(_ref){var _ref2=_slicedToArray(_ref,2),_id=_ref2[0],pluginData=_ref2[1];return!!(0,router_1.matchPath)(pathname,{path:pluginData.path,exact:false,strict:false});});var activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error("Can't find active docs plugin for \"".concat(pathname,"\" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ").concat(Object.values(allPluginDatas).map(function(plugin){return plugin.path;}).join(', ')));}return activePlugin;}exports.getActivePlugin=getActivePlugin;var getLatestVersion=function getLatestVersion(data){return data.versions.find(function(version){return version.isLast;});};exports.getLatestVersion=getLatestVersion;// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
var getActiveVersion=function getActiveVersion(data,pathname){var lastVersion=(0,exports.getLatestVersion)(data);// Last version is a route like /docs/*,
// we need to try to match it last or it would match /docs/version-1.0/* as well
var orderedVersionsMetadata=[].concat(_toConsumableArray(data.versions.filter(function(version){return version!==lastVersion;})),[lastVersion]);return orderedVersionsMetadata.find(function(version){return!!(0,router_1.matchPath)(pathname,{path:version.path,exact:false,strict:false});});};exports.getActiveVersion=getActiveVersion;var getActiveDocContext=function getActiveDocContext(data,pathname){var activeVersion=(0,exports.getActiveVersion)(data,pathname);var activeDoc=activeVersion===null||activeVersion===void 0?void 0:activeVersion.docs.find(function(doc){return!!(0,router_1.matchPath)(pathname,{path:doc.path,exact:true,strict:false});});function getAlternateVersionDocs(docId){var result={};data.versions.forEach(function(version){version.docs.forEach(function(doc){if(doc.id===docId){result[version.name]=doc;}});});return result;}var alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion:activeVersion,activeDoc:activeDoc,alternateDocVersions:alternateVersionDocs};};exports.getActiveDocContext=getActiveDocContext;var getDocVersionSuggestions=function getDocVersionSuggestions(data,pathname){var latestVersion=(0,exports.getLatestVersion)(data);var activeDocContext=(0,exports.getActiveDocContext)(data,pathname);var latestDocSuggestion=activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.alternateDocVersions[latestVersion.name];return{latestDocSuggestion:latestDocSuggestion,latestVersionSuggestion:latestVersion};};exports.getDocVersionSuggestions=getDocVersionSuggestions;

/***/ }),

/***/ 6730:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_unused_export__ = ({value:true});exports.Jo=exports.Iw=exports.zu=exports.yW=exports.gB=__webpack_unused_export__=exports.gA=exports.zh=exports._r=void 0;var tslib_1=__webpack_require__(655);var router_1=__webpack_require__(8143);var useGlobalData_1=(0,tslib_1.__importStar)(__webpack_require__(8084));var docsClientUtils_1=__webpack_require__(8408);// Important to use a constant object to avoid React useEffect executions etc...,
// see https://github.com/facebook/docusaurus/issues/5089
var StableEmptyObject={};// Not using useAllPluginInstancesData() because in blog-only mode, docs hooks are still used by the theme
// We need a fail-safe fallback when the docs plugin is not in use
var useAllDocsData=function useAllDocsData(){var _a;// useAllPluginInstancesData('docusaurus-plugin-content-docs');
return(_a=(0,useGlobalData_1.default)()['docusaurus-plugin-content-docs'])!==null&&_a!==void 0?_a:StableEmptyObject;};exports._r=useAllDocsData;var useDocsData=function useDocsData(pluginId){return(0,useGlobalData_1.usePluginData)('docusaurus-plugin-content-docs',pluginId);};exports.zh=useDocsData;var useActivePlugin=function useActivePlugin(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var data=(0,exports._r)();var _ref=(0,router_1.useLocation)(),pathname=_ref.pathname;return(0,docsClientUtils_1.getActivePlugin)(data,pathname,options);};exports.gA=useActivePlugin;var useActivePluginAndVersion=function useActivePluginAndVersion(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var activePlugin=(0,exports.gA)(options);var _ref2=(0,router_1.useLocation)(),pathname=_ref2.pathname;if(activePlugin){var activeVersion=(0,docsClientUtils_1.getActiveVersion)(activePlugin.pluginData,pathname);return{activePlugin:activePlugin,activeVersion:activeVersion};}return undefined;};__webpack_unused_export__=useActivePluginAndVersion;// versions are returned ordered (most recent first)
var useVersions=function useVersions(pluginId){var data=(0,exports.zh)(pluginId);return data.versions;};exports.gB=useVersions;var useLatestVersion=function useLatestVersion(pluginId){var data=(0,exports.zh)(pluginId);return(0,docsClientUtils_1.getLatestVersion)(data);};exports.yW=useLatestVersion;// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
var useActiveVersion=function useActiveVersion(pluginId){var data=(0,exports.zh)(pluginId);var _ref3=(0,router_1.useLocation)(),pathname=_ref3.pathname;return(0,docsClientUtils_1.getActiveVersion)(data,pathname);};exports.zu=useActiveVersion;var useActiveDocContext=function useActiveDocContext(pluginId){var data=(0,exports.zh)(pluginId);var _ref4=(0,router_1.useLocation)(),pathname=_ref4.pathname;return(0,docsClientUtils_1.getActiveDocContext)(data,pathname);};exports.Iw=useActiveDocContext;// Useful to say "hey, you are not on the latest docs version, please switch"
var useDocVersionSuggestions=function useDocVersionSuggestions(pluginId){var data=(0,exports.zh)(pluginId);var _ref5=(0,router_1.useLocation)(),pathname=_ref5.pathname;return(0,docsClientUtils_1.getDocVersionSuggestions)(data,pathname);};exports.Jo=useDocVersionSuggestions;

/***/ }),

/***/ 1217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Seo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9105);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2915);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4996);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Seo(_ref){var title=_ref.title,description=_ref.description,keywords=_ref.keywords,image=_ref.image,children=_ref.children;var pageTitle=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useTitleFormatter */ .pe)(title);var _useBaseUrlUtils=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .useBaseUrlUtils */ .C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var pageImage=image?withBaseUrl(image,{absolute:true}):undefined;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,pageTitle),title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:pageTitle}),description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:description}),keywords&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"keywords",content:Array.isArray(keywords)?keywords.join(','):keywords}),pageImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:image",content:pageImage}),pageImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:image",content:pageImage}),children);}

/***/ }),

/***/ 9146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iw": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.Iw; },
/* harmony export */   "gA": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.gA; },
/* harmony export */   "zu": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.zu; },
/* harmony export */   "_r": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__._r; },
/* harmony export */   "Jo": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.Jo; },
/* harmony export */   "zh": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.zh; },
/* harmony export */   "yW": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.yW; },
/* harmony export */   "gB": function() { return /* reexport safe */ _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__.gB; }
/* harmony export */ });
/* harmony import */ var _docusaurus_plugin_content_docs_lib_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6730);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Re-expose useDocs
// Ensure it's always statically available even if user is not using the docs plugin
// Problem reported for the blog-only mode: https://github.com/facebook/docusaurus/issues/3360


/***/ }),

/***/ 3783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var windowSizes={desktop:'desktop',mobile:'mobile',// This "ssr" value is very important to handle hydration FOUC / layout shifts
// You have to handle server-rendering explicitly on the call-site
// On the server, you may need to render BOTH the mobile/desktop elements (and hide one of them with mediaquery)
// We don't return "undefined" on purpose, to make it more explicit
ssr:'ssr'};var DesktopThresholdWidth=996;function getWindowSize(){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM){return windowSizes.ssr;}return window.innerWidth>DesktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}// Simulate the SSR window size in dev, so that potential hydration FOUC/layout shift problems can be seen in dev too!
var DevSimulateSSR= false&&0;// This hook returns an enum value on purpose!
// We don't want it to return the actual width value, for resize perf reasons
// We only want to re-render once a breakpoint is crossed
function useWindowSize(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){if(DevSimulateSSR){return'ssr';}return getWindowSize();}),_useState2=(0,_home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_useState,2),windowSize=_useState2[0],setWindowSize=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){function updateWindowSize(){setWindowSize(getWindowSize());}// @ts-expect-error: annoying TS setTimeout typing...
var timeout=DevSimulateSSR?setTimeout(updateWindowSize,1000):undefined;window.addEventListener('resize',updateWindowSize);return function(){window.removeEventListener('resize',updateWindowSize);clearTimeout(timeout);};},[]);return windowSize;}/* harmony default export */ __webpack_exports__["Z"] = (useWindowSize);

/***/ }),

/***/ 2915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pl": function() { return /* reexport */ AnnouncementBarProvider; },
  "zF": function() { return /* reexport */ Collapsible; },
  "HX": function() { return /* reexport */ DEFAULT_SEARCH_TAG; },
  "PO": function() { return /* reexport */ components_Details; },
  "L5": function() { return /* reexport */ DocsPreferredVersionContextProvider; },
  "Cv": function() { return /* reexport */ MobileSecondaryMenuFiller; },
  "Cn": function() { return /* reexport */ MobileSecondaryMenuProvider; },
  "OC": function() { return /* reexport */ ScrollControllerProvider; },
  "kM": function() { return /* reexport */ ThemeClassNames; },
  "WA": function() { return /* reexport */ createStorageSlot; },
  "os": function() { return /* reexport */ docVersionSearchTag; },
  "Mg": function() { return /* reexport */ isSamePath; },
  "_f": function() { return /* reexport */ listStorageKeys; },
  "bc": function() { return /* reexport */ parseCodeBlockTitle; },
  "l5": function() { return /* reexport */ useAlternatePageUtils; },
  "nT": function() { return /* reexport */ useAnnouncementBar; },
  "uR": function() { return /* reexport */ useCollapsible; },
  "J": function() { return /* reexport */ useDocsPreferredVersion; },
  "Rb": function() { return /* reexport */ useHistoryPopHandler; },
  "be": function() { return /* reexport */ useLocalPathname; },
  "SL": function() { return /* reexport */ useLocationChange; },
  "g8": function() { return /* reexport */ useMobileSecondaryMenuRenderer; },
  "D9": function() { return /* reexport */ usePrevious; },
  "RF": function() { return /* reexport */ useScrollPosition; },
  "DA": function() { return /* reexport */ useTOCFilter; },
  "Si": function() { return /* reexport */ utils_useTOCHighlight; },
  "LU": function() { return /* reexport */ useThemeConfig; },
  "pe": function() { return /* reexport */ useTitleFormatter; }
});

// UNUSED EXPORTS: duplicates, isDocsPluginEnabled, listTagsByLetters, translateTagsPageTitle, useDocsPreferredVersionByPluginId, usePluralForm, useScrollController, useScrollPositionBlocker

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var exports_useDocusaurusContext = __webpack_require__(2263);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeConfig(){return (0,exports_useDocusaurusContext/* default */.Z)().siteConfig.themeConfig;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var StorageTypes=(/* unused pure expression or super */ null && (['localStorage','sessionStorage','none']));var DefaultStorageType='localStorage';// Will return null browser storage is unavailable (like running Docusaurus in iframe)
// See https://github.com/facebook/docusaurus/pull/4501
function getBrowserStorage(){var storageType=arguments.length>0&&arguments[0]!==undefined?arguments[0]:DefaultStorageType;if(typeof window==='undefined'){throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');}if(storageType==='none'){return null;}else{try{return window[storageType];}catch(e){logOnceBrowserStorageNotAvailableWarning(e);return null;}}}/**
 * Poor man's memoization to avoid logging multiple times the same warning
 * Sometimes, localStorage/sessionStorage is unavailable due to browser policies
 */var hasLoggedBrowserStorageNotAvailableWarning=false;function logOnceBrowserStorageNotAvailableWarning(error){if(!hasLoggedBrowserStorageNotAvailableWarning){console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",error);hasLoggedBrowserStorageNotAvailableWarning=true;}}var NoopStorageSlot={get:function get(){return null;},set:function set(){},del:function del(){}};//  Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key){function throwError(){throw new Error("Illegal storage API usage for storage key \"".concat(key,"\".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers."));}return{get:throwError,set:throwError,del:throwError};}/**
 * Creates an object for accessing a particular key in localStorage.
 */var createStorageSlot=function createStorageSlot(key,options){if(typeof window==='undefined'){return createServerStorageSlot(key);}var browserStorage=getBrowserStorage(options===null||options===void 0?void 0:options.persistence);if(browserStorage===null){return NoopStorageSlot;}return{get:function get(){return browserStorage.getItem(key);},set:function set(value){return browserStorage.setItem(key,value);},del:function del(){return browserStorage.removeItem(key);}};};/**
 * Returns a list of all the keys currently stored in browser storage
 * or an empty list if browser storage can't be accessed.
 */function listStorageKeys(){var storageType=arguments.length>0&&arguments[0]!==undefined?arguments[0]:DefaultStorageType;var browserStorage=getBrowserStorage(storageType);if(!browserStorage){return[];}var keys=[];for(var i=0;i<browserStorage.length;i+=1){var key=browserStorage.key(i);if(key!==null){keys.push(key);}}return keys;}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Permits to obtain the url of the current page in another locale
// Useful to generate hreflang meta headers etc...
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
function useAlternatePageUtils(){var _useDocusaurusContext=(0,exports_useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,baseUrl=_useDocusaurusContext2.baseUrl,url=_useDocusaurusContext2.url,_useDocusaurusContext3=_useDocusaurusContext.i18n,defaultLocale=_useDocusaurusContext3.defaultLocale,currentLocale=_useDocusaurusContext3.currentLocale;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;var baseUrlUnlocalized=currentLocale===defaultLocale?baseUrl:baseUrl.replace("/".concat(currentLocale,"/"),'/');var pathnameSuffix=pathname.replace(baseUrl,'');function getLocalizedBaseUrl(locale){return locale===defaultLocale?"".concat(baseUrlUnlocalized):"".concat(baseUrlUnlocalized).concat(locale,"/");}// TODO support correct alternate url when localized site is deployed on another domain
function createUrl(_ref){var locale=_ref.locale,fullyQualified=_ref.fullyQualified;return"".concat(fullyQualified?url:'').concat(getLocalizedBaseUrl(locale)).concat(pathnameSuffix);}return{createUrl:createUrl};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var codeBlockTitleRegex=/title=(["'])(.*?)\1/;function parseCodeBlockTitle(metastring){var _a,_b;return(_b=(_a=metastring===null||metastring===void 0?void 0:metastring.match(codeBlockTitleRegex))===null||_a===void 0?void 0:_a[2])!==null&&_b!==void 0?_b:'';}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DEFAULT_SEARCH_TAG='default';function docVersionSearchTag(pluginId,versionName){return"docs-".concat(pluginId,"-").concat(versionName);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(9146);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO not ideal, see also "useDocs"
var isDocsPluginEnabled=!!useDocs/* useAllDocsData */._r;
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/pathUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Compare the 2 paths, ignoring trailing /
var isSamePath=function isSamePath(path1,path2){var normalize=function normalize(pathname){return!pathname||(pathname===null||pathname===void 0?void 0:pathname.endsWith('/'))?pathname:"".concat(pathname,"/");};return normalize(path1)===normalize(path2);};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/generalUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var useTitleFormatter=function useTitleFormatter(title){var _useDocusaurusContext=(0,exports_useDocusaurusContext/* default */.Z)(),siteConfig=_useDocusaurusContext.siteConfig;var siteTitle=siteConfig.title,titleDelimiter=siteConfig.titleDelimiter;return title&&title.trim().length?"".concat(title.trim()," ").concat(titleDelimiter," ").concat(siteTitle):siteTitle;};
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
var OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(function(pf){return pluralForms.includes(pf);});}// Hardcoded english/fallback implementation
var EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:function select(count){return count===1?'one':'other';}};function createLocalePluralForms(locale){var pluralRules=new Intl.PluralRules(locale);return{locale:locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:function select(count){return pluralRules.select(count);}};}// Poor man's PluralSelector implementation, using an english fallback.
// We want a lightweight, future-proof and good-enough solution.
// We don't want a perfect and heavy solution.
//
// Docusaurus classic theme has only 2 deeply nested labels requiring complex plural rules
// We don't want to use Intl + PluralRules polyfills + full ICU syntax (react-intl) just for that.
//
// Notes:
// - 2021: 92+% Browsers support Intl.PluralRules, and support will increase in the future
// - NodeJS >= 13 has full ICU support by default
// - In case of "mismatch" between SSR and Browser ICU support, React keeps working!
function useLocalePluralForms(){var _useDocusaurusContext=useDocusaurusContext(),currentLocale=_useDocusaurusContext.i18n.currentLocale;return useMemo(function(){// @ts-expect-error checking Intl.PluralRules in case browser doesn't have it (e.g Safari 12-)
if(Intl.PluralRules){try{return createLocalePluralForms(currentLocale);}catch(e){console.error("Failed to use Intl.PluralRules for locale \"".concat(currentLocale,"\".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"));return EnglishPluralForms;}}else{console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        ");return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){var separator='|';var parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}else{if(parts.length>localePluralForms.pluralForms.length){console.error("For locale=".concat(localePluralForms.locale,", a maximum of ").concat(localePluralForms.pluralForms.length," plural forms are expected (").concat(localePluralForms.pluralForms,"), but the message contains ").concat(parts.length," plural forms: ").concat(pluralMessages," "));}var pluralForm=localePluralForms.select(count);var pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other) instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}}function usePluralForm(){var localePluralForm=useLocalePluralForms();return{selectMessage:function selectMessage(count,pluralMessages){return selectPluralMessage(pluralMessages,count,localePluralForm);}};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePrevious.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function usePrevious(value){var ref=(0,react.useRef)();(0,react.useEffect)(function(){ref.current=value;});return ref.current;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLocationChange(onLocationChange){var location=(0,react_router/* useLocation */.TH)();var previousLocation=usePrevious(location);(0,react.useEffect)(function(){onLocationChange({location:location,previousLocation:previousLocation});},[location]);}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var _excluded=["collapsed"],_excluded2=["lazy"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultAnimationEasing='ease-in-out';// This hook just define the state
function useCollapsible(_ref){var initialState=_ref.initialState;var _useState=(0,react.useState)(initialState!==null&&initialState!==void 0?initialState:false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),collapsed=_useState2[0],setCollapsed=_useState2[1];var toggleCollapsed=(0,react.useCallback)(function(){setCollapsed(function(expanded){return!expanded;});},[]);return{collapsed:collapsed,setCollapsed:setCollapsed,toggleCollapsed:toggleCollapsed};}var CollapsedStyles={display:'none',overflow:'hidden',height:'0px'};var ExpandedStyles={display:'block',overflow:'visible',height:'auto'};function applyCollapsedStyle(el,collapsed){var collapsedStyles=collapsed?CollapsedStyles:ExpandedStyles;el.style.display=collapsedStyles.display;el.style.overflow=collapsedStyles.overflow;el.style.height=collapsedStyles.height;}/*
Lex111: Dynamic transition duration is used in Material design, this technique is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */function getAutoHeightDuration(height){var constant=height/36;return Math.round((4+15*Math.pow(constant,0.25)+constant/5)*10);}function useCollapseAnimation(_ref2){var collapsibleRef=_ref2.collapsibleRef,collapsed=_ref2.collapsed,animation=_ref2.animation;var mounted=(0,react.useRef)(false);(0,react.useEffect)(function(){var el=collapsibleRef.current;function getTransitionStyles(){var _a,_b;var height=el.scrollHeight;var duration=(_a=animation===null||animation===void 0?void 0:animation.duration)!==null&&_a!==void 0?_a:getAutoHeightDuration(height);var easing=(_b=animation===null||animation===void 0?void 0:animation.easing)!==null&&_b!==void 0?_b:DefaultAnimationEasing;return{transition:"height ".concat(duration,"ms ").concat(easing),height:"".concat(height,"px")};}function applyTransitionStyles(){var transitionStyles=getTransitionStyles();el.style.transition=transitionStyles.transition;el.style.height=transitionStyles.height;}// On mount, we just apply styles, no animated transition
if(!mounted.current){applyCollapsedStyle(el,collapsed);mounted.current=true;return undefined;}el.style.willChange='height';function startAnimation(){var animationFrame=requestAnimationFrame(function(){// When collapsing
if(collapsed){applyTransitionStyles();requestAnimationFrame(function(){el.style.height=CollapsedStyles.height;el.style.overflow=CollapsedStyles.overflow;});}// When expanding
else{el.style.display='block';requestAnimationFrame(function(){applyTransitionStyles();});}});return function(){return cancelAnimationFrame(animationFrame);};}return startAnimation();},[collapsibleRef,collapsed,animation]);}// Prevent hydration layout shift before anims are handled imperatively with JS
function getSSRStyle(collapsed){if(ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM){return undefined;}return collapsed?CollapsedStyles:ExpandedStyles;}function CollapsibleBase(_ref3){var _ref3$as=_ref3.as,As=_ref3$as===void 0?'div':_ref3$as,collapsed=_ref3.collapsed,children=_ref3.children,animation=_ref3.animation,onCollapseTransitionEnd=_ref3.onCollapseTransitionEnd,className=_ref3.className,disableSSRStyle=_ref3.disableSSRStyle;// any because TS is a pain for HTML element refs, see https://twitter.com/sebastienlorber/status/1412784677795110914
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var collapsibleRef=(0,react.useRef)(null);useCollapseAnimation({collapsibleRef:collapsibleRef,collapsed:collapsed,animation:animation});return/*#__PURE__*/react.createElement(As// @ts-expect-error: see https://twitter.com/sebastienlorber/status/1412784677795110914
,{// @ts-expect-error: see https://twitter.com/sebastienlorber/status/1412784677795110914
ref:collapsibleRef,style:disableSSRStyle?undefined:getSSRStyle(collapsed),onTransitionEnd:function onTransitionEnd(e){if(e.propertyName!=='height'){return;}applyCollapsedStyle(collapsibleRef.current,collapsed);onCollapseTransitionEnd===null||onCollapseTransitionEnd===void 0?void 0:onCollapseTransitionEnd(collapsed);},className:className},children);}function CollapsibleLazy(_ref4){var collapsed=_ref4.collapsed,props=(0,objectWithoutProperties/* default */.Z)(_ref4,_excluded);var _useState3=(0,react.useState)(!collapsed),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),mounted=_useState4[0],setMounted=_useState4[1];(0,react.useLayoutEffect)(function(){if(!collapsed){setMounted(true);}},[collapsed]);// lazyCollapsed updated in effect so that the first expansion transition can work
var _useState5=(0,react.useState)(collapsed),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),lazyCollapsed=_useState6[0],setLazyCollapsed=_useState6[1];(0,react.useLayoutEffect)(function(){if(mounted){setLazyCollapsed(collapsed);}},[mounted,collapsed]);return mounted?/*#__PURE__*/react.createElement(CollapsibleBase,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props),{},{collapsed:lazyCollapsed})):null;}function Collapsible(_ref5){var lazy=_ref5.lazy,props=(0,objectWithoutProperties/* default */.Z)(_ref5,_excluded2);var Comp=lazy?CollapsibleLazy:CollapsibleBase;return/*#__PURE__*/react.createElement(Comp,(0,objectSpread2/* default */.Z)({},props));}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2389);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"details":"details_2Ziz","isBrowser":"isBrowser_2j9b","collapsibleContent":"collapsibleContent_3OHp"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
var Details_excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}var Details=function Details(_ref){var summary=_ref.summary,children=_ref.children,props=(0,objectWithoutProperties/* default */.Z)(_ref,Details_excluded);var isBrowser=(0,useIsBrowser/* default */.Z)();var detailsRef=(0,react.useRef)(null);var _useCollapsible=useCollapsible({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// We use a separate prop because it must be set only after animation completes
// Otherwise close anim won't work
var _useState=(0,react.useState)(props.open),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),open=_useState2[0],setOpen=_useState2[1];return/*#__PURE__*/react.createElement("details",(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props),{},{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx_m/* default */.Z)(styles_module.details,(0,defineProperty/* default */.Z)({},styles_module.isBrowser,isBrowser),props.className),onMouseDown:function onMouseDown(e){var target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:function onClick(e){e.stopPropagation();// For isolation of multiple nested details/summary
var target=e.target;var shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// setOpen(false); // Don't do this, it breaks close animation!
}}}),summary,/*#__PURE__*/react.createElement(Collapsible,{lazy:false,collapsed:collapsed,disableSSRStyle// Allows component to work fine even with JS disabled!
:true,onCollapseTransitionEnd:function onCollapseTransitionEnd(newCollapsed){setCollapsed(newCollapsed);setOpen(!newCollapsed);}},/*#__PURE__*/react.createElement("div",{className:styles_module.collapsibleContent},children)));};/* harmony default export */ var components_Details = (Details);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(2982);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/mobileSecondaryMenu.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useContextValue(){return (0,react.useState)(null);}var Context=/*#__PURE__*/(0,react.createContext)(null);function MobileSecondaryMenuProvider(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(Context.Provider,{value:useContextValue()},children);}function useMobileSecondaryMenuContext(){var value=(0,react.useContext)(Context);if(value===null){throw new Error('MobileSecondaryMenuProvider was not used correctly, context value is null');}return value;}function useMobileSecondaryMenuRenderer(){var _useMobileSecondaryMe=useMobileSecondaryMenuContext(),_useMobileSecondaryMe2=(0,slicedToArray/* default */.Z)(_useMobileSecondaryMe,1),state=_useMobileSecondaryMe2[0];if(state){var Comp=state.component;return function render(extraProps){return/*#__PURE__*/react.createElement(Comp,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},state.props),extraProps));};}return function(){return undefined;};}function useShallowMemoizedObject(obj){return (0,react.useMemo)(function(){return obj;},// Is this safe?
[].concat((0,toConsumableArray/* default */.Z)(Object.keys(obj)),(0,toConsumableArray/* default */.Z)(Object.values(obj))));}// Fill the secondary menu placeholder with some real content
function MobileSecondaryMenuFiller(_ref2){var component=_ref2.component,props=_ref2.props;var _useMobileSecondaryMe3=useMobileSecondaryMenuContext(),_useMobileSecondaryMe4=(0,slicedToArray/* default */.Z)(_useMobileSecondaryMe3,2),setState=_useMobileSecondaryMe4[1];// To avoid useless context re-renders, props are memoized shallowly
var memoizedProps=useShallowMemoizedObject(props);(0,react.useEffect)(function(){// @ts-expect-error: context is not 100% typesafe but it's ok
setState({component:component,props:memoizedProps});},[setState,component,memoizedProps]);(0,react.useEffect)(function(){return function(){return setState(null);};},[setState]);return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/DocsPreferredVersionStorage.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var storageKey=function storageKey(pluginId){return"docs-preferred-version-".concat(pluginId);};var DocsPreferredVersionStorage={save:function save(pluginId,persistence,versionName){createStorageSlot(storageKey(pluginId),{persistence:persistence}).set(versionName);},read:function read(pluginId,persistence){return createStorageSlot(storageKey(pluginId),{persistence:persistence}).get();},clear:function clear(pluginId,persistence){createStorageSlot(storageKey(pluginId),{persistence:persistence}).del();}};/* harmony default export */ var docsPreferredVersion_DocsPreferredVersionStorage = (DocsPreferredVersionStorage);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/DocsPreferredVersionProvider.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Initial state is always null as we can't read localstorage from node SSR
function getInitialState(pluginIds){var initialState={};pluginIds.forEach(function(pluginId){initialState[pluginId]={preferredVersionName:null};});return initialState;}// Read storage for all docs plugins
// Assign to each doc plugin a preferred version (if found)
function readStorageState(_ref){var pluginIds=_ref.pluginIds,versionPersistence=_ref.versionPersistence,allDocsData=_ref.allDocsData;// The storage value we read might be stale,
// and belong to a version that does not exist in the site anymore
// In such case, we remove the storage value to avoid downstream errors
function restorePluginState(pluginId){var preferredVersionNameUnsafe=docsPreferredVersion_DocsPreferredVersionStorage.read(pluginId,versionPersistence);var pluginData=allDocsData[pluginId];var versionExists=pluginData.versions.some(function(version){return version.name===preferredVersionNameUnsafe;});if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}else{docsPreferredVersion_DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}}var initialState={};pluginIds.forEach(function(pluginId){initialState[pluginId]=restorePluginState(pluginId);});return initialState;}function useVersionPersistence(){return useThemeConfig().docs.versionPersistence;}// Value that  will be accessible through context: [state,api]
function DocsPreferredVersionProvider_useContextValue(){var allDocsData=(0,useDocs/* useAllDocsData */._r)();var versionPersistence=useVersionPersistence();var pluginIds=(0,react.useMemo)(function(){return Object.keys(allDocsData);},[allDocsData]);// Initial state is empty, as  we can't read browser storage in node/SSR
var _useState=(0,react.useState)(function(){return getInitialState(pluginIds);}),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),state=_useState2[0],setState=_useState2[1];// On mount, we set the state read from browser storage
(0,react.useEffect)(function(){setState(readStorageState({allDocsData:allDocsData,versionPersistence:versionPersistence,pluginIds:pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
var api=(0,react.useMemo)(function(){function savePreferredVersion(pluginId,versionName){docsPreferredVersion_DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(function(s){return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},s),{},(0,defineProperty/* default */.Z)({},pluginId,{preferredVersionName:versionName}));});}return{savePreferredVersion:savePreferredVersion};},[setState]);return[state,api];}var DocsPreferredVersionProvider_Context=/*#__PURE__*/(0,react.createContext)(null);function DocsPreferredVersionContextProvider(_ref2){var children=_ref2.children;if(isDocsPluginEnabled){return/*#__PURE__*/react.createElement(DocsPreferredVersionContextProviderUnsafe,null,children);}else{return/*#__PURE__*/react.createElement(react.Fragment,null,children);}}function DocsPreferredVersionContextProviderUnsafe(_ref3){var children=_ref3.children;var contextValue=DocsPreferredVersionProvider_useContextValue();return/*#__PURE__*/react.createElement(DocsPreferredVersionProvider_Context.Provider,{value:contextValue},children);}function DocsPreferredVersionProvider_useDocsPreferredVersionContext(){var value=(0,react.useContext)(DocsPreferredVersionProvider_Context);if(!value){throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');}return value;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/constants.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
// eslint-disable-next-line no-restricted-imports
export {
  // constants were only available on node
  // this makes some useful constants available to frontend/themes too
  // import {DEFAULT_PLUGIN_ID} '@docusaurus/constants'
  DEFAULT_PLUGIN_ID,
} from '../../constants';
 */ // Not duplicating the constants seems to produce
// weird TS compilation side-effects
var DEFAULT_PLUGIN_ID='default';
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsPreferredVersion/useDocsPreferredVersion.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note, the preferredVersion attribute will always be null before mount
function useDocsPreferredVersion(){var pluginId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:DEFAULT_PLUGIN_ID;var docsData=(0,useDocs/* useDocsData */.zh)(pluginId);var _useDocsPreferredVers=DocsPreferredVersionProvider_useDocsPreferredVersionContext(),_useDocsPreferredVers2=(0,slicedToArray/* default */.Z)(_useDocsPreferredVers,2),state=_useDocsPreferredVers2[0],api=_useDocsPreferredVers2[1];var preferredVersionName=state[pluginId].preferredVersionName;var preferredVersion=preferredVersionName?docsData.versions.find(function(version){return version.name===preferredVersionName;}):null;var savePreferredVersionName=(0,react.useCallback)(function(versionName){api.savePreferredVersion(pluginId,versionName);},[api]);return{preferredVersion:preferredVersion,savePreferredVersionName:savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){var allDocsData=useAllDocsData();var _useDocsPreferredVers3=useDocsPreferredVersionContext(),_useDocsPreferredVers4=_slicedToArray(_useDocsPreferredVers3,1),state=_useDocsPreferredVers4[0];function getPluginIdPreferredVersion(pluginId){var docsData=allDocsData[pluginId];var preferredVersionName=state[pluginId].preferredVersionName;return preferredVersionName?docsData.versions.find(function(version){return version.name===preferredVersionName;}):null;}var pluginIds=Object.keys(allDocsData);var result={};pluginIds.forEach(function(pluginId){result[pluginId]=getPluginIdPreferredVersion(pluginId);});return result;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // These class names are used to style page layouts in Docusaurus
// Those are meant to be targeted by user-provided custom CSS selectors
// /!\ Please do not modify the classnames! This is a breaking change, and annoying for users!
var ThemeClassNames={page:{blogListPage:'blog-list-page',blogPostPage:'blog-post-page',blogTagsListPage:'blog-tags-list-page',blogTagPostListPage:'blog-tags-post-list-page',docsDocPage:'docs-doc-page',docsTagsListPage:'docs-tags-list-page',docsTagDocListPage:'docs-tags-doc-list-page',mdxPage:'mdx-page'},wrapper:{main:'main-wrapper',blogPages:'blog-wrapper',docsPages:'docs-wrapper',mdxPages:'mdx-wrapper'},// /!\ Please keep the naming convention consistent!
// Something like: "theme-{blog,doc,version,page}?-<suffix>"
common:{editThisPage:'theme-edit-this-page',lastUpdated:'theme-last-updated',backToTopButton:'theme-back-to-top-button'},layout:{// TODO add other stable classNames here
},docs:{docVersionBanner:'theme-doc-version-banner',docVersionBadge:'theme-doc-version-badge',docMarkdown:'theme-doc-markdown',docTocMobile:'theme-doc-toc-mobile',docTocDesktop:'theme-doc-toc-desktop',docFooter:'theme-doc-footer',docFooterTagsRow:'theme-doc-footer-tags-row',docFooterEditMetaRow:'theme-doc-footer-edit-meta-row',docSidebarMenu:'theme-doc-sidebar-menu',docSidebarItemCategory:'theme-doc-sidebar-item-category',docSidebarItemLink:'theme-doc-sidebar-item-link',docSidebarItemCategoryLevel:function docSidebarItemCategoryLevel(level){return"theme-doc-sidebar-item-category-level-".concat(level);},docSidebarItemLinkLevel:function docSidebarItemLinkLevel(level){return"theme-doc-sidebar-item-link-level-".concat(level);}// TODO add other stable classNames here
},blog:{// TODO add other stable classNames here
}};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/announcementBarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AnnouncementBarDismissStorageKey='docusaurus.announcement.dismiss';var AnnouncementBarIdStorageKey='docusaurus.announcement.id';var AnnouncementBarDismissStorage=createStorageSlot(AnnouncementBarDismissStorageKey);var IdStorage=createStorageSlot(AnnouncementBarIdStorageKey);var isDismissedInStorage=function isDismissedInStorage(){return AnnouncementBarDismissStorage.get()==='true';};var setDismissedInStorage=function setDismissedInStorage(bool){return AnnouncementBarDismissStorage.set(String(bool));};var useAnnouncementBarContextValue=function useAnnouncementBarContextValue(){var _useThemeConfig=useThemeConfig(),announcementBar=_useThemeConfig.announcementBar;var isBrowser=(0,useIsBrowser/* default */.Z)();var _useState=(0,react.useState)(function(){return isBrowser?// On client navigation: init with localstorage value
isDismissedInStorage():// On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
false;}),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),isClosed=_useState2[0],setClosed=_useState2[1];// Update state after hydration
(0,react.useEffect)(function(){setClosed(isDismissedInStorage());},[]);var handleClose=(0,react.useCallback)(function(){setDismissedInStorage(true);setClosed(true);},[]);(0,react.useEffect)(function(){if(!announcementBar){return;}var id=announcementBar.id;var viewedId=IdStorage.get();// retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}var isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){setDismissedInStorage(false);}if(isNewAnnouncement||!isDismissedInStorage()){setClosed(false);}},[]);return (0,react.useMemo)(function(){return{isActive:!!announcementBar&&!isClosed,close:handleClose};},[isClosed]);};var AnnouncementBarContext=/*#__PURE__*/(0,react.createContext)(null);var AnnouncementBarProvider=function AnnouncementBarProvider(_ref){var children=_ref.children;var value=useAnnouncementBarContextValue();return/*#__PURE__*/react.createElement(AnnouncementBarContext.Provider,{value:value},children);};var useAnnouncementBar=function useAnnouncementBar(){var api=(0,react.useContext)(AnnouncementBarContext);if(!api){throw new Error('useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree');}return api;};
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocalPathname.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Get the pathname of current route, without the optional site baseUrl
// - /docs/myDoc => /docs/myDoc
// - /baseUrl/docs/myDoc => /docs/myDoc
function useLocalPathname(){var _useDocusaurusContext=(0,exports_useDocusaurusContext/* default */.Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;return pathname.replace(baseUrl,'/');}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(4973);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var translateTagsPageTitle=function translateTagsPageTitle(){return translate({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});};function getTagLetter(tag){return tag[0].toUpperCase();}function listTagsByLetters(tags){// Group by letters
var groups={};Object.values(tags).forEach(function(tag){var _a;var letter=getTagLetter(tag.name);groups[letter]=(_a=groups[letter])!==null&&_a!==void 0?_a:[];groups[letter].push(tag);});return Object.entries(groups)// Sort letters
.sort(function(_ref,_ref2){var _ref3=_slicedToArray(_ref,1),letter1=_ref3[0];var _ref4=_slicedToArray(_ref2,1),letter2=_ref4[0];return letter1.localeCompare(letter2);}).map(function(_ref5){var _ref6=_slicedToArray(_ref5,2),letter=_ref6[0],letterTags=_ref6[1];// Sort tags inside a letter
var sortedTags=letterTags.sort(function(tag1,tag2){return tag1.name.localeCompare(tag2.name);});return{letter:letter,tags:sortedTags};});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//*
Permits to register a handler that will be called on history actions (pop,push,replace)
If the handler returns false, the navigation transition will be blocked/cancelled
 */function useHistoryActionHandler(handler){var _useHistory=(0,react_router/* useHistory */.k6)(),block=_useHistory.block;// Avoid stale closure issues without triggering useless re-renders
var lastHandlerRef=(0,react.useRef)(handler);(0,react.useEffect)(function(){lastHandlerRef.current=handler;},[handler]);(0,react.useEffect)(function(){// See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
return block(function(location,action){return lastHandlerRef.current(location,action);});},[block,lastHandlerRef]);}/*
Permits to register a handler that will be called on history pop navigation (backward/forward)
If the handler returns false, the backward/forward transition will be blocked

Unfortunately there's no good way to detect the "direction" (backward/forward) of the POP event.
 */function useHistoryPopHandler(handler){useHistoryActionHandler(function(location,action){if(action==='POP'){// Eventually block navigation if handler returns false
return handler(location,action);}// Don't block other navigation actions
return undefined;});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//*
TODO make the hardcoded theme-classic classnames configurable
(or add them to ThemeClassNames?)
 */ // If the anchor has no height and is just a "marker" in the dom; we'll use the parent (normally the link text) rect boundaries instead
function getVisibleBoundingClientRect(element){var rect=element.getBoundingClientRect();var hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}// Considering we divide viewport into 2 zones of each 50vh
// This returns true if an element is in the first zone (ie, appear in viewport, near the top)
function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors(_ref){var minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;var selectors=[];for(var i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push("h".concat(i,".anchor"));}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,_ref2){var anchorTopOffset=_ref2.anchorTopOffset;var _a;// Naming is hard
// The "nextVisibleAnchor" is the first anchor that appear under the viewport top boundary
// Note: it does not mean this anchor is visible yet, but if user continues scrolling down, it will be the first to become visible
var nextVisibleAnchor=anchors.find(function(anchor){var boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){var boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider "active"
// (unless it's too close to the top and and soon to be scrolled outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport, we consider the active anchor is the previous one
// This is because the main text appearing in the user screen mostly belong to the previous anchor
else{// Returns null for the first anchor, see https://github.com/facebook/docusaurus/issues/5318
return(_a=anchors[anchors.indexOf(nextVisibleAnchor)-1])!==null&&_a!==void 0?_a:null;}}// no anchor under viewport top? (ie we are at the bottom of the page)
// => highlight the last anchor found
else{return anchors[anchors.length-1];}}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){var anchorTopOffsetRef=(0,react.useRef)(0);var _useThemeConfig=useThemeConfig(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;(0,react.useEffect)(function(){anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}function useTOCHighlight(config){var lastActiveLinkRef=(0,react.useRef)(undefined);var anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(function(){if(!config){// no-op, highlighting is disabled
return function(){};}var linkClassName=config.linkClassName,linkActiveClassName=config.linkActiveClassName,minHeadingLevel=config.minHeadingLevel,maxHeadingLevel=config.maxHeadingLevel;function updateLinkActiveClass(link,active){var _a;if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){(_a=lastActiveLinkRef.current)===null||_a===void 0?void 0:_a.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){var links=getLinks(linkClassName);var anchors=getAnchors({minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});var activeLink=links.find(function(link){return activeAnchor&&activeAnchor.id===getLinkAnchorValue(link);});links.forEach(function(link){updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return function(){document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}/* harmony default export */ var utils_useTOCHighlight = (useTOCHighlight);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function filterTOC(_ref){var toc=_ref.toc,minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(function(item){var filteredChildren=filterTOC({toc:item.children,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});if(isValid(item)){return[(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},item),{},{children:filteredChildren})];}else{return filteredChildren;}});}// Memoize potentially expensive filtering logic
function useTOCFilter(_ref2){var toc=_ref2.toc,minHeadingLevel=_ref2.minHeadingLevel,maxHeadingLevel=_ref2.maxHeadingLevel;return (0,react.useMemo)(function(){return filterTOC({toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});},[toc,minHeadingLevel,maxHeadingLevel]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useScrollControllerContextValue(){var scrollEventsEnabledRef=(0,react.useRef)(true);return (0,react.useMemo)(function(){return{scrollEventsEnabledRef:scrollEventsEnabledRef,enableScrollEvents:function enableScrollEvents(){scrollEventsEnabledRef.current=true;},disableScrollEvents:function disableScrollEvents(){scrollEventsEnabledRef.current=false;}};},[]);}var ScrollMonitorContext=/*#__PURE__*/(0,react.createContext)(undefined);function ScrollControllerProvider(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(ScrollMonitorContext.Provider,{value:useScrollControllerContextValue()},children);}function useScrollController(){var context=(0,react.useContext)(ScrollMonitorContext);if(context==null){throw new Error('"useScrollController" is used but no context provider was found in the React tree.');}return context;}var getScrollPosition=function getScrollPosition(){return ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;};function useScrollPosition(effect){var deps=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var _useScrollController=useScrollController(),scrollEventsEnabledRef=_useScrollController.scrollEventsEnabledRef;var lastPositionRef=(0,react.useRef)(getScrollPosition());var handleScroll=function handleScroll(){if(!scrollEventsEnabledRef.current){return;}var currentPosition=getScrollPosition();if(effect){effect(currentPosition,lastPositionRef.current);}lastPositionRef.current=currentPosition;};(0,react.useEffect)(function(){var opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return function(){return window.removeEventListener('scroll',handleScroll,opts);};},deps);}function useScrollPositionSaver(){var lastElementRef=useRef({elem:null,top:0});var save=useCallback(function(elem){lastElementRef.current={elem:elem,top:elem.getBoundingClientRect().top};},[]);var restore=useCallback(function(){var _lastElementRef$curre=lastElementRef.current,elem=_lastElementRef$curre.elem,top=_lastElementRef$curre.top;if(!elem){return{restored:false};}var newTop=elem.getBoundingClientRect().top;var heightDiff=newTop-top;if(heightDiff){window.scrollBy({left:0,top:heightDiff});}lastElementRef.current={elem:null,top:0};return{restored:heightDiff!==0};},[]);return useMemo(function(){return{save:save,restore:restore};},[]);}/**
 * This hook permits to "block" the scroll position of a dom element
 * The idea is that we should be able to update DOM content above this element
 * but the screen position of this element should not change
 *
 * Feature motivated by the Tabs groups:
 * clicking on a tab may affect tabs of the same group upper in the tree
 * Yet to avoid a bad UX, the clicked tab must remain under the user mouse!
 * See GIF here: https://github.com/facebook/docusaurus/pull/5618
 */function useScrollPositionBlocker(){var scrollController=useScrollController();var scrollPositionSaver=useScrollPositionSaver();var nextLayoutEffectCallbackRef=useRef(undefined);var blockElementScrollPositionUntilNextRender=useCallback(function(el){scrollPositionSaver.save(el);scrollController.disableScrollEvents();nextLayoutEffectCallbackRef.current=function(){var _scrollPositionSaver$=scrollPositionSaver.restore(),restored=_scrollPositionSaver$.restored;nextLayoutEffectCallbackRef.current=undefined;// Restoring the former scroll position will trigger a scroll event
// We need to wait for next scroll event to happen
// before enabling again the scrollController events
if(restored){var handleScrollRestoreEvent=function handleScrollRestoreEvent(){scrollController.enableScrollEvents();window.removeEventListener('scroll',handleScrollRestoreEvent);};window.addEventListener('scroll',handleScrollRestoreEvent);}else{scrollController.enableScrollEvents();}};},[scrollController]);useLayoutEffect(function(){var _a;(_a=nextLayoutEffectCallbackRef.current)===null||_a===void 0?void 0:_a.call(nextLayoutEffectCallbackRef);});return{blockElementScrollPositionUntilNextRender:blockElementScrollPositionUntilNextRender};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

/***/ 6010:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 2982:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _toConsumableArray; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(907);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}

/***/ })

}]);