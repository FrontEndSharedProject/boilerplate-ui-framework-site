"use strict";

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[445], {
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
  5064:
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
      sidebar_position: 9,
      title: '配置文件详解'
    };
    var _contentTitle = undefined;
    var _metadata = {
      "unversionedId": "advance/config-files",
      "id": "advance/config-files",
      "isDocsHomePage": false,
      "title": "配置文件详解",
      "description": "tsconfig.json",
      "source": "@site/docs/advance/config-files.mdx",
      "sourceDirName": "advance",
      "slug": "/advance/config-files",
      "permalink": "/boilerplate-ui-framework-site/docs/advance/config-files",
      "tags": [],
      "version": "current",
      "sidebarPosition": 9,
      "frontMatter": {
        "sidebar_position": 9,
        "title": "配置文件详解"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "IE 11 兼容",
        "permalink": "/boilerplate-ui-framework-site/docs/advance/ie11"
      },
      "next": {
        "title": "IE 下的 Grid",
        "permalink": "/boilerplate-ui-framework-site/docs/advance/grid"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var _toc = [{
      value: 'tsconfig.json',
      id: 'tsconfigjson',
      children: [],
      level: 2
    }, {
      value: 'tailwind.config.js',
      id: 'tailwindconfigjs',
      children: [],
      level: 2
    }, {
      value: 'docusaurus.config.js',
      id: 'docusaurusconfigjs',
      children: [],
      level: 2
    }, {
      value: 'babel.config.js',
      id: 'babelconfigjs',
      children: [],
      level: 2
    }, {
      value: 'scripts/ie11.js',
      id: 'scriptsie11js',
      children: [],
      level: 2
    }, {
      value: 'scripts/moveFiles.js',
      id: 'scriptsmovefilesjs',
      children: [],
      level: 2
    }, {
      value: 'scripts/postcss.config.js',
      id: 'scriptspostcssconfigjs',
      children: [],
      level: 2
    }, {
      value: 'scripts/tailwind.config.build.js',
      id: 'scriptstailwindconfigbuildjs',
      children: [],
      level: 2
    }, {
      value: 'scripts/tsconfig.dist.json',
      id: 'scriptstsconfigdistjson',
      children: [],
      level: 2
    }, {
      value: 'scripts/vite.config.ts',
      id: 'scriptsviteconfigts',
      children: [],
      level: 2
    }, {
      value: 'scripts/webpack-alias.js',
      id: 'scriptswebpack-aliasjs',
      children: [],
      level: 2
    }, {
      value: 'plugins/docusaurus-plugin-sass',
      id: 'pluginsdocusaurus-plugin-sass',
      children: [],
      level: 2
    }, {
      value: 'plugins/docusaurus-tailwindcss-loader',
      id: 'pluginsdocusaurus-tailwindcss-loader',
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
        "id": "tsconfigjson"
      }, "tsconfig.json"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u5361 \u5F00\u53D1\u73AF\u5883 \u548C \u751F\u4EA7\u73AF\u5883 \u4E2D\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "JS"), " \u7F16\u8BD1\u914D\u7F6E, \u8BF7\u4FEE\u6539\u8FD9\u4E2A\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        "className": "admonition admonition-note alert alert--secondary"
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
        "d": "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
      }))), "note")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u56E0\u4E3A JS \u6700\u7EC8\u9700\u8981\u8F6C\u6362\u6210 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "es5"), " \u7684\u4EE3\u7801, \u6240\u4EE5\u5728\u6253\u5305\u5B8C\u540E\u4F1A\u8C03\u7528 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "yarn run build:ie"), " \u547D\u4EE4,"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u8FDB\u800C\u6267\u884C ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "/scripts/ie11.js"), " \u4ECE\u800C\u8FBE\u5230\u5C06 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "build"), " \u76EE\u5F55\u4E0B\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "js"), " \u4EE3\u7801\u8F6C\u6362\u6210 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "es5")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__
      /* ["default"] */
      .Z, {
        to: "/docs/advance/ie11",
        mdxType: "Link"
      }, "\u70B9\u51FB\u6211\u67E5\u770B IE 11 \u517C\u5BB9\u8BE6\u60C5"), " ")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "tailwindconfigjs"
      }, "tailwind.config.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u5B8C\u6210 \u6DFB\u52A0 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Utilities"), " , ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Components"), " , \u914D\u7F6E\u4E3B\u9898\u548C\u6DFB\u52A0\u63D2\u4EF6, \u90FD\u53EF\u4EE5\u5728\u8FD9\u91CC\u5B8C\u6210."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u8981\u4FEE\u6539 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "tailwind"), " \u4E2D\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "theme"), " \u914D\u7F6E, \u8BF7\u4FEE\u6539 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/themeConfigs/theme.js"), " \u8FD9\u4E2A\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u8981\u6DFB\u52A0 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Utilities"), " \u8BF7\u4FEE\u6539 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/themeConfigs/utilities.js"), " \u8FD9\u4E2A\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u8981\u6DFB\u52A0 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "Components"), " \u8BF7\u53C2\u8003 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/themeConfigs/utilities.js"), " \u8FD9\u4E2A\u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u8981\u6DFB\u52A0\u81EA\u5DF1\u5199\u7684\u63D2\u4EF6 \u8BF7\u5C06\u63D2\u4EF6\u653E\u5230 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "UI/themeConfigs"), " \u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u9762"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "docusaurusconfigjs"
      }, "docusaurus.config.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u6574\u4E2A\u7F51\u7AD9\u7684\u4FE1\u606F, \u5982 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "title"), " , ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "logo"), " , ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "meta"), " \u4E4B\u7C7B\u7684"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "babelconfigjs"
      }, "babel.config.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u9762\u914D\u7F6E\u6574\u4E2A\u9879\u76EE\u4E2D\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "babel")), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "scriptsie11js"
      }, "scripts/ie11.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
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
      }, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "scripts"), " \u76EE\u5F55\u4E0B\u5B58\u653E\u7684\u90FD\u662F\u6253\u5305\u65F6\u7684\u914D\u7F6E\u6587\u4EF6!"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D, \u5904\u7406 ie11 \u7684\u517C\u5BB9\u903B\u8F91 ( js \u548C css ) \u90FD\u5728\u8FD9\u91CC\u5904\u7406"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "scriptsmovefilesjs"
      }, "scripts/moveFiles.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u5904\u7406\u9879\u76EE\u6253\u5305\u7ED3\u675F\u540E, \u9700\u8981 copy \u90A3\u4E9B\u6587\u4EF6\u5230 dist \u76EE\u5F55"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "scriptspostcssconfigjs"
      }, "scripts/postcss.config.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u53EA\u5F71\u54CD UI \u7EC4\u4EF6\u5E93\u4E2D\u7684 css \u4EE3\u7801 (\u5305\u62EC tailwind )"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u5982\u679C\u4F60\u60F3\u5728 UI \u7EC4\u4EF6\u5E93\u6253\u5305\u7684\u8FC7\u7A0B\u4E2D\u6DFB\u52A0\u989D\u5916\u7684 Postcss \u914D\u7F6E, \u4ECE\u800C\u5F71\u54CD\u6700\u7EC8\u7684 css \u7F16\u8BD1\u7ED3\u679C"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u53EF\u4EE5\u5728\u8FD9\u4E2A\u6587\u4EF6\u8FDB\u884C\u914D\u7F6E"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "scriptstailwindconfigbuildjs"
      }, "scripts/tailwind.config.build.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u53EA\u5F71\u54CD\u6253\u5305\u65F6 tailwind \u7684\u914D\u7F6E, \u5B83\u4F1A\u7EE7\u627F\u4E8E\u6839\u76EE\u5F55\u4E0B\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "tailwind.config.js"), " \u6587\u4EF6."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "tailwindSafelist.json"), " \u4E5F\u662F\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u751F\u6210\u7684"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "scriptstsconfigdistjson"
      }, "scripts/tsconfig.dist.json"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u53EA\u5F71\u54CD\u6253\u5305\u65F6 typescript \u7684\u914D\u7F6E, \u5B83\u4F1A\u7EE7\u627F\u4E8E\u6839\u76EE\u5F55\u4E0B\u7684 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "tsconfig.json"), " \u6587\u4EF6."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "scriptsviteconfigts"
      }, "scripts/vite.config.ts"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u662F\u7528\u4E8E\u5904\u7406\u6253\u5305 UI \u7EC4\u4EF6\u5E93\u7684, \u5B83\u53EA\u5F71\u54CD UI \u7EC4\u4EF6\u5E93\u7684\u6253\u5305"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "scriptswebpack-aliasjs"
      }, "scripts/webpack-alias.js"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8FD9\u4E2A\u6587\u4EF6\u53EA\u662F\u7528\u4E8E\u5904\u7406 phpstorm \u65E0\u6CD5\u81EA\u52A8\u8BC6\u522B alias \u7684\u95EE\u9898\n\u8BF7\u4E0D\u8981\u5728\u8BE5\u6587\u4EF6\u4E2D\u914D\u7F6E webpack!"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "pluginsdocusaurus-plugin-sass"
      }, "plugins/docusaurus-plugin-sass"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
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
      }, "plugins \u6587\u4EF6\u5939\u4E0B\u9762\u7684\u6587\u4EF6\u662F\u7528\u4F5C\u4E0E npm \u8FDB\u884C\u4F9D\u8D56\u5B89\u88C5\u7684."), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u5982\u679C\u4F60\u9700\u4FEE\u6539\u5B8C\u9700\u8981\u91CD\u65B0\u6267\u884C ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "yarn install"), " \u624D\u80FD\u4FDD\u8BC1\u8BE5\u6587\u4EF6\u88AB\u6B63\u786E\u7684\u5B89\u88C5\u5230 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "node_modules"), " \u4E2D"))), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u662F\u8BA9 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "docusaurus"), " \u652F\u6301 ", (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("inlineCode", {
        parentName: "p"
      }, "sass"), " \u6587\u4EF6"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("h2", {
        "id": "pluginsdocusaurus-tailwindcss-loader"
      }, "plugins/docusaurus-tailwindcss-loader"), (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__
      /* .mdx */
      .kt)("p", null, "\u8BE5\u6587\u4EF6\u662F\u8BA9 docusaurus \u652F\u6301 tailwind"));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  }
}]);