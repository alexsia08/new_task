import {
  require_react_dom
} from "./chunk-QOVZGY7A.js";
import {
  _extends
} from "./chunk-HQ6ZTAWL.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-5WQJO2FO.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module2) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames40() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames40.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames40.default = classNames40;
        module2.exports = classNames40;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames40;
        });
      } else {
        window.classNames = classNames40;
      }
    })();
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE2 = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type5) {
          if (typeof type5 === "string" || typeof type5 === "function") {
            return true;
          }
          if (type5 === REACT_FRAGMENT_TYPE2 || type5 === REACT_PROFILER_TYPE || enableDebugTracing || type5 === REACT_STRICT_MODE_TYPE || type5 === REACT_SUSPENSE_TYPE || type5 === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type5 === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type5 === "object" && type5 !== null) {
            if (type5.$$typeof === REACT_LAZY_TYPE || type5.$$typeof === REACT_MEMO_TYPE || type5.$$typeof === REACT_PROVIDER_TYPE || type5.$$typeof === REACT_CONTEXT_TYPE || type5.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type5.$$typeof === REACT_MODULE_REFERENCE || type5.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object4) {
          if (typeof object4 === "object" && object4 !== null) {
            var $$typeof = object4.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type5 = object4.type;
                switch (type5) {
                  case REACT_FRAGMENT_TYPE2:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type5;
                  default:
                    var $$typeofType = type5 && type5.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element3 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment8 = REACT_FRAGMENT_TYPE2;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object4) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object4) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object4) {
          return typeOf(object4) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object4) {
          return typeOf(object4) === REACT_PROVIDER_TYPE;
        }
        function isElement(object4) {
          return typeof object4 === "object" && object4 !== null && object4.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object4) {
          return typeOf(object4) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment3(object4) {
          return typeOf(object4) === REACT_FRAGMENT_TYPE2;
        }
        function isLazy(object4) {
          return typeOf(object4) === REACT_LAZY_TYPE;
        }
        function isMemo2(object4) {
          return typeOf(object4) === REACT_MEMO_TYPE;
        }
        function isPortal(object4) {
          return typeOf(object4) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object4) {
          return typeOf(object4) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object4) {
          return typeOf(object4) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object4) {
          return typeOf(object4) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object4) {
          return typeOf(object4) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element3;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment8;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment3;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/antd/es/app/App.js
var import_react61 = __toESM(require_react());
var import_classnames41 = __toESM(require_classnames());

// node_modules/antd/es/_util/warning.js
var React = __toESM(require_react());

// node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method4, valid, message) {
  if (!valid && !warned[message]) {
    method4(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/antd/es/_util/warning.js
function noop() {
}
var deprecatedWarnList = null;
var warning2 = noop;
if (true) {
  warning2 = (valid, component, message) => {
    warning_default(valid, `[antd: ${component}] ${message}`);
    if (false) {
      resetWarned();
    }
  };
}
var WarningContext = React.createContext({});
var devUseWarning = true ? (component) => {
  const {
    strict
  } = React.useContext(WarningContext);
  const typeWarning = (valid, type5, message) => {
    if (!valid) {
      if (strict === false && type5 === "deprecated") {
        const existWarning = deprecatedWarnList;
        if (!deprecatedWarnList) {
          deprecatedWarnList = {};
        }
        deprecatedWarnList[component] = deprecatedWarnList[component] || [];
        if (!deprecatedWarnList[component].includes(message || "")) {
          deprecatedWarnList[component].push(message || "");
        }
        if (!existWarning) {
          console.warn("[antd] There exists deprecated usage in your code:", deprecatedWarnList);
        }
      } else {
        true ? warning2(valid, component, message) : void 0;
      }
    }
  };
  typeWarning.deprecated = (valid, oldProp, newProp, message) => {
    typeWarning(valid, "deprecated", `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${message ? ` ${message}` : ""}`);
  };
  return typeWarning;
} : () => {
  const noopWarning = () => {
  };
  noopWarning.deprecated = noop;
  return noopWarning;
};
var warning_default2 = warning2;

// node_modules/antd/es/config-provider/index.js
var React33 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}

// node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;

// node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  var node2 = n;
  while (node2) {
    if (node2 === root) {
      return true;
    }
    node2 = node2.parentNode;
  }
  return false;
}

// node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
    return node2.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = (option.styles || findStyles(container)).filter(function(node2) {
        if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return (option.styles || findStyles(container)).find(function(node2) {
    return node2.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(originOption);
  var styles = findStyles(container);
  var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
    styles
  });
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
var import_react = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// node_modules/rc-util/es/hooks/useMemo.js
var React2 = __toESM(require_react());
function useMemo(getValue3, condition, shouldUpdate) {
  var cacheRef = React2.useRef({});
  if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue3();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

// node_modules/rc-util/es/isEqual.js
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var refSet = /* @__PURE__ */ new Set();
  function deepEqual(a, b) {
    var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    var circular = refSet.has(a);
    warning_default(!circular, "Warning: There may be circular references");
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && _typeof(a) === "object" && _typeof(b) === "object") {
      var keys2 = Object.keys(a);
      if (keys2.length !== Object.keys(b).length) {
        return false;
      }
      return keys2.every(function(key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    return false;
  }
  return deepEqual(obj1, obj2);
}
var isEqual_default = isEqual;

// node_modules/@ant-design/cssinjs/es/StyleContext.js
var React3 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@ant-design/cssinjs/es/Cache.js
var SPLIT = "%";
function pathKey(keys2) {
  return keys2.join(SPLIT);
}
var Entity = function() {
  function Entity2(instanceId) {
    _classCallCheck(this, Entity2);
    _defineProperty(this, "instanceId", void 0);
    _defineProperty(this, "cache", /* @__PURE__ */ new Map());
    this.instanceId = instanceId;
  }
  _createClass(Entity2, [{
    key: "get",
    value: function get2(keys2) {
      return this.opGet(pathKey(keys2));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function opGet(keyPathStr) {
      return this.cache.get(keyPathStr) || null;
    }
  }, {
    key: "update",
    value: function update(keys2, valueFn) {
      return this.opUpdate(pathKey(keys2), valueFn);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function opUpdate(keyPathStr, valueFn) {
      var prevValue = this.cache.get(keyPathStr);
      var nextValue = valueFn(prevValue);
      if (nextValue === null) {
        this.cache.delete(keyPathStr);
      } else {
        this.cache.set(keyPathStr, nextValue);
      }
    }
  }]);
  return Entity2;
}();
var Cache_default = Entity;

// node_modules/@ant-design/cssinjs/es/StyleContext.js
var ATTR_TOKEN = "data-token-hash";
var ATTR_MARK = "data-css-hash";
var ATTR_CACHE_PATH = "data-cache-path";
var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  var cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function(style2) {
      style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style2, firstChild);
      }
    });
    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
      var hash2 = style2.getAttribute(ATTR_MARK);
      if (styleHash[hash2]) {
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          var _style$parentNode;
          (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
        }
      } else {
        styleHash[hash2] = true;
      }
    });
  }
  return new Cache_default(cssinjsInstanceId);
}
var StyleContext = React3.createContext({
  hashPriority: "low",
  cache: createCache(),
  defaultCache: true
});
var StyleContext_default = StyleContext;

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}

// node_modules/@ant-design/cssinjs/es/theme/calc/calculator.js
var AbstractCalculator = _createClass(function AbstractCalculator2() {
  _classCallCheck(this, AbstractCalculator2);
});
var calculator_default = AbstractCalculator;

// node_modules/@ant-design/cssinjs/es/theme/calc/CSSCalculator.js
var CALC_UNIT = "CALC_UNIT";
var regexp = new RegExp(CALC_UNIT, "g");
function unit(value) {
  if (typeof value === "number") {
    return "".concat(value).concat(CALC_UNIT);
  }
  return value;
}
var CSSCalculator = function(_AbstractCalculator) {
  _inherits(CSSCalculator3, _AbstractCalculator);
  var _super = _createSuper(CSSCalculator3);
  function CSSCalculator3(num, unitlessCssVar) {
    var _this;
    _classCallCheck(this, CSSCalculator3);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", "");
    _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
    _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
    var numType = _typeof(num);
    _this.unitlessCssVar = unitlessCssVar;
    if (num instanceof CSSCalculator3) {
      _this.result = "(".concat(num.result, ")");
    } else if (numType === "number") {
      _this.result = unit(num);
    } else if (numType === "string") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(CSSCalculator3, [{
    key: "add",
    value: function add(num) {
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " + ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " + ").concat(unit(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " - ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " - ").concat(unit(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " * ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " * ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " / ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " / ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options) {
      var _this2 = this;
      var _ref = options || {}, cssUnit = _ref.unit;
      var mergedUnit = true;
      if (typeof cssUnit === "boolean") {
        mergedUnit = cssUnit;
      } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
        return _this2.result.includes(cssVar);
      })) {
        mergedUnit = false;
      }
      this.result = this.result.replace(regexp, mergedUnit ? "px" : "");
      if (typeof this.lowPriority !== "undefined") {
        return "calc(".concat(this.result, ")");
      }
      return this.result;
    }
  }]);
  return CSSCalculator3;
}(calculator_default);

// node_modules/@ant-design/cssinjs/es/theme/calc/NumCalculator.js
var NumCalculator = function(_AbstractCalculator) {
  _inherits(NumCalculator3, _AbstractCalculator);
  var _super = _createSuper(NumCalculator3);
  function NumCalculator3(num) {
    var _this;
    _classCallCheck(this, NumCalculator3);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", 0);
    if (num instanceof NumCalculator3) {
      _this.result = num.result;
    } else if (typeof num === "number") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(NumCalculator3, [{
    key: "add",
    value: function add(num) {
      if (num instanceof NumCalculator3) {
        this.result += num.result;
      } else if (typeof num === "number") {
        this.result += num;
      }
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof NumCalculator3) {
        this.result -= num.result;
      } else if (typeof num === "number") {
        this.result -= num;
      }
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (num instanceof NumCalculator3) {
        this.result *= num.result;
      } else if (typeof num === "number") {
        this.result *= num;
      }
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (num instanceof NumCalculator3) {
        this.result /= num.result;
      } else if (typeof num === "number") {
        this.result /= num;
      }
      return this;
    }
  }, {
    key: "equal",
    value: function equal() {
      return this.result;
    }
  }]);
  return NumCalculator3;
}(calculator_default);

// node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = function() {
  function ThemeCache2() {
    _classCallCheck(this, ThemeCache2);
    _defineProperty(this, "cache", void 0);
    _defineProperty(this, "keys", void 0);
    _defineProperty(this, "cacheCallTimes", void 0);
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  _createClass(ThemeCache2, [{
    key: "size",
    value: function size() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function internalGet(derivativeOption) {
      var _cache2, _cache3;
      var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var cache = {
        map: this.cache
      };
      derivativeOption.forEach(function(derivative2) {
        if (!cache) {
          cache = void 0;
        } else {
          var _cache;
          cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
        }
      });
      if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
        cache.value[1] = this.cacheCallTimes++;
      }
      return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
    }
  }, {
    key: "get",
    value: function get2(derivativeOption) {
      var _this$internalGet;
      return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
    }
  }, {
    key: "has",
    value: function has(derivativeOption) {
      return !!this.internalGet(derivativeOption);
    }
  }, {
    key: "set",
    value: function set2(derivativeOption, value) {
      var _this = this;
      if (!this.has(derivativeOption)) {
        if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
          var _this$keys$reduce = this.keys.reduce(function(result, key) {
            var _result = _slicedToArray(result, 2), callTimes = _result[1];
            if (_this.internalGet(key)[1] < callTimes) {
              return [key, _this.internalGet(key)[1]];
            }
            return result;
          }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
          this.delete(targetKey);
        }
        this.keys.push(derivativeOption);
      }
      var cache = this.cache;
      derivativeOption.forEach(function(derivative2, index) {
        if (index === derivativeOption.length - 1) {
          cache.set(derivative2, {
            value: [value, _this.cacheCallTimes++]
          });
        } else {
          var cacheValue = cache.get(derivative2);
          if (!cacheValue) {
            cache.set(derivative2, {
              map: /* @__PURE__ */ new Map()
            });
          } else if (!cacheValue.map) {
            cacheValue.map = /* @__PURE__ */ new Map();
          }
          cache = cache.get(derivative2).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function deleteByPath(currentCache, derivatives) {
      var cache = currentCache.get(derivatives[0]);
      if (derivatives.length === 1) {
        var _cache$value;
        if (!cache.map) {
          currentCache.delete(derivatives[0]);
        } else {
          currentCache.set(derivatives[0], {
            map: cache.map
          });
        }
        return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
      }
      var result = this.deleteByPath(cache.map, derivatives.slice(1));
      if ((!cache.map || cache.map.size === 0) && !cache.value) {
        currentCache.delete(derivatives[0]);
      }
      return result;
    }
  }, {
    key: "delete",
    value: function _delete(derivativeOption) {
      if (this.has(derivativeOption)) {
        this.keys = this.keys.filter(function(item) {
          return !sameDerivativeOption(item, derivativeOption);
        });
        return this.deleteByPath(this.cache, derivativeOption);
      }
      return void 0;
    }
  }]);
  return ThemeCache2;
}();
_defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
_defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);

// node_modules/@ant-design/cssinjs/es/theme/Theme.js
var uuid = 0;
var Theme = function() {
  function Theme2(derivatives) {
    _classCallCheck(this, Theme2);
    _defineProperty(this, "derivatives", void 0);
    _defineProperty(this, "id", void 0);
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning(derivatives.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function.");
    }
    uuid += 1;
  }
  _createClass(Theme2, [{
    key: "getDerivativeToken",
    value: function getDerivativeToken(token2) {
      return this.derivatives.reduce(function(result, derivative2) {
        return derivative2(token2, result);
      }, void 0);
    }
  }]);
  return Theme2;
}();

// node_modules/@ant-design/cssinjs/es/theme/createTheme.js
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}

// node_modules/@ant-design/cssinjs/es/util/index.js
var resultCache = /* @__PURE__ */ new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
  var current = resultCache;
  for (var i = 0; i < deps.length; i += 1) {
    var dep = deps[i];
    if (!current.has(dep)) {
      current.set(dep, /* @__PURE__ */ new WeakMap());
    }
    current = current.get(dep);
  }
  if (!current.has(RESULT_VALUE)) {
    current.set(RESULT_VALUE, callback());
  }
  return current.get(RESULT_VALUE);
}
var flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token2) {
  var str = flattenTokenCache.get(token2) || "";
  if (!str) {
    Object.keys(token2).forEach(function(key) {
      var value = token2[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && _typeof(value) === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    str = hash_browser_esm_default(str);
    flattenTokenCache.set(token2, str);
  }
  return str;
}
function token2key(token2, salt) {
  return hash_browser_esm_default("".concat(salt, "_").concat(flattenToken(token2)));
}
var randomSelectorKey = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, "");
var isClientSide = canUseDom();
function unit2(num) {
  if (typeof num === "number") {
    return "".concat(num, "px");
  }
  return num;
}
function toStyleStr(style2, tokenKey, styleId) {
  var _objectSpread22;
  var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  if (plain) {
    return style2;
  }
  var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, (_objectSpread22 = {}, _defineProperty(_objectSpread22, ATTR_TOKEN, tokenKey), _defineProperty(_objectSpread22, ATTR_MARK, styleId), _objectSpread22));
  var attrStr = Object.keys(attrs).map(function(attr) {
    var val = attrs[attr];
    return val ? "".concat(attr, '="').concat(val, '"') : null;
  }).filter(function(v) {
    return v;
  }).join(" ");
  return "<style ".concat(attrStr, ">").concat(style2, "</style>");
}

// node_modules/@ant-design/cssinjs/es/util/css-variables.js
var token2CSSVar = function token2CSSVar2(token2) {
  var prefix2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(prefix2 ? "".concat(prefix2, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
};
var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
  if (!Object.keys(cssVars).length) {
    return "";
  }
  return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
    return "".concat(key, ":").concat(value, ";");
  }).join(""), "}");
};
var transformToken = function transformToken2(token2, themeKey, config) {
  var cssVars = {};
  var result = {};
  Object.entries(token2).forEach(function(_ref3) {
    var _config$preserve, _config$ignore;
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
    if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
      result[key] = value;
    } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
      var _config$unitless;
      var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
      cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
      result[key] = "var(".concat(cssVar, ")");
    }
  });
  return [result, serializeCSSVar(cssVars, themeKey, {
    scope: config === null || config === void 0 ? void 0 : config.scope
  })];
};

// node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
var React7 = __toESM(require_react());

// node_modules/rc-util/es/hooks/useLayoutEffect.js
var React4 = __toESM(require_react());
var useInternalLayoutEffect = canUseDom() ? React4.useLayoutEffect : React4.useEffect;
var useLayoutEffect2 = function useLayoutEffect3(callback, deps) {
  var firstMountRef = React4.useRef(true);
  useInternalLayoutEffect(function() {
    return callback(firstMountRef.current);
  }, deps);
  useInternalLayoutEffect(function() {
    firstMountRef.current = false;
    return function() {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
  useLayoutEffect2(function(firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
var useLayoutEffect_default = useLayoutEffect2;

// node_modules/@ant-design/cssinjs/es/hooks/useCompatibleInsertionEffect.js
var React5 = __toESM(require_react());
var fullClone = _objectSpread2({}, React5);
var useInsertionEffect = fullClone.useInsertionEffect;
var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
  React5.useMemo(renderEffect, deps);
  useLayoutEffect_default(function() {
    return effect(true);
  }, deps);
};
var useCompatibleInsertionEffect = useInsertionEffect ? function(renderEffect, effect, deps) {
  return useInsertionEffect(function() {
    renderEffect();
    return effect();
  }, deps);
} : useInsertionEffectPolyfill;
var useCompatibleInsertionEffect_default = useCompatibleInsertionEffect;

// node_modules/@ant-design/cssinjs/es/hooks/useEffectCleanupRegister.js
var React6 = __toESM(require_react());
var fullClone2 = _objectSpread2({}, React6);
var useInsertionEffect2 = fullClone2.useInsertionEffect;
var useCleanupRegister = function useCleanupRegister2(deps) {
  var effectCleanups = [];
  var cleanupFlag = false;
  function register2(fn) {
    if (cleanupFlag) {
      if (true) {
        warning(false, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      }
      return;
    }
    effectCleanups.push(fn);
  }
  React6.useEffect(function() {
    cleanupFlag = false;
    return function() {
      cleanupFlag = true;
      if (effectCleanups.length) {
        effectCleanups.forEach(function(fn) {
          return fn();
        });
      }
    };
  }, deps);
  return register2;
};
var useRun = function useRun2() {
  return function(fn) {
    fn();
  };
};
var useEffectCleanupRegister = typeof useInsertionEffect2 !== "undefined" ? useCleanupRegister : useRun;
var useEffectCleanupRegister_default = useEffectCleanupRegister;

// node_modules/@ant-design/cssinjs/es/hooks/useHMR.js
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var useHMR_default = false ? useProdHMR : useDevHMR;
if (typeof module !== "undefined" && module && module.hot && typeof window !== "undefined") {
  win = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : null;
  if (win && typeof win.webpackHotUpdate === "function") {
    originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function() {
      webpackHMR = true;
      setTimeout(function() {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate.apply(void 0, arguments);
    };
  }
}
var win;
var originWebpackHotUpdate;

// node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
function useGlobalCache(prefix2, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
  var _React$useContext = React7.useContext(StyleContext_default), globalCache = _React$useContext.cache;
  var fullPath = [prefix2].concat(_toConsumableArray(keyPath));
  var fullPathStr = pathKey(fullPath);
  var register2 = useEffectCleanupRegister_default([fullPathStr]);
  var HMRUpdate = useHMR_default();
  var buildCache = function buildCache2(updater) {
    globalCache.opUpdate(fullPathStr, function(prevCache) {
      var _ref = prevCache || [void 0, void 0], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
      var tmpCache = cache;
      if (cache && HMRUpdate) {
        onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(tmpCache, HMRUpdate);
        tmpCache = null;
      }
      var mergedCache = tmpCache || cacheFn();
      var data = [times, mergedCache];
      return updater ? updater(data) : data;
    });
  };
  React7.useMemo(
    function() {
      buildCache();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [fullPathStr]
    /* eslint-enable */
  );
  var cacheEntity = globalCache.opGet(fullPathStr);
  if (!cacheEntity) {
    buildCache();
    cacheEntity = globalCache.opGet(fullPathStr);
  }
  var cacheContent = cacheEntity[1];
  useCompatibleInsertionEffect_default(function() {
    onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
  }, function(polyfill) {
    buildCache(function(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
      if (polyfill && times === 0) {
        onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
      }
      return [times + 1, cache];
    });
    return function() {
      globalCache.opUpdate(fullPathStr, function(prevCache) {
        var _ref5 = prevCache || [], _ref6 = _slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
        var nextCount = times - 1;
        if (nextCount === 0) {
          register2(function() {
            if (polyfill || !globalCache.opGet(fullPathStr)) {
              onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
            }
          });
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, [fullPathStr]);
  return cacheContent;
}

// node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
var EMPTY_OVERRIDE = {};
var hashPrefix = true ? "css-dev-only-do-not-override" : "css";
var tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
    styles.forEach(function(style2) {
      if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
        var _style$parentNode;
        (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
      }
    });
  }
}
var TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function(key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach(function(key) {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken = function getComputedToken2(originToken, overrideToken, theme, format2) {
  var derivativeToken = theme.getDerivativeToken(originToken);
  var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
  if (format2) {
    mergedDerivativeToken = format2(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
var TOKEN_PREFIX = "token";
function useCacheToken(theme, tokens) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _useContext = (0, import_react.useContext)(StyleContext_default), instanceId = _useContext.cache.instanceId, container = _useContext.container;
  var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
  var mergedToken = memoResult(function() {
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
  }, tokens);
  var tokenStr = flattenToken(mergedToken);
  var overrideTokenStr = flattenToken(override);
  var cssVarStr = cssVar ? flattenToken(cssVar) : "";
  var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function() {
    var _cssVar$key;
    var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken(mergedToken, override, theme, formatToken2);
    var actualToken = _objectSpread2({}, mergedDerivativeToken);
    var cssVarsStr = "";
    if (!!cssVar) {
      var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
        prefix: cssVar.prefix,
        ignore: cssVar.ignore,
        unitless: cssVar.unitless,
        preserve: cssVar.preserve
      });
      var _transformToken2 = _slicedToArray(_transformToken, 2);
      mergedDerivativeToken = _transformToken2[0];
      cssVarsStr = _transformToken2[1];
    }
    var tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    actualToken._tokenKey = token2key(actualToken, salt);
    var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
    mergedDerivativeToken._themeKey = themeKey;
    recordCleanToken(themeKey);
    var hashId = "".concat(hashPrefix, "-").concat(hash_browser_esm_default(tokenKey));
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
  }, function(cache) {
    cleanTokenStyle(cache[0]._themeKey, instanceId);
  }, function(_ref) {
    var _ref2 = _slicedToArray(_ref, 4), token2 = _ref2[0], cssVarsStr = _ref2[3];
    if (cssVar && cssVarsStr) {
      var style2 = updateCSS(cssVarsStr, hash_browser_esm_default("css-variables-".concat(token2._themeKey)), {
        mark: ATTR_MARK,
        prepend: "queue",
        attachTo: container,
        priority: -999
      });
      style2[CSS_IN_JS_INSTANCE] = instanceId;
      style2.setAttribute(ATTR_TOKEN, token2._themeKey);
    }
  });
  return cachedToken;
}
var extract = function extract2(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
  var _ref3 = options || {}, plain = _ref3.plain;
  if (!styleStr) {
    return null;
  }
  var styleId = realToken._tokenKey;
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};

// node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js
var import_react2 = __toESM(require_react());

// node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
var React8 = __toESM(require_react());

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/stylis/src/Enum.js
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern6, replacement) {
  return value.replace(pattern6, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array4) {
  return array4.push(value), value;
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type5, props, children, length2, siblings) {
  return { value, root, parent, type: type5, props, children, line, column, length: length2, return: "", siblings };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type5) {
  switch (type5) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type5) {
  return trim(slice(position - 1, delimiter(type5 === 91 ? type5 + 2 : type5 === 40 ? type5 + 1 : type5)));
}
function whitespace(type5) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type5) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type5) {
  while (next())
    switch (character) {
      // ] ) " '
      case type5:
        return position;
      // " '
      case 34:
      case 39:
        if (type5 !== 34 && type5 !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type5 === 41)
          delimiter(type5);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type5, index) {
  while (next())
    if (type5 + character === 47 + 10)
      break;
    else if (type5 + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type5 === 47 ? type5 : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset2 = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type5 = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type5;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset2:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset2, rules, points, type5, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else {
                switch (atrule) {
                  // c(ontainer)
                  case 99:
                    if (charat(characters2, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (charat(characters2, 2) === 97) break;
                  default:
                    offset2 = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                if (offset2) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type5, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                else parse(characters2, reference, reference, reference, [""], children, 0, points, children);
              }
        }
        index = offset2 = property = 0, variable = ampersand = 1, type5 = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset2 = length2 = strlen(type5 = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset2, rules, points, type5, props, children, length2, siblings) {
  var post = offset2 - 1;
  var rule = offset2 === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset2 === 0 ? RULESET : type5, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case NAMESPACE:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/@ant-design/cssinjs/es/linters/utils.js
function lintWarning(message, info) {
  var path2 = info.path, parentSelectors = info.parentSelectors;
  warning_default(false, "[Ant Design CSS-in-JS] ".concat(path2 ? "Error in ".concat(path2, ": ") : "").concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(" | ")) : ""));
}

// node_modules/@ant-design/cssinjs/es/linters/contentQuotesLinter.js
var linter = function linter2(key, value, info) {
  if (key === "content") {
    var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = ["normal", "none", "initial", "inherit", "unset"];
    if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`."), info);
    }
  }
};
var contentQuotesLinter_default = linter;

// node_modules/@ant-design/cssinjs/es/linters/hashedAnimationLinter.js
var linter3 = function linter4(key, value, info) {
  if (key === "animation") {
    if (info.hashId && value !== "none") {
      lintWarning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
    }
  }
};
var hashedAnimationLinter_default = linter3;

// node_modules/@ant-design/cssinjs/es/util/cacheMapUtil.js
var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
var CSS_FILE_STYLE = "_FILE_STYLE__";
var cachePathMap;
var fromCSSFile = true;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      var div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      var content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach(function(item) {
        var _item$split = item.split(":"), _item$split2 = _slicedToArray(_item$split, 2), path2 = _item$split2[0], hash2 = _item$split2[1];
        cachePathMap[path2] = hash2;
      });
      var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
      if (inlineMapStyle) {
        var _inlineMapStyle$paren;
        fromCSSFile = false;
        (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path2) {
  prepare();
  return !!cachePathMap[path2];
}
function getStyleAndHash(path2) {
  var hash2 = cachePathMap[path2];
  var styleStr = null;
  if (hash2 && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path2], '"]'));
      if (_style) {
        styleStr = _style.innerHTML;
      } else {
        delete cachePathMap[path2];
      }
    }
  }
  return [styleStr, hash2];
}

// node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
var SKIP_CHECK = "_skip_check_";
var MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  var serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = ".".concat(hashId);
  var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
  var keys2 = key.split(",").map(function(k) {
    var _firstPath$match;
    var fullPath = k.trim().split(/\s+/);
    var firstPath = fullPath[0] || "";
    var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
    firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
  });
  return keys2.join(",");
}
var parseStyle = function parseStyle2(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  }, root = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
  var hashId = config.hashId, layer = config.layer, path2 = config.path, hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers, _config$linters = config.linters, linters = _config$linters === void 0 ? [] : _config$linters;
  var styleStr = "";
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle2(keyframes.style, config, {
        root: false,
        parentSelectors
      }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
      effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
    }
  }
  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach(function(item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function(originStyle) {
    var style2 = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style2 === "string") {
      styleStr += "".concat(style2, "\n");
    } else if (style2._keyframe) {
      parseKeyframes(style2);
    } else {
      var mergedStyle = transformers.reduce(function(prev2, trans) {
        var _trans$visit;
        return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
      }, style2);
      Object.keys(mergedStyle).forEach(function(key) {
        var value = mergedStyle[key];
        if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          var subInjectHash = false;
          var mergedKey = key.trim();
          var nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else if (mergedKey === "&") {
              mergedKey = injectSelectorHash("", hashId, hashPriority);
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle2(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
          }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
          effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          let appendStyle = function(cssKey, cssValue) {
            if (_typeof(value) !== "object" || !(value !== null && value !== void 0 && value[SKIP_CHECK])) {
              [contentQuotesLinter_default, hashedAnimationLinter_default].concat(_toConsumableArray(linters)).forEach(function(linter5) {
                return linter5(cssKey, cssValue, {
                  path: path2,
                  hashId,
                  parentSelectors
                });
              });
            }
            var styleName = cssKey.replace(/[A-Z]/g, function(match3) {
              return "-".concat(match3.toLowerCase());
            });
            var formatValue = cssValue;
            if (!unitless_browser_esm_default[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = "".concat(formatValue, "px");
            }
            if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += "".concat(styleName, ":").concat(formatValue, ";");
          };
          var _value;
          var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
          if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
            actualValue.forEach(function(item) {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer) {
    if (styleStr) {
      styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
    }
    if (layer.dependencies) {
      effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
        return "@layer ".concat(deps, ", ").concat(layer.name, ";");
      }).join("\n");
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path2, styleStr) {
  return hash_browser_esm_default("".concat(path2.join("%")).concat(styleStr));
}
function Empty() {
  return null;
}
var STYLE_PREFIX = "style";
function useStyleRegister(info, styleFn) {
  var token2 = info.token, path2 = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
  var _React$useContext = React8.useContext(StyleContext_default), autoClear = _React$useContext.autoClear, mock = _React$useContext.mock, defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
  var tokenKey = token2._tokenKey;
  var fullPath = [tokenKey];
  if (enableLayer) {
    fullPath.push("layer");
  }
  fullPath.push.apply(fullPath, _toConsumableArray(path2));
  var isMergedClientSide = isClientSide;
  if (mock !== void 0) {
    isMergedClientSide = mock === "client";
  }
  var _useGlobalCache = useGlobalCache(
    STYLE_PREFIX,
    fullPath,
    // Create cache if needed
    function() {
      var cachePath = fullPath.join("|");
      if (existPath(cachePath)) {
        var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
        }
      }
      var styleObj = styleFn();
      var _parseStyle5 = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer: enableLayer ? layer : void 0,
        path: path2.join("-"),
        transformers,
        linters
      }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
      var styleStr = normalizeStyle(parsedStyle);
      var styleId = uniqueHash(fullPath, styleStr);
      return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    function(_ref2, fromHMR) {
      var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
      if ((fromHMR || autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    },
    // Effect: Inject style here
    function(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 4), styleStr = _ref5[0], _ = _ref5[1], styleId = _ref5[2], effectStyle = _ref5[3];
      if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
        var mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: enableLayer ? false : "queue",
          attachTo: container,
          priority: order
        };
        var nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        var effectLayerKeys = [];
        var effectRestKeys = [];
        Object.keys(effectStyle).forEach(function(key) {
          if (key.startsWith("@layer")) {
            effectLayerKeys.push(key);
          } else {
            effectRestKeys.push(key);
          }
        });
        effectLayerKeys.forEach(function(effectKey) {
          updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2(_objectSpread2({}, mergedCSSConfig), {}, {
            prepend: true
          }));
        });
        var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
        style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
        style2.setAttribute(ATTR_TOKEN, tokenKey);
        if (true) {
          style2.setAttribute(ATTR_CACHE_PATH, fullPath.join("|"));
        }
        effectRestKeys.forEach(function(effectKey) {
          updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
        });
      }
    }
  ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
  return function(node2) {
    var styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = React8.createElement(Empty, null);
    } else {
      var _ref6;
      styleNode = React8.createElement("style", _extends({}, (_ref6 = {}, _defineProperty(_ref6, ATTR_TOKEN, cachedTokenKey), _defineProperty(_ref6, ATTR_MARK, cachedStyleId), _ref6), {
        dangerouslySetInnerHTML: {
          __html: cachedStyleStr
        }
      }));
    }
    return React8.createElement(React8.Fragment, null, styleNode, node2);
  };
}
var extract3 = function extract4(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
  var _ref7 = options || {}, plain = _ref7.plain;
  if (clientOnly) {
    return null;
  }
  var keyStyleText = styleStr;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
  if (effectStyle) {
    Object.keys(effectStyle).forEach(function(effectKey) {
      if (!effectStyles[effectKey]) {
        effectStyles[effectKey] = true;
        var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
        var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
        if (effectKey.startsWith("@layer")) {
          keyStyleText = effectStyleHTML + keyStyleText;
        } else {
          keyStyleText += effectStyleHTML;
        }
      }
    });
  }
  return [order, styleId, keyStyleText];
};

// node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js
var CSS_VAR_PREFIX = "cssVar";
var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
  var key = config.key, prefix2 = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
  var _useContext = (0, import_react2.useContext)(StyleContext_default), instanceId = _useContext.cache.instanceId, container = _useContext.container;
  var tokenKey = token2._tokenKey;
  var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
  var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
    var originToken = fn();
    var _transformToken = transformToken(originToken, key, {
      prefix: prefix2,
      unitless: unitless2,
      ignore: ignore2,
      scope
    }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
    var styleId = uniqueHash(stylePath, cssVarsStr);
    return [mergedToken, cssVarsStr, styleId, key];
  }, function(_ref) {
    var _ref2 = _slicedToArray(_ref, 3), styleId = _ref2[2];
    if (isClientSide) {
      removeCSS(styleId, {
        mark: ATTR_MARK
      });
    }
  }, function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
    if (!cssVarsStr) {
      return;
    }
    var style2 = updateCSS(cssVarsStr, styleId, {
      mark: ATTR_MARK,
      prepend: "queue",
      attachTo: container,
      priority: -999
    });
    style2[CSS_IN_JS_INSTANCE] = instanceId;
    style2.setAttribute(ATTR_TOKEN, key);
  });
  return cache;
};
var extract5 = function extract6(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
  var _ref5 = options || {}, plain = _ref5.plain;
  if (!styleStr) {
    return null;
  }
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
var useCSSVarRegister_default = useCSSVarRegister;

// node_modules/@ant-design/cssinjs/es/extractStyle.js
var _ExtractStyleFns;
var ExtractStyleFns = (_ExtractStyleFns = {}, _defineProperty(_ExtractStyleFns, STYLE_PREFIX, extract3), _defineProperty(_ExtractStyleFns, TOKEN_PREFIX, extract), _defineProperty(_ExtractStyleFns, CSS_VAR_PREFIX, extract5), _ExtractStyleFns);

// node_modules/@ant-design/cssinjs/es/Keyframes.js
var Keyframe = function() {
  function Keyframe2(name, style2) {
    _classCallCheck(this, Keyframe2);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "style", void 0);
    _defineProperty(this, "_keyframe", true);
    this.name = name;
    this.style = style2;
  }
  _createClass(Keyframe2, [{
    key: "getName",
    value: function getName() {
      var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
    }
  }]);
  return Keyframe2;
}();
var Keyframes_default = Keyframe;

// node_modules/@ant-design/cssinjs/es/transformers/legacyLogicalProperties.js
function noSplit(list) {
  list.notSplit = true;
  return list;
}
var keyMap = {
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: noSplit(["borderTop", "borderBottom"]),
  borderBlockStart: noSplit(["borderTop"]),
  borderBlockEnd: noSplit(["borderBottom"]),
  borderInline: noSplit(["borderLeft", "borderRight"]),
  borderInlineStart: noSplit(["borderLeft"]),
  borderInlineEnd: noSplit(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
};

// node_modules/@ant-design/icons/es/components/Context.js
var import_react3 = __toESM(require_react());
var IconContext = (0, import_react3.createContext)({});
var Context_default = IconContext;

// node_modules/@babel/runtime/helpers/esm/toArray.js
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}

// node_modules/rc-util/es/utils/get.js
function get(entity, path2) {
  var current = entity;
  for (var i = 0; i < path2.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path2[i]];
  }
  return current;
}

// node_modules/rc-util/es/utils/set.js
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths), path2 = _paths[0], restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path2 === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread2({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path2][restPath[0]];
  } else {
    clone[path2] = internalSet(clone[path2], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
function merge() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function(src) {
    function internalMerge(path2, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = get(src, path2);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = get(clone, path2);
          if (isArr) {
            clone = set(clone, path2, []);
          } else if (!originValue || _typeof(originValue) !== "object") {
            clone = set(clone, path2, createEmpty(value));
          }
          keys(value).forEach(function(key) {
            internalMerge([].concat(_toConsumableArray(path2), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path2, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}

// node_modules/antd/es/form/validateMessagesContext.js
var import_react4 = __toESM(require_react());
var validateMessagesContext_default = (0, import_react4.createContext)(void 0);

// node_modules/antd/es/locale/index.js
var React10 = __toESM(require_react());

// node_modules/rc-pagination/es/locale/en_US.js
var locale = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var en_US_default = locale;

// node_modules/rc-picker/es/locale/common.js
var commonLocale = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: true
};

// node_modules/rc-picker/es/locale/en_US.js
var locale2 = _objectSpread2(_objectSpread2({}, commonLocale), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
var en_US_default2 = locale2;

// node_modules/antd/es/time-picker/locale/en_US.js
var locale3 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
var en_US_default3 = locale3;

// node_modules/antd/es/date-picker/locale/en_US.js
var locale4 = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, en_US_default2),
  timePickerLocale: Object.assign({}, en_US_default3)
};
var en_US_default4 = locale4;

// node_modules/antd/es/calendar/locale/en_US.js
var en_US_default5 = en_US_default4;

// node_modules/antd/es/locale/en_US.js
var typeTemplate = "${label} is not a valid ${type}";
var localeValues = {
  locale: "en",
  Pagination: en_US_default,
  DatePicker: en_US_default4,
  TimePicker: en_US_default3,
  Calendar: en_US_default5,
  global: {
    placeholder: "Please select",
    close: "Close"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
var en_US_default6 = localeValues;

// node_modules/antd/es/modal/locale.js
var runtimeLocale = Object.assign({}, en_US_default6.Modal);
var localeList = [];
var generateLocale = () => localeList.reduce((merged, locale5) => Object.assign(Object.assign({}, merged), locale5), en_US_default6.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter((locale5) => locale5 !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = Object.assign({}, en_US_default6.Modal);
}
function getConfirmLocale() {
  return runtimeLocale;
}

// node_modules/antd/es/locale/context.js
var import_react5 = __toESM(require_react());
var LocaleContext = (0, import_react5.createContext)(void 0);
var context_default = LocaleContext;

// node_modules/antd/es/locale/useLocale.js
var React9 = __toESM(require_react());
var useLocale = (componentName, defaultLocale) => {
  const fullLocale = React9.useContext(context_default);
  const getLocale = React9.useMemo(() => {
    var _a;
    const locale5 = defaultLocale || en_US_default6[componentName];
    const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale5 === "function" ? locale5() : locale5), localeFromContext || {});
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = React9.useMemo(() => {
    const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
    if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
      return en_US_default6.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
var useLocale_default = useLocale;

// node_modules/antd/es/locale/index.js
var ANT_MARK = "internalMark";
var LocaleProvider = (props) => {
  const {
    locale: locale5 = {},
    children,
    _ANT_MARK__
  } = props;
  if (true) {
    const warning6 = devUseWarning("LocaleProvider");
    true ? warning6(_ANT_MARK__ === ANT_MARK, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale") : void 0;
  }
  React10.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale5 === null || locale5 === void 0 ? void 0 : locale5.Modal);
    return clearLocale;
  }, [locale5]);
  const getMemoizedContextValue = React10.useMemo(() => Object.assign(Object.assign({}, locale5), {
    exist: true
  }), [locale5]);
  return React10.createElement(context_default.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (true) {
  LocaleProvider.displayName = "LocaleProvider";
}
var locale_default = LocaleProvider;

// node_modules/antd/es/theme/context.js
var import_react6 = __toESM(require_react());

// node_modules/antd/es/theme/themes/seed.js
var defaultPresetColors = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
var seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
});
var seed_default = seedToken;

// node_modules/@ant-design/fast-color/es/FastColor.js
var round = Math.round;
function splitColorStr(str, parseNum) {
  const match3 = str.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [];
  const numList = match3.map((item) => parseFloat(item));
  for (let i = 0; i < 3; i += 1) {
    numList[i] = parseNum(numList[i] || 0, match3[i] || "", i);
  }
  if (match3[3]) {
    numList[3] = match3[3].includes("%") ? numList[3] / 100 : numList[3];
  } else {
    numList[3] = 1;
  }
  return numList;
}
var parseHSVorHSL = (num, _, index) => index === 0 ? num : num / 100;
function limitRange(value, max) {
  const mergedMax = max || 255;
  if (value > mergedMax) {
    return mergedMax;
  }
  if (value < 0) {
    return 0;
  }
  return value;
}
var FastColor = class _FastColor {
  constructor(input) {
    _defineProperty(this, "isValid", true);
    _defineProperty(this, "r", 0);
    _defineProperty(this, "g", 0);
    _defineProperty(this, "b", 0);
    _defineProperty(this, "a", 1);
    _defineProperty(this, "_h", void 0);
    _defineProperty(this, "_s", void 0);
    _defineProperty(this, "_l", void 0);
    _defineProperty(this, "_v", void 0);
    _defineProperty(this, "_max", void 0);
    _defineProperty(this, "_min", void 0);
    _defineProperty(this, "_brightness", void 0);
    function matchFormat(str) {
      return str[0] in input && str[1] in input && str[2] in input;
    }
    if (!input) {
    } else if (typeof input === "string") {
      let matchPrefix = function(prefix2) {
        return trimStr.startsWith(prefix2);
      };
      const trimStr = input.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
        this.fromHexString(trimStr);
      } else if (matchPrefix("rgb")) {
        this.fromRgbString(trimStr);
      } else if (matchPrefix("hsl")) {
        this.fromHslString(trimStr);
      } else if (matchPrefix("hsv") || matchPrefix("hsb")) {
        this.fromHsvString(trimStr);
      }
    } else if (input instanceof _FastColor) {
      this.r = input.r;
      this.g = input.g;
      this.b = input.b;
      this.a = input.a;
      this._h = input._h;
      this._s = input._s;
      this._l = input._l;
      this._v = input._v;
    } else if (matchFormat("rgb")) {
      this.r = limitRange(input.r);
      this.g = limitRange(input.g);
      this.b = limitRange(input.b);
      this.a = typeof input.a === "number" ? limitRange(input.a, 1) : 1;
    } else if (matchFormat("hsl")) {
      this.fromHsl(input);
    } else if (matchFormat("hsv")) {
      this.fromHsv(input);
    } else {
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(input));
    }
  }
  // ======================= Setter =======================
  setR(value) {
    return this._sc("r", value);
  }
  setG(value) {
    return this._sc("g", value);
  }
  setB(value) {
    return this._sc("b", value);
  }
  setA(value) {
    return this._sc("a", value, 1);
  }
  setHue(value) {
    const hsv = this.toHsv();
    hsv.h = value;
    return this._c(hsv);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function adjustGamma(raw) {
      const val = raw / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }
    const R = adjustGamma(this.r);
    const G = adjustGamma(this.g);
    const B = adjustGamma(this.b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }
  getHue() {
    if (typeof this._h === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._h = 0;
      } else {
        this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
      }
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._s = 0;
      } else {
        this._s = delta / this.getMax();
      }
    }
    return this._s;
  }
  getLightness() {
    if (typeof this._l === "undefined") {
      this._l = (this.getMax() + this.getMin()) / 510;
    }
    return this._l;
  }
  getValue() {
    if (typeof this._v === "undefined") {
      this._v = this.getMax() / 255;
    }
    return this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    if (typeof this._brightness === "undefined") {
      this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3;
    }
    return this._brightness;
  }
  // ======================== Func ========================
  darken(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() - amount / 100;
    if (l < 0) {
      l = 0;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  lighten(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() + amount / 100;
    if (l > 1) {
      l = 1;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(input, amount = 50) {
    const color = this._c(input);
    const p = amount / 100;
    const calc = (key) => (color[key] - this[key]) * p + this[key];
    const rgba = {
      r: round(calc("r")),
      g: round(calc("g")),
      b: round(calc("b")),
      a: round(calc("a") * 100) / 100
    };
    return this._c(rgba);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(amount = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, amount);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(amount = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, amount);
  }
  onBackground(background) {
    const bg = this._c(background);
    const alpha = this.a + bg.a * (1 - this.a);
    const calc = (key) => {
      return round((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
    };
    return this._c({
      r: calc("r"),
      g: calc("g"),
      b: calc("b"),
      a: alpha
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(other) {
    return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let hex2 = "#";
    const rHex = (this.r || 0).toString(16);
    hex2 += rHex.length === 2 ? rHex : "0" + rHex;
    const gHex = (this.g || 0).toString(16);
    hex2 += gHex.length === 2 ? gHex : "0" + gHex;
    const bHex = (this.b || 0).toString(16);
    hex2 += bHex.length === 2 ? bHex : "0" + bHex;
    if (typeof this.a === "number" && this.a >= 0 && this.a < 1) {
      const aHex = round(this.a * 255).toString(16);
      hex2 += aHex.length === 2 ? aHex : "0" + aHex;
    }
    return hex2;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const h = this.getHue();
    const s = round(this.getSaturation() * 100);
    const l = round(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${h},${s}%,${l}%,${this.a})` : `hsl(${h},${s}%,${l}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(rgb, value, max) {
    const clone = this.clone();
    clone[rgb] = limitRange(value, max);
    return clone;
  }
  _c(input) {
    return new this.constructor(input);
  }
  getMax() {
    if (typeof this._max === "undefined") {
      this._max = Math.max(this.r, this.g, this.b);
    }
    return this._max;
  }
  getMin() {
    if (typeof this._min === "undefined") {
      this._min = Math.min(this.r, this.g, this.b);
    }
    return this._min;
  }
  fromHexString(trimStr) {
    const withoutPrefix = trimStr.replace("#", "");
    function connectNum(index1, index2) {
      return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
    }
    if (withoutPrefix.length < 6) {
      this.r = connectNum(0);
      this.g = connectNum(1);
      this.b = connectNum(2);
      this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
    } else {
      this.r = connectNum(0, 1);
      this.g = connectNum(2, 3);
      this.b = connectNum(4, 5);
      this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
    }
  }
  fromHsl({
    h,
    s,
    l,
    a
  }) {
    this._h = h % 360;
    this._s = s;
    this._l = l;
    this.a = typeof a === "number" ? a : 1;
    if (s <= 0) {
      const rgb = round(l * 255);
      this.r = rgb;
      this.g = rgb;
      this.b = rgb;
    }
    let r = 0, g = 0, b = 0;
    const huePrime = h / 60;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
    if (huePrime >= 0 && huePrime < 1) {
      r = chroma;
      g = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      r = secondComponent;
      g = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      g = chroma;
      b = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      g = secondComponent;
      b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      r = secondComponent;
      b = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      r = chroma;
      b = secondComponent;
    }
    const lightnessModification = l - chroma / 2;
    this.r = round((r + lightnessModification) * 255);
    this.g = round((g + lightnessModification) * 255);
    this.b = round((b + lightnessModification) * 255);
  }
  fromHsv({
    h,
    s,
    v,
    a
  }) {
    this._h = h % 360;
    this._s = s;
    this._v = v;
    this.a = typeof a === "number" ? a : 1;
    const vv = round(v * 255);
    this.r = vv;
    this.g = vv;
    this.b = vv;
    if (s <= 0) {
      return;
    }
    const hh = h / 60;
    const i = Math.floor(hh);
    const ff = hh - i;
    const p = round(v * (1 - s) * 255);
    const q = round(v * (1 - s * ff) * 255);
    const t = round(v * (1 - s * (1 - ff)) * 255);
    switch (i) {
      case 0:
        this.g = t;
        this.b = p;
        break;
      case 1:
        this.r = q;
        this.b = p;
        break;
      case 2:
        this.r = p;
        this.b = t;
        break;
      case 3:
        this.r = p;
        this.g = q;
        break;
      case 4:
        this.r = t;
        this.g = p;
        break;
      case 5:
      default:
        this.g = p;
        this.b = q;
        break;
    }
  }
  fromHsvString(trimStr) {
    const cells = splitColorStr(trimStr, parseHSVorHSL);
    this.fromHsv({
      h: cells[0],
      s: cells[1],
      v: cells[2],
      a: cells[3]
    });
  }
  fromHslString(trimStr) {
    const cells = splitColorStr(trimStr, parseHSVorHSL);
    this.fromHsl({
      h: cells[0],
      s: cells[1],
      l: cells[2],
      a: cells[3]
    });
  }
  fromRgbString(trimStr) {
    const cells = splitColorStr(trimStr, (num, txt) => (
      // Convert percentage to number. e.g. 50% -> 128
      txt.includes("%") ? round(num / 100 * 255) : num
    ));
    this.r = cells[0];
    this.g = cells[1];
    this.b = cells[2];
    this.a = cells[3];
  }
};

// node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Math.round(saturation * 100) / 100;
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  value = Math.max(0, Math.min(1, value));
  return Math.round(value * 100) / 100;
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = new FastColor(color);
  var hsv = pColor.toHsv();
  for (var i = lightColorCount; i > 0; i -= 1) {
    var c = new FastColor({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    });
    patterns.push(c);
  }
  patterns.push(pColor);
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _c = new FastColor({
      h: getHue(hsv, _i),
      s: getSaturation(hsv, _i),
      v: getValue(hsv, _i)
    });
    patterns.push(_c);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref) {
      var index = _ref.index, amount = _ref.amount;
      return new FastColor(opts.backgroundColor || "#141414").mix(patterns[index], amount).toHexString();
    });
  }
  return patterns.map(function(c2) {
    return c2.toHexString();
  });
}

// node_modules/@ant-design/colors/es/presets.js
var presetPrimaryColors = {
  "red": "#F5222D",
  "volcano": "#FA541C",
  "orange": "#FA8C16",
  "gold": "#FAAD14",
  "yellow": "#FADB14",
  "lime": "#A0D911",
  "green": "#52C41A",
  "cyan": "#13C2C2",
  "blue": "#1677FF",
  "geekblue": "#2F54EB",
  "purple": "#722ED1",
  "magenta": "#EB2F96",
  "grey": "#666666"
};
var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
red.primary = red[5];
var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
volcano.primary = volcano[5];
var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
orange.primary = orange[5];
var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
gold.primary = gold[5];
var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
yellow.primary = yellow[5];
var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
lime.primary = lime[5];
var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
green.primary = green[5];
var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
cyan.primary = cyan[5];
var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
blue.primary = blue[5];
var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
geekblue.primary = geekblue[5];
var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
purple.primary = purple[5];
var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
magenta.primary = magenta[5];
var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
grey.primary = grey[5];
var presetPalettes = {
  red,
  volcano,
  orange,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey
};
var redDark = ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
redDark.primary = redDark[5];
var volcanoDark = ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
volcanoDark.primary = volcanoDark[5];
var orangeDark = ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
orangeDark.primary = orangeDark[5];
var goldDark = ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
goldDark.primary = goldDark[5];
var yellowDark = ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
yellowDark.primary = yellowDark[5];
var limeDark = ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
limeDark.primary = limeDark[5];
var greenDark = ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
greenDark.primary = greenDark[5];
var cyanDark = ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
cyanDark.primary = cyanDark[5];
var blueDark = ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
blueDark.primary = blueDark[5];
var geekblueDark = ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
geekblueDark.primary = geekblueDark[5];
var purpleDark = ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
purpleDark.primary = purpleDark[5];
var magentaDark = ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
magentaDark.primary = magentaDark[5];
var greyDark = ["#151515", "#1f1f1f", "#2d2d2d", "#393939", "#494949", "#5a5a5a", "#6a6a6a", "#7b7b7b", "#888888", "#969696"];
greyDark.primary = greyDark[5];

// node_modules/antd/es/theme/themes/shared/genColorMapToken.js
function genColorMapToken(seed, {
  generateColorPalettes: generateColorPalettes2,
  generateNeutralColorPalettes: generateNeutralColorPalettes2
}) {
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes2(colorLink);
  const colorErrorBgFilledHover = new FastColor(errorColors[1]).mix(new FastColor(errorColors[3]), 50).toHexString();
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBgFilledHover,
    colorErrorBgActive: errorColors[3],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new FastColor("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}

// node_modules/antd/es/theme/themes/shared/genRadius.js
var genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
var genRadius_default = genRadius;

// node_modules/antd/es/theme/themes/shared/genCommonMapToken.js
function genCommonMapToken(token2) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token2;
  return Object.assign({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius_default(borderRadius));
}

// node_modules/antd/es/theme/themes/shared/genControlHeight.js
var genControlHeight = (token2) => {
  const {
    controlHeight
  } = token2;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
var genControlHeight_default = genControlHeight;

// node_modules/antd/es/theme/themes/shared/genFontSizes.js
function getLineHeight(fontSize) {
  return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
  const fontSizes = Array.from({
    length: 10
  }).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(Math.E, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => ({
    size,
    lineHeight: getLineHeight(size)
  }));
}

// node_modules/antd/es/theme/themes/shared/genFontMapToken.js
var genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
var genFontMapToken_default = genFontMapToken;

// node_modules/antd/es/theme/themes/shared/genSizeMapToken.js
function genSizeMapToken(token2) {
  const {
    sizeUnit,
    sizeStep
  } = token2;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}

// node_modules/antd/es/theme/themes/default/colorAlgorithm.js
var getAlphaColor = (baseColor, alpha) => new FastColor(baseColor).setA(alpha).toRgbString();
var getSolidColor = (baseColor, brightness) => {
  const instance = new FastColor(baseColor);
  return instance.darken(brightness).toHexString();
};

// node_modules/antd/es/theme/themes/default/colors.js
var generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
var generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgSolid: getAlphaColor(colorTextBase, 1),
    colorBgSolidHover: getAlphaColor(colorTextBase, 0.75),
    colorBgSolidActive: getAlphaColor(colorTextBase, 0.95),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBgBlur: "transparent",
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};

// node_modules/antd/es/theme/themes/default/index.js
function derivative(token2) {
  presetPrimaryColors.pink = presetPrimaryColors.magenta;
  presetPalettes.pink = presetPalettes.magenta;
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = token2[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate(token2[colorKey]);
    return Array.from({
      length: 10
    }, () => 1).reduce((prev2, _, i) => {
      prev2[`${colorKey}-${i + 1}`] = colors[i];
      prev2[`${colorKey}${i + 1}`] = colors[i];
      return prev2;
    }, {});
  }).reduce((prev2, cur) => {
    prev2 = Object.assign(Object.assign({}, prev2), cur);
    return prev2;
  }, {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken_default(token2.fontSize)), genSizeMapToken(token2)), genControlHeight_default(token2)), genCommonMapToken(token2));
}

// node_modules/antd/es/theme/themes/default/theme.js
var defaultTheme = createTheme(derivative);
var theme_default = defaultTheme;

// node_modules/antd/es/theme/context.js
var defaultConfig = {
  token: seed_default,
  override: {
    override: seed_default
  },
  hashed: true
};
var DesignTokenContext = import_react6.default.createContext(defaultConfig);

// node_modules/antd/es/config-provider/context.js
var React12 = __toESM(require_react());
var defaultPrefixCls = "ant";
var defaultIconPrefixCls = "anticon";
var Variants = ["outlined", "borderless", "filled", "underlined"];
var defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
var ConfigContext = React12.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
var {
  Consumer: ConfigConsumer
} = ConfigContext;
var EMPTY_OBJECT = {};
function useComponentConfig(propName) {
  const context = React12.useContext(ConfigContext);
  const {
    getPrefixCls,
    direction,
    getPopupContainer
  } = context;
  const propValue = context[propName];
  return Object.assign(Object.assign({
    classNames: EMPTY_OBJECT,
    styles: EMPTY_OBJECT
  }, propValue), {
    getPrefixCls,
    direction,
    getPopupContainer
  });
}

// node_modules/antd/es/config-provider/cssVariables.js
var dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls2, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type5) => {
    const baseColor = new FastColor(colorVal);
    const colorPalettes = generate(baseColor.toRgbString());
    variables[`${type5}-color`] = formatColor(baseColor);
    variables[`${type5}-color-disabled`] = colorPalettes[1];
    variables[`${type5}-color-hover`] = colorPalettes[4];
    variables[`${type5}-color-active`] = colorPalettes[6];
    variables[`${type5}-color-outline`] = baseColor.clone().setA(0.2).toRgbString();
    variables[`${type5}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type5}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new FastColor(theme.primaryColor);
    const primaryColors = generate(primaryColor.toRgbString());
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c) => c.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c) => c.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c) => c.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c) => c.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c) => c.setA(c.a * 0.12));
    const primaryActiveColor = new FastColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c) => c.setA(c.a * 0.3));
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c) => c.darken(2));
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls2, theme) {
  const style2 = getStyle(globalPrefixCls2, theme);
  if (canUseDom()) {
    updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
  } else {
    true ? warning_default2(false, "ConfigProvider", "SSR do not support dynamic theme with css variables.") : void 0;
  }
}

// node_modules/antd/es/config-provider/DisabledContext.js
var React13 = __toESM(require_react());
var DisabledContext = React13.createContext(false);
var DisabledContextProvider = ({
  children,
  disabled
}) => {
  const originDisabled = React13.useContext(DisabledContext);
  return React13.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
var DisabledContext_default = DisabledContext;

// node_modules/antd/es/config-provider/hooks/useConfig.js
var import_react7 = __toESM(require_react());

// node_modules/antd/es/config-provider/SizeContext.js
var React14 = __toESM(require_react());
var SizeContext = React14.createContext(void 0);
var SizeContextProvider = ({
  children,
  size
}) => {
  const originSize = React14.useContext(SizeContext);
  return React14.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
var SizeContext_default = SizeContext;

// node_modules/antd/es/config-provider/hooks/useConfig.js
function useConfig() {
  const componentDisabled = (0, import_react7.useContext)(DisabledContext_default);
  const componentSize = (0, import_react7.useContext)(SizeContext_default);
  return {
    componentDisabled,
    componentSize
  };
}
var useConfig_default = useConfig;

// node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js
var import_react10 = __toESM(require_react());

// node_modules/@ant-design/cssinjs-utils/es/util/calc/calculator.js
var AbstractCalculator3 = _createClass(function AbstractCalculator4() {
  _classCallCheck(this, AbstractCalculator4);
});
var calculator_default2 = AbstractCalculator3;

// node_modules/@ant-design/cssinjs-utils/es/util/calc/CSSCalculator.js
var CALC_UNIT2 = "CALC_UNIT";
var regexp2 = new RegExp(CALC_UNIT2, "g");
function unit3(value) {
  if (typeof value === "number") {
    return "".concat(value).concat(CALC_UNIT2);
  }
  return value;
}
var CSSCalculator2 = function(_AbstractCalculator) {
  _inherits(CSSCalculator3, _AbstractCalculator);
  var _super = _createSuper(CSSCalculator3);
  function CSSCalculator3(num, unitlessCssVar) {
    var _this;
    _classCallCheck(this, CSSCalculator3);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", "");
    _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
    _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
    var numType = _typeof(num);
    _this.unitlessCssVar = unitlessCssVar;
    if (num instanceof CSSCalculator3) {
      _this.result = "(".concat(num.result, ")");
    } else if (numType === "number") {
      _this.result = unit3(num);
    } else if (numType === "string") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(CSSCalculator3, [{
    key: "add",
    value: function add(num) {
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " + ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " + ").concat(unit3(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " - ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " - ").concat(unit3(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " * ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " * ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator3) {
        this.result = "".concat(this.result, " / ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " / ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options) {
      var _this2 = this;
      var _ref = options || {}, cssUnit = _ref.unit;
      var mergedUnit = true;
      if (typeof cssUnit === "boolean") {
        mergedUnit = cssUnit;
      } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
        return _this2.result.includes(cssVar);
      })) {
        mergedUnit = false;
      }
      this.result = this.result.replace(regexp2, mergedUnit ? "px" : "");
      if (typeof this.lowPriority !== "undefined") {
        return "calc(".concat(this.result, ")");
      }
      return this.result;
    }
  }]);
  return CSSCalculator3;
}(calculator_default2);

// node_modules/@ant-design/cssinjs-utils/es/util/calc/NumCalculator.js
var NumCalculator2 = function(_AbstractCalculator) {
  _inherits(NumCalculator3, _AbstractCalculator);
  var _super = _createSuper(NumCalculator3);
  function NumCalculator3(num) {
    var _this;
    _classCallCheck(this, NumCalculator3);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", 0);
    if (num instanceof NumCalculator3) {
      _this.result = num.result;
    } else if (typeof num === "number") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(NumCalculator3, [{
    key: "add",
    value: function add(num) {
      if (num instanceof NumCalculator3) {
        this.result += num.result;
      } else if (typeof num === "number") {
        this.result += num;
      }
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof NumCalculator3) {
        this.result -= num.result;
      } else if (typeof num === "number") {
        this.result -= num;
      }
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (num instanceof NumCalculator3) {
        this.result *= num.result;
      } else if (typeof num === "number") {
        this.result *= num;
      }
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (num instanceof NumCalculator3) {
        this.result /= num.result;
      } else if (typeof num === "number") {
        this.result /= num;
      }
      return this;
    }
  }, {
    key: "equal",
    value: function equal() {
      return this.result;
    }
  }]);
  return NumCalculator3;
}(calculator_default2);
var NumCalculator_default = NumCalculator2;

// node_modules/@ant-design/cssinjs-utils/es/util/calc/index.js
var genCalc = function genCalc2(type5, unitlessCssVar) {
  var Calculator = type5 === "css" ? CSSCalculator2 : NumCalculator_default;
  return function(num) {
    return new Calculator(num, unitlessCssVar);
  };
};
var calc_default2 = genCalc;

// node_modules/@ant-design/cssinjs-utils/es/util/getCompVarPrefix.js
var getCompVarPrefix = function getCompVarPrefix2(component, prefix2) {
  return "".concat([prefix2, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
var getCompVarPrefix_default = getCompVarPrefix;

// node_modules/rc-util/es/hooks/useEvent.js
var React15 = __toESM(require_react());
function useEvent(callback) {
  var fnRef = React15.useRef();
  fnRef.current = callback;
  var memoFn = React15.useCallback(function() {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

// node_modules/rc-util/es/hooks/useState.js
var React16 = __toESM(require_react());
function useSafeState(defaultValue) {
  var destroyRef = React16.useRef(false);
  var _React$useState = React16.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
  React16.useEffect(function() {
    destroyRef.current = false;
    return function() {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

// node_modules/rc-util/es/hooks/useMergedState.js
function hasValue(value) {
  return value !== void 0;
}
function useMergedState(defaultStateValue, option) {
  var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
  var _useState = useSafeState(function() {
    if (hasValue(value)) {
      return value;
    } else if (hasValue(defaultValue)) {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    } else {
      return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
    }
  }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
  var mergedValue = value !== void 0 ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;
  var onChangeFn = useEvent(onChange);
  var _useState3 = useSafeState([mergedValue]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
  useLayoutUpdateEffect(function() {
    var prev2 = prevValue[0];
    if (innerValue !== prev2) {
      onChangeFn(innerValue, prev2);
    }
  }, [prevValue]);
  useLayoutUpdateEffect(function() {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);
  var triggerChange = useEvent(function(updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

// node_modules/rc-util/es/ref.js
var import_react8 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());

// node_modules/rc-util/es/React/isFragment.js
var REACT_ELEMENT_TYPE_18 = Symbol.for("react.element");
var REACT_ELEMENT_TYPE_19 = Symbol.for("react.transitional.element");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function isFragment(object4) {
  return (
    // Base object type
    object4 && _typeof(object4) === "object" && // React Element type
    (object4.$$typeof === REACT_ELEMENT_TYPE_18 || object4.$$typeof === REACT_ELEMENT_TYPE_19) && // React Fragment type
    object4.type === REACT_FRAGMENT_TYPE
  );
}

// node_modules/rc-util/es/ref.js
var ReactMajorVersion = Number(import_react8.version.split(".")[0]);
var fillRef = function fillRef2(ref, node2) {
  if (typeof ref === "function") {
    ref(node2);
  } else if (_typeof(ref) === "object" && ref && "current" in ref) {
    ref.current = node2;
  }
};
var composeRef = function composeRef2() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return function(node2) {
    refs.forEach(function(ref) {
      fillRef(ref, node2);
    });
  };
};
var useComposeRef = function useComposeRef2() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function() {
    return composeRef.apply(void 0, refs);
  }, refs, function(prev2, next2) {
    return prev2.length !== next2.length || prev2.every(function(ref, i) {
      return ref !== next2[i];
    });
  });
};
var supportRef = function supportRef2(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  if (!nodeOrComponent) {
    return false;
  }
  if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
    return true;
  }
  var type5 = (0, import_react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type5 === "function" && !((_type$prototype = type5.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type5.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== import_react_is.ForwardRef) {
    return false;
  }
  return true;
};
function isReactElement(node2) {
  return (0, import_react8.isValidElement)(node2) && !isFragment(node2);
}
var supportNodeRef = function supportNodeRef2(node2) {
  return isReactElement(node2) && supportRef(node2);
};
var getNodeRef = function getNodeRef2(node2) {
  if (node2 && isReactElement(node2)) {
    var ele = node2;
    return ele.props.propertyIsEnumerable("ref") ? ele.props.ref : ele.ref;
  }
  return null;
};

// node_modules/@ant-design/cssinjs-utils/es/util/getComponentToken.js
function getComponentToken(component, token2, defaultToken, options) {
  var customToken = _objectSpread2({}, token2[component]);
  if (options !== null && options !== void 0 && options.deprecatedTokens) {
    var deprecatedTokens = options.deprecatedTokens;
    deprecatedTokens.forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
      if (true) {
        warning_default(!(customToken !== null && customToken !== void 0 && customToken[oldTokenKey]), "Component Token `".concat(String(oldTokenKey), "` of ").concat(String(component), " is deprecated. Please use `").concat(String(newTokenKey), "` instead."));
      }
      if (customToken !== null && customToken !== void 0 && customToken[oldTokenKey] || customToken !== null && customToken !== void 0 && customToken[newTokenKey]) {
        var _customToken$newToken;
        (_customToken$newToken = customToken[newTokenKey]) !== null && _customToken$newToken !== void 0 ? _customToken$newToken : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
      }
    });
  }
  var mergedToken = _objectSpread2(_objectSpread2({}, defaultToken), customToken);
  Object.keys(mergedToken).forEach(function(key) {
    if (mergedToken[key] === token2[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
}
var getComponentToken_default = getComponentToken;

// node_modules/@ant-design/cssinjs-utils/es/util/statistic.js
var enableStatistic = true;
var recording = true;
function merge2() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  var ret = {};
  objs.forEach(function(obj) {
    if (_typeof(obj) !== "object") {
      return;
    }
    var keys2 = Object.keys(obj);
    keys2.forEach(function(key) {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: function get2() {
          return obj[key];
        }
      });
    });
  });
  recording = true;
  return ret;
}
var statistic = {};
function noop2() {
}
var statisticToken = function statisticToken2(token2) {
  var tokenKeys2;
  var proxy = token2;
  var flush = noop2;
  if (enableStatistic && typeof Proxy !== "undefined") {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token2, {
      get: function get2(obj, prop) {
        if (recording) {
          var _tokenKeys;
          (_tokenKeys = tokenKeys2) === null || _tokenKeys === void 0 || _tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = function flush2(componentName, componentToken) {
      var _statistic$componentN;
      statistic[componentName] = {
        global: Array.from(tokenKeys2),
        component: _objectSpread2(_objectSpread2({}, (_statistic$componentN = statistic[componentName]) === null || _statistic$componentN === void 0 ? void 0 : _statistic$componentN.component), componentToken)
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
};
var statistic_default = statisticToken;

// node_modules/@ant-design/cssinjs-utils/es/util/getDefaultComponentToken.js
function getDefaultComponentToken(component, token2, getDefaultToken) {
  if (typeof getDefaultToken === "function") {
    var _token$component;
    return getDefaultToken(merge2(token2, (_token$component = token2[component]) !== null && _token$component !== void 0 ? _token$component : {}));
  }
  return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
}
var getDefaultComponentToken_default = getDefaultComponentToken;

// node_modules/@ant-design/cssinjs-utils/es/util/maxmin.js
function genMaxMin(type5) {
  if (type5 === "js") {
    return {
      max: Math.max,
      min: Math.min
    };
  }
  return {
    max: function max() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return "max(".concat(args.map(function(value) {
        return unit2(value);
      }).join(","), ")");
    },
    min: function min() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return "min(".concat(args.map(function(value) {
        return unit2(value);
      }).join(","), ")");
    }
  };
}
var maxmin_default = genMaxMin;

// node_modules/@ant-design/cssinjs-utils/es/_util/hooks/useUniqueMemo.js
var import_react9 = __toESM(require_react());
var BEAT_LIMIT = 1e3 * 60 * 10;
var ArrayKeyMap = function() {
  function ArrayKeyMap2() {
    _classCallCheck(this, ArrayKeyMap2);
    _defineProperty(this, "map", /* @__PURE__ */ new Map());
    _defineProperty(this, "objectIDMap", /* @__PURE__ */ new WeakMap());
    _defineProperty(this, "nextID", 0);
    _defineProperty(this, "lastAccessBeat", /* @__PURE__ */ new Map());
    _defineProperty(this, "accessBeat", 0);
  }
  _createClass(ArrayKeyMap2, [{
    key: "set",
    value: function set2(keys2, value) {
      this.clear();
      var compositeKey = this.getCompositeKey(keys2);
      this.map.set(compositeKey, value);
      this.lastAccessBeat.set(compositeKey, Date.now());
    }
  }, {
    key: "get",
    value: function get2(keys2) {
      var compositeKey = this.getCompositeKey(keys2);
      var cache = this.map.get(compositeKey);
      this.lastAccessBeat.set(compositeKey, Date.now());
      this.accessBeat += 1;
      return cache;
    }
  }, {
    key: "getCompositeKey",
    value: function getCompositeKey(keys2) {
      var _this = this;
      var ids = keys2.map(function(key) {
        if (key && _typeof(key) === "object") {
          return "obj_".concat(_this.getObjectID(key));
        }
        return "".concat(_typeof(key), "_").concat(key);
      });
      return ids.join("|");
    }
  }, {
    key: "getObjectID",
    value: function getObjectID(obj) {
      if (this.objectIDMap.has(obj)) {
        return this.objectIDMap.get(obj);
      }
      var id = this.nextID;
      this.objectIDMap.set(obj, id);
      this.nextID += 1;
      return id;
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;
      if (this.accessBeat > 1e4) {
        var now = Date.now();
        this.lastAccessBeat.forEach(function(beat, key) {
          if (now - beat > BEAT_LIMIT) {
            _this2.map.delete(key);
            _this2.lastAccessBeat.delete(key);
          }
        });
        this.accessBeat = 0;
      }
    }
  }]);
  return ArrayKeyMap2;
}();
var uniqueMap = new ArrayKeyMap();
function useUniqueMemo(memoFn, deps) {
  return import_react9.default.useMemo(function() {
    var cachedValue = uniqueMap.get(deps);
    if (cachedValue) {
      return cachedValue;
    }
    var newValue = memoFn();
    uniqueMap.set(deps, newValue);
    return newValue;
  }, deps);
}
var useUniqueMemo_default = useUniqueMemo;

// node_modules/@ant-design/cssinjs-utils/es/hooks/useCSP.js
var useDefaultCSP = function useDefaultCSP2() {
  return {};
};
var useCSP_default = useDefaultCSP;

// node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js
function genStyleUtils(config) {
  var _config$useCSP = config.useCSP, useCSP = _config$useCSP === void 0 ? useCSP_default : _config$useCSP, useToken2 = config.useToken, usePrefix = config.usePrefix, getResetStyles = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
  function genStyleHooks2(component, styleFn, getDefaultToken, options) {
    var componentName = Array.isArray(component) ? component[0] : component;
    function prefixToken(key) {
      return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
    }
    var originUnitless = (options === null || options === void 0 ? void 0 : options.unitless) || {};
    var originCompUnitless = typeof getCompUnitless === "function" ? getCompUnitless(component) : {};
    var compUnitless = _objectSpread2(_objectSpread2({}, originCompUnitless), {}, _defineProperty({}, prefixToken("zIndexPopup"), true));
    Object.keys(originUnitless).forEach(function(key) {
      compUnitless[prefixToken(key)] = originUnitless[key];
    });
    var mergedOptions = _objectSpread2(_objectSpread2({}, options), {}, {
      unitless: compUnitless,
      prefixToken
    });
    var useStyle = genComponentStyleHook2(component, styleFn, getDefaultToken, mergedOptions);
    var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
    return function(prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      var _useStyle = useStyle(prefixCls, rootCls), _useStyle2 = _slicedToArray(_useStyle, 2), hashId = _useStyle2[1];
      var _useCSSVar = useCSSVar(rootCls), _useCSSVar2 = _slicedToArray(_useCSSVar, 2), wrapCSSVar = _useCSSVar2[0], cssVarCls = _useCSSVar2[1];
      return [wrapCSSVar, hashId, cssVarCls];
    };
  }
  function genCSSVarRegister(component, getDefaultToken, options) {
    var compUnitless = options.unitless, _options$injectStyle = options.injectStyle, injectStyle = _options$injectStyle === void 0 ? true : _options$injectStyle, prefixToken = options.prefixToken, ignore2 = options.ignore;
    var CSSVarRegister = function CSSVarRegister2(_ref) {
      var rootCls = _ref.rootCls, _ref$cssVar = _ref.cssVar, cssVar = _ref$cssVar === void 0 ? {} : _ref$cssVar;
      var _useToken = useToken2(), realToken = _useToken.realToken;
      useCSSVarRegister_default({
        path: [component],
        prefix: cssVar.prefix,
        key: cssVar.key,
        unitless: compUnitless,
        ignore: ignore2,
        token: realToken,
        scope: rootCls
      }, function() {
        var defaultToken = getDefaultComponentToken_default(component, realToken, getDefaultToken);
        var componentToken = getComponentToken_default(component, realToken, defaultToken, {
          deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
        });
        Object.keys(defaultToken).forEach(function(key) {
          componentToken[prefixToken(key)] = componentToken[key];
          delete componentToken[key];
        });
        return componentToken;
      });
      return null;
    };
    var useCSSVar = function useCSSVar2(rootCls) {
      var _useToken2 = useToken2(), cssVar = _useToken2.cssVar;
      return [function(node2) {
        return injectStyle && cssVar ? import_react10.default.createElement(import_react10.default.Fragment, null, import_react10.default.createElement(CSSVarRegister, {
          rootCls,
          cssVar,
          component
        }), node2) : node2;
      }, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
    };
    return useCSSVar;
  }
  function genComponentStyleHook2(componentName, styleFn, getDefaultToken) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
    var _cells = _slicedToArray(cells, 1), component = _cells[0];
    var concatComponent = cells.join("-");
    var mergedLayer = config.layer || {
      name: "antd"
    };
    return function(prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      var _useToken3 = useToken2(), theme = _useToken3.theme, realToken = _useToken3.realToken, hashId = _useToken3.hashId, token2 = _useToken3.token, cssVar = _useToken3.cssVar;
      var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
      var csp = useCSP();
      var type5 = cssVar ? "css" : "js";
      var calc = useUniqueMemo_default(function() {
        var unitlessCssVar = /* @__PURE__ */ new Set();
        if (cssVar) {
          Object.keys(options.unitless || {}).forEach(function(key) {
            unitlessCssVar.add(token2CSSVar(key, cssVar.prefix));
            unitlessCssVar.add(token2CSSVar(key, getCompVarPrefix_default(component, cssVar.prefix)));
          });
        }
        return calc_default2(type5, unitlessCssVar);
      }, [type5, component, cssVar === null || cssVar === void 0 ? void 0 : cssVar.prefix]);
      var _genMaxMin = maxmin_default(type5), max = _genMaxMin.max, min = _genMaxMin.min;
      var sharedConfig = {
        theme,
        token: token2,
        hashId,
        nonce: function nonce() {
          return csp.nonce;
        },
        clientOnly: options.clientOnly,
        layer: mergedLayer,
        // antd is always at top of styles
        order: options.order || -999
      };
      if (typeof getResetStyles === "function") {
        useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
          clientOnly: false,
          path: ["Shared", rootPrefixCls]
        }), function() {
          return getResetStyles(token2, {
            prefix: {
              rootPrefixCls,
              iconPrefixCls
            },
            csp
          });
        });
      }
      var wrapSSR = useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
        path: [concatComponent, prefixCls, iconPrefixCls]
      }), function() {
        if (options.injectStyle === false) {
          return [];
        }
        var _statisticToken = statistic_default(token2), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
        var defaultComponentToken = getDefaultComponentToken_default(component, realToken, getDefaultToken);
        var componentCls = ".".concat(prefixCls);
        var componentToken = getComponentToken_default(component, realToken, defaultComponentToken, {
          deprecatedTokens: options.deprecatedTokens
        });
        if (cssVar && defaultComponentToken && _typeof(defaultComponentToken) === "object") {
          Object.keys(defaultComponentToken).forEach(function(key) {
            defaultComponentToken[key] = "var(".concat(token2CSSVar(key, getCompVarPrefix_default(component, cssVar.prefix)), ")");
          });
        }
        var mergedToken = merge2(proxyToken, {
          componentCls,
          prefixCls,
          iconCls: ".".concat(iconPrefixCls),
          antCls: ".".concat(rootPrefixCls),
          calc,
          // @ts-ignore
          max,
          // @ts-ignore
          min
        }, cssVar ? defaultComponentToken : componentToken);
        var styleInterpolation = styleFn(mergedToken, {
          hashId,
          prefixCls,
          rootPrefixCls,
          iconPrefixCls
        });
        flush(component, componentToken);
        var commonStyle = typeof getCommonStyle === "function" ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
        return [options.resetStyle === false ? null : commonStyle, styleInterpolation];
      });
      return [wrapSSR, hashId];
    };
  }
  function genSubStyleComponent2(componentName, styleFn, getDefaultToken) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var useStyle = genComponentStyleHook2(componentName, styleFn, getDefaultToken, _objectSpread2({
      resetStyle: false,
      // Sub Style should default after root one
      order: -998
    }, options));
    var StyledComponent = function StyledComponent2(_ref2) {
      var prefixCls = _ref2.prefixCls, _ref2$rootCls = _ref2.rootCls, rootCls = _ref2$rootCls === void 0 ? prefixCls : _ref2$rootCls;
      useStyle(prefixCls, rootCls);
      return null;
    };
    if (true) {
      StyledComponent.displayName = "SubStyle_".concat(String(Array.isArray(componentName) ? componentName.join(".") : componentName));
    }
    return StyledComponent;
  }
  return {
    genStyleHooks: genStyleHooks2,
    genSubStyleComponent: genSubStyleComponent2,
    genComponentStyleHook: genComponentStyleHook2
  };
}
var genStyleUtils_default = genStyleUtils;

// node_modules/antd/es/theme/interface/presetColors.js
var PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];

// node_modules/antd/es/theme/useToken.js
var import_react11 = __toESM(require_react());

// node_modules/antd/es/version/version.js
var version_default = "5.26.1";

// node_modules/antd/es/version/index.js
var version_default2 = version_default;

// node_modules/antd/es/theme/util/getAlphaColor.js
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor2(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new FastColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new FastColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new FastColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new FastColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var getAlphaColor_default = getAlphaColor2;

// node_modules/antd/es/theme/util/alias.js
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(seed_default).forEach((token2) => {
    delete overrideTokens[token2];
  });
  const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  if (mergedToken.motion === false) {
    const fastDuration = "0s";
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor_default(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor_default(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor_default(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 3,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor_default(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new FastColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new FastColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new FastColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}

// node_modules/antd/es/theme/useToken.js
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
  opacityImage: true
};
var ignore = {
  size: true,
  sizeSM: true,
  sizeLG: true,
  sizeMD: true,
  sizeXS: true,
  sizeXXS: true,
  sizeMS: true,
  sizeXL: true,
  sizeXXL: true,
  sizeUnit: true,
  sizeStep: true,
  motionBase: true,
  motionUnit: true
};
var preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
var getComputedToken3 = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
    override
  } = overrideToken, components = __rest2(overrideToken, ["override"]);
  let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
    override
  });
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(([key, value]) => {
      const {
        theme: componentTheme
      } = value, componentTokens = __rest2(value, ["theme"]);
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken3(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar
  } = import_react11.default.useContext(DesignTokenContext);
  const salt = `${version_default2}-${hashed || ""}`;
  const mergedTheme = theme || theme_default;
  const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seed_default, rootDesignToken], {
    salt,
    override,
    getComputedToken: getComputedToken3,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken,
    cssVar: cssVar && {
      prefix: cssVar.prefix,
      key: cssVar.key,
      unitless,
      ignore,
      preserve
    }
  });
  return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
}

// node_modules/antd/es/theme/util/genStyleUtils.js
var import_react12 = __toESM(require_react());

// node_modules/antd/es/style/index.js
var textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
var resetComponent = (token2, needInheritFontFamily = false) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token2.colorText,
  fontSize: token2.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token2.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
});
var resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
var clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
var genLinkStyle = (token2) => ({
  a: {
    color: token2.colorLink,
    textDecoration: token2.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${token2.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: token2.colorLinkHover
    },
    "&:active": {
      color: token2.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: token2.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token2.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token2.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
var genCommonStyle = (token2, componentPrefixCls, rootCls, resetFont) => {
  const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
  const resetStyle = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let resetFontStyle = {};
  if (resetFont !== false) {
    resetFontStyle = {
      fontFamily: token2.fontFamily,
      fontSize: token2.fontSize
    };
  }
  return {
    [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
      [prefixSelector]: resetStyle
    })
  };
};
var genFocusOutline = (token2, offset2) => ({
  outline: `${unit2(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
  outlineOffset: offset2 !== null && offset2 !== void 0 ? offset2 : 1,
  transition: "outline-offset 0s, outline 0s"
});
var genFocusStyle = (token2, offset2) => ({
  "&:focus-visible": Object.assign({}, genFocusOutline(token2, offset2))
});
var genIconStyle = (iconPrefixCls) => ({
  [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
    [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
      display: "block"
    }
  })
});
var operationUnit = (token2) => Object.assign(Object.assign({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: token2.colorLink,
  textDecoration: token2.linkDecoration,
  outline: "none",
  cursor: "pointer",
  transition: `all ${token2.motionDurationSlow}`,
  border: 0,
  padding: 0,
  background: "none",
  userSelect: "none"
}, genFocusStyle(token2)), {
  "&:focus, &:hover": {
    color: token2.colorLinkHover
  },
  "&:active": {
    color: token2.colorLinkActive
  }
});

// node_modules/antd/es/theme/util/genStyleUtils.js
var {
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent
} = genStyleUtils_default({
  usePrefix: () => {
    const {
      getPrefixCls,
      iconPrefixCls
    } = (0, import_react12.useContext)(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    return {
      rootPrefixCls,
      iconPrefixCls
    };
  },
  useToken: () => {
    const [theme, realToken, hashId, token2, cssVar] = useToken();
    return {
      theme,
      realToken,
      hashId,
      token: token2,
      cssVar
    };
  },
  useCSP: () => {
    const {
      csp
    } = (0, import_react12.useContext)(ConfigContext);
    return csp !== null && csp !== void 0 ? csp : {};
  },
  getResetStyles: (token2, config) => {
    var _a;
    const linkStyle = genLinkStyle(token2);
    return [linkStyle, {
      "&": linkStyle
    }, genIconStyle((_a = config === null || config === void 0 ? void 0 : config.prefix.iconPrefixCls) !== null && _a !== void 0 ? _a : defaultIconPrefixCls)];
  },
  getCommonStyle: genCommonStyle,
  getCompUnitless: () => unitless
});

// node_modules/antd/es/theme/util/genPresetColor.js
function genPresetColor(token2, genCss) {
  return PresetColors.reduce((prev2, colorKey) => {
    const lightColor = token2[`${colorKey}1`];
    const lightBorderColor = token2[`${colorKey}3`];
    const darkColor = token2[`${colorKey}6`];
    const textColor = token2[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev2), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}

// node_modules/antd/es/theme/util/useResetIconStyle.js
var useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token2] = useToken();
  return useStyleRegister({
    theme,
    token: token2,
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
    layer: {
      name: "antd"
    }
  }, () => [genIconStyle(iconPrefixCls)]);
};
var useResetIconStyle_default = useResetIconStyle;

// node_modules/antd/es/config-provider/hooks/useThemeKey.js
var React20 = __toESM(require_react());
var fullClone3 = Object.assign({}, React20);
var {
  useId
} = fullClone3;
var useEmptyId = () => "";
var useThemeKey = typeof useId === "undefined" ? useEmptyId : useId;
var useThemeKey_default = useThemeKey;

// node_modules/antd/es/config-provider/hooks/useTheme.js
function useTheme(theme, parentTheme, config) {
  var _a, _b;
  const warning6 = devUseWarning("ConfigProvider");
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, defaultConfig), {
    hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : defaultConfig.hashed,
    cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
  }) : parentTheme;
  const themeKey = useThemeKey_default();
  if (true) {
    const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
    const validKey = !!(typeof themeConfig.cssVar === "object" && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || themeKey);
    true ? warning6(!cssVarEnabled || validKey, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.") : void 0;
  }
  return useMemo(() => {
    var _a2, _b2;
    if (!theme) {
      return parentTheme;
    }
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
    const mergedCssVar = ((_a2 = themeConfig.cssVar) !== null && _a2 !== void 0 ? _a2 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: config === null || config === void 0 ? void 0 : config.prefixCls
    }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === "object" && ((_b2 = themeConfig.cssVar) === null || _b2 === void 0 ? void 0 : _b2.key) || cssVarKey
    });
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index) => {
    const nextTheme = next2[index];
    return !isEqual_default(prevTheme, nextTheme, true);
  }));
}

// node_modules/antd/es/config-provider/MotionWrapper.js
var React31 = __toESM(require_react());

// node_modules/rc-motion/es/CSSMotion.js
var import_classnames = __toESM(require_classnames());

// node_modules/rc-util/es/Dom/findDOMNode.js
var import_react13 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
function isDOM(node2) {
  return node2 instanceof HTMLElement || node2 instanceof SVGElement;
}
function getDOM(node2) {
  if (node2 && _typeof(node2) === "object" && isDOM(node2.nativeElement)) {
    return node2.nativeElement;
  }
  if (isDOM(node2)) {
    return node2;
  }
  return null;
}
function findDOMNode(node2) {
  var domNode = getDOM(node2);
  if (domNode) {
    return domNode;
  }
  if (node2 instanceof import_react13.default.Component) {
    var _ReactDOM$findDOMNode;
    return (_ReactDOM$findDOMNode = import_react_dom.default.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(import_react_dom.default, node2);
  }
  return null;
}

// node_modules/rc-motion/es/CSSMotion.js
var React29 = __toESM(require_react());
var import_react17 = __toESM(require_react());

// node_modules/rc-motion/es/context.js
var React22 = __toESM(require_react());
var _excluded = ["children"];
var Context = React22.createContext({});
function MotionProvider(_ref) {
  var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded);
  return React22.createElement(Context.Provider, {
    value: props
  }, children);
}

// node_modules/rc-motion/es/DomWrapper.js
var React23 = __toESM(require_react());
var DomWrapper = function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [{
    key: "render",
    value: function render2() {
      return this.props.children;
    }
  }]);
  return DomWrapper2;
}(React23.Component);
var DomWrapper_default = DomWrapper;

// node_modules/rc-util/es/hooks/useSyncState.js
var React24 = __toESM(require_react());
function useSyncState(defaultValue) {
  var _React$useReducer = React24.useReducer(function(x) {
    return x + 1;
  }, 0), _React$useReducer2 = _slicedToArray(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
  var currentValueRef = React24.useRef(defaultValue);
  var getValue3 = useEvent(function() {
    return currentValueRef.current;
  });
  var setValue = useEvent(function(updater) {
    currentValueRef.current = typeof updater === "function" ? updater(currentValueRef.current) : updater;
    forceUpdate();
  });
  return [getValue3, setValue];
}

// node_modules/rc-motion/es/hooks/useStatus.js
var React28 = __toESM(require_react());
var import_react16 = __toESM(require_react());

// node_modules/rc-motion/es/interface.js
var STATUS_NONE = "none";
var STATUS_APPEAR = "appear";
var STATUS_ENTER = "enter";
var STATUS_LEAVE = "leave";
var STEP_NONE = "none";
var STEP_PREPARE = "prepare";
var STEP_START = "start";
var STEP_ACTIVE = "active";
var STEP_ACTIVATED = "end";
var STEP_PREPARED = "prepared";

// node_modules/rc-motion/es/hooks/useDomMotionEvents.js
var React25 = __toESM(require_react());
var import_react14 = __toESM(require_react());

// node_modules/rc-motion/es/util/motion.js
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  };
  if (domSupport) {
    if (!("AnimationEvent" in win)) {
      delete prefixes.animationend.animation;
    }
    if (!("TransitionEvent" in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
var style = {};
if (canUseDom()) {
  _document$createEleme = document.createElement("div");
  style = _document$createEleme.style;
}
var _document$createEleme;
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend");
var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || "animationend";
var transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (_typeof(transitionName) === "object") {
    var type5 = transitionType.replace(/-\w/g, function(match3) {
      return match3[1].toUpperCase();
    });
    return transitionName[type5];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}

// node_modules/rc-motion/es/hooks/useDomMotionEvents.js
var useDomMotionEvents_default = function(onInternalMotionEnd) {
  var cacheElementRef = (0, import_react14.useRef)();
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);
      cacheElementRef.current = element;
    }
  }
  React25.useEffect(function() {
    return function() {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};

// node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js
var import_react15 = __toESM(require_react());
var useIsomorphicLayoutEffect = canUseDom() ? import_react15.useLayoutEffect : import_react15.useEffect;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// node_modules/rc-motion/es/hooks/useStepQueue.js
var React27 = __toESM(require_react());

// node_modules/rc-util/es/raf.js
var raf = function raf2(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = function raf3(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf3(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf2(callback) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf(function() {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function(id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
if (true) {
  wrapperRaf.ids = function() {
    return rafIds;
  };
}
var raf_default = wrapperRaf;

// node_modules/rc-motion/es/hooks/useNextFrame.js
var React26 = __toESM(require_react());
var useNextFrame_default = function() {
  var nextFrameRef = React26.useRef(null);
  function cancelNextFrame() {
    raf_default.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = raf_default(function() {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  React26.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};

// node_modules/rc-motion/es/hooks/useStepQueue.js
var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue_default = function(status, prepareOnly, callback) {
  var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
  var _useNextFrame = useNextFrame_default(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  useIsomorphicLayoutEffect_default(function() {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);
      if (result === SkipStep) {
        setStep(nextStep, true);
      } else if (nextStep) {
        nextFrame(function(info) {
          function doNext() {
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  React27.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};

// node_modules/rc-motion/es/hooks/useStatus.js
function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
  var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
  var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = _slicedToArray(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
  var _useState3 = useSafeState(null), _useState4 = _slicedToArray(_useState3, 2), style2 = _useState4[0], setStyle = _useState4[1];
  var currentStatus = getStatus();
  var mountedRef = (0, import_react16.useRef)(false);
  var deadlineRef = (0, import_react16.useRef)(null);
  function getDomElement() {
    return getElement();
  }
  var activeRef = (0, import_react16.useRef)(false);
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE);
    setStyle(null, true);
  }
  var onInternalMotionEnd = useEvent(function(event) {
    var status = getStatus();
    if (status === STATUS_NONE) {
      return;
    }
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }
    if (currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  });
  var _useDomMotionEvents = useDomMotionEvents_default(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
  var getEventHandlers = function getEventHandlers2(targetStatus) {
    switch (targetStatus) {
      case STATUS_APPEAR:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
      case STATUS_ENTER:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
      case STATUS_LEAVE:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
      default:
        return {};
    }
  };
  var eventHandlers = React28.useMemo(function() {
    return getEventHandlers(currentStatus);
  }, [currentStatus]);
  var _useStepQueue = useStepQueue_default(currentStatus, !supportMotion, function(newStep) {
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];
      if (!onPrepare) {
        return SkipStep;
      }
      return onPrepare(getDomElement());
    }
    if (step in eventHandlers) {
      var _eventHandlers$step;
      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }
    if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
      patchMotionEvents(getDomElement());
      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function() {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }
    if (step === STEP_PREPARED) {
      updateMotionEndStatus();
    }
    return DoStep;
  }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;
  var visibleRef = (0, import_react16.useRef)(null);
  useIsomorphicLayoutEffect_default(function() {
    if (mountedRef.current && visibleRef.current === visible) {
      return;
    }
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;
    var nextStatus;
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      setStatus(STATUS_NONE);
    }
    visibleRef.current = visible;
  }, [visible]);
  (0, import_react16.useEffect)(function() {
    if (
      // Cancel appear
      currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
      currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
      currentStatus === STATUS_LEAVE && !motionLeave
    ) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0, import_react16.useEffect)(function() {
    return function() {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);
  var firstMountChangeRef = React28.useRef(false);
  (0, import_react16.useEffect)(function() {
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== void 0 && currentStatus === STATUS_NONE) {
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, currentStatus]);
  var mergedStyle = style2;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2({
      transition: "none"
    }, mergedStyle);
  }
  return [currentStatus, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

// node_modules/rc-motion/es/CSSMotion.js
function genCSSMotion(config) {
  var transitionSupport = config;
  if (_typeof(config) === "object") {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion = React29.forwardRef(function(props, ref) {
    var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
    var _React$useContext = React29.useContext(Context), contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);
    var nodeRef = (0, import_react17.useRef)();
    var wrapperNodeRef = (0, import_react17.useRef)();
    function getDomElement() {
      try {
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
    var renderedRef = React29.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }
    var setNodeRef = React29.useCallback(function(node2) {
      nodeRef.current = node2;
      fillRef(ref, node2);
    }, [ref]);
    var motionChildren;
    var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
      visible
    });
    if (!children) {
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          style: {
            display: "none"
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = "prepare";
      } else if (isActive(statusStep)) {
        statusSuffix = "active";
      } else if (statusStep === STEP_START) {
        statusSuffix = "start";
      }
      var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
        className: (0, import_classnames.default)(getTransitionName(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === "string")),
        style: statusStyle
      }), setNodeRef);
    }
    if (React29.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var originNodeRef = getNodeRef(motionChildren);
      if (!originNodeRef) {
        motionChildren = React29.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return React29.createElement(DomWrapper_default, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = "CSSMotion";
  return CSSMotion;
}
var CSSMotion_default = genCSSMotion(supportTransition);

// node_modules/rc-motion/es/CSSMotionList.js
var React30 = __toESM(require_react());

// node_modules/rc-motion/es/util/diff.js
var STATUS_ADD = "add";
var STATUS_KEEP = "keep";
var STATUS_REMOVE = "remove";
var STATUS_REMOVED = "removed";
function wrapKeyToObject(key) {
  var keyObj;
  if (key && _typeof(key) === "object" && "key" in key) {
    keyObj = key;
  } else {
    keyObj = {
      key
    };
  }
  return _objectSpread2(_objectSpread2({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return keys2.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);
  prevKeyObjects.forEach(function(keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }
    if (!hit) {
      list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  var keys2 = {};
  list.forEach(function(_ref) {
    var key = _ref.key;
    keys2[key] = (keys2[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys2).filter(function(key) {
    return keys2[key] > 1;
  });
  duplicatedKeys.forEach(function(matchKey) {
    list = list.filter(function(_ref2) {
      var key = _ref2.key, status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });
    list.forEach(function(node2) {
      if (node2.key === matchKey) {
        node2.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

// node_modules/rc-motion/es/CSSMotionList.js
var _excluded2 = ["component", "children", "onVisibleChanged", "onAllRemoved"];
var _excluded22 = ["status"];
var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion_default;
  var CSSMotionList = function(_React$Component) {
    _inherits(CSSMotionList2, _React$Component);
    var _super = _createSuper(CSSMotionList2);
    function CSSMotionList2() {
      var _this;
      _classCallCheck(this, CSSMotionList2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: []
      });
      _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
        _this.setState(function(prevState) {
          var nextKeyEntities = prevState.keyEntities.map(function(entity) {
            if (entity.key !== removeKey) return entity;
            return _objectSpread2(_objectSpread2({}, entity), {}, {
              status: STATUS_REMOVED
            });
          });
          return {
            keyEntities: nextKeyEntities
          };
        }, function() {
          var keyEntities = _this.state.keyEntities;
          var restKeysCount = keyEntities.filter(function(_ref) {
            var status = _ref.status;
            return status !== STATUS_REMOVED;
          }).length;
          if (restKeysCount === 0 && _this.props.onAllRemoved) {
            _this.props.onAllRemoved();
          }
        });
      });
      return _this;
    }
    _createClass(CSSMotionList2, [{
      key: "render",
      value: function render2() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded2);
        var Component4 = component || React30.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function(prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return React30.createElement(Component4, restProps, keyEntities.map(function(_ref2, index) {
          var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded22);
          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return React30.createElement(CSSMotion, _extends({}, motionProps, {
            key: eventProps.key,
            visible,
            eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), function(props, ref) {
            return children(_objectSpread2(_objectSpread2({}, props), {}, {
              index
            }), ref);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys2 = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys2);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function(entity) {
            var prevEntity = keyEntities.find(function(_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);
    return CSSMotionList2;
  }(React30.Component);
  _defineProperty(CSSMotionList, "defaultProps", {
    component: "div"
  });
  return CSSMotionList;
}
var CSSMotionList_default = genCSSMotionList(supportTransition);

// node_modules/rc-motion/es/index.js
var es_default = CSSMotion_default;

// node_modules/antd/es/config-provider/MotionWrapper.js
var MotionCacheContext = React31.createContext(true);
if (true) {
  MotionCacheContext.displayName = "MotionCacheContext";
}
function MotionWrapper(props) {
  const parentMotion = React31.useContext(MotionCacheContext);
  const {
    children
  } = props;
  const [, token2] = useToken();
  const {
    motion
  } = token2;
  const needWrapMotionProviderRef = React31.useRef(false);
  needWrapMotionProviderRef.current || (needWrapMotionProviderRef.current = parentMotion !== motion);
  if (needWrapMotionProviderRef.current) {
    return React31.createElement(MotionCacheContext.Provider, {
      value: motion
    }, React31.createElement(MotionProvider, {
      motion
    }, children));
  }
  return children;
}

// node_modules/antd/es/config-provider/PropWarning.js
var React32 = __toESM(require_react());
var PropWarning = React32.memo(({
  dropdownMatchSelectWidth
}) => {
  const warning6 = devUseWarning("ConfigProvider");
  warning6.deprecated(dropdownMatchSelectWidth === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth");
  return null;
});
if (true) {
  PropWarning.displayName = "PropWarning";
}
var PropWarning_default = true ? PropWarning : () => null;

// node_modules/antd/es/config-provider/index.js
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var existThemeConfig = false;
var warnContext = true ? (componentName) => {
  true ? warning_default2(!existThemeConfig, componentName, `Static function can not consume context like dynamic theme. Please use 'App' component instead.`) : void 0;
} : (
  /* istanbul ignore next */
  null
);
var PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
var globalPrefixCls;
var globalIconPrefixCls;
var globalTheme;
var globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some((key) => key.endsWith("Color"));
}
var setGlobalConfig = (props) => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== void 0) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== void 0) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ("holderRender" in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
      true ? warning_default2(false, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead.") : void 0;
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
var globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
var ProviderChildren = (props) => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale: locale5,
    componentSize,
    direction,
    space,
    splitter,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    textArea,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  } = props;
  const getPrefixCls = React33.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  useResetIconStyle_default(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme, {
    prefixCls: getPrefixCls("")
  });
  if (true) {
    existThemeConfig = existThemeConfig || !!mergedTheme;
  }
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale5 || legacyLocale,
    direction,
    space,
    splitter,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    textArea,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    tooltip,
    popover,
    popconfirm,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  };
  if (true) {
    const warningFn = devUseWarning("ConfigProvider");
    warningFn(!("autoInsertSpaceInButton" in props), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  }
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach((key) => {
    if (baseConfig[key] !== void 0) {
      config[key] = baseConfig[key];
    }
  });
  PASSED_PROPS.forEach((propName) => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  if (typeof autoInsertSpaceInButton !== "undefined") {
    config.button = Object.assign({
      autoInsertSpace: autoInsertSpaceInButton
    }, config.button);
  }
  const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
  });
  const {
    layer
  } = React33.useContext(StyleContext_default);
  const memoIconContextValue = React33.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp,
    layer: layer ? "antd" : void 0
  }), [iconPrefixCls, csp, layer]);
  let childNode = React33.createElement(React33.Fragment, null, React33.createElement(PropWarning_default, {
    dropdownMatchSelectWidth
  }), children);
  const validateMessages = React33.useMemo(() => {
    var _a, _b, _c, _d;
    return merge(((_a = en_US_default6.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = React33.createElement(validateMessagesContext_default.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale5) {
    childNode = React33.createElement(locale_default, {
      locale: locale5,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = React33.createElement(Context_default.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = React33.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  childNode = React33.createElement(MotionWrapper, null, childNode);
  const memoTheme = React33.useMemo(() => {
    const _a = mergedTheme || {}, {
      algorithm,
      token: token2,
      components,
      cssVar
    } = _a, rest = __rest3(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : theme_default;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(([componentName, componentToken]) => {
      const parsedToken = Object.assign({}, componentToken);
      if ("algorithm" in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, seed_default), token2);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign({
        override: mergedToken
      }, parsedComponents),
      cssVar
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = React33.createElement(DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  if (memoedConfig.warning) {
    childNode = React33.createElement(WarningContext.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  if (componentDisabled !== void 0) {
    childNode = React33.createElement(DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return React33.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
var ConfigProvider = (props) => {
  const context = React33.useContext(ConfigContext);
  const antLocale = React33.useContext(context_default);
  return React33.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext_default;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig_default;
Object.defineProperty(ConfigProvider, "SizeContext", {
  get: () => {
    true ? warning_default2(false, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.") : void 0;
    return SizeContext_default;
  }
});
if (true) {
  ConfigProvider.displayName = "ConfigProvider";
}
var config_provider_default = ConfigProvider;

// node_modules/antd/es/message/useMessage.js
var React51 = __toESM(require_react());

// node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var React37 = __toESM(require_react());

// node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlined_default = CloseOutlined;

// node_modules/@ant-design/icons/es/components/AntdIcon.js
var React36 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());

// node_modules/@ant-design/icons/es/components/IconBase.js
var React35 = __toESM(require_react());

// node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// node_modules/@ant-design/icons/es/utils.js
var import_react18 = __toESM(require_react());
function camelCase(input) {
  return input.replace(/-(.)/g, function(match3, g) {
    return g.toUpperCase();
  });
}
function warning3(valid, message) {
  warning_default(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node2, key, rootProps) {
  if (!rootProps) {
    return import_react18.default.createElement(node2.tag, _objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index) {
      return generate2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
    }));
  }
  return import_react18.default.createElement(node2.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index) {
    return generate2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var svgBaseProps = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = (0, import_react18.useContext)(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls, layer = _useContext.layer;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  if (layer) {
    mergedStyleStr = "@layer ".concat(layer, " {\n").concat(mergedStyleStr, "\n}");
  }
  (0, import_react18.useEffect)(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: !layer,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded3 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded3);
  var svgRef = React35.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning3(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style: style2,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/@ant-design/icons/es/components/AntdIcon.js
var _excluded4 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor(blue.primary);
var Icon = React36.forwardRef(function(props, ref) {
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded4);
  var _React$useContext = React36.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = (0, import_classnames2.default)(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return React36.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), React36.createElement(IconBase_default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined2 = function CloseOutlined3(props, ref) {
  return React37.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: CloseOutlined_default
  }));
};
var RefIcon = React37.forwardRef(CloseOutlined2);
if (true) {
  RefIcon.displayName = "CloseOutlined";
}
var CloseOutlined_default2 = RefIcon;

// node_modules/antd/es/message/useMessage.js
var import_classnames6 = __toESM(require_classnames());

// node_modules/rc-notification/es/hooks/useNotification.js
var React42 = __toESM(require_react());

// node_modules/rc-notification/es/Notifications.js
var React41 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/rc-notification/es/NoticeList.js
var import_react20 = __toESM(require_react());
var import_classnames4 = __toESM(require_classnames());

// node_modules/rc-notification/es/Notice.js
var import_classnames3 = __toESM(require_classnames());

// node_modules/rc-util/es/KeyCode.js
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var KeyCode_default = KeyCode;

// node_modules/rc-notification/es/Notice.js
var React38 = __toESM(require_react());

// node_modules/rc-util/es/pickAttrs.js
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match2(key, prefix2) {
  return key.indexOf(prefix2) === 0;
}
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function(key) {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match2(key, ariaPrefix)) || // Data
      mergedConfig.data && match2(key, dataPrefix) || // Attr
      mergedConfig.attr && propList.includes(key)
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

// node_modules/rc-notification/es/Notice.js
var Notify = React38.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, style2 = props.style, className = props.className, _props$duration = props.duration, duration = _props$duration === void 0 ? 4.5 : _props$duration, showProgress = props.showProgress, _props$pauseOnHover = props.pauseOnHover, pauseOnHover = _props$pauseOnHover === void 0 ? true : _props$pauseOnHover, eventKey = props.eventKey, content = props.content, closable = props.closable, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? "x" : _props$closeIcon, divProps = props.props, onClick = props.onClick, onNoticeClose = props.onNoticeClose, times = props.times, forcedHovering = props.hovering;
  var _React$useState = React38.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), hovering = _React$useState2[0], setHovering = _React$useState2[1];
  var _React$useState3 = React38.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), percent = _React$useState4[0], setPercent = _React$useState4[1];
  var _React$useState5 = React38.useState(0), _React$useState6 = _slicedToArray(_React$useState5, 2), spentTime = _React$useState6[0], setSpentTime = _React$useState6[1];
  var mergedHovering = forcedHovering || hovering;
  var mergedShowProgress = duration > 0 && showProgress;
  var onInternalClose = function onInternalClose2() {
    onNoticeClose(eventKey);
  };
  var onCloseKeyDown = function onCloseKeyDown2(e) {
    if (e.key === "Enter" || e.code === "Enter" || e.keyCode === KeyCode_default.ENTER) {
      onInternalClose();
    }
  };
  React38.useEffect(function() {
    if (!mergedHovering && duration > 0) {
      var start = Date.now() - spentTime;
      var timeout = setTimeout(function() {
        onInternalClose();
      }, duration * 1e3 - spentTime);
      return function() {
        if (pauseOnHover) {
          clearTimeout(timeout);
        }
        setSpentTime(Date.now() - start);
      };
    }
  }, [duration, mergedHovering, times]);
  React38.useEffect(function() {
    if (!mergedHovering && mergedShowProgress && (pauseOnHover || spentTime === 0)) {
      var start = performance.now();
      var animationFrame;
      var calculate = function calculate2() {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(function(timestamp) {
          var runtime = timestamp + spentTime - start;
          var progress = Math.min(runtime / (duration * 1e3), 1);
          setPercent(progress * 100);
          if (progress < 1) {
            calculate2();
          }
        });
      };
      calculate();
      return function() {
        if (pauseOnHover) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [duration, spentTime, mergedHovering, mergedShowProgress, times]);
  var closableObj = React38.useMemo(function() {
    if (_typeof(closable) === "object" && closable !== null) {
      return closable;
    }
    if (closable) {
      return {
        closeIcon
      };
    }
    return {};
  }, [closable, closeIcon]);
  var ariaProps = pickAttrs(closableObj, true);
  var validPercent = 100 - (!percent || percent < 0 ? 0 : percent > 100 ? 100 : percent);
  var noticePrefixCls = "".concat(prefixCls, "-notice");
  return React38.createElement("div", _extends({}, divProps, {
    ref,
    className: (0, import_classnames3.default)(noticePrefixCls, className, _defineProperty({}, "".concat(noticePrefixCls, "-closable"), closable)),
    style: style2,
    onMouseEnter: function onMouseEnter(e) {
      var _divProps$onMouseEnte;
      setHovering(true);
      divProps === null || divProps === void 0 || (_divProps$onMouseEnte = divProps.onMouseEnter) === null || _divProps$onMouseEnte === void 0 || _divProps$onMouseEnte.call(divProps, e);
    },
    onMouseLeave: function onMouseLeave(e) {
      var _divProps$onMouseLeav;
      setHovering(false);
      divProps === null || divProps === void 0 || (_divProps$onMouseLeav = divProps.onMouseLeave) === null || _divProps$onMouseLeav === void 0 || _divProps$onMouseLeav.call(divProps, e);
    },
    onClick
  }), React38.createElement("div", {
    className: "".concat(noticePrefixCls, "-content")
  }, content), closable && React38.createElement("a", _extends({
    tabIndex: 0,
    className: "".concat(noticePrefixCls, "-close"),
    onKeyDown: onCloseKeyDown,
    "aria-label": "Close"
  }, ariaProps, {
    onClick: function onClick2(e) {
      e.preventDefault();
      e.stopPropagation();
      onInternalClose();
    }
  }), closableObj.closeIcon), mergedShowProgress && React38.createElement("progress", {
    className: "".concat(noticePrefixCls, "-progress"),
    max: "100",
    value: validPercent
  }, validPercent + "%"));
});
var Notice_default = Notify;

// node_modules/rc-notification/es/NotificationProvider.js
var import_react19 = __toESM(require_react());
var NotificationContext = import_react19.default.createContext({});
var NotificationProvider = function NotificationProvider2(_ref) {
  var children = _ref.children, classNames40 = _ref.classNames;
  return import_react19.default.createElement(NotificationContext.Provider, {
    value: {
      classNames: classNames40
    }
  }, children);
};
var NotificationProvider_default = NotificationProvider;

// node_modules/rc-notification/es/hooks/useStack.js
var DEFAULT_OFFSET = 8;
var DEFAULT_THRESHOLD = 3;
var DEFAULT_GAP = 16;
var useStack = function useStack2(config) {
  var result = {
    offset: DEFAULT_OFFSET,
    threshold: DEFAULT_THRESHOLD,
    gap: DEFAULT_GAP
  };
  if (config && _typeof(config) === "object") {
    var _config$offset, _config$threshold, _config$gap;
    result.offset = (_config$offset = config.offset) !== null && _config$offset !== void 0 ? _config$offset : DEFAULT_OFFSET;
    result.threshold = (_config$threshold = config.threshold) !== null && _config$threshold !== void 0 ? _config$threshold : DEFAULT_THRESHOLD;
    result.gap = (_config$gap = config.gap) !== null && _config$gap !== void 0 ? _config$gap : DEFAULT_GAP;
  }
  return [!!config, result];
};
var useStack_default = useStack;

// node_modules/rc-notification/es/NoticeList.js
var _excluded5 = ["className", "style", "classNames", "styles"];
var NoticeList = function NoticeList2(props) {
  var configList = props.configList, placement = props.placement, prefixCls = props.prefixCls, className = props.className, style2 = props.style, motion = props.motion, onAllNoticeRemoved = props.onAllNoticeRemoved, onNoticeClose = props.onNoticeClose, stackConfig = props.stack;
  var _useContext = (0, import_react20.useContext)(NotificationContext), ctxCls = _useContext.classNames;
  var dictRef = (0, import_react20.useRef)({});
  var _useState = (0, import_react20.useState)(null), _useState2 = _slicedToArray(_useState, 2), latestNotice = _useState2[0], setLatestNotice = _useState2[1];
  var _useState3 = (0, import_react20.useState)([]), _useState4 = _slicedToArray(_useState3, 2), hoverKeys = _useState4[0], setHoverKeys = _useState4[1];
  var keys2 = configList.map(function(config) {
    return {
      config,
      key: String(config.key)
    };
  });
  var _useStack = useStack_default(stackConfig), _useStack2 = _slicedToArray(_useStack, 2), stack = _useStack2[0], _useStack2$ = _useStack2[1], offset2 = _useStack2$.offset, threshold = _useStack2$.threshold, gap = _useStack2$.gap;
  var expanded = stack && (hoverKeys.length > 0 || keys2.length <= threshold);
  var placementMotion = typeof motion === "function" ? motion(placement) : motion;
  (0, import_react20.useEffect)(function() {
    if (stack && hoverKeys.length > 1) {
      setHoverKeys(function(prev2) {
        return prev2.filter(function(key) {
          return keys2.some(function(_ref) {
            var dataKey = _ref.key;
            return key === dataKey;
          });
        });
      });
    }
  }, [hoverKeys, keys2, stack]);
  (0, import_react20.useEffect)(function() {
    var _keys;
    if (stack && dictRef.current[(_keys = keys2[keys2.length - 1]) === null || _keys === void 0 ? void 0 : _keys.key]) {
      var _keys2;
      setLatestNotice(dictRef.current[(_keys2 = keys2[keys2.length - 1]) === null || _keys2 === void 0 ? void 0 : _keys2.key]);
    }
  }, [keys2, stack]);
  return import_react20.default.createElement(CSSMotionList_default, _extends({
    key: placement,
    className: (0, import_classnames4.default)(prefixCls, "".concat(prefixCls, "-").concat(placement), ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.list, className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-stack"), !!stack), "".concat(prefixCls, "-stack-expanded"), expanded)),
    style: style2,
    keys: keys2,
    motionAppear: true
  }, placementMotion, {
    onAllRemoved: function onAllRemoved() {
      onAllNoticeRemoved(placement);
    }
  }), function(_ref2, nodeRef) {
    var config = _ref2.config, motionClassName = _ref2.className, motionStyle = _ref2.style, motionIndex = _ref2.index;
    var _ref3 = config, key = _ref3.key, times = _ref3.times;
    var strKey = String(key);
    var _ref4 = config, configClassName = _ref4.className, configStyle = _ref4.style, configClassNames = _ref4.classNames, configStyles = _ref4.styles, restConfig = _objectWithoutProperties(_ref4, _excluded5);
    var dataIndex = keys2.findIndex(function(item) {
      return item.key === strKey;
    });
    var stackStyle = {};
    if (stack) {
      var index = keys2.length - 1 - (dataIndex > -1 ? dataIndex : motionIndex - 1);
      var transformX = placement === "top" || placement === "bottom" ? "-50%" : "0";
      if (index > 0) {
        var _dictRef$current$strK, _dictRef$current$strK2, _dictRef$current$strK3;
        stackStyle.height = expanded ? (_dictRef$current$strK = dictRef.current[strKey]) === null || _dictRef$current$strK === void 0 ? void 0 : _dictRef$current$strK.offsetHeight : latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetHeight;
        var verticalOffset = 0;
        for (var i = 0; i < index; i++) {
          var _dictRef$current$keys;
          verticalOffset += ((_dictRef$current$keys = dictRef.current[keys2[keys2.length - 1 - i].key]) === null || _dictRef$current$keys === void 0 ? void 0 : _dictRef$current$keys.offsetHeight) + gap;
        }
        var transformY = (expanded ? verticalOffset : index * offset2) * (placement.startsWith("top") ? 1 : -1);
        var scaleX = !expanded && latestNotice !== null && latestNotice !== void 0 && latestNotice.offsetWidth && (_dictRef$current$strK2 = dictRef.current[strKey]) !== null && _dictRef$current$strK2 !== void 0 && _dictRef$current$strK2.offsetWidth ? ((latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetWidth) - offset2 * 2 * (index < 3 ? index : 3)) / ((_dictRef$current$strK3 = dictRef.current[strKey]) === null || _dictRef$current$strK3 === void 0 ? void 0 : _dictRef$current$strK3.offsetWidth) : 1;
        stackStyle.transform = "translate3d(".concat(transformX, ", ").concat(transformY, "px, 0) scaleX(").concat(scaleX, ")");
      } else {
        stackStyle.transform = "translate3d(".concat(transformX, ", 0, 0)");
      }
    }
    return import_react20.default.createElement("div", {
      ref: nodeRef,
      className: (0, import_classnames4.default)("".concat(prefixCls, "-notice-wrapper"), motionClassName, configClassNames === null || configClassNames === void 0 ? void 0 : configClassNames.wrapper),
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), stackStyle), configStyles === null || configStyles === void 0 ? void 0 : configStyles.wrapper),
      onMouseEnter: function onMouseEnter() {
        return setHoverKeys(function(prev2) {
          return prev2.includes(strKey) ? prev2 : [].concat(_toConsumableArray(prev2), [strKey]);
        });
      },
      onMouseLeave: function onMouseLeave() {
        return setHoverKeys(function(prev2) {
          return prev2.filter(function(k) {
            return k !== strKey;
          });
        });
      }
    }, import_react20.default.createElement(Notice_default, _extends({}, restConfig, {
      ref: function ref(node2) {
        if (dataIndex > -1) {
          dictRef.current[strKey] = node2;
        } else {
          delete dictRef.current[strKey];
        }
      },
      prefixCls,
      classNames: configClassNames,
      styles: configStyles,
      className: (0, import_classnames4.default)(configClassName, ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.notice),
      style: configStyle,
      times,
      key,
      eventKey: key,
      onNoticeClose,
      hovering: stack && hoverKeys.length > 0
    })));
  });
};
if (true) {
  NoticeList.displayName = "NoticeList";
}
var NoticeList_default = NoticeList;

// node_modules/rc-notification/es/Notifications.js
var Notifications = React41.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-notification" : _props$prefixCls, container = props.container, motion = props.motion, maxCount = props.maxCount, className = props.className, style2 = props.style, onAllRemoved = props.onAllRemoved, stack = props.stack, renderNotifications3 = props.renderNotifications;
  var _React$useState = React41.useState([]), _React$useState2 = _slicedToArray(_React$useState, 2), configList = _React$useState2[0], setConfigList = _React$useState2[1];
  var onNoticeClose = function onNoticeClose2(key) {
    var _config$onClose;
    var config = configList.find(function(item) {
      return item.key === key;
    });
    config === null || config === void 0 || (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config);
    setConfigList(function(list) {
      return list.filter(function(item) {
        return item.key !== key;
      });
    });
  };
  React41.useImperativeHandle(ref, function() {
    return {
      open: function open(config) {
        setConfigList(function(list) {
          var clone = _toConsumableArray(list);
          var index = clone.findIndex(function(item) {
            return item.key === config.key;
          });
          var innerConfig = _objectSpread2({}, config);
          if (index >= 0) {
            var _list$index;
            innerConfig.times = (((_list$index = list[index]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1;
            clone[index] = innerConfig;
          } else {
            innerConfig.times = 0;
            clone.push(innerConfig);
          }
          if (maxCount > 0 && clone.length > maxCount) {
            clone = clone.slice(-maxCount);
          }
          return clone;
        });
      },
      close: function close(key) {
        onNoticeClose(key);
      },
      destroy: function destroy() {
        setConfigList([]);
      }
    };
  });
  var _React$useState3 = React41.useState({}), _React$useState4 = _slicedToArray(_React$useState3, 2), placements = _React$useState4[0], setPlacements = _React$useState4[1];
  React41.useEffect(function() {
    var nextPlacements = {};
    configList.forEach(function(config) {
      var _config$placement = config.placement, placement = _config$placement === void 0 ? "topRight" : _config$placement;
      if (placement) {
        nextPlacements[placement] = nextPlacements[placement] || [];
        nextPlacements[placement].push(config);
      }
    });
    Object.keys(placements).forEach(function(placement) {
      nextPlacements[placement] = nextPlacements[placement] || [];
    });
    setPlacements(nextPlacements);
  }, [configList]);
  var onAllNoticeRemoved = function onAllNoticeRemoved2(placement) {
    setPlacements(function(originPlacements) {
      var clone = _objectSpread2({}, originPlacements);
      var list = clone[placement] || [];
      if (!list.length) {
        delete clone[placement];
      }
      return clone;
    });
  };
  var emptyRef = React41.useRef(false);
  React41.useEffect(function() {
    if (Object.keys(placements).length > 0) {
      emptyRef.current = true;
    } else if (emptyRef.current) {
      onAllRemoved === null || onAllRemoved === void 0 || onAllRemoved();
      emptyRef.current = false;
    }
  }, [placements]);
  if (!container) {
    return null;
  }
  var placementList = Object.keys(placements);
  return (0, import_react_dom2.createPortal)(React41.createElement(React41.Fragment, null, placementList.map(function(placement) {
    var placementConfigList = placements[placement];
    var list = React41.createElement(NoticeList_default, {
      key: placement,
      configList: placementConfigList,
      placement,
      prefixCls,
      className: className === null || className === void 0 ? void 0 : className(placement),
      style: style2 === null || style2 === void 0 ? void 0 : style2(placement),
      motion,
      onNoticeClose,
      onAllNoticeRemoved,
      stack
    });
    return renderNotifications3 ? renderNotifications3(list, {
      prefixCls,
      key: placement
    }) : list;
  })), container);
});
if (true) {
  Notifications.displayName = "Notifications";
}
var Notifications_default = Notifications;

// node_modules/rc-notification/es/hooks/useNotification.js
var _excluded6 = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"];
var defaultGetContainer = function defaultGetContainer2() {
  return document.body;
};
var uniqueKey = 0;
function mergeConfig() {
  var clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach(function(obj) {
    if (obj) {
      Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        if (val !== void 0) {
          clone[key] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification() {
  var rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _rootConfig$getContai = rootConfig.getContainer, getContainer2 = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai, motion = rootConfig.motion, prefixCls = rootConfig.prefixCls, maxCount = rootConfig.maxCount, className = rootConfig.className, style2 = rootConfig.style, onAllRemoved = rootConfig.onAllRemoved, stack = rootConfig.stack, renderNotifications3 = rootConfig.renderNotifications, shareConfig = _objectWithoutProperties(rootConfig, _excluded6);
  var _React$useState = React42.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), container = _React$useState2[0], setContainer = _React$useState2[1];
  var notificationsRef = React42.useRef();
  var contextHolder = React42.createElement(Notifications_default, {
    container,
    ref: notificationsRef,
    prefixCls,
    motion,
    maxCount,
    className,
    style: style2,
    onAllRemoved,
    stack,
    renderNotifications: renderNotifications3
  });
  var _React$useState3 = React42.useState([]), _React$useState4 = _slicedToArray(_React$useState3, 2), taskQueue = _React$useState4[0], setTaskQueue = _React$useState4[1];
  var open = useEvent(function(config) {
    var mergedConfig = mergeConfig(shareConfig, config);
    if (mergedConfig.key === null || mergedConfig.key === void 0) {
      mergedConfig.key = "rc-notification-".concat(uniqueKey);
      uniqueKey += 1;
    }
    setTaskQueue(function(queue) {
      return [].concat(_toConsumableArray(queue), [{
        type: "open",
        config: mergedConfig
      }]);
    });
  });
  var api = React42.useMemo(function() {
    return {
      open,
      close: function close(key) {
        setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray(queue), [{
            type: "close",
            key
          }]);
        });
      },
      destroy: function destroy() {
        setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray(queue), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  React42.useEffect(function() {
    setContainer(getContainer2());
  });
  React42.useEffect(function() {
    if (notificationsRef.current && taskQueue.length) {
      taskQueue.forEach(function(task) {
        switch (task.type) {
          case "open":
            notificationsRef.current.open(task.config);
            break;
          case "close":
            notificationsRef.current.close(task.key);
            break;
          case "destroy":
            notificationsRef.current.destroy();
            break;
        }
      });
      var oriTaskQueue;
      var tgtTaskQueue;
      setTaskQueue(function(oriQueue) {
        if (oriTaskQueue !== oriQueue || !tgtTaskQueue) {
          oriTaskQueue = oriQueue;
          tgtTaskQueue = oriQueue.filter(function(task) {
            return !taskQueue.includes(task);
          });
        }
        return tgtTaskQueue;
      });
    }
  }, [taskQueue]);
  return [api, contextHolder];
}

// node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = (prefixCls) => {
  const [, , , , cssVar] = useToken();
  return cssVar ? `${prefixCls}-css-var` : "";
};
var useCSSVarCls_default = useCSSVarCls;

// node_modules/antd/es/message/PurePanel.js
var React50 = __toESM(require_react());

// node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js
var React43 = __toESM(require_react());

// node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js
var CheckCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
var CheckCircleFilled_default = CheckCircleFilled;

// node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js
var CheckCircleFilled2 = function CheckCircleFilled3(props, ref) {
  return React43.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: CheckCircleFilled_default
  }));
};
var RefIcon2 = React43.forwardRef(CheckCircleFilled2);
if (true) {
  RefIcon2.displayName = "CheckCircleFilled";
}
var CheckCircleFilled_default2 = RefIcon2;

// node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
var React44 = __toESM(require_react());

// node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js
var CloseCircleFilled = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
var CloseCircleFilled_default = CloseCircleFilled;

// node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
var CloseCircleFilled2 = function CloseCircleFilled3(props, ref) {
  return React44.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: CloseCircleFilled_default
  }));
};
var RefIcon3 = React44.forwardRef(CloseCircleFilled2);
if (true) {
  RefIcon3.displayName = "CloseCircleFilled";
}
var CloseCircleFilled_default2 = RefIcon3;

// node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js
var React45 = __toESM(require_react());

// node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js
var ExclamationCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
var ExclamationCircleFilled_default = ExclamationCircleFilled;

// node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js
var ExclamationCircleFilled2 = function ExclamationCircleFilled3(props, ref) {
  return React45.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: ExclamationCircleFilled_default
  }));
};
var RefIcon4 = React45.forwardRef(ExclamationCircleFilled2);
if (true) {
  RefIcon4.displayName = "ExclamationCircleFilled";
}
var ExclamationCircleFilled_default2 = RefIcon4;

// node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js
var React46 = __toESM(require_react());

// node_modules/@ant-design/icons-svg/es/asn/InfoCircleFilled.js
var InfoCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
var InfoCircleFilled_default = InfoCircleFilled;

// node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js
var InfoCircleFilled2 = function InfoCircleFilled3(props, ref) {
  return React46.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: InfoCircleFilled_default
  }));
};
var RefIcon5 = React46.forwardRef(InfoCircleFilled2);
if (true) {
  RefIcon5.displayName = "InfoCircleFilled";
}
var InfoCircleFilled_default2 = RefIcon5;

// node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var React47 = __toESM(require_react());

// node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var LoadingOutlined_default = LoadingOutlined;

// node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var LoadingOutlined2 = function LoadingOutlined3(props, ref) {
  return React47.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: LoadingOutlined_default
  }));
};
var RefIcon6 = React47.forwardRef(LoadingOutlined2);
if (true) {
  RefIcon6.displayName = "LoadingOutlined";
}
var LoadingOutlined_default2 = RefIcon6;

// node_modules/antd/es/message/PurePanel.js
var import_classnames5 = __toESM(require_classnames());

// node_modules/antd/es/_util/hooks/useZIndex.js
var import_react22 = __toESM(require_react());

// node_modules/antd/es/_util/zindexContext.js
var import_react21 = __toESM(require_react());
var zIndexContext = import_react21.default.createContext(void 0);
if (true) {
  zIndexContext.displayName = "zIndexContext";
}
var zindexContext_default = zIndexContext;

// node_modules/antd/es/_util/hooks/useZIndex.js
var CONTAINER_OFFSET = 100;
var CONTAINER_OFFSET_MAX_COUNT = 10;
var CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
var CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
var containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET,
  FloatButton: CONTAINER_OFFSET
};
var consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function isContainerType(type5) {
  return type5 in containerBaseZIndexOffset;
}
var useZIndex = (componentType, customZIndex) => {
  const [, token2] = useToken();
  const parentZIndex = import_react22.default.useContext(zindexContext_default);
  const isContainer = isContainerType(componentType);
  let result;
  if (customZIndex !== void 0) {
    result = [customZIndex, customZIndex];
  } else {
    let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
    if (isContainer) {
      zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token2.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    result = [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
  }
  if (true) {
    const warning6 = devUseWarning(componentType);
    const maxZIndex = token2.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
    const currentZIndex = result[0] || 0;
    true ? warning6(customZIndex !== void 0 || currentZIndex <= maxZIndex, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.") : void 0;
  }
  return result;
};

// node_modules/antd/es/message/style/index.js
var genMessageStyle = (token2) => {
  const {
    componentCls,
    iconCls,
    boxShadow,
    colorText,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    contentPadding,
    contentBg
  } = token2;
  const noticeCls = `${componentCls}-notice`;
  const messageMoveIn = new Keyframes_default("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: paddingXS,
      transform: "translateY(0)",
      opacity: 1
    }
  });
  const messageMoveOut = new Keyframes_default("MessageMoveOut", {
    "0%": {
      maxHeight: token2.height,
      padding: paddingXS,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  const noticeStyle = {
    padding: paddingXS,
    textAlign: "center",
    [`${componentCls}-custom-content`]: {
      display: "flex",
      alignItems: "center"
    },
    [`${componentCls}-custom-content > ${iconCls}`]: {
      marginInlineEnd: marginXS,
      // affected by ltr or rtl
      fontSize: fontSizeLG
    },
    [`${noticeCls}-content`]: {
      display: "inline-block",
      padding: contentPadding,
      background: contentBg,
      borderRadius: borderRadiusLG,
      boxShadow,
      pointerEvents: "all"
    },
    [`${componentCls}-success > ${iconCls}`]: {
      color: colorSuccess
    },
    [`${componentCls}-error > ${iconCls}`]: {
      color: colorError
    },
    [`${componentCls}-warning > ${iconCls}`]: {
      color: colorWarning
    },
    [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
      color: colorInfo
    }
  };
  return [
    // ============================ Holder ============================
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        color: colorText,
        position: "fixed",
        top: marginXS,
        width: "100%",
        pointerEvents: "none",
        zIndex: zIndexPopup,
        [`${componentCls}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
          animationName: messageMoveIn,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${componentCls}-move-up-leave`]: {
          animationName: messageMoveOut,
          animationDuration: motionDurationSlow,
          animationPlayState: "paused",
          animationTimingFunction: motionEaseInOutCirc
        },
        [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [componentCls]: {
        [`${noticeCls}-wrapper`]: Object.assign({}, noticeStyle)
      }
    },
    // ============================= Pure =============================
    {
      [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
};
var prepareComponentToken = (token2) => ({
  zIndexPopup: token2.zIndexPopupBase + CONTAINER_MAX_OFFSET + 10,
  contentBg: token2.colorBgElevated,
  contentPadding: `${(token2.controlHeightLG - token2.fontSize * token2.lineHeight) / 2}px ${token2.paddingSM}px`
});
var style_default = genStyleHooks("Message", (token2) => {
  const combinedToken = merge2(token2, {
    height: 150
  });
  return [genMessageStyle(combinedToken)];
}, prepareComponentToken);

// node_modules/antd/es/message/PurePanel.js
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var TypeIcon = {
  info: React50.createElement(InfoCircleFilled_default2, null),
  success: React50.createElement(CheckCircleFilled_default2, null),
  error: React50.createElement(CloseCircleFilled_default2, null),
  warning: React50.createElement(ExclamationCircleFilled_default2, null),
  loading: React50.createElement(LoadingOutlined_default2, null)
};
var PureContent = ({
  prefixCls,
  type: type5,
  icon,
  children
}) => React50.createElement("div", {
  className: (0, import_classnames5.default)(`${prefixCls}-custom-content`, `${prefixCls}-${type5}`)
}, icon || TypeIcon[type5], React50.createElement("span", null, children));
var PurePanel = (props) => {
  const {
    prefixCls: staticPrefixCls,
    className,
    type: type5,
    icon,
    content
  } = props, restProps = __rest4(props, ["prefixCls", "className", "type", "icon", "content"]);
  const {
    getPrefixCls
  } = React50.useContext(ConfigContext);
  const prefixCls = staticPrefixCls || getPrefixCls("message");
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default(prefixCls, rootCls);
  return wrapCSSVar(React50.createElement(Notice_default, Object.assign({}, restProps, {
    prefixCls,
    className: (0, import_classnames5.default)(className, hashId, `${prefixCls}-notice-pure-panel`, cssVarCls, rootCls),
    eventKey: "pure",
    duration: null,
    content: React50.createElement(PureContent, {
      prefixCls,
      type: type5,
      icon
    }, content)
  })));
};
var PurePanel_default = PurePanel;

// node_modules/antd/es/message/util.js
function getMotion(prefixCls, transitionName) {
  return {
    motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
  };
}
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise((resolve) => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

// node_modules/antd/es/message/useMessage.js
var __rest5 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var DEFAULT_OFFSET2 = 8;
var DEFAULT_DURATION = 3;
var Wrapper = ({
  children,
  prefixCls
}) => {
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default(prefixCls, rootCls);
  return wrapCSSVar(React51.createElement(NotificationProvider_default, {
    classNames: {
      list: (0, import_classnames6.default)(hashId, cssVarCls, rootCls)
    }
  }, children));
};
var renderNotifications = (node2, {
  prefixCls,
  key
}) => React51.createElement(Wrapper, {
  prefixCls,
  key
}, node2);
var Holder = React51.forwardRef((props, ref) => {
  const {
    top,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    duration = DEFAULT_DURATION,
    rtl,
    transitionName,
    onAllRemoved
  } = props;
  const {
    getPrefixCls,
    getPopupContainer,
    message,
    direction
  } = React51.useContext(ConfigContext);
  const prefixCls = staticPrefixCls || getPrefixCls("message");
  const getStyle2 = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET2
  });
  const getClassName = () => (0, import_classnames6.default)({
    [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === "rtl"
  });
  const getNotificationMotion = () => getMotion(prefixCls, transitionName);
  const mergedCloseIcon = React51.createElement("span", {
    className: `${prefixCls}-close-x`
  }, React51.createElement(CloseOutlined_default2, {
    className: `${prefixCls}-close-icon`
  }));
  const [api, holder] = useNotification({
    prefixCls,
    style: getStyle2,
    className: getClassName,
    motion: getNotificationMotion,
    closable: false,
    closeIcon: mergedCloseIcon,
    duration,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    onAllRemoved,
    renderNotifications
  });
  React51.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    message
  }));
  return holder;
});
var keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = React51.useRef(null);
  const warning6 = devUseWarning("Message");
  const wrapAPI = React51.useMemo(() => {
    const close = (key) => {
      var _a;
      (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
    };
    const open = (config) => {
      if (!holderRef.current) {
        true ? warning6(false, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.") : void 0;
        const fakeResult = () => {
        };
        fakeResult.then = () => {
        };
        return fakeResult;
      }
      const {
        open: originOpen,
        prefixCls,
        message
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
        content,
        icon,
        type: type5,
        key,
        className,
        style: style2,
        onClose
      } = config, restConfig = __rest5(config, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let mergedKey = key;
      if (mergedKey === void 0 || mergedKey === null) {
        keyIndex += 1;
        mergedKey = `antd-message-${keyIndex}`;
      }
      return wrapPromiseFn((resolve) => {
        originOpen(Object.assign(Object.assign({}, restConfig), {
          key: mergedKey,
          content: React51.createElement(PureContent, {
            prefixCls,
            type: type5,
            icon
          }, content),
          placement: "top",
          className: (0, import_classnames6.default)(type5 && `${noticePrefixCls}-${type5}`, className, message === null || message === void 0 ? void 0 : message.className),
          style: Object.assign(Object.assign({}, message === null || message === void 0 ? void 0 : message.style), style2),
          onClose: () => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            resolve();
          }
        }));
        return () => {
          close(mergedKey);
        };
      });
    };
    const destroy = (key) => {
      var _a;
      if (key !== void 0) {
        close(key);
      } else {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys2 = ["info", "success", "warning", "error", "loading"];
    keys2.forEach((type5) => {
      const typeOpen = (jointContent, duration, onClose) => {
        let config;
        if (jointContent && typeof jointContent === "object" && "content" in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent
          };
        }
        let mergedDuration;
        let mergedOnClose;
        if (typeof duration === "function") {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }
        const mergedConfig = Object.assign(Object.assign({
          onClose: mergedOnClose,
          duration: mergedDuration
        }, config), {
          type: type5
        });
        return open(mergedConfig);
      };
      clone[type5] = typeOpen;
    });
    return clone;
  }, []);
  return [wrapAPI, React51.createElement(Holder, Object.assign({
    key: "message-holder"
  }, messageConfig, {
    ref: holderRef
  }))];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}

// node_modules/antd/es/modal/useModal/index.js
var React128 = __toESM(require_react());

// node_modules/antd/es/_util/hooks/usePatchElement.js
var React52 = __toESM(require_react());
function usePatchElement() {
  const [elements, setElements] = React52.useState([]);
  const patchElement = React52.useCallback((element) => {
    setElements((originElements) => [].concat(_toConsumableArray(originElements), [element]));
    return () => {
      setElements((originElements) => originElements.filter((ele) => ele !== element));
    };
  }, []);
  return [elements, patchElement];
}

// node_modules/antd/es/modal/confirm.js
var import_react58 = __toESM(require_react());

// node_modules/antd/es/config-provider/UnstableContext.js
var React53 = __toESM(require_react());
var ReactDOM3 = __toESM(require_react_dom());

// node_modules/@babel/runtime/helpers/esm/OverloadYield.js
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}

// node_modules/@babel/runtime/helpers/esm/regeneratorDefine.js
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e2) {
    i = 0;
  }
  _regeneratorDefine = function regeneratorDefine(e2, r2, n2, t2) {
    if (r2) i ? i(e2, r2, {
      value: n2,
      enumerable: !t2,
      configurable: !t2,
      writable: !t2
    }) : e2[r2] = n2;
    else {
      var o = function o2(r3, n3) {
        _regeneratorDefine(e2, r3, function(e3) {
          return this._invoke(r3, n3, e3);
        });
      };
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine(e, r, n, t);
}

// node_modules/@babel/runtime/helpers/esm/regenerator.js
function _regenerator() {
  var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function i(r2, n2, o2, i2) {
    var c2 = n2 && n2.prototype instanceof Generator ? n2 : Generator, u2 = Object.create(c2.prototype);
    return _regeneratorDefine(u2, "_invoke", function(r3, n3, o3) {
      var i3, c3, u3, f2 = 0, p = o3 || [], y = false, G = {
        p: 0,
        n: 0,
        v: e,
        a: d,
        f: d.bind(e, 4),
        d: function d2(t2, r4) {
          return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
        }
      };
      function d(r4, n4) {
        for (c3 = r4, u3 = n4, t = 0; !y && f2 && !o4 && t < p.length; t++) {
          var o4, i4 = p[t], d2 = G.p, l = i4[2];
          r4 > 3 ? (o4 = l === n4) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n4, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n4 || n4 > l) && (i4[4] = r4, i4[5] = n4, G.n = l, c3 = 0));
        }
        if (o4 || r4 > 1) return a;
        throw y = true, n4;
      }
      return function(o4, p2, l) {
        if (f2 > 1) throw TypeError("Generator is already running");
        for (y && 1 === p2 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
          i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
          try {
            if (f2 = 2, i3) {
              if (c3 || (o4 = "next"), t = i3[o4]) {
                if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u3 = t.value, c3 < 2 && (c3 = 0);
              } else 1 === c3 && (t = i3["return"]) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
              i3 = e;
            } else if ((t = (y = G.n < 0) ? u3 : r3.call(n3, G)) !== a) break;
          } catch (t2) {
            i3 = e, c3 = 1, u3 = t2;
          } finally {
            f2 = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r2, o2, i2), true), u2;
  }
  var a = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function() {
    return this;
  }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function() {
    return this;
  }), _regeneratorDefine(u, "toString", function() {
    return "[object Generator]";
  }), (_regenerator = function _regenerator2() {
    return {
      w: i,
      m: f
    };
  })();
}

// node_modules/@babel/runtime/helpers/esm/regeneratorAsyncIterator.js
function AsyncIterator(t, e) {
  function n(r2, o, i, f) {
    try {
      var c = t[r2](o), u = c.value;
      return u instanceof _OverloadYield ? e.resolve(u.v).then(function(t2) {
        n("next", t2, i, f);
      }, function(t2) {
        n("throw", t2, i, f);
      }) : e.resolve(u).then(function(t2) {
        c.value = t2, i(c);
      }, function(t2) {
        return n("throw", t2, i, f);
      });
    } catch (t2) {
      f(t2);
    }
  }
  var r;
  this.next || (_regeneratorDefine(AsyncIterator.prototype), _regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), _regeneratorDefine(this, "_invoke", function(t2, o, i) {
    function f() {
      return new e(function(e2, r2) {
        n(t2, i, e2, r2);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, true);
}

// node_modules/@babel/runtime/helpers/esm/regeneratorAsyncGen.js
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new AsyncIterator(_regenerator().w(r, e, t, o), n || Promise);
}

// node_modules/@babel/runtime/helpers/esm/regeneratorAsync.js
function _regeneratorAsync(n, e, r, t, o) {
  var a = _regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function(n2) {
    return n2.done ? n2.value : a.next();
  });
}

// node_modules/@babel/runtime/helpers/esm/regeneratorKeys.js
function _regeneratorKeys(e) {
  var n = Object(e), r = [];
  for (var t in n) r.unshift(t);
  return function e2() {
    for (; r.length; ) if ((t = r.pop()) in n) return e2.value = t, e2.done = false, e2;
    return e2.done = true, e2;
  };
}

// node_modules/@babel/runtime/helpers/esm/regeneratorValues.js
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next2() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}

// node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
function _regeneratorRuntime() {
  "use strict";
  var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r2) {
    var e2 = "function" == typeof r2 && r2.constructor;
    return !!e2 && (e2 === t || "GeneratorFunction" === (e2.displayName || e2.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r2) {
    var e2, t2;
    return function(n2) {
      e2 || (e2 = {
        stop: function stop() {
          return t2(n2.a, 2);
        },
        "catch": function _catch() {
          return n2.v;
        },
        abrupt: function abrupt(r3, e3) {
          return t2(n2.a, o[r3], e3);
        },
        delegateYield: function delegateYield(r3, o2, a2) {
          return e2.resultName = o2, t2(n2.d, _regeneratorValues(r3), a2);
        },
        finish: function finish(r3) {
          return t2(n2.f, r3);
        }
      }, t2 = function t3(r3, _t, o2) {
        n2.p = e2.prev, n2.n = e2.next;
        try {
          return r3(_t, o2);
        } finally {
          e2.next = n2.n;
        }
      }), e2.resultName && (e2[e2.resultName] = n2.v, e2.resultName = void 0), e2.sent = n2.v, e2.next = n2.n;
      try {
        return r2.call(this, e2);
      } finally {
        n2.p = e2.prev, n2.n = e2.next;
      }
    };
  }
  return (_regeneratorRuntime = function _regeneratorRuntime2() {
    return {
      wrap: function wrap(e2, t2, n2, o2) {
        return r.w(a(e2), t2, n2, o2 && o2.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r2, e2) {
        return new _OverloadYield(r2, e2);
      },
      AsyncIterator,
      async: function async(r2, e2, t2, o2, u) {
        return (n(e2) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r2), e2, t2, o2, u);
      },
      keys: _regeneratorKeys,
      values: _regeneratorValues
    };
  })();
}

// node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}

// node_modules/rc-util/es/React/render.js
var ReactDOM2 = __toESM(require_react_dom());
var fullClone4 = _objectSpread2({}, ReactDOM2);
var version2 = fullClone4.version;
var reactRender = fullClone4.render;
var unmountComponentAtNode = fullClone4.unmountComponentAtNode;
var createRoot;
try {
  mainVersion = Number((version2 || "").split(".")[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone4.createRoot;
  }
} catch (e) {
}
var mainVersion;
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = "__rc_react_root__";
function modernRender(node2, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node2);
  container[MARK] = root;
}
function legacyRender(node2, container) {
  reactRender === null || reactRender === void 0 || reactRender(node2, container);
}
function render(node2, container) {
  if (createRoot) {
    modernRender(node2, container);
    return;
  }
  legacyRender(node2, container);
}
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(container) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.resolve().then(function() {
            var _container$MARK;
            (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
            delete container[MARK];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(container) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(createRoot !== void 0)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", modernUnmount(container));
        case 2:
          legacyUnmount(container);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}

// node_modules/antd/es/config-provider/UnstableContext.js
var defaultReactRender = (node2, container) => {
  if (true) {
    const majorVersion = parseInt(React53.version.split(".")[0], 10);
    const fullKeys = Object.keys(ReactDOM3);
    true ? warning_default2(majorVersion < 19 || fullKeys.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.") : void 0;
  }
  render(node2, container);
  return () => {
    return unmount(container);
  };
};
var unstableRender = defaultReactRender;
function unstableSetRender(render2) {
  if (render2) {
    unstableRender = render2;
  }
  return unstableRender;
}

// node_modules/antd/es/modal/ConfirmDialog.js
var React125 = __toESM(require_react());
var import_classnames38 = __toESM(require_classnames());

// node_modules/antd/es/_util/motion.js
var getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
var getRealHeight = (node2) => {
  const {
    scrollHeight
  } = node2;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
var getCurrentHeight = (node2) => ({
  height: node2 ? node2.offsetHeight : 0
});
var skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === "height";
var initCollapseMotion = (rootCls = defaultPrefixCls) => ({
  motionName: `${rootCls}-motion-collapse`,
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
});
var getTransitionName2 = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
var motion_default = initCollapseMotion;

// node_modules/antd/es/modal/components/ConfirmCancelBtn.js
var import_react47 = __toESM(require_react());

// node_modules/antd/es/_util/ActionButton.js
var React83 = __toESM(require_react());

// node_modules/antd/es/button/button.js
var import_react45 = __toESM(require_react());
var import_classnames23 = __toESM(require_classnames());

// node_modules/rc-util/es/omit.js
function omit(obj, fields) {
  var clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function(key) {
      delete clone[key];
    });
  }
  return clone;
}

// node_modules/antd/es/_util/wave/index.js
var import_react24 = __toESM(require_react());
var import_classnames8 = __toESM(require_classnames());

// node_modules/rc-util/es/Dom/isVisible.js
var isVisible_default = function(element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
};

// node_modules/antd/es/_util/reactNode.js
var import_react23 = __toESM(require_react());
function isFragment2(child) {
  return child && import_react23.default.isValidElement(child) && child.type === import_react23.default.Fragment;
}
var replaceElement = (element, replacement, props) => {
  if (!import_react23.default.isValidElement(element)) {
    return replacement;
  }
  return import_react23.default.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
};
function cloneElement2(element, props) {
  return replaceElement(element, element, props);
}

// node_modules/antd/es/_util/wave/style.js
var genWaveStyle = (token2) => {
  const {
    componentCls,
    colorPrimary
  } = token2;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${token2.motionDurationSlow} ${token2.motionEaseInOut}`, `opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`].join(",")
        }
      }
    }
  };
};
var style_default2 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);

// node_modules/antd/es/_util/wave/useWave.js
var React56 = __toESM(require_react());

// node_modules/antd/es/_util/wave/interface.js
var TARGET_CLS = `${defaultPrefixCls}-wave-target`;

// node_modules/antd/es/_util/wave/WaveEffect.js
var React55 = __toESM(require_react());
var import_classnames7 = __toESM(require_classnames());

// node_modules/antd/es/_util/wave/util.js
function isValidWaveColor(color) {
  return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
  color !== "transparent";
}
function getTargetWaveColor(node2) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node2);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}

// node_modules/antd/es/_util/wave/WaveEffect.js
function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
var WaveEffect = (props) => {
  const {
    className,
    target,
    component,
    registerUnmount
  } = props;
  const divRef = React55.useRef(null);
  const unmountRef = React55.useRef(null);
  React55.useEffect(() => {
    unmountRef.current = registerUnmount();
  }, []);
  const [color, setWaveColor] = React55.useState(null);
  const [borderRadius, setBorderRadius] = React55.useState([]);
  const [left, setLeft] = React55.useState(0);
  const [top, setTop] = React55.useState(0);
  const [width, setWidth] = React55.useState(0);
  const [height, setHeight] = React55.useState(0);
  const [enabled, setEnabled] = React55.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
  };
  if (color) {
    waveStyle["--wave-color"] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === "static";
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
  }
  React55.useEffect(() => {
    if (target) {
      const id = raf_default(() => {
        syncPos();
        setEnabled(true);
      });
      let resizeObserver;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        raf_default.cancel(id);
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === "Checkbox" || component === "Radio") && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
  return React55.createElement(es_default, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (_, event) => {
      var _a, _b;
      if (event.deadline || event.propertyName === "opacity") {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        (_b = unmountRef.current) === null || _b === void 0 ? void 0 : _b.call(unmountRef).then(() => {
          holder === null || holder === void 0 ? void 0 : holder.remove();
        });
      }
      return false;
    }
  }, ({
    className: motionClassName
  }, ref) => React55.createElement("div", {
    ref: composeRef(divRef, ref),
    className: (0, import_classnames7.default)(className, motionClassName, {
      "wave-quick": isSmallComponent
    }),
    style: waveStyle
  }));
};
var showWaveEffect = (target, info) => {
  var _a;
  const {
    component
  } = info;
  if (component === "Checkbox" && !((_a = target.querySelector("input")) === null || _a === void 0 ? void 0 : _a.checked)) {
    return;
  }
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = "0px";
  holder.style.top = "0px";
  target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
  const reactRender2 = unstableSetRender();
  let unmountCallback = null;
  function registerUnmount() {
    return unmountCallback;
  }
  unmountCallback = reactRender2(React55.createElement(WaveEffect, Object.assign({}, info, {
    target,
    registerUnmount
  })), holder);
};
var WaveEffect_default = showWaveEffect;

// node_modules/antd/es/_util/wave/useWave.js
var useWave = (nodeRef, className, component) => {
  const {
    wave
  } = React56.useContext(ConfigContext);
  const [, token2, hashId] = useToken();
  const showWave = useEvent((event) => {
    const node2 = nodeRef.current;
    if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node2) {
      return;
    }
    const targetNode = node2.querySelector(`.${TARGET_CLS}`) || node2;
    const {
      showEffect
    } = wave || {};
    (showEffect || WaveEffect_default)(targetNode, {
      className,
      token: token2,
      component,
      event,
      hashId
    });
  });
  const rafId = React56.useRef(null);
  const showDebounceWave = (event) => {
    raf_default.cancel(rafId.current);
    rafId.current = raf_default(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
};
var useWave_default = useWave;

// node_modules/antd/es/_util/wave/index.js
var Wave = (props) => {
  const {
    children,
    disabled,
    component
  } = props;
  const {
    getPrefixCls
  } = (0, import_react24.useContext)(ConfigContext);
  const containerRef = (0, import_react24.useRef)(null);
  const prefixCls = getPrefixCls("wave");
  const [, hashId] = style_default2(prefixCls);
  const showWave = useWave_default(containerRef, (0, import_classnames8.default)(prefixCls, hashId), component);
  import_react24.default.useEffect(() => {
    const node2 = containerRef.current;
    if (!node2 || node2.nodeType !== 1 || disabled) {
      return;
    }
    const onClick = (e) => {
      if (!isVisible_default(e.target) || // No need wave
      !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
        return;
      }
      showWave(e);
    };
    node2.addEventListener("click", onClick, true);
    return () => {
      node2.removeEventListener("click", onClick, true);
    };
  }, [disabled]);
  if (!import_react24.default.isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = supportRef(children) ? composeRef(getNodeRef(children), containerRef) : containerRef;
  return cloneElement2(children, {
    ref
  });
};
if (true) {
  Wave.displayName = "Wave";
}
var wave_default = Wave;

// node_modules/antd/es/config-provider/hooks/useSize.js
var import_react25 = __toESM(require_react());
var useSize = (customSize) => {
  const size = import_react25.default.useContext(SizeContext_default);
  const mergedSize = import_react25.default.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === "string") {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (typeof customSize === "function") {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
var useSize_default = useSize;

// node_modules/antd/es/space/Compact.js
var React60 = __toESM(require_react());
var import_classnames9 = __toESM(require_classnames());

// node_modules/rc-util/es/Children/toArray.js
var import_react26 = __toESM(require_react());
function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var ret = [];
  import_react26.default.Children.forEach(children, function(child) {
    if ((child === void 0 || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

// node_modules/antd/es/space/style/compact.js
var genSpaceCompactStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
var compact_default = genSpaceCompactStyle;

// node_modules/antd/es/space/style/index.js
var genSpaceStyle = (token2) => {
  const {
    componentCls,
    antCls
  } = token2;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
};
var genSpaceGapStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      "&-gap-row-small": {
        rowGap: token2.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: token2.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: token2.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: token2.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: token2.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: token2.spaceGapLargeSize
      }
    }
  };
};
var style_default3 = genStyleHooks("Space", (token2) => {
  const spaceToken = merge2(token2, {
    spaceGapSmallSize: token2.paddingXS,
    spaceGapMiddleSize: token2.padding,
    spaceGapLargeSize: token2.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), compact_default(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});

// node_modules/antd/es/space/Compact.js
var __rest6 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var SpaceCompactItemContext = React60.createContext(null);
var useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = React60.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React60.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return (0, import_classnames9.default)(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
var NoCompactStyle = (props) => {
  const {
    children
  } = props;
  return React60.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
var CompactItem = (props) => {
  const {
    children
  } = props, others = __rest6(props, ["children"]);
  return React60.createElement(SpaceCompactItemContext.Provider, {
    value: React60.useMemo(() => others, [others])
  }, children);
};
var Compact = (props) => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = React60.useContext(ConfigContext);
  const {
    size,
    direction,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children
  } = props, restProps = __rest6(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
  const mergedSize = useSize_default((ctx) => size !== null && size !== void 0 ? size : ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [wrapCSSVar, hashId] = style_default3(prefixCls);
  const clx = (0, import_classnames9.default)(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: direction === "vertical"
  }, className, rootClassName);
  const compactItemContext = React60.useContext(SpaceCompactItemContext);
  const childNodes = toArray(children);
  const nodes = React60.useMemo(() => childNodes.map((child, i) => {
    const key = (child === null || child === void 0 ? void 0 : child.key) || `${prefixCls}-item-${i}`;
    return React60.createElement(CompactItem, {
      key,
      compactSize: mergedSize,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  if (childNodes.length === 0) {
    return null;
  }
  return wrapCSSVar(React60.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
var Compact_default = Compact;

// node_modules/antd/es/button/button-group.js
var React61 = __toESM(require_react());
var import_classnames10 = __toESM(require_classnames());
var __rest7 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var GroupSizeContext = React61.createContext(void 0);
var ButtonGroup = (props) => {
  const {
    getPrefixCls,
    direction
  } = React61.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    size,
    className
  } = props, others = __rest7(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
  const [, , hashId] = useToken();
  const sizeCls = React61.useMemo(() => {
    switch (size) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [size]);
  if (true) {
    const warning6 = devUseWarning("Button.Group");
    warning6.deprecated(false, "Button.Group", "Space.Compact");
    true ? warning6(!size || ["large", "small", "middle"].includes(size), "usage", "Invalid prop `size`.") : void 0;
  }
  const classes = (0, import_classnames10.default)(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, hashId);
  return React61.createElement(GroupSizeContext.Provider, {
    value: size
  }, React61.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
var button_group_default = ButtonGroup;

// node_modules/antd/es/button/buttonHelpers.js
var import_react27 = __toESM(require_react());
var rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type5) {
  if (type5 === "danger") {
    return {
      danger: true
    };
  }
  return {
    type: type5
  };
}
function isString(str) {
  return typeof str === "string";
}
function isUnBorderedButtonVariant(type5) {
  return type5 === "text" || type5 === "link";
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === void 0) {
    return;
  }
  const SPACE = needInserted ? " " : "";
  if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement2(child, {
      children: child.props.children.split("").join(SPACE)
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child) ? import_react27.default.createElement("span", null, child.split("").join(SPACE)) : import_react27.default.createElement("span", null, child);
  }
  if (isFragment2(child)) {
    return import_react27.default.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  import_react27.default.Children.forEach(children, (child) => {
    const type5 = typeof child;
    const isCurrentChildPure = type5 === "string" || type5 === "number";
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return import_react27.default.Children.map(childList, (child) => splitCNCharsBySpace(child, needInserted));
}
var _ButtonColorTypes = ["default", "primary", "danger"].concat(_toConsumableArray(PresetColors));

// node_modules/antd/es/button/DefaultLoadingIcon.js
var import_react29 = __toESM(require_react());
var import_classnames12 = __toESM(require_classnames());

// node_modules/antd/es/button/IconWrapper.js
var import_react28 = __toESM(require_react());
var import_classnames11 = __toESM(require_classnames());
var IconWrapper = (0, import_react28.forwardRef)((props, ref) => {
  const {
    className,
    style: style2,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = (0, import_classnames11.default)(`${prefixCls}-icon`, className);
  return import_react28.default.createElement("span", {
    ref,
    className: iconWrapperCls,
    style: style2
  }, children);
});
var IconWrapper_default = IconWrapper;

// node_modules/antd/es/button/DefaultLoadingIcon.js
var InnerLoadingIcon = (0, import_react29.forwardRef)((props, ref) => {
  const {
    prefixCls,
    className,
    style: style2,
    iconClassName
  } = props;
  const mergedIconCls = (0, import_classnames12.default)(`${prefixCls}-loading-icon`, className);
  return import_react29.default.createElement(IconWrapper_default, {
    prefixCls,
    className: mergedIconCls,
    style: style2,
    ref
  }, import_react29.default.createElement(LoadingOutlined_default2, {
    className: iconClassName
  }));
});
var getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
});
var getRealWidth = (node2) => ({
  width: node2.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
});
var DefaultLoadingIcon = (props) => {
  const {
    prefixCls,
    loading,
    existIcon,
    className,
    style: style2,
    mount
  } = props;
  const visible = !!loading;
  if (existIcon) {
    return import_react29.default.createElement(InnerLoadingIcon, {
      prefixCls,
      className,
      style: style2
    });
  }
  return import_react29.default.createElement(es_default, {
    visible,
    // Used for minus flex gap style only
    motionName: `${prefixCls}-loading-icon-motion`,
    motionAppear: !mount,
    motionEnter: !mount,
    motionLeave: !mount,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, ({
    className: motionCls,
    style: motionStyle
  }, ref) => {
    const mergedStyle = Object.assign(Object.assign({}, style2), motionStyle);
    return import_react29.default.createElement(InnerLoadingIcon, {
      prefixCls,
      className: (0, import_classnames12.default)(className, motionCls),
      style: mergedStyle,
      ref
    });
  });
};
var DefaultLoadingIcon_default = DefaultLoadingIcon;

// node_modules/antd/es/button/style/group.js
var genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
var genGroupStyle = (token2) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover
  } = token2;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: token2.calc(lineWidth).mul(-1).equal(),
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
var group_default = genGroupStyle;

// node_modules/@rc-component/color-picker/es/ColorPicker.js
var import_react39 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/color.js
var _excluded7 = ["b"];
var _excluded23 = ["v"];
var getRoundNumber = function getRoundNumber2(value) {
  return Math.round(Number(value || 0));
};
var convertHsb2Hsv = function convertHsb2Hsv2(color) {
  if (color instanceof FastColor) {
    return color;
  }
  if (color && _typeof(color) === "object" && "h" in color && "b" in color) {
    var _ref = color, b = _ref.b, resets = _objectWithoutProperties(_ref, _excluded7);
    return _objectSpread2(_objectSpread2({}, resets), {}, {
      v: b
    });
  }
  if (typeof color === "string" && /hsb/.test(color)) {
    return color.replace(/hsb/, "hsv");
  }
  return color;
};
var Color = function(_FastColor) {
  _inherits(Color2, _FastColor);
  var _super = _createSuper(Color2);
  function Color2(color) {
    _classCallCheck(this, Color2);
    return _super.call(this, convertHsb2Hsv(color));
  }
  _createClass(Color2, [{
    key: "toHsbString",
    value: function toHsbString() {
      var hsb = this.toHsb();
      var saturation = getRoundNumber(hsb.s * 100);
      var lightness = getRoundNumber(hsb.b * 100);
      var hue = getRoundNumber(hsb.h);
      var alpha = hsb.a;
      var hsbString = "hsb(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%)");
      var hsbaString = "hsba(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%, ").concat(alpha.toFixed(alpha === 0 ? 0 : 2), ")");
      return alpha === 1 ? hsbString : hsbaString;
    }
  }, {
    key: "toHsb",
    value: function toHsb() {
      var _this$toHsv = this.toHsv(), v = _this$toHsv.v, resets = _objectWithoutProperties(_this$toHsv, _excluded23);
      return _objectSpread2(_objectSpread2({}, resets), {}, {
        b: v,
        a: this.a
      });
    }
  }]);
  return Color2;
}(FastColor);

// node_modules/@rc-component/color-picker/es/util.js
var ColorPickerPrefixCls = "rc-color-picker";
var generateColor = function generateColor2(color) {
  if (color instanceof Color) {
    return color;
  }
  return new Color(color);
};
var defaultColor = generateColor("#1677ff");
var calculateColor = function calculateColor2(props) {
  var offset2 = props.offset, targetRef = props.targetRef, containerRef = props.containerRef, color = props.color, type5 = props.type;
  var _containerRef$current = containerRef.current.getBoundingClientRect(), width = _containerRef$current.width, height = _containerRef$current.height;
  var _targetRef$current$ge = targetRef.current.getBoundingClientRect(), targetWidth = _targetRef$current$ge.width, targetHeight = _targetRef$current$ge.height;
  var centerOffsetX = targetWidth / 2;
  var centerOffsetY = targetHeight / 2;
  var saturation = (offset2.x + centerOffsetX) / width;
  var bright = 1 - (offset2.y + centerOffsetY) / height;
  var hsb = color.toHsb();
  var alphaOffset = saturation;
  var hueOffset = (offset2.x + centerOffsetX) / width * 360;
  if (type5) {
    switch (type5) {
      case "hue":
        return generateColor(_objectSpread2(_objectSpread2({}, hsb), {}, {
          h: hueOffset <= 0 ? 0 : hueOffset
        }));
      case "alpha":
        return generateColor(_objectSpread2(_objectSpread2({}, hsb), {}, {
          a: alphaOffset <= 0 ? 0 : alphaOffset
        }));
    }
  }
  return generateColor({
    h: hsb.h,
    s: saturation <= 0 ? 0 : saturation,
    b: bright >= 1 ? 1 : bright,
    a: hsb.a
  });
};
var calcOffset = function calcOffset2(color, type5) {
  var hsb = color.toHsb();
  switch (type5) {
    case "hue":
      return {
        x: hsb.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: color.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: hsb.s * 100,
        y: (1 - hsb.b) * 100
      };
  }
};

// node_modules/@rc-component/color-picker/es/ColorPicker.js
var import_classnames16 = __toESM(require_classnames());

// node_modules/@rc-component/color-picker/es/components/ColorBlock.js
var import_classnames13 = __toESM(require_classnames());
var import_react30 = __toESM(require_react());
var ColorBlock = function ColorBlock2(_ref) {
  var color = _ref.color, prefixCls = _ref.prefixCls, className = _ref.className, style2 = _ref.style, onClick = _ref.onClick;
  var colorBlockCls = "".concat(prefixCls, "-color-block");
  return import_react30.default.createElement("div", {
    className: (0, import_classnames13.default)(colorBlockCls, className),
    style: style2,
    onClick
  }, import_react30.default.createElement("div", {
    className: "".concat(colorBlockCls, "-inner"),
    style: {
      background: color
    }
  }));
};
var ColorBlock_default = ColorBlock;

// node_modules/@rc-component/color-picker/es/components/Picker.js
var import_react35 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/hooks/useColorDrag.js
var import_react31 = __toESM(require_react());
function getPosition(e) {
  var obj = "touches" in e ? e.touches[0] : e;
  var scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  var scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
function useColorDrag(props) {
  var targetRef = props.targetRef, containerRef = props.containerRef, direction = props.direction, onDragChange = props.onDragChange, onDragChangeComplete = props.onDragChangeComplete, calculate = props.calculate, color = props.color, disabledDrag = props.disabledDrag;
  var _useState = (0, import_react31.useState)({
    x: 0,
    y: 0
  }), _useState2 = _slicedToArray(_useState, 2), offsetValue = _useState2[0], setOffsetValue = _useState2[1];
  var mouseMoveRef = (0, import_react31.useRef)(null);
  var mouseUpRef = (0, import_react31.useRef)(null);
  (0, import_react31.useEffect)(function() {
    setOffsetValue(calculate());
  }, [color]);
  (0, import_react31.useEffect)(function() {
    return function() {
      document.removeEventListener("mousemove", mouseMoveRef.current);
      document.removeEventListener("mouseup", mouseUpRef.current);
      document.removeEventListener("touchmove", mouseMoveRef.current);
      document.removeEventListener("touchend", mouseUpRef.current);
      mouseMoveRef.current = null;
      mouseUpRef.current = null;
    };
  }, []);
  var updateOffset = function updateOffset2(e) {
    var _getPosition = getPosition(e), pageX = _getPosition.pageX, pageY = _getPosition.pageY;
    var _containerRef$current = containerRef.current.getBoundingClientRect(), rectX = _containerRef$current.x, rectY = _containerRef$current.y, width = _containerRef$current.width, height = _containerRef$current.height;
    var _targetRef$current$ge = targetRef.current.getBoundingClientRect(), targetWidth = _targetRef$current$ge.width, targetHeight = _targetRef$current$ge.height;
    var centerOffsetX = targetWidth / 2;
    var centerOffsetY = targetHeight / 2;
    var offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    var offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    var calcOffset3 = {
      x: offsetX,
      y: direction === "x" ? offsetValue.y : offsetY
    };
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return false;
    }
    onDragChange === null || onDragChange === void 0 || onDragChange(calcOffset3);
  };
  var onDragMove = function onDragMove2(e) {
    e.preventDefault();
    updateOffset(e);
  };
  var onDragStop = function onDragStop2(e) {
    e.preventDefault();
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    document.removeEventListener("touchmove", mouseMoveRef.current);
    document.removeEventListener("touchend", mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
    onDragChangeComplete === null || onDragChangeComplete === void 0 || onDragChangeComplete();
  };
  var onDragStart = function onDragStart2(e) {
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    if (disabledDrag) {
      return;
    }
    updateOffset(e);
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragStop);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragStop);
    mouseMoveRef.current = onDragMove;
    mouseUpRef.current = onDragStop;
  };
  return [offsetValue, onDragStart];
}
var useColorDrag_default = useColorDrag;

// node_modules/@rc-component/color-picker/es/components/Handler.js
var import_classnames14 = __toESM(require_classnames());
var import_react32 = __toESM(require_react());
var Handler = function Handler2(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? "default" : _ref$size, color = _ref.color, prefixCls = _ref.prefixCls;
  return import_react32.default.createElement("div", {
    className: (0, import_classnames14.default)("".concat(prefixCls, "-handler"), _defineProperty({}, "".concat(prefixCls, "-handler-sm"), size === "small")),
    style: {
      backgroundColor: color
    }
  });
};
var Handler_default = Handler;

// node_modules/@rc-component/color-picker/es/components/Palette.js
var import_react33 = __toESM(require_react());
var Palette = function Palette2(_ref) {
  var children = _ref.children, style2 = _ref.style, prefixCls = _ref.prefixCls;
  return import_react33.default.createElement("div", {
    className: "".concat(prefixCls, "-palette"),
    style: _objectSpread2({
      position: "relative"
    }, style2)
  }, children);
};
var Palette_default = Palette;

// node_modules/@rc-component/color-picker/es/components/Transform.js
var import_react34 = __toESM(require_react());
var Transform = (0, import_react34.forwardRef)(function(props, ref) {
  var children = props.children, x = props.x, y = props.y;
  return import_react34.default.createElement("div", {
    ref,
    style: {
      position: "absolute",
      left: "".concat(x, "%"),
      top: "".concat(y, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, children);
});
var Transform_default = Transform;

// node_modules/@rc-component/color-picker/es/components/Picker.js
var Picker = function Picker2(_ref) {
  var color = _ref.color, onChange = _ref.onChange, prefixCls = _ref.prefixCls, onChangeComplete = _ref.onChangeComplete, disabled = _ref.disabled;
  var pickerRef = (0, import_react35.useRef)();
  var transformRef = (0, import_react35.useRef)();
  var colorRef = (0, import_react35.useRef)(color);
  var onDragChange = useEvent(function(offsetValue) {
    var calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: pickerRef,
      color
    });
    colorRef.current = calcColor;
    onChange(calcColor);
  });
  var _useColorDrag = useColorDrag_default({
    color,
    containerRef: pickerRef,
    targetRef: transformRef,
    calculate: function calculate() {
      return calcOffset(color);
    },
    onDragChange,
    onDragChangeComplete: function onDragChangeComplete() {
      return onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(colorRef.current);
    },
    disabledDrag: disabled
  }), _useColorDrag2 = _slicedToArray(_useColorDrag, 2), offset2 = _useColorDrag2[0], dragStartHandle = _useColorDrag2[1];
  return import_react35.default.createElement("div", {
    ref: pickerRef,
    className: "".concat(prefixCls, "-select"),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, import_react35.default.createElement(Palette_default, {
    prefixCls
  }, import_react35.default.createElement(Transform_default, {
    x: offset2.x,
    y: offset2.y,
    ref: transformRef
  }, import_react35.default.createElement(Handler_default, {
    color: color.toRgbString(),
    prefixCls
  })), import_react35.default.createElement("div", {
    className: "".concat(prefixCls, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(color.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
};
var Picker_default = Picker;

// node_modules/@rc-component/color-picker/es/hooks/useColorState.js
var import_react36 = __toESM(require_react());
var useColorState = function useColorState2(defaultValue, value) {
  var _useMergedState = useMergedState(defaultValue, {
    value
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setValue = _useMergedState2[1];
  var color = (0, import_react36.useMemo)(function() {
    return generateColor(mergedValue);
  }, [mergedValue]);
  return [color, setValue];
};
var useColorState_default = useColorState;

// node_modules/@rc-component/color-picker/es/hooks/useComponent.js
var React72 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/components/Slider.js
var import_react38 = __toESM(require_react());
var import_classnames15 = __toESM(require_classnames());

// node_modules/@rc-component/color-picker/es/components/Gradient.js
var import_react37 = __toESM(require_react());
var Gradient = function Gradient2(_ref) {
  var colors = _ref.colors, children = _ref.children, _ref$direction = _ref.direction, direction = _ref$direction === void 0 ? "to right" : _ref$direction, type5 = _ref.type, prefixCls = _ref.prefixCls;
  var gradientColors = (0, import_react37.useMemo)(function() {
    return colors.map(function(color, idx) {
      var result = generateColor(color);
      if (type5 === "alpha" && idx === colors.length - 1) {
        result = new Color(result.setA(1));
      }
      return result.toRgbString();
    }).join(",");
  }, [colors, type5]);
  return import_react37.default.createElement("div", {
    className: "".concat(prefixCls, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(direction, ", ").concat(gradientColors, ")")
    }
  }, children);
};
var Gradient_default = Gradient;

// node_modules/@rc-component/color-picker/es/components/Slider.js
var Slider = function Slider2(props) {
  var prefixCls = props.prefixCls, colors = props.colors, disabled = props.disabled, onChange = props.onChange, onChangeComplete = props.onChangeComplete, color = props.color, type5 = props.type;
  var sliderRef = (0, import_react38.useRef)();
  var transformRef = (0, import_react38.useRef)();
  var colorRef = (0, import_react38.useRef)(color);
  var getValue3 = function getValue4(c) {
    return type5 === "hue" ? c.getHue() : c.a * 100;
  };
  var onDragChange = useEvent(function(offsetValue) {
    var calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: sliderRef,
      color,
      type: type5
    });
    colorRef.current = calcColor;
    onChange(getValue3(calcColor));
  });
  var _useColorDrag = useColorDrag_default({
    color,
    targetRef: transformRef,
    containerRef: sliderRef,
    calculate: function calculate() {
      return calcOffset(color, type5);
    },
    onDragChange,
    onDragChangeComplete: function onDragChangeComplete() {
      onChangeComplete(getValue3(colorRef.current));
    },
    direction: "x",
    disabledDrag: disabled
  }), _useColorDrag2 = _slicedToArray(_useColorDrag, 2), offset2 = _useColorDrag2[0], dragStartHandle = _useColorDrag2[1];
  var handleColor = import_react38.default.useMemo(function() {
    if (type5 === "hue") {
      var hsb = color.toHsb();
      hsb.s = 1;
      hsb.b = 1;
      hsb.a = 1;
      var lightColor = new Color(hsb);
      return lightColor;
    }
    return color;
  }, [color, type5]);
  var gradientList = import_react38.default.useMemo(function() {
    return colors.map(function(info) {
      return "".concat(info.color, " ").concat(info.percent, "%");
    });
  }, [colors]);
  return import_react38.default.createElement("div", {
    ref: sliderRef,
    className: (0, import_classnames15.default)("".concat(prefixCls, "-slider"), "".concat(prefixCls, "-slider-").concat(type5)),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, import_react38.default.createElement(Palette_default, {
    prefixCls
  }, import_react38.default.createElement(Transform_default, {
    x: offset2.x,
    y: offset2.y,
    ref: transformRef
  }, import_react38.default.createElement(Handler_default, {
    size: "small",
    color: handleColor.toHexString(),
    prefixCls
  })), import_react38.default.createElement(Gradient_default, {
    colors: gradientList,
    type: type5,
    prefixCls
  })));
};
var Slider_default = Slider;

// node_modules/@rc-component/color-picker/es/hooks/useComponent.js
function useComponent(components) {
  return React72.useMemo(function() {
    var _ref = components || {}, slider = _ref.slider;
    return [slider || Slider_default];
  }, [components]);
}

// node_modules/@rc-component/color-picker/es/ColorPicker.js
var HUE_COLORS = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}];
var ColorPicker = (0, import_react39.forwardRef)(function(props, ref) {
  var value = props.value, defaultValue = props.defaultValue, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? ColorPickerPrefixCls : _props$prefixCls, onChange = props.onChange, onChangeComplete = props.onChangeComplete, className = props.className, style2 = props.style, panelRender = props.panelRender, _props$disabledAlpha = props.disabledAlpha, disabledAlpha = _props$disabledAlpha === void 0 ? false : _props$disabledAlpha, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, components = props.components;
  var _useComponent = useComponent(components), _useComponent2 = _slicedToArray(_useComponent, 1), Slider3 = _useComponent2[0];
  var _useColorState = useColorState_default(defaultValue || defaultColor, value), _useColorState2 = _slicedToArray(_useColorState, 2), colorValue = _useColorState2[0], setColorValue = _useColorState2[1];
  var alphaColor = (0, import_react39.useMemo)(function() {
    return colorValue.setA(1).toRgbString();
  }, [colorValue]);
  var handleChange = function handleChange2(data, type5) {
    if (!value) {
      setColorValue(data);
    }
    onChange === null || onChange === void 0 || onChange(data, type5);
  };
  var getHueColor = function getHueColor2(hue) {
    return new Color(colorValue.setHue(hue));
  };
  var getAlphaColor3 = function getAlphaColor4(alpha) {
    return new Color(colorValue.setA(alpha / 100));
  };
  var onHueChange = function onHueChange2(hue) {
    handleChange(getHueColor(hue), {
      type: "hue",
      value: hue
    });
  };
  var onAlphaChange = function onAlphaChange2(alpha) {
    handleChange(getAlphaColor3(alpha), {
      type: "alpha",
      value: alpha
    });
  };
  var onHueChangeComplete = function onHueChangeComplete2(hue) {
    if (onChangeComplete) {
      onChangeComplete(getHueColor(hue));
    }
  };
  var onAlphaChangeComplete = function onAlphaChangeComplete2(alpha) {
    if (onChangeComplete) {
      onChangeComplete(getAlphaColor3(alpha));
    }
  };
  var mergeCls = (0, import_classnames16.default)("".concat(prefixCls, "-panel"), className, _defineProperty({}, "".concat(prefixCls, "-panel-disabled"), disabled));
  var sharedSliderProps = {
    prefixCls,
    disabled,
    color: colorValue
  };
  var defaultPanel = import_react39.default.createElement(import_react39.default.Fragment, null, import_react39.default.createElement(Picker_default, _extends({
    onChange: handleChange
  }, sharedSliderProps, {
    onChangeComplete
  })), import_react39.default.createElement("div", {
    className: "".concat(prefixCls, "-slider-container")
  }, import_react39.default.createElement("div", {
    className: (0, import_classnames16.default)("".concat(prefixCls, "-slider-group"), _defineProperty({}, "".concat(prefixCls, "-slider-group-disabled-alpha"), disabledAlpha))
  }, import_react39.default.createElement(Slider3, _extends({}, sharedSliderProps, {
    type: "hue",
    colors: HUE_COLORS,
    min: 0,
    max: 359,
    value: colorValue.getHue(),
    onChange: onHueChange,
    onChangeComplete: onHueChangeComplete
  })), !disabledAlpha && import_react39.default.createElement(Slider3, _extends({}, sharedSliderProps, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: alphaColor
    }],
    min: 0,
    max: 100,
    value: colorValue.a * 100,
    onChange: onAlphaChange,
    onChangeComplete: onAlphaChangeComplete
  }))), import_react39.default.createElement(ColorBlock_default, {
    color: colorValue.toRgbString(),
    prefixCls
  })));
  return import_react39.default.createElement("div", {
    className: mergeCls,
    style: style2,
    ref
  }, typeof panelRender === "function" ? panelRender(defaultPanel) : defaultPanel);
});
if (true) {
  ColorPicker.displayName = "ColorPicker";
}
var ColorPicker_default = ColorPicker;

// node_modules/@rc-component/color-picker/es/index.js
var es_default2 = ColorPicker_default;

// node_modules/antd/es/color-picker/color.js
var toHexFormat = (value, alpha) => (value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/g, "").slice(0, alpha ? 8 : 6)) || "";
var getHex = (value, alpha) => value ? toHexFormat(value, alpha) : "";
var AggregationColor = function() {
  function AggregationColor2(color) {
    _classCallCheck(this, AggregationColor2);
    var _a;
    this.cleared = false;
    if (color instanceof AggregationColor2) {
      this.metaColor = color.metaColor.clone();
      this.colors = (_a = color.colors) === null || _a === void 0 ? void 0 : _a.map((info) => ({
        color: new AggregationColor2(info.color),
        percent: info.percent
      }));
      this.cleared = color.cleared;
      return;
    }
    const isArray = Array.isArray(color);
    if (isArray && color.length) {
      this.colors = color.map(({
        color: c,
        percent
      }) => ({
        color: new AggregationColor2(c),
        percent
      }));
      this.metaColor = new Color(this.colors[0].color.metaColor);
    } else {
      this.metaColor = new Color(isArray ? "" : color);
    }
    if (!color || isArray && !this.colors) {
      this.metaColor = this.metaColor.setA(0);
      this.cleared = true;
    }
  }
  return _createClass(AggregationColor2, [{
    key: "toHsb",
    value: function toHsb() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function toHsbString() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return getHex(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function toRgbString() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function isGradient() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function toCssString() {
      const {
        colors
      } = this;
      if (colors) {
        const colorsStr = colors.map((c) => `${c.color.toRgbString()} ${c.percent}%`).join(", ");
        return `linear-gradient(90deg, ${colorsStr})`;
      }
      return this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function equals(color) {
      if (!color || this.isGradient() !== color.isGradient()) {
        return false;
      }
      if (!this.isGradient()) {
        return this.toHexString() === color.toHexString();
      }
      return this.colors.length === color.colors.length && this.colors.every((c, i) => {
        const target = color.colors[i];
        return c.percent === target.percent && c.color.equals(target.color);
      });
    }
  }]);
}();

// node_modules/antd/es/color-picker/components/ColorPresets.js
var import_react44 = __toESM(require_react());
var import_classnames22 = __toESM(require_classnames());

// node_modules/antd/es/collapse/Collapse.js
var React80 = __toESM(require_react());

// node_modules/@ant-design/icons/es/icons/RightOutlined.js
var React74 = __toESM(require_react());

// node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
var RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
var RightOutlined_default = RightOutlined;

// node_modules/@ant-design/icons/es/icons/RightOutlined.js
var RightOutlined2 = function RightOutlined3(props, ref) {
  return React74.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: RightOutlined_default
  }));
};
var RefIcon7 = React74.forwardRef(RightOutlined2);
if (true) {
  RefIcon7.displayName = "RightOutlined";
}
var RightOutlined_default2 = RefIcon7;

// node_modules/antd/es/collapse/Collapse.js
var import_classnames21 = __toESM(require_classnames());

// node_modules/rc-collapse/es/Collapse.js
var import_classnames19 = __toESM(require_classnames());
var import_react43 = __toESM(require_react());

// node_modules/rc-collapse/es/hooks/useItems.js
var import_react42 = __toESM(require_react());

// node_modules/rc-collapse/es/Panel.js
var import_classnames18 = __toESM(require_classnames());
var import_react41 = __toESM(require_react());

// node_modules/rc-collapse/es/PanelContent.js
var import_classnames17 = __toESM(require_classnames());
var import_react40 = __toESM(require_react());
var PanelContent = import_react40.default.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, forceRender = props.forceRender, className = props.className, style2 = props.style, children = props.children, isActive2 = props.isActive, role = props.role, customizeClassNames = props.classNames, styles = props.styles;
  var _React$useState = import_react40.default.useState(isActive2 || forceRender), _React$useState2 = _slicedToArray(_React$useState, 2), rendered = _React$useState2[0], setRendered = _React$useState2[1];
  import_react40.default.useEffect(function() {
    if (forceRender || isActive2) {
      setRendered(true);
    }
  }, [forceRender, isActive2]);
  if (!rendered) {
    return null;
  }
  return import_react40.default.createElement("div", {
    ref,
    className: (0, import_classnames17.default)("".concat(prefixCls, "-content"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-content-active"), isActive2), "".concat(prefixCls, "-content-inactive"), !isActive2), className),
    style: style2,
    role
  }, import_react40.default.createElement("div", {
    className: (0, import_classnames17.default)("".concat(prefixCls, "-content-box"), customizeClassNames === null || customizeClassNames === void 0 ? void 0 : customizeClassNames.body),
    style: styles === null || styles === void 0 ? void 0 : styles.body
  }, children));
});
PanelContent.displayName = "PanelContent";
var PanelContent_default = PanelContent;

// node_modules/rc-collapse/es/Panel.js
var _excluded8 = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "classNames", "styles", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"];
var CollapsePanel = import_react41.default.forwardRef(function(props, ref) {
  var _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, headerClass = props.headerClass, isActive2 = props.isActive, onItemClick = props.onItemClick, forceRender = props.forceRender, className = props.className, _props$classNames = props.classNames, customizeClassNames = _props$classNames === void 0 ? {} : _props$classNames, _props$styles = props.styles, styles = _props$styles === void 0 ? {} : _props$styles, prefixCls = props.prefixCls, collapsible = props.collapsible, accordion = props.accordion, panelKey = props.panelKey, extra = props.extra, header = props.header, expandIcon = props.expandIcon, openMotion = props.openMotion, destroyInactivePanel = props.destroyInactivePanel, children = props.children, resetProps = _objectWithoutProperties(props, _excluded8);
  var disabled = collapsible === "disabled";
  var ifExtraExist = extra !== null && extra !== void 0 && typeof extra !== "boolean";
  var collapsibleProps = _defineProperty(_defineProperty(_defineProperty({
    onClick: function onClick() {
      onItemClick === null || onItemClick === void 0 || onItemClick(panelKey);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter" || e.keyCode === KeyCode_default.ENTER || e.which === KeyCode_default.ENTER) {
        onItemClick === null || onItemClick === void 0 || onItemClick(panelKey);
      }
    },
    role: accordion ? "tab" : "button"
  }, "aria-expanded", isActive2), "aria-disabled", disabled), "tabIndex", disabled ? -1 : 0);
  var iconNodeInner = typeof expandIcon === "function" ? expandIcon(props) : import_react41.default.createElement("i", {
    className: "arrow"
  });
  var iconNode = iconNodeInner && import_react41.default.createElement("div", _extends({
    className: "".concat(prefixCls, "-expand-icon")
  }, ["header", "icon"].includes(collapsible) ? collapsibleProps : {}), iconNodeInner);
  var collapsePanelClassNames = (0, import_classnames18.default)("".concat(prefixCls, "-item"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-item-active"), isActive2), "".concat(prefixCls, "-item-disabled"), disabled), className);
  var headerClassName = (0, import_classnames18.default)(headerClass, "".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-collapsible-").concat(collapsible), !!collapsible), customizeClassNames.header);
  var headerProps = _objectSpread2({
    className: headerClassName,
    style: styles.header
  }, ["header", "icon"].includes(collapsible) ? {} : collapsibleProps);
  return import_react41.default.createElement("div", _extends({}, resetProps, {
    ref,
    className: collapsePanelClassNames
  }), import_react41.default.createElement("div", headerProps, showArrow && iconNode, import_react41.default.createElement("span", _extends({
    className: "".concat(prefixCls, "-header-text")
  }, collapsible === "header" ? collapsibleProps : {}), header), ifExtraExist && import_react41.default.createElement("div", {
    className: "".concat(prefixCls, "-extra")
  }, extra)), import_react41.default.createElement(es_default, _extends({
    visible: isActive2,
    leavedClassName: "".concat(prefixCls, "-content-hidden")
  }, openMotion, {
    forceRender,
    removeOnLeave: destroyInactivePanel
  }), function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return import_react41.default.createElement(PanelContent_default, {
      ref: motionRef,
      prefixCls,
      className: motionClassName,
      classNames: customizeClassNames,
      style: motionStyle,
      styles,
      isActive: isActive2,
      forceRender,
      role: accordion ? "tabpanel" : void 0
    }, children);
  }));
});
var Panel_default = CollapsePanel;

// node_modules/rc-collapse/es/hooks/useItems.js
var _excluded9 = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"];
var convertItemsToNodes = function convertItemsToNodes2(items, props) {
  var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
  return items.map(function(item, index) {
    var children = item.children, label = item.label, rawKey = item.key, rawCollapsible = item.collapsible, rawOnItemClick = item.onItemClick, rawDestroyInactivePanel = item.destroyInactivePanel, restProps = _objectWithoutProperties(item, _excluded9);
    var key = String(rawKey !== null && rawKey !== void 0 ? rawKey : index);
    var mergeCollapsible = rawCollapsible !== null && rawCollapsible !== void 0 ? rawCollapsible : collapsible;
    var mergeDestroyInactivePanel = rawDestroyInactivePanel !== null && rawDestroyInactivePanel !== void 0 ? rawDestroyInactivePanel : destroyInactivePanel;
    var handleItemClick = function handleItemClick2(value) {
      if (mergeCollapsible === "disabled") return;
      onItemClick(value);
      rawOnItemClick === null || rawOnItemClick === void 0 || rawOnItemClick(value);
    };
    var isActive2 = false;
    if (accordion) {
      isActive2 = activeKey[0] === key;
    } else {
      isActive2 = activeKey.indexOf(key) > -1;
    }
    return import_react42.default.createElement(Panel_default, _extends({}, restProps, {
      prefixCls,
      key,
      panelKey: key,
      isActive: isActive2,
      accordion,
      openMotion,
      expandIcon,
      header: label,
      collapsible: mergeCollapsible,
      onItemClick: handleItemClick,
      destroyInactivePanel: mergeDestroyInactivePanel
    }), children);
  });
};
var getNewChild = function getNewChild2(child, index, props) {
  if (!child) return null;
  var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
  var key = child.key || String(index);
  var _child$props = child.props, header = _child$props.header, headerClass = _child$props.headerClass, childDestroyInactivePanel = _child$props.destroyInactivePanel, childCollapsible = _child$props.collapsible, childOnItemClick = _child$props.onItemClick;
  var isActive2 = false;
  if (accordion) {
    isActive2 = activeKey[0] === key;
  } else {
    isActive2 = activeKey.indexOf(key) > -1;
  }
  var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
  var handleItemClick = function handleItemClick2(value) {
    if (mergeCollapsible === "disabled") return;
    onItemClick(value);
    childOnItemClick === null || childOnItemClick === void 0 || childOnItemClick(value);
  };
  var childProps = {
    key,
    panelKey: key,
    header,
    headerClass,
    isActive: isActive2,
    prefixCls,
    destroyInactivePanel: childDestroyInactivePanel !== null && childDestroyInactivePanel !== void 0 ? childDestroyInactivePanel : destroyInactivePanel,
    openMotion,
    accordion,
    children: child.props.children,
    onItemClick: handleItemClick,
    expandIcon,
    collapsible: mergeCollapsible
  };
  if (typeof child.type === "string") {
    return child;
  }
  Object.keys(childProps).forEach(function(propName) {
    if (typeof childProps[propName] === "undefined") {
      delete childProps[propName];
    }
  });
  return import_react42.default.cloneElement(child, childProps);
};
function useItems(items, rawChildren, props) {
  if (Array.isArray(items)) {
    return convertItemsToNodes(items, props);
  }
  return toArray(rawChildren).map(function(child, index) {
    return getNewChild(child, index, props);
  });
}
var useItems_default = useItems;

// node_modules/rc-collapse/es/Collapse.js
function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = _typeof(currentActiveKey);
    currentActiveKey = activeKeyType === "number" || activeKeyType === "string" ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function(key) {
    return String(key);
  });
}
var Collapse = import_react43.default.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-collapse" : _props$prefixCls, _props$destroyInactiv = props.destroyInactivePanel, destroyInactivePanel = _props$destroyInactiv === void 0 ? false : _props$destroyInactiv, style2 = props.style, accordion = props.accordion, className = props.className, children = props.children, collapsible = props.collapsible, openMotion = props.openMotion, expandIcon = props.expandIcon, rawActiveKey = props.activeKey, defaultActiveKey = props.defaultActiveKey, _onChange = props.onChange, items = props.items;
  var collapseClassName = (0, import_classnames19.default)(prefixCls, className);
  var _useMergedState = useMergedState([], {
    value: rawActiveKey,
    onChange: function onChange(v) {
      return _onChange === null || _onChange === void 0 ? void 0 : _onChange(v);
    },
    defaultValue: defaultActiveKey,
    postState: getActiveKeysArray
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), activeKey = _useMergedState2[0], setActiveKey = _useMergedState2[1];
  var onItemClick = function onItemClick2(key) {
    return setActiveKey(function() {
      if (accordion) {
        return activeKey[0] === key ? [] : [key];
      }
      var index = activeKey.indexOf(key);
      var isActive2 = index > -1;
      if (isActive2) {
        return activeKey.filter(function(item) {
          return item !== key;
        });
      }
      return [].concat(_toConsumableArray(activeKey), [key]);
    });
  };
  warning_default(!children, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
  var mergedChildren = useItems_default(items, children, {
    prefixCls,
    accordion,
    openMotion,
    expandIcon,
    collapsible,
    destroyInactivePanel,
    onItemClick,
    activeKey
  });
  return import_react43.default.createElement("div", _extends({
    ref,
    className: collapseClassName,
    style: style2,
    role: accordion ? "tablist" : void 0
  }, pickAttrs(props, {
    aria: true,
    data: true
  })), mergedChildren);
});
var Collapse_default = Object.assign(Collapse, {
  /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */
  Panel: Panel_default
});

// node_modules/rc-collapse/es/index.js
var es_default3 = Collapse_default;
var Panel = Collapse_default.Panel;

// node_modules/antd/es/collapse/CollapsePanel.js
var React79 = __toESM(require_react());
var import_classnames20 = __toESM(require_classnames());
var CollapsePanel2 = React79.forwardRef((props, ref) => {
  if (true) {
    const warning6 = devUseWarning("Collapse.Panel");
    warning6.deprecated(!("disabled" in props), "disabled", 'collapsible="disabled"');
  }
  const {
    getPrefixCls
  } = React79.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    showArrow = true
  } = props;
  const prefixCls = getPrefixCls("collapse", customizePrefixCls);
  const collapsePanelClassName = (0, import_classnames20.default)({
    [`${prefixCls}-no-arrow`]: !showArrow
  }, className);
  return React79.createElement(es_default3.Panel, Object.assign({
    ref
  }, props, {
    prefixCls,
    className: collapsePanelClassName
  }));
});
var CollapsePanel_default = CollapsePanel2;

// node_modules/antd/es/style/motion/collapse.js
var genCollapseMotion = (token2) => ({
  [token2.componentCls]: {
    // For common/openAnimation
    [`${token2.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${token2.motionDurationMid} ${token2.motionEaseInOut},
        opacity ${token2.motionDurationMid} ${token2.motionEaseInOut} !important`
      }
    },
    [`${token2.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${token2.motionDurationMid} ${token2.motionEaseInOut},
        opacity ${token2.motionDurationMid} ${token2.motionEaseInOut} !important`
    }
  }
});
var collapse_default = genCollapseMotion;

// node_modules/antd/es/style/motion/motion.js
var initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
var initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
var initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false) => {
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: "paused"
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: "paused"
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};

// node_modules/antd/es/style/motion/fade.js
var fadeIn = new Keyframes_default("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
var fadeOut = new Keyframes_default("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
var initFadeMotion = (token2, sameLevel = false) => {
  const {
    antCls
  } = token2;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token2.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};

// node_modules/antd/es/style/motion/move.js
var moveDownIn = new Keyframes_default("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveDownOut = new Keyframes_default("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveLeftIn = new Keyframes_default("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveLeftOut = new Keyframes_default("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveRightIn = new Keyframes_default("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveRightOut = new Keyframes_default("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveUpIn = new Keyframes_default("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveUpOut = new Keyframes_default("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
var initMoveMotion = (token2, motionName) => {
  const {
    antCls
  } = token2;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token2.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token2.motionEaseInOutCirc
    }
  }];
};

// node_modules/antd/es/style/motion/slide.js
var slideUpIn = new Keyframes_default("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
var slideUpOut = new Keyframes_default("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
var slideDownIn = new Keyframes_default("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
var slideDownOut = new Keyframes_default("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
var slideLeftIn = new Keyframes_default("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
var slideLeftOut = new Keyframes_default("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
var slideRightIn = new Keyframes_default("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
var slideRightOut = new Keyframes_default("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
var slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
var initSlideMotion = (token2, motionName) => {
  const {
    antCls
  } = token2;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token2.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token2.motionEaseInQuint
    }
  }];
};

// node_modules/antd/es/style/motion/zoom.js
var zoomIn = new Keyframes_default("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
var zoomOut = new Keyframes_default("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
});
var zoomBigIn = new Keyframes_default("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
var zoomBigOut = new Keyframes_default("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
});
var zoomUpIn = new Keyframes_default("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
});
var zoomUpOut = new Keyframes_default("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
});
var zoomLeftIn = new Keyframes_default("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
});
var zoomLeftOut = new Keyframes_default("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
});
var zoomRightIn = new Keyframes_default("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
});
var zoomRightOut = new Keyframes_default("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
});
var zoomDownIn = new Keyframes_default("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
});
var zoomDownOut = new Keyframes_default("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
});
var zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
var initZoomMotion = (token2, motionName) => {
  const {
    antCls
  } = token2;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token2.motionDurationFast : token2.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: token2.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token2.motionEaseInOutCirc
    }
  }];
};

// node_modules/antd/es/collapse/style/index.js
var genBaseStyle = (token2) => {
  const {
    componentCls,
    contentBg,
    padding,
    headerBg,
    headerPadding,
    collapseHeaderPaddingSM,
    collapseHeaderPaddingLG,
    collapsePanelBorderRadius,
    lineWidth,
    lineType,
    colorBorder,
    colorText,
    colorTextHeading,
    colorTextDisabled,
    fontSizeLG,
    lineHeight,
    lineHeightLG,
    marginSM,
    paddingSM,
    paddingLG,
    paddingXS,
    motionDurationSlow,
    fontSizeIcon,
    contentPadding,
    fontHeight,
    fontHeightLG
  } = token2;
  const borderBase = `${unit2(lineWidth)} ${lineType} ${colorBorder}`;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
      backgroundColor: headerBg,
      border: borderBase,
      borderRadius: collapsePanelBorderRadius,
      "&-rtl": {
        direction: "rtl"
      },
      [`& > ${componentCls}-item`]: {
        borderBottom: borderBase,
        "&:first-child": {
          [`
            &,
            & > ${componentCls}-header`]: {
            borderRadius: `${unit2(collapsePanelBorderRadius)} ${unit2(collapsePanelBorderRadius)} 0 0`
          }
        },
        "&:last-child": {
          [`
            &,
            & > ${componentCls}-header`]: {
            borderRadius: `0 0 ${unit2(collapsePanelBorderRadius)} ${unit2(collapsePanelBorderRadius)}`
          }
        },
        [`> ${componentCls}-header`]: Object.assign(Object.assign({
          position: "relative",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          padding: headerPadding,
          color: colorTextHeading,
          lineHeight,
          cursor: "pointer",
          transition: `all ${motionDurationSlow}, visibility 0s`
        }, genFocusStyle(token2)), {
          [`> ${componentCls}-header-text`]: {
            flex: "auto"
          },
          // >>>>> Arrow
          [`${componentCls}-expand-icon`]: {
            height: fontHeight,
            display: "flex",
            alignItems: "center",
            paddingInlineEnd: marginSM
          },
          [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
            fontSize: fontSizeIcon,
            // when `transform: rotate()` is applied to icon's root element
            transition: `transform ${motionDurationSlow}`,
            // when `transform: rotate()` is applied to icon's child element
            svg: {
              transition: `transform ${motionDurationSlow}`
            }
          }),
          // >>>>> Text
          [`${componentCls}-header-text`]: {
            marginInlineEnd: "auto"
          }
        }),
        [`${componentCls}-collapsible-header`]: {
          cursor: "default",
          [`${componentCls}-header-text`]: {
            flex: "none",
            cursor: "pointer"
          }
        },
        [`${componentCls}-collapsible-icon`]: {
          cursor: "unset",
          [`${componentCls}-expand-icon`]: {
            cursor: "pointer"
          }
        }
      },
      [`${componentCls}-content`]: {
        color: colorText,
        backgroundColor: contentBg,
        borderTop: borderBase,
        [`& > ${componentCls}-content-box`]: {
          padding: contentPadding
        },
        "&-hidden": {
          display: "none"
        }
      },
      "&-small": {
        [`> ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingSM,
            paddingInlineStart: paddingXS,
            [`> ${componentCls}-expand-icon`]: {
              // Arrow offset
              marginInlineStart: token2.calc(paddingSM).sub(paddingXS).equal()
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingSM
          }
        }
      },
      "&-large": {
        [`> ${componentCls}-item`]: {
          fontSize: fontSizeLG,
          lineHeight: lineHeightLG,
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingLG,
            paddingInlineStart: padding,
            [`> ${componentCls}-expand-icon`]: {
              height: fontHeightLG,
              // Arrow offset
              marginInlineStart: token2.calc(paddingLG).sub(padding).equal()
            }
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingLG
          }
        }
      },
      [`${componentCls}-item:last-child`]: {
        borderBottom: 0,
        [`> ${componentCls}-content`]: {
          borderRadius: `0 0 ${unit2(collapsePanelBorderRadius)} ${unit2(collapsePanelBorderRadius)}`
        }
      },
      [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
        [`
          &,
          & > .arrow
        `]: {
          color: colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      // ========================== Icon Position ==========================
      [`&${componentCls}-icon-position-end`]: {
        [`& > ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            [`${componentCls}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: marginSM
            }
          }
        }
      }
    })
  };
};
var genArrowStyle = (token2) => {
  const {
    componentCls
  } = token2;
  const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow`;
  return {
    [`${componentCls}-rtl`]: {
      [fixedSelector]: {
        transform: `rotate(180deg)`
      }
    }
  };
};
var genBorderlessStyle = (token2) => {
  const {
    componentCls,
    headerBg,
    borderlessContentPadding,
    borderlessContentBg,
    colorBorder
  } = token2;
  return {
    [`${componentCls}-borderless`]: {
      backgroundColor: headerBg,
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: `1px solid ${colorBorder}`
      },
      [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
        borderRadius: 0
      },
      [`> ${componentCls}-item:last-child`]: {
        borderBottom: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content`]: {
        backgroundColor: borderlessContentBg,
        borderTop: 0
      },
      [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
        padding: borderlessContentPadding
      }
    }
  };
};
var genGhostStyle = (token2) => {
  const {
    componentCls,
    paddingSM
  } = token2;
  return {
    [`${componentCls}-ghost`]: {
      backgroundColor: "transparent",
      border: 0,
      [`> ${componentCls}-item`]: {
        borderBottom: 0,
        [`> ${componentCls}-content`]: {
          backgroundColor: "transparent",
          border: 0,
          [`> ${componentCls}-content-box`]: {
            paddingBlock: paddingSM
          }
        }
      }
    }
  };
};
var prepareComponentToken2 = (token2) => ({
  headerPadding: `${token2.paddingSM}px ${token2.padding}px`,
  headerBg: token2.colorFillAlter,
  contentPadding: `${token2.padding}px 16px`,
  // Fixed Value
  contentBg: token2.colorBgContainer,
  borderlessContentPadding: `${token2.paddingXXS}px 16px ${token2.padding}px`,
  borderlessContentBg: "transparent"
});
var style_default4 = genStyleHooks("Collapse", (token2) => {
  const collapseToken = merge2(token2, {
    collapseHeaderPaddingSM: `${unit2(token2.paddingXS)} ${unit2(token2.paddingSM)}`,
    collapseHeaderPaddingLG: `${unit2(token2.padding)} ${unit2(token2.paddingLG)}`,
    collapsePanelBorderRadius: token2.borderRadiusLG
  });
  return [genBaseStyle(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), collapse_default(collapseToken)];
}, prepareComponentToken2);

// node_modules/antd/es/collapse/Collapse.js
var Collapse2 = React80.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction,
    expandIcon: contextExpandIcon,
    className: contextClassName,
    style: contextStyle
  } = useComponentConfig("collapse");
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style: style2,
    bordered = true,
    ghost,
    size: customizeSize,
    expandIconPosition = "start",
    children,
    destroyInactivePanel,
    destroyOnHidden,
    expandIcon
  } = props;
  const mergedSize = useSize_default((ctx) => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : ctx) !== null && _a !== void 0 ? _a : "middle";
  });
  const prefixCls = getPrefixCls("collapse", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapCSSVar, hashId, cssVarCls] = style_default4(prefixCls);
  if (true) {
    const warning6 = devUseWarning("Collapse");
    true ? warning6(expandIconPosition !== "left" && expandIconPosition !== "right", "deprecated", "`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.") : void 0;
    warning6.deprecated(!("destroyInactivePanel" in props), "destroyInactivePanel", "destroyOnHidden");
  }
  const mergedExpandIconPosition = React80.useMemo(() => {
    if (expandIconPosition === "left") {
      return "start";
    }
    return expandIconPosition === "right" ? "end" : expandIconPosition;
  }, [expandIconPosition]);
  const mergedExpandIcon = expandIcon !== null && expandIcon !== void 0 ? expandIcon : contextExpandIcon;
  const renderExpandIcon = React80.useCallback((panelProps = {}) => {
    const icon = typeof mergedExpandIcon === "function" ? mergedExpandIcon(panelProps) : React80.createElement(RightOutlined_default2, {
      rotate: panelProps.isActive ? direction === "rtl" ? -90 : 90 : void 0,
      "aria-label": panelProps.isActive ? "expanded" : "collapsed"
    });
    return cloneElement2(icon, () => {
      var _a;
      return {
        className: (0, import_classnames21.default)((_a = icon === null || icon === void 0 ? void 0 : icon.props) === null || _a === void 0 ? void 0 : _a.className, `${prefixCls}-arrow`)
      };
    });
  }, [mergedExpandIcon, prefixCls]);
  const collapseClassName = (0, import_classnames21.default)(`${prefixCls}-icon-position-${mergedExpandIconPosition}`, {
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-ghost`]: !!ghost,
    [`${prefixCls}-${mergedSize}`]: mergedSize !== "middle"
  }, contextClassName, className, rootClassName, hashId, cssVarCls);
  const openMotion = Object.assign(Object.assign({}, motion_default(rootPrefixCls)), {
    motionAppear: false,
    leavedClassName: `${prefixCls}-content-hidden`
  });
  const items = React80.useMemo(() => {
    if (children) {
      return toArray(children).map((child, index) => {
        var _a, _b;
        const childProps = child.props;
        if (childProps === null || childProps === void 0 ? void 0 : childProps.disabled) {
          const key = (_a = child.key) !== null && _a !== void 0 ? _a : String(index);
          const mergedChildProps = Object.assign(Object.assign({}, omit(child.props, ["disabled"])), {
            key,
            collapsible: (_b = childProps.collapsible) !== null && _b !== void 0 ? _b : "disabled"
          });
          return cloneElement2(child, mergedChildProps);
        }
        return child;
      });
    }
    return null;
  }, [children]);
  return wrapCSSVar(
    // @ts-ignore
    React80.createElement(es_default3, Object.assign({
      ref,
      openMotion
    }, omit(props, ["rootClassName"]), {
      expandIcon: renderExpandIcon,
      prefixCls,
      className: collapseClassName,
      style: Object.assign(Object.assign({}, contextStyle), style2),
      // TODO: In the future, destroyInactivePanel in rc-collapse needs to be upgrade to destroyOnHidden
      destroyInactivePanel: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyInactivePanel
    }), items)
  );
});
if (true) {
  Collapse2.displayName = "Collapse";
}
var Collapse_default2 = Object.assign(Collapse2, {
  Panel: CollapsePanel_default
});

// node_modules/antd/es/collapse/index.js
var collapse_default2 = Collapse_default2;

// node_modules/antd/es/color-picker/util.js
var generateColor3 = (color) => {
  if (color instanceof AggregationColor) {
    return color;
  }
  return new AggregationColor(color);
};
var getRoundNumber3 = (value) => Math.round(Number(value || 0));
var getColorAlpha = (color) => getRoundNumber3(color.toHsb().a * 100);
var genAlphaColor = (color, alpha) => {
  const rgba = color.toRgb();
  if (!rgba.r && !rgba.g && !rgba.b) {
    const hsba = color.toHsb();
    hsba.a = alpha || 1;
    return generateColor3(hsba);
  }
  rgba.a = alpha || 1;
  return generateColor3(rgba);
};
var getGradientPercentColor = (colors, percent) => {
  const filledColors = [{
    percent: 0,
    color: colors[0].color
  }].concat(_toConsumableArray(colors), [{
    percent: 100,
    color: colors[colors.length - 1].color
  }]);
  for (let i = 0; i < filledColors.length - 1; i += 1) {
    const startPtg = filledColors[i].percent;
    const endPtg = filledColors[i + 1].percent;
    const startColor = filledColors[i].color;
    const endColor = filledColors[i + 1].color;
    if (startPtg <= percent && percent <= endPtg) {
      const dist = endPtg - startPtg;
      if (dist === 0) {
        return startColor;
      }
      const ratio = (percent - startPtg) / dist * 100;
      const startRcColor = new Color(startColor);
      const endRcColor = new Color(endColor);
      return startRcColor.mix(endRcColor, ratio).toRgbString();
    }
  }
  return "";
};

// node_modules/antd/es/color-picker/components/ColorPresets.js
var genPresetColor2 = (list) => list.map((value) => {
  value.colors = value.colors.map(generateColor3);
  return value;
});
var isBright = (value, bgColorToken) => {
  const {
    r,
    g,
    b,
    a
  } = value.toRgb();
  const hsv = new Color(value.toRgbString()).onBackground(bgColorToken).toHsv();
  if (a <= 0.5) {
    return hsv.v > 0.5;
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
var genCollapsePanelKey = (preset, index) => {
  var _a;
  const mergedKey = (_a = preset.key) !== null && _a !== void 0 ? _a : index;
  return `panel-${mergedKey}`;
};
var ColorPresets = ({
  prefixCls,
  presets,
  value: color,
  onChange
}) => {
  const [locale5] = useLocale_default("ColorPicker");
  const [, token2] = useToken();
  const [presetsValue] = useMergedState(genPresetColor2(presets), {
    value: genPresetColor2(presets),
    postState: genPresetColor2
  });
  const colorPresetsPrefixCls = `${prefixCls}-presets`;
  const activeKeys = (0, import_react44.useMemo)(() => presetsValue.reduce((acc, preset, index) => {
    const {
      defaultOpen = true
    } = preset;
    if (defaultOpen) {
      acc.push(genCollapsePanelKey(preset, index));
    }
    return acc;
  }, []), [presetsValue]);
  const handleClick = (colorValue) => {
    onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
  };
  const items = presetsValue.map((preset, index) => {
    var _a;
    return {
      key: genCollapsePanelKey(preset, index),
      label: import_react44.default.createElement("div", {
        className: `${colorPresetsPrefixCls}-label`
      }, preset === null || preset === void 0 ? void 0 : preset.label),
      children: import_react44.default.createElement("div", {
        className: `${colorPresetsPrefixCls}-items`
      }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_a = preset.colors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? preset.colors.map((presetColor, index2) => import_react44.default.createElement(
        ColorBlock_default,
        {
          // eslint-disable-next-line react/no-array-index-key
          key: `preset-${index2}-${presetColor.toHexString()}`,
          color: generateColor3(presetColor).toRgbString(),
          prefixCls,
          className: (0, import_classnames22.default)(`${colorPresetsPrefixCls}-color`, {
            [`${colorPresetsPrefixCls}-color-checked`]: presetColor.toHexString() === (color === null || color === void 0 ? void 0 : color.toHexString()),
            [`${colorPresetsPrefixCls}-color-bright`]: isBright(presetColor, token2.colorBgElevated)
          }),
          onClick: () => handleClick(presetColor)
        }
      )) : import_react44.default.createElement("span", {
        className: `${colorPresetsPrefixCls}-empty`
      }, locale5.presetEmpty))
    };
  });
  return import_react44.default.createElement("div", {
    className: colorPresetsPrefixCls
  }, import_react44.default.createElement(collapse_default2, {
    defaultActiveKey: activeKeys,
    ghost: true,
    items
  }));
};
var ColorPresets_default = ColorPresets;

// node_modules/antd/es/button/style/token.js
var prepareToken = (token2) => {
  const {
    paddingInline,
    onlyIconSize
  } = token2;
  const buttonToken = merge2(token2, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: onlyIconSize
  });
  return buttonToken;
};
var prepareComponentToken3 = (token2) => {
  var _a, _b, _c, _d, _e, _f;
  const contentFontSize = (_a = token2.contentFontSize) !== null && _a !== void 0 ? _a : token2.fontSize;
  const contentFontSizeSM = (_b = token2.contentFontSizeSM) !== null && _b !== void 0 ? _b : token2.fontSize;
  const contentFontSizeLG = (_c = token2.contentFontSizeLG) !== null && _c !== void 0 ? _c : token2.fontSizeLG;
  const contentLineHeight = (_d = token2.contentLineHeight) !== null && _d !== void 0 ? _d : getLineHeight(contentFontSize);
  const contentLineHeightSM = (_e = token2.contentLineHeightSM) !== null && _e !== void 0 ? _e : getLineHeight(contentFontSizeSM);
  const contentLineHeightLG = (_f = token2.contentLineHeightLG) !== null && _f !== void 0 ? _f : getLineHeight(contentFontSizeLG);
  const solidTextColor = isBright(new AggregationColor(token2.colorBgSolid), "#fff") ? "#000" : "#fff";
  const shadowColorTokens = PresetColors.reduce((prev2, colorKey) => Object.assign(Object.assign({}, prev2), {
    [`${colorKey}ShadowColor`]: `0 ${unit2(token2.controlOutlineWidth)} 0 ${getAlphaColor_default(token2[`${colorKey}1`], token2.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, shadowColorTokens), {
    fontWeight: 400,
    defaultShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`,
    primaryShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`,
    dangerShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`,
    primaryColor: token2.colorTextLightSolid,
    dangerColor: token2.colorTextLightSolid,
    borderColorDisabled: token2.colorBorder,
    defaultGhostColor: token2.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: token2.colorBgContainer,
    paddingInline: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineLG: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineSM: 8 - token2.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: token2.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: token2.colorText,
    textTextHoverColor: token2.colorText,
    textTextActiveColor: token2.colorText,
    textHoverBg: token2.colorFillTertiary,
    defaultColor: token2.colorText,
    defaultBg: token2.colorBgContainer,
    defaultBorderColor: token2.colorBorder,
    defaultBorderColorDisabled: token2.colorBorder,
    defaultHoverBg: token2.colorBgContainer,
    defaultHoverColor: token2.colorPrimaryHover,
    defaultHoverBorderColor: token2.colorPrimaryHover,
    defaultActiveBg: token2.colorBgContainer,
    defaultActiveColor: token2.colorPrimaryActive,
    defaultActiveBorderColor: token2.colorPrimaryActive,
    solidTextColor,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max((token2.controlHeight - contentFontSize * contentLineHeight) / 2 - token2.lineWidth, 0),
    paddingBlockSM: Math.max((token2.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token2.lineWidth, 0),
    paddingBlockLG: Math.max((token2.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token2.lineWidth, 0)
  });
};

// node_modules/antd/es/button/style/index.js
var genSharedButtonStyle = (token2) => {
  const {
    componentCls,
    iconCls,
    fontWeight,
    opacityLoading,
    motionDurationSlow,
    motionEaseInOut,
    marginXS,
    calc
  } = token2;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: token2.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${unit2(token2.lineWidth)} ${token2.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: token2.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${componentCls}-icon > svg`]: resetIcon(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": genFocusStyle(token2),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${componentCls}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${componentCls}-compact-item`]: {
          flex: "none"
        },
        [`&${componentCls}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: opacityLoading,
        cursor: "default"
      },
      [`${componentCls}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((transition) => `${transition} ${motionDurationSlow} ${motionEaseInOut}`).join(",")
      },
      // iconPosition
      [`&:not(${componentCls}-icon-end)`]: {
        [`${componentCls}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: calc(marginXS).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: calc(marginXS).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${componentCls}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: calc(marginXS).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: calc(marginXS).mul(-1).equal()
          }
        }
      }
    }
  };
};
var genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
var genCircleButtonStyle = (token2) => ({
  minWidth: token2.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
var genRoundButtonStyle = (token2) => ({
  borderRadius: token2.controlHeight,
  paddingInlineStart: token2.calc(token2.controlHeight).div(2).equal(),
  paddingInlineEnd: token2.calc(token2.controlHeight).div(2).equal()
});
var genDisabledStyle = (token2) => ({
  cursor: "not-allowed",
  borderColor: token2.borderColorDisabled,
  color: token2.colorTextDisabled,
  background: token2.colorBgContainerDisabled,
  boxShadow: "none"
});
var genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || void 0,
    background,
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    background
  }, hoverStyle), Object.assign({
    background
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  })
});
var genSolidDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token2))
});
var genPureDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: token2.colorTextDisabled
  }
});
var genVariantButtonStyle = (token2, hoverStyle, activeStyle, variant) => {
  const isPureDisabled = variant && ["link", "text"].includes(variant);
  const genDisabledButtonStyle = isPureDisabled ? genPureDisabledButtonStyle : genSolidDisabledButtonStyle;
  return Object.assign(Object.assign({}, genDisabledButtonStyle(token2)), genHoverActiveButtonStyle(token2.componentCls, hoverStyle, activeStyle));
};
var genSolidButtonStyle = (token2, textColor, background, hoverStyle, activeStyle) => ({
  [`&${token2.componentCls}-variant-solid`]: Object.assign({
    color: textColor,
    background
  }, genVariantButtonStyle(token2, hoverStyle, activeStyle))
});
var genOutlinedDashedButtonStyle = (token2, borderColor, background, hoverStyle, activeStyle) => ({
  [`&${token2.componentCls}-variant-outlined, &${token2.componentCls}-variant-dashed`]: Object.assign({
    borderColor,
    background
  }, genVariantButtonStyle(token2, hoverStyle, activeStyle))
});
var genDashedButtonStyle = (token2) => ({
  [`&${token2.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
});
var genFilledButtonStyle = (token2, background, hoverStyle, activeStyle) => ({
  [`&${token2.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background
  }, genVariantButtonStyle(token2, hoverStyle, activeStyle))
});
var genTextLinkButtonStyle = (token2, textColor, variant, hoverStyle, activeStyle) => ({
  [`&${token2.componentCls}-variant-${variant}`]: Object.assign({
    color: textColor,
    boxShadow: "none"
  }, genVariantButtonStyle(token2, hoverStyle, activeStyle, variant))
});
var genPresetColorStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return PresetColors.reduce((prev2, colorKey) => {
    const darkColor = token2[`${colorKey}6`];
    const lightColor = token2[`${colorKey}1`];
    const hoverColor = token2[`${colorKey}5`];
    const lightHoverColor = token2[`${colorKey}2`];
    const lightBorderColor = token2[`${colorKey}3`];
    const activeColor = token2[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev2), {
      [`&${componentCls}-color-${colorKey}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: darkColor,
        boxShadow: token2[`${colorKey}ShadowColor`]
      }, genSolidButtonStyle(token2, token2.colorTextLightSolid, darkColor, {
        background: hoverColor
      }, {
        background: activeColor
      })), genOutlinedDashedButtonStyle(token2, darkColor, token2.colorBgContainer, {
        color: hoverColor,
        borderColor: hoverColor,
        background: token2.colorBgContainer
      }, {
        color: activeColor,
        borderColor: activeColor,
        background: token2.colorBgContainer
      })), genDashedButtonStyle(token2)), genFilledButtonStyle(token2, lightColor, {
        background: lightHoverColor
      }, {
        background: lightBorderColor
      })), genTextLinkButtonStyle(token2, darkColor, "link", {
        color: hoverColor
      }, {
        color: activeColor
      })), genTextLinkButtonStyle(token2, darkColor, "text", {
        color: hoverColor,
        background: lightColor
      }, {
        color: activeColor,
        background: lightBorderColor
      }))
    });
  }, {});
};
var genDefaultButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token2.defaultColor,
  boxShadow: token2.defaultShadow
}, genSolidButtonStyle(token2, token2.solidTextColor, token2.colorBgSolid, {
  color: token2.solidTextColor,
  background: token2.colorBgSolidHover
}, {
  color: token2.solidTextColor,
  background: token2.colorBgSolidActive
})), genDashedButtonStyle(token2)), genFilledButtonStyle(token2, token2.colorFillTertiary, {
  background: token2.colorFillSecondary
}, {
  background: token2.colorFill
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.defaultGhostColor, token2.defaultGhostBorderColor, token2.colorTextDisabled, token2.colorBorder)), genTextLinkButtonStyle(token2, token2.textTextColor, "link", {
  color: token2.colorLinkHover,
  background: token2.linkHoverBg
}, {
  color: token2.colorLinkActive
}));
var genPrimaryButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token2.colorPrimary,
  boxShadow: token2.primaryShadow
}, genOutlinedDashedButtonStyle(token2, token2.colorPrimary, token2.colorBgContainer, {
  color: token2.colorPrimaryTextHover,
  borderColor: token2.colorPrimaryHover,
  background: token2.colorBgContainer
}, {
  color: token2.colorPrimaryTextActive,
  borderColor: token2.colorPrimaryActive,
  background: token2.colorBgContainer
})), genDashedButtonStyle(token2)), genFilledButtonStyle(token2, token2.colorPrimaryBg, {
  background: token2.colorPrimaryBgHover
}, {
  background: token2.colorPrimaryBorder
})), genTextLinkButtonStyle(token2, token2.colorPrimaryText, "text", {
  color: token2.colorPrimaryTextHover,
  background: token2.colorPrimaryBg
}, {
  color: token2.colorPrimaryTextActive,
  background: token2.colorPrimaryBorder
})), genTextLinkButtonStyle(token2, token2.colorPrimaryText, "link", {
  color: token2.colorPrimaryTextHover,
  background: token2.linkHoverBg
}, {
  color: token2.colorPrimaryTextActive
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
  color: token2.colorPrimaryHover,
  borderColor: token2.colorPrimaryHover
}, {
  color: token2.colorPrimaryActive,
  borderColor: token2.colorPrimaryActive
}));
var genDangerousStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token2.colorError,
  boxShadow: token2.dangerShadow
}, genSolidButtonStyle(token2, token2.dangerColor, token2.colorError, {
  background: token2.colorErrorHover
}, {
  background: token2.colorErrorActive
})), genOutlinedDashedButtonStyle(token2, token2.colorError, token2.colorBgContainer, {
  color: token2.colorErrorHover,
  borderColor: token2.colorErrorBorderHover
}, {
  color: token2.colorErrorActive,
  borderColor: token2.colorErrorActive
})), genDashedButtonStyle(token2)), genFilledButtonStyle(token2, token2.colorErrorBg, {
  background: token2.colorErrorBgFilledHover
}, {
  background: token2.colorErrorBgActive
})), genTextLinkButtonStyle(token2, token2.colorError, "text", {
  color: token2.colorErrorHover,
  background: token2.colorErrorBg
}, {
  color: token2.colorErrorHover,
  background: token2.colorErrorBgActive
})), genTextLinkButtonStyle(token2, token2.colorError, "link", {
  color: token2.colorErrorHover
}, {
  color: token2.colorErrorActive
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
  color: token2.colorErrorHover,
  borderColor: token2.colorErrorHover
}, {
  color: token2.colorErrorActive,
  borderColor: token2.colorErrorActive
}));
var genLinkStyle2 = (token2) => Object.assign(Object.assign({}, genTextLinkButtonStyle(token2, token2.colorLink, "link", {
  color: token2.colorLinkHover
}, {
  color: token2.colorLinkActive
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorInfo, token2.colorInfo, token2.colorTextDisabled, token2.colorBorder, {
  color: token2.colorInfoHover,
  borderColor: token2.colorInfoHover
}, {
  color: token2.colorInfoActive,
  borderColor: token2.colorInfoActive
}));
var genColorButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return Object.assign({
    [`${componentCls}-color-default`]: genDefaultButtonStyle(token2),
    [`${componentCls}-color-primary`]: genPrimaryButtonStyle(token2),
    [`${componentCls}-color-dangerous`]: genDangerousStyle(token2),
    [`${componentCls}-color-link`]: genLinkStyle2(token2)
  }, genPresetColorStyle(token2));
};
var genCompatibleButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedDashedButtonStyle(token2, token2.defaultBorderColor, token2.defaultBg, {
  color: token2.defaultHoverColor,
  borderColor: token2.defaultHoverBorderColor,
  background: token2.defaultHoverBg
}, {
  color: token2.defaultActiveColor,
  borderColor: token2.defaultActiveBorderColor,
  background: token2.defaultActiveBg
})), genTextLinkButtonStyle(token2, token2.textTextColor, "text", {
  color: token2.textTextHoverColor,
  background: token2.textHoverBg
}, {
  color: token2.textTextActiveColor,
  background: token2.colorBgTextActive
})), genSolidButtonStyle(token2, token2.primaryColor, token2.colorPrimary, {
  background: token2.colorPrimaryHover,
  color: token2.primaryColor
}, {
  background: token2.colorPrimaryActive,
  color: token2.primaryColor
})), genTextLinkButtonStyle(token2, token2.colorLink, "link", {
  color: token2.colorLinkHover,
  background: token2.linkHoverBg
}, {
  color: token2.colorLinkActive
}));
var genButtonStyle = (token2, prefixCls = "") => {
  const {
    componentCls,
    controlHeight,
    fontSize,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical,
    buttonIconOnlyFontSize
  } = token2;
  return [
    {
      [prefixCls]: {
        fontSize,
        height: controlHeight,
        padding: `${unit2(buttonPaddingVertical)} ${unit2(buttonPaddingHorizontal)}`,
        borderRadius,
        [`&${componentCls}-icon-only`]: {
          width: controlHeight,
          [iconCls]: {
            fontSize: buttonIconOnlyFontSize
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token2)
    },
    {
      [`${componentCls}${componentCls}-round${prefixCls}`]: genRoundButtonStyle(token2)
    }
  ];
};
var genSizeBaseButtonStyle = (token2) => {
  const baseToken = merge2(token2, {
    fontSize: token2.contentFontSize
  });
  return genButtonStyle(baseToken, token2.componentCls);
};
var genSizeSmallButtonStyle = (token2) => {
  const smallToken = merge2(token2, {
    controlHeight: token2.controlHeightSM,
    fontSize: token2.contentFontSizeSM,
    padding: token2.paddingXS,
    buttonPaddingHorizontal: token2.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: token2.borderRadiusSM,
    buttonIconOnlyFontSize: token2.onlyIconSizeSM
  });
  return genButtonStyle(smallToken, `${token2.componentCls}-sm`);
};
var genSizeLargeButtonStyle = (token2) => {
  const largeToken = merge2(token2, {
    controlHeight: token2.controlHeightLG,
    fontSize: token2.contentFontSizeLG,
    buttonPaddingHorizontal: token2.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: token2.borderRadiusLG,
    buttonIconOnlyFontSize: token2.onlyIconSizeLG
  });
  return genButtonStyle(largeToken, `${token2.componentCls}-lg`);
};
var genBlockButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
var style_default5 = genStyleHooks("Button", (token2) => {
  const buttonToken = prepareToken(token2);
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeBaseButtonStyle(buttonToken),
    genSizeSmallButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Color
    genColorButtonStyle(buttonToken),
    // https://github.com/ant-design/ant-design/issues/50969
    genCompatibleButtonStyle(buttonToken),
    // Button Group
    group_default(buttonToken)
  ];
}, prepareComponentToken3, {
  unitless: {
    fontWeight: true,
    contentLineHeight: true,
    contentLineHeightSM: true,
    contentLineHeightLG: true
  }
});

// node_modules/antd/es/style/compact-item.js
function compactItemBorder(token2, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token2, options = {
  focus: true
}) {
  const {
    componentCls
  } = token2;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}

// node_modules/antd/es/style/compact-item-vertical.js
function compactItemVerticalBorder(token2, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token2.calc(token2.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token2) {
  const compactCls = `${token2.componentCls}-compact-vertical`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
  };
}

// node_modules/antd/es/button/style/compact.js
var genButtonCompactStyle = (token2) => {
  const {
    componentCls,
    colorPrimaryHover,
    lineWidth,
    calc
  } = token2;
  const insetOffset = calc(lineWidth).mul(-1).equal();
  const getCompactBorderStyle = (vertical) => {
    const selector = `${componentCls}-compact${vertical ? "-vertical" : ""}-item${componentCls}-primary:not([disabled])`;
    return {
      [`${selector} + ${selector}::before`]: {
        position: "absolute",
        top: vertical ? insetOffset : 0,
        insetInlineStart: vertical ? 0 : insetOffset,
        backgroundColor: colorPrimaryHover,
        content: '""',
        width: vertical ? "100%" : lineWidth,
        height: vertical ? lineWidth : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, getCompactBorderStyle()), getCompactBorderStyle(true));
};
var compact_default2 = genSubStyleComponent(["Button", "compact"], (token2) => {
  const buttonToken = prepareToken(token2);
  return [
    // Space Compact
    genCompactItemStyle(buttonToken),
    genCompactItemVerticalStyle(buttonToken),
    genButtonCompactStyle(buttonToken)
  ];
}, prepareComponentToken3);

// node_modules/antd/es/button/button.js
var __rest8 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function getLoadingConfig(loading) {
  if (typeof loading === "object" && loading) {
    let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
    delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
    return {
      loading: delay <= 0,
      delay
    };
  }
  return {
    loading: !!loading,
    delay: 0
  };
}
var ButtonTypeMap = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
};
var InternalCompoundedButton = import_react45.default.forwardRef((props, ref) => {
  var _a, _b;
  const {
    loading = false,
    prefixCls: customizePrefixCls,
    color,
    variant,
    type: type5,
    danger = false,
    shape = "default",
    size: customizeSize,
    styles,
    disabled: customDisabled,
    className,
    rootClassName,
    children,
    icon,
    iconPosition = "start",
    ghost = false,
    block = false,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = "button",
    classNames: customClassNames,
    style: customStyle = {},
    autoInsertSpace,
    autoFocus
  } = props, rest = __rest8(props, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]);
  const mergedType = type5 || "default";
  const {
    button
  } = import_react45.default.useContext(ConfigContext);
  const [mergedColor, mergedVariant] = (0, import_react45.useMemo)(() => {
    if (color && variant) {
      return [color, variant];
    }
    if (type5 || danger) {
      const colorVariantPair = ButtonTypeMap[mergedType] || [];
      if (danger) {
        return ["danger", colorVariantPair[1]];
      }
      return colorVariantPair;
    }
    if ((button === null || button === void 0 ? void 0 : button.color) && (button === null || button === void 0 ? void 0 : button.variant)) {
      return [button.color, button.variant];
    }
    return ["default", "outlined"];
  }, [type5, color, variant, danger, button === null || button === void 0 ? void 0 : button.variant, button === null || button === void 0 ? void 0 : button.color]);
  const isDanger = mergedColor === "danger";
  const mergedColorText = isDanger ? "dangerous" : mergedColor;
  const {
    getPrefixCls,
    direction,
    autoInsertSpace: contextAutoInsertSpace,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("button");
  const mergedInsertSpace = (_a = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : contextAutoInsertSpace) !== null && _a !== void 0 ? _a : true;
  const prefixCls = getPrefixCls("btn", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default5(prefixCls);
  const disabled = (0, import_react45.useContext)(DisabledContext_default);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = (0, import_react45.useContext)(GroupSizeContext);
  const loadingOrDelay = (0, import_react45.useMemo)(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setLoading] = (0, import_react45.useState)(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = (0, import_react45.useState)(false);
  const buttonRef = (0, import_react45.useRef)(null);
  const mergedRef = useComposeRef(ref, buttonRef);
  const needInserted = import_react45.Children.count(children) === 1 && !icon && !isUnBorderedButtonVariant(mergedVariant);
  const isMountRef = (0, import_react45.useRef)(true);
  import_react45.default.useEffect(() => {
    isMountRef.current = false;
    return () => {
      isMountRef.current = true;
    };
  }, []);
  (0, import_react45.useLayoutEffect)(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay.delay, loadingOrDelay.loading]);
  (0, import_react45.useEffect)(() => {
    if (!buttonRef.current || !mergedInsertSpace) {
      return;
    }
    const buttonText = buttonRef.current.textContent || "";
    if (needInserted && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  });
  (0, import_react45.useEffect)(() => {
    if (autoFocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  const handleClick = import_react45.default.useCallback((e) => {
    var _a2;
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    (_a2 = props.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(props, "href" in props ? e : e);
  }, [props.onClick, innerLoading, mergedDisabled]);
  if (true) {
    const warning6 = devUseWarning("Button");
    true ? warning6(!(typeof icon === "string" && icon.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : void 0;
    true ? warning6(!(ghost && isUnBorderedButtonVariant(mergedVariant)), "usage", "`link` or `text` button can't be a `ghost` button.") : void 0;
  }
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const sizeClassNameMap = {
    large: "lg",
    small: "sm",
    middle: void 0
  };
  const sizeFullName = useSize_default((ctxSize) => {
    var _a2, _b2;
    return (_b2 = (_a2 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a2 !== void 0 ? _a2 : groupSize) !== null && _b2 !== void 0 ? _b2 : ctxSize;
  });
  const sizeCls = sizeFullName ? (_b = sizeClassNameMap[sizeFullName]) !== null && _b !== void 0 ? _b : "" : "";
  const iconType = innerLoading ? "loading" : icon;
  const linkButtonRestProps = omit(rest, ["navigate"]);
  const classes = (0, import_classnames23.default)(prefixCls, hashId, cssVarCls, {
    [`${prefixCls}-${shape}`]: shape !== "default" && shape,
    // Compatible with versions earlier than 5.21.0
    [`${prefixCls}-${mergedType}`]: mergedType,
    [`${prefixCls}-dangerous`]: danger,
    [`${prefixCls}-color-${mergedColorText}`]: mergedColorText,
    [`${prefixCls}-variant-${mergedVariant}`]: mergedVariant,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonVariant(mergedVariant),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-icon-end`]: iconPosition === "end"
  }, compactItemClassnames, className, rootClassName, contextClassName);
  const fullStyle = Object.assign(Object.assign({}, contextStyle), customStyle);
  const iconClasses = (0, import_classnames23.default)(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, contextClassNames.icon);
  const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), contextStyles.icon || {});
  const iconNode = icon && !innerLoading ? import_react45.default.createElement(IconWrapper_default, {
    prefixCls,
    className: iconClasses,
    style: iconStyle
  }, icon) : loading && typeof loading === "object" && loading.icon ? import_react45.default.createElement(IconWrapper_default, {
    prefixCls,
    className: iconClasses,
    style: iconStyle
  }, loading.icon) : import_react45.default.createElement(DefaultLoadingIcon_default, {
    existIcon: !!icon,
    prefixCls,
    loading: innerLoading,
    mount: isMountRef.current
  });
  const kids = children || children === 0 ? spaceChildren(children, needInserted && mergedInsertSpace) : null;
  if (linkButtonRestProps.href !== void 0) {
    return wrapCSSVar(import_react45.default.createElement("a", Object.assign({}, linkButtonRestProps, {
      className: (0, import_classnames23.default)(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      href: mergedDisabled ? void 0 : linkButtonRestProps.href,
      style: fullStyle,
      onClick: handleClick,
      ref: mergedRef,
      tabIndex: mergedDisabled ? -1 : 0
    }), iconNode, kids));
  }
  let buttonNode = import_react45.default.createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    style: fullStyle,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: mergedRef
  }), iconNode, kids, compactItemClassnames && import_react45.default.createElement(compact_default2, {
    prefixCls
  }));
  if (!isUnBorderedButtonVariant(mergedVariant)) {
    buttonNode = import_react45.default.createElement(wave_default, {
      component: "Button",
      disabled: innerLoading
    }, buttonNode);
  }
  return wrapCSSVar(buttonNode);
});
var Button = InternalCompoundedButton;
Button.Group = button_group_default;
Button.__ANT_BUTTON = true;
if (true) {
  Button.displayName = "Button";
}
var button_default = Button;

// node_modules/antd/es/button/index.js
var button_default2 = button_default;

// node_modules/antd/es/_util/ActionButton.js
function isThenable(thing) {
  return !!(thing === null || thing === void 0 ? void 0 : thing.then);
}
var ActionButton = (props) => {
  const {
    type: type5,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = React83.useRef(false);
  const buttonRef = React83.useRef(null);
  const [loading, setLoading] = useSafeState(false);
  const onInternalClose = (...args) => {
    close === null || close === void 0 ? void 0 : close.apply(void 0, args);
  };
  React83.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus({
          preventScroll: true
        });
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const handlePromiseOnOk = (returnValueOfOnOk) => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then((...args) => {
      setLoading(false, true);
      onInternalClose.apply(void 0, args);
      clickedRef.current = false;
    }, (e) => {
      setLoading(false, true);
      clickedRef.current = false;
      if (isSilent === null || isSilent === void 0 ? void 0 : isSilent()) {
        return;
      }
      return Promise.reject(e);
    });
  };
  const onClick = (e) => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!isThenable(returnValueOfOnOk)) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return React83.createElement(button_default2, Object.assign({}, convertLegacyProps(type5), {
    onClick,
    loading,
    prefixCls
  }, buttonProps, {
    ref: buttonRef
  }), children);
};
var ActionButton_default = ActionButton;

// node_modules/antd/es/modal/context.js
var import_react46 = __toESM(require_react());
var ModalContext = import_react46.default.createContext({});
var {
  Provider: ModalContextProvider
} = ModalContext;

// node_modules/antd/es/modal/components/ConfirmCancelBtn.js
var ConfirmCancelBtn = () => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    rootPrefixCls,
    close,
    onCancel,
    onConfirm
  } = (0, import_react47.useContext)(ModalContext);
  return mergedOkCancel ? import_react47.default.createElement(ActionButton_default, {
    isSilent,
    actionFn: onCancel,
    close: (...args) => {
      close === null || close === void 0 ? void 0 : close.apply(void 0, args);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    autoFocus: autoFocusButton === "cancel",
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelTextLocale) : null;
};
var ConfirmCancelBtn_default = ConfirmCancelBtn;

// node_modules/antd/es/modal/components/ConfirmOkBtn.js
var import_react48 = __toESM(require_react());
var ConfirmOkBtn = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk
  } = (0, import_react48.useContext)(ModalContext);
  return import_react48.default.createElement(ActionButton_default, {
    isSilent,
    type: okType || "primary",
    actionFn: onOk,
    close: (...args) => {
      close === null || close === void 0 ? void 0 : close.apply(void 0, args);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(true);
    },
    autoFocus: autoFocusButton === "ok",
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okTextLocale);
};
var ConfirmOkBtn_default = ConfirmOkBtn;

// node_modules/antd/es/modal/Modal.js
var React124 = __toESM(require_react());
var import_classnames37 = __toESM(require_classnames());

// node_modules/@rc-component/portal/es/Portal.js
var React90 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/@rc-component/portal/es/Context.js
var React87 = __toESM(require_react());
var OrderContext = React87.createContext(null);
var Context_default2 = OrderContext;

// node_modules/@rc-component/portal/es/useDom.js
var React88 = __toESM(require_react());
var EMPTY_LIST = [];
function useDom(render2, debug) {
  var _React$useState = React88.useState(function() {
    if (!canUseDom()) {
      return null;
    }
    var defaultEle = document.createElement("div");
    if (debug) {
      defaultEle.setAttribute("data-debug", debug);
    }
    return defaultEle;
  }), _React$useState2 = _slicedToArray(_React$useState, 1), ele = _React$useState2[0];
  var appendedRef = React88.useRef(false);
  var queueCreate = React88.useContext(Context_default2);
  var _React$useState3 = React88.useState(EMPTY_LIST), _React$useState4 = _slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
    setQueue(function(origin) {
      var newQueue = [appendFn].concat(_toConsumableArray(origin));
      return newQueue;
    });
  });
  function append2() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup2() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  useLayoutEffect_default(function() {
    if (render2) {
      if (queueCreate) {
        queueCreate(append2);
      } else {
        append2();
      }
    } else {
      cleanup2();
    }
    return cleanup2;
  }, [render2]);
  useLayoutEffect_default(function() {
    if (queue.length) {
      queue.forEach(function(appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}

// node_modules/@rc-component/portal/es/useScrollLocker.js
var React89 = __toESM(require_react());

// node_modules/rc-util/es/getScrollBarSize.js
var cached;
function measureScrollbarSize(ele) {
  var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
  var measureEle = document.createElement("div");
  measureEle.id = randomId;
  var measureStyle = measureEle.style;
  measureStyle.position = "absolute";
  measureStyle.left = "0";
  measureStyle.top = "0";
  measureStyle.width = "100px";
  measureStyle.height = "100px";
  measureStyle.overflow = "scroll";
  var fallbackWidth;
  var fallbackHeight;
  if (ele) {
    var targetStyle = getComputedStyle(ele);
    measureStyle.scrollbarColor = targetStyle.scrollbarColor;
    measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
    var webkitScrollbarStyle = getComputedStyle(ele, "::-webkit-scrollbar");
    var width = parseInt(webkitScrollbarStyle.width, 10);
    var height = parseInt(webkitScrollbarStyle.height, 10);
    try {
      var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : "";
      var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : "";
      updateCSS("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
    } catch (e) {
      console.error(e);
      fallbackWidth = width;
      fallbackHeight = height;
    }
  }
  document.body.appendChild(measureEle);
  var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
  var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
  document.body.removeChild(measureEle);
  removeCSS(randomId);
  return {
    width: scrollWidth,
    height: scrollHeight
  };
}
function getScrollBarSize(fresh) {
  if (typeof document === "undefined") {
    return 0;
  }
  if (fresh || cached === void 0) {
    cached = measureScrollbarSize();
  }
  return cached.width;
}
function getTargetScrollBarSize(target) {
  if (typeof document === "undefined" || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  return measureScrollbarSize(target);
}

// node_modules/@rc-component/portal/es/util.js
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

// node_modules/@rc-component/portal/es/useScrollLocker.js
var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid2 = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = React89.useState(function() {
    uuid2 += 1;
    return "".concat(UNIQUE_ID, "_").concat(uuid2);
  }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
  useLayoutEffect_default(function() {
    if (mergedLock) {
      var scrollbarSize = getTargetScrollBarSize(document.body).width;
      var isOverflow = isBodyOverflowing();
      updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : "", "\n}"), id);
    } else {
      removeCSS(id);
    }
    return function() {
      removeCSS(id);
    };
  }, [mergedLock, id]);
}

// node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === "boolean") {
    inline = nextInline;
  }
  return inline;
}

// node_modules/@rc-component/portal/es/Portal.js
var getPortalContainer = function getPortalContainer2(getContainer2) {
  if (getContainer2 === false) {
    return false;
  }
  if (!canUseDom() || !getContainer2) {
    return null;
  }
  if (typeof getContainer2 === "string") {
    return document.querySelector(getContainer2);
  }
  if (typeof getContainer2 === "function") {
    return getContainer2();
  }
  return getContainer2;
};
var Portal = React90.forwardRef(function(props, ref) {
  var open = props.open, autoLock = props.autoLock, getContainer2 = props.getContainer, debug = props.debug, _props$autoDestroy = props.autoDestroy, autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy, children = props.children;
  var _React$useState = React90.useState(open), _React$useState2 = _slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;
  if (true) {
    warning_default(canUseDom() || !open, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR.");
  }
  React90.useEffect(function() {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);
  var _React$useState3 = React90.useState(function() {
    return getPortalContainer(getContainer2);
  }), _React$useState4 = _slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
  React90.useEffect(function() {
    var customizeContainer = getPortalContainer(getContainer2);
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug), _useDom2 = _slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
  useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
  var childRef = null;
  if (children && supportRef(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = useComposeRef(childRef, ref);
  if (!mergedRender || !canUseDom() || innerContainer === void 0) {
    return null;
  }
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = React90.cloneElement(children, {
      ref: mergedRef
    });
  }
  return React90.createElement(Context_default2.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : (0, import_react_dom3.createPortal)(reffedChildren, mergedContainer));
});
if (true) {
  Portal.displayName = "Portal";
}
var Portal_default = Portal;

// node_modules/@rc-component/portal/es/index.js
var es_default4 = Portal_default;

// node_modules/rc-dialog/es/DialogWrap.js
var React98 = __toESM(require_react());

// node_modules/rc-dialog/es/context.js
var React91 = __toESM(require_react());
var RefContext = React91.createContext({});

// node_modules/rc-dialog/es/Dialog/index.js
var import_classnames27 = __toESM(require_classnames());

// node_modules/rc-util/es/hooks/useId.js
var React92 = __toESM(require_react());
function getUseId() {
  var fullClone5 = _objectSpread2({}, React92);
  return fullClone5.useId;
}
var uuid3 = 0;
var useOriginId = getUseId();
var useId_default = useOriginId ? (
  // Use React `useId`
  function useId2(id) {
    var reactId = useOriginId();
    if (id) {
      return id;
    }
    if (false) {
      return "test-id";
    }
    return reactId;
  }
) : (
  // Use compatible of `useId`
  function useCompatId(id) {
    var _React$useState = React92.useState("ssr-id"), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    React92.useEffect(function() {
      var nextId = uuid3;
      uuid3 += 1;
      setInnerId("rc_unique_".concat(nextId));
    }, []);
    if (id) {
      return id;
    }
    if (false) {
      return "test-id";
    }
    return innerId;
  }
);

// node_modules/rc-dialog/es/Dialog/index.js
var React97 = __toESM(require_react());
var import_react51 = __toESM(require_react());

// node_modules/rc-dialog/es/util.js
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method4 = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method4];
    if (typeof ret !== "number") {
      ret = d.body[method4];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

// node_modules/rc-dialog/es/Dialog/Content/index.js
var React95 = __toESM(require_react());
var import_react50 = __toESM(require_react());
var import_classnames25 = __toESM(require_classnames());

// node_modules/rc-dialog/es/Dialog/Content/Panel.js
var import_classnames24 = __toESM(require_classnames());
var import_react49 = __toESM(require_react());

// node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js
var React93 = __toESM(require_react());
var MemoChildren_default = React93.memo(function(_ref) {
  var children = _ref.children;
  return children;
}, function(_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
});

// node_modules/rc-dialog/es/Dialog/Content/Panel.js
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
var entityStyle = {
  outline: "none"
};
var Panel2 = import_react49.default.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, className = props.className, style2 = props.style, title = props.title, ariaId = props.ariaId, footer = props.footer, closable = props.closable, closeIcon = props.closeIcon, onClose = props.onClose, children = props.children, bodyStyle = props.bodyStyle, bodyProps = props.bodyProps, modalRender = props.modalRender, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, holderRef = props.holderRef, visible = props.visible, forceRender = props.forceRender, width = props.width, height = props.height, modalClassNames = props.classNames, modalStyles = props.styles;
  var _React$useContext = import_react49.default.useContext(RefContext), panelRef = _React$useContext.panel;
  var mergedRef = useComposeRef(holderRef, panelRef);
  var sentinelStartRef = (0, import_react49.useRef)();
  var sentinelEndRef = (0, import_react49.useRef)();
  import_react49.default.useImperativeHandle(ref, function() {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
          preventScroll: true
        });
      },
      changeActive: function changeActive(next2) {
        var _document = document, activeElement = _document.activeElement;
        if (next2 && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus({
            preventScroll: true
          });
        } else if (!next2 && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus({
            preventScroll: true
          });
        }
      }
    };
  });
  var contentStyle = {};
  if (width !== void 0) {
    contentStyle.width = width;
  }
  if (height !== void 0) {
    contentStyle.height = height;
  }
  var footerNode = footer ? import_react49.default.createElement("div", {
    className: (0, import_classnames24.default)("".concat(prefixCls, "-footer"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.footer),
    style: _objectSpread2({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.footer)
  }, footer) : null;
  var headerNode = title ? import_react49.default.createElement("div", {
    className: (0, import_classnames24.default)("".concat(prefixCls, "-header"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.header),
    style: _objectSpread2({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.header)
  }, import_react49.default.createElement("div", {
    className: "".concat(prefixCls, "-title"),
    id: ariaId
  }, title)) : null;
  var closableObj = (0, import_react49.useMemo)(function() {
    if (_typeof(closable) === "object" && closable !== null) {
      return closable;
    }
    if (closable) {
      return {
        closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : import_react49.default.createElement("span", {
          className: "".concat(prefixCls, "-close-x")
        })
      };
    }
    return {};
  }, [closable, closeIcon, prefixCls]);
  var ariaProps = pickAttrs(closableObj, true);
  var closeBtnIsDisabled = _typeof(closable) === "object" && closable.disabled;
  var closerNode = closable ? import_react49.default.createElement("button", _extends({
    type: "button",
    onClick: onClose,
    "aria-label": "Close"
  }, ariaProps, {
    className: "".concat(prefixCls, "-close"),
    disabled: closeBtnIsDisabled
  }), closableObj.closeIcon) : null;
  var content = import_react49.default.createElement("div", {
    className: (0, import_classnames24.default)("".concat(prefixCls, "-content"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.content),
    style: modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.content
  }, closerNode, headerNode, import_react49.default.createElement("div", _extends({
    className: (0, import_classnames24.default)("".concat(prefixCls, "-body"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.body),
    style: _objectSpread2(_objectSpread2({}, bodyStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.body)
  }, bodyProps), children), footerNode);
  return import_react49.default.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: mergedRef,
    style: _objectSpread2(_objectSpread2({}, style2), contentStyle),
    className: (0, import_classnames24.default)(prefixCls, className),
    onMouseDown,
    onMouseUp
  }, import_react49.default.createElement("div", {
    ref: sentinelStartRef,
    tabIndex: 0,
    style: entityStyle
  }, import_react49.default.createElement(MemoChildren_default, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content)), import_react49.default.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle
  }));
});
if (true) {
  Panel2.displayName = "Panel";
}
var Panel_default2 = Panel2;

// node_modules/rc-dialog/es/Dialog/Content/index.js
var Content = React95.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, title = props.title, style2 = props.style, className = props.className, visible = props.visible, forceRender = props.forceRender, destroyOnClose = props.destroyOnClose, motionName = props.motionName, ariaId = props.ariaId, onVisibleChanged = props.onVisibleChanged, mousePosition2 = props.mousePosition;
  var dialogRef = (0, import_react50.useRef)();
  var _React$useState = React95.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), transformOrigin = _React$useState2[0], setTransformOrigin = _React$useState2[1];
  var contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition2 && (mousePosition2.x || mousePosition2.y) ? "".concat(mousePosition2.x - elementOffset.left, "px ").concat(mousePosition2.y - elementOffset.top, "px") : "");
  }
  return React95.createElement(es_default, {
    visible,
    onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender,
    motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return React95.createElement(Panel_default2, _extends({}, props, {
      ref,
      title,
      ariaId,
      prefixCls,
      holderRef: motionRef,
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), style2), contentStyle),
      className: (0, import_classnames25.default)(className, motionClassName)
    }));
  });
});
Content.displayName = "Content";
var Content_default = Content;

// node_modules/rc-dialog/es/Dialog/Mask.js
var React96 = __toESM(require_react());
var import_classnames26 = __toESM(require_classnames());
var Mask = function Mask2(props) {
  var prefixCls = props.prefixCls, style2 = props.style, visible = props.visible, maskProps = props.maskProps, motionName = props.motionName, className = props.className;
  return React96.createElement(es_default, {
    key: "mask",
    visible,
    motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function(_ref, ref) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return React96.createElement("div", _extends({
      ref,
      style: _objectSpread2(_objectSpread2({}, motionStyle), style2),
      className: (0, import_classnames26.default)("".concat(prefixCls, "-mask"), motionClassName, className)
    }, maskProps));
  });
};
var Mask_default = Mask;

// node_modules/rc-dialog/es/Dialog/index.js
var Dialog = function Dialog2(props) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-dialog" : _props$prefixCls, zIndex = props.zIndex, _props$visible = props.visible, visible = _props$visible === void 0 ? false : _props$visible, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, _props$focusTriggerAf = props.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf, wrapStyle = props.wrapStyle, wrapClassName = props.wrapClassName, wrapProps = props.wrapProps, onClose = props.onClose, afterOpenChange = props.afterOpenChange, afterClose = props.afterClose, transitionName = props.transitionName, animation = props.animation, _props$closable = props.closable, closable = _props$closable === void 0 ? true : _props$closable, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, maskStyle = props.maskStyle, maskProps = props.maskProps, rootClassName = props.rootClassName, modalClassNames = props.classNames, modalStyles = props.styles;
  if (true) {
    ["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(prop) {
      warning(!(prop in props), "".concat(prop, " is deprecated, please use styles instead."));
    });
    if ("wrapClassName" in props) {
      warning(false, "wrapClassName is deprecated, please use classNames instead.");
    }
  }
  var lastOutSideActiveElementRef = (0, import_react51.useRef)();
  var wrapperRef = (0, import_react51.useRef)();
  var contentRef = (0, import_react51.useRef)();
  var _React$useState = React97.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
  var ariaId = useId_default();
  function saveLastOutSideActiveElementRef() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
    }
  }
  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      focusDialogContent();
    } else {
      setAnimatedVisible(false);
      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {
        }
        lastOutSideActiveElementRef.current = null;
      }
      if (animatedVisible) {
        afterClose === null || afterClose === void 0 || afterClose();
      }
    }
    afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(newVisible);
  }
  function onInternalClose(e) {
    onClose === null || onClose === void 0 || onClose(e);
  }
  var contentClickRef = (0, import_react51.useRef)(false);
  var contentTimeoutRef = (0, import_react51.useRef)();
  var onContentMouseDown = function onContentMouseDown2() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp2() {
    contentTimeoutRef.current = setTimeout(function() {
      contentClickRef.current = false;
    });
  };
  var onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = function onWrapperClick2(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode_default.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }
    if (visible && e.keyCode === KeyCode_default.TAB) {
      contentRef.current.changeActive(!e.shiftKey);
    }
  }
  (0, import_react51.useEffect)(function() {
    if (visible) {
      setAnimatedVisible(true);
      saveLastOutSideActiveElementRef();
    }
  }, [visible]);
  (0, import_react51.useEffect)(function() {
    return function() {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  var mergedStyle = _objectSpread2(_objectSpread2(_objectSpread2({
    zIndex
  }, wrapStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.wrapper), {}, {
    display: !animatedVisible ? "none" : null
  });
  return React97.createElement("div", _extends({
    className: (0, import_classnames27.default)("".concat(prefixCls, "-root"), rootClassName)
  }, pickAttrs(props, {
    data: true
  })), React97.createElement(Mask_default, {
    prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: _objectSpread2(_objectSpread2({
      zIndex
    }, maskStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.mask),
    maskProps,
    className: modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.mask
  }), React97.createElement("div", _extends({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: (0, import_classnames27.default)("".concat(prefixCls, "-wrap"), wrapClassName, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: mergedStyle
  }, wrapProps), React97.createElement(Content_default, _extends({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable,
    ariaId,
    prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
};
var Dialog_default = Dialog;

// node_modules/rc-dialog/es/DialogWrap.js
var DialogWrap = function DialogWrap2(props) {
  var visible = props.visible, getContainer2 = props.getContainer, forceRender = props.forceRender, _props$destroyOnClose = props.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose, _afterClose = props.afterClose, panelRef = props.panelRef;
  var _React$useState = React98.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
  var refContext = React98.useMemo(function() {
    return {
      panel: panelRef
    };
  }, [panelRef]);
  React98.useEffect(function() {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }
  return React98.createElement(RefContext.Provider, {
    value: refContext
  }, React98.createElement(es_default4, {
    open: visible || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer: getContainer2,
    autoLock: visible || animatedVisible
  }, React98.createElement(Dialog_default, _extends({}, props, {
    destroyOnClose,
    afterClose: function afterClose() {
      _afterClose === null || _afterClose === void 0 || _afterClose();
      setAnimatedVisible(false);
    }
  }))));
};
DialogWrap.displayName = "Dialog";
var DialogWrap_default = DialogWrap;

// node_modules/rc-dialog/es/index.js
var es_default5 = DialogWrap_default;

// node_modules/antd/es/_util/ContextIsolator.js
var import_react53 = __toESM(require_react());

// node_modules/antd/es/form/context.js
var React108 = __toESM(require_react());

// node_modules/rc-field-form/es/index.js
var React107 = __toESM(require_react());

// node_modules/rc-field-form/es/Field.js
var React102 = __toESM(require_react());

// node_modules/rc-field-form/es/FieldContext.js
var React99 = __toESM(require_react());
var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
var warningFunc = function warningFunc2() {
  warning_default(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
};
var Context2 = React99.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
var FieldContext_default = Context2;

// node_modules/rc-field-form/es/ListContext.js
var React100 = __toESM(require_react());
var ListContext = React100.createContext(null);
var ListContext_default = ListContext;

// node_modules/rc-field-form/es/utils/typeUtil.js
function toArray2(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}

// node_modules/@rc-component/async-validator/es/messages.js
function newMessages() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

// node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

// node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper2(t2) {
    if (null === t2 || !_isNativeFunction(t2)) return t2;
    if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper3);
    }
    function Wrapper3() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper3.prototype = Object.create(t2.prototype, {
      constructor: {
        value: Wrapper3,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper3, t2);
  }, _wrapNativeSuper(t);
}

// node_modules/@rc-component/async-validator/es/util.js
var formatRegExp = /%[sdj%]/g;
var warning4 = function warning5() {
};
if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
  warning4 = function warning6(type5, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type5, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type5) {
  return type5 === "string" || type5 === "url" || type5 === "hex" || type5 === "email" || type5 === "date" || type5 === "pattern";
}
function isEmptyValue(value, type5) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type5 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type5) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, _toConsumableArray(errors || []));
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next2(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next2);
    } else {
      callback([]);
    }
  }
  next2([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, _toConsumableArray(objArr[k] || []));
  });
  return ret;
}
var AsyncValidationError = function(_Error) {
  _inherits(AsyncValidationError2, _Error);
  var _super = _createSuper(AsyncValidationError2);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _classCallCheck(this, AsyncValidationError2);
    _this = _super.call(this, "Async Validation Error");
    _defineProperty(_assertThisInitialized(_this), "errors", void 0);
    _defineProperty(_assertThisInitialized(_this), "fields", void 0);
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return _createClass(AsyncValidationError2);
}(_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next2 = function next3(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next2);
    });
    _pending.catch(function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next2 = function next3(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next2);
      } else {
        asyncParallelArray(arr, func, next2);
      }
    });
  });
  pending.catch(function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue2(value, path2) {
  var v = value;
  for (var i = 0; i < path2.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path2[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue2(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (_typeof(value) === "object" && _typeof(target[s]) === "object") {
          target[s] = _objectSpread2(_objectSpread2({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

// node_modules/@rc-component/async-validator/es/rule/enum.js
var ENUM = "enum";
var enumerable = function enumerable2(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
  }
};
var enum_default = enumerable;

// node_modules/@rc-component/async-validator/es/rule/pattern.js
var pattern = function pattern2(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var pattern_default = pattern;

// node_modules/@rc-component/async-validator/es/rule/range.js
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var range_default = range;

// node_modules/@rc-component/async-validator/es/rule/required.js
var required = function required2(rule, value, source, errors, options, type5) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type5 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var required_default = required;

// node_modules/@rc-component/async-validator/es/rule/url.js
var urlReg;
var url_default = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(word, ")|(?<=").concat(word, ")(?=\\s|$))") : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6List = [
    "(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(v6seg, ":){5}(?::").concat(v4, "|(?::").concat(v6seg, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(v6seg, ":){4}(?:(?::").concat(v6seg, "){0,1}:").concat(v4, "|(?::").concat(v6seg, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(v6seg, ":){3}(?:(?::").concat(v6seg, "){0,2}:").concat(v4, "|(?::").concat(v6seg, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(v6seg, ":){2}(?:(?::").concat(v6seg, "){0,3}:").concat(v4, "|(?::").concat(v6seg, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(v6seg, ":){1}(?:(?::").concat(v6seg, "){0,4}:").concat(v4, "|(?::").concat(v6seg, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ];
  var v6Eth0 = "(?:%[0-9a-zA-Z]{1,})?";
  var v6 = "(?:".concat(v6List.join("|"), ")").concat(v6Eth0);
  var v46Exact = new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)"));
  var v4exact = new RegExp("^".concat(v4, "$"));
  var v6exact = new RegExp("^".concat(v6, "$"));
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:".concat(b(options)).concat(v4).concat(b(options), ")|(?:").concat(b(options)).concat(v6).concat(b(options), ")"), "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("".concat(b(options)).concat(v4).concat(b(options)), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("".concat(b(options)).concat(v6).concat(b(options)), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path2 = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ipv4, "|").concat(ipv6, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path2);
  urlReg = new RegExp("(?:^".concat(regex, "$)"), "i");
  return urlReg;
};

// node_modules/@rc-component/async-validator/es/rule/type.js
var pattern3 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp3(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return _typeof(value) === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern3.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(url_default());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern3.hex);
  }
};
var type = function type2(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required_default(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && _typeof(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var type_default = type;

// node_modules/@rc-component/async-validator/es/rule/whitespace.js
var whitespace2 = function whitespace3(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var whitespace_default = whitespace2;

// node_modules/@rc-component/async-validator/es/rule/index.js
var rule_default = {
  required: required_default,
  whitespace: whitespace_default,
  type: type_default,
  range: range_default,
  enum: enum_default,
  pattern: pattern_default
};

// node_modules/@rc-component/async-validator/es/validator/any.js
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var any_default = any;

// node_modules/@rc-component/async-validator/es/validator/array.js
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array_default = array2;

// node_modules/@rc-component/async-validator/es/validator/boolean.js
var boolean = function boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var boolean_default = boolean;

// node_modules/@rc-component/async-validator/es/validator/date.js
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rule_default.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rule_default.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var date_default = date2;

// node_modules/@rc-component/async-validator/es/validator/enum.js
var ENUM2 = "enum";
var enumerable3 = function enumerable4(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default[ENUM2](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var enum_default2 = enumerable3;

// node_modules/@rc-component/async-validator/es/validator/float.js
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var float_default = floatFn;

// node_modules/@rc-component/async-validator/es/validator/integer.js
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer_default = integer2;

// node_modules/@rc-component/async-validator/es/validator/method.js
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var method_default = method2;

// node_modules/@rc-component/async-validator/es/validator/number.js
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number_default = number2;

// node_modules/@rc-component/async-validator/es/validator/object.js
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object_default = object2;

// node_modules/@rc-component/async-validator/es/validator/pattern.js
var pattern4 = function pattern5(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rule_default.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern_default2 = pattern4;

// node_modules/@rc-component/async-validator/es/validator/regexp.js
var regexp4 = function regexp5(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp_default = regexp4;

// node_modules/@rc-component/async-validator/es/validator/required.js
var required3 = function required4(rule, value, callback, source, options) {
  var errors = [];
  var type5 = Array.isArray(value) ? "array" : _typeof(value);
  rule_default.required(rule, value, source, errors, options, type5);
  callback(errors);
};
var required_default2 = required3;

// node_modules/@rc-component/async-validator/es/validator/string.js
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
      rule_default.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rule_default.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var string_default = string;

// node_modules/@rc-component/async-validator/es/validator/type.js
var type3 = function type4(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var type_default2 = type3;

// node_modules/@rc-component/async-validator/es/validator/index.js
var validator_default = {
  string: string_default,
  method: method_default,
  number: number_default,
  boolean: boolean_default,
  regexp: regexp_default,
  integer: integer_default,
  float: float_default,
  array: array_default,
  object: object_default,
  enum: enum_default2,
  pattern: pattern_default2,
  date: date_default,
  url: type_default2,
  hex: type_default2,
  email: type_default2,
  required: required_default2,
  any: any_default
};

// node_modules/@rc-component/async-validator/es/index.js
var Schema = function() {
  function Schema2(descriptor) {
    _classCallCheck(this, Schema2);
    _defineProperty(this, "rules", null);
    _defineProperty(this, "_messages", messages);
    this.define(descriptor);
  }
  _createClass(Schema2, [{
    key: "define",
    value: function define2(rules) {
      var _this = this;
      if (!rules) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (_typeof(rules) !== "object" || Array.isArray(rules)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      Object.keys(rules).forEach(function(name) {
        var item = rules[name];
        _this.rules[name] = Array.isArray(item) ? item : [item];
      });
    }
  }, {
    key: "messages",
    value: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }
      return this._messages;
    }
  }, {
    key: "validate",
    value: function validate(source_) {
      var _this2 = this;
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var oc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      };
      var source = source_;
      var options = o;
      var callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback(null, source);
        }
        return Promise.resolve(source);
      }
      function complete(results) {
        var errors = [];
        var fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            var _errors;
            errors = (_errors = errors).concat.apply(_errors, _toConsumableArray(e));
          } else {
            errors.push(e);
          }
        }
        for (var i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          callback(null, source);
        } else {
          fields = convertFieldsError(errors);
          callback(errors, fields);
        }
      }
      if (options.messages) {
        var messages2 = this.messages();
        if (messages2 === messages) {
          messages2 = newMessages();
        }
        deepMerge(messages2, options.messages);
        options.messages = messages2;
      } else {
        options.messages = this.messages();
      }
      var series = {};
      var keys2 = options.keys || Object.keys(this.rules);
      keys2.forEach(function(z) {
        var arr = _this2.rules[z];
        var value = source[z];
        arr.forEach(function(r) {
          var rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = _objectSpread2({}, source);
            }
            value = source[z] = rule.transform(value);
            if (value !== void 0 && value !== null) {
              rule.type = rule.type || (Array.isArray(value) ? "array" : _typeof(value));
            }
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = _objectSpread2({}, rule);
          }
          rule.validator = _this2.getValidationMethod(rule);
          if (!rule.validator) {
            return;
          }
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this2.getType(rule);
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value,
            source,
            field: z
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options, function(data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === "object" || rule.type === "array") && (_typeof(rule.fields) === "object" || _typeof(rule.defaultField) === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullField(key, schema) {
          return _objectSpread2(_objectSpread2({}, schema), {}, {
            fullField: "".concat(rule.fullField, ".").concat(key),
            fullFields: rule.fullFields ? [].concat(_toConsumableArray(rule.fullFields), [key]) : [key]
          });
        }
        function cb() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var errorList = Array.isArray(e) ? e : [e];
          if (!options.suppressWarning && errorList.length) {
            Schema2.warning("async-validator:", errorList);
          }
          if (errorList.length && rule.message !== void 0) {
            errorList = [].concat(rule.message);
          }
          var filledErrors = errorList.map(complementError(rule, source));
          if (options.first && filledErrors.length) {
            errorFields[rule.field] = 1;
            return doIt(filledErrors);
          }
          if (!deep) {
            doIt(filledErrors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message !== void 0) {
                filledErrors = [].concat(rule.message).map(complementError(rule, source));
              } else if (options.error) {
                filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
              }
              return doIt(filledErrors);
            }
            var fieldsSchema = {};
            if (rule.defaultField) {
              Object.keys(data.value).map(function(key) {
                fieldsSchema[key] = rule.defaultField;
              });
            }
            fieldsSchema = _objectSpread2(_objectSpread2({}, fieldsSchema), data.rule.fields);
            var paredFieldsSchema = {};
            Object.keys(fieldsSchema).forEach(function(field) {
              var fieldSchema = fieldsSchema[field];
              var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
              paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
            });
            var schema = new Schema2(paredFieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, function(errs) {
              var finalErrors = [];
              if (filledErrors && filledErrors.length) {
                finalErrors.push.apply(finalErrors, _toConsumableArray(filledErrors));
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, _toConsumableArray(errs));
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        var res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options);
          } catch (error) {
            var _console$error, _console;
            (_console$error = (_console = console).error) === null || _console$error === void 0 || _console$error.call(_console, error);
            if (!options.suppressValidatorError) {
              setTimeout(function() {
                throw error;
              }, 0);
            }
            cb(error.message);
          }
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || "".concat(rule.fullField || rule.field, " fails"));
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(function() {
            return cb();
          }, function(e) {
            return cb(e);
          });
        }
      }, function(results) {
        complete(results);
      }, source);
    }
  }, {
    key: "getType",
    value: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validator_default.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      var keys2 = Object.keys(rule);
      var messageIndex = keys2.indexOf("message");
      if (messageIndex !== -1) {
        keys2.splice(messageIndex, 1);
      }
      if (keys2.length === 1 && keys2[0] === "required") {
        return validator_default.required;
      }
      return validator_default[this.getType(rule)] || void 0;
    }
  }]);
  return Schema2;
}();
_defineProperty(Schema, "register", function register(type5, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validator_default[type5] = validator;
});
_defineProperty(Schema, "warning", warning4);
_defineProperty(Schema, "messages", messages);
_defineProperty(Schema, "validators", validator_default);
var es_default6 = Schema;

// node_modules/rc-field-form/es/utils/validateUtil.js
var React101 = __toESM(require_react());

// node_modules/rc-field-form/es/utils/messages.js
var typeTemplate2 = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate2,
    method: typeTemplate2,
    array: typeTemplate2,
    object: typeTemplate2,
    number: typeTemplate2,
    date: typeTemplate2,
    boolean: typeTemplate2,
    integer: typeTemplate2,
    float: typeTemplate2,
    regexp: typeTemplate2,
    email: typeTemplate2,
    url: typeTemplate2,
    hex: typeTemplate2
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

// node_modules/rc-field-form/es/utils/validateUtil.js
var AsyncValidator = es_default6;
function replaceMessage(template, kv) {
  return template.replace(/\\?\$\{\w+\}/g, function(str) {
    if (str.startsWith("\\")) {
      return str.slice(1);
    }
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
function _validateRule() {
  _validateRule = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages2, result, subResults, kv, fillVariableResult;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cloneRule = _objectSpread2({}, rule);
          delete cloneRule.ruleIndex;
          AsyncValidator.warning = function() {
            return void 0;
          };
          if (cloneRule.validator) {
            originValidator = cloneRule.validator;
            cloneRule.validator = function() {
              try {
                return originValidator.apply(void 0, arguments);
              } catch (error) {
                console.error(error);
                return Promise.reject(CODE_LOGIC_ERROR);
              }
            };
          }
          subRuleField = null;
          if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
            subRuleField = cloneRule.defaultField;
            delete cloneRule.defaultField;
          }
          validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
          messages2 = merge(defaultValidateMessages, options.validateMessages);
          validator.messages(messages2);
          result = [];
          _context2.prev = 10;
          _context2.next = 13;
          return Promise.resolve(validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options)));
        case 13:
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](10);
          if (_context2.t0.errors) {
            result = _context2.t0.errors.map(function(_ref4, index) {
              var message = _ref4.message;
              var mergedMessage = message === CODE_LOGIC_ERROR ? messages2.default : message;
              return React101.isValidElement(mergedMessage) ? (
                // Wrap ReactNode with `key`
                React101.cloneElement(mergedMessage, {
                  key: "error_".concat(index)
                })
              ) : mergedMessage;
            });
          }
        case 18:
          if (!(!result.length && subRuleField)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 21;
          return Promise.all(value.map(function(subValue, i) {
            return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
          }));
        case 21:
          subResults = _context2.sent;
          return _context2.abrupt("return", subResults.reduce(function(prev2, errors) {
            return [].concat(_toConsumableArray(prev2), _toConsumableArray(errors));
          }, []));
        case 23:
          kv = _objectSpread2(_objectSpread2({}, rule), {}, {
            name,
            enum: (rule.enum || []).join(", ")
          }, messageVariables);
          fillVariableResult = result.map(function(error) {
            if (typeof error === "string") {
              return replaceMessage(error, kv);
            }
            return error;
          });
          return _context2.abrupt("return", fillVariableResult);
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 15]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join(".");
  var filledRules = rules.map(function(currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = _objectSpread2(_objectSpread2({}, currentRule), {}, {
      ruleIndex
    });
    if (originValidatorFunc) {
      cloneRule.validator = function(rule, val, callback) {
        var hasPromise = false;
        var wrappedCallback = function wrappedCallback2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Promise.resolve().then(function() {
            warning_default(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
        warning_default(hasPromise, "`callback` is deprecated. Please return a promise instead.");
        if (hasPromise) {
          promise.then(function() {
            callback();
          }).catch(function(err) {
            callback(err || " ");
          });
        }
      };
    }
    return cloneRule;
  }).sort(function(_ref, _ref2) {
    var w1 = _ref.warningOnly, i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly, i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  var summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise(function() {
      var _ref3 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < filledRules.length)) {
                _context.next = 12;
                break;
              }
              rule = filledRules[i];
              _context.next = 5;
              return validateRule(name, value, rule, options, messageVariables);
            case 5:
              errors = _context.sent;
              if (!errors.length) {
                _context.next = 9;
                break;
              }
              reject([{
                errors,
                rule
              }]);
              return _context.abrupt("return");
            case 9:
              i += 1;
              _context.next = 1;
              break;
            case 12:
              resolve([]);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function(_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    var rulePromises = filledRules.map(function(rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function(errors) {
        return {
          errors,
          rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
      return Promise.reject(errors);
    });
  }
  summaryPromise.catch(function(e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(rulePromises) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
            var _ref5;
            var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
            return errors;
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4(rulePromises) {
    var count;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          count = 0;
          return _context4.abrupt("return", new Promise(function(resolve) {
            rulePromises.forEach(function(promise) {
              promise.then(function(ruleError) {
                if (ruleError.errors.length) {
                  resolve([ruleError]);
                }
                count += 1;
                if (count === rulePromises.length) {
                  resolve([]);
                }
              });
            });
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}

// node_modules/rc-field-form/es/utils/valueUtil.js
function getNamePath(path2) {
  return toArray2(path2);
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function(namePath) {
    var value = get(store, namePath);
    newStore = set(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  return namePathList && namePathList.some(function(path2) {
    return matchNamePath(namePath, path2, partialMatch);
  });
}
function matchNamePath(namePath, subNamePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every(function(nameUnit, i) {
    return namePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || _typeof(source) !== "object" || _typeof(target) !== "object") {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys2 = new Set([].concat(sourceKeys, targetKeys));
  return _toConsumableArray(keys2).every(function(key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === "function" && typeof targetValue === "function") {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? void 0 : arguments[1];
  if (event && event.target && _typeof(event.target) === "object" && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
function move(array4, moveIndex, toIndex) {
  var length2 = array4.length;
  if (moveIndex < 0 || moveIndex >= length2 || toIndex < 0 || toIndex >= length2) {
    return array4;
  }
  var item = array4[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    return [].concat(_toConsumableArray(array4.slice(0, toIndex)), [item], _toConsumableArray(array4.slice(toIndex, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, length2)));
  }
  if (diff < 0) {
    return [].concat(_toConsumableArray(array4.slice(0, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array4.slice(toIndex + 1, length2)));
  }
  return array4;
}

// node_modules/rc-field-form/es/Field.js
var _excluded10 = ["name"];
var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev2, next2, prevValue, nextValue, info) {
  if (typeof shouldUpdate === "function") {
    return shouldUpdate(prev2, next2, "source" in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}
var Field = function(_React$Component) {
  _inherits(Field2, _React$Component);
  var _super = _createSuper(Field2);
  function Field2(props) {
    var _this;
    _classCallCheck(this, Field2);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "state", {
      resetCount: 0
    });
    _defineProperty(_assertThisInitialized(_this), "cancelRegisterFunc", null);
    _defineProperty(_assertThisInitialized(_this), "mounted", false);
    _defineProperty(_assertThisInitialized(_this), "touched", false);
    _defineProperty(_assertThisInitialized(_this), "dirty", false);
    _defineProperty(_assertThisInitialized(_this), "validatePromise", void 0);
    _defineProperty(_assertThisInitialized(_this), "prevValidating", void 0);
    _defineProperty(_assertThisInitialized(_this), "errors", EMPTY_ERRORS);
    _defineProperty(_assertThisInitialized(_this), "warnings", EMPTY_ERRORS);
    _defineProperty(_assertThisInitialized(_this), "cancelRegister", function() {
      var _this$props = _this.props, preserve2 = _this$props.preserve, isListField = _this$props.isListField, name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve2, getNamePath(name));
      }
      _this.cancelRegisterFunc = null;
    });
    _defineProperty(_assertThisInitialized(_this), "getNamePath", function() {
      var _this$props2 = _this.props, name = _this$props2.name, fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName, prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== void 0 ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
    });
    _defineProperty(_assertThisInitialized(_this), "getRules", function() {
      var _this$props3 = _this.props, _this$props3$rules = _this$props3.rules, rules = _this$props3$rules === void 0 ? [] : _this$props3$rules, fieldContext = _this$props3.fieldContext;
      return rules.map(function(rule) {
        if (typeof rule === "function") {
          return rule(fieldContext);
        }
        return rule;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "refresh", function() {
      if (!_this.mounted) return;
      _this.setState(function(_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "metaCache", null);
    _defineProperty(_assertThisInitialized(_this), "triggerMetaEvent", function(destroy) {
      var onMetaChange = _this.props.onMetaChange;
      if (onMetaChange) {
        var _meta = _objectSpread2(_objectSpread2({}, _this.getMeta()), {}, {
          destroy
        });
        if (!isEqual_default(_this.metaCache, _meta)) {
          onMetaChange(_meta);
        }
        _this.metaCache = _meta;
      } else {
        _this.metaCache = null;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onStoreChange", function(prevStore, namePathList, info) {
      var _this$props4 = _this.props, shouldUpdate = _this$props4.shouldUpdate, _this$props4$dependen = _this$props4.dependencies, dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen, onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
      if (info.type === "valueUpdate" && info.source === "external" && !isEqual_default(prevValue, curValue)) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case "reset":
          if (!namePathList || namePathMatch) {
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = void 0;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 || onReset();
            _this.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (shouldUpdate && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var data = info.data;
          if (namePathMatch) {
            if ("touched" in data) {
              _this.touched = data.touched;
            }
            if ("validating" in data && !("originRCField" in data)) {
              _this.validatePromise = data.validating ? Promise.resolve([]) : null;
            }
            if ("errors" in data) {
              _this.errors = data.errors || EMPTY_ERRORS;
            }
            if ("warnings" in data) {
              _this.warnings = data.warnings || EMPTY_ERRORS;
            }
            _this.dirty = true;
            _this.triggerMetaEvent();
            _this.reRender();
            return;
          } else if ("value" in data && containsNamePath(namePathList, namePath, true)) {
            _this.reRender();
            return;
          }
          if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var dependencyList = dependencies.map(getNamePath);
          if (dependencyList.some(function(dependency) {
            return containsNamePath(info.relatedFields, dependency);
          })) {
            _this.reRender();
            return;
          }
          break;
        }
        default:
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "validateRules", function(options) {
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      var _ref2 = options || {}, triggerName = _ref2.triggerName, _ref2$validateOnly = _ref2.validateOnly, validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;
      var rootPromise = Promise.resolve().then(_asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
        var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.mounted) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", []);
            case 2:
              _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce;
              filteredRules = _this.getRules();
              if (triggerName) {
                filteredRules = filteredRules.filter(function(rule) {
                  return rule;
                }).filter(function(rule) {
                  var validateTrigger = rule.validateTrigger;
                  if (!validateTrigger) {
                    return true;
                  }
                  var triggerList = toArray2(validateTrigger);
                  return triggerList.includes(triggerName);
                });
              }
              if (!(validateDebounce && triggerName)) {
                _context.next = 10;
                break;
              }
              _context.next = 8;
              return new Promise(function(resolve) {
                setTimeout(resolve, validateDebounce);
              });
            case 8:
              if (!(_this.validatePromise !== rootPromise)) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", []);
            case 10:
              promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
              promise.catch(function(e) {
                return e;
              }).then(function() {
                var ruleErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY_ERRORS;
                if (_this.validatePromise === rootPromise) {
                  var _ruleErrors$forEach;
                  _this.validatePromise = null;
                  var nextErrors = [];
                  var nextWarnings = [];
                  (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref4) {
                    var warningOnly = _ref4.rule.warningOnly, _ref4$errors = _ref4.errors, errors = _ref4$errors === void 0 ? EMPTY_ERRORS : _ref4$errors;
                    if (warningOnly) {
                      nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                    } else {
                      nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                    }
                  });
                  _this.errors = nextErrors;
                  _this.warnings = nextWarnings;
                  _this.triggerMetaEvent();
                  _this.reRender();
                }
              });
              return _context.abrupt("return", promise);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));
      if (validateOnly) {
        return rootPromise;
      }
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();
      _this.reRender();
      return rootPromise;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldValidating", function() {
      return !!_this.validatePromise;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldTouched", function() {
      return _this.touched;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldDirty", function() {
      if (_this.dirty || _this.props.initialValue !== void 0) {
        return true;
      }
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK), getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== void 0) {
        return true;
      }
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "getErrors", function() {
      return _this.errors;
    });
    _defineProperty(_assertThisInitialized(_this), "getWarnings", function() {
      return _this.warnings;
    });
    _defineProperty(_assertThisInitialized(_this), "isListField", function() {
      return _this.props.isListField;
    });
    _defineProperty(_assertThisInitialized(_this), "isList", function() {
      return _this.props.isList;
    });
    _defineProperty(_assertThisInitialized(_this), "isPreserve", function() {
      return _this.props.preserve;
    });
    _defineProperty(_assertThisInitialized(_this), "getMeta", function() {
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath(),
        validated: _this.validatePromise === null
      };
      return meta;
    });
    _defineProperty(_assertThisInitialized(_this), "getOnlyChild", function(children) {
      if (typeof children === "function") {
        var _meta2 = _this.getMeta();
        return _objectSpread2(_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      }
      var childList = toArray(children);
      if (childList.length !== 1 || !React102.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    });
    _defineProperty(_assertThisInitialized(_this), "getValue", function(store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return get(store || getFieldsValue(true), namePath);
    });
    _defineProperty(_assertThisInitialized(_this), "getControlled", function() {
      var childProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _this$props6 = _this.props, name = _this$props6.name, trigger = _this$props6.trigger, validateTrigger = _this$props6.validateTrigger, getValueFromEvent = _this$props6.getValueFromEvent, normalize2 = _this$props6.normalize, valuePropName = _this$props6.valuePropName, getValueProps = _this$props6.getValueProps, fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks3 = fieldContext.getInternalHooks, getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks3(HOOK_MARK), dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps = getValueProps || function(val) {
        return _defineProperty({}, valuePropName, val);
      };
      var originTriggerFunc = childProps[trigger];
      var valueProps = name !== void 0 ? mergedGetValueProps(value) : {};
      if (valueProps) {
        Object.keys(valueProps).forEach(function(key) {
          warning_default(typeof valueProps[key] !== "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(key, ")"));
        });
      }
      var control = _objectSpread2(_objectSpread2({}, childProps), valueProps);
      control[trigger] = function() {
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize2) {
          newValue = normalize2(newValue, value, getFieldsValue(true));
        }
        if (newValue !== value) {
          dispatch({
            type: "updateValue",
            namePath,
            value: newValue
          });
        }
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };
      var validateTriggerList = toArray2(mergedValidateTrigger || []);
      validateTriggerList.forEach(function(triggerName) {
        var originTrigger = control[triggerName];
        control[triggerName] = function() {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }
          var rules = _this.props.rules;
          if (rules && rules.length) {
            dispatch({
              type: "validateField",
              namePath,
              triggerName
            });
          }
        };
      });
      return control;
    });
    if (props.fieldContext) {
      var getInternalHooks2 = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks2(HOOK_MARK), initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue(_assertThisInitialized(_this));
    }
    return _this;
  }
  _createClass(Field2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props, shouldUpdate = _this$props7.shouldUpdate, fieldContext = _this$props7.fieldContext;
      this.mounted = true;
      if (fieldContext) {
        var getInternalHooks2 = fieldContext.getInternalHooks;
        var _getInternalHooks3 = getInternalHooks2(HOOK_MARK), registerField = _getInternalHooks3.registerField;
        this.cancelRegisterFunc = registerField(this);
      }
      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render2() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;
      var _this$getOnlyChild = this.getOnlyChild(children), child = _this$getOnlyChild.child, isFunction = _this$getOnlyChild.isFunction;
      var returnChildNode;
      if (isFunction) {
        returnChildNode = child;
      } else if (React102.isValidElement(child)) {
        returnChildNode = React102.cloneElement(child, this.getControlled(child.props));
      } else {
        warning_default(!child, "`children` of Field is not validate ReactElement.");
        returnChildNode = child;
      }
      return React102.createElement(React102.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);
  return Field2;
}(React102.Component);
_defineProperty(Field, "contextType", FieldContext_default);
_defineProperty(Field, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function WrapperField(_ref6) {
  var _restProps$isListFiel;
  var name = _ref6.name, restProps = _objectWithoutProperties(_ref6, _excluded10);
  var fieldContext = React102.useContext(FieldContext_default);
  var listContext = React102.useContext(ListContext_default);
  var namePath = name !== void 0 ? getNamePath(name) : void 0;
  var isMergedListField = (_restProps$isListFiel = restProps.isListField) !== null && _restProps$isListFiel !== void 0 ? _restProps$isListFiel : !!listContext;
  var key = "keep";
  if (!isMergedListField) {
    key = "_".concat((namePath || []).join("_"));
  }
  if (restProps.preserve === false && isMergedListField && namePath.length <= 1) {
    warning_default(false, "`preserve` should not apply on Form.List fields.");
  }
  return React102.createElement(Field, _extends({
    key,
    name: namePath,
    isListField: isMergedListField
  }, restProps, {
    fieldContext
  }));
}
var Field_default = WrapperField;

// node_modules/rc-field-form/es/List.js
var React103 = __toESM(require_react());
function List(_ref) {
  var name = _ref.name, initialValue = _ref.initialValue, children = _ref.children, rules = _ref.rules, validateTrigger = _ref.validateTrigger, isListField = _ref.isListField;
  var context = React103.useContext(FieldContext_default);
  var wrapperListContext = React103.useContext(ListContext_default);
  var keyRef = React103.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = React103.useMemo(function() {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = React103.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, context), {}, {
      prefixName
    });
  }, [context, prefixName]);
  var listContext = React103.useMemo(function() {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]);
  if (typeof children !== "function") {
    warning_default(false, "Form.List only accepts function as children.");
    return null;
  }
  var shouldUpdate = function shouldUpdate2(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === "internal") {
      return false;
    }
    return prevValue !== nextValue;
  };
  return React103.createElement(ListContext_default.Provider, {
    value: listContext
  }, React103.createElement(FieldContext_default.Provider, {
    value: fieldContext
  }, React103.createElement(Field_default, {
    name: [],
    shouldUpdate,
    rules,
    validateTrigger,
    initialValue,
    isList: true,
    isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
  }, function(_ref3, meta) {
    var _ref3$value = _ref3.value, value = _ref3$value === void 0 ? [] : _ref3$value, onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;
    var getNewValue = function getNewValue2() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    var operations = {
      add: function add(defaultValue, index) {
        var newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index)));
          onChange([].concat(_toConsumableArray(newValue.slice(0, index)), [defaultValue], _toConsumableArray(newValue.slice(index))));
        } else {
          if (index < 0 || index > newValue.length) {
            warning_default(false, "The second parameter of the add function should be a valid positive number.");
          }
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
          onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
        }
        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter(function(_, keysIndex) {
          return !indexSet.has(keysIndex);
        });
        onChange(newValue.filter(function(_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move2(from2, to) {
        if (from2 === to) {
          return;
        }
        var newValue = getNewValue();
        if (from2 < 0 || from2 >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = move(keyManager.keys, from2, to);
        onChange(move(newValue, from2, to));
      }
    };
    var listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (true) {
        warning_default(false, "Current value of '".concat(prefixName.join(" > "), "' is not an array type."));
      }
    }
    return children(listValue.map(function(__, index) {
      var key = keyManager.keys[index];
      if (key === void 0) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key,
        isListField: true
      };
    }), operations, meta);
  })));
}
var List_default = List;

// node_modules/rc-field-form/es/useForm.js
var React104 = __toESM(require_react());

// node_modules/rc-field-form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function(resolve, reject) {
    promiseList.forEach(function(promise, index) {
      promise.catch(function(e) {
        hasError = true;
        return e;
      }).then(function(result) {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}

// node_modules/rc-field-form/es/utils/NameMap.js
var SPLIT2 = "__@field_split__";
function normalize(namePath) {
  return namePath.map(function(cell) {
    return "".concat(_typeof(cell), ":").concat(cell);
  }).join(SPLIT2);
}
var NameMap = function() {
  function NameMap2() {
    _classCallCheck(this, NameMap2);
    _defineProperty(this, "kvs", /* @__PURE__ */ new Map());
  }
  _createClass(NameMap2, [{
    key: "set",
    value: function set2(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get2(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next2 = updater(origin);
      if (!next2) {
        this.delete(key);
      } else {
        this.set(key, next2);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function map(callback) {
      return _toConsumableArray(this.kvs.entries()).map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        var cells = key.split(SPLIT2);
        return callback({
          key: cells.map(function(cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/), _cell$match2 = _slicedToArray(_cell$match, 3), type5 = _cell$match2[1], unit4 = _cell$match2[2];
            return type5 === "number" ? Number(unit4) : unit4;
          }),
          value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function(_ref3) {
        var key = _ref3.key, value = _ref3.value;
        json[key.join(".")] = value;
        return null;
      });
      return json;
    }
  }]);
  return NameMap2;
}();
var NameMap_default = NameMap;

// node_modules/rc-field-form/es/useForm.js
var _excluded11 = ["name"];
var FormStore = _createClass(function FormStore2(forceRootUpdate) {
  var _this = this;
  _classCallCheck(this, FormStore2);
  _defineProperty(this, "formHooked", false);
  _defineProperty(this, "forceRootUpdate", void 0);
  _defineProperty(this, "subscribable", true);
  _defineProperty(this, "store", {});
  _defineProperty(this, "fieldEntities", []);
  _defineProperty(this, "initialValues", {});
  _defineProperty(this, "callbacks", {});
  _defineProperty(this, "validateMessages", null);
  _defineProperty(this, "preserve", null);
  _defineProperty(this, "lastValidatePromise", null);
  _defineProperty(this, "getForm", function() {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  });
  _defineProperty(this, "getInternalHooks", function(key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    warning_default(false, "`getInternalHooks` is internal usage. Should not call directly.");
    return null;
  });
  _defineProperty(this, "useSubscribe", function(subscribable) {
    _this.subscribable = subscribable;
  });
  _defineProperty(this, "prevWithoutPreserves", null);
  _defineProperty(this, "setInitialValues", function(initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = merge(initialValues, _this.store);
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 || _this$prevWithoutPres.map(function(_ref) {
        var namePath = _ref.key;
        nextStore = set(nextStore, namePath, get(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  });
  _defineProperty(this, "destroyForm", function(clearOnDestroy) {
    if (clearOnDestroy) {
      _this.updateStore({});
    } else {
      var prevWithoutPreserves = new NameMap_default();
      _this.getFieldEntities(true).forEach(function(entity) {
        if (!_this.isMergedPreserve(entity.isPreserve())) {
          prevWithoutPreserves.set(entity.getNamePath(), true);
        }
      });
      _this.prevWithoutPreserves = prevWithoutPreserves;
    }
  });
  _defineProperty(this, "getInitialValue", function(namePath) {
    var initValue = get(_this.initialValues, namePath);
    return namePath.length ? merge(initValue) : initValue;
  });
  _defineProperty(this, "setCallbacks", function(callbacks) {
    _this.callbacks = callbacks;
  });
  _defineProperty(this, "setValidateMessages", function(validateMessages) {
    _this.validateMessages = validateMessages;
  });
  _defineProperty(this, "setPreserve", function(preserve2) {
    _this.preserve = preserve2;
  });
  _defineProperty(this, "watchList", []);
  _defineProperty(this, "registerWatch", function(callback) {
    _this.watchList.push(callback);
    return function() {
      _this.watchList = _this.watchList.filter(function(fn) {
        return fn !== callback;
      });
    };
  });
  _defineProperty(this, "notifyWatch", function() {
    var namePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      var allValues = _this.getFieldsValue(true);
      _this.watchList.forEach(function(callback) {
        callback(values, allValues, namePath);
      });
    }
  });
  _defineProperty(this, "timeoutId", null);
  _defineProperty(this, "warningUnhooked", function() {
    if (!_this.timeoutId && typeof window !== "undefined") {
      _this.timeoutId = setTimeout(function() {
        _this.timeoutId = null;
        if (!_this.formHooked) {
          warning_default(false, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
        }
      });
    }
  });
  _defineProperty(this, "updateStore", function(nextStore) {
    _this.store = nextStore;
  });
  _defineProperty(this, "getFieldEntities", function() {
    var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function(field) {
      return field.getNamePath().length;
    });
  });
  _defineProperty(this, "getFieldsMap", function() {
    var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var cache = new NameMap_default();
    _this.getFieldEntities(pure).forEach(function(field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  });
  _defineProperty(this, "getFieldEntitiesForNamePathList", function(nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function(name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  });
  _defineProperty(this, "getFieldsValue", function(nameList, filterFunc) {
    _this.warningUnhooked();
    var mergedNameList;
    var mergedFilterFunc;
    var mergedStrict;
    if (nameList === true || Array.isArray(nameList)) {
      mergedNameList = nameList;
      mergedFilterFunc = filterFunc;
    } else if (nameList && _typeof(nameList) === "object") {
      mergedStrict = nameList.strict;
      mergedFilterFunc = nameList.filter;
    }
    if (mergedNameList === true && !mergedFilterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function(entity) {
      var _isListField, _ref3;
      var namePath = "INVALIDATE_NAME_PATH" in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
      if (mergedStrict) {
        var _isList, _ref2;
        if ((_isList = (_ref2 = entity).isList) !== null && _isList !== void 0 && _isList.call(_ref2)) {
          return;
        }
      } else if (!mergedNameList && (_isListField = (_ref3 = entity).isListField) !== null && _isListField !== void 0 && _isListField.call(_ref3)) {
        return;
      }
      if (!mergedFilterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = "getMeta" in entity ? entity.getMeta() : null;
        if (mergedFilterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  });
  _defineProperty(this, "getFieldValue", function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    return get(_this.store, namePath);
  });
  _defineProperty(this, "getFieldsError", function(nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function(entity, index) {
      if (entity && !("INVALIDATE_NAME_PATH" in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  });
  _defineProperty(this, "getFieldError", function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  });
  _defineProperty(this, "getFieldWarning", function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  });
  _defineProperty(this, "isFieldsTouched", function() {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0], arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched2(field) {
      return field.isFieldTouched();
    };
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(function(entity) {
        return isFieldTouched(entity) || entity.isList();
      }) : fieldEntities.some(isFieldTouched);
    }
    var map = new NameMap_default();
    namePathList.forEach(function(shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function(field) {
      var fieldNamePath = field.getNamePath();
      namePathList.forEach(function(shortNamePath) {
        if (shortNamePath.every(function(nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function(list) {
            return [].concat(_toConsumableArray(list), [field]);
          });
        }
      });
    });
    var isNamePathListTouched = function isNamePathListTouched2(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function(_ref4) {
      var value = _ref4.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  });
  _defineProperty(this, "isFieldTouched", function(name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  });
  _defineProperty(this, "isFieldsValidating", function(nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function(testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function(testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  });
  _defineProperty(this, "isFieldValidating", function(name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  });
  _defineProperty(this, "resetWithFieldInitialValue", function() {
    var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var cache = new NameMap_default();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function(field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();
      if (initialValue !== void 0) {
        var records = cache.get(namePath) || /* @__PURE__ */ new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });
    var resetWithFields = function resetWithFields2(entities) {
      entities.forEach(function(field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== void 0) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== void 0) {
            warning_default(false, "Form already set 'initialValues' with path '".concat(namePath.join("."), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              warning_default(false, "Multiple Field with path '".concat(namePath.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              var isListField = field.isListField();
              if (!isListField && (!info.skipExist || originValue === void 0)) {
                _this.updateStore(set(_this.store, namePath, _toConsumableArray(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function(namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function(r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  });
  _defineProperty(this, "resetFields", function(nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore(merge(_this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: "reset"
      });
      _this.notifyWatch();
      return;
    }
    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function(namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore(set(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: "reset"
    });
    _this.notifyWatch(namePathList);
  });
  _defineProperty(this, "setFields", function(fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function(fieldData) {
      var name = fieldData.name, data = _objectWithoutProperties(fieldData, _excluded11);
      var namePath = getNamePath(name);
      namePathList.push(namePath);
      if ("value" in data) {
        _this.updateStore(set(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: "setField",
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  });
  _defineProperty(this, "getFields", function() {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function(field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = _objectSpread2(_objectSpread2({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
      Object.defineProperty(fieldData, "originRCField", {
        value: true
      });
      return fieldData;
    });
    return fields;
  });
  _defineProperty(this, "initEntityValue", function(entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== void 0) {
      var namePath = entity.getNamePath();
      var prevValue = get(_this.store, namePath);
      if (prevValue === void 0) {
        _this.updateStore(set(_this.store, namePath, initialValue));
      }
    }
  });
  _defineProperty(this, "isMergedPreserve", function(fieldPreserve) {
    var mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  });
  _defineProperty(this, "registerField", function(entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);
    if (entity.props.initialValue !== void 0) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(isListField, preserve2) {
      var subNamePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function(item) {
        return item !== entity;
      });
      if (!_this.isMergedPreserve(preserve2) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? void 0 : _this.getInitialValue(namePath);
        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function(field) {
          return (
            // Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;
          _this.updateStore(set(_prevStore, namePath, defaultValue, true));
          _this.notifyObservers(_prevStore, [namePath], {
            type: "remove"
          });
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  });
  _defineProperty(this, "dispatch", function(action) {
    switch (action.type) {
      case "updateValue": {
        var namePath = action.namePath, value = action.value;
        _this.updateValue(namePath, value);
        break;
      }
      case "validateField": {
        var _namePath = action.namePath, triggerName = action.triggerName;
        _this.validateFields([_namePath], {
          triggerName
        });
        break;
      }
      default:
    }
  });
  _defineProperty(this, "notifyObservers", function(prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = _objectSpread2(_objectSpread2({}, info), {}, {
        store: _this.getFieldsValue(true)
      });
      _this.getFieldEntities().forEach(function(_ref5) {
        var onStoreChange = _ref5.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  });
  _defineProperty(this, "triggerDependenciesUpdate", function(prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: "dependenciesUpdate",
      relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
    });
    return childrenFields;
  });
  _defineProperty(this, "updateValue", function(name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.updateStore(set(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: "valueUpdate",
      source: "internal"
    });
    _this.notifyWatch([namePath]);
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
  });
  _defineProperty(this, "setFieldsValue", function(store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = merge(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: "valueUpdate",
      source: "external"
    });
    _this.notifyWatch();
  });
  _defineProperty(this, "setFieldValue", function(name, value) {
    _this.setFields([{
      name,
      value,
      errors: [],
      warnings: []
    }]);
  });
  _defineProperty(this, "getDependencyChildrenFields", function(rootNamePath) {
    var children = /* @__PURE__ */ new Set();
    var childrenFields = [];
    var dependencies2fields = new NameMap_default();
    _this.getFieldEntities().forEach(function(field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function(dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function() {
          var fields = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren2(namePath) {
      var fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
      fields.forEach(function(field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren2(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  });
  _defineProperty(this, "triggerOnFieldsChange", function(namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();
      if (filedErrors) {
        var cache = new NameMap_default();
        filedErrors.forEach(function(_ref6) {
          var name = _ref6.name, errors = _ref6.errors;
          cache.set(name, errors);
        });
        fields.forEach(function(field) {
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function(_ref7) {
        var fieldName = _ref7.name;
        return containsNamePath(namePathList, fieldName);
      });
      if (changedFields.length) {
        onFieldsChange(changedFields, fields);
      }
    }
  });
  _defineProperty(this, "validateFields", function(arg1, arg2) {
    _this.warningUnhooked();
    var nameList;
    var options;
    if (Array.isArray(arg1) || typeof arg1 === "string" || typeof arg2 === "string") {
      nameList = arg1;
      options = arg2;
    } else {
      options = arg1;
    }
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : [];
    var promiseList = [];
    var TMP_SPLIT = String(Date.now());
    var validateNamePathList = /* @__PURE__ */ new Set();
    var _ref8 = options || {}, recursive = _ref8.recursive, dirty = _ref8.dirty;
    _this.getFieldEntities(true).forEach(function(field) {
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }
      if (dirty && !field.isFieldDirty()) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
        var promise = field.validateRules(_objectSpread2({
          validateMessages: _objectSpread2(_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
        }, options));
        promiseList.push(promise.then(function() {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function(ruleErrors) {
          var _ruleErrors$forEach;
          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref9) {
            var warningOnly = _ref9.rule.warningOnly, errors = _ref9.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise;
    summaryPromise.catch(function(results) {
      return results;
    }).then(function(results) {
      var resultNamePathList = results.map(function(_ref10) {
        var name = _ref10.name;
        return name;
      });
      _this.notifyObservers(_this.store, resultNamePathList, {
        type: "validateFinish"
      });
      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function() {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }
      return Promise.reject([]);
    }).catch(function(results) {
      var errorList = results.filter(function(result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    });
    returnPromise.catch(function(e) {
      return e;
    });
    var triggerNamePathList = namePathList.filter(function(namePath) {
      return validateNamePathList.has(namePath.join(TMP_SPLIT));
    });
    _this.triggerOnFieldsChange(triggerNamePathList);
    return returnPromise;
  });
  _defineProperty(this, "submit", function() {
    _this.warningUnhooked();
    _this.validateFields().then(function(values) {
      var onFinish = _this.callbacks.onFinish;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          console.error(err);
        }
      }
    }).catch(function(e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  });
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = React104.useRef();
  var _React$useState = React104.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      var forceReRender = function forceReRender2() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
var useForm_default = useForm;

// node_modules/rc-field-form/es/Form.js
var React106 = __toESM(require_react());

// node_modules/rc-field-form/es/FormContext.js
var React105 = __toESM(require_react());
var FormContext = React105.createContext({
  triggerFormChange: function triggerFormChange() {
  },
  triggerFormFinish: function triggerFormFinish() {
  },
  registerForm: function registerForm() {
  },
  unregisterForm: function unregisterForm() {
  }
});
var FormProvider = function FormProvider2(_ref) {
  var validateMessages = _ref.validateMessages, onFormChange = _ref.onFormChange, onFormFinish = _ref.onFormFinish, children = _ref.children;
  var formContext = React105.useContext(FormContext);
  var formsRef = React105.useRef({});
  return React105.createElement(FormContext.Provider, {
    value: _objectSpread2(_objectSpread2({}, formContext), {}, {
      validateMessages: _objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange2(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish2(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm2(name, form) {
        if (name) {
          formsRef.current = _objectSpread2(_objectSpread2({}, formsRef.current), {}, _defineProperty({}, name, form));
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm2(name) {
        var newForms = _objectSpread2({}, formsRef.current);
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};
var FormContext_default = FormContext;

// node_modules/rc-field-form/es/Form.js
var _excluded12 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"];
var Form = function Form2(_ref, ref) {
  var name = _ref.name, initialValues = _ref.initialValues, fields = _ref.fields, form = _ref.form, preserve2 = _ref.preserve, children = _ref.children, _ref$component = _ref.component, Component4 = _ref$component === void 0 ? "form" : _ref$component, validateMessages = _ref.validateMessages, _ref$validateTrigger = _ref.validateTrigger, validateTrigger = _ref$validateTrigger === void 0 ? "onChange" : _ref$validateTrigger, onValuesChange = _ref.onValuesChange, _onFieldsChange = _ref.onFieldsChange, _onFinish = _ref.onFinish, onFinishFailed = _ref.onFinishFailed, clearOnDestroy = _ref.clearOnDestroy, restProps = _objectWithoutProperties(_ref, _excluded12);
  var nativeElementRef = React106.useRef(null);
  var formContext = React106.useContext(FormContext_default);
  var _useForm = useForm_default(form), _useForm2 = _slicedToArray(_useForm, 1), formInstance = _useForm2[0];
  var _getInternalHooks = formInstance.getInternalHooks(HOOK_MARK), useSubscribe = _getInternalHooks.useSubscribe, setInitialValues = _getInternalHooks.setInitialValues, setCallbacks = _getInternalHooks.setCallbacks, setValidateMessages = _getInternalHooks.setValidateMessages, setPreserve = _getInternalHooks.setPreserve, destroyForm = _getInternalHooks.destroyForm;
  React106.useImperativeHandle(ref, function() {
    return _objectSpread2(_objectSpread2({}, formInstance), {}, {
      nativeElement: nativeElementRef.current
    });
  });
  React106.useEffect(function() {
    formContext.registerForm(name, formInstance);
    return function() {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);
  setValidateMessages(_objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);
      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed
  });
  setPreserve(preserve2);
  var mountRef = React106.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  React106.useEffect(
    function() {
      return function() {
        return destroyForm(clearOnDestroy);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var childrenNode;
  var childrenRenderProps = typeof children === "function";
  if (childrenRenderProps) {
    var _values = formInstance.getFieldsValue(true);
    childrenNode = children(_values, formInstance);
  } else {
    childrenNode = children;
  }
  useSubscribe(!childrenRenderProps);
  var prevFieldsRef = React106.useRef();
  React106.useEffect(function() {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = React106.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, formInstance), {}, {
      validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = React106.createElement(ListContext_default.Provider, {
    value: null
  }, React106.createElement(FieldContext_default.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component4 === false) {
    return wrapperNode;
  }
  return React106.createElement(Component4, _extends({}, restProps, {
    ref: nativeElementRef,
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;
      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 || _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};
var Form_default = Form;

// node_modules/rc-field-form/es/useWatch.js
var import_react52 = __toESM(require_react());
function stringify2(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
var useWatchWarning = true ? function(namePath) {
  var fullyStr = namePath.join("__RC_FIELD_FORM_SPLIT__");
  var nameStrRef = (0, import_react52.useRef)(fullyStr);
  warning_default(nameStrRef.current === fullyStr, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function useWatch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var dependencies = args[0], _args$ = args[1], _form = _args$ === void 0 ? {} : _args$;
  var options = isFormInstance(_form) ? {
    form: _form
  } : _form;
  var form = options.form;
  var _useState = (0, import_react52.useState)(), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
  var valueStr = (0, import_react52.useMemo)(function() {
    return stringify2(value);
  }, [value]);
  var valueStrRef = (0, import_react52.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0, import_react52.useContext)(FieldContext_default);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;
  if (true) {
    warning_default(args.length === 2 ? form ? isValidForm : true : isValidForm, "useWatch requires a form instance since it can not auto detect from context.");
  }
  var namePath = getNamePath(dependencies);
  var namePathRef = (0, import_react52.useRef)(namePath);
  namePathRef.current = namePath;
  useWatchWarning(namePath);
  (0, import_react52.useEffect)(
    function() {
      if (!isValidForm) {
        return;
      }
      var getFieldsValue = formInstance.getFieldsValue, getInternalHooks2 = formInstance.getInternalHooks;
      var _getInternalHooks = getInternalHooks2(HOOK_MARK), registerWatch = _getInternalHooks.registerWatch;
      var getWatchValue = function getWatchValue2(values, allValues) {
        var watchValue = options.preserve ? allValues : values;
        return typeof dependencies === "function" ? dependencies(watchValue) : get(watchValue, namePathRef.current);
      };
      var cancelRegister = registerWatch(function(values, allValues) {
        var newValue = getWatchValue(values, allValues);
        var nextValueStr = stringify2(newValue);
        if (valueStrRef.current !== nextValueStr) {
          valueStrRef.current = nextValueStr;
          setValue(newValue);
        }
      });
      var initialValue = getWatchValue(getFieldsValue(), getFieldsValue(true));
      if (value !== initialValue) {
        setValue(initialValue);
      }
      return cancelRegister;
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isValidForm]
  );
  return value;
}
var useWatch_default = useWatch;

// node_modules/rc-field-form/es/index.js
var InternalForm = React107.forwardRef(Form_default);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = Field_default;
RefForm.List = List_default;
RefForm.useForm = useForm_default;
RefForm.useWatch = useWatch_default;
var es_default7 = RefForm;

// node_modules/antd/es/form/context.js
var FormContext2 = React108.createContext({
  labelAlign: "right",
  vertical: false,
  itemRef: () => {
  }
});
var NoStyleItemContext = React108.createContext(null);
var FormProvider3 = (props) => {
  const providerProps = omit(props, ["prefixCls"]);
  return React108.createElement(FormProvider, Object.assign({}, providerProps));
};
var FormItemPrefixContext = React108.createContext({
  prefixCls: ""
});
var FormItemInputContext = React108.createContext({});
if (true) {
  FormItemInputContext.displayName = "FormItemInputContext";
}
var NoFormStyle = ({
  children,
  status,
  override
}) => {
  const formItemInputContext = React108.useContext(FormItemInputContext);
  const newFormItemInputContext = React108.useMemo(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return React108.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
var VariantContext = React108.createContext(void 0);

// node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = (props) => {
  const {
    space,
    form,
    children
  } = props;
  if (children === void 0 || children === null) {
    return null;
  }
  let result = children;
  if (form) {
    result = import_react53.default.createElement(NoFormStyle, {
      override: true,
      status: true
    }, result);
  }
  if (space) {
    result = import_react53.default.createElement(NoCompactStyle, null, result);
  }
  return result;
};
var ContextIsolator_default = ContextIsolator;

// node_modules/antd/es/_util/hooks/useClosable.js
var import_react54 = __toESM(require_react());

// node_modules/antd/es/_util/extendsObject.js
function mergeProps(...items) {
  const ret = {};
  items.forEach((item) => {
    if (item) {
      Object.keys(item).forEach((key) => {
        if (item[key] !== void 0) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}
var extendsObject_default = mergeProps;

// node_modules/antd/es/_util/hooks/useClosable.js
function pickClosable(context) {
  if (!context) {
    return void 0;
  }
  return {
    closable: context.closable,
    closeIcon: context.closeIcon
  };
}
function useClosableConfig(closableCollection) {
  const {
    closable,
    closeIcon
  } = closableCollection || {};
  return import_react54.default.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !closable && (closable === false || closeIcon === false || closeIcon === null)
    ) {
      return false;
    }
    if (closable === void 0 && closeIcon === void 0) {
      return null;
    }
    let closableConfig = {
      closeIcon: typeof closeIcon !== "boolean" && closeIcon !== null ? closeIcon : void 0
    };
    if (closable && typeof closable === "object") {
      closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
    }
    return closableConfig;
  }, [closable, closeIcon]);
}
var EmptyFallbackCloseCollection = {};
function useClosable(propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection) {
  const propCloseConfig = useClosableConfig(propCloseCollection);
  const contextCloseConfig = useClosableConfig(contextCloseCollection);
  const [contextLocale] = useLocale_default("global", en_US_default6.global);
  const closeBtnIsDisabled = typeof propCloseConfig !== "boolean" ? !!(propCloseConfig === null || propCloseConfig === void 0 ? void 0 : propCloseConfig.disabled) : false;
  const mergedFallbackCloseCollection = import_react54.default.useMemo(() => Object.assign({
    closeIcon: import_react54.default.createElement(CloseOutlined_default2, null)
  }, fallbackCloseCollection), [fallbackCloseCollection]);
  const mergedClosableConfig = import_react54.default.useMemo(() => {
    if (propCloseConfig === false) {
      return false;
    }
    if (propCloseConfig) {
      return extendsObject_default(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
    }
    if (contextCloseConfig === false) {
      return false;
    }
    if (contextCloseConfig) {
      return extendsObject_default(mergedFallbackCloseCollection, contextCloseConfig);
    }
    return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
  }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
  return import_react54.default.useMemo(() => {
    if (mergedClosableConfig === false) {
      return [false, null, closeBtnIsDisabled, {}];
    }
    const {
      closeIconRender
    } = mergedFallbackCloseCollection;
    const {
      closeIcon
    } = mergedClosableConfig;
    let mergedCloseIcon = closeIcon;
    const ariaOrDataProps = pickAttrs(mergedClosableConfig, true);
    if (mergedCloseIcon !== null && mergedCloseIcon !== void 0) {
      if (closeIconRender) {
        mergedCloseIcon = closeIconRender(closeIcon);
      }
      mergedCloseIcon = import_react54.default.isValidElement(mergedCloseIcon) ? import_react54.default.cloneElement(mergedCloseIcon, Object.assign({
        "aria-label": contextLocale.close
      }, ariaOrDataProps)) : import_react54.default.createElement("span", Object.assign({
        "aria-label": contextLocale.close
      }, ariaOrDataProps), mergedCloseIcon);
    }
    return [true, mergedCloseIcon, closeBtnIsDisabled, ariaOrDataProps];
  }, [mergedClosableConfig, mergedFallbackCloseCollection]);
}

// node_modules/rc-util/es/Dom/styleChecker.js
var isStyleNameSupport = function isStyleNameSupport2(styleName) {
  if (canUseDom() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function(name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport2(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement("div");
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== void 0) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}

// node_modules/antd/es/_util/styleChecker.js
var canUseDocElement = () => canUseDom() && window.document.documentElement;

// node_modules/antd/es/skeleton/Skeleton.js
var React119 = __toESM(require_react());
var import_classnames36 = __toESM(require_classnames());

// node_modules/antd/es/skeleton/Avatar.js
var React112 = __toESM(require_react());
var import_classnames29 = __toESM(require_classnames());

// node_modules/antd/es/skeleton/Element.js
var React111 = __toESM(require_react());
var import_classnames28 = __toESM(require_classnames());
var Element2 = (props) => {
  const {
    prefixCls,
    className,
    style: style2,
    size,
    shape
  } = props;
  const sizeCls = (0, import_classnames28.default)({
    [`${prefixCls}-lg`]: size === "large",
    [`${prefixCls}-sm`]: size === "small"
  });
  const shapeCls = (0, import_classnames28.default)({
    [`${prefixCls}-circle`]: shape === "circle",
    [`${prefixCls}-square`]: shape === "square",
    [`${prefixCls}-round`]: shape === "round"
  });
  const sizeStyle = React111.useMemo(() => typeof size === "number" ? {
    width: size,
    height: size,
    lineHeight: `${size}px`
  } : {}, [size]);
  return React111.createElement("span", {
    className: (0, import_classnames28.default)(prefixCls, sizeCls, shapeCls, className),
    style: Object.assign(Object.assign({}, sizeStyle), style2)
  });
};
var Element_default = Element2;

// node_modules/antd/es/skeleton/style/index.js
var skeletonClsLoading = new Keyframes_default(`ant-skeleton-loading`, {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
});
var genSkeletonElementCommonSize = (size) => ({
  height: size,
  lineHeight: unit2(size)
});
var genSkeletonElementAvatarSize = (size) => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
var genSkeletonColor = (token2) => ({
  background: token2.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: skeletonClsLoading,
  animationDuration: token2.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
});
var genSkeletonElementInputSize = (size, calc) => Object.assign({
  width: calc(size).mul(5).equal(),
  minWidth: calc(size).mul(5).equal()
}, genSkeletonElementCommonSize(size));
var genSkeletonElementAvatar = (token2) => {
  const {
    skeletonAvatarCls,
    gradientFromColor,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token2;
  return {
    [skeletonAvatarCls]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor
    }, genSkeletonElementAvatarSize(controlHeight)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: "50%"
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
  };
};
var genSkeletonElementInput = (token2) => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token2;
  return {
    [skeletonInputCls]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementInputSize(controlHeight, calc)),
    [`${skeletonInputCls}-lg`]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG, calc)),
    [`${skeletonInputCls}-sm`]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM, calc))
  };
};
var genSkeletonElementImageSize = (size) => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
var genSkeletonElementImage = (token2) => {
  const {
    skeletonImageCls,
    imageSizeBase,
    gradientFromColor,
    borderRadiusSM,
    calc
  } = token2;
  return {
    [skeletonImageCls]: Object.assign(Object.assign({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementImageSize(calc(imageSizeBase).mul(2).equal())), {
      [`${skeletonImageCls}-path`]: {
        fill: "#bfbfbf"
      },
      [`${skeletonImageCls}-svg`]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
        maxWidth: calc(imageSizeBase).mul(4).equal(),
        maxHeight: calc(imageSizeBase).mul(4).equal()
      }),
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: "50%"
    }
  };
};
var genSkeletonElementButtonShape = (token2, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token2;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: "50%"
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
var genSkeletonElementButtonSize = (size, calc) => Object.assign({
  width: calc(size).mul(2).equal(),
  minWidth: calc(size).mul(2).equal()
}, genSkeletonElementCommonSize(size));
var genSkeletonElementButton = (token2) => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token2;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [skeletonButtonCls]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: calc(controlHeight).mul(2).equal(),
      minWidth: calc(controlHeight).mul(2).equal()
    }, genSkeletonElementButtonSize(controlHeight, calc))
  }, genSkeletonElementButtonShape(token2, controlHeight, skeletonButtonCls)), {
    [`${skeletonButtonCls}-lg`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG, calc))
  }), genSkeletonElementButtonShape(token2, controlHeightLG, `${skeletonButtonCls}-lg`)), {
    [`${skeletonButtonCls}-sm`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM, calc))
  }), genSkeletonElementButtonShape(token2, controlHeightSM, `${skeletonButtonCls}-sm`));
};
var genBaseStyle2 = (token2) => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    padding,
    marginSM,
    borderRadius,
    titleHeight,
    blockRadius,
    paragraphLiHeight,
    controlHeightXS,
    paragraphMarginTop
  } = token2;
  return {
    [componentCls]: {
      display: "table",
      width: "100%",
      [`${componentCls}-header`]: {
        display: "table-cell",
        paddingInlineEnd: padding,
        verticalAlign: "top",
        // Avatar
        [skeletonAvatarCls]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: gradientFromColor
        }, genSkeletonElementAvatarSize(controlHeight)),
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: "50%"
        },
        [`${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
        [`${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
      },
      [`${componentCls}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [skeletonTitleCls]: {
          width: "100%",
          height: titleHeight,
          background: gradientFromColor,
          borderRadius: blockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [skeletonParagraphCls]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: paragraphLiHeight,
            listStyle: "none",
            background: gradientFromColor,
            borderRadius: blockRadius,
            "+ li": {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${componentCls}-content`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-content`]: {
      // Title
      [skeletonTitleCls]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: paragraphMarginTop
        }
      }
    },
    // Skeleton element
    [`${componentCls}${componentCls}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, genSkeletonElementButton(token2)), genSkeletonElementAvatar(token2)), genSkeletonElementInput(token2)), genSkeletonElementImage(token2)),
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: "100%",
      [skeletonButtonCls]: {
        width: "100%"
      },
      [skeletonInputCls]: {
        width: "100%"
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonImageCls}
      `]: Object.assign({}, genSkeletonColor(token2))
    }
  };
};
var prepareComponentToken4 = (token2) => {
  const {
    colorFillContent,
    colorFill
  } = token2;
  const gradientFromColor = colorFillContent;
  const gradientToColor = colorFill;
  return {
    color: gradientFromColor,
    colorGradientEnd: gradientToColor,
    gradientFromColor,
    gradientToColor,
    titleHeight: token2.controlHeight / 2,
    blockRadius: token2.borderRadiusSM,
    paragraphMarginTop: token2.marginLG + token2.marginXXS,
    paragraphLiHeight: token2.controlHeight / 2
  };
};
var style_default6 = genStyleHooks("Skeleton", (token2) => {
  const {
    componentCls,
    calc
  } = token2;
  const skeletonToken = merge2(token2, {
    skeletonAvatarCls: `${componentCls}-avatar`,
    skeletonTitleCls: `${componentCls}-title`,
    skeletonParagraphCls: `${componentCls}-paragraph`,
    skeletonButtonCls: `${componentCls}-button`,
    skeletonInputCls: `${componentCls}-input`,
    skeletonImageCls: `${componentCls}-image`,
    imageSizeBase: calc(token2.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${token2.gradientFromColor} 25%, ${token2.gradientToColor} 37%, ${token2.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return [genBaseStyle2(skeletonToken)];
}, prepareComponentToken4, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
});

// node_modules/antd/es/skeleton/Avatar.js
var SkeletonAvatar = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    shape = "circle",
    size = "default"
  } = props;
  const {
    getPrefixCls
  } = React112.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default6(prefixCls);
  const otherProps = omit(props, ["prefixCls", "className"]);
  const cls = (0, import_classnames29.default)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(React112.createElement("div", {
    className: cls
  }, React112.createElement(Element_default, Object.assign({
    prefixCls: `${prefixCls}-avatar`,
    shape,
    size
  }, otherProps))));
};
var Avatar_default = SkeletonAvatar;

// node_modules/antd/es/skeleton/Button.js
var React113 = __toESM(require_react());
var import_classnames30 = __toESM(require_classnames());
var SkeletonButton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block = false,
    size = "default"
  } = props;
  const {
    getPrefixCls
  } = React113.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default6(prefixCls);
  const otherProps = omit(props, ["prefixCls"]);
  const cls = (0, import_classnames30.default)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(React113.createElement("div", {
    className: cls
  }, React113.createElement(Element_default, Object.assign({
    prefixCls: `${prefixCls}-button`,
    size
  }, otherProps))));
};
var Button_default = SkeletonButton;

// node_modules/antd/es/skeleton/Image.js
var React114 = __toESM(require_react());
var import_classnames31 = __toESM(require_classnames());
var path = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";
var SkeletonImage = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style: style2,
    active
  } = props;
  const {
    getPrefixCls
  } = React114.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default6(prefixCls);
  const cls = (0, import_classnames31.default)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(React114.createElement("div", {
    className: cls
  }, React114.createElement("div", {
    className: (0, import_classnames31.default)(`${prefixCls}-image`, className),
    style: style2
  }, React114.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${prefixCls}-image-svg`
  }, React114.createElement("title", null, "Image placeholder"), React114.createElement("path", {
    d: path,
    className: `${prefixCls}-image-path`
  })))));
};
var Image_default = SkeletonImage;

// node_modules/antd/es/skeleton/Input.js
var React115 = __toESM(require_react());
var import_classnames32 = __toESM(require_classnames());
var SkeletonInput = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block,
    size = "default"
  } = props;
  const {
    getPrefixCls
  } = React115.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default6(prefixCls);
  const otherProps = omit(props, ["prefixCls"]);
  const cls = (0, import_classnames32.default)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(React115.createElement("div", {
    className: cls
  }, React115.createElement(Element_default, Object.assign({
    prefixCls: `${prefixCls}-input`,
    size
  }, otherProps))));
};
var Input_default = SkeletonInput;

// node_modules/antd/es/skeleton/Node.js
var React116 = __toESM(require_react());
var import_classnames33 = __toESM(require_classnames());
var SkeletonNode = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style: style2,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = React116.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default6(prefixCls);
  const cls = (0, import_classnames33.default)(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, hashId, className, rootClassName, cssVarCls);
  return wrapCSSVar(React116.createElement("div", {
    className: cls
  }, React116.createElement("div", {
    className: (0, import_classnames33.default)(`${prefixCls}-image`, className),
    style: style2
  }, children)));
};
var Node_default = SkeletonNode;

// node_modules/antd/es/skeleton/Paragraph.js
var React117 = __toESM(require_react());
var import_classnames34 = __toESM(require_classnames());
var getWidth = (index, props) => {
  const {
    width,
    rows = 2
  } = props;
  if (Array.isArray(width)) {
    return width[index];
  }
  if (rows - 1 === index) {
    return width;
  }
  return void 0;
};
var Paragraph = (props) => {
  const {
    prefixCls,
    className,
    style: style2,
    rows = 0
  } = props;
  const rowList = Array.from({
    length: rows
  }).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    React117.createElement("li", {
      key: index,
      style: {
        width: getWidth(index, props)
      }
    })
  ));
  return React117.createElement("ul", {
    className: (0, import_classnames34.default)(prefixCls, className),
    style: style2
  }, rowList);
};
var Paragraph_default = Paragraph;

// node_modules/antd/es/skeleton/Title.js
var React118 = __toESM(require_react());
var import_classnames35 = __toESM(require_classnames());
var Title = ({
  prefixCls,
  className,
  width,
  style: style2
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  React118.createElement("h3", {
    className: (0, import_classnames35.default)(prefixCls, className),
    style: Object.assign({
      width
    }, style2)
  })
);
var Title_default = Title;

// node_modules/antd/es/skeleton/Skeleton.js
function getComponentProps(prop) {
  if (prop && typeof prop === "object") {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return {
      size: "large",
      shape: "square"
    };
  }
  return {
    size: "large",
    shape: "circle"
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: "38%"
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: "50%"
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  if (!hasAvatar || !hasTitle) {
    basicProps.width = "61%";
  }
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    style: style2,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round: round2
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle
  } = useComponentConfig("skeleton");
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default6(prefixCls);
  if (loading || !("loading" in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = Object.assign(Object.assign({
        prefixCls: `${prefixCls}-avatar`
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      avatarNode = React119.createElement("div", {
        className: `${prefixCls}-header`
      }, React119.createElement(Element_default, Object.assign({}, avatarProps)));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      let $title;
      if (hasTitle) {
        const titleProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-title`
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = React119.createElement(Title_default, Object.assign({}, titleProps));
      }
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-paragraph`
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = React119.createElement(Paragraph_default, Object.assign({}, paragraphProps));
      }
      contentNode = React119.createElement("div", {
        className: `${prefixCls}-content`
      }, $title, paragraphNode);
    }
    const cls = (0, import_classnames36.default)(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-round`]: round2
    }, contextClassName, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(React119.createElement("div", {
      className: cls,
      style: Object.assign(Object.assign({}, contextStyle), style2)
    }, avatarNode, contentNode));
  }
  return children !== null && children !== void 0 ? children : null;
};
Skeleton.Button = Button_default;
Skeleton.Avatar = Avatar_default;
Skeleton.Input = Input_default;
Skeleton.Image = Image_default;
Skeleton.Node = Node_default;
if (true) {
  Skeleton.displayName = "Skeleton";
}
var Skeleton_default = Skeleton;

// node_modules/antd/es/skeleton/index.js
var skeleton_default = Skeleton_default;

// node_modules/antd/es/watermark/context.js
var React120 = __toESM(require_react());
function voidFunc() {
}
var WatermarkContext = React120.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = React120.useContext(WatermarkContext);
  const panelEleRef = React120.useRef(null);
  const panelRef = useEvent((ele) => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      watermark.add(innerContentEle);
      panelEleRef.current = innerContentEle;
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
var context_default2 = WatermarkContext;

// node_modules/antd/es/modal/shared.js
var import_react57 = __toESM(require_react());

// node_modules/antd/es/modal/components/NormalCancelBtn.js
var import_react55 = __toESM(require_react());
var NormalCancelBtn = () => {
  const {
    cancelButtonProps,
    cancelTextLocale,
    onCancel
  } = (0, import_react55.useContext)(ModalContext);
  return import_react55.default.createElement(button_default2, Object.assign({
    onClick: onCancel
  }, cancelButtonProps), cancelTextLocale);
};
var NormalCancelBtn_default = NormalCancelBtn;

// node_modules/antd/es/modal/components/NormalOkBtn.js
var import_react56 = __toESM(require_react());
var NormalOkBtn = () => {
  const {
    confirmLoading,
    okButtonProps,
    okType,
    okTextLocale,
    onOk
  } = (0, import_react56.useContext)(ModalContext);
  return import_react56.default.createElement(button_default2, Object.assign({}, convertLegacyProps(okType), {
    loading: confirmLoading,
    onClick: onOk
  }, okButtonProps), okTextLocale);
};
var NormalOkBtn_default = NormalOkBtn;

// node_modules/antd/es/modal/shared.js
function renderCloseIcon(prefixCls, closeIcon) {
  return import_react57.default.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || import_react57.default.createElement(CloseOutlined_default2, {
    className: `${prefixCls}-close-icon`
  }));
}
var Footer = (props) => {
  const {
    okText,
    okType = "primary",
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  const [locale5] = useLocale_default("Modal", getConfirmLocale());
  const okTextLocale = okText || (locale5 === null || locale5 === void 0 ? void 0 : locale5.okText);
  const cancelTextLocale = cancelText || (locale5 === null || locale5 === void 0 ? void 0 : locale5.cancelText);
  const btnCtxValue = {
    confirmLoading,
    okButtonProps,
    cancelButtonProps,
    okTextLocale,
    cancelTextLocale,
    okType,
    onOk,
    onCancel
  };
  const btnCtxValueMemo = import_react57.default.useMemo(() => btnCtxValue, _toConsumableArray(Object.values(btnCtxValue)));
  let footerNode;
  if (typeof footer === "function" || typeof footer === "undefined") {
    footerNode = import_react57.default.createElement(import_react57.default.Fragment, null, import_react57.default.createElement(NormalCancelBtn_default, null), import_react57.default.createElement(NormalOkBtn_default, null));
    if (typeof footer === "function") {
      footerNode = footer(footerNode, {
        OkBtn: NormalOkBtn_default,
        CancelBtn: NormalCancelBtn_default
      });
    }
    footerNode = import_react57.default.createElement(ModalContextProvider, {
      value: btnCtxValueMemo
    }, footerNode);
  } else {
    footerNode = footer;
  }
  return import_react57.default.createElement(DisabledContextProvider, {
    disabled: false
  }, footerNode);
};

// node_modules/antd/es/grid/style/index.js
var genGridRowStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    // Grid system
    [componentCls]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
};
var genGridColStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    // Grid system
    [componentCls]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
var genLoopGridColumnsStyle = (token2, sizeCls) => {
  const {
    prefixCls,
    componentCls,
    gridColumns
  } = token2;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "none"
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = [
        // https://github.com/ant-design/ant-design/issues/44456
        // Form set `display: flex` on Col which will override `display: block`.
        // Let's get it from css variable to support override.
        {
          ["--ant-display"]: "block",
          // Fallback to display if variable not support
          display: "block"
        },
        {
          display: "var(--ant-display)",
          flex: `0 0 ${i / gridColumns * 100}%`,
          maxWidth: `${i / gridColumns * 100}%`
        }
      ];
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  gridColumnsStyle[`${componentCls}${sizeCls}-flex`] = {
    flex: `var(--${prefixCls}${sizeCls}-flex)`
  };
  return gridColumnsStyle;
};
var genGridStyle = (token2, sizeCls) => genLoopGridColumnsStyle(token2, sizeCls);
var genGridMediaStyle = (token2, screenSize, sizeCls) => ({
  [`@media (min-width: ${unit2(screenSize)})`]: Object.assign({}, genGridStyle(token2, sizeCls))
});
var prepareRowComponentToken = () => ({});
var prepareColComponentToken = () => ({});
var useRowStyle = genStyleHooks("Grid", genGridRowStyle, prepareRowComponentToken);
var getMediaSize = (token2) => {
  const mediaSizesMap = {
    xs: token2.screenXSMin,
    sm: token2.screenSMMin,
    md: token2.screenMDMin,
    lg: token2.screenLGMin,
    xl: token2.screenXLMin,
    xxl: token2.screenXXLMin
  };
  return mediaSizesMap;
};
var useColStyle = genStyleHooks("Grid", (token2) => {
  const gridToken = merge2(token2, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = getMediaSize(gridToken);
  delete gridMediaSizesMap.xs;
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ""), genGridStyle(gridToken, "-xs"), Object.keys(gridMediaSizesMap).map((key) => genGridMediaStyle(gridToken, gridMediaSizesMap[key], `-${key}`)).reduce((pre, cur) => Object.assign(Object.assign({}, pre), cur), {})];
}, prepareColComponentToken);

// node_modules/antd/es/modal/style/index.js
function box(position2) {
  return {
    position: position2,
    inset: 0
  };
}
var genModalMaskStyle = (token2) => {
  const {
    componentCls,
    antCls
  } = token2;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token2.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: Object.assign(Object.assign({}, box("fixed")), {
        zIndex: token2.zIndexPopupBase,
        height: "100%",
        backgroundColor: token2.colorBgMask,
        pointerEvents: "none",
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      }),
      [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box("fixed")), {
        zIndex: token2.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token2)
  }];
};
var genModalStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token2.screenSMMax}px)`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${unit2(token2.marginXS)} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${unit2(token2.calc(token2.margin).mul(2).equal())})`,
        margin: "0 auto",
        paddingBottom: token2.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token2.titleColor,
          fontWeight: token2.fontWeightStrong,
          fontSize: token2.titleFontSize,
          lineHeight: token2.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token2.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token2.borderRadiusLG,
          boxShadow: token2.boxShadow,
          pointerEvents: "auto",
          padding: token2.contentPadding
        },
        [`${componentCls}-close`]: Object.assign({
          position: "absolute",
          top: token2.calc(token2.modalHeaderHeight).sub(token2.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: token2.calc(token2.modalHeaderHeight).sub(token2.modalCloseBtnSize).div(2).equal(),
          zIndex: token2.calc(token2.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: token2.modalCloseIconColor,
          fontWeight: token2.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token2.borderRadiusSM,
          width: token2.modalCloseBtnSize,
          height: token2.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token2.motionDurationMid}, background-color ${token2.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: token2.fontSizeLG,
            fontStyle: "normal",
            lineHeight: unit2(token2.modalCloseBtnSize),
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:disabled": {
            pointerEvents: "none"
          },
          "&:hover": {
            color: token2.modalCloseIconHoverColor,
            backgroundColor: token2.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token2.colorBgTextActive
          }
        }, genFocusStyle(token2)),
        [`${componentCls}-header`]: {
          color: token2.colorText,
          background: token2.headerBg,
          borderRadius: `${unit2(token2.borderRadiusLG)} ${unit2(token2.borderRadiusLG)} 0 0`,
          marginBottom: token2.headerMarginBottom,
          padding: token2.headerPadding,
          borderBottom: token2.headerBorderBottom
        },
        [`${componentCls}-body`]: {
          fontSize: token2.fontSize,
          lineHeight: token2.lineHeight,
          wordWrap: "break-word",
          padding: token2.bodyPadding,
          [`${componentCls}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: `${unit2(token2.margin)} auto`
          }
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token2.footerBg,
          marginTop: token2.footerMarginTop,
          padding: token2.footerPadding,
          borderTop: token2.footerBorderTop,
          borderRadius: token2.footerBorderRadius,
          [`> ${token2.antCls}-btn + ${token2.antCls}-btn`]: {
            marginInlineStart: token2.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
var genRTLStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
};
var genResponsiveWidthStyle = (token2) => {
  const {
    componentCls
  } = token2;
  const gridMediaSizesMap = getMediaSize(token2);
  delete gridMediaSizesMap.xs;
  const responsiveStyles = Object.keys(gridMediaSizesMap).map((key) => ({
    [`@media (min-width: ${unit2(gridMediaSizesMap[key])})`]: {
      width: `var(--${componentCls.replace(".", "")}-${key}-width)`
    }
  }));
  return {
    [`${componentCls}-root`]: {
      [componentCls]: [{
        width: `var(--${componentCls.replace(".", "")}-xs-width)`
      }].concat(_toConsumableArray(responsiveStyles))
    }
  };
};
var prepareToken2 = (token2) => {
  const headerPaddingVertical = token2.padding;
  const headerFontSize = token2.fontSizeHeading5;
  const headerLineHeight = token2.lineHeightHeading5;
  const modalToken = merge2(token2, {
    modalHeaderHeight: token2.calc(token2.calc(headerLineHeight).mul(headerFontSize).equal()).add(token2.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token2.colorSplit,
    modalFooterBorderStyle: token2.lineType,
    modalFooterBorderWidth: token2.lineWidth,
    modalCloseIconColor: token2.colorIcon,
    modalCloseIconHoverColor: token2.colorIconHover,
    modalCloseBtnSize: token2.controlHeight,
    modalConfirmIconSize: token2.fontHeight,
    modalTitleHeight: token2.calc(token2.titleFontSize).mul(token2.titleLineHeight).equal()
  });
  return modalToken;
};
var prepareComponentToken5 = (token2) => ({
  footerBg: "transparent",
  headerBg: token2.colorBgElevated,
  titleLineHeight: token2.lineHeightHeading5,
  titleFontSize: token2.fontSizeHeading5,
  contentBg: token2.colorBgElevated,
  titleColor: token2.colorTextHeading,
  // internal
  contentPadding: token2.wireframe ? 0 : `${unit2(token2.paddingMD)} ${unit2(token2.paddingContentHorizontalLG)}`,
  headerPadding: token2.wireframe ? `${unit2(token2.padding)} ${unit2(token2.paddingLG)}` : 0,
  headerBorderBottom: token2.wireframe ? `${unit2(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}` : "none",
  headerMarginBottom: token2.wireframe ? 0 : token2.marginXS,
  bodyPadding: token2.wireframe ? token2.paddingLG : 0,
  footerPadding: token2.wireframe ? `${unit2(token2.paddingXS)} ${unit2(token2.padding)}` : 0,
  footerBorderTop: token2.wireframe ? `${unit2(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}` : "none",
  footerBorderRadius: token2.wireframe ? `0 0 ${unit2(token2.borderRadiusLG)} ${unit2(token2.borderRadiusLG)}` : 0,
  footerMarginTop: token2.wireframe ? 0 : token2.marginSM,
  confirmBodyPadding: token2.wireframe ? `${unit2(token2.padding * 2)} ${unit2(token2.padding * 2)} ${unit2(token2.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token2.wireframe ? token2.margin : token2.marginSM,
  confirmBtnsMarginTop: token2.wireframe ? token2.marginLG : token2.marginSM
});
var style_default7 = genStyleHooks("Modal", (token2) => {
  const modalToken = prepareToken2(token2);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), initZoomMotion(modalToken, "zoom"), genResponsiveWidthStyle(modalToken)];
}, prepareComponentToken5, {
  unitless: {
    titleLineHeight: true
  }
});

// node_modules/antd/es/modal/Modal.js
var __rest9 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var mousePosition;
var getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
if (canUseDocElement()) {
  document.documentElement.addEventListener("click", getClickPosition, true);
}
var Modal = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    open,
    wrapClassName,
    centered,
    getContainer: getContainer2,
    focusTriggerAfterClose = true,
    style: style2,
    // Deprecated
    visible,
    width = 520,
    footer,
    classNames: modalClassNames,
    styles: modalStyles,
    children,
    loading,
    confirmLoading,
    zIndex: customizeZIndex,
    mousePosition: customizeMousePosition,
    onOk,
    onCancel,
    destroyOnHidden,
    destroyOnClose
  } = props, restProps = __rest9(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    modal: modalContext
  } = React124.useContext(ConfigContext);
  const handleCancel = (e) => {
    if (confirmLoading) {
      return;
    }
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };
  const handleOk = (e) => {
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };
  if (true) {
    const warning6 = devUseWarning("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"], ["destroyOnClose", "destroyOnHidden"]].forEach(([deprecatedName, newName]) => {
      warning6.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const prefixCls = getPrefixCls("modal", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default7(prefixCls, rootCls);
  const wrapClassNameExtended = (0, import_classnames37.default)(wrapClassName, {
    [`${prefixCls}-centered`]: centered !== null && centered !== void 0 ? centered : modalContext === null || modalContext === void 0 ? void 0 : modalContext.centered,
    [`${prefixCls}-wrap-rtl`]: direction === "rtl"
  });
  const dialogFooter = footer !== null && !loading ? React124.createElement(Footer, Object.assign({}, props, {
    onOk: handleOk,
    onCancel: handleCancel
  })) : null;
  const [mergedClosable, mergedCloseIcon, closeBtnIsDisabled, ariaProps] = useClosable(pickClosable(props), pickClosable(modalContext), {
    closable: true,
    closeIcon: React124.createElement(CloseOutlined_default2, {
      className: `${prefixCls}-close-icon`
    }),
    closeIconRender: (icon) => renderCloseIcon(prefixCls, icon)
  });
  const panelRef = usePanelRef(`.${prefixCls}-content`);
  const [zIndex, contextZIndex] = useZIndex("Modal", customizeZIndex);
  const [numWidth, responsiveWidth] = React124.useMemo(() => {
    if (width && typeof width === "object") {
      return [void 0, width];
    }
    return [width, void 0];
  }, [width]);
  const responsiveWidthVars = React124.useMemo(() => {
    const vars = {};
    if (responsiveWidth) {
      Object.keys(responsiveWidth).forEach((breakpoint) => {
        const breakpointWidth = responsiveWidth[breakpoint];
        if (breakpointWidth !== void 0) {
          vars[`--${prefixCls}-${breakpoint}-width`] = typeof breakpointWidth === "number" ? `${breakpointWidth}px` : breakpointWidth;
        }
      });
    }
    return vars;
  }, [responsiveWidth]);
  return wrapCSSVar(React124.createElement(ContextIsolator_default, {
    form: true,
    space: true
  }, React124.createElement(zindexContext_default.Provider, {
    value: contextZIndex
  }, React124.createElement(es_default5, Object.assign({
    width: numWidth
  }, restProps, {
    zIndex,
    getContainer: getContainer2 === void 0 ? getContextPopupContainer : getContainer2,
    prefixCls,
    rootClassName: (0, import_classnames37.default)(hashId, rootClassName, cssVarCls, rootCls),
    footer: dialogFooter,
    visible: open !== null && open !== void 0 ? open : visible,
    mousePosition: customizeMousePosition !== null && customizeMousePosition !== void 0 ? customizeMousePosition : mousePosition,
    onClose: handleCancel,
    closable: mergedClosable ? Object.assign({
      disabled: closeBtnIsDisabled,
      closeIcon: mergedCloseIcon
    }, ariaProps) : mergedClosable,
    closeIcon: mergedCloseIcon,
    focusTriggerAfterClose,
    transitionName: getTransitionName2(rootPrefixCls, "zoom", props.transitionName),
    maskTransitionName: getTransitionName2(rootPrefixCls, "fade", props.maskTransitionName),
    className: (0, import_classnames37.default)(hashId, className, modalContext === null || modalContext === void 0 ? void 0 : modalContext.className),
    style: Object.assign(Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.style), style2), responsiveWidthVars),
    classNames: Object.assign(Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.classNames), modalClassNames), {
      wrapper: (0, import_classnames37.default)(wrapClassNameExtended, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper)
    }),
    styles: Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.styles), modalStyles),
    panelRef,
    // TODO: In the future, destroyOnClose in rc-dialog needs to be upgrade to destroyOnHidden
    destroyOnClose: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyOnClose
  }), loading ? React124.createElement(skeleton_default, {
    active: true,
    title: false,
    paragraph: {
      rows: 4
    },
    className: `${prefixCls}-body-skeleton`
  }) : children))));
};
var Modal_default = Modal;

// node_modules/antd/es/modal/style/confirm.js
var genModalConfirmStyle = (token2) => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight,
    modalTitleHeight,
    fontHeight,
    confirmBodyPadding
  } = token2;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${token2.antCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: Object.assign({}, clearFix()),
      [`&${componentCls} ${componentCls}-body`]: {
        padding: confirmBodyPadding
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${token2.iconCls}`]: {
          flex: "none",
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token2.confirmIconMarginInlineEnd,
          marginTop: token2.calc(token2.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        },
        [`&-has-title > ${token2.iconCls}`]: {
          marginTop: token2.calc(token2.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: token2.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${unit2(token2.marginSM)})`
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${token2.iconCls} + ${confirmComponentCls}-paragraph`]: {
        maxWidth: `calc(100% - ${unit2(token2.calc(token2.modalConfirmIconSize).add(token2.marginSM).equal())})`
      },
      [`${confirmComponentCls}-title`]: {
        color: token2.colorTextHeading,
        fontWeight: token2.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-content`]: {
        color: token2.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token2.confirmBtnsMarginTop,
        [`${token2.antCls}-btn + ${token2.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token2.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token2.iconCls}`]: {
      color: token2.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token2.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token2.iconCls}`]: {
      color: token2.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token2.iconCls}`]: {
      color: token2.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token2.iconCls}`]: {
      color: token2.colorSuccess
    }
  };
};
var confirm_default = genSubStyleComponent(["Modal", "confirm"], (token2) => {
  const modalToken = prepareToken2(token2);
  return [genModalConfirmStyle(modalToken)];
}, prepareComponentToken5, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});

// node_modules/antd/es/modal/ConfirmDialog.js
var __rest10 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function ConfirmContent(props) {
  const {
    prefixCls,
    icon,
    okText,
    cancelText,
    confirmPrefixCls,
    type: type5,
    okCancel,
    footer,
    // Legacy for static function usage
    locale: staticLocale
  } = props, resetProps = __rest10(props, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (true) {
    const warning6 = devUseWarning("Modal");
    true ? warning6(!(typeof icon === "string" && icon.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : void 0;
  }
  let mergedIcon = icon;
  if (!icon && icon !== null) {
    switch (type5) {
      case "info":
        mergedIcon = React125.createElement(InfoCircleFilled_default2, null);
        break;
      case "success":
        mergedIcon = React125.createElement(CheckCircleFilled_default2, null);
        break;
      case "error":
        mergedIcon = React125.createElement(CloseCircleFilled_default2, null);
        break;
      default:
        mergedIcon = React125.createElement(ExclamationCircleFilled_default2, null);
    }
  }
  const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type5 === "confirm";
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || "ok";
  const [locale5] = useLocale_default("Modal");
  const mergedLocale = staticLocale || locale5;
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText);
  const cancelTextLocale = cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText);
  const btnCtxValue = Object.assign({
    autoFocusButton,
    cancelTextLocale,
    okTextLocale,
    mergedOkCancel
  }, resetProps);
  const btnCtxValueMemo = React125.useMemo(() => btnCtxValue, _toConsumableArray(Object.values(btnCtxValue)));
  const footerOriginNode = React125.createElement(React125.Fragment, null, React125.createElement(ConfirmCancelBtn_default, null), React125.createElement(ConfirmOkBtn_default, null));
  const hasTitle = props.title !== void 0 && props.title !== null;
  const bodyCls = `${confirmPrefixCls}-body`;
  return React125.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, React125.createElement("div", {
    className: (0, import_classnames38.default)(bodyCls, {
      [`${bodyCls}-has-title`]: hasTitle
    })
  }, mergedIcon, React125.createElement("div", {
    className: `${confirmPrefixCls}-paragraph`
  }, hasTitle && React125.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), React125.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content))), footer === void 0 || typeof footer === "function" ? React125.createElement(ModalContextProvider, {
    value: btnCtxValueMemo
  }, React125.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, typeof footer === "function" ? footer(footerOriginNode, {
    OkBtn: ConfirmOkBtn_default,
    CancelBtn: ConfirmCancelBtn_default
  }) : footerOriginNode)) : footer, React125.createElement(confirm_default, {
    prefixCls
  }));
}
var ConfirmDialog = (props) => {
  const {
    close,
    zIndex,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    bodyStyle,
    closable = false,
    onConfirm,
    styles
  } = props;
  if (true) {
    const warning6 = devUseWarning("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach(([deprecatedName, newName]) => {
      warning6.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style2 = props.style || {};
  const mask = props.mask === void 0 ? true : props.mask;
  const maskClosable = props.maskClosable === void 0 ? false : props.maskClosable;
  const classString = (0, import_classnames38.default)(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === "rtl"
  }, props.className);
  const [, token2] = useToken();
  const mergedZIndex = React125.useMemo(() => {
    if (zIndex !== void 0) {
      return zIndex;
    }
    return token2.zIndexPopupBase + CONTAINER_MAX_OFFSET;
  }, [zIndex, token2]);
  return React125.createElement(Modal_default, Object.assign({}, props, {
    className: classString,
    wrapClassName: (0, import_classnames38.default)({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: () => {
      close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    title: "",
    footer: null,
    transitionName: getTransitionName2(rootPrefixCls || "", "zoom", props.transitionName),
    maskTransitionName: getTransitionName2(rootPrefixCls || "", "fade", props.maskTransitionName),
    mask,
    maskClosable,
    style: style2,
    styles: Object.assign({
      body: bodyStyle,
      mask: maskStyle
    }, styles),
    width,
    zIndex: mergedZIndex,
    closable
  }), React125.createElement(ConfirmContent, Object.assign({}, props, {
    confirmPrefixCls
  })));
};
var ConfirmDialogWrapper = (props) => {
  const {
    rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  } = props;
  return React125.createElement(config_provider_default, {
    prefixCls: rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  }, React125.createElement(ConfirmDialog, Object.assign({}, props)));
};
if (true) {
  ConfirmDialog.displayName = "ConfirmDialog";
  ConfirmDialogWrapper.displayName = "ConfirmDialogWrapper";
}
var ConfirmDialog_default = ConfirmDialogWrapper;

// node_modules/antd/es/modal/destroyFns.js
var destroyFns = [];
var destroyFns_default = destroyFns;

// node_modules/antd/es/modal/confirm.js
var defaultRootPrefixCls = "";
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
var ConfirmDialogWrapper2 = (props) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    getContainer: getContainer2,
    direction
  } = props;
  const runtimeLocale2 = getConfirmLocale();
  const config = (0, import_react58.useContext)(ConfigContext);
  const rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
  const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
  let mergedGetContainer = getContainer2;
  if (mergedGetContainer === false) {
    mergedGetContainer = void 0;
    if (true) {
      true ? warning_default2(false, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.") : void 0;
    }
  }
  return import_react58.default.createElement(ConfirmDialog_default, Object.assign({}, props, {
    rootPrefixCls,
    prefixCls,
    iconPrefixCls: config.iconPrefixCls,
    theme: config.theme,
    direction: direction !== null && direction !== void 0 ? direction : config.direction,
    locale: (_b = (_a = config.locale) === null || _a === void 0 ? void 0 : _a.Modal) !== null && _b !== void 0 ? _b : runtimeLocale2,
    getContainer: mergedGetContainer
  }));
};
function confirm(config) {
  const global = globalConfig();
  if (!global.holderRender) {
    warnContext("Modal");
  }
  const container = document.createDocumentFragment();
  let currentConfig = Object.assign(Object.assign({}, config), {
    close,
    open: true
  });
  let timeoutId;
  let reactUnmount;
  function destroy(...args) {
    var _a;
    const triggerCancel = args.some((param) => param === null || param === void 0 ? void 0 : param.triggerCancel);
    if (triggerCancel) {
      var _a2;
      (_a = config.onCancel) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [config, () => {
      }].concat(_toConsumableArray(args.slice(1))));
    }
    for (let i = 0; i < destroyFns_default.length; i++) {
      const fn = destroyFns_default[i];
      if (fn === close) {
        destroyFns_default.splice(i, 1);
        break;
      }
    }
    reactUnmount();
  }
  function render2(props) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const rootPrefixCls = global.getPrefixCls(void 0, getRootPrefixCls());
      const iconPrefixCls = global.getIconPrefixCls();
      const theme = global.getTheme();
      const dom = import_react58.default.createElement(ConfirmDialogWrapper2, Object.assign({}, props));
      const reactRender2 = unstableSetRender();
      reactUnmount = reactRender2(import_react58.default.createElement(config_provider_default, {
        prefixCls: rootPrefixCls,
        iconPrefixCls,
        theme
      }, global.holderRender ? global.holderRender(dom) : dom), container);
    });
  }
  function close(...args) {
    currentConfig = Object.assign(Object.assign({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(this, args);
      }
    });
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    render2(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate);
    }
    render2(currentConfig);
  }
  render2(currentConfig);
  destroyFns_default.push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return Object.assign(Object.assign({}, props), {
    type: "warning"
  });
}
function withInfo(props) {
  return Object.assign(Object.assign({}, props), {
    type: "info"
  });
}
function withSuccess(props) {
  return Object.assign(Object.assign({}, props), {
    type: "success"
  });
}
function withError(props) {
  return Object.assign(Object.assign({}, props), {
    type: "error"
  });
}
function withConfirm(props) {
  return Object.assign(Object.assign({}, props), {
    type: "confirm"
  });
}
function modalGlobalConfig({
  rootPrefixCls
}) {
  true ? warning_default2(false, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead.") : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}

// node_modules/antd/es/modal/useModal/HookModal.js
var React127 = __toESM(require_react());
var __rest11 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var HookModal = (_a, ref) => {
  var _b;
  var {
    afterClose: hookAfterClose,
    config
  } = _a, restProps = __rest11(_a, ["afterClose", "config"]);
  const [open, setOpen] = React127.useState(true);
  const [innerConfig, setInnerConfig] = React127.useState(config);
  const {
    direction,
    getPrefixCls
  } = React127.useContext(ConfigContext);
  const prefixCls = getPrefixCls("modal");
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    var _a2;
    hookAfterClose();
    (_a2 = innerConfig.afterClose) === null || _a2 === void 0 ? void 0 : _a2.call(innerConfig);
  };
  const close = (...args) => {
    var _a2;
    setOpen(false);
    const triggerCancel = args.some((param) => param === null || param === void 0 ? void 0 : param.triggerCancel);
    if (triggerCancel) {
      var _a22;
      (_a2 = innerConfig.onCancel) === null || _a2 === void 0 ? void 0 : (_a22 = _a2).call.apply(_a22, [innerConfig, () => {
      }].concat(_toConsumableArray(args.slice(1))));
    }
  };
  React127.useImperativeHandle(ref, () => ({
    destroy: close,
    update: (newConfig) => {
      setInnerConfig((originConfig) => {
        const nextConfig = typeof newConfig === "function" ? newConfig(originConfig) : newConfig;
        return Object.assign(Object.assign({}, originConfig), nextConfig);
      });
    }
  }));
  const mergedOkCancel = (_b = innerConfig.okCancel) !== null && _b !== void 0 ? _b : innerConfig.type === "confirm";
  const [contextLocale] = useLocale_default("Modal", en_US_default6.Modal);
  return React127.createElement(ConfirmDialog_default, Object.assign({
    prefixCls,
    rootPrefixCls
  }, innerConfig, {
    close,
    open,
    afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText)
  }, restProps));
};
var HookModal_default = React127.forwardRef(HookModal);

// node_modules/antd/es/modal/useModal/index.js
var uuid4 = 0;
var ElementsHolder = React128.memo(React128.forwardRef((_props, ref) => {
  const [elements, patchElement] = usePatchElement();
  React128.useImperativeHandle(ref, () => ({
    patchElement
  }), []);
  return React128.createElement(React128.Fragment, null, elements);
}));
function useModal() {
  const holderRef = React128.useRef(null);
  const [actionQueue, setActionQueue] = React128.useState([]);
  React128.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = _toConsumableArray(actionQueue);
      cloneQueue.forEach((action) => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  const getConfirmFunc = React128.useCallback((withFunc) => function hookConfirm(config) {
    var _a;
    uuid4 += 1;
    const modalRef = React128.createRef();
    let resolvePromise;
    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });
    let silent = false;
    let closeFunc;
    const modal = React128.createElement(HookModal_default, {
      key: `modal-${uuid4}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      },
      isSilent: () => silent,
      onConfirm: (confirmed) => {
        resolvePromise(confirmed);
      }
    });
    closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
    if (closeFunc) {
      destroyFns_default.push(closeFunc);
    }
    const instance = {
      destroy: () => {
        function destroyAction() {
          var _a2;
          (_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.destroy();
        }
        if (modalRef.current) {
          destroyAction();
        } else {
          setActionQueue((prev2) => [].concat(_toConsumableArray(prev2), [destroyAction]));
        }
      },
      update: (newConfig) => {
        function updateAction() {
          var _a2;
          (_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.update(newConfig);
        }
        if (modalRef.current) {
          updateAction();
        } else {
          setActionQueue((prev2) => [].concat(_toConsumableArray(prev2), [updateAction]));
        }
      },
      then: (resolve) => {
        silent = true;
        return promise.then(resolve);
      }
    };
    return instance;
  }, []);
  const fns = React128.useMemo(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }), []);
  return [fns, React128.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
var useModal_default = useModal;

// node_modules/antd/es/notification/useNotification.js
var import_react59 = __toESM(require_react());
var import_classnames40 = __toESM(require_classnames());

// node_modules/antd/es/notification/PurePanel.js
var React129 = __toESM(require_react());
var import_classnames39 = __toESM(require_classnames());

// node_modules/antd/es/notification/style/placement.js
var genNotificationPlacementStyle = (token2) => {
  const {
    componentCls,
    notificationMarginEdge,
    animationMaxHeight
  } = token2;
  const noticeCls = `${componentCls}-notice`;
  const rightFadeIn = new Keyframes_default("antNotificationFadeIn", {
    "0%": {
      transform: `translate3d(100%, 0, 0)`,
      opacity: 0
    },
    "100%": {
      transform: `translate3d(0, 0, 0)`,
      opacity: 1
    }
  });
  const topFadeIn = new Keyframes_default("antNotificationTopFadeIn", {
    "0%": {
      top: -animationMaxHeight,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  });
  const bottomFadeIn = new Keyframes_default("antNotificationBottomFadeIn", {
    "0%": {
      bottom: token2.calc(animationMaxHeight).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  });
  const leftFadeIn = new Keyframes_default("antNotificationLeftFadeIn", {
    "0%": {
      transform: `translate3d(-100%, 0, 0)`,
      opacity: 0
    },
    "100%": {
      transform: `translate3d(0, 0, 0)`,
      opacity: 1
    }
  });
  return {
    [componentCls]: {
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        marginInline: 0,
        [noticeCls]: {
          marginInline: "auto auto"
        }
      },
      [`&${componentCls}-top`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: topFadeIn
        }
      },
      [`&${componentCls}-bottom`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: bottomFadeIn
        }
      },
      [`&${componentCls}-topRight, &${componentCls}-bottomRight`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: rightFadeIn
        }
      },
      [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
        marginRight: {
          value: 0,
          _skip_check_: true
        },
        marginLeft: {
          value: notificationMarginEdge,
          _skip_check_: true
        },
        [noticeCls]: {
          marginInlineEnd: "auto",
          marginInlineStart: 0
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: leftFadeIn
        }
      }
    }
  };
};
var placement_default = genNotificationPlacementStyle;

// node_modules/antd/es/notification/interface.js
var NotificationPlacements = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"];

// node_modules/antd/es/notification/style/stack.js
var placementAlignProperty = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
};
var genPlacementStackStyle = (token2, placement) => {
  const {
    componentCls
  } = token2;
  return {
    [`${componentCls}-${placement}`]: {
      [`&${componentCls}-stack > ${componentCls}-notice-wrapper`]: {
        [placement.startsWith("top") ? "top" : "bottom"]: 0,
        [placementAlignProperty[placement]]: {
          value: 0,
          _skip_check_: true
        }
      }
    }
  };
};
var genStackChildrenStyle = (token2) => {
  const childrenStyle = {};
  for (let i = 1; i < token2.notificationStackLayer; i++) {
    childrenStyle[`&:nth-last-child(${i + 1})`] = {
      overflow: "hidden",
      [`& > ${token2.componentCls}-notice`]: {
        opacity: 0,
        transition: `opacity ${token2.motionDurationMid}`
      }
    };
  }
  return Object.assign({
    [`&:not(:nth-last-child(-n+${token2.notificationStackLayer}))`]: {
      opacity: 0,
      overflow: "hidden",
      color: "transparent",
      pointerEvents: "none"
    }
  }, childrenStyle);
};
var genStackedNoticeStyle = (token2) => {
  const childrenStyle = {};
  for (let i = 1; i < token2.notificationStackLayer; i++) {
    childrenStyle[`&:nth-last-child(${i + 1})`] = {
      background: token2.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  }
  return Object.assign({}, childrenStyle);
};
var genStackStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return Object.assign({
    [`${componentCls}-stack`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({
        transition: `transform ${token2.motionDurationSlow}, backdrop-filter 0s`,
        willChange: "transform, opacity",
        position: "absolute"
      }, genStackChildrenStyle(token2))
    },
    [`${componentCls}-stack:not(${componentCls}-stack-expanded)`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({}, genStackedNoticeStyle(token2))
    },
    [`${componentCls}-stack${componentCls}-stack-expanded`]: {
      [`& > ${componentCls}-notice-wrapper`]: {
        "&:not(:nth-last-child(-n + 1))": {
          opacity: 1,
          overflow: "unset",
          color: "inherit",
          pointerEvents: "auto",
          [`& > ${token2.componentCls}-notice`]: {
            opacity: 1
          }
        },
        "&:after": {
          content: '""',
          position: "absolute",
          height: token2.margin,
          width: "100%",
          insetInline: 0,
          bottom: token2.calc(token2.margin).mul(-1).equal(),
          background: "transparent",
          pointerEvents: "auto"
        }
      }
    }
  }, NotificationPlacements.map((placement) => genPlacementStackStyle(token2, placement)).reduce((acc, cur) => Object.assign(Object.assign({}, acc), cur), {}));
};
var stack_default = genStackStyle;

// node_modules/antd/es/notification/style/index.js
var genNoticeStyle = (token2) => {
  const {
    iconCls,
    componentCls,
    // .ant-notification
    boxShadow,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    notificationProgressBg,
    notificationProgressHeight,
    fontSize,
    lineHeight,
    width,
    notificationIconSize,
    colorText
  } = token2;
  const noticeCls = `${componentCls}-notice`;
  return {
    position: "relative",
    marginBottom: notificationMarginBottom,
    marginInlineStart: "auto",
    background: notificationBg,
    borderRadius: borderRadiusLG,
    boxShadow,
    [noticeCls]: {
      padding: notificationPadding,
      width,
      maxWidth: `calc(100vw - ${unit2(token2.calc(notificationMarginEdge).mul(2).equal())})`,
      overflow: "hidden",
      lineHeight,
      wordWrap: "break-word"
    },
    [`${noticeCls}-message`]: {
      marginBottom: token2.marginXS,
      color: colorTextHeading,
      fontSize: fontSizeLG,
      lineHeight: token2.lineHeightLG
    },
    [`${noticeCls}-description`]: {
      fontSize,
      color: colorText
    },
    [`${noticeCls}-closable ${noticeCls}-message`]: {
      paddingInlineEnd: token2.paddingLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-message`]: {
      marginBottom: token2.marginXS,
      marginInlineStart: token2.calc(token2.marginSM).add(notificationIconSize).equal(),
      fontSize: fontSizeLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-description`]: {
      marginInlineStart: token2.calc(token2.marginSM).add(notificationIconSize).equal(),
      fontSize
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${noticeCls}-icon`]: {
      position: "absolute",
      fontSize: notificationIconSize,
      lineHeight: 1,
      // icon-font
      [`&-success${iconCls}`]: {
        color: colorSuccess
      },
      [`&-info${iconCls}`]: {
        color: colorInfo
      },
      [`&-warning${iconCls}`]: {
        color: colorWarning
      },
      [`&-error${iconCls}`]: {
        color: colorError
      }
    },
    [`${noticeCls}-close`]: Object.assign({
      position: "absolute",
      top: token2.notificationPaddingVertical,
      insetInlineEnd: token2.notificationPaddingHorizontal,
      color: token2.colorIcon,
      outline: "none",
      width: token2.notificationCloseButtonSize,
      height: token2.notificationCloseButtonSize,
      borderRadius: token2.borderRadiusSM,
      transition: `background-color ${token2.motionDurationMid}, color ${token2.motionDurationMid}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      "&:hover": {
        color: token2.colorIconHover,
        backgroundColor: token2.colorBgTextHover
      },
      "&:active": {
        backgroundColor: token2.colorBgTextActive
      }
    }, genFocusStyle(token2)),
    [`${noticeCls}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      inlineSize: `calc(100% - ${unit2(borderRadiusLG)} * 2)`,
      left: {
        _skip_check_: true,
        value: borderRadiusLG
      },
      right: {
        _skip_check_: true,
        value: borderRadiusLG
      },
      bottom: 0,
      blockSize: notificationProgressHeight,
      border: 0,
      "&, &::-webkit-progress-bar": {
        borderRadius: borderRadiusLG,
        backgroundColor: `rgba(0, 0, 0, 0.04)`
      },
      "&::-moz-progress-bar": {
        background: notificationProgressBg
      },
      "&::-webkit-progress-value": {
        borderRadius: borderRadiusLG,
        background: notificationProgressBg
      }
    },
    [`${noticeCls}-actions`]: {
      float: "right",
      marginTop: token2.marginSM
    }
  };
};
var genNotificationStyle = (token2) => {
  const {
    componentCls,
    // .ant-notification
    notificationMarginBottom,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut
  } = token2;
  const noticeCls = `${componentCls}-notice`;
  const fadeOut2 = new Keyframes_default("antNotificationFadeOut", {
    "0%": {
      maxHeight: token2.animationMaxHeight,
      marginBottom: notificationMarginBottom
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        position: "fixed",
        zIndex: token2.zIndexPopup,
        marginRight: {
          value: notificationMarginEdge,
          _skip_check_: true
        },
        [`${componentCls}-hook-holder`]: {
          position: "relative"
        },
        //  animation
        [`${componentCls}-fade-appear-prepare`]: {
          opacity: "0 !important"
        },
        [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
          animationDuration: token2.motionDurationMid,
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-leave`]: {
          animationTimingFunction: motionEaseInOut,
          animationFillMode: "both",
          animationDuration: motionDurationMid,
          animationPlayState: "paused"
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationPlayState: "running"
        },
        [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
          animationName: fadeOut2,
          animationPlayState: "running"
        },
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${noticeCls}-actions`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [componentCls]: {
        [`${noticeCls}-wrapper`]: Object.assign({}, genNoticeStyle(token2))
      }
    }
  ];
};
var prepareComponentToken6 = (token2) => ({
  zIndexPopup: token2.zIndexPopupBase + CONTAINER_MAX_OFFSET + 50,
  width: 384
});
var prepareNotificationToken = (token2) => {
  const notificationPaddingVertical = token2.paddingMD;
  const notificationPaddingHorizontal = token2.paddingLG;
  const notificationToken = merge2(token2, {
    notificationBg: token2.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    notificationIconSize: token2.calc(token2.fontSizeLG).mul(token2.lineHeightLG).equal(),
    notificationCloseButtonSize: token2.calc(token2.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: token2.margin,
    notificationPadding: `${unit2(token2.paddingMD)} ${unit2(token2.paddingContentHorizontalLG)}`,
    notificationMarginEdge: token2.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${token2.colorPrimaryBorderHover}, ${token2.colorPrimary})`
  });
  return notificationToken;
};
var style_default8 = genStyleHooks("Notification", (token2) => {
  const notificationToken = prepareNotificationToken(token2);
  return [genNotificationStyle(notificationToken), placement_default(notificationToken), stack_default(notificationToken)];
}, prepareComponentToken6);

// node_modules/antd/es/notification/style/pure-panel.js
var pure_panel_default = genSubStyleComponent(["Notification", "PurePanel"], (token2) => {
  const noticeCls = `${token2.componentCls}-notice`;
  const notificationToken = prepareNotificationToken(token2);
  return {
    [`${noticeCls}-pure-panel`]: Object.assign(Object.assign({}, genNoticeStyle(notificationToken)), {
      width: notificationToken.width,
      maxWidth: `calc(100vw - ${unit2(token2.calc(notificationToken.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, prepareComponentToken6);

// node_modules/antd/es/notification/PurePanel.js
var __rest12 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var TypeIcon2 = {
  info: React129.createElement(InfoCircleFilled_default2, null),
  success: React129.createElement(CheckCircleFilled_default2, null),
  error: React129.createElement(CloseCircleFilled_default2, null),
  warning: React129.createElement(ExclamationCircleFilled_default2, null),
  loading: React129.createElement(LoadingOutlined_default2, null)
};
function getCloseIcon(prefixCls, closeIcon) {
  if (closeIcon === null || closeIcon === false) {
    return null;
  }
  return closeIcon || React129.createElement(CloseOutlined_default2, {
    className: `${prefixCls}-close-icon`
  });
}
var typeToIcon = {
  success: CheckCircleFilled_default2,
  info: InfoCircleFilled_default2,
  error: CloseCircleFilled_default2,
  warning: ExclamationCircleFilled_default2
};
var PureContent2 = (props) => {
  const {
    prefixCls,
    icon,
    type: type5,
    message,
    description,
    actions,
    role = "alert"
  } = props;
  let iconNode = null;
  if (icon) {
    iconNode = React129.createElement("span", {
      className: `${prefixCls}-icon`
    }, icon);
  } else if (type5) {
    iconNode = React129.createElement(typeToIcon[type5] || null, {
      className: (0, import_classnames39.default)(`${prefixCls}-icon`, `${prefixCls}-icon-${type5}`)
    });
  }
  return React129.createElement("div", {
    className: (0, import_classnames39.default)({
      [`${prefixCls}-with-icon`]: iconNode
    }),
    role
  }, iconNode, React129.createElement("div", {
    className: `${prefixCls}-message`
  }, message), React129.createElement("div", {
    className: `${prefixCls}-description`
  }, description), actions && React129.createElement("div", {
    className: `${prefixCls}-actions`
  }, actions));
};
var PurePanel2 = (props) => {
  const {
    prefixCls: staticPrefixCls,
    className,
    icon,
    type: type5,
    message,
    description,
    btn,
    actions,
    closable = true,
    closeIcon,
    className: notificationClassName
  } = props, restProps = __rest12(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "actions", "closable", "closeIcon", "className"]);
  const {
    getPrefixCls
  } = React129.useContext(ConfigContext);
  const mergedActions = actions !== null && actions !== void 0 ? actions : btn;
  if (true) {
    const warning6 = devUseWarning("Notification");
    warning6.deprecated(!btn, "btn", "actions");
  }
  const prefixCls = staticPrefixCls || getPrefixCls("notification");
  const noticePrefixCls = `${prefixCls}-notice`;
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default8(prefixCls, rootCls);
  return wrapCSSVar(React129.createElement("div", {
    className: (0, import_classnames39.default)(`${noticePrefixCls}-pure-panel`, hashId, className, cssVarCls, rootCls)
  }, React129.createElement(pure_panel_default, {
    prefixCls
  }), React129.createElement(Notice_default, Object.assign({}, restProps, {
    prefixCls,
    eventKey: "pure",
    duration: null,
    closable,
    className: (0, import_classnames39.default)({
      notificationClassName
    }),
    closeIcon: getCloseIcon(prefixCls, closeIcon),
    content: React129.createElement(PureContent2, {
      prefixCls: noticePrefixCls,
      icon,
      type: type5,
      message,
      description,
      actions: mergedActions
    })
  }))));
};
var PurePanel_default2 = PurePanel2;

// node_modules/antd/es/notification/util.js
function getPlacementStyle(placement, top, bottom) {
  let style2;
  switch (placement) {
    case "top":
      style2 = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top,
        bottom: "auto"
      };
      break;
    case "topLeft":
      style2 = {
        left: 0,
        top,
        bottom: "auto"
      };
      break;
    case "topRight":
      style2 = {
        right: 0,
        top,
        bottom: "auto"
      };
      break;
    case "bottom":
      style2 = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom
      };
      break;
    case "bottomLeft":
      style2 = {
        left: 0,
        top: "auto",
        bottom
      };
      break;
    default:
      style2 = {
        right: 0,
        top: "auto",
        bottom
      };
      break;
  }
  return style2;
}
function getMotion2(prefixCls) {
  return {
    motionName: `${prefixCls}-fade`
  };
}
function getCloseIconConfig(closeIcon, notificationConfig, notification) {
  if (typeof closeIcon !== "undefined") {
    return closeIcon;
  }
  if (typeof (notificationConfig === null || notificationConfig === void 0 ? void 0 : notificationConfig.closeIcon) !== "undefined") {
    return notificationConfig.closeIcon;
  }
  return notification === null || notification === void 0 ? void 0 : notification.closeIcon;
}

// node_modules/antd/es/notification/useNotification.js
var __rest13 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var DEFAULT_OFFSET3 = 24;
var DEFAULT_DURATION2 = 4.5;
var DEFAULT_PLACEMENT = "topRight";
var Wrapper2 = ({
  children,
  prefixCls
}) => {
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default8(prefixCls, rootCls);
  return wrapCSSVar(import_react59.default.createElement(NotificationProvider_default, {
    classNames: {
      list: (0, import_classnames40.default)(hashId, cssVarCls, rootCls)
    }
  }, children));
};
var renderNotifications2 = (node2, {
  prefixCls,
  key
}) => import_react59.default.createElement(Wrapper2, {
  prefixCls,
  key
}, node2);
var Holder2 = import_react59.default.forwardRef((props, ref) => {
  const {
    top,
    bottom,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    rtl,
    onAllRemoved,
    stack,
    duration,
    pauseOnHover = true,
    showProgress
  } = props;
  const {
    getPrefixCls,
    getPopupContainer,
    notification,
    direction
  } = (0, import_react59.useContext)(ConfigContext);
  const [, token2] = useToken();
  const prefixCls = staticPrefixCls || getPrefixCls("notification");
  const getStyle2 = (placement) => getPlacementStyle(placement, top !== null && top !== void 0 ? top : DEFAULT_OFFSET3, bottom !== null && bottom !== void 0 ? bottom : DEFAULT_OFFSET3);
  const getClassName = () => (0, import_classnames40.default)({
    [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === "rtl"
  });
  const getNotificationMotion = () => getMotion2(prefixCls);
  const [api, holder] = useNotification({
    prefixCls,
    style: getStyle2,
    className: getClassName,
    motion: getNotificationMotion,
    closable: true,
    closeIcon: getCloseIcon(prefixCls),
    duration: duration !== null && duration !== void 0 ? duration : DEFAULT_DURATION2,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    pauseOnHover,
    showProgress,
    onAllRemoved,
    renderNotifications: renderNotifications2,
    stack: stack === false ? false : {
      threshold: typeof stack === "object" ? stack === null || stack === void 0 ? void 0 : stack.threshold : void 0,
      offset: 8,
      gap: token2.margin
    }
  });
  import_react59.default.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    notification
  }));
  return holder;
});
function useInternalNotification(notificationConfig) {
  const holderRef = import_react59.default.useRef(null);
  const warning6 = devUseWarning("Notification");
  const wrapAPI = import_react59.default.useMemo(() => {
    const open = (config) => {
      var _a;
      if (!holderRef.current) {
        true ? warning6(false, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.") : void 0;
        return;
      }
      const {
        open: originOpen,
        prefixCls,
        notification
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
        message,
        description,
        icon,
        type: type5,
        btn,
        actions,
        className,
        style: style2,
        role = "alert",
        closeIcon,
        closable
      } = config, restConfig = __rest13(config, ["message", "description", "icon", "type", "btn", "actions", "className", "style", "role", "closeIcon", "closable"]);
      if (true) {
        warning6.deprecated(!btn, "btn", "actions");
      }
      const mergedActions = actions !== null && actions !== void 0 ? actions : btn;
      const realCloseIcon = getCloseIcon(noticePrefixCls, getCloseIconConfig(closeIcon, notificationConfig, notification));
      return originOpen(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (_a = notificationConfig === null || notificationConfig === void 0 ? void 0 : notificationConfig.placement) !== null && _a !== void 0 ? _a : DEFAULT_PLACEMENT
      }, restConfig), {
        content: import_react59.default.createElement(PureContent2, {
          prefixCls: noticePrefixCls,
          icon,
          type: type5,
          message,
          description,
          actions: mergedActions,
          role
        }),
        className: (0, import_classnames40.default)(type5 && `${noticePrefixCls}-${type5}`, className, notification === null || notification === void 0 ? void 0 : notification.className),
        style: Object.assign(Object.assign({}, notification === null || notification === void 0 ? void 0 : notification.style), style2),
        closeIcon: realCloseIcon,
        closable: closable !== null && closable !== void 0 ? closable : !!realCloseIcon
      }));
    };
    const destroy = (key) => {
      var _a, _b;
      if (key !== void 0) {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
      } else {
        (_b = holderRef.current) === null || _b === void 0 ? void 0 : _b.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys2 = ["success", "info", "warning", "error"];
    keys2.forEach((type5) => {
      clone[type5] = (config) => open(Object.assign(Object.assign({}, config), {
        type: type5
      }));
    });
    return clone;
  }, []);
  return [wrapAPI, import_react59.default.createElement(Holder2, Object.assign({
    key: "notification-holder"
  }, notificationConfig, {
    ref: holderRef
  }))];
}
function useNotification2(notificationConfig) {
  return useInternalNotification(notificationConfig);
}

// node_modules/antd/es/app/context.js
var import_react60 = __toESM(require_react());
var AppConfigContext = import_react60.default.createContext({});
var AppContext = import_react60.default.createContext({
  message: {},
  notification: {},
  modal: {}
});
var context_default3 = AppContext;

// node_modules/antd/es/app/style/index.js
var genBaseStyle3 = (token2) => {
  const {
    componentCls,
    colorText,
    fontSize,
    lineHeight,
    fontFamily
  } = token2;
  return {
    [componentCls]: {
      color: colorText,
      fontSize,
      lineHeight,
      fontFamily,
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      }
    }
  };
};
var prepareComponentToken7 = () => ({});
var style_default9 = genStyleHooks("App", genBaseStyle3, prepareComponentToken7);

// node_modules/antd/es/app/App.js
var App = (props) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    className,
    rootClassName,
    message,
    notification,
    style: style2,
    component = "div"
  } = props;
  const {
    direction,
    getPrefixCls
  } = (0, import_react61.useContext)(ConfigContext);
  const prefixCls = getPrefixCls("app", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default9(prefixCls);
  const customClassName = (0, import_classnames41.default)(hashId, prefixCls, className, rootClassName, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  });
  const appConfig = (0, import_react61.useContext)(AppConfigContext);
  const mergedAppConfig = import_react61.default.useMemo(() => ({
    message: Object.assign(Object.assign({}, appConfig.message), message),
    notification: Object.assign(Object.assign({}, appConfig.notification), notification)
  }), [message, notification, appConfig.message, appConfig.notification]);
  const [messageApi, messageContextHolder] = useMessage(mergedAppConfig.message);
  const [notificationApi, notificationContextHolder] = useNotification2(mergedAppConfig.notification);
  const [ModalApi, ModalContextHolder] = useModal_default();
  const memoizedContextValue = import_react61.default.useMemo(() => ({
    message: messageApi,
    notification: notificationApi,
    modal: ModalApi
  }), [messageApi, notificationApi, ModalApi]);
  devUseWarning("App")(!(cssVarCls && component === false), "usage", "When using cssVar, ensure `component` is assigned a valid React component string.");
  const Component4 = component === false ? import_react61.default.Fragment : component;
  const rootProps = {
    className: customClassName,
    style: style2
  };
  return wrapCSSVar(import_react61.default.createElement(context_default3.Provider, {
    value: memoizedContextValue
  }, import_react61.default.createElement(AppConfigContext.Provider, {
    value: mergedAppConfig
  }, import_react61.default.createElement(Component4, Object.assign({}, component === false ? void 0 : rootProps), ModalContextHolder, messageContextHolder, notificationContextHolder, children))));
};
if (true) {
  App.displayName = "App";
}
var App_default = App;

export {
  require_classnames,
  warning,
  noteOnce,
  warning_default,
  devUseWarning,
  warning_default2,
  _unsupportedIterableToArray,
  _slicedToArray,
  _typeof,
  _defineProperty,
  _toConsumableArray,
  _objectSpread2,
  canUseDom,
  _objectWithoutProperties,
  useMemo,
  isEqual_default,
  _classCallCheck,
  _createClass,
  _assertThisInitialized,
  _inherits,
  _getPrototypeOf,
  _isNativeReflectConstruct,
  _possibleConstructorReturn,
  _createSuper,
  createTheme,
  unit2 as unit,
  useLayoutUpdateEffect,
  useLayoutEffect_default,
  getComputedToken,
  Keyframes_default,
  Context_default,
  _toArray,
  get,
  set,
  validateMessagesContext_default,
  en_US_default,
  en_US_default4 as en_US_default2,
  en_US_default5 as en_US_default3,
  en_US_default6 as en_US_default4,
  useLocale_default,
  defaultPresetColors,
  seed_default,
  FastColor,
  generate,
  presetPrimaryColors,
  gold,
  blue,
  genColorMapToken,
  genControlHeight_default,
  genFontMapToken_default,
  derivative,
  theme_default,
  defaultConfig,
  DesignTokenContext,
  Variants,
  ConfigContext,
  useComponentConfig,
  DisabledContextProvider,
  DisabledContext_default,
  SizeContext_default,
  useEvent,
  useSafeState,
  useMergedState,
  fillRef,
  composeRef,
  useComposeRef,
  supportRef,
  supportNodeRef,
  getNodeRef,
  merge2 as merge,
  PresetColors,
  version_default2 as version_default,
  formatToken,
  useToken,
  textEllipsis,
  resetComponent,
  resetIcon,
  clearFix,
  genFocusOutline,
  genFocusStyle,
  operationUnit,
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent,
  genPresetColor,
  isDOM,
  getDOM,
  findDOMNode,
  raf_default,
  CSSMotionList_default,
  es_default,
  warnContext,
  globalConfig,
  config_provider_default,
  getShadowRoot,
  warning3 as warning2,
  svgBaseProps,
  useInsertStyles,
  AntdIcon_default,
  CloseOutlined_default2 as CloseOutlined_default,
  KeyCode_default,
  pickAttrs,
  useCSSVarCls_default,
  CheckCircleFilled_default2 as CheckCircleFilled_default,
  CloseCircleFilled_default2 as CloseCircleFilled_default,
  ExclamationCircleFilled_default2 as ExclamationCircleFilled_default,
  InfoCircleFilled_default2 as InfoCircleFilled_default,
  LoadingOutlined_default2 as LoadingOutlined_default,
  zindexContext_default,
  useZIndex,
  PurePanel_default,
  wrapPromiseFn,
  useInternalMessage,
  useMessage,
  _regeneratorRuntime,
  _asyncToGenerator,
  unstableSetRender,
  getTransitionName2 as getTransitionName,
  motion_default,
  omit,
  isVisible_default,
  isFragment2 as isFragment,
  replaceElement,
  cloneElement2 as cloneElement,
  TARGET_CLS,
  wave_default,
  useSize_default,
  toArray,
  style_default3 as style_default,
  useCompactItemContext,
  Compact_default,
  convertLegacyProps,
  ColorBlock_default,
  es_default2,
  toHexFormat,
  AggregationColor,
  RightOutlined_default2 as RightOutlined_default,
  collapse_default,
  initMotion,
  initFadeMotion,
  initMoveMotion,
  slideUpIn,
  slideUpOut,
  slideDownIn,
  slideDownOut,
  initSlideMotion,
  zoomIn,
  initZoomMotion,
  collapse_default2,
  generateColor3 as generateColor,
  getRoundNumber3 as getRoundNumber,
  getColorAlpha,
  genAlphaColor,
  getGradientPercentColor,
  ColorPresets_default,
  genCompactItemStyle,
  button_default2 as button_default,
  ActionButton_default,
  getScrollBarSize,
  getTargetScrollBarSize,
  es_default4 as es_default3,
  useId_default,
  Panel_default2 as Panel_default,
  es_default5 as es_default4,
  FieldContext_default,
  ListContext_default,
  Field_default,
  List_default,
  useForm_default,
  useWatch_default,
  es_default7 as es_default5,
  FormContext2 as FormContext,
  NoStyleItemContext,
  FormProvider3 as FormProvider,
  FormItemPrefixContext,
  FormItemInputContext,
  VariantContext,
  ContextIsolator_default,
  extendsObject_default,
  pickClosable,
  useClosable,
  isStyleSupport,
  skeleton_default,
  usePanelRef,
  context_default2 as context_default,
  renderCloseIcon,
  Footer,
  useRowStyle,
  useColStyle,
  genModalMaskStyle,
  style_default7 as style_default2,
  Modal_default,
  ConfirmContent,
  destroyFns_default,
  confirm,
  withWarn,
  withInfo,
  withSuccess,
  withError,
  withConfirm,
  modalGlobalConfig,
  useModal_default,
  PurePanel_default2,
  useInternalNotification,
  useNotification2 as useNotification,
  AppConfigContext,
  context_default3 as context_default2,
  App_default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@babel/runtime/helpers/esm/regenerator.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
//# sourceMappingURL=chunk-L4MX4JQH.js.map
