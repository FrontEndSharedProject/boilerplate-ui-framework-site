"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[799], {
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
  4592:
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
      sidebar_position: 4,
      title: '文档内跳转'
    };
    var _contentTitle = undefined;
    var _metadata = {
      "unversionedId": "paths/use-link",
      "id": "paths/use-link",
      "isDocsHomePage": false,
      "title": "文档内跳转",
      "description": "例子",
      "source": "@site/docs/paths/use-link.mdx",
      "sourceDirName": "paths",
      "slug": "/paths/use-link",
      "permalink": "/boilerplate-ui-framework-site/docs/paths/use-link",
      "tags": [],
      "version": "current",
      "sidebarPosition": 4,
      "frontMatter": {
        "sidebar_position": 4,
        "title": "文档内跳转"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "在文档中显示图片",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/use-image"
      },
      "next": {
        "title": "适当的使用 apply",
        "permalink": "/boilerplate-ui-framework-site/docs/paths/apply"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: '例子',
      id: '例子',
      children: [],
      level: 2
    }, {
      value: '官方文档',
      id: '官方文档',
      children: [],
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
      .kt)("h2", {
        "id": "例子"
      }, "\u4F8B\u5B50"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__
      /* ["default"] */
      .Z, {
        to: "/",
        mdxType: "Link"
      }, "\u56DE\u5230\u9996\u9875"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("br", null), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__
      /* ["default"] */
      .Z, {
        to: "/docs/intro",
        mdxType: "Link"
      }, "\u56DE\u5230\u4ECB\u7ECD\u9875"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("pre", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-mdxjs"
      }, "import Link from \"@docusaurus/Link\";\n\n<Link to=\"/\">\u56DE\u5230\u9996\u9875</Link>\n<Link to=\"/docs/intro\">\u56DE\u5230\u4ECB\u7ECD\u9875</Link>\n")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "官方文档"
      }, "\u5B98\u65B9\u6587\u6863"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://docusaurus.io/zh-CN/docs/docusaurus-core#link"
      }, "https://docusaurus.io/zh-CN/docs/docusaurus-core#link")));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);