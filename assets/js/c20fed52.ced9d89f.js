"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(self["webpackChunkboilerplate_ui_framework"] = self["webpackChunkboilerplate_ui_framework"] || []).push([[452], {
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
  4267:
  /***/
  function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__); // EXPORTS


    __webpack_require__.d(__webpack_exports__, {
      "contentTitle": function contentTitle() {
        return (
          /* binding */
          _contentTitle
        );
      },
      "default": function _default() {
        return (
          /* binding */
          MDXContent
        );
      },
      "frontMatter": function frontMatter() {
        return (
          /* binding */
          _frontMatter
        );
      },
      "metadata": function metadata() {
        return (
          /* binding */
          _metadata
        );
      },
      "toc": function toc() {
        return (
          /* binding */
          _toc
        );
      }
    }); // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js


    var esm_extends = __webpack_require__(7462); // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js


    var objectWithoutPropertiesLoose = __webpack_require__(3366); // EXTERNAL MODULE: ./node_modules/react/index.js


    var react = __webpack_require__(7294); // EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js


    var esm = __webpack_require__(3905); // EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules


    var Link = __webpack_require__(6742); // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules


    var inheritsLoose = __webpack_require__(1721); // EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js


    var clsx_m = __webpack_require__(6010);

    ; // CONCATENATED MODULE: ./UI/js/components/Card/index.ts

    function handleCard(el, msg) {
      el.addEventListener("click", function (ev) {
        var target = ev.target;
        target.classList.add('text-gray-200');

        if (target.tagName.toLocaleLowerCase() === "button") {
          alert(target.innerHTML);
        }
      });
    }

    ; // CONCATENATED MODULE: ./UI/js/components/index.ts

    ; // CONCATENATED MODULE: ./UI/js/index.ts

    ; // CONCATENATED MODULE: ./UI/index.ts

    ; // CONCATENATED MODULE: ./src/components/Card/index.tsx

    var CardData = new Array(4).fill("").map(function (value, key) {
      return {
        title: "\u6807\u9898" + key,
        info: "\u63CF\u8FF0" + key,
        poster: "https://tailwindcss.com/img/card-top.jpg",
        tags: ["Tag" + key, "TAG-next" + key]
      };
    });

    var Card = function Card(_ref) {
      var title = _ref.title,
          info = _ref.info,
          poster = _ref.poster,
          tags = _ref.tags,
          showBtn = _ref.showBtn,
          index = _ref.index;
      return /*#__PURE__*/react.createElement("div", {
        className: "v-card mx-auto my-8 max-w-sm rounded shadow-lg overflow-hidden"
      }, /*#__PURE__*/react.createElement("img", {
        className: "w-full",
        src: poster,
        alt: title
      }), /*#__PURE__*/react.createElement("div", {
        className: "px-6 py-4"
      }, /*#__PURE__*/react.createElement("div", {
        className: "mb-2 text-custom-100 text-type-h1"
      }, title), /*#__PURE__*/react.createElement("p", {
        className: "text-gray-600 text-base"
      }, info), showBtn && /*#__PURE__*/react.createElement("button", {
        className: "px-4 py-2 text-white font-bold bg-blue-500 hover:bg-blue-700 rounded"
      }, "\u6211\u662F\u53EF\u4EE5\u70B9\u51FB\u7684 Button ", index)), /*#__PURE__*/react.createElement("div", {
        className: "px-6 py-4"
      }, tags.map(function (tag) {
        return /*#__PURE__*/react.createElement("span", {
          key: tag,
          className: "inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full"
        }, "#", tag);
      })));
    };

    var CardList = /*#__PURE__*/function (_React$Component) {
      (0, inheritsLoose
      /* default */
      .Z)(CardList, _React$Component);

      function CardList(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.box = /*#__PURE__*/react.createRef();
        return _this;
      }

      var _proto = CardList.prototype;

      _proto.componentDidMount = function componentDidMount() {
        if (this.props.handleJs) {
          handleCard(this.box.current);
        }
      };

      _proto.render = function render() {
        var _this2 = this;

        return /*#__PURE__*/react.createElement("div", {
          ref: this.box,
          className: (0, clsx_m
          /* default */
          .Z)("card-list", "flex", "flex-row", "mb-6")
        }, this.props.data.map(function (card, index) {
          return /*#__PURE__*/react.createElement("div", {
            className: (0, clsx_m
            /* default */
            .Z)("m-2"),
            key: card.title
          }, /*#__PURE__*/react.createElement(Card, {
            title: card.title,
            info: card.info,
            poster: card.poster,
            tags: card.tags,
            showBtn: _this2.props.handleJs,
            index: index
          }));
        }));
      };

      return CardList;
    }(react.Component);

    ; // CONCATENATED MODULE: ./docs/components/card.mdx

    var _excluded = ["components"];
    var _frontMatter = {
      sidebar_position: 1,
      title: 'Card 组件'
    };
    var _contentTitle = 'Card 组件';
    var _metadata = {
      "unversionedId": "components/card",
      "id": "components/card",
      "isDocsHomePage": false,
      "title": "Card 组件",
      "description": "请不要纠结为什么这么难看, 这样处理主要是为了体现各个文件对该组件的影响!",
      "source": "@site/docs/components/card.mdx",
      "sourceDirName": "components",
      "slug": "/components/card",
      "permalink": "/boilerplate-ui-framework-site/docs/components/card",
      "tags": [],
      "version": "current",
      "sidebarPosition": 1,
      "frontMatter": {
        "sidebar_position": 1,
        "title": "Card 组件"
      },
      "sidebar": "tutorialSidebar",
      "previous": {
        "title": "配置文件详解",
        "permalink": "/boilerplate-ui-framework-site/docs/advance/config-files"
      },
      "next": {
        "title": "图标",
        "permalink": "/boilerplate-ui-framework-site/docs/components/icons"
      }
    };
    /* @jsxRuntime classic */

    /* @jsx mdx */

    var cardItem = CardData[0];
    var _toc = [{
      value: '基本卡片',
      id: '基本卡片',
      children: [],
      level: 2
    }, {
      value: 'React 函数组件渲染',
      id: 'react-函数组件渲染',
      children: [],
      level: 2
    }, {
      value: 'React Class 组件渲染',
      id: 'react-class-组件渲染',
      children: [],
      level: 2
    }, {
      value: '带 js 交互的 React 组件',
      id: '带-js-交互的-react-组件',
      children: [],
      level: 2
    }];
    var layoutProps = {
      toc: _toc
    };
    var MDXLayout = "wrapper";

    function MDXContent(_ref) {
      var components = _ref.components,
          props = (0, objectWithoutPropertiesLoose
      /* default */
      .Z)(_ref, _excluded);
      return (0, esm
      /* mdx */
      .kt)(MDXLayout, (0, esm_extends
      /* default */
      .Z)({}, layoutProps, props, {
        components: components,
        mdxType: "MDXLayout"
      }), (0, esm
      /* mdx */
      .kt)("h1", {
        "id": "card-组件"
      }, "Card \u7EC4\u4EF6"), (0, esm
      /* mdx */
      .kt)("div", {
        "className": "admonition admonition-danger alert alert--danger"
      }, (0, esm
      /* mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-heading"
      }, (0, esm
      /* mdx */
      .kt)("h5", {
        parentName: "div"
      }, (0, esm
      /* mdx */
      .kt)("span", {
        parentName: "h5",
        "className": "admonition-icon"
      }, (0, esm
      /* mdx */
      .kt)("svg", {
        parentName: "span",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "12",
        "height": "16",
        "viewBox": "0 0 12 16"
      }, (0, esm
      /* mdx */
      .kt)("path", {
        parentName: "svg",
        "fillRule": "evenodd",
        "d": "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
      }))), "danger")), (0, esm
      /* mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, esm
      /* mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u8BF7\u4E0D\u8981\u7EA0\u7ED3\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u96BE\u770B, \u8FD9\u6837\u5904\u7406\u4E3B\u8981\u662F\u4E3A\u4E86\u4F53\u73B0\u5404\u4E2A\u6587\u4EF6\u5BF9\u8BE5\u7EC4\u4EF6\u7684\u5F71\u54CD!"))), (0, esm
      /* mdx */
      .kt)("blockquote", null, (0, esm
      /* mdx */
      .kt)("p", {
        parentName: "blockquote"
      }, "\u8BE5\u7EC4\u4EF6\u662F\u7528\u4E8E\u6F14\u793A\u4F7F\u7528")), (0, esm
      /* mdx */
      .kt)(Link
      /* default */
      .Z, {
        to: "/docs/paths/create-a-component",
        mdxType: "Link"
      }, "\u8BF7\u70B9\u51FB\u67E5\u770B\u8FD9\u91CC"), (0, esm
      /* mdx */
      .kt)("h2", {
        "id": "基本卡片"
      }, "\u57FA\u672C\u5361\u7247"), (0, esm
      /* mdx */
      .kt)("section", {
        className: "tw"
      }, (0, esm
      /* mdx */
      .kt)("div", {
        className: "max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 v-card"
      }, (0, esm
      /* mdx */
      .kt)("img", {
        className: "w-full",
        src: "https://tailwindcss.com/img/card-top.jpg",
        alt: "Sunset in the mountains"
      }), (0, esm
      /* mdx */
      .kt)("div", {
        className: "px-6 py-4"
      }, (0, esm
      /* mdx */
      .kt)("div", {
        className: "font-bold text-xl mb-2"
      }, "The Coldest Sunset"), (0, esm
      /* mdx */
      .kt)("p", {
        className: "text-gray-600 text-base"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.")), (0, esm
      /* mdx */
      .kt)("div", {
        className: "px-6 py-4"
      }, (0, esm
      /* mdx */
      .kt)("span", {
        className: "inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
      }, "#photography"), (0, esm
      /* mdx */
      .kt)("span", {
        className: "inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
      }, "#travel"), (0, esm
      /* mdx */
      .kt)("span", {
        className: "inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
      }, "#winter")))), (0, esm
      /* mdx */
      .kt)("pre", null, (0, esm
      /* mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-html"
      }, "<div class=\"mx-auto my-8 max-w-sm rounded shadow-lg overflow-hidden\">\n  <img\n    class=\"w-full\"\n    src=\"https://tailwindcss.com/img/card-top.jpg\"\n    alt=\"Sunset in the mountains\"\n  />\n  <div class=\"px-6 py-4\">\n    <div class=\"mb-2 text-xl font-bold\">The Coldest Sunset</div>\n    <p class=\"text-gray-600 text-base\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus\n      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium\n      nihil.\n    </p>\n  </div>\n  <div class=\"px-6 py-4\">\n    <span\n      class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n    >\n      #photography\n    </span>\n    <span\n      class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n    >\n      #travel\n    </span>\n    <span\n      class=\"inline-block px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n    >\n      #winter\n    </span>\n  </div>\n</div>\n")), (0, esm
      /* mdx */
      .kt)("h2", {
        "id": "react-函数组件渲染"
      }, "React \u51FD\u6570\u7EC4\u4EF6\u6E32\u67D3"), (0, esm
      /* mdx */
      .kt)("div", {
        "className": "admonition admonition-tip alert alert--success"
      }, (0, esm
      /* mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-heading"
      }, (0, esm
      /* mdx */
      .kt)("h5", {
        parentName: "div"
      }, (0, esm
      /* mdx */
      .kt)("span", {
        parentName: "h5",
        "className": "admonition-icon"
      }, (0, esm
      /* mdx */
      .kt)("svg", {
        parentName: "span",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "12",
        "height": "16",
        "viewBox": "0 0 12 16"
      }, (0, esm
      /* mdx */
      .kt)("path", {
        parentName: "svg",
        "fillRule": "evenodd",
        "d": "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
      }))), "tip")), (0, esm
      /* mdx */
      .kt)("div", {
        parentName: "div",
        "className": "admonition-content"
      }, (0, esm
      /* mdx */
      .kt)("p", {
        parentName: "div"
      }, "\u5728\u67E5\u770B\u6E90\u4EE3\u7801\u4E4B\u524D, \u8BF7\u786E\u4FDD\u4F60\u5BF9 \u51FD\u6570\u7EC4\u4EF6 \u4E0E class \u7EC4\u4EF6\u7684\u533A\u522B\u6709\u6240\u4E86\u89E3"), (0, esm
      /* mdx */
      .kt)("p", {
        parentName: "div"
      }, (0, esm
      /* mdx */
      .kt)("a", {
        parentName: "p",
        "href": "https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components"
      }, "https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components")))), (0, esm
      /* mdx */
      .kt)("section", {
        className: "tw"
      }, (0, esm
      /* mdx */
      .kt)(Card, {
        title: cardItem.title,
        info: cardItem.info,
        poster: cardItem.poster,
        tags: cardItem.tags,
        mdxType: "Card"
      })), (0, esm
      /* mdx */
      .kt)("pre", null, (0, esm
      /* mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-html"
      }, "<div class=\"v-card mx-auto my-8 max-w-sm rounded shadow-lg overflow-hidden\">\n  <img\n    class=\"w-full\"\n    src=\"https://tailwindcss.com/img/card-top.jpg\"\n    alt=\"\u6807\u9898\"\n  />\n  <div class=\"px-6 py-4\">\n    <div class=\"mb-2 text-xl font-bold\">\u6807\u9898</div>\n    <p class=\"text-gray-600 text-base\">\u63CF\u8FF0</p>\n  </div>\n  <div class=\"px-6 py-4\">\n    <span\n      class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n      >#\u6807\u7B7E1</span\n    ><span\n      class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n      >#\u6807\u7B7E2</span\n    >\n  </div>\n</div>\n")), (0, esm
      /* mdx */
      .kt)("h2", {
        "id": "react-class-组件渲染"
      }, "React Class \u7EC4\u4EF6\u6E32\u67D3"), (0, esm
      /* mdx */
      .kt)("section", {
        className: "tw"
      }, (0, esm
      /* mdx */
      .kt)(CardList, {
        data: CardData,
        mdxType: "CardList"
      })), (0, esm
      /* mdx */
      .kt)("pre", null, (0, esm
      /* mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-html"
      }, "<div class=\"card-list flex flex-row\">\n  <!--\u904D\u5386\u5F00\u59CB-->\n  <div class=\"m-2\">\n    <div class=\"v-card mx-auto my-8 max-w-sm rounded shadow-lg overflow-hidden\">\n      <img\n        class=\"w-full\"\n        src=\"https://tailwindcss.com/img/card-top.jpg\"\n        alt=\"\u6807\u98980\"\n      />\n      <div class=\"px-6 py-4\">\n        <div class=\"mb-2 text-xl font-bold\">\u6807\u98980</div>\n        <p class=\"text-gray-600 text-base\">\u63CF\u8FF00</p>\n      </div>\n      <div class=\"px-6 py-4\">\n        <span\n          class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n          >#Tag0</span\n        ><span\n          class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n          >#TAG-next0</span\n        >\n      </div>\n    </div>\n  </div>\n  <!--\u904D\u5386\u7ED3\u675F-->\n</div>\n")), (0, esm
      /* mdx */
      .kt)("h2", {
        "id": "带-js-交互的-react-组件"
      }, "\u5E26 js \u4EA4\u4E92\u7684 React \u7EC4\u4EF6"), (0, esm
      /* mdx */
      .kt)("section", {
        className: "tw"
      }, (0, esm
      /* mdx */
      .kt)(CardList, {
        id: "CardEvent",
        handleJs: true,
        data: CardData,
        mdxType: "CardList"
      })), (0, esm
      /* mdx */
      .kt)("pre", null, (0, esm
      /* mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-html",
        "metastring": "title=\"html\"",
        "title": "\"html\""
      }, "<div class=\"card-list flex flex-row mb-6\">\n  <!--\u904D\u5386\u5F00\u59CB-->\n  <div class=\"m-2\">\n    <div class=\"v-card mx-auto my-8 max-w-sm rounded shadow-lg overflow-hidden\">\n      <img\n        class=\"w-full\"\n        src=\"https://tailwindcss.com/img/card-top.jpg\"\n        alt=\"\u6807\u98983\"\n      />\n      <div class=\"px-6 py-4\">\n        <div class=\"mb-2 text-xl font-bold\">\u6807\u98983</div>\n        <p class=\"text-gray-600 text-base\">\u63CF\u8FF03</p>\n        <button\n          class=\"px-4 py-2 text-white font-bold bg-blue-500 hover:bg-blue-700 rounded\"\n        >\n          \u6211\u662F\u53EF\u4EE5\u70B9\u51FB\u7684 Button 3\n        </button>\n      </div>\n      <div class=\"px-6 py-4\">\n        <span\n          class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n          >#Tag3</span\n        ><span\n          class=\"inline-block mr-2 px-3 py-1 text-gray-600 text-sm font-semibold bg-gray-100 rounded-full\"\n          >#TAG-next3</span\n        >\n      </div>\n    </div>\n  </div>\n  <!--\u904D\u5386\u7ED3\u675F-->\n</div>\n")), (0, esm
      /* mdx */
      .kt)("pre", null, (0, esm
      /* mdx */
      .kt)("code", {
        parentName: "pre",
        "className": "language-typescript",
        "metastring": "title=\"JS 调用插件\"",
        "title": "\"JS",
        "调用插件\"": true
      }, "import { handleCard } from \"@UI/js/components/card\";\nhandleCard(document.querySelector(\".card-list\") as HTMLDialogElement);\n")));
    }

    ;
    MDXContent.isMDXComponent = true;
    /***/
  },

  /***/
  6010:
  /***/
  function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */
      "Z": function Z() {
        return (
          /* export default binding */
          __WEBPACK_DEFAULT_EXPORT__
        );
      }
      /* harmony export */

    });

    function toVal(mix) {
      var k,
          y,
          str = '';

      if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
      } else if (_typeof(mix) === 'object') {
        if (Array.isArray(mix)) {
          for (k = 0; k < mix.length; k++) {
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
    /* harmony default export */


    function __WEBPACK_DEFAULT_EXPORT__() {
      var i = 0,
          tmp,
          x,
          str = '';

      while (i < arguments.length) {
        if (tmp = arguments[i++]) {
          if (x = toVal(tmp)) {
            str && (str += ' ');
            str += x;
          }
        }
      }

      return str;
    }
    /***/

  }
}]);