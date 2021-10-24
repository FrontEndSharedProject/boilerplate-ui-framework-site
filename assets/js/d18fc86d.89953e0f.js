"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[306], {
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
  6742:
  /***/
  function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      "Z": function Z() {
        return (
          /* binding */
          exports_Link
        );
      }
    }); // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js


    var objectWithoutPropertiesLoose = __webpack_require__(3366); // EXTERNAL MODULE: ./node_modules/react/index.js


    var react = __webpack_require__(7294); // EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js


    var react_router_dom = __webpack_require__(3727); // EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js


    var useDocusaurusContext = __webpack_require__(2263); // EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js


    var isInternalUrl = __webpack_require__(3919); // EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js


    var ExecutionEnvironment = __webpack_require__(412);

    ; // CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/LinksCollector.js

    /**
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var createStatefulLinksCollector = function createStatefulLinksCollector() {
      // Set to dedup, as it's not useful to collect multiple times the same link
      var allLinks = new Set();
      return {
        collectLink: function collectLink(link) {
          allLinks.add(link);
        },
        getCollectedLinks: function getCollectedLinks() {
          return [].concat(allLinks);
        }
      };
    };

    var Context = /*#__PURE__*/(0, react.createContext)({
      collectLink: function collectLink() {// noop by default for client
        // we only use the broken links checker server-side
      }
    });

    var useLinksCollector = function useLinksCollector() {
      return (0, react.useContext)(Context);
    };

    var ProvideLinksCollector = function ProvideLinksCollector(_ref) {
      var children = _ref.children,
          linksCollector = _ref.linksCollector;
      return /*#__PURE__*/React.createElement(Context.Provider, {
        value: linksCollector
      }, children);
    }; // EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js


    var useBaseUrl = __webpack_require__(4996); // EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js


    var lib = __webpack_require__(8780);

    ; // CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js

    var _excluded = ["isNavLink", "to", "href", "activeClassName", "isActive", "data-noBrokenLinkCheck", "autoAddBaseUrl"];
    /**
    * Copyright (c) Facebook, Inc. and its affiliates.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    */
    // TODO all this wouldn't be necessary if we used ReactRouter basename feature
    // We don't automatically add base urls to all links,
    // only the "safe" ones, starting with / (like /docs/introduction)
    // this is because useBaseUrl() actually transforms relative links
    // like "introduction" to "/baseUrl/introduction" => bad behavior to fix

    var shouldAddBaseUrlAutomatically = function shouldAddBaseUrlAutomatically(to) {
      return to.startsWith('/');
    };

    function Link(_ref) {
      var isNavLink = _ref.isNavLink,
          to = _ref.to,
          href = _ref.href,
          activeClassName = _ref.activeClassName,
          isActive = _ref.isActive,
          noBrokenLinkCheck = _ref['data-noBrokenLinkCheck'],
          _ref$autoAddBaseUrl = _ref.autoAddBaseUrl,
          autoAddBaseUrl = _ref$autoAddBaseUrl === void 0 ? true : _ref$autoAddBaseUrl,
          props = (0, objectWithoutPropertiesLoose
      /* default */
      .Z)(_ref, _excluded);

      var _a;

      var _useDocusaurusContext = (0, useDocusaurusContext
      /* default */
      .Z)(),
          _useDocusaurusContext2 = _useDocusaurusContext.siteConfig,
          trailingSlash = _useDocusaurusContext2.trailingSlash,
          baseUrl = _useDocusaurusContext2.baseUrl;

      var _useBaseUrlUtils = (0, useBaseUrl
      /* useBaseUrlUtils */
      .C)(),
          withBaseUrl = _useBaseUrlUtils.withBaseUrl;

      var linksCollector = useLinksCollector(); // IMPORTANT: using to or href should not change anything
      // For example, MDX links will ALWAYS give us the href props
      // Using one prop or the other should not be used to distinguish
      // internal links (/docs/myDoc) from external links (https://github.com)

      var targetLinkUnprefixed = to || href;

      function maybeAddBaseUrl(str) {
        return autoAddBaseUrl && shouldAddBaseUrlAutomatically(str) ? withBaseUrl(str) : str;
      }

      var isInternal = (0, isInternalUrl
      /* default */
      .Z)(targetLinkUnprefixed); // pathname:// is a special "protocol" we use to tell Docusaurus link
      // that a link is not "internal" and that we shouldn't use history.push()
      // this is not ideal but a good enough escape hatch for now
      // see https://github.com/facebook/docusaurus/issues/3309
      // note: we want baseUrl to be appended (see issue for details)
      // TODO read routes and automatically detect internal/external links?

      var targetLinkWithoutPathnameProtocol = targetLinkUnprefixed === null || targetLinkUnprefixed === void 0 ? void 0 : targetLinkUnprefixed.replace('pathname://', ''); // TODO we should use ReactRouter basename feature instead!
      // Automatically apply base url in links that start with /

      var targetLink = typeof targetLinkWithoutPathnameProtocol !== 'undefined' ? maybeAddBaseUrl(targetLinkWithoutPathnameProtocol) : undefined;

      if (targetLink && isInternal) {
        targetLink = (0, lib.applyTrailingSlash)(targetLink, {
          trailingSlash: trailingSlash,
          baseUrl: baseUrl
        });
      }

      var preloaded = (0, react.useRef)(false);
      var LinkComponent = isNavLink ? react_router_dom
      /* NavLink */
      .OL : react_router_dom
      /* Link */
      .rU;
      var IOSupported = ExecutionEnvironment
      /* default.canUseIntersectionObserver */
      .Z.canUseIntersectionObserver;
      var ioRef = (0, react.useRef)();

      var handleIntersection = function handleIntersection(el, cb) {
        ioRef.current = new window.IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (el === entry.target) {
              // If element is in viewport, stop listening/observing and run callback.
              // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                ioRef.current.unobserve(el);
                ioRef.current.disconnect();
                cb();
              }
            }
          });
        }); // Add element to the observer.

        ioRef.current.observe(el);
      };

      var handleRef = function handleRef(ref) {
        if (IOSupported && ref && isInternal) {
          // If IO supported and element reference found, setup Observer functionality.
          handleIntersection(ref, function () {
            if (targetLink != null) {
              window.docusaurus.prefetch(targetLink);
            }
          });
        }
      };

      var onMouseEnter = function onMouseEnter() {
        if (!preloaded.current && targetLink != null) {
          window.docusaurus.preload(targetLink);
          preloaded.current = true;
        }
      };

      (0, react.useEffect)(function () {
        // If IO is not supported. We prefetch by default (only once).
        if (!IOSupported && isInternal) {
          if (targetLink != null) {
            window.docusaurus.prefetch(targetLink);
          }
        } // When unmounting, stop intersection observer from watching.


        return function () {
          if (IOSupported && ioRef.current) {
            ioRef.current.disconnect();
          }
        };
      }, [ioRef, targetLink, IOSupported, isInternal]);
      var isAnchorLink = (_a = targetLink === null || targetLink === void 0 ? void 0 : targetLink.startsWith('#')) !== null && _a !== void 0 ? _a : false;
      var isRegularHtmlLink = !targetLink || !isInternal || isAnchorLink;

      if (targetLink && isInternal && !isAnchorLink && !noBrokenLinkCheck) {
        linksCollector.collectLink(targetLink);
      }

      return isRegularHtmlLink ?
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      react.createElement("a", Object.assign({
        href: targetLink
      }, targetLinkUnprefixed && !isInternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      }, props)) : /*#__PURE__*/react.createElement(LinkComponent, Object.assign({}, props, {
        onMouseEnter: onMouseEnter,
        innerRef: handleRef,
        to: targetLink || ''
      }, isNavLink && {
        isActive: isActive,
        activeClassName: activeClassName
      }));
    }
    /* harmony default export */


    var exports_Link = Link;
    /***/
  },

  /***/
  3919:
  /***/
  function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */
      "b": function b() {
        return (
          /* binding */
          hasProtocol
        );
      },

      /* harmony export */
      "Z": function Z() {
        return (
          /* binding */
          isInternalUrl
        );
      }
      /* harmony export */

    });
    /**
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */


    function hasProtocol(url) {
      return /^(\w*:|\/\/)/.test(url) === true;
    }

    function isInternalUrl(url) {
      return typeof url !== 'undefined' && !hasProtocol(url);
    }
    /***/

  },

  /***/
  4996:
  /***/
  function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */
      "C": function C() {
        return (
          /* binding */
          useBaseUrlUtils
        );
      },

      /* harmony export */
      "Z": function Z() {
        return (
          /* binding */
          useBaseUrl
        );
      }
      /* harmony export */

    });
    /* harmony import */


    var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2263);
    /* harmony import */


    var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3919);
    /**
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */


    function addBaseUrl(siteUrl, baseUrl, url, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$forcePrependBase = _ref.forcePrependBaseUrl,
          forcePrependBaseUrl = _ref$forcePrependBase === void 0 ? false : _ref$forcePrependBase,
          _ref$absolute = _ref.absolute,
          absolute = _ref$absolute === void 0 ? false : _ref$absolute;

      if (!url) {
        return url;
      } // it never makes sense to add a base url to a local anchor url


      if (url.startsWith('#')) {
        return url;
      } // it never makes sense to add a base url to an url with a protocol


      if ((0, _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__
      /* .hasProtocol */
      .b)(url)) {
        return url;
      }

      if (forcePrependBaseUrl) {
        return baseUrl + url;
      } // We should avoid adding the baseurl twice if it's already there


      var shouldAddBaseUrl = !url.startsWith(baseUrl);
      var basePath = shouldAddBaseUrl ? baseUrl + url.replace(/^\//, '') : url;
      return absolute ? siteUrl + basePath : basePath;
    }

    function useBaseUrlUtils() {
      var _useDocusaurusContext = (0, _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__
      /* ["default"] */
      .Z)(),
          _useDocusaurusContext2 = _useDocusaurusContext.siteConfig;

      _useDocusaurusContext2 = _useDocusaurusContext2 === void 0 ? {} : _useDocusaurusContext2;
      var _useDocusaurusContext3 = _useDocusaurusContext2.baseUrl,
          baseUrl = _useDocusaurusContext3 === void 0 ? '/' : _useDocusaurusContext3,
          siteUrl = _useDocusaurusContext2.url;
      return {
        withBaseUrl: function withBaseUrl(url, options) {
          return addBaseUrl(siteUrl, baseUrl, url, options);
        }
      };
    }

    function useBaseUrl(url, options) {
      if (options === void 0) {
        options = {};
      }

      var _useBaseUrlUtils = useBaseUrlUtils(),
          withBaseUrl = _useBaseUrlUtils.withBaseUrl;

      return withBaseUrl(url, options);
    }
    /***/

  },

  /***/
  8802:
  /***/
  function _(__unused_webpack_module, exports) {
    /**
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Object.defineProperty(exports, "__esModule", {
      value: true
    }); // Trailing slash handling depends in some site configuration options

    function applyTrailingSlash(path, options) {
      var trailingSlash = options.trailingSlash,
          baseUrl = options.baseUrl;

      if (path.startsWith('#')) {
        // Never apply trailing slash to an anchor link
        return path;
      } // TODO deduplicate: also present in @docusaurus/utils


      function addTrailingSlash(str) {
        return str.endsWith('/') ? str : str + "/";
      }

      function removeTrailingSlash(str) {
        return str.endsWith('/') ? str.slice(0, -1) : str;
      }

      function handleTrailingSlash(str, trailing) {
        return trailing ? addTrailingSlash(str) : removeTrailingSlash(str);
      } // undefined = legacy retrocompatible behavior


      if (typeof trailingSlash === 'undefined') {
        return path;
      } // The trailing slash should be handled before the ?search#hash !


      var _path$split = path.split(/[#?]/),
          pathname = _path$split[0]; // Never transform '/' to ''
      // Never remove the baseUrl trailing slash!
      // If baseUrl = /myBase/, we want to emit /myBase/index.html and not /myBase.html !
      // See https://github.com/facebook/docusaurus/issues/5077


      var shouldNotApply = pathname === '/' || pathname === baseUrl;
      var newPathname = shouldNotApply ? pathname : handleTrailingSlash(pathname, trailingSlash);
      return path.replace(pathname, newPathname);
    }

    exports["default"] = applyTrailingSlash;
    /***/
  },

  /***/
  8780:
  /***/
  function _(__unused_webpack_module, exports, __webpack_require__) {
    /**
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.uniq = exports.applyTrailingSlash = void 0;

    var applyTrailingSlash_1 = __webpack_require__(8802);

    Object.defineProperty(exports, "applyTrailingSlash", {
      enumerable: true,
      get: function get() {
        return __importDefault(applyTrailingSlash_1).default;
      }
    });

    var uniq_1 = __webpack_require__(9964);

    Object.defineProperty(exports, "uniq", {
      enumerable: true,
      get: function get() {
        return __importDefault(uniq_1).default;
      }
    });
    /***/
  },

  /***/
  9964:
  /***/
  function _(__unused_webpack_module, exports) {
    /**
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Object.defineProperty(exports, "__esModule", {
      value: true
    }); // Remove duplicate array items (similar to _.uniq)

    function uniq(array) {
      // Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
      return Array.from(new Set(array));
    }

    exports["default"] = uniq;
    /***/
  },

  /***/
  8082:
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


    var _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
    /* harmony import */


    var _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);
    /* harmony import */


    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */


    var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
    /* harmony import */


    var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6742);

    var _excluded = ["components"];
    var _frontMatter = {
      sidebar_position: 1,
      title: '创建一个组件'
    };
    var _contentTitle = '创建一个组件';
    var _metadata = {
      "unversionedId": "paths/create-a-component",
      "id": "paths/create-a-component",
      "isDocsHomePage": false,
      "title": "创建一个组件",
      "description": "创建对应文档页面",
      "source": "@site/docs/paths/create-a-component.mdx",
      "sourceDirName": "paths",
      "slug": "/paths/create-a-component",
      "permalink": "/boilerplate-ui-framework-site/docs/paths/create-a-component",
      "tags": [],
      "version": "current",
      "sidebarPosition": 1,
      "frontMatter": {
        "sidebar_position": 1,
        "title": "创建一个组件"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "介绍",
        "permalink": "/boilerplate-ui-framework-site/docs/intro"
      },
      "next": {
        "title": "使用线上的资源文件",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/use-remote-source"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: '创建对应文档页面',
      id: '创建对应文档页面',
      children: [{
        value: '创建文件',
        id: '创建文件',
        children: [],
        level: 3
      }],
      level: 2
    }, {
      value: '创建 React 组件(用于渲染 DOM 展示给用户看)',
      id: '创建-react-组件用于渲染-dom-展示给用户看',
      children: [{
        value: '创建文件',
        id: '创建文件-1',
        children: [],
        level: 3
      }],
      level: 2
    }, {
      value: '创建用于文档的 scss 文件',
      id: '创建用于文档的-scss-文件',
      children: [{
        value: '创建文件',
        id: '创建文件-2',
        children: [],
        level: 3
      }, {
        value: '引用',
        id: '引用',
        children: [],
        level: 3
      }],
      level: 2
    }, {
      value: '创建 UI 组件库中的 scss 文件',
      id: '创建-ui-组件库中的-scss-文件',
      children: [{
        value: '创建文件',
        id: '创建文件-3',
        children: [],
        level: 3
      }, {
        value: '注意',
        id: '注意',
        children: [],
        level: 3
      }, {
        value: '引用',
        id: '引用-1',
        children: [],
        level: 3
      }],
      level: 2
    }, {
      value: '创建 UI 库对应的 JS 逻辑代码',
      id: '创建-ui-库对应的-js-逻辑代码',
      children: [{
        value: '创建文件',
        id: '创建文件-4',
        children: [],
        level: 3
      }, {
        value: '注意事项',
        id: '注意事项',
        children: [],
        level: 3
      }, {
        value: '引用及调用',
        id: '引用及调用',
        children: [],
        level: 3
      }],
      level: 2
    }, {
      value: '总结',
      id: '总结',
      children: [{
        value: '引用关系',
        id: '引用关系',
        children: [],
        level: 3
      }, {
        value: '注意事项',
        id: '注意事项-1',
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
          props = (0, _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__
      /* ["default"] */
      .Z)(_ref, _excluded);
      return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(MDXLayout, (0, _home_runner_work_boilerplate_ui_framework_boilerplate_ui_framework_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__
      /* ["default"] */
      .Z)({}, layoutProps, props, {
        components: components,
        mdxType: "MDXLayout"
      }), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h1", {
        "id": "创建一个组件"
      }, "\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "创建对应文档页面"
      }, "\u521B\u5EFA\u5BF9\u5E94\u6587\u6863\u9875\u9762"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4EE5\u4E0B\u6211\u4EEC\u5047\u8BBE\u8981\u521B\u5EFA\u4E00\u4E2A", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "\u5E26\u70B9\u51FB\u4E8B\u4EF6\u7684 Card")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "创建文件"
      }, "\u521B\u5EFA\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5728 docs \u76EE\u5F55\u4E0B\u521B\u5EFA\u5BF9\u5E94 md \u6587\u4EF6, \u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528\u5230 React \u5904\u7406 Dom \u7ED3\u6784, \u8BF7\u521B\u5EFA ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__
      /* ["default"] */
      .Z, {
        to: "/docs/advance/mdx",
        mdxType: "Link"
      }, "mdx \u6587\u4EF6")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
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
      }, "\u5982\u679C\u4F60\u4EC5\u4EC5\u662F\u7F16\u5199\u6587\u6863, \u800C\u4E0D\u9700\u8981\u4F7F\u7528 React \u5904\u7406 Dom \u8282\u70B9\u7684\u8BDD, \u4F7F\u7528 .md \u6587\u4EF6\u4E5F\u53EF\u4EE5"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__
      /* ["default"] */
      .Z, {
        to: "/docs/advance/standard",
        mdxType: "Link"
      }, "\u6587\u4EF6\u521B\u5EFA\u8BF7\u9075\u5FAA\u547D\u540D\u89C4\u5219"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-mdxjs",
        "metastring": "title=\"docs/components/card.mdx\"",
        "title": "\"docs/components/card.mdx\""
      }, "---\nsidebar_position: 1\ntitle: Card \u7EC4\u4EF6\n---\n\n\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u4E66\u5199 html \u4EE3\u7801 (\u6CE8\u610F\u5FC5\u987B\u662F jsx \u8BED\u6CD5\u7684 html \u4EE3\u7801)\n\u5982:\n<section className=\"v-card\">.....</section>\n\n\u4E66\u5199\u5C55\u793A\u7ED9\u7528\u6237\u7684\u4EE3\u7801\u5757. \u8FD9\u91CC\u9700\u8981\u6CE8\u610F, \u5C55\u793A\u7ED9\u7528\u6237\u7684\u4EE3\u7801\u5757, \u8BF7\u4E0D\u8981\u4F7F\u7528 jsx \u8BED\u6CD5!\n\\```html\n<section class=\"v-card\">.....</section>\n\\```\n\n\u5F53\u7136\u5448\u73B0\u7ED9\u7528\u6237\u7528\u4E8E\u6F14\u793A\u7684 DOM \u7ED3\u6784\u53EF\u4EE5\u901A\u8FC7 React \u7EC4\u4EF6\u751F\u6210, \u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\n(\u4E0B\u9762\u4F1A\u63D0\u5230\u5982\u4F55\u521B\u5EFA React \u7EC4\u4EF6)\n\n\u5982\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\nimport { Card, CardData } from \"@/components/Card\";\nconst cardItem = CardData[0];\n\n<section className=\"tw\">\n  <Card\n    title={cardItem.title}\n    info={cardItem.info}\n    poster={cardItem.poster}\n    tags={cardItem.tags}\n  />\n</section>\n\n\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728\u6587\u6863\u8FD0\u884C UI \u7EC4\u4EF6\u7684 JS \u4EE3\u7801\u90E8\u5206 (\u4E0B\u9762\u4F1A\u63D0\u5230)\n\n# \u5F3A\u70C8\u5EFA\u8BAE\u9605\u8BFB\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\n/docs/components/Card/index.mdx\n\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "创建-react-组件用于渲染-dom-展示给用户看"
      }, "\u521B\u5EFA React \u7EC4\u4EF6(\u7528\u4E8E\u6E32\u67D3 DOM \u5C55\u793A\u7ED9\u7528\u6237\u770B)"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
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
      }, "\u5982\u679C\u4F60\u7684\u7EC4\u4EF6 DOM \u7ED3\u6784\u53CA\u5176\u7684\u7B80\u5355, \u4E0D\u9700\u8981 JS \u903B\u8F91\u5904\u7406, \u5C31\u53EF\u4EE5\u5C55\u793A\u7ED9\u7528\u6237, \u90A3\u4E48\u8FD9\u4E00\u6B65\u4F60\u5927\u53EF\u8DF3\u8FC7"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u65B0\u5EFA\u4E00\u4E2A Card \u5BF9\u5E94\u7684 React \u7EC4\u4EF6,"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u4E3B\u8981\u662F\u63D0\u4F9B React \u7EC4\u4EF6\u7ED9 mdx \u6587\u6863\u4E2D\u8C03\u7528\u540E, \u5C55\u793A\u7ED9\u7528\u6237\u770B\u7684."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "创建文件-1"
      }, "\u521B\u5EFA\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6211\u4EEC\u6765\u521B\u5EFA\u8FD9\u4E2A\u6587\u4EF6 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "src/components/Card/index.tsx")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-tsx",
        "metastring": "title=\"src/components/Card/index.tsx\"",
        "title": "\"src/components/Card/index.tsx\""
      }, "//  \u5F3A\u70C8\u5EFA\u8BAE\u9605\u8BFB\u8BE5\u6587\u4EF6\u6E90\u7801\n\n//  \u4F60\u53EF\u4EE5\u5728\u6B64\u5904\u6A21\u62DF\u6570\u636E, \u65B9\u4FBF\u5728\u6587\u6863\u4E2D\u904D\u5386\u6570\u636E\u51FA\u6765\nexport const CardData: Card[] = new Array(4)\n  .fill(\"\")\n  .map((value, key): Card => {\n    return {\n      title: `\u6807\u9898${key}`,\n      info: `\u63CF\u8FF0${key}`,\n      poster: `https://tailwindcss.com/img/card-top.jpg`,\n      tags: [`Tag${key}`, `TAG-next${key}`],\n    };\n  });\n\n//  \u4E5F\u53EF\u4EE5\u5728\u6B64\u5904\u7F16\u5199 function \u7EC4\u4EF6\n//  https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components\nexport const Card = ({ title, info, poster, tags, showBtn, index }) => {\n  return (\n    //  ... html \u4EE3\u7801\n  );\n};\n\n//  \u4E5F\u53EF\u4EE5\u7F16\u5199 class \u7EC4\u4EF6\nexport class CardList extends React.Component<props,state> {\n\n  render() {\n    return (\n     // ... html \u4EE3\u7801\n    );\n  }\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "创建用于文档的-scss-文件"
      }, "\u521B\u5EFA\u7528\u4E8E\u6587\u6863\u7684 scss \u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        "className": "admonition admonition-caution alert alert--warning"
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
        "width": "16",
        "height": "16",
        "viewBox": "0 0 16 16"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("path", {
        parentName: "svg",
        "fillRule": "evenodd",
        "d": "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
      }))), "caution")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u8BE5\u6587\u4EF6\u4E3A\u53EF\u9009\u9879, \u5982\u679C\u4F60\u60F3\u63A7\u5236 UI \u7EC4\u4EF6\u5728\u6587\u6863\u4E2D\u5C55\u73B0\u7684\u6548\u679C\u65F6, \u624D\u9700\u8981\u8BE5\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u6BD4\u5982, \u6211\u4EEC\u60F3 UI \u7EC4\u4EF6\u5728\u6587\u6863\u4E2D\u5C55\u73B0\u7684\u540C\u65F6, \u5C06\u5176\u7236\u7EA7\u7684 container \u52A0\u4E2A\u8FB9\u6846"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u6216\u8005\u52A0\u4E2A\u80CC\u666F\u8272, \u53C8\u6216\u8005\u8C03\u6574\u4E0B\u5BBD\u5EA6, \u90FD\u53EF\u4EE5\u518D\u8BE5\u6587\u4EF6\u4E2D\u5904\u7406"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "创建文件-2"
      }, "\u521B\u5EFA\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6211\u4EEC\u6765\u521B\u5EFA\u8FD9\u4E2A\u6587\u4EF6 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "src/components/Card/style.scss")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-scss",
        "metastring": "title=\"src/components/Card/style.scss\"",
        "title": "\"src/components/Card/style.scss\""
      }, "//  \u6CE8\u610F\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u7684\u6837\u5F0F, \u4E0D\u4F1A\u5305\u542B\u5728\u6253\u5305\u540E\u7684 UI \u7EC4\u4EF6\u5E93\u4E2D\n//  \u5B83\u53EA\u80FD\u5F71\u54CD \u6587\u6863\u4E2D \u7684\u5448\u73B0\u5F62\u5F0F\n.card-list {\n  border: 1px solid #f20 !important;\n  //  \u5728\u8FD9\u91CC, \u4F60\u4E5F\u53EF\u4EE5\u7528 Tailwind \u63D0\u4F9B\u7684 utilities\n  @apply bg-white;\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "引用"
      }, "\u5F15\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u7136\u540E\u8BA9\u6211\u4EEC\u5728\u4E0B\u9762\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u5F15\u7528\u5B83"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-tsx",
        "metastring": "title=\"src/components/Card/index.tsx\"",
        "title": "\"src/components/Card/index.tsx\""
      }, "import \"./style.scss\";\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "创建-ui-组件库中的-scss-文件"
      }, "\u521B\u5EFA UI \u7EC4\u4EF6\u5E93\u4E2D\u7684 scss \u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
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
      }, "\u6B64\u6587\u4EF6\u975E\u5FC5\u987B"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u5982\u679C\u6211\u4EEC\u80FD\u4F7F\u7528 tailwind \u5B9E\u73B0 UI, \u90A3\u4E48\u5C31\u5C3D\u91CF\u4F7F\u7528 tailwind"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u5982\u679C\u5B9E\u5728\u9047\u5230\u89E3\u51B3\u4E0D\u4E86\u7684 UI \u9700\u6C42, \u5219\u53EF\u4EE5\u521B\u5EFA\u8FD9\u4E2A\u95EE\u9898"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u4F1A\u5305\u542B\u5728 UI \u7EC4\u4EF6\u5E93\u6253\u5305\u540E\u7684\u6587\u4EF6\u5F53\u4E2D"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "创建文件-3"
      }, "\u521B\u5EFA\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6211\u4EEC\u65B0\u5EFA Card \u5BF9\u5E94\u7684 scss \u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/scss/components/Card.scss")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-scss",
        "metastring": "title=\"UI/scss/components/Card.scss\"",
        "title": "\"UI/scss/components/Card.scss\""
      }, ".v-card {\n  border: 1px solid #000 !important;\n  @apply bg-gray-200;\n\n  &:hover {\n    @apply bg-black;\n    @apply text-white;\n  }\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "注意"
      }, "\u6CE8\u610F"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, " \u521B\u5EFA\u7684 UI \u7EC4\u4EF6 scss \u4EE3\u7801, \u9700\u8981\u5728\u540C\u7EA7\u76EE\u5F55\u7684 index.scss \u4E2D\u5F15\u7528 ")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "引用-1"
      }, "\u5F15\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8FD9\u4E00\u6B65\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9 UI \u7EC4\u4EF6\u5E93\u6253\u5305\u65F6\u5305\u542B\u8BE5\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-scss",
        "metastring": "title=\"/UI/scss/components/index.scss\"",
        "title": "\"/UI/scss/components/index.scss\""
      }, "@import \"Card\";\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "创建-ui-库对应的-js-逻辑代码"
      }, "\u521B\u5EFA UI \u5E93\u5BF9\u5E94\u7684 JS \u903B\u8F91\u4EE3\u7801"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
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
      }, "\u6B64\u6587\u4EF6\u975E\u5FC5\u987B \u5982\u679C\u6CA1\u6709 JS \u903B\u8F91\u5219\u4E0D\u9700\u8981\u521B\u5EFA\u8BE5\u6587\u4EF6"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u4F1A\u5305\u542B\u5728 UI \u7EC4\u4EF6\u5E93\u6253\u5305\u540E\u7684\u6587\u4EF6\u5F53\u4E2D"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "创建文件-4"
      }, "\u521B\u5EFA\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6211\u4EEC\u6765\u521B\u5EFA\u8FD9\u4E2A\u6587\u4EF6 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/js/compoments/Card/index.ts")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-typescript",
        "metastring": "title=\"UI/js/compoments/Card/index.ts\"",
        "title": "\"UI/js/compoments/Card/index.ts\""
      }, "export function handleCard(el: HTMLDivElement): void {\n  //  js \u4EE3\u7801\u903B\u8F91\n  //  \u8FD9\u91CC\u4F60\u53EF\u4EE5\u521B\u5EFA class, \u4E5F\u53EF\u4EE5\u7528 function \u7B80\u5355\u5904\u7406\n  //  \u6700\u540E\u53EA\u9700\u8981\u628A\u4E1A\u52A1\u903B\u8F91\u4EE3\u7801\u66B4\u9732\u51FA\u53BB\u5373\u53EF\n}\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "注意事项"
      }, "\u6CE8\u610F\u4E8B\u9879"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("strong", {
        parentName: "p"
      }, " \u521B\u5EFA\u5B8C\u8BE5\u6587\u4EF6\u540E\u6211\u4EEC\u9700\u8981\u5728\u4E24\u4E2A\u5730\u65B9\u5F15\u7528\u5B83 ")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "引用及调用"
      }, "\u5F15\u7528\u53CA\u8C03\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u9996\u5148\u6211\u4EEC\u6765\u5230\u540C\u7EA7\u76EE\u5F55\u4E0B\u7684, \u6DFB\u52A0\u5F15\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8FD9\u4E00\u6B65\u7684\u76EE\u7684\u662F\u8BA9 Card \u6253\u5305\u5728 UI \u7EC4\u4EF6\u5E93\u4E2D"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/js/compoments/index.ts")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-typescript",
        "metastring": "title=\"UI/js/compoments/index.ts\"",
        "title": "\"UI/js/compoments/index.ts\""
      }, "//  \u6539\u884C\u4EE3\u7801\u5C06 Card \u6587\u4EF6\u4E2D\u6240\u6709\u7684 export \u518D\u6B21\u5BFC\u51FA\u51FA\u53BB\n//  \u8FD9\u6837\u7528\u6237\u53EA\u9700\u8981\u5F15\u7528 @UI \u5373\u53EF\u83B7\u53D6\u6240\u6709\u5E93\n//  \u8FD9\u91CC\u662F esmodule \u77E5\u8BC6\nexport * from \"./Card\";\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 \"\u6587\u6863\u4E2D\" \u8C03\u7528\u521A\u521A\u6211\u4EEC\u5199\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "handleCard"), " \u65B9\u6CD5,"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5C55\u73B0\u7ED9\u7528\u6237 JS \u6267\u884C\u540E\u7684\u6548\u679C"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6211\u4EEC\u6765\u5230\u8FD9\u4E2A\u6587\u4EF6\u4E2D ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "src/components/Card/index.tsx")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u6DFB\u52A0\u5F15\u7528\u4E0E\u8C03\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-tsx",
        "metastring": "title=\"src/components/Card/index.tsx\"",
        "title": "\"src/components/Card/index.tsx\""
      }, "import { handleCard } from \"@UI\";\n\n//  \u5F3A\u70C8\u5EFA\u8BAE\u67E5\u770B\u6E90\u4EE3\u7801\n\n//  \u5728 class \u7EC4\u4EF6\u4E2D\u8C03\u7528\nexport class CardList extends React.Component<props, state> {\n  protected box: RefObject<HTMLDivElement>;\n\n  constructor(props) {\n    super(props);\n\n    //  \u4E0E vue \u4E0D\u540C, \u5982\u679C\u8981\u4FDD\u5B58 ref \u6211\u4EEC\u9700\u8981\u5148\u5B9E\u4F8B\u5316\u4E00\u4E2A ref \u5BF9\u8C61\n    this.box = React.createRef();\n  }\n\n  //  \u8BE5\u65B9\u6CD5\u76F8\u5F53\u4E8E vue \u7684 mount \u751F\u547D\u5468\u671F\u4E8B\u4EF6\n  componentDidMount() {\n    //  \u8C03\u7528 UI \u7EC4\u4EF6\u5E93\n    handleCard(this.box.current);\n  }\n\n  render() {\n    return <div ref={this.box} />;\n  }\n}\n\n//  \u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728 function \u7EC4\u4EF6\u4E2D\u8C03\u7528\n//  \u8FD9\u91CC\u5C31\u4E0D\u8BE6\u7EC6\u4ECB\u7ECD\u4E86, \u5982\u679C\u7528\u8FC7 vue3 \u7684\u8BDD,\n//  \u8FD9\u79CD functional \u7684\u5199\u6CD5\u5E94\u8BE5\u662F\u518D\u719F\u6089\u4E0D\u8FC7\u4E86\nexport const Card = ({ title, info, poster, tags, showBtn, index }) => {\n  const box = useRef(null);\n\n  useEffect(() => {\n    handleCard(box.current);\n\n    return () => {\n      //  destroy event\n    };\n  });\n\n  return <div ref={box}></div>;\n};\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "总结"
      }, "\u603B\u7ED3"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u6211\u4EEC\u8981\u521B\u5EFA\u4E00\u4E2A ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "card"), " UI \u7EC4\u4EF6, \u90A3\u4E48\u53EF\u80FD\u4F1A\u9700\u8981\u4EE5\u4E0B 5 \u4E2A\u6587\u4EF6,"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "(\u5176\u4E2D\u90E8\u5206\u662F\u53EF\u9009\u7684)"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("ol", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "docs/components/card.mdx"), " (\u5FC5\u987B)"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "src/components/Card/index.tsx"), " (\u5982\u679C\u6587\u6863\u4E2D\u7684 DOM \u7ED3\u6784\u7B80\u5355\u65F6 \u4E0D\u9700\u8981)"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "src/components/Card/style.scss"), " (\u5982\u679C\u4E0D\u9700\u8981\u9488\u5BF9 \u6587\u6863 \u8FDB\u884C\u6837\u5F0F\u5904\u7406\u7684\u8BDD \u4E0D\u9700\u8981)"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "UI/scss/components/Card.scss"), " (\u5982\u679C Tailwind \u80FD\u89E3\u51B3 UI \u9700\u6C42\u7684\u8BDD \u4E0D\u9700\u8981)"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "UI/js/compoments/Card/index.ts"), " (\u5982\u679C\u6CA1\u6709 Js \u4E1A\u52A1\u903B\u8F91\u7684\u8BDD \u4E0D\u9700\u8981)")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("br", null), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "引用关系"
      }, "\u5F15\u7528\u5173\u7CFB"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("ol", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "docs/components/card.mdx"), " \u4E2D")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5F15\u7528 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "src/components/Card/index.tsx")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("ol", {
        "start": 2
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "src/components/Card/index.tsx"), " \u4E2D")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5F15\u7528 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "src/components/Card/style.scss"), "\n\u5F15\u7528 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/js/compoments/Card/index.ts")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h3", {
        "id": "注意事项-1"
      }, "\u6CE8\u610F\u4E8B\u9879"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("ol", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, "\u521B\u5EFA\u7684 UI \u7EC4\u4EF6 scss \u4EE3\u7801, \u9700\u8981\u5728\u540C\u7EA7\u76EE\u5F55\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "UI/scss/compoments/index.scss"), " \u4E2D\u5F15\u7528"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("li", {
        parentName: "ol"
      }, "\u521B\u5EFA\u7684 UI \u7EC4\u4EF6 JS \u4EE3\u7801, \u9700\u8981\u5728 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "li"
      }, "UI/js/compoments/index.ts"), " \u6587\u4EF6\u4E2D\u5F15\u7528")));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);