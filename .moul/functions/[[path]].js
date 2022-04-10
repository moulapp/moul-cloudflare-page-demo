var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module, temp) => {
    return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    init_react();
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from2;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from2 = Object(arguments[s]);
        for (var key in from2) {
          if (hasOwnProperty2.call(from2, key)) {
            to[key] = from2[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from2);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from2, symbols[i])) {
              to[symbols[i]] = from2[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var ReactVersion = "17.0.2";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        exports.Suspense = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          exports.Fragment = symbolFor("react.fragment");
          exports.StrictMode = symbolFor("react.strict_mode");
          exports.Profiler = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          exports.Suspense = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: 0
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          assign: _assign
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }
        function warn(format2) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format2, args);
          }
        }
        function error(format2) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format2, args);
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case exports.Profiler:
              return "Profiler";
            case exports.StrictMode:
              return "StrictMode";
            case exports.Suspense:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return getComponentName(init2(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty2.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty2.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && config2.__self && ReactCurrentOwner.current.stateNode !== config2.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement14(type, config2, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config2);
              }
            }
            if (hasValidKey(config2)) {
              key = "" + config2.key;
            }
            self2 = config2.__self === void 0 ? null : config2.__self;
            source = config2.__source === void 0 ? null : config2.__source;
            for (propName in config2) {
              if (hasOwnProperty2.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement2(element, config2, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config2 != null) {
            if (hasValidRef(config2)) {
              ref = config2.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config2)) {
              key = "" + config2.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config2) {
              if (hasOwnProperty2.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config2[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config2[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement4(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index2) {
          if (typeof element === "object" && element !== null && element.key != null) {
            return escape("" + element.key);
          }
          return index2.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c2) {
                return c2;
              });
            } else if (mappedChild != null) {
              if (isValidElement4(mappedChild)) {
                mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                }
              }
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement4(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext10(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
              if (payload._status === Pending) {
                var defaultExport = moduleObject.default;
                {
                  if (defaultExport === void 0) {
                    error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                  }
                }
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = defaultExport;
              }
            }, function(error2) {
              if (payload._status === Pending) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
          }
          if (payload._status === Resolved) {
            return payload._result;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: -1,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef5(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name2) {
                ownName = name2;
                if (render.displayName == null) {
                  render.displayName = name2;
                }
              }
            });
          }
          return elementType;
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare3) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare3 === void 0 ? null : compare3
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name2) {
                ownName = name2;
                if (type.displayName == null) {
                  type.displayName = name2;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext18(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState9(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init2) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init2);
        }
        function useRef14(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect17(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect7(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback9(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo10(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name2, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name2;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame2 = componentFrameCache.get(fn);
            if (frame2 !== void 0) {
              return frame2;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s >= 1 && c2 >= 0 && sampleLines[s] !== controlLines[c2]) {
                c2--;
              }
              for (; s >= 1 && c2 >= 0; s--, c2--) {
                if (sampleLines[s] !== controlLines[c2]) {
                  if (s !== 1 || c2 !== 1) {
                    do {
                      s--;
                      c2--;
                      if (c2 < 0 || sampleLines[s] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name2 = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name2 ? describeBuiltInComponentFrame(name2) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name2 = getComponentName(ReactCurrentOwner.current.type);
            if (name2) {
              return "\n\nCheck the render method of `" + name2 + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement4(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement4(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement4(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name2 = getComponentName(type);
              checkPropTypes(propTypes, element.props, "prop", name2, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys2 = Object.keys(fragment.props);
            for (var i = 0; i < keys2.length; i++) {
              var key = keys2[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement14.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement2.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            /* @__PURE__ */ new Map([[frozenObject, null]]);
            /* @__PURE__ */ new Set([frozenObject]);
          } catch (e) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children4 = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children4;
        exports.Component = Component;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext10;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef5;
        exports.isValidElement = isValidElement4;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback9;
        exports.useContext = useContext18;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect17;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect7;
        exports.useMemo = useMemo10;
        exports.useReducer = useReducer;
        exports.useRef = useRef14;
        exports.useState = useState9;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require_react());
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_react();
    exports.parse = parse3;
    exports.serialize = serialize2;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(";");
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index2 = pair.indexOf("=");
        if (index2 < 0) {
          continue;
        }
        var key = pair.substring(0, index2).trim();
        if (obj[key] == void 0) {
          var val = pair.substring(index2 + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize2(name2, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name2)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name2 + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/cookies.js
async function encodeCookieValue(sign, value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index2 = 0;
  let chr, code;
  while (index2 < str.length) {
    chr = str.charAt(index2++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length)
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index2 = 0;
  let chr, part;
  while (index2 < str.length) {
    chr = str.charAt(index2++);
    if (chr === "%") {
      if (str.charAt(index2) === "u") {
        part = str.slice(index2 + 1, index2 + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index2 += 5;
          continue;
        }
      } else {
        part = str.slice(index2, index2 + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index2 += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
var import_cookie, createCookieFactory, isCookie;
var init_cookies = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/cookies.js"() {
    init_react();
    import_cookie = __toESM(require_cookie());
    createCookieFactory = ({
      sign,
      unsign
    }) => (name2, cookieOptions = {}) => {
      let _a = __spreadValues({
        secrets: [],
        path: "/"
      }, cookieOptions), {
        secrets
      } = _a, options = __objRest(_a, [
        "secrets"
      ]);
      return {
        get name() {
          return name2;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, __spreadValues(__spreadValues({}, options), parseOptions));
          return name2 in cookies ? cookies[name2] === "" ? "" : await decodeCookieValue(unsign, cookies[name2], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(name2, value === "" ? "" : await encodeCookieValue(sign, value, secrets), __spreadValues(__spreadValues({}, options), serializeOptions));
        }
      };
    };
    isCookie = (object) => {
      return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
    };
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/responses.js
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(response) {
  return redirectStatusCodes.has(response.status);
}
function isCatchResponse(response) {
  return response.headers.get("X-Remix-Catch") != null;
}
var json, redirect, redirectStatusCodes;
var init_responses = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/responses.js"() {
    init_react();
    json = (data, init2 = {}) => {
      let responseInit = init2;
      if (typeof init2 === "number") {
        responseInit = {
          status: init2
        };
      }
      let headers4 = new Headers(responseInit.headers);
      if (!headers4.has("Content-Type")) {
        headers4.set("Content-Type", "application/json; charset=utf-8");
      }
      return new Response(JSON.stringify(data), __spreadProps(__spreadValues({}, responseInit), {
        headers: headers4
      }));
    };
    redirect = (url, init2 = 302) => {
      let responseInit = init2;
      if (typeof responseInit === "number") {
        responseInit = {
          status: responseInit
        };
      } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
      }
      let headers4 = new Headers(responseInit.headers);
      headers4.set("Location", url);
      return new Response(null, __spreadProps(__spreadValues({}, responseInit), {
        headers: headers4
      }));
    };
    redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/data.js
async function callRouteAction({
  loadContext,
  match,
  request
}) {
  let action = match.route.module.action;
  if (!action) {
    let response = new Response(null, {
      status: 405
    });
    response.headers.set("X-Remix-Catch", "yes");
    return response;
  }
  let result;
  try {
    result = await action({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined an action for route "${match.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
async function callRouteLoader({
  loadContext,
  match,
  request
}) {
  let loader4 = match.route.module.loader;
  if (!loader4) {
    throw new Error(`You made a ${request.method} request to ${request.url} but did not provide a \`loader\` for route "${match.route.id}", so there is no way to handle the request.`);
  }
  let result;
  try {
    result = await loader4({
      request: stripDataParam(stripIndexParam(request.clone())),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined a loader for route "${match.route.id}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return new Request(url.href, request);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_data");
  return new Request(url.href, request);
}
function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
var init_data = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/data.js"() {
    init_react();
    init_responses();
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/entry.js
function createEntryMatches(matches, routes2) {
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: routes2[match.route.id]
  }));
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => {
    memo[routeId] = manifest[routeId].module;
    return memo;
  }, {});
}
var init_entry = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/entry.js"() {
    init_react();
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/errors.js
async function serializeError(error) {
  return {
    message: error.message,
    stack: error.stack
  };
}
var init_errors = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/errors.js"() {
    init_react();
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    init_react();
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValue = parts.shift().split("=");
      var name2 = nameValue.shift();
      var value = nameValue.join("=");
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
      }
      var cookie = {
        name: name2,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/headers.js
function getDocumentHeaders(build, matches, routeLoaderResponses, actionResponse) {
  return matches.reduce((parentHeaders, match, index2) => {
    let routeModule = build.routes[match.route.id].module;
    let routeLoaderResponse = routeLoaderResponses[match.route.id];
    let loaderHeaders = routeLoaderResponse ? routeLoaderResponse.headers : new Headers();
    let actionHeaders = actionResponse ? actionResponse.headers : new Headers();
    let headers4 = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders
    }) : routeModule.headers : void 0);
    prependCookies(actionHeaders, headers4);
    prependCookies(loaderHeaders, headers4);
    prependCookies(parentHeaders, headers4);
    return headers4;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}
var import_set_cookie_parser;
var init_headers = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/headers.js"() {
    init_react();
    import_set_cookie_parser = __toESM(require_set_cookie());
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode;
var init_mode = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/mode.js"() {
    init_react();
    (function(ServerMode2) {
      ServerMode2["Development"] = "development";
      ServerMode2["Production"] = "production";
      ServerMode2["Test"] = "test";
    })(ServerMode || (ServerMode = {}));
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
var init_extends = __esm({
  "node_modules/@babel/runtime/helpers/esm/extends.js"() {
    init_react();
  }
});

// node_modules/history/index.js
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var Action;
var init_history = __esm({
  "node_modules/history/index.js"() {
    init_react();
    init_extends();
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action || (Action = {}));
  }
});

// node_modules/@remix-run/cloudflare/node_modules/react-router/index.js
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes2.forEach((route, index2) => {
    let meta5 = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta5.relativePath.startsWith("/")) {
      !meta5.relativePath.startsWith(parentPath) ? true ? invariant(false, 'Absolute route path "' + meta5.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : invariant(false) : void 0;
      meta5.relativePath = meta5.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta5.relativePath]);
    let routesMeta = parentsMeta.concat(meta5);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? true ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta5) => meta5.childrenIndex), b2.routesMeta.map((meta5) => meta5.childrenIndex)));
}
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n, i) => n === b2[i]);
  return siblings ? a2[a2.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta5 = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta5.relativePath,
      caseSensitive: meta5.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta5.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  true ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')) : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    true ? warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")) : void 0;
    return value;
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from2;
  if (toPathname == null) {
    from2 = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from2);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
function useHref(to) {
  !useInRouterContext() ? true ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? true ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return (0, import_react.useContext)(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? true ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0, import_react.useCallback)(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to) {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? true ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0, import_react.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location2 = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true ? warning(location2 != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ (0, import_react.createElement)(LocationContext.Provider, {
    children,
    value: {
      location: location2,
      navigationType
    }
  }));
}
var import_react, NavigationContext, LocationContext, RouteContext, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, joinPaths, normalizePathname, normalizeSearch, normalizeHash;
var init_react_router = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/react-router/index.js"() {
    init_react();
    init_history();
    init_history();
    import_react = __toESM(require_react());
    NavigationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (true) {
      NavigationContext.displayName = "Navigation";
    }
    LocationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (true) {
      LocationContext.displayName = "Location";
    }
    RouteContext = /* @__PURE__ */ (0, import_react.createContext)({
      outlet: null,
      matches: []
    });
    if (true) {
      RouteContext.displayName = "Route";
    }
    paramRe = /^:\w+$/;
    dynamicSegmentValue = 3;
    indexRouteValue = 2;
    emptySegmentValue = 1;
    staticSegmentValue = 10;
    splatPenalty = -2;
    isSplat = (s) => s === "*";
    joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  }
});

// node_modules/@remix-run/cloudflare/node_modules/react-router-dom/index.js
function _extends2() {
  _extends2 = Object.assign || function(target) {
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
  return _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return /* @__PURE__ */ (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location2 = useLocation();
  let path = useResolvedPath(to);
  return (0, import_react2.useCallback)((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location2) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location2, navigate, path, replaceProp, state, target, to]);
}
var import_react2, _excluded, _excluded2, Link, NavLink;
var init_react_router_dom = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/react-router-dom/index.js"() {
    init_react();
    import_react2 = __toESM(require_react());
    init_react_router();
    init_react_router();
    _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
    _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
    if (true) {
      HistoryRouter.displayName = "unstable_HistoryRouter";
    }
    Link = /* @__PURE__ */ (0, import_react2.forwardRef)(function LinkWithRef(_ref4, ref) {
      let {
        onClick,
        reloadDocument,
        replace = false,
        state,
        target,
        to
      } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
      let href = useHref(to);
      let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target
      });
      function handleClick(event) {
        if (onClick)
          onClick(event);
        if (!event.defaultPrevented && !reloadDocument) {
          internalOnClick(event);
        }
      }
      return /* @__PURE__ */ (0, import_react2.createElement)("a", _extends2({}, rest, {
        href,
        onClick: handleClick,
        ref,
        target
      }));
    });
    if (true) {
      Link.displayName = "Link";
    }
    NavLink = /* @__PURE__ */ (0, import_react2.forwardRef)(function NavLinkWithRef(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        children
      } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
      let location2 = useLocation();
      let path = useResolvedPath(to);
      let locationPathname = location2.pathname;
      let toPathname = path.pathname;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        toPathname = toPathname.toLowerCase();
      }
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp({
          isActive
        });
      } else {
        className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp({
        isActive
      }) : styleProp;
      return /* @__PURE__ */ (0, import_react2.createElement)(Link, _extends2({}, rest, {
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to
      }), typeof children === "function" ? children({
        isActive
      }) : children);
    });
    if (true) {
      NavLink.displayName = "NavLink";
    }
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/routeMatching.js
function matchServerRoutes(routes2, pathname) {
  let matches = matchRoutes(routes2, pathname);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/routeMatching.js"() {
    init_react();
    init_react_router_dom();
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/routes.js
function createRoutes(manifest, parentId) {
  return Object.keys(manifest).filter((key) => manifest[key].parentId === parentId).map((id2) => __spreadProps(__spreadValues({}, manifest[id2]), {
    children: createRoutes(manifest, id2)
  }));
}
var init_routes = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/routes.js"() {
    init_react();
  }
});

// node_modules/jsesc/jsesc.js
var require_jsesc = __commonJS({
  "node_modules/jsesc/jsesc.js"(exports, module) {
    "use strict";
    init_react();
    var object = {};
    var hasOwnProperty2 = object.hasOwnProperty;
    var forOwn = (object2, callback) => {
      for (const key in object2) {
        if (hasOwnProperty2.call(object2, key)) {
          callback(key, object2[key]);
        }
      }
    };
    var extend = (destination, source) => {
      if (!source) {
        return destination;
      }
      forOwn(source, (key, value) => {
        destination[key] = value;
      });
      return destination;
    };
    var forEach2 = (array, callback) => {
      const length = array.length;
      let index2 = -1;
      while (++index2 < length) {
        callback(array[index2]);
      }
    };
    var fourHexEscape = (hex3) => {
      return "\\u" + ("0000" + hex3).slice(-4);
    };
    var hexadecimal = (code, lowercase) => {
      let hexadecimal2 = code.toString(16);
      if (lowercase)
        return hexadecimal2;
      return hexadecimal2.toUpperCase();
    };
    var toString3 = object.toString;
    var isArray3 = Array.isArray;
    var isBuffer2 = (value) => {
      return typeof Buffer === "function" && Buffer.isBuffer(value);
    };
    var isObject2 = (value) => {
      return toString3.call(value) == "[object Object]";
    };
    var isString3 = (value) => {
      return typeof value == "string" || toString3.call(value) == "[object String]";
    };
    var isNumber2 = (value) => {
      return typeof value == "number" || toString3.call(value) == "[object Number]";
    };
    var isFunction2 = (value) => {
      return typeof value == "function";
    };
    var isMap = (value) => {
      return toString3.call(value) == "[object Map]";
    };
    var isSet = (value) => {
      return toString3.call(value) == "[object Set]";
    };
    var singleEscapes = {
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
    };
    var regexSingleEscape = /[\\\b\f\n\r\t]/;
    var regexDigit = /[0-9]/;
    var regexWhitespace = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    var escapeEverythingRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g;
    var escapeNonAsciiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g;
    var jsesc2 = (argument, options) => {
      const increaseIndentation = () => {
        oldIndent = indent;
        ++options.indentLevel;
        indent = options.indent.repeat(options.indentLevel);
      };
      const defaults = {
        "escapeEverything": false,
        "minimal": false,
        "isScriptContext": false,
        "quotes": "single",
        "wrap": false,
        "es6": false,
        "json": false,
        "compact": true,
        "lowercaseHex": false,
        "numbers": "decimal",
        "indent": "	",
        "indentLevel": 0,
        "__inline1__": false,
        "__inline2__": false
      };
      const json5 = options && options.json;
      if (json5) {
        defaults.quotes = "double";
        defaults.wrap = true;
      }
      options = extend(defaults, options);
      if (options.quotes != "single" && options.quotes != "double" && options.quotes != "backtick") {
        options.quotes = "single";
      }
      const quote = options.quotes == "double" ? '"' : options.quotes == "backtick" ? "`" : "'";
      const compact = options.compact;
      const lowercaseHex = options.lowercaseHex;
      let indent = options.indent.repeat(options.indentLevel);
      let oldIndent = "";
      const inline1 = options.__inline1__;
      const inline2 = options.__inline2__;
      const newLine = compact ? "" : "\n";
      let result;
      let isEmpty = true;
      const useBinNumbers = options.numbers == "binary";
      const useOctNumbers = options.numbers == "octal";
      const useDecNumbers = options.numbers == "decimal";
      const useHexNumbers = options.numbers == "hexadecimal";
      if (json5 && argument && isFunction2(argument.toJSON)) {
        argument = argument.toJSON();
      }
      if (!isString3(argument)) {
        if (isMap(argument)) {
          if (argument.size == 0) {
            return "new Map()";
          }
          if (!compact) {
            options.__inline1__ = true;
            options.__inline2__ = false;
          }
          return "new Map(" + jsesc2(Array.from(argument), options) + ")";
        }
        if (isSet(argument)) {
          if (argument.size == 0) {
            return "new Set()";
          }
          return "new Set(" + jsesc2(Array.from(argument), options) + ")";
        }
        if (isBuffer2(argument)) {
          if (argument.length == 0) {
            return "Buffer.from([])";
          }
          return "Buffer.from(" + jsesc2(Array.from(argument), options) + ")";
        }
        if (isArray3(argument)) {
          result = [];
          options.wrap = true;
          if (inline1) {
            options.__inline1__ = false;
            options.__inline2__ = true;
          }
          if (!inline2) {
            increaseIndentation();
          }
          forEach2(argument, (value) => {
            isEmpty = false;
            if (inline2) {
              options.__inline2__ = false;
            }
            result.push((compact || inline2 ? "" : indent) + jsesc2(value, options));
          });
          if (isEmpty) {
            return "[]";
          }
          if (inline2) {
            return "[" + result.join(", ") + "]";
          }
          return "[" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "]";
        } else if (isNumber2(argument)) {
          if (json5) {
            return JSON.stringify(argument);
          }
          if (useDecNumbers) {
            return String(argument);
          }
          if (useHexNumbers) {
            let hexadecimal2 = argument.toString(16);
            if (!lowercaseHex) {
              hexadecimal2 = hexadecimal2.toUpperCase();
            }
            return "0x" + hexadecimal2;
          }
          if (useBinNumbers) {
            return "0b" + argument.toString(2);
          }
          if (useOctNumbers) {
            return "0o" + argument.toString(8);
          }
        } else if (!isObject2(argument)) {
          if (json5) {
            return JSON.stringify(argument) || "null";
          }
          return String(argument);
        } else {
          result = [];
          options.wrap = true;
          increaseIndentation();
          forOwn(argument, (key, value) => {
            isEmpty = false;
            result.push((compact ? "" : indent) + jsesc2(key, options) + ":" + (compact ? "" : " ") + jsesc2(value, options));
          });
          if (isEmpty) {
            return "{}";
          }
          return "{" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "}";
        }
      }
      const regex = options.escapeEverything ? escapeEverythingRegex : escapeNonAsciiRegex;
      result = argument.replace(regex, (char, pair, lone, quoteChar, index2, string) => {
        if (pair) {
          if (options.minimal)
            return pair;
          const first = pair.charCodeAt(0);
          const second = pair.charCodeAt(1);
          if (options.es6) {
            const codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
            const hex4 = hexadecimal(codePoint, lowercaseHex);
            return "\\u{" + hex4 + "}";
          }
          return fourHexEscape(hexadecimal(first, lowercaseHex)) + fourHexEscape(hexadecimal(second, lowercaseHex));
        }
        if (lone) {
          return fourHexEscape(hexadecimal(lone.charCodeAt(0), lowercaseHex));
        }
        if (char == "\0" && !json5 && !regexDigit.test(string.charAt(index2 + 1))) {
          return "\\0";
        }
        if (quoteChar) {
          if (quoteChar == quote || options.escapeEverything) {
            return "\\" + quoteChar;
          }
          return quoteChar;
        }
        if (regexSingleEscape.test(char)) {
          return singleEscapes[char];
        }
        if (options.minimal && !regexWhitespace.test(char)) {
          return char;
        }
        const hex3 = hexadecimal(char.charCodeAt(0), lowercaseHex);
        if (json5 || hex3.length > 2) {
          return fourHexEscape(hex3);
        }
        return "\\x" + ("00" + hex3).slice(-2);
      });
      if (quote == "`") {
        result = result.replace(/\$\{/g, "\\${");
      }
      if (options.isScriptContext) {
        result = result.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, json5 ? "\\u003C!--" : "\\x3C!--");
      }
      if (options.wrap) {
        result = quote + result + quote;
      }
      return result;
    };
    jsesc2.version = "3.0.2";
    module.exports = jsesc2;
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/serverHandoff.js
function createServerHandoffString(serverHandoff) {
  return (0, import_jsesc.default)(serverHandoff, {
    isScriptContext: true
  });
}
var import_jsesc;
var init_serverHandoff = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/serverHandoff.js"() {
    init_react();
    import_jsesc = __toESM(require_jsesc());
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/server.js
async function handleDataRequest({
  handleDataRequest: handleDataRequest2,
  loadContext,
  matches,
  request,
  serverMode
}) {
  if (!isValidRequestMethod(request)) {
    return errorBoundaryError(new Error(`Invalid request method "${request.method}"`), 405);
  }
  let url = new URL(request.url);
  if (!matches) {
    return errorBoundaryError(new Error(`No route matches URL "${url.pathname}"`), 404);
  }
  let response;
  let match;
  try {
    if (isActionRequest(request)) {
      match = getRequestMatch(url, matches);
      response = await callRouteAction({
        loadContext,
        match,
        request
      });
    } else {
      let routeId = url.searchParams.get("_data");
      if (!routeId) {
        return errorBoundaryError(new Error(`Missing route id in ?_data`), 403);
      }
      let tempMatch = matches.find((match2) => match2.route.id === routeId);
      if (!tempMatch) {
        return errorBoundaryError(new Error(`Route "${routeId}" does not match URL "${url.pathname}"`), 403);
      }
      match = tempMatch;
      response = await callRouteLoader({
        loadContext,
        match,
        request
      });
    }
    if (isRedirectResponse(response)) {
      let headers4 = new Headers(response.headers);
      headers4.set("X-Remix-Redirect", headers4.get("Location"));
      headers4.delete("Location");
      if (response.headers.get("Set-Cookie") !== null) {
        headers4.set("X-Remix-Revalidate", "yes");
      }
      return new Response(null, {
        status: 204,
        headers: headers4
      });
    }
    if (handleDataRequest2) {
      response = await handleDataRequest2(response.clone(), {
        context: loadContext,
        params: match.params,
        request: request.clone()
      });
    }
    return response;
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    if (serverMode === ServerMode.Development) {
      return errorBoundaryError(error, 500);
    }
    return errorBoundaryError(new Error("Unexpected Server Error"), 500);
  }
}
async function handleDocumentRequest({
  build,
  loadContext,
  matches,
  request,
  routes: routes2,
  serverMode
}) {
  let url = new URL(request.url);
  let appState = {
    trackBoundaries: true,
    trackCatchBoundaries: true,
    catchBoundaryRouteId: null,
    renderBoundaryRouteId: null,
    loaderBoundaryRouteId: null,
    error: void 0,
    catch: void 0
  };
  if (!isValidRequestMethod(request)) {
    matches = null;
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 405,
      statusText: "Method Not Allowed"
    };
  } else if (!matches) {
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 404,
      statusText: "Not Found"
    };
  }
  let actionStatus;
  let actionData;
  let actionMatch;
  let actionResponse;
  if (matches && isActionRequest(request)) {
    actionMatch = getRequestMatch(url, matches);
    try {
      actionResponse = await callRouteAction({
        loadContext,
        match: actionMatch,
        request
      });
      if (isRedirectResponse(actionResponse)) {
        return actionResponse;
      }
      actionStatus = {
        status: actionResponse.status,
        statusText: actionResponse.statusText
      };
      if (isCatchResponse(actionResponse)) {
        appState.catchBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "CatchBoundary");
        appState.trackCatchBoundaries = false;
        appState.catch = __spreadProps(__spreadValues({}, actionStatus), {
          data: await extractData(actionResponse)
        });
      } else {
        actionData = {
          [actionMatch.route.id]: await extractData(actionResponse)
        };
      }
    } catch (error) {
      appState.loaderBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "ErrorBoundary");
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the action for route ${actionMatch.route.id}`);
      }
    }
  }
  let routeModules = createEntryRouteModules(build.routes);
  let matchesToLoad = matches || [];
  if (appState.catch) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad.slice(0, -1), "CatchBoundary");
  } else if (appState.error) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad.slice(0, -1), "ErrorBoundary");
  }
  let routeLoaderResults = await Promise.allSettled(matchesToLoad.map((match) => match.route.module.loader ? callRouteLoader({
    loadContext,
    match,
    request
  }) : Promise.resolve(void 0)));
  let actionCatch = appState.catch;
  let actionError = appState.error;
  let actionCatchBoundaryRouteId = appState.catchBoundaryRouteId;
  let actionLoaderBoundaryRouteId = appState.loaderBoundaryRouteId;
  appState.catch = void 0;
  appState.error = void 0;
  let routeLoaderResponses = {};
  let loaderStatusCodes = [];
  let routeData = {};
  for (let index2 = 0; index2 < matchesToLoad.length; index2++) {
    let match = matchesToLoad[index2];
    let result = routeLoaderResults[index2];
    let error = result.status === "rejected" ? result.reason : void 0;
    let response = result.status === "fulfilled" ? result.value : void 0;
    let isRedirect = response ? isRedirectResponse(response) : false;
    let isCatch = response ? isCatchResponse(response) : false;
    if (appState.catch || appState.error) {
      break;
    }
    if (!actionCatch && !actionError && response && isRedirect) {
      return response;
    }
    if (match.route.module.CatchBoundary) {
      appState.catchBoundaryRouteId = match.route.id;
    }
    if (match.route.module.ErrorBoundary) {
      appState.loaderBoundaryRouteId = match.route.id;
    }
    if (error) {
      loaderStatusCodes.push(500);
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the data loader for route ${match.route.id}`);
      }
      break;
    } else if (response) {
      routeLoaderResponses[match.route.id] = response;
      loaderStatusCodes.push(response.status);
      if (isCatch) {
        appState.trackCatchBoundaries = false;
        appState.catch = {
          data: await extractData(response),
          status: response.status,
          statusText: response.statusText
        };
        break;
      } else {
        routeData[match.route.id] = await extractData(response);
      }
    }
  }
  if (!appState.catch) {
    appState.catchBoundaryRouteId = actionCatchBoundaryRouteId;
  }
  if (!appState.error) {
    appState.loaderBoundaryRouteId = actionLoaderBoundaryRouteId;
  }
  appState.catch = actionCatch || appState.catch;
  appState.error = actionError || appState.error;
  let renderableMatches = getRenderableMatches(matches, appState);
  if (!renderableMatches) {
    renderableMatches = [];
    let root = routes2[0];
    if (root !== null && root !== void 0 && root.module.CatchBoundary) {
      appState.catchBoundaryRouteId = "root";
      renderableMatches.push({
        params: {},
        pathname: "",
        route: routes2[0]
      });
    }
  }
  let notOkResponse = actionStatus && actionStatus.status !== 200 ? actionStatus.status : loaderStatusCodes.find((status) => status !== 200);
  let responseStatusCode = appState.error ? 500 : typeof notOkResponse === "number" ? notOkResponse : appState.catch ? appState.catch.status : 200;
  let responseHeaders = getDocumentHeaders(build, renderableMatches, routeLoaderResponses, actionResponse);
  let entryMatches = createEntryMatches(renderableMatches, build.assets.routes);
  let serverHandoff = {
    actionData,
    appState,
    matches: entryMatches,
    routeData
  };
  let entryContext = __spreadProps(__spreadValues({}, serverHandoff), {
    manifest: build.assets,
    routeModules,
    serverHandoffString: createServerHandoffString(serverHandoff)
  });
  let handleDocumentRequest2 = build.entry.module.default;
  try {
    return await handleDocumentRequest2(request.clone(), responseStatusCode, responseHeaders, entryContext);
  } catch (error) {
    responseStatusCode = 500;
    appState.trackBoundaries = false;
    appState.error = await serializeError(error);
    entryContext.serverHandoffString = createServerHandoffString(serverHandoff);
    try {
      return await handleDocumentRequest2(request.clone(), responseStatusCode, responseHeaders, entryContext);
    } catch (error2) {
      if (serverMode !== ServerMode.Test) {
        console.error(error2);
      }
      let message = "Unexpected Server Error";
      if (serverMode === ServerMode.Development) {
        message += `

${String(error2)}`;
      }
      return new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
  }
}
async function handleResourceRequest({
  loadContext,
  matches,
  request,
  serverMode
}) {
  let match = matches.slice(-1)[0];
  try {
    if (isActionRequest(request)) {
      return await callRouteAction({
        match,
        loadContext,
        request
      });
    } else {
      return await callRouteLoader({
        match,
        loadContext,
        request
      });
    }
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    let message = "Unexpected Server Error";
    if (serverMode === ServerMode.Development) {
      message += `

${String(error)}`;
    }
    return new Response(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
function isActionRequest(request) {
  let method = request.method.toLowerCase();
  return method === "post" || method === "put" || method === "patch" || method === "delete";
}
function isHeadRequest(request) {
  return request.method.toLowerCase() === "head";
}
function isValidRequestMethod(request) {
  return request.method.toLowerCase() === "get" || isHeadRequest(request) || isActionRequest(request);
}
async function errorBoundaryError(error, status) {
  return json(await serializeError(error), {
    status,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function isIndexRequestUrl(url) {
  for (let param of url.searchParams.getAll("index")) {
    if (param === "") {
      return true;
    }
  }
  return false;
}
function getRequestMatch(url, matches) {
  let match = matches.slice(-1)[0];
  if (!isIndexRequestUrl(url) && match.route.id.endsWith("/index")) {
    return matches.slice(-2)[0];
  }
  return match;
}
function getDeepestRouteIdWithBoundary(matches, key) {
  let matched = getMatchesUpToDeepestBoundary(matches, key).slice(-1)[0];
  return matched ? matched.route.id : null;
}
function getMatchesUpToDeepestBoundary(matches, key) {
  let deepestBoundaryIndex = -1;
  matches.forEach((match, index2) => {
    if (match.route.module[key]) {
      deepestBoundaryIndex = index2;
    }
  });
  if (deepestBoundaryIndex === -1) {
    return [];
  }
  return matches.slice(0, deepestBoundaryIndex + 1);
}
function getRenderableMatches(matches, appState) {
  if (!matches) {
    return null;
  }
  if (!appState.catch && !appState.error) {
    return matches;
  }
  let lastRenderableIndex = -1;
  matches.forEach((match, index2) => {
    let id2 = match.route.id;
    if (appState.renderBoundaryRouteId === id2 || appState.loaderBoundaryRouteId === id2 || appState.catchBoundaryRouteId === id2) {
      lastRenderableIndex = index2;
    }
  });
  return matches.slice(0, lastRenderableIndex + 1);
}
var createRequestHandler;
var init_server = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/server.js"() {
    init_react();
    init_data();
    init_entry();
    init_errors();
    init_headers();
    init_mode();
    init_routeMatching();
    init_routes();
    init_responses();
    init_serverHandoff();
    createRequestHandler = (build, mode) => {
      let routes2 = createRoutes(build.routes);
      let serverMode = isServerMode(mode) ? mode : ServerMode.Production;
      return async function requestHandler(request, loadContext) {
        let url = new URL(request.url);
        let matches = matchServerRoutes(routes2, url.pathname);
        let response;
        if (url.searchParams.has("_data")) {
          response = await handleDataRequest({
            request,
            loadContext,
            matches,
            handleDataRequest: build.entry.module.handleDataRequest,
            serverMode
          });
        } else if (matches && !matches[matches.length - 1].route.module.default) {
          response = await handleResourceRequest({
            request,
            loadContext,
            matches,
            serverMode
          });
        } else {
          response = await handleDocumentRequest({
            build,
            loadContext,
            matches,
            request,
            routes: routes2,
            serverMode
          });
        }
        if (request.method.toLowerCase() === "head") {
          return new Response(null, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });
        }
        return response;
      };
    };
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/warnings.js
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned[message]) {
    alreadyWarned[message] = true;
    console.warn(message);
  }
}
var alreadyWarned;
var init_warnings = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/warnings.js"() {
    init_react();
    alreadyWarned = {};
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/sessions.js
function flash(name2) {
  return `__flash_${name2}__`;
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/api/remix#signing-cookies for more information.`);
}
var createSession, isSession, createSessionStorageFactory;
var init_sessions = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/sessions.js"() {
    init_react();
    init_cookies();
    init_warnings();
    createSession = (initialData = {}, id2 = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id2;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name2) {
          return map.has(name2) || map.has(flash(name2));
        },
        get(name2) {
          if (map.has(name2))
            return map.get(name2);
          let flashName = flash(name2);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            map.delete(flashName);
            return value;
          }
          return void 0;
        },
        set(name2, value) {
          map.set(name2, value);
        },
        flash(name2, value) {
          map.set(flash(name2), value);
        },
        unset(name2) {
          map.delete(name2);
        }
      };
    };
    isSession = (object) => {
      return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
    };
    createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          let id2 = cookieHeader && await cookie.parse(cookieHeader, options);
          let data = id2 && await readData(id2);
          return createSession(data || {}, id2 || "");
        },
        async commitSession(session, options) {
          let {
            id: id2,
            data
          } = session;
          if (id2) {
            await updateData(id2, data, cookie.expires);
          } else {
            id2 = await createData(data, cookie.expires);
          }
          return cookie.serialize(id2, options);
        },
        async destroySession(session, options) {
          await deleteData(session.id);
          return cookie.serialize("", __spreadProps(__spreadValues({}, options), {
            expires: new Date(0)
          }));
        }
      };
    };
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/sessions/cookieStorage.js
var createCookieSessionStorageFactory;
var init_cookieStorage = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/sessions/cookieStorage.js"() {
    init_react();
    init_cookies();
    init_sessions();
    createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096) {
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          }
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", __spreadProps(__spreadValues({}, options), {
            expires: new Date(0)
          }));
        }
      };
    };
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/sessions/memoryStorage.js
var createMemorySessionStorageFactory;
var init_memoryStorage = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/sessions/memoryStorage.js"() {
    init_react();
    createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let uniqueId = 0;
      let map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id2 = (++uniqueId).toString();
          map.set(id2, {
            data,
            expires
          });
          return id2;
        },
        async readData(id2) {
          if (map.has(id2)) {
            let {
              data,
              expires
            } = map.get(id2);
            if (!expires || expires > new Date()) {
              return data;
            }
            if (expires)
              map.delete(id2);
          }
          return null;
        },
        async updateData(id2, data, expires) {
          map.set(id2, {
            data,
            expires
          });
        },
        async deleteData(id2) {
          map.delete(id2);
        }
      });
    };
  }
});

// node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  createCookieFactory: () => createCookieFactory,
  createCookieSessionStorageFactory: () => createCookieSessionStorageFactory,
  createMemorySessionStorageFactory: () => createMemorySessionStorageFactory,
  createRequestHandler: () => createRequestHandler,
  createSession: () => createSession,
  createSessionStorageFactory: () => createSessionStorageFactory,
  isCookie: () => isCookie,
  isSession: () => isSession,
  json: () => json,
  redirect: () => redirect
});
var init_esm = __esm({
  "node_modules/@remix-run/cloudflare/node_modules/@remix-run/server-runtime/esm/index.js"() {
    init_react();
    init_cookies();
    init_responses();
    init_server();
    init_sessions();
    init_cookieStorage();
    init_memoryStorage();
  }
});

// node_modules/@remix-run/cloudflare/crypto.js
var require_crypto = __commonJS({
  "node_modules/@remix-run/cloudflare/crypto.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var encoder = new TextEncoder();
    var sign = async (value, secret) => {
      let key = await createKey(secret, ["sign"]);
      let data = encoder.encode(value);
      let signature = await crypto.subtle.sign("HMAC", key, data);
      let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    };
    var unsign = async (signed, secret) => {
      let index2 = signed.lastIndexOf(".");
      let value = signed.slice(0, index2);
      let hash = signed.slice(index2 + 1);
      let key = await createKey(secret, ["verify"]);
      let data = encoder.encode(value);
      let signature = byteStringToUint8Array(atob(hash));
      let valid = await crypto.subtle.verify("HMAC", key, signature, data);
      return valid ? value : false;
    };
    async function createKey(secret, usages) {
      let key = await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, usages);
      return key;
    }
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        array[i] = byteString.charCodeAt(i);
      }
      return array;
    }
    exports.sign = sign;
    exports.unsign = unsign;
  }
});

// node_modules/@remix-run/cloudflare/implementations.js
var require_implementations = __commonJS({
  "node_modules/@remix-run/cloudflare/implementations.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    var crypto2 = require_crypto();
    var createCookie = serverRuntime.createCookieFactory({
      sign: crypto2.sign,
      unsign: crypto2.unsign
    });
    var createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie);
    var createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie);
    var createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
    exports.createCookie = createCookie;
    exports.createCookieSessionStorage = createCookieSessionStorage;
    exports.createMemorySessionStorage = createMemorySessionStorage;
    exports.createSessionStorage = createSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/sessions/cloudflareKVSessionStorage.js
var require_cloudflareKVSessionStorage = __commonJS({
  "node_modules/@remix-run/cloudflare/sessions/cloudflareKVSessionStorage.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var implementations = require_implementations();
    function createCloudflareKVSessionStorage({
      cookie,
      kv
    }) {
      return implementations.createSessionStorage({
        cookie,
        async createData(data, expires) {
          while (true) {
            let randomBytes = new Uint8Array(8);
            crypto.getRandomValues(randomBytes);
            let id2 = [...randomBytes].map((x) => x.toString(16).padStart(2, "0")).join("");
            if (await kv.get(id2, "json")) {
              continue;
            }
            await kv.put(id2, JSON.stringify(data), {
              expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
            });
            return id2;
          }
        },
        async readData(id2) {
          let session = await kv.get(id2);
          if (!session) {
            return null;
          }
          return JSON.parse(session);
        },
        async updateData(id2, data, expires) {
          await kv.put(id2, JSON.stringify(data), {
            expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
          });
        },
        async deleteData(id2) {
          await kv.delete(id2);
        }
      });
    }
    exports.createCloudflareKVSessionStorage = createCloudflareKVSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/index.js
var require_cloudflare = __commonJS({
  "node_modules/@remix-run/cloudflare/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var cloudflareKVSessionStorage = require_cloudflareKVSessionStorage();
    var implementations = require_implementations();
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    exports.createCloudflareKVSessionStorage = cloudflareKVSessionStorage.createCloudflareKVSessionStorage;
    exports.createCookie = implementations.createCookie;
    exports.createCookieSessionStorage = implementations.createCookieSessionStorage;
    exports.createMemorySessionStorage = implementations.createMemorySessionStorage;
    exports.createSessionStorage = implementations.createSessionStorage;
    Object.defineProperty(exports, "createRequestHandler", {
      enumerable: true,
      get: function() {
        return serverRuntime.createRequestHandler;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node-modules-polyfills:events
function EventHandlers() {
}
function EventEmitter() {
  EventEmitter.init.call(this);
}
function $getMaxListeners(that) {
  if (that._maxListeners === void 0)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
function emitNone(handler, isFn, self2) {
  if (isFn)
    handler.call(self2);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2);
  }
}
function emitOne(handler, isFn, self2, arg1) {
  if (isFn)
    handler.call(self2, arg1);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1);
  }
}
function emitTwo(handler, isFn, self2, arg1, arg2) {
  if (isFn)
    handler.call(self2, arg1, arg2);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1, arg2);
  }
}
function emitThree(handler, isFn, self2, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self2, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1, arg2, arg3);
  }
}
function emitMany(handler, isFn, self2, args) {
  if (isFn)
    handler.apply(self2, args);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].apply(self2, args);
  }
}
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== "function")
    throw new TypeError('"listener" argument must be a function');
  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    if (events.newListener) {
      target.emit("newListener", type, listener.listener ? listener.listener : listener);
      events = target._events;
    }
    existing = events[type];
  }
  if (!existing) {
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + type + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }
  return target;
}
function emitWarning(e) {
  typeof console.warn === "function" ? console.warn(e) : console.log(e);
}
function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}
function listenerCount(type) {
  var events = this._events;
  if (events) {
    var evlistener = events[type];
    if (typeof evlistener === "function") {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }
  return 0;
}
function spliceOne(list, index2) {
  for (var i = index2, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}
function arrayClone(arr, i) {
  var copy2 = new Array(i);
  while (i--)
    copy2[i] = arr[i];
  return copy2;
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
var domain, events_default;
var init_events = __esm({
  "node-modules-polyfills:events"() {
    "use strict";
    init_react();
    EventHandlers.prototype = /* @__PURE__ */ Object.create(null);
    events_default = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.usingDomains = false;
    EventEmitter.prototype.domain = void 0;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._maxListeners = void 0;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.init = function() {
      this.domain = null;
      if (EventEmitter.usingDomains) {
        if (domain.active && !(this instanceof domain.Domain)) {
          this.domain = domain.active;
        }
      }
      if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
        this._events = new EventHandlers();
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || isNaN(n))
        throw new TypeError('"n" argument must be a positive number');
      this._maxListeners = n;
      return this;
    };
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var er, handler, len, args, i, events, domain2;
      var needDomainExit = false;
      var doError = type === "error";
      events = this._events;
      if (events)
        doError = doError && events.error == null;
      else if (!doError)
        return false;
      domain2 = this.domain;
      if (doError) {
        er = arguments[1];
        if (domain2) {
          if (!er)
            er = new Error('Uncaught, unspecified "error" event');
          er.domainEmitter = this;
          er.domain = domain2;
          er.domainThrown = false;
          domain2.emit("error", er);
        } else if (er instanceof Error) {
          throw er;
        } else {
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
          err.context = er;
          throw err;
        }
        return false;
      }
      handler = events[type];
      if (!handler)
        return false;
      var isFn = typeof handler === "function";
      len = arguments.length;
      switch (len) {
        case 1:
          emitNone(handler, isFn, this);
          break;
        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;
        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;
        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          emitMany(handler, isFn, this, args);
      }
      if (needDomainExit)
        domain2.exit();
      return true;
    };
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    EventEmitter.prototype.once = function once(type, listener) {
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      if (typeof listener !== "function")
        throw new TypeError('"listener" argument must be a function');
      events = this._events;
      if (!events)
        return this;
      list = events[type];
      if (!list)
        return this;
      if (list === listener || list.listener && list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length; i-- > 0; ) {
          if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (list.length === 1) {
          list[0] = void 0;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }
        if (events.removeListener)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners2, events;
      events = this._events;
      if (!events)
        return this;
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys2 = Object.keys(events);
        for (var i = 0, key; i < keys2.length; ++i) {
          key = keys2[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }
      listeners2 = events[type];
      if (typeof listeners2 === "function") {
        this.removeListener(type, listeners2);
      } else if (listeners2) {
        do {
          this.removeListener(type, listeners2[listeners2.length - 1]);
        } while (listeners2[0]);
      }
      return this;
    };
    EventEmitter.prototype.listeners = function listeners(type) {
      var evlistener;
      var ret;
      var events = this._events;
      if (!events)
        ret = [];
      else {
        evlistener = events[type];
        if (!evlistener)
          ret = [];
        else if (typeof evlistener === "function")
          ret = [evlistener.listener || evlistener];
        else
          ret = unwrapListeners(evlistener);
      }
      return ret;
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
  }
});

// node-modules-polyfills:process
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
function noop() {
}
function binding(name2) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance2) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, title, platform, browser, env, argv, version, versions, release, config, on, addListener2, once2, off, removeListener2, removeAllListeners2, emit2, performance2, performanceNow, startTime, browser$1, process_default;
var init_process = __esm({
  "node-modules-polyfills:process"() {
    init_react();
    cachedSetTimeout = defaultSetTimout;
    cachedClearTimeout = defaultClearTimeout;
    if (typeof globalThis.setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    }
    if (typeof globalThis.clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    }
    queue = [];
    draining = false;
    queueIndex = -1;
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    title = "browser";
    platform = "browser";
    browser = true;
    env = {};
    argv = [];
    version = "";
    versions = {};
    release = {};
    config = {};
    on = noop;
    addListener2 = noop;
    once2 = noop;
    off = noop;
    removeListener2 = noop;
    removeAllListeners2 = noop;
    emit2 = noop;
    performance2 = globalThis.performance || {};
    performanceNow = performance2.now || performance2.mozNow || performance2.msNow || performance2.oNow || performance2.webkitNow || function() {
      return new Date().getTime();
    };
    startTime = new Date();
    browser$1 = {
      nextTick,
      title,
      browser,
      env,
      argv,
      version,
      versions,
      on,
      addListener: addListener2,
      once: once2,
      off,
      removeListener: removeListener2,
      removeAllListeners: removeAllListeners2,
      emit: emit2,
      binding,
      cwd,
      chdir,
      umask,
      hrtime,
      platform,
      release,
      config,
      uptime
    };
    process_default = browser$1;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js
var inherits, inherits_default;
var init_inherits = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js"() {
    init_react();
    if (typeof Object.create === "function") {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    inherits_default = inherits;
  }
});

// node-modules-polyfills:util
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(" ");
  }
  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x2) {
    if (x2 === "%%")
      return "%";
    if (i >= len)
      return x2;
    switch (x2) {
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
      default:
        return x2;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += " " + x;
    } else {
      str += " " + inspect(x);
    }
  }
  return str;
}
function deprecate(fn, msg) {
  if (isUndefined(globalThis.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }
  if (process_default.noDeprecation === true) {
    return fn;
  }
  var warned2 = false;
  function deprecated() {
    if (!warned2) {
      if (process_default.throwDeprecation) {
        throw new Error(msg);
      } else if (process_default.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned2 = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process_default.env.NODE_DEBUG || "";
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error("%s %d: %s", set, pid, msg);
      };
    } else {
      debugs[set] = function() {
      };
    }
  }
  return debugs[set];
}
function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = false;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function(val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== inspect && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  var keys2 = Object.keys(value);
  var visibleKeys = arrayToHash(keys2);
  if (ctx.showHidden) {
    keys2 = Object.getOwnPropertyNames(value);
  }
  if (isError(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
    return formatError(value);
  }
  if (keys2.length === 0) {
    if (isFunction(value)) {
      var name2 = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name2 + "]", "special");
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base = "", array = false, braces = ["{", "}"];
  if (isArray(value)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction(value)) {
    var n = value.name ? ": " + value.name : "";
    base = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError(value)) {
    base = " " + formatError(value);
  }
  if (keys2.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2);
  } else {
    output = keys2.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push("");
    }
  }
  keys2.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name2, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name2 = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name2)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name2 = JSON.stringify("" + key);
    if (name2.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name2 = name2.substr(1, name2.length - 2);
      name2 = ctx.stylize(name2, "name");
    } else {
      name2 = name2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name2 = ctx.stylize(name2, "string");
    }
  }
  return name2 + ": " + str;
}
function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf("\n") >= 0)
      numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg === "function";
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function _extend(origin, add) {
  if (!add || !isObject(add))
    return origin;
  var keys2 = Object.keys(add);
  var i = keys2.length;
  while (i--) {
    origin[keys2[i]] = add[keys2[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var formatRegExp, debugs, debugEnviron;
var init_util = __esm({
  "node-modules-polyfills:util"() {
    init_react();
    init_process();
    init_inherits();
    formatRegExp = /%[sdj%]/g;
    debugs = {};
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
  }
});

// node-modules-polyfills:buffer
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c2;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c2 = Math.pow(2, -e)) < 1) {
      e--;
      c2 *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c2;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c2 >= 2) {
      e++;
      c2 /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c2 - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
function kMaxLength() {
  return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer2.prototype;
  } else {
    if (that === null) {
      that = new Buffer2(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
    return new Buffer2(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer2.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
function fromString(that, string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer2.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray2(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return length | 0;
}
function internalIsBuffer(b2) {
  return !!(b2 != null && b2._isBuffer);
}
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0)
    return 0;
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding)
    encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
function swap(b2, n, m) {
  var i = b2[n];
  b2[n] = b2[m];
  b2[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0)
    byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir)
      return -1;
    else
      byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir)
      byteOffset = 0;
    else
      return -1;
  }
  if (typeof val === "string") {
    val = Buffer2.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1)
          foundIndex = i;
        if (i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1)
          i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength)
      byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
  }
  return -1;
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0)
    start = 0;
  if (!end || end < 0 || end > len)
    end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim)
    return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16)
    return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c2, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0)
      break;
    c2 = str.charCodeAt(i);
    hi = c2 >> 8;
    lo = c2 % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length)
      break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
var lookup, revLookup, Arr, inited, toString, isArray2, INSPECT_MAX_BYTES, _kMaxLength, MAX_ARGUMENTS_LENGTH, INVALID_BASE64_RE;
var init_buffer = __esm({
  "node-modules-polyfills:buffer"() {
    init_react();
    lookup = [];
    revLookup = [];
    Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    inited = false;
    toString = {}.toString;
    isArray2 = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
    INSPECT_MAX_BYTES = 50;
    Buffer2.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
    _kMaxLength = kMaxLength();
    Buffer2.poolSize = 8192;
    Buffer2._augment = function(arr) {
      arr.__proto__ = Buffer2.prototype;
      return arr;
    };
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      Buffer2.prototype.__proto__ = Uint8Array.prototype;
      Buffer2.__proto__ = Uint8Array;
    }
    Buffer2.alloc = function(size, fill2, encoding) {
      return alloc(null, size, fill2, encoding);
    };
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.isBuffer = isBuffer;
    Buffer2.compare = function compare(a2, b2) {
      if (!internalIsBuffer(a2) || !internalIsBuffer(b2)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a2 === b2)
        return 0;
      var x = a2.length;
      var y = b2.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a2[i] !== b2[i]) {
          x = a2[i];
          y = b2[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!isArray2(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    Buffer2.byteLength = byteLength;
    Buffer2.prototype._isBuffer = true;
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString2() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.equals = function equals(b2) {
      if (!internalIsBuffer(b2))
        throw new TypeError("Argument must be a Buffer");
      if (this === b2)
        return true;
      return Buffer2.compare(this, b2) === 0;
    };
    Buffer2.prototype.inspect = function inspect2() {
      var str = "";
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    Buffer2.prototype.write = function write2(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH = 4096;
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }
      return newBuf;
    };
    Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8);
    };
    Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js
function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
var buffer_list_default;
var init_buffer_list = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js"() {
    init_react();
    init_buffer();
    buffer_list_default = BufferList;
    BufferList.prototype.push = function(v) {
      var entry2 = { data: v, next: null };
      if (this.length > 0)
        this.tail.next = entry2;
      else
        this.head = entry2;
      this.tail = entry2;
      ++this.length;
    };
    BufferList.prototype.unshift = function(v) {
      var entry2 = { data: v, next: this.head };
      if (this.length === 0)
        this.tail = entry2;
      this.head = entry2;
      ++this.length;
    };
    BufferList.prototype.shift = function() {
      if (this.length === 0)
        return;
      var ret = this.head.data;
      if (this.length === 1)
        this.head = this.tail = null;
      else
        this.head = this.head.next;
      --this.length;
      return ret;
    };
    BufferList.prototype.clear = function() {
      this.head = this.tail = null;
      this.length = 0;
    };
    BufferList.prototype.join = function(s) {
      if (this.length === 0)
        return "";
      var p = this.head;
      var ret = "" + p.data;
      while (p = p.next) {
        ret += s + p.data;
      }
      return ret;
    };
    BufferList.prototype.concat = function(n) {
      if (this.length === 0)
        return Buffer2.alloc(0);
      if (this.length === 1)
        return this.head.data;
      var ret = Buffer2.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;
      while (p) {
        p.data.copy(ret, i);
        i += p.data.length;
        p = p.next;
      }
      return ret;
    };
  }
});

// node-modules-polyfills:string_decoder
function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error("Unknown encoding: " + encoding);
  }
}
function StringDecoder(encoding) {
  this.encoding = (encoding || "utf8").toLowerCase().replace(/[-_]/, "");
  assertEncoding(encoding);
  switch (this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case "base64":
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }
  this.charBuffer = new Buffer2(6);
  this.charReceived = 0;
  this.charLength = 0;
}
function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}
function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}
function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}
var isBufferEncoding;
var init_string_decoder = __esm({
  "node-modules-polyfills:string_decoder"() {
    init_react();
    init_buffer();
    isBufferEncoding = Buffer2.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    StringDecoder.prototype.write = function(buffer) {
      var charStr = "";
      while (this.charLength) {
        var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;
        buffer.copy(this.charBuffer, this.charReceived, 0, available);
        this.charReceived += available;
        if (this.charReceived < this.charLength) {
          return "";
        }
        buffer = buffer.slice(available, buffer.length);
        charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 55296 && charCode <= 56319) {
          this.charLength += this.surrogateSize;
          charStr = "";
          continue;
        }
        this.charReceived = this.charLength = 0;
        if (buffer.length === 0) {
          return charStr;
        }
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      if (this.charLength) {
        buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
        end -= this.charReceived;
      }
      charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1;
      var charCode = charStr.charCodeAt(end);
      if (charCode >= 55296 && charCode <= 56319) {
        var size = this.surrogateSize;
        this.charLength += size;
        this.charReceived += size;
        this.charBuffer.copy(this.charBuffer, size, 0, size);
        buffer.copy(this.charBuffer, 0, 0, size);
        return charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
      var i = buffer.length >= 3 ? 3 : buffer.length;
      for (; i > 0; i--) {
        var c2 = buffer[buffer.length - i];
        if (i == 1 && c2 >> 5 == 6) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c2 >> 4 == 14) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c2 >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder.prototype.end = function(buffer) {
      var res = "";
      if (buffer && buffer.length)
        res = this.write(buffer);
      if (this.charReceived) {
        var cr = this.charReceived;
        var buf = this.charBuffer;
        var enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js
function prependListener2(emitter, event, fn) {
  if (typeof emitter.prependListener === "function") {
    return emitter.prependListener(event, fn);
  } else {
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
}
function listenerCount2(emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState(options, stream) {
  options = options || {};
  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.readableObjectMode;
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
  this.highWaterMark = ~~this.highWaterMark;
  this.buffer = new buffer_list_default();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.defaultEncoding = options.defaultEncoding || "utf8";
  this.ranOut = false;
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);
  this._readableState = new ReadableState(options, this);
  this.readable = true;
  if (options && typeof options.read === "function")
    this._read = options.read;
  events_default.call(this);
}
function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit("error", er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error("stream.push() after EOF");
      stream.emit("error", e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error("stream.unshift() after end event");
      stream.emit("error", _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }
      if (!addToFront)
        state.reading = false;
      if (!skipAdd) {
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit("data", chunk);
          stream.read(0);
        } else {
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront)
            state.buffer.unshift(chunk);
          else
            state.buffer.push(chunk);
          if (state.needReadable)
            emitReadable(stream);
        }
      }
      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }
  return needMoreData(state);
}
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended)
    return 0;
  if (state.objectMode)
    return 1;
  if (n !== n) {
    if (state.flowing && state.length)
      return state.buffer.head.data.length;
    else
      return state.length;
  }
  if (n > state.highWaterMark)
    state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length)
    return n;
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}
function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== "string" && chunk !== null && chunk !== void 0 && !state.objectMode) {
    er = new TypeError("Invalid non-string/buffer chunk");
  }
  return er;
}
function onEofChunk(stream, state) {
  if (state.ended)
    return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;
  emitReadable(stream);
}
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug("emitReadable", state.flowing);
    state.emittedReadable = true;
    if (state.sync)
      nextTick(emitReadable_, stream);
    else
      emitReadable_(stream);
  }
}
function emitReadable_(stream) {
  debug("emit readable");
  stream.emit("readable");
  flow(stream);
}
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}
function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug("maybeReadMore read 0");
    stream.read(0);
    if (len === state.length)
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}
function pipeOnDrain(src) {
  return function() {
    var state = src._readableState;
    debug("pipeOnDrain", state.awaitDrain);
    if (state.awaitDrain)
      state.awaitDrain--;
    if (state.awaitDrain === 0 && src.listeners("data").length) {
      state.flowing = true;
      flow(src);
    }
  };
}
function nReadingNextTick(self2) {
  debug("readable nexttick read 0");
  self2.read(0);
}
function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}
function resume_(stream, state) {
  if (!state.reading) {
    debug("resume read 0");
    stream.read(0);
  }
  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit("resume");
  flow(stream);
  if (state.flowing && !state.reading)
    stream.read(0);
}
function flow(stream) {
  var state = stream._readableState;
  debug("flow", state.flowing);
  while (state.flowing && stream.read() !== null) {
  }
}
function fromList(n, state) {
  if (state.length === 0)
    return null;
  var ret;
  if (state.objectMode)
    ret = state.buffer.shift();
  else if (!n || n >= state.length) {
    if (state.decoder)
      ret = state.buffer.join("");
    else if (state.buffer.length === 1)
      ret = state.buffer.head.data;
    else
      ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    ret = fromListPartial(n, state.buffer, state.decoder);
  }
  return ret;
}
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    ret = list.shift();
  } else {
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}
function copyFromBufferString(n, list) {
  var p = list.head;
  var c2 = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length)
      ret += str;
    else
      ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c2;
        if (p.next)
          list.head = p.next;
        else
          list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c2;
  }
  list.length -= c2;
  return ret;
}
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c2 = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c2;
        if (p.next)
          list.head = p.next;
        else
          list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c2;
  }
  list.length -= c2;
  return ret;
}
function endReadable(stream) {
  var state = stream._readableState;
  if (state.length > 0)
    throw new Error('"endReadable()" called on non-empty stream');
  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}
function endReadableNT(state, stream) {
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit("end");
  }
}
function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
function indexOf2(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x)
      return i;
  }
  return -1;
}
var debug, MAX_HWM;
var init_readable = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js"() {
    "use strict";
    init_react();
    init_events();
    init_util();
    init_buffer_list();
    init_string_decoder();
    init_duplex();
    init_process();
    Readable.ReadableState = ReadableState;
    debug = debuglog("stream");
    inherits_default(Readable, events_default);
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (!state.objectMode && typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer.from(chunk, encoding);
          encoding = "";
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, "", true);
    };
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    MAX_HWM = 8388608;
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = !pipeOpts || pipeOpts.end !== false;
      var endFn = doEnd ? onend2 : cleanup;
      if (state.endEmitted)
        nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable) {
        debug("onunpipe");
        if (readable === src) {
          cleanup();
        }
      }
      function onend2() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend2);
        src.removeListener("end", cleanup);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (ret === false && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf2(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (listenerCount2(dest, "error") === 0)
          dest.emit("error", er);
      }
      prependListener2(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var _i = 0; _i < len; _i++) {
          dests[_i].emit("unpipe", this);
        }
        return this;
      }
      var i = indexOf2(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = events_default.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self2 = this;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self2.push(chunk);
        }
        self2.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = self2.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ["error", "close", "destroy", "pause", "resume"];
      forEach(events, function(ev) {
        stream.on(ev, self2.emit.bind(self2, ev));
      });
      self2._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self2;
    };
    Readable._fromList = fromList;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js
function nop() {
}
function WriteReq(chunk, encoding, cb2) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb2;
  this.next = null;
}
function WritableState(options, stream) {
  Object.defineProperty(this, "buffer", {
    get: deprecate(function() {
      return this.getBuffer();
    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
  });
  options = options || {};
  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.writableObjectMode;
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
  this.highWaterMark = ~~this.highWaterMark;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;
  this.defaultEncoding = options.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function(er) {
    onwrite(stream, er);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new CorkedRequest(this);
}
function Writable(options) {
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);
  this._writableState = new WritableState(options, this);
  this.writable = true;
  if (options) {
    if (typeof options.write === "function")
      this._write = options.write;
    if (typeof options.writev === "function")
      this._writev = options.writev;
  }
  EventEmitter.call(this);
}
function writeAfterEnd(stream, cb2) {
  var er = new Error("write after end");
  stream.emit("error", er);
  nextTick(cb2, er);
}
function validChunk(stream, state, chunk, cb2) {
  var valid = true;
  var er = false;
  if (chunk === null) {
    er = new TypeError("May not write null values to stream");
  } else if (!Buffer2.isBuffer(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
    er = new TypeError("Invalid non-string/buffer chunk");
  }
  if (er) {
    stream.emit("error", er);
    nextTick(cb2, er);
    valid = false;
  }
  return valid;
}
function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
    chunk = Buffer2.from(chunk, encoding);
  }
  return chunk;
}
function writeOrBuffer(stream, state, chunk, encoding, cb2) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer2.isBuffer(chunk))
    encoding = "buffer";
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark;
  if (!ret)
    state.needDrain = true;
  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb2);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb2);
  }
  return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb2) {
  state.writelen = len;
  state.writecb = cb2;
  state.writing = true;
  state.sync = true;
  if (writev)
    stream._writev(chunk, state.onwrite);
  else
    stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}
function onwriteError(stream, state, sync2, er, cb2) {
  --state.pendingcb;
  if (sync2)
    nextTick(cb2, er);
  else
    cb2(er);
  stream._writableState.errorEmitted = true;
  stream.emit("error", er);
}
function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}
function onwrite(stream, er) {
  var state = stream._writableState;
  var sync2 = state.sync;
  var cb2 = state.writecb;
  onwriteStateUpdate(state);
  if (er)
    onwriteError(stream, state, sync2, er, cb2);
  else {
    var finished = needFinish(state);
    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }
    if (sync2) {
      nextTick(afterWrite, stream, state, finished, cb2);
    } else {
      afterWrite(stream, state, finished, cb2);
    }
  }
}
function afterWrite(stream, state, finished, cb2) {
  if (!finished)
    onwriteDrain(stream, state);
  state.pendingcb--;
  cb2();
  finishMaybe(stream, state);
}
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit("drain");
  }
}
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry2 = state.bufferedRequest;
  if (stream._writev && entry2 && entry2.next) {
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry2;
    var count = 0;
    while (entry2) {
      buffer[count] = entry2;
      entry2 = entry2.next;
      count += 1;
    }
    doWrite(stream, state, true, state.length, buffer, "", holder.finish);
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    while (entry2) {
      var chunk = entry2.chunk;
      var encoding = entry2.encoding;
      var cb2 = entry2.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb2);
      entry2 = entry2.next;
      if (state.writing) {
        break;
      }
    }
    if (entry2 === null)
      state.lastBufferedRequest = null;
  }
  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry2;
  state.bufferProcessing = false;
}
function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit("prefinish");
  }
}
function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit("finish");
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}
function endWritable(stream, state, cb2) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb2) {
    if (state.finished)
      nextTick(cb2);
    else
      stream.once("finish", cb2);
  }
  state.ended = true;
  stream.writable = false;
}
function CorkedRequest(state) {
  var _this = this;
  this.next = null;
  this.entry = null;
  this.finish = function(err) {
    var entry2 = _this.entry;
    _this.entry = null;
    while (entry2) {
      var cb2 = entry2.callback;
      state.pendingcb--;
      cb2(err);
      entry2 = entry2.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
var init_writable = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js"() {
    init_react();
    init_util();
    init_buffer();
    init_events();
    init_duplex();
    init_process();
    Writable.WritableState = WritableState;
    inherits_default(Writable, EventEmitter);
    WritableState.prototype.getBuffer = function writableStateGetBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    Writable.prototype.write = function(chunk, encoding, cb2) {
      var state = this._writableState;
      var ret = false;
      if (typeof encoding === "function") {
        cb2 = encoding;
        encoding = null;
      }
      if (Buffer2.isBuffer(chunk))
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb2 !== "function")
        cb2 = nop;
      if (state.ended)
        writeAfterEnd(this, cb2);
      else if (validChunk(this, state, chunk, cb2)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb2);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Writable.prototype._write = function(chunk, encoding, cb2) {
      cb2(new Error("not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb2) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb2 = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb2 = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb2);
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js
function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  if (options && options.readable === false)
    this.readable = false;
  if (options && options.writable === false)
    this.writable = false;
  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;
  this.once("end", onend);
}
function onend() {
  if (this.allowHalfOpen || this._writableState.ended)
    return;
  nextTick(onEndNT, this);
}
function onEndNT(self2) {
  self2.end();
}
var keys, method, v;
var init_duplex = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js"() {
    init_react();
    init_util();
    init_process();
    init_readable();
    init_writable();
    inherits_default(Duplex, Readable);
    keys = Object.keys(Writable.prototype);
    for (v = 0; v < keys.length; v++) {
      method = keys[v];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js
function TransformState(stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };
  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}
function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;
  var cb2 = ts.writecb;
  if (!cb2)
    return stream.emit("error", new Error("no writecb in Transform class"));
  ts.writechunk = null;
  ts.writecb = null;
  if (data !== null && data !== void 0)
    stream.push(data);
  cb2(er);
  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);
  Duplex.call(this, options);
  this._transformState = new TransformState(this);
  var stream = this;
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === "function")
      this._transform = options.transform;
    if (typeof options.flush === "function")
      this._flush = options.flush;
  }
  this.once("prefinish", function() {
    if (typeof this._flush === "function")
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}
function done(stream, er) {
  if (er)
    return stream.emit("error", er);
  var ws = stream._writableState;
  var ts = stream._transformState;
  if (ws.length)
    throw new Error("Calling transform done when ws.length != 0");
  if (ts.transforming)
    throw new Error("Calling transform done when still transforming");
  return stream.push(null);
}
var init_transform = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js"() {
    init_react();
    init_duplex();
    init_util();
    inherits_default(Transform, Duplex);
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb2) {
      throw new Error("Not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb2) {
      var ts = this._transformState;
      ts.writecb = cb2;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  Transform.call(this, options);
}
var init_passthrough = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js"() {
    init_react();
    init_transform();
    init_util();
    inherits_default(PassThrough, Transform);
    PassThrough.prototype._transform = function(chunk, encoding, cb2) {
      cb2(null, chunk);
    };
  }
});

// node-modules-polyfills:stream
var stream_exports = {};
__export(stream_exports, {
  Duplex: () => Duplex,
  PassThrough: () => PassThrough,
  Readable: () => Readable,
  Stream: () => Stream,
  Transform: () => Transform,
  Writable: () => Writable,
  default: () => stream_default
});
function Stream() {
  events_default.call(this);
}
var stream_default;
var init_stream = __esm({
  "node-modules-polyfills:stream"() {
    init_react();
    init_events();
    init_util();
    init_duplex();
    init_readable();
    init_writable();
    init_transform();
    init_passthrough();
    inherits_default(Stream, events_default);
    Stream.Readable = Readable;
    Stream.Writable = Writable;
    Stream.Duplex = Duplex;
    Stream.Transform = Transform;
    Stream.PassThrough = PassThrough;
    Stream.Stream = Stream;
    stream_default = Stream;
    Stream.prototype.pipe = function(dest, options) {
      var source = this;
      function ondata(chunk) {
        if (dest.writable) {
          if (dest.write(chunk) === false && source.pause) {
            source.pause();
          }
        }
      }
      source.on("data", ondata);
      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }
      dest.on("drain", ondrain);
      if (!dest._isStdio && (!options || options.end !== false)) {
        source.on("end", onend2);
        source.on("close", onclose);
      }
      var didOnEnd = false;
      function onend2() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        dest.end();
      }
      function onclose() {
        if (didOnEnd)
          return;
        didOnEnd = true;
        if (typeof dest.destroy === "function")
          dest.destroy();
      }
      function onerror(er) {
        cleanup();
        if (events_default.listenerCount(this, "error") === 0) {
          throw er;
        }
      }
      source.on("error", onerror);
      dest.on("error", onerror);
      function cleanup() {
        source.removeListener("data", ondata);
        dest.removeListener("drain", ondrain);
        source.removeListener("end", onend2);
        source.removeListener("close", onclose);
        source.removeListener("error", onerror);
        dest.removeListener("error", onerror);
        source.removeListener("end", cleanup);
        source.removeListener("close", cleanup);
        dest.removeListener("close", cleanup);
      }
      source.on("end", cleanup);
      source.on("close", cleanup);
      dest.on("close", cleanup);
      dest.emit("pipe", source);
      return dest;
    };
  }
});

// node-modules-polyfills-commonjs:stream
var require_stream = __commonJS({
  "node-modules-polyfills-commonjs:stream"(exports, module) {
    init_react();
    var polyfill = (init_stream(), __toCommonJS(stream_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.development.js
var require_react_dom_server_node_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var React10 = require_react();
        var _assign = require_object_assign();
        var stream = require_stream();
        var ReactVersion = "17.0.2";
        function formatProdErrorMessage(code) {
          var url = "https://reactjs.org/docs/error-decoder.html?invariant=" + code;
          for (var i2 = 1; i2 < arguments.length; i2++) {
            url += "&args[]=" + encodeURIComponent(arguments[i2]);
          }
          return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var ReactSharedInternals = React10.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format2) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format2, args);
          }
        }
        function error(format2) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format2, args);
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return getComponentName(init2(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var enableSuspenseServerRenderer = false;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name2, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name2;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame2 = componentFrameCache.get(fn);
            if (frame2 !== void 0) {
              return frame2;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s >= 1 && c2 >= 0 && sampleLines[s] !== controlLines[c2]) {
                c2--;
              }
              for (; s >= 1 && c2 >= 0; s--, c2--) {
                if (sampleLines[s] !== controlLines[c2]) {
                  if (s !== 1 || c2 !== 1) {
                    do {
                      s--;
                      c2--;
                      if (c2 < 0 || sampleLines[s] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name2 = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name2 ? describeBuiltInComponentFrame(name2) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        }
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function maskContext(type, context) {
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyObject;
          }
          var maskedContext = {};
          for (var contextName in contextTypes) {
            maskedContext[contextName] = context[contextName];
          }
          return maskedContext;
        }
        function checkContextTypes(typeSpecs, values, location2) {
          {
            checkPropTypes(typeSpecs, values, location2, "Component");
          }
        }
        function validateContextBounds(context, threadID) {
          for (var i2 = context._threadCount | 0; i2 <= threadID; i2++) {
            context[i2] = context._currentValue2;
            context._threadCount = i2 + 1;
          }
        }
        function processContext(type, context, threadID, isClass) {
          if (isClass) {
            var contextType = type.contextType;
            {
              if ("contextType" in type) {
                var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
                if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
                  didWarnAboutInvalidateContextType.add(type);
                  var addendum = "";
                  if (contextType === void 0) {
                    addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                  } else if (typeof contextType !== "object") {
                    addendum = " However, it is set to a " + typeof contextType + ".";
                  } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                    addendum = " Did you accidentally pass the Context.Provider instead?";
                  } else if (contextType._context !== void 0) {
                    addendum = " Did you accidentally pass the Context.Consumer instead?";
                  } else {
                    addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                  }
                  error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentName(type) || "Component", addendum);
                }
              }
            }
            if (typeof contextType === "object" && contextType !== null) {
              validateContextBounds(contextType, threadID);
              return contextType[threadID];
            }
            {
              var maskedContext = maskContext(type, context);
              {
                if (type.contextTypes) {
                  checkContextTypes(type.contextTypes, maskedContext, "context");
                }
              }
              return maskedContext;
            }
          } else {
            {
              var _maskedContext = maskContext(type, context);
              {
                if (type.contextTypes) {
                  checkContextTypes(type.contextTypes, _maskedContext, "context");
                }
              }
              return _maskedContext;
            }
          }
        }
        var nextAvailableThreadIDs = new Uint16Array(16);
        for (var i = 0; i < 15; i++) {
          nextAvailableThreadIDs[i] = i + 1;
        }
        nextAvailableThreadIDs[15] = 0;
        function growThreadCountAndReturnNextAvailable() {
          var oldArray = nextAvailableThreadIDs;
          var oldSize = oldArray.length;
          var newSize = oldSize * 2;
          if (!(newSize <= 65536)) {
            {
              throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
            }
          }
          var newArray = new Uint16Array(newSize);
          newArray.set(oldArray);
          nextAvailableThreadIDs = newArray;
          nextAvailableThreadIDs[0] = oldSize + 1;
          for (var _i = oldSize; _i < newSize - 1; _i++) {
            nextAvailableThreadIDs[_i] = _i + 1;
          }
          nextAvailableThreadIDs[newSize - 1] = 0;
          return oldSize;
        }
        function allocThreadID() {
          var nextID = nextAvailableThreadIDs[0];
          if (nextID === 0) {
            return growThreadCountAndReturnNextAvailable();
          }
          nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
          return nextID;
        }
        function freeThreadID(id2) {
          nextAvailableThreadIDs[id2] = nextAvailableThreadIDs[0];
          nextAvailableThreadIDs[0] = id2;
        }
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var ROOT_ATTRIBUTE_NAME = "data-reactroot";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty2.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty2.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldIgnoreAttribute(name2, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null) {
            return propertyInfo.type === RESERVED;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (name2.length > 2 && (name2[0] === "o" || name2[0] === "O") && (name2[1] === "n" || name2[1] === "N")) {
            return true;
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name2, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name2.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function shouldRemoveAttribute(name2, value, propertyInfo, isCustomComponentTag) {
          if (value === null || typeof value === "undefined") {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name2, value, propertyInfo, isCustomComponentTag)) {
            return true;
          }
          if (isCustomComponentTag) {
            return false;
          }
          if (propertyInfo !== null) {
            switch (propertyInfo.type) {
              case BOOLEAN:
                return !value;
              case OVERLOADED_BOOLEAN:
                return value === false;
              case NUMERIC:
                return isNaN(value);
              case POSITIVE_NUMERIC:
                return isNaN(value) || value < 1;
            }
          }
          return false;
        }
        function getPropertyInfo(name2) {
          return properties.hasOwnProperty(name2) ? properties[name2] : null;
        }
        function PropertyInfoRecord(name2, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name2;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, RESERVED, false, name2, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name2 = _ref[0], attributeName = _ref[1];
          properties[name2] = new PropertyInfoRecord(name2, STRING, false, attributeName, null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, BOOLEANISH_STRING, false, name2.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, BOOLEANISH_STRING, false, name2, null, false, false);
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, BOOLEAN, false, name2.toLowerCase(), null, false, false);
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, BOOLEAN, true, name2, null, false, false);
        });
        [
          "capture",
          "download"
        ].forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, OVERLOADED_BOOLEAN, false, name2, null, false, false);
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, POSITIVE_NUMERIC, false, name2, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(name2) {
          properties[name2] = new PropertyInfoRecord(name2, NUMERIC, false, name2.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name2 = attributeName.replace(CAMELIZE, capitalize);
          properties[name2] = new PropertyInfoRecord(name2, STRING, false, attributeName, null, false, false);
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name2 = attributeName.replace(CAMELIZE, capitalize);
          properties[name2] = new PropertyInfoRecord(name2, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name2 = attributeName.replace(CAMELIZE, capitalize);
          properties[name2] = new PropertyInfoRecord(name2, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index2;
          var lastIndex = 0;
          for (index2 = match.index; index2 < str.length; index2++) {
            switch (str.charCodeAt(index2)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index2) {
              html += str.substring(lastIndex, index2);
            }
            lastIndex = index2 + 1;
            html += escape;
          }
          return lastIndex !== index2 ? html + str.substring(lastIndex, index2) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        function quoteAttributeValueForBrowser(value) {
          return '"' + escapeTextForBrowser(value) + '"';
        }
        function createMarkupForRoot() {
          return ROOT_ATTRIBUTE_NAME + '=""';
        }
        function createMarkupForProperty(name2, value) {
          var propertyInfo = getPropertyInfo(name2);
          if (name2 !== "style" && shouldIgnoreAttribute(name2, propertyInfo, false)) {
            return "";
          }
          if (shouldRemoveAttribute(name2, value, propertyInfo, false)) {
            return "";
          }
          if (propertyInfo !== null) {
            var attributeName = propertyInfo.attributeName;
            var type = propertyInfo.type;
            if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
              return attributeName + '=""';
            } else {
              if (propertyInfo.sanitizeURL) {
                value = "" + value;
                sanitizeURL(value);
              }
              return attributeName + "=" + quoteAttributeValueForBrowser(value);
            }
          } else if (isAttributeNameSafe(name2)) {
            return name2 + "=" + quoteAttributeValueForBrowser(value);
          }
          return "";
        }
        function createMarkupForCustomAttribute(name2, value) {
          if (!isAttributeNameSafe(name2) || value == null) {
            return "";
          }
          return name2 + "=" + quoteAttributeValueForBrowser(value);
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (!(currentlyRenderingComponent !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
            if (objectIs(nextDeps[i2], prevDeps[i2])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            {
              {
                throw Error("Rendered more hooks than during the previous render");
              }
            }
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          {
            isInHookUserCodeInDev = false;
          }
        }
        function finishHooks(Component, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext(context, observedBits) {
          var threadID = currentPartialRenderer.threadID;
          validateContextBounds(context, threadID);
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return context[threadID];
        }
        function useContext18(context, observedBits) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          var threadID = currentPartialRenderer.threadID;
          validateContextBounds(context, threadID);
          return context[threadID];
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState9(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer(basicStateReducer, initialState);
        }
        function useReducer(reducer, initialArg, init2) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue2 = workInProgressHook.queue;
            var dispatch = queue2.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue2);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue2);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init2 !== void 0 ? init2(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo10(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef14(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect7(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue2, action) {
          if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
            {
              throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            }
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue2);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue2, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback9(callback, deps) {
          return useMemo10(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useDeferredValue(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function useTransition2() {
          resolveCurrentlyRenderingComponent();
          var startTransition = function(callback) {
            callback();
          };
          return [startTransition, false];
        }
        function useOpaqueIdentifier() {
          return (currentPartialRenderer.identifierPrefix || "") + "R:" + (currentPartialRenderer.uniqueID++).toString(36);
        }
        function noop2() {
        }
        var currentPartialRenderer = null;
        function setCurrentPartialRenderer(renderer) {
          currentPartialRenderer = renderer;
        }
        var Dispatcher = {
          readContext,
          useContext: useContext18,
          useMemo: useMemo10,
          useReducer,
          useRef: useRef14,
          useState: useState9,
          useLayoutEffect: useLayoutEffect7,
          useCallback: useCallback9,
          useImperativeHandle: noop2,
          useEffect: noop2,
          useDebugValue: noop2,
          useDeferredValue,
          useTransition: useTransition2,
          useOpaqueIdentifier,
          useMutableSource
        };
        var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        var Namespaces = {
          html: HTML_NAMESPACE,
          mathml: MATH_NAMESPACE,
          svg: SVG_NAMESPACE
        };
        function getIntrinsicNamespace(type) {
          switch (type) {
            case "svg":
              return SVG_NAMESPACE;
            case "math":
              return MATH_NAMESPACE;
            default:
              return HTML_NAMESPACE;
          }
        }
        function getChildNamespace(parentNamespace, type) {
          if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
            return getIntrinsicNamespace(type);
          }
          if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") {
            return HTML_NAMESPACE;
          }
          return parentNamespace;
        }
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        var omittedCloseTags = {
          area: true,
          base: true,
          br: true,
          col: true,
          embed: true,
          hr: true,
          img: true,
          input: true,
          keygen: true,
          link: true,
          meta: true,
          param: true,
          source: true,
          track: true,
          wbr: true
        };
        var voidElementTags = _assign({
          menuitem: true
        }, omittedCloseTags);
        var HTML = "__html";
        function assertValidProps(tag, props) {
          if (!props) {
            return;
          }
          if (voidElementTags[tag]) {
            if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
              {
                throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              }
            }
          }
          if (props.dangerouslySetInnerHTML != null) {
            if (!(props.children == null)) {
              {
                throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              }
            }
            if (!(typeof props.dangerouslySetInnerHTML === "object" && HTML in props.dangerouslySetInnerHTML)) {
              {
                throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
              }
            }
          }
          {
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
          }
          if (!(props.style == null || typeof props.style === "object")) {
            {
              throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
            }
          }
        }
        var isUnitlessNumber = {
          animationIterationCount: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        function dangerousStyleValue(name2, value, isCustomProperty) {
          var isEmpty = value == null || typeof value === "boolean" || value === "";
          if (isEmpty) {
            return "";
          }
          if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name2) && isUnitlessNumber[name2])) {
            return value + "px";
          }
          return ("" + value).trim();
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern = /^ms-/;
        function hyphenateStyleName(name2) {
          return name2.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern$1 = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name2) {
            if (warnedStyleNames.hasOwnProperty(name2) && warnedStyleNames[name2]) {
              return;
            }
            warnedStyleNames[name2] = true;
            error("Unsupported style property %s. Did you mean %s?", name2, camelize(name2.replace(msPattern$1, "ms-")));
          };
          var warnBadVendoredStyleName = function(name2) {
            if (warnedStyleNames.hasOwnProperty(name2) && warnedStyleNames[name2]) {
              return;
            }
            warnedStyleNames[name2] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name2, name2.charAt(0).toUpperCase() + name2.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name2, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name2, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name2, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name2);
          };
          var warnStyleValueIsInfinity = function(name2, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name2);
          };
          warnValidStyle = function(name2, value) {
            if (name2.indexOf("-") > -1) {
              warnHyphenatedStyleName(name2);
            } else if (badVendoredStyleNamePattern.test(name2)) {
              warnBadVendoredStyleName(name2);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name2, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name2, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name2, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var ariaProperties = {
          "aria-current": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
        function validateProperty(tagName, name2) {
          {
            if (hasOwnProperty$1.call(warnedProperties, name2) && warnedProperties[name2]) {
              return true;
            }
            if (rARIACamel.test(name2)) {
              var ariaName = "aria-" + name2.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name2);
                warnedProperties[name2] = true;
                return true;
              }
              if (name2 !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name2, correctName);
                warnedProperties[name2] = true;
                return true;
              }
            }
            if (rARIA.test(name2)) {
              var lowerCasedName = name2.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name2] = true;
                return false;
              }
              if (name2 !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name2, standardName);
                warnedProperties[name2] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var _hasOwnProperty = Object.prototype.hasOwnProperty;
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name2, value, eventRegistry) {
            if (_hasOwnProperty.call(warnedProperties$1, name2) && warnedProperties$1[name2]) {
              return true;
            }
            var lowerCasedName = name2.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name2] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name2)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name2, registrationName);
                warnedProperties$1[name2] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name2)) {
                error("Unknown event handler property `%s`. It will be ignored.", name2);
                warnedProperties$1[name2] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name2)) {
              if (INVALID_EVENT_NAME_REGEX.test(name2)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name2);
              }
              warnedProperties$1[name2] = true;
              return true;
            }
            if (rARIA$1.test(name2) || rARIACamel$1.test(name2)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name2] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name2] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name2] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name2);
              warnedProperties$1[name2] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name2);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name2) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name2, standardName);
                warnedProperties$1[name2] = true;
                return true;
              }
            } else if (!isReserved && name2 !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name2, lowerCasedName);
              warnedProperties$1[name2] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name2, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name2, name2, value, name2);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name2, name2, value, name2, name2, name2);
              }
              warnedProperties$1[name2] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name2, value, propertyInfo, false)) {
              warnedProperties$1[name2] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name2, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name2, value);
              warnedProperties$1[name2] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var toArray = React10.Children.toArray;
        var currentDebugStacks = [];
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1;
        var prevGetCurrentStackImpl = null;
        var getCurrentServerStackImpl = function() {
          return "";
        };
        var describeStackFrame = function(element) {
          return "";
        };
        var validatePropertiesInDevelopment = function(type, props) {
        };
        var pushCurrentDebugStack = function(stack) {
        };
        var pushElementToDebugStack = function(element) {
        };
        var popCurrentDebugStack = function() {
        };
        var hasWarnedAboutUsingContextAsConsumer = false;
        {
          ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          validatePropertiesInDevelopment = function(type, props) {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
          };
          describeStackFrame = function(element) {
            return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
          };
          pushCurrentDebugStack = function(stack) {
            currentDebugStacks.push(stack);
            if (currentDebugStacks.length === 1) {
              prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
              ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
            }
          };
          pushElementToDebugStack = function(element) {
            var stack = currentDebugStacks[currentDebugStacks.length - 1];
            var frame2 = stack[stack.length - 1];
            frame2.debugElementStack.push(element);
          };
          popCurrentDebugStack = function() {
            currentDebugStacks.pop();
            if (currentDebugStacks.length === 0) {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
              prevGetCurrentStackImpl = null;
            }
          };
          getCurrentServerStackImpl = function() {
            if (currentDebugStacks.length === 0) {
              return "";
            }
            var frames = currentDebugStacks[currentDebugStacks.length - 1];
            var stack = "";
            for (var i2 = frames.length - 1; i2 >= 0; i2--) {
              var frame2 = frames[i2];
              var debugElementStack = frame2.debugElementStack;
              for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
                stack += describeStackFrame(debugElementStack[ii]);
              }
            }
            return stack;
          };
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUndefinedDerivedState = {};
        var didWarnAboutUninitializedState = {};
        var valuePropNames = ["value", "defaultValue"];
        var newlineEatingTags = {
          listing: true,
          pre: true,
          textarea: true
        };
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = {};
        function validateDangerousTag(tag) {
          if (!validatedTagCache.hasOwnProperty(tag)) {
            if (!VALID_TAG_REGEX.test(tag)) {
              {
                throw Error("Invalid tag: " + tag);
              }
            }
            validatedTagCache[tag] = true;
          }
        }
        var styleNameCache = {};
        var processStyleName = function(styleName) {
          if (styleNameCache.hasOwnProperty(styleName)) {
            return styleNameCache[styleName];
          }
          var result = hyphenateStyleName(styleName);
          styleNameCache[styleName] = result;
          return result;
        };
        function createMarkupForStyles(styles) {
          var serialized = "";
          var delimiter = "";
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var isCustomProperty = styleName.indexOf("--") === 0;
            var styleValue = styles[styleName];
            {
              if (!isCustomProperty) {
                warnValidStyle$1(styleName, styleValue);
              }
            }
            if (styleValue != null) {
              serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ":";
              serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
              delimiter = ";";
            }
          }
          return serialized || null;
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentName(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        function shouldConstruct$1(Component) {
          return Component.prototype && Component.prototype.isReactComponent;
        }
        function getNonChildrenInnerMarkup(props) {
          var innerHTML = props.dangerouslySetInnerHTML;
          if (innerHTML != null) {
            if (innerHTML.__html != null) {
              return innerHTML.__html;
            }
          } else {
            var content = props.children;
            if (typeof content === "string" || typeof content === "number") {
              return escapeTextForBrowser(content);
            }
          }
          return null;
        }
        function flattenTopLevelChildren(children) {
          if (!React10.isValidElement(children)) {
            return toArray(children);
          }
          var element = children;
          if (element.type !== REACT_FRAGMENT_TYPE) {
            return [element];
          }
          var fragmentChildren = element.props.children;
          if (!React10.isValidElement(fragmentChildren)) {
            return toArray(fragmentChildren);
          }
          var fragmentChildElement = fragmentChildren;
          return [fragmentChildElement];
        }
        function flattenOptionChildren(children) {
          if (children === void 0 || children === null) {
            return children;
          }
          var content = "";
          React10.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Only strings and numbers are supported as <option> children.");
              }
            }
          });
          return content;
        }
        var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
        var STYLE = "style";
        var RESERVED_PROPS = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null
        };
        function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
          var ret = "<" + tagVerbatim;
          var isCustomComponent$1 = isCustomComponent(tagLowercase, props);
          for (var propKey in props) {
            if (!hasOwnProperty$2.call(props, propKey)) {
              continue;
            }
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            if (propKey === STYLE) {
              propValue = createMarkupForStyles(propValue);
            }
            var markup = null;
            if (isCustomComponent$1) {
              if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
                markup = createMarkupForCustomAttribute(propKey, propValue);
              }
            } else {
              markup = createMarkupForProperty(propKey, propValue);
            }
            if (markup) {
              ret += " " + markup;
            }
          }
          if (makeStaticMarkup) {
            return ret;
          }
          if (isRootElement) {
            ret += " " + createMarkupForRoot();
          }
          return ret;
        }
        function validateRenderResult(child, type) {
          if (child === void 0) {
            {
              {
                throw Error((getComponentName(type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
              }
            }
          }
        }
        function resolve(child, context, threadID) {
          while (React10.isValidElement(child)) {
            var element = child;
            var Component = element.type;
            {
              pushElementToDebugStack(element);
            }
            if (typeof Component !== "function") {
              break;
            }
            processChild(element, Component);
          }
          function processChild(element2, Component2) {
            var isClass = shouldConstruct$1(Component2);
            var publicContext = processContext(Component2, context, threadID, isClass);
            var queue2 = [];
            var replace = false;
            var updater = {
              isMounted: function(publicInstance) {
                return false;
              },
              enqueueForceUpdate: function(publicInstance) {
                if (queue2 === null) {
                  warnNoop(publicInstance, "forceUpdate");
                  return null;
                }
              },
              enqueueReplaceState: function(publicInstance, completeState) {
                replace = true;
                queue2 = [completeState];
              },
              enqueueSetState: function(publicInstance, currentPartialState) {
                if (queue2 === null) {
                  warnNoop(publicInstance, "setState");
                  return null;
                }
                queue2.push(currentPartialState);
              }
            };
            var inst;
            if (isClass) {
              inst = new Component2(element2.props, publicContext, updater);
              if (typeof Component2.getDerivedStateFromProps === "function") {
                {
                  if (inst.state === null || inst.state === void 0) {
                    var componentName = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutUninitializedState[componentName]) {
                      error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, inst.state === null ? "null" : "undefined", componentName);
                      didWarnAboutUninitializedState[componentName] = true;
                    }
                  }
                }
                var partialState = Component2.getDerivedStateFromProps.call(null, element2.props, inst.state);
                {
                  if (partialState === void 0) {
                    var _componentName = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutUndefinedDerivedState[_componentName]) {
                      error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", _componentName);
                      didWarnAboutUndefinedDerivedState[_componentName] = true;
                    }
                  }
                }
                if (partialState != null) {
                  inst.state = _assign({}, inst.state, partialState);
                }
              }
            } else {
              {
                if (Component2.prototype && typeof Component2.prototype.render === "function") {
                  var _componentName2 = getComponentName(Component2) || "Unknown";
                  if (!didWarnAboutBadClass[_componentName2]) {
                    error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", _componentName2, _componentName2);
                    didWarnAboutBadClass[_componentName2] = true;
                  }
                }
              }
              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              inst = Component2(element2.props, publicContext, updater);
              inst = finishHooks(Component2, element2.props, inst, publicContext);
              {
                if (inst != null && inst.render != null) {
                  var _componentName3 = getComponentName(Component2) || "Unknown";
                  if (!didWarnAboutModulePatternComponent[_componentName3]) {
                    error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName3, _componentName3, _componentName3);
                    didWarnAboutModulePatternComponent[_componentName3] = true;
                  }
                }
              }
              if (inst == null || inst.render == null) {
                child = inst;
                validateRenderResult(child, Component2);
                return;
              }
            }
            inst.props = element2.props;
            inst.context = publicContext;
            inst.updater = updater;
            var initialState = inst.state;
            if (initialState === void 0) {
              inst.state = initialState = null;
            }
            if (typeof inst.UNSAFE_componentWillMount === "function" || typeof inst.componentWillMount === "function") {
              if (typeof inst.componentWillMount === "function") {
                {
                  if (inst.componentWillMount.__suppressDeprecationWarning !== true) {
                    var _componentName4 = getComponentName(Component2) || "Unknown";
                    if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
                      warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", _componentName4);
                      didWarnAboutDeprecatedWillMount[_componentName4] = true;
                    }
                  }
                }
                if (typeof Component2.getDerivedStateFromProps !== "function") {
                  inst.componentWillMount();
                }
              }
              if (typeof inst.UNSAFE_componentWillMount === "function" && typeof Component2.getDerivedStateFromProps !== "function") {
                inst.UNSAFE_componentWillMount();
              }
              if (queue2.length) {
                var oldQueue = queue2;
                var oldReplace = replace;
                queue2 = null;
                replace = false;
                if (oldReplace && oldQueue.length === 1) {
                  inst.state = oldQueue[0];
                } else {
                  var nextState = oldReplace ? oldQueue[0] : inst.state;
                  var dontMutate = true;
                  for (var i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
                    var partial = oldQueue[i2];
                    var _partialState = typeof partial === "function" ? partial.call(inst, nextState, element2.props, publicContext) : partial;
                    if (_partialState != null) {
                      if (dontMutate) {
                        dontMutate = false;
                        nextState = _assign({}, nextState, _partialState);
                      } else {
                        _assign(nextState, _partialState);
                      }
                    }
                  }
                  inst.state = nextState;
                }
              } else {
                queue2 = null;
              }
            }
            child = inst.render();
            {
              if (child === void 0 && inst.render._isMockFunction) {
                child = null;
              }
            }
            validateRenderResult(child, Component2);
            var childContext;
            {
              if (typeof inst.getChildContext === "function") {
                var _childContextTypes = Component2.childContextTypes;
                if (typeof _childContextTypes === "object") {
                  childContext = inst.getChildContext();
                  for (var contextKey in childContext) {
                    if (!(contextKey in _childContextTypes)) {
                      {
                        throw Error((getComponentName(Component2) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
                      }
                    }
                  }
                } else {
                  {
                    error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", getComponentName(Component2) || "Unknown");
                  }
                }
              }
              if (childContext) {
                context = _assign({}, context, childContext);
              }
            }
          }
          return {
            child,
            context
          };
        }
        var ReactDOMServerRenderer = /* @__PURE__ */ function() {
          function ReactDOMServerRenderer2(children, makeStaticMarkup, options) {
            var flatChildren = flattenTopLevelChildren(children);
            var topFrame = {
              type: null,
              domNamespace: Namespaces.html,
              children: flatChildren,
              childIndex: 0,
              context: emptyObject,
              footer: ""
            };
            {
              topFrame.debugElementStack = [];
            }
            this.threadID = allocThreadID();
            this.stack = [topFrame];
            this.exhausted = false;
            this.currentSelectValue = null;
            this.previousWasTextNode = false;
            this.makeStaticMarkup = makeStaticMarkup;
            this.suspenseDepth = 0;
            this.contextIndex = -1;
            this.contextStack = [];
            this.contextValueStack = [];
            this.uniqueID = 0;
            this.identifierPrefix = options && options.identifierPrefix || "";
            {
              this.contextProviderStack = [];
            }
          }
          var _proto = ReactDOMServerRenderer2.prototype;
          _proto.destroy = function destroy() {
            if (!this.exhausted) {
              this.exhausted = true;
              this.clearProviders();
              freeThreadID(this.threadID);
            }
          };
          _proto.pushProvider = function pushProvider(provider) {
            var index2 = ++this.contextIndex;
            var context = provider.type._context;
            var threadID = this.threadID;
            validateContextBounds(context, threadID);
            var previousValue = context[threadID];
            this.contextStack[index2] = context;
            this.contextValueStack[index2] = previousValue;
            {
              this.contextProviderStack[index2] = provider;
            }
            context[threadID] = provider.props.value;
          };
          _proto.popProvider = function popProvider(provider) {
            var index2 = this.contextIndex;
            {
              if (index2 < 0 || provider !== this.contextProviderStack[index2]) {
                error("Unexpected pop.");
              }
            }
            var context = this.contextStack[index2];
            var previousValue = this.contextValueStack[index2];
            this.contextStack[index2] = null;
            this.contextValueStack[index2] = null;
            {
              this.contextProviderStack[index2] = null;
            }
            this.contextIndex--;
            context[this.threadID] = previousValue;
          };
          _proto.clearProviders = function clearProviders() {
            for (var index2 = this.contextIndex; index2 >= 0; index2--) {
              var context = this.contextStack[index2];
              var previousValue = this.contextValueStack[index2];
              context[this.threadID] = previousValue;
            }
          };
          _proto.read = function read2(bytes) {
            if (this.exhausted) {
              return null;
            }
            var prevPartialRenderer = currentPartialRenderer;
            setCurrentPartialRenderer(this);
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = Dispatcher;
            try {
              var out = [""];
              var suspended = false;
              while (out[0].length < bytes) {
                if (this.stack.length === 0) {
                  this.exhausted = true;
                  freeThreadID(this.threadID);
                  break;
                }
                var frame2 = this.stack[this.stack.length - 1];
                if (suspended || frame2.childIndex >= frame2.children.length) {
                  var footer = frame2.footer;
                  if (footer !== "") {
                    this.previousWasTextNode = false;
                  }
                  this.stack.pop();
                  if (frame2.type === "select") {
                    this.currentSelectValue = null;
                  } else if (frame2.type != null && frame2.type.type != null && frame2.type.type.$$typeof === REACT_PROVIDER_TYPE) {
                    var provider = frame2.type;
                    this.popProvider(provider);
                  } else if (frame2.type === REACT_SUSPENSE_TYPE) {
                    this.suspenseDepth--;
                    var buffered = out.pop();
                    if (suspended) {
                      suspended = false;
                      var fallbackFrame = frame2.fallbackFrame;
                      if (!fallbackFrame) {
                        {
                          throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : formatProdErrorMessage(303));
                        }
                      }
                      this.stack.push(fallbackFrame);
                      out[this.suspenseDepth] += "<!--$!-->";
                      continue;
                    } else {
                      out[this.suspenseDepth] += buffered;
                    }
                  }
                  out[this.suspenseDepth] += footer;
                  continue;
                }
                var child = frame2.children[frame2.childIndex++];
                var outBuffer = "";
                if (true) {
                  pushCurrentDebugStack(this.stack);
                  frame2.debugElementStack.length = 0;
                }
                try {
                  outBuffer += this.render(child, frame2.context, frame2.domNamespace);
                } catch (err) {
                  if (err != null && typeof err.then === "function") {
                    if (enableSuspenseServerRenderer) {
                      if (!(this.suspenseDepth > 0)) {
                        {
                          throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : formatProdErrorMessage(342));
                        }
                      }
                      suspended = true;
                    } else {
                      if (true) {
                        {
                          throw Error(true ? "ReactDOMServer does not yet support Suspense." : formatProdErrorMessage(294));
                        }
                      }
                    }
                  } else {
                    throw err;
                  }
                } finally {
                  if (true) {
                    popCurrentDebugStack();
                  }
                }
                if (out.length <= this.suspenseDepth) {
                  out.push("");
                }
                out[this.suspenseDepth] += outBuffer;
              }
              return out[0];
            } finally {
              ReactCurrentDispatcher$1.current = prevDispatcher;
              setCurrentPartialRenderer(prevPartialRenderer);
              resetHooksState();
            }
          };
          _proto.render = function render(child, context, parentNamespace) {
            if (typeof child === "string" || typeof child === "number") {
              var text = "" + child;
              if (text === "") {
                return "";
              }
              if (this.makeStaticMarkup) {
                return escapeTextForBrowser(text);
              }
              if (this.previousWasTextNode) {
                return "<!-- -->" + escapeTextForBrowser(text);
              }
              this.previousWasTextNode = true;
              return escapeTextForBrowser(text);
            } else {
              var nextChild;
              var _resolve = resolve(child, context, this.threadID);
              nextChild = _resolve.child;
              context = _resolve.context;
              if (nextChild === null || nextChild === false) {
                return "";
              } else if (!React10.isValidElement(nextChild)) {
                if (nextChild != null && nextChild.$$typeof != null) {
                  var $$typeof = nextChild.$$typeof;
                  if (!($$typeof !== REACT_PORTAL_TYPE)) {
                    {
                      throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                    }
                  }
                  {
                    {
                      throw Error("Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue.");
                    }
                  }
                }
                var nextChildren = toArray(nextChild);
                var frame2 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: nextChildren,
                  childIndex: 0,
                  context,
                  footer: ""
                };
                {
                  frame2.debugElementStack = [];
                }
                this.stack.push(frame2);
                return "";
              }
              var nextElement = nextChild;
              var elementType = nextElement.type;
              if (typeof elementType === "string") {
                return this.renderDOM(nextElement, context, parentNamespace);
              }
              switch (elementType) {
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_DEBUG_TRACING_MODE_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                case REACT_FRAGMENT_TYPE: {
                  var _nextChildren = toArray(nextChild.props.children);
                  var _frame = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  {
                    _frame.debugElementStack = [];
                  }
                  this.stack.push(_frame);
                  return "";
                }
                case REACT_SUSPENSE_TYPE: {
                  {
                    {
                      {
                        throw Error("ReactDOMServer does not yet support Suspense.");
                      }
                    }
                  }
                }
                case REACT_SCOPE_TYPE: {
                  {
                    {
                      throw Error("ReactDOMServer does not yet support scope components.");
                    }
                  }
                }
              }
              if (typeof elementType === "object" && elementType !== null) {
                switch (elementType.$$typeof) {
                  case REACT_FORWARD_REF_TYPE: {
                    var element = nextChild;
                    var _nextChildren5;
                    var componentIdentity = {};
                    prepareToUseHooks(componentIdentity);
                    _nextChildren5 = elementType.render(element.props, element.ref);
                    _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
                    _nextChildren5 = toArray(_nextChildren5);
                    var _frame5 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren5,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame5.debugElementStack = [];
                    }
                    this.stack.push(_frame5);
                    return "";
                  }
                  case REACT_MEMO_TYPE: {
                    var _element = nextChild;
                    var _nextChildren6 = [React10.createElement(elementType.type, _assign({
                      ref: _element.ref
                    }, _element.props))];
                    var _frame6 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren6,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame6.debugElementStack = [];
                    }
                    this.stack.push(_frame6);
                    return "";
                  }
                  case REACT_PROVIDER_TYPE: {
                    var provider = nextChild;
                    var nextProps = provider.props;
                    var _nextChildren7 = toArray(nextProps.children);
                    var _frame7 = {
                      type: provider,
                      domNamespace: parentNamespace,
                      children: _nextChildren7,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame7.debugElementStack = [];
                    }
                    this.pushProvider(provider);
                    this.stack.push(_frame7);
                    return "";
                  }
                  case REACT_CONTEXT_TYPE: {
                    var reactContext = nextChild.type;
                    {
                      if (reactContext._context === void 0) {
                        if (reactContext !== reactContext.Consumer) {
                          if (!hasWarnedAboutUsingContextAsConsumer) {
                            hasWarnedAboutUsingContextAsConsumer = true;
                            error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                          }
                        }
                      } else {
                        reactContext = reactContext._context;
                      }
                    }
                    var _nextProps = nextChild.props;
                    var threadID = this.threadID;
                    validateContextBounds(reactContext, threadID);
                    var nextValue = reactContext[threadID];
                    var _nextChildren8 = toArray(_nextProps.children(nextValue));
                    var _frame8 = {
                      type: nextChild,
                      domNamespace: parentNamespace,
                      children: _nextChildren8,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame8.debugElementStack = [];
                    }
                    this.stack.push(_frame8);
                    return "";
                  }
                  case REACT_FUNDAMENTAL_TYPE: {
                    {
                      {
                        throw Error("ReactDOMServer does not yet support the fundamental API.");
                      }
                    }
                  }
                  case REACT_LAZY_TYPE: {
                    var _element2 = nextChild;
                    var lazyComponent = nextChild.type;
                    var payload = lazyComponent._payload;
                    var init2 = lazyComponent._init;
                    var result = init2(payload);
                    var _nextChildren10 = [React10.createElement(result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame10 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren10,
                      childIndex: 0,
                      context,
                      footer: ""
                    };
                    {
                      _frame10.debugElementStack = [];
                    }
                    this.stack.push(_frame10);
                    return "";
                  }
                }
              }
              var info = "";
              {
                var owner = nextElement._owner;
                if (elementType === void 0 || typeof elementType === "object" && elementType !== null && Object.keys(elementType).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var ownerName = owner ? getComponentName(owner) : null;
                if (ownerName) {
                  info += "\n\nCheck the render method of `" + ownerName + "`.";
                }
              }
              {
                {
                  throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info);
                }
              }
            }
          };
          _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
            var tag = element.type.toLowerCase();
            var namespace = parentNamespace;
            if (parentNamespace === Namespaces.html) {
              namespace = getIntrinsicNamespace(tag);
            }
            {
              if (namespace === Namespaces.html) {
                if (tag !== element.type) {
                  error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", element.type);
                }
              }
            }
            validateDangerousTag(tag);
            var props = element.props;
            if (tag === "input") {
              {
                checkControlledValueProps("input", props);
                if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
                  error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
                  didWarnDefaultChecked = true;
                }
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
                  error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
                  didWarnDefaultInputValue = true;
                }
              }
              props = _assign({
                type: void 0
              }, props, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: props.value != null ? props.value : props.defaultValue,
                checked: props.checked != null ? props.checked : props.defaultChecked
              });
            } else if (tag === "textarea") {
              {
                checkControlledValueProps("textarea", props);
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
                  error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
                  didWarnDefaultTextareaValue = true;
                }
              }
              var initialValue = props.value;
              if (initialValue == null) {
                var defaultValue = props.defaultValue;
                var textareaChildren = props.children;
                if (textareaChildren != null) {
                  {
                    error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
                  }
                  if (!(defaultValue == null)) {
                    {
                      throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    }
                  }
                  if (Array.isArray(textareaChildren)) {
                    if (!(textareaChildren.length <= 1)) {
                      {
                        throw Error("<textarea> can only have at most one child.");
                      }
                    }
                    textareaChildren = textareaChildren[0];
                  }
                  defaultValue = "" + textareaChildren;
                }
                if (defaultValue == null) {
                  defaultValue = "";
                }
                initialValue = defaultValue;
              }
              props = _assign({}, props, {
                value: void 0,
                children: "" + initialValue
              });
            } else if (tag === "select") {
              {
                checkControlledValueProps("select", props);
                for (var i2 = 0; i2 < valuePropNames.length; i2++) {
                  var propName = valuePropNames[i2];
                  if (props[propName] == null) {
                    continue;
                  }
                  var isArray3 = Array.isArray(props[propName]);
                  if (props.multiple && !isArray3) {
                    error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
                  } else if (!props.multiple && isArray3) {
                    error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
                  }
                }
                if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
                  error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
                  didWarnDefaultSelectValue = true;
                }
              }
              this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
              props = _assign({}, props, {
                value: void 0
              });
            } else if (tag === "option") {
              var selected = null;
              var selectValue = this.currentSelectValue;
              var optionChildren = flattenOptionChildren(props.children);
              if (selectValue != null) {
                var value;
                if (props.value != null) {
                  value = props.value + "";
                } else {
                  value = optionChildren;
                }
                selected = false;
                if (Array.isArray(selectValue)) {
                  for (var j = 0; j < selectValue.length; j++) {
                    if ("" + selectValue[j] === value) {
                      selected = true;
                      break;
                    }
                  }
                } else {
                  selected = "" + selectValue === value;
                }
                props = _assign({
                  selected: void 0,
                  children: void 0
                }, props, {
                  selected,
                  children: optionChildren
                });
              }
            }
            {
              validatePropertiesInDevelopment(tag, props);
            }
            assertValidProps(tag, props);
            var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
            var footer = "";
            if (omittedCloseTags.hasOwnProperty(tag)) {
              out += "/>";
            } else {
              out += ">";
              footer = "</" + element.type + ">";
            }
            var children;
            var innerMarkup = getNonChildrenInnerMarkup(props);
            if (innerMarkup != null) {
              children = [];
              if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === "\n") {
                out += "\n";
              }
              out += innerMarkup;
            } else {
              children = toArray(props.children);
            }
            var frame2 = {
              domNamespace: getChildNamespace(parentNamespace, element.type),
              type: tag,
              children,
              childIndex: 0,
              context,
              footer
            };
            {
              frame2.debugElementStack = [];
            }
            this.stack.push(frame2);
            this.previousWasTextNode = false;
            return out;
          };
          return ReactDOMServerRenderer2;
        }();
        function renderToString2(element, options) {
          var renderer = new ReactDOMServerRenderer(element, false, options);
          try {
            var markup = renderer.read(Infinity);
            return markup;
          } finally {
            renderer.destroy();
          }
        }
        function renderToStaticMarkup(element, options) {
          var renderer = new ReactDOMServerRenderer(element, true, options);
          try {
            var markup = renderer.read(Infinity);
            return markup;
          } finally {
            renderer.destroy();
          }
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        var ReactMarkupReadableStream = /* @__PURE__ */ function(_Readable) {
          _inheritsLoose(ReactMarkupReadableStream2, _Readable);
          function ReactMarkupReadableStream2(element, makeStaticMarkup, options) {
            var _this;
            _this = _Readable.call(this, {}) || this;
            _this.partialRenderer = new ReactDOMServerRenderer(element, makeStaticMarkup, options);
            return _this;
          }
          var _proto = ReactMarkupReadableStream2.prototype;
          _proto._destroy = function _destroy(err, callback) {
            this.partialRenderer.destroy();
            callback(err);
          };
          _proto._read = function _read(size) {
            try {
              this.push(this.partialRenderer.read(size));
            } catch (err) {
              this.destroy(err);
            }
          };
          return ReactMarkupReadableStream2;
        }(stream.Readable);
        function renderToNodeStream(element, options) {
          return new ReactMarkupReadableStream(element, false, options);
        }
        function renderToStaticNodeStream(element, options) {
          return new ReactMarkupReadableStream(element, true, options);
        }
        exports.renderToNodeStream = renderToNodeStream;
        exports.renderToStaticMarkup = renderToStaticMarkup;
        exports.renderToStaticNodeStream = renderToStaticNodeStream;
        exports.renderToString = renderToString2;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/react-dom/server.node.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_dom_server_node_development();
    }
  }
});

// node_modules/react-dom/server.js
var require_server = __commonJS({
  "node_modules/react-dom/server.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = require_server_node();
  }
});

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    init_react();
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id2, v) {
          return exports2[id2] = previous ? previous(id2, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d[p] = b2[p];
      };
      __extends2 = function(d, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __spreadArray2 = function(to, from2, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from2.length, ar; i < l; i++) {
            if (ar || !(i in from2)) {
              if (!ar)
                ar = Array.prototype.slice.call(from2, 0, i);
              ar[i] = from2[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from2));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume2(n, v);
              });
            };
        }
        function resume2(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume2("next", value);
        }
        function reject(value) {
          resume2("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume2(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  }
});

// node_modules/@emotion/memoize/dist/memoize.esm.js
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_esm_default;
var init_memoize_esm = __esm({
  "node_modules/@emotion/memoize/dist/memoize.esm.js"() {
    init_react();
    memoize_esm_default = memoize;
  }
});

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js
var is_prop_valid_esm_exports = {};
__export(is_prop_valid_esm_exports, {
  default: () => is_prop_valid_esm_default
});
var reactPropsRegex, index, is_prop_valid_esm_default;
var init_is_prop_valid_esm = __esm({
  "node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js"() {
    init_react();
    init_memoize_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_esm_default(function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    is_prop_valid_esm_default = index;
  }
});

// node_modules/image-layout/layouts/fixed-partition.js
var require_fixed_partition = __commonJS({
  "node_modules/image-layout/layouts/fixed-partition.js"(exports, module) {
    init_react();
    module.exports = function(elements, options) {
      var i, j, k, n, height, positions2 = [], elementCount;
      var spacing = options.spacing || 0;
      var containerWidth = options.containerWidth;
      var idealHeight = options.idealElementHeight || containerWidth / 3;
      if (!containerWidth)
        throw new Error("Invalid container width");
      var aspect;
      var aspects = [];
      var aspects100 = [];
      for (i = 0, n = elements.length; i < n; i++) {
        aspect = elements[i].width / elements[i].height;
        aspects.push(aspect);
        aspects100.push(Math.round(aspect * 100));
      }
      var summedWidth = 0;
      for (i = 0, n = aspects.length; i < n; i++) {
        summedWidth += aspects[i] * idealHeight;
      }
      var rowsNeeded = Math.round(summedWidth / containerWidth);
      if (rowsNeeded < 1) {
        var xSum = 0, width;
        elementCount = elements.length;
        var padLeft = 0;
        if (options.align === "center") {
          var spaceNeeded = (elementCount - 1) * spacing;
          for (var i = 0; i < elementCount; i++) {
            spaceNeeded += Math.round(idealHeight * aspects[i]) - spacing * (elementCount - 1) / elementCount;
          }
          padLeft = Math.floor((containerWidth - spaceNeeded) / 2);
        }
        for (var i = 0; i < elementCount; i++) {
          width = Math.round(idealHeight * aspects[i]) - spacing * (elementCount - 1) / elementCount;
          positions2.push({
            y: 0,
            x: padLeft + xSum,
            width,
            height: idealHeight
          });
          xSum += width;
          if (i !== n - 1) {
            xSum += spacing;
          }
        }
        ySum = idealHeight;
      } else {
        var partitions = linear_partition(aspects100, rowsNeeded);
        var index2 = 0;
        var ySum = 0, xSum;
        for (i = 0, n = partitions.length; i < n; i++) {
          var element_index = index2;
          var summedRatios = 0;
          for (j = 0, k = partitions[i].length; j < k; j++) {
            summedRatios += aspects[element_index + j];
            index2++;
          }
          xSum = 0;
          height = Math.round(containerWidth / summedRatios);
          elementCount = partitions[i].length;
          for (j = 0; j < elementCount; j++) {
            width = Math.round((containerWidth - (elementCount - 1) * spacing) / summedRatios * aspects[element_index + j]);
            positions2.push({
              y: ySum,
              x: xSum,
              width,
              height
            });
            xSum += width;
            if (j !== elementCount - 1) {
              xSum += spacing;
            }
          }
          ySum += height;
          if (i !== n - 1) {
            ySum += spacing;
          }
        }
      }
      return {
        width: containerWidth,
        height: ySum,
        positions: positions2
      };
    };
    var linear_partition = function(seq, k) {
      var ans, i, j, m, n, solution, table, x, y, _i, _j, _k, _l;
      var _m, _nn;
      n = seq.length;
      if (k <= 0) {
        return [];
      }
      if (k > n) {
        return seq.map(function(x2) {
          return [x2];
        });
      }
      table = function() {
        var _i2, _results;
        _results = [];
        for (y = _i2 = 0; 0 <= n ? _i2 < n : _i2 > n; y = 0 <= n ? ++_i2 : --_i2) {
          _results.push(function() {
            var _j2, _results1;
            _results1 = [];
            for (x = _j2 = 0; 0 <= k ? _j2 < k : _j2 > k; x = 0 <= k ? ++_j2 : --_j2) {
              _results1.push(0);
            }
            return _results1;
          }());
        }
        return _results;
      }();
      solution = function() {
        var _i2, _ref, _results;
        _results = [];
        for (y = _i2 = 0, _ref = n - 1; 0 <= _ref ? _i2 < _ref : _i2 > _ref; y = 0 <= _ref ? ++_i2 : --_i2) {
          _results.push(function() {
            var _j2, _ref1, _results1;
            _results1 = [];
            for (x = _j2 = 0, _ref1 = k - 1; 0 <= _ref1 ? _j2 < _ref1 : _j2 > _ref1; x = 0 <= _ref1 ? ++_j2 : --_j2) {
              _results1.push(0);
            }
            return _results1;
          }());
        }
        return _results;
      }();
      for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
        table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
      }
      for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
        table[0][j] = seq[0];
      }
      for (i = _k = 1; 1 <= n ? _k < n : _k > n; i = 1 <= n ? ++_k : --_k) {
        for (j = _l = 1; 1 <= k ? _l < k : _l > k; j = 1 <= k ? ++_l : --_l) {
          m = [];
          for (x = _m = 0; 0 <= i ? _m < i : _m > i; x = 0 <= i ? ++_m : --_m) {
            m.push([Math.max(table[x][j - 1], table[i][0] - table[x][0]), x]);
          }
          var minValue, minIndex = false;
          for (_m = 0, _nn = m.length; _m < _nn; _m++) {
            if (_m === 0 || m[_m][0] < minValue) {
              minValue = m[_m][0];
              minIndex = _m;
            }
          }
          m = m[minIndex];
          table[i][j] = m[0];
          solution[i - 1][j - 1] = m[1];
        }
      }
      n = n - 1;
      k = k - 2;
      ans = [];
      while (k >= 0) {
        ans = [
          function() {
            var _m2, _ref, _ref1, _results;
            _results = [];
            for (i = _m2 = _ref = solution[n - 1][k] + 1, _ref1 = n + 1; _ref <= _ref1 ? _m2 < _ref1 : _m2 > _ref1; i = _ref <= _ref1 ? ++_m2 : --_m2) {
              _results.push(seq[i]);
            }
            return _results;
          }()
        ].concat(ans);
        n = solution[n - 1][k];
        k = k - 1;
        if (n === 0)
          break;
      }
      return [
        function() {
          var _m2, _ref, _results;
          _results = [];
          for (i = _m2 = 0, _ref = n + 1; 0 <= _ref ? _m2 < _ref : _m2 > _ref; i = 0 <= _ref ? ++_m2 : --_m2) {
            _results.push(seq[i]);
          }
          return _results;
        }()
      ].concat(ans);
    };
  }
});

// node_modules/image-layout/layouts/fixed-columns.js
var require_fixed_columns = __commonJS({
  "node_modules/image-layout/layouts/fixed-columns.js"(exports, module) {
    init_react();
    module.exports = function(elements, options) {
      var i, j, l, n, k, limit, i_column, col, colMin, src_width, src_height, dst_width, dst_height, aspect;
      var spacing = options.spacing || 0;
      var containerWidth = options.containerWidth;
      if (!containerWidth)
        throw new Error("Invalid container width");
      var columnCount = options.columnCount || 3;
      var columnWidth = Math.round((containerWidth - (columnCount - 1) * spacing) / columnCount);
      var maxSpan = options.maxSpan || 3;
      var positions2 = [];
      var cols = [];
      for (i = 0; i < columnCount; i++) {
        cols.push(0);
      }
      for (i = 0, n = elements.length; i < n; i++) {
        src_width = elements[i].width;
        src_height = elements[i].height;
        aspect = src_width / src_height;
        dst_width = columnWidth;
        dst_height = Math.round(dst_width / aspect);
        colMin = false;
        for (i_column = 0, k = columnCount; i_column < k; i_column++) {
          if (colMin === false || cols[i_column] < colMin) {
            colMin = cols[i_column];
            col = i_column;
          }
        }
        var y = cols[col];
        var adj = y !== 0 ? spacing : 0;
        y += adj;
        cols[col] += dst_height + adj;
        positions2.push({
          x: col * columnWidth + col * spacing,
          y,
          width: dst_width,
          height: dst_height
        });
      }
      return {
        width: containerWidth,
        height: Math.max.apply(Math, cols),
        positions: positions2
      };
    };
  }
});

// node_modules/image-layout/index.js
var require_image_layout = __commonJS({
  "node_modules/image-layout/index.js"(exports, module) {
    init_react();
    module.exports.fixed_partition = require_fixed_partition();
    module.exports.fixed_columns = require_fixed_columns();
  }
});

// server.js
init_react();

// node_modules/@remix-run/cloudflare-pages/esm/index.js
init_react();

// node_modules/@remix-run/cloudflare-pages/esm/worker.js
init_react();
var import_cloudflare = __toESM(require_cloudflare());
function createRequestHandler2({
  build,
  getLoadContext,
  mode
}) {
  let handleRequest3 = (0, import_cloudflare.createRequestHandler)(build, mode);
  return (context) => {
    let loadContext = typeof getLoadContext === "function" ? getLoadContext(context) : void 0;
    return handleRequest3(context.request, loadContext);
  };
}
function createPagesFunctionHandler({
  build,
  getLoadContext,
  mode
}) {
  let handleRequest3 = createRequestHandler2({
    build,
    getLoadContext,
    mode
  });
  let handleFetch = async (context) => {
    let response;
    context.request.headers.delete("if-none-match");
    try {
      response = await context.env.ASSETS.fetch(context.request.url, context.request.clone());
      response = response && response.status >= 200 && response.status < 400 ? new Response(response.body, response) : void 0;
    } catch {
    }
    if (!response) {
      response = await handleRequest3(context);
    }
    return response;
  };
  return async (context) => {
    try {
      return await handleFetch(context);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        return new Response(e.message || e.toString(), {
          status: 500
        });
      }
      return new Response("Internal Error", {
        status: 500
      });
    }
  };
}

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();

// node_modules/@remix-run/react/esm/index.js
init_react();

// node_modules/@remix-run/react/esm/components.js
init_react();

// node_modules/@remix-run/react/esm/_virtual/_rollupPluginBabelHelpers.js
init_react();
function _extends3() {
  _extends3 = Object.assign || function(target) {
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
  return _extends3.apply(this, arguments);
}

// node_modules/@remix-run/react/esm/components.js
var React3 = __toESM(require_react());

// node_modules/@remix-run/react/node_modules/react-router-dom/index.js
init_react();
var import_react4 = __toESM(require_react());

// node_modules/@remix-run/react/node_modules/react-router-dom/node_modules/react-router/index.js
init_react();
init_history();
init_history();
var import_react3 = __toESM(require_react());
var NavigationContext2 = /* @__PURE__ */ (0, import_react3.createContext)(null);
if (true) {
  NavigationContext2.displayName = "Navigation";
}
var LocationContext2 = /* @__PURE__ */ (0, import_react3.createContext)(null);
if (true) {
  LocationContext2.displayName = "Location";
}
var RouteContext2 = /* @__PURE__ */ (0, import_react3.createContext)({
  outlet: null,
  matches: []
});
if (true) {
  RouteContext2.displayName = "Route";
}
function invariant2(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning2(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
var alreadyWarned2 = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned2[key]) {
    alreadyWarned2[key] = true;
    true ? warning2(false, message) : void 0;
  }
}
function matchRoutes2(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename2(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes2(routes2);
  rankRouteBranches2(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch2(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes2(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes2.forEach((route, index2) => {
    let meta5 = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta5.relativePath.startsWith("/")) {
      !meta5.relativePath.startsWith(parentPath) ? true ? invariant2(false, 'Absolute route path "' + meta5.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : invariant2(false) : void 0;
      meta5.relativePath = meta5.relativePath.slice(parentPath.length);
    }
    let path = joinPaths2([parentPath, meta5.relativePath]);
    let routesMeta = parentsMeta.concat(meta5);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? true ? invariant2(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : invariant2(false) : void 0;
      flattenRoutes2(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore2(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches2(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes2(a2.routesMeta.map((meta5) => meta5.childrenIndex), b2.routesMeta.map((meta5) => meta5.childrenIndex)));
}
var paramRe2 = /^:\w+$/;
var dynamicSegmentValue2 = 3;
var indexRouteValue2 = 2;
var emptySegmentValue2 = 1;
var staticSegmentValue2 = 10;
var splatPenalty2 = -2;
var isSplat2 = (s) => s === "*";
function computeScore2(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat2)) {
    initialScore += splatPenalty2;
  }
  if (index2) {
    initialScore += indexRouteValue2;
  }
  return segments.filter((s) => !isSplat2(s)).reduce((score, segment) => score + (paramRe2.test(segment) ? dynamicSegmentValue2 : segment === "" ? emptySegmentValue2 : staticSegmentValue2), initialScore);
}
function compareIndexes2(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n, i) => n === b2[i]);
  return siblings ? a2[a2.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch2(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta5 = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath2({
      path: meta5.relativePath,
      caseSensitive: meta5.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta5.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths2([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname2(joinPaths2([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths2([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath2(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath2(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent2(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath2(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  true ? warning2(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')) : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent2(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    true ? warning2(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")) : void 0;
    return value;
  }
}
function resolvePath2(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname2(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch2(search),
    hash: normalizeHash2(hash)
  };
}
function resolvePathname2(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo2(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from2;
  if (toPathname == null) {
    from2 = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath2(to, from2);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname2(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
function stripBasename2(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
var joinPaths2 = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname2 = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch2 = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash2 = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function useHref2(to) {
  !useInRouterContext2() ? true ? invariant2(false, "useHref() may be used only in the context of a <Router> component.") : invariant2(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react3.useContext)(NavigationContext2);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath2(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname2(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths2([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext2() {
  return (0, import_react3.useContext)(LocationContext2) != null;
}
function useLocation2() {
  !useInRouterContext2() ? true ? invariant2(false, "useLocation() may be used only in the context of a <Router> component.") : invariant2(false) : void 0;
  return (0, import_react3.useContext)(LocationContext2).location;
}
function useNavigate2() {
  !useInRouterContext2() ? true ? invariant2(false, "useNavigate() may be used only in the context of a <Router> component.") : invariant2(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react3.useContext)(NavigationContext2);
  let {
    matches
  } = (0, import_react3.useContext)(RouteContext2);
  let {
    pathname: locationPathname
  } = useLocation2();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0, import_react3.useCallback)(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    true ? warning2(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo2(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths2([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
var OutletContext = /* @__PURE__ */ (0, import_react3.createContext)(null);
function useOutlet2(context) {
  let outlet = (0, import_react3.useContext)(RouteContext2).outlet;
  if (outlet) {
    return /* @__PURE__ */ (0, import_react3.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath2(to) {
  let {
    matches
  } = (0, import_react3.useContext)(RouteContext2);
  let {
    pathname: locationPathname
  } = useLocation2();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react3.useMemo)(() => resolveTo2(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function useRoutes2(routes2, locationArg) {
  !useInRouterContext2() ? true ? invariant2(false, "useRoutes() may be used only in the context of a <Router> component.") : invariant2(false) : void 0;
  let {
    matches: parentMatches
  } = (0, import_react3.useContext)(RouteContext2);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation2();
  let location2;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? true ? invariant2(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant2(false) : void 0;
    location2 = parsedLocationArg;
  } else {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes2(routes2, {
    pathname: remainingPathname
  });
  if (true) {
    true ? warning2(parentRoute || matches != null, 'No routes matched location "' + location2.pathname + location2.search + location2.hash + '" ') : void 0;
    true ? warning2(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location2.pathname + location2.search + location2.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths2([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths2([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null)
    return null;
  return matches.reduceRight((outlet, match, index2) => {
    return /* @__PURE__ */ (0, import_react3.createElement)(RouteContext2.Provider, {
      children: match.route.element !== void 0 ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index2 + 1))
      }
    });
  }, null);
}
function Outlet2(props) {
  return useOutlet2(props.context);
}
function Router2(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext2() ? true ? invariant2(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant2(false) : void 0;
  let basename = normalizePathname2(basenameProp);
  let navigationContext = (0, import_react3.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location2 = (0, import_react3.useMemo)(() => {
    let trailingPathname = stripBasename2(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true ? warning2(location2 != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_react3.createElement)(NavigationContext2.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ (0, import_react3.createElement)(LocationContext2.Provider, {
    children,
    value: {
      location: location2,
      navigationType
    }
  }));
}

// node_modules/@remix-run/react/node_modules/react-router-dom/index.js
function _extends4() {
  _extends4 = Object.assign || function(target) {
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
  return _extends4.apply(this, arguments);
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded3 = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
var _excluded22 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function HistoryRouter2(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0, import_react4.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react4.useLayoutEffect)(() => history.listen(setState), [history]);
  return /* @__PURE__ */ (0, import_react4.createElement)(Router2, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
if (true) {
  HistoryRouter2.displayName = "unstable_HistoryRouter";
}
function isModifiedEvent2(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link2 = /* @__PURE__ */ (0, import_react4.forwardRef)(function LinkWithRef2(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4, rest = _objectWithoutPropertiesLoose2(_ref4, _excluded3);
  let href = useHref2(to);
  let internalOnClick = useLinkClickHandler2(to, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ (0, import_react4.createElement)("a", _extends4({}, rest, {
    href,
    onClick: handleClick,
    ref,
    target
  }));
});
if (true) {
  Link2.displayName = "Link";
}
var NavLink2 = /* @__PURE__ */ (0, import_react4.forwardRef)(function NavLinkWithRef2(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5, rest = _objectWithoutPropertiesLoose2(_ref5, _excluded22);
  let location2 = useLocation2();
  let path = useResolvedPath2(to);
  let locationPathname = location2.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /* @__PURE__ */ (0, import_react4.createElement)(Link2, _extends4({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});
if (true) {
  NavLink2.displayName = "NavLink";
}
function useLinkClickHandler2(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate2();
  let location2 = useLocation2();
  let path = useResolvedPath2(to);
  return (0, import_react4.useCallback)((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent2(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location2) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location2, navigate, path, replaceProp, state, target, to]);
}

// node_modules/@remix-run/react/esm/errorBoundaries.js
init_react();
var import_react5 = __toESM(require_react());
var RemixErrorBoundary = class extends import_react5.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error || null,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ import_react5.default.createElement(this.props.component, {
        error: this.state.error
      });
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  console.error(error);
  return /* @__PURE__ */ import_react5.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react5.default.createElement("head", null, /* @__PURE__ */ import_react5.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react5.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react5.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ import_react5.default.createElement("body", null, /* @__PURE__ */ import_react5.default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react5.default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ import_react5.default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack)), /* @__PURE__ */ import_react5.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
var RemixCatchContext = /* @__PURE__ */ import_react5.default.createContext(void 0);
function useCatch() {
  return (0, import_react5.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  if (catchVal) {
    return /* @__PURE__ */ import_react5.default.createElement(RemixCatchContext.Provider, {
      value: catchVal
    }, /* @__PURE__ */ import_react5.default.createElement(Component, null));
  }
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ import_react5.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react5.default.createElement("head", null, /* @__PURE__ */ import_react5.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react5.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react5.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react5.default.createElement("body", null, /* @__PURE__ */ import_react5.default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react5.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/esm/invariant.js
init_react();
function invariant3(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

// node_modules/@remix-run/react/esm/links.js
init_react();
init_history();

// node_modules/@remix-run/react/esm/routeModules.js
init_react();
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(route.module);
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    window.location.reload();
    return new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push(__spreadProps(__spreadValues({}, descriptor), {
        rel: "preload",
        as: "style"
      }));
    }
  }
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  return object != null && typeof object.rel === "string" && typeof object.href === "string";
}
async function getStylesheetPrefetchLinks(matches, routeModules) {
  let links2 = await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(match.route, routeModules);
    return mod.links ? mod.links() : [];
  }));
  return links2.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((_a) => {
    var _b = _a, {
      rel
    } = _b, attrs = __objRest(_b, [
      "rel"
    ]);
    return rel === "preload" ? __spreadValues({
      rel: "prefetch"
    }, attrs) : __spreadValues({
      rel: "prefetch",
      as: "style"
    }, attrs);
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, location2, mode) {
  let path = parsePathPatch(page);
  let isNew = (match, index2) => {
    if (!currentMatches[index2])
      return true;
    return match.route.id !== currentMatches[index2].route.id;
  };
  let matchPathChanged = (match, index2) => {
    var _currentMatches$index;
    return currentMatches[index2].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index2].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index2].params["*"] !== match.params["*"];
  };
  let newMatches = mode === "data" && location2.search !== path.search ? nextMatches.filter((match, index2) => {
    if (!match.route.hasLoader) {
      return false;
    }
    if (isNew(match, index2) || matchPathChanged(match, index2)) {
      return true;
    }
    if (match.route.shouldReload) {
      return match.route.shouldReload({
        params: match.params,
        prevUrl: new URL(location2.pathname + location2.search + location2.hash, window.origin),
        url: new URL(page, window.origin)
      });
    }
    return true;
  }) : nextMatches.filter((match, index2) => {
    return (mode === "assets" || match.route.hasLoader) && (isNew(match, index2) || matchPathChanged(match, index2));
  });
  return newMatches;
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path;
    let searchParams = new URLSearchParams(search);
    searchParams.set("_data", match.route.id);
    return `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let str = JSON.stringify(descriptor);
    if (!set.has(str)) {
      set.add(str);
      deduped.push(descriptor);
    }
    return deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  if (path.search === void 0)
    path.search = "";
  return path;
}

// node_modules/@remix-run/react/esm/markup.js
init_react();
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/esm/routes.js
init_react();
var React2 = __toESM(require_react());

// node_modules/@remix-run/react/esm/data.js
init_react();
function isCatchResponse2(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse2(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
async function fetchData(url, routeId, signal, submission) {
  url.searchParams.set("_data", routeId);
  let init2 = submission ? getActionInit(submission, signal) : {
    credentials: "same-origin",
    signal
  };
  let response = await fetch(url.href, init2);
  if (isErrorResponse(response)) {
    let data = await response.json();
    let error = new Error(data.message);
    error.stack = data.stack;
    return error;
  }
  return response;
}
async function extractData2(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
function getActionInit(submission, signal) {
  let {
    encType,
    method,
    formData
  } = submission;
  let headers4 = void 0;
  let body = formData;
  if (encType === "application/x-www-form-urlencoded") {
    body = new URLSearchParams();
    for (let [key, value] of formData) {
      invariant3(typeof value === "string", `File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.`);
      body.append(key, value);
    }
    headers4 = {
      "Content-Type": encType
    };
  }
  return {
    method,
    body,
    signal,
    credentials: "same-origin",
    headers: headers4
  };
}

// node_modules/@remix-run/react/esm/transition.js
init_react();
init_history();

// node_modules/@remix-run/react/esm/routeMatching.js
init_react();
function matchClientRoutes(routes2, location2) {
  let matches = matchRoutes2(routes2, location2);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

// node_modules/@remix-run/react/esm/transition.js
var CatchValue = class {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
};
function isActionSubmission(submission) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
}
function isLoaderSubmission(submission) {
  return submission.method === "GET";
}
function isRedirectLocation(location2) {
  return Boolean(location2.state) && location2.state.isRedirect;
}
function isLoaderRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "loader";
}
function isActionRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "action";
}
function isFetchActionRedirect(location2) {
  return isRedirectLocation(location2) && location2.state.type === "fetchAction";
}
function isLoaderSubmissionRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "loaderSubmission";
}
var TransitionRedirect = class {
  constructor(location2, setCookie) {
    this.setCookie = setCookie;
    this.location = typeof location2 === "string" ? location2 : location2.pathname + location2.search;
  }
};
var IDLE_TRANSITION = {
  state: "idle",
  submission: void 0,
  location: void 0,
  type: "idle"
};
var IDLE_FETCHER = {
  state: "idle",
  type: "init",
  data: void 0,
  submission: void 0
};
function createTransitionManager(init2) {
  let {
    routes: routes2
  } = init2;
  let pendingNavigationController;
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let navigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let matches = matchClientRoutes(routes2, init2.location);
  if (!matches) {
    matches = [{
      params: {},
      pathname: "",
      route: routes2[0]
    }];
  }
  let state = {
    location: init2.location,
    loaderData: init2.loaderData || {},
    actionData: init2.actionData,
    catch: init2.catch,
    error: init2.error,
    catchBoundaryId: init2.catchBoundaryId || null,
    errorBoundaryId: init2.errorBoundaryId || null,
    matches,
    nextMatches: void 0,
    transition: IDLE_TRANSITION,
    fetchers: /* @__PURE__ */ new Map()
  };
  function update(updates) {
    if (updates.transition) {
      if (updates.transition === IDLE_TRANSITION) {
        pendingNavigationController = void 0;
      }
    }
    state = Object.assign({}, state, updates);
    init2.onChange(state);
  }
  function getState() {
    return state;
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function setFetcher(key, fetcher) {
    state.fetchers.set(key, fetcher);
  }
  function deleteFetcher(key) {
    if (fetchControllers.has(key))
      abortFetcher(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }
  async function send(event) {
    switch (event.type) {
      case "navigation": {
        let {
          action,
          location: location2,
          submission
        } = event;
        let matches2 = matchClientRoutes(routes2, location2);
        if (!matches2) {
          matches2 = [{
            params: {},
            pathname: "",
            route: routes2[0]
          }];
          await handleNotFoundNavigation(location2, matches2);
        } else if (!submission && isHashChangeOnly(location2)) {
          await handleHashChange(location2, matches2);
        } else if (action === Action.Pop) {
          await handleLoad(location2, matches2);
        } else if (submission && isActionSubmission(submission)) {
          await handleActionSubmissionNavigation(location2, submission, matches2);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderSubmissionNavigation(location2, submission, matches2);
        } else if (isActionRedirectLocation(location2)) {
          await handleActionRedirect(location2, matches2);
        } else if (isLoaderSubmissionRedirectLocation(location2)) {
          await handleLoaderSubmissionRedirect(location2, matches2);
        } else if (isLoaderRedirectLocation(location2)) {
          await handleLoaderRedirect(location2, matches2);
        } else if (isFetchActionRedirect(location2)) {
          await handleFetchActionRedirect(location2, matches2);
        } else {
          await handleLoad(location2, matches2);
        }
        navigationLoadId = -1;
        break;
      }
      case "fetcher": {
        let {
          key,
          submission,
          href
        } = event;
        let matches2 = matchClientRoutes(routes2, href);
        invariant3(matches2, "No matches found");
        if (fetchControllers.has(key))
          abortFetcher(key);
        let match = getFetcherRequestMatch(new URL(href, window.location.href), matches2);
        if (submission && isActionSubmission(submission)) {
          await handleActionFetchSubmission(key, submission, match);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderFetchSubmission(href, key, submission, match);
        } else {
          await handleLoaderFetch(href, key, match);
        }
        break;
      }
      default: {
        throw new Error(`Unknown data event type: ${event.type}`);
      }
    }
  }
  function dispose() {
    abortNormalNavigation();
    for (let [, controller] of fetchControllers) {
      controller.abort();
    }
  }
  function isIndexRequestUrl2(url) {
    for (let param of url.searchParams.getAll("index")) {
      if (param === "") {
        return true;
      }
    }
    return false;
  }
  function getFetcherRequestMatch(url, matches2) {
    let match = matches2.slice(-1)[0];
    if (!isIndexRequestUrl2(url) && match.route.index) {
      return matches2.slice(-2)[0];
    }
    return match;
  }
  async function handleActionFetchSubmission(key, submission, match) {
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callAction(submission, match, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "fetchAction",
        setCookie: result.value.setCookie
      };
      fetchRedirectIds.add(key);
      init2.onRedirect(result.value.location, locationState);
      let loadingFetcher = {
        state: "loading",
        type: "actionRedirect",
        submission,
        data: void 0
      };
      setFetcher(key, loadingFetcher);
      update({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let loadFetcher = {
      state: "loading",
      type: "actionReload",
      data: result.value,
      submission
    };
    setFetcher(key, loadFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let maybeActionErrorResult = isErrorResult(result) ? result : void 0;
    let maybeActionCatchResult = isCatchResult(result) ? result : void 0;
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let matchesToLoad = state.nextMatches || state.matches;
    let results = await callLoaders(state, state.transition.location || state.location, matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
    if (controller.signal.aborted) {
      return;
    }
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    let redirect2 = findRedirect(results);
    if (redirect2) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: redirect2.setCookie
      };
      init2.onRedirect(redirect2.location, locationState);
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult);
    let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult) || [];
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    let abortedKeys = abortStaleFetchLoads(loadId);
    if (abortedKeys) {
      markFetchersDone(abortedKeys);
    }
    let yeetedNavigation = yeetStaleNavigationLoad(loadId);
    if (yeetedNavigation) {
      let {
        transition
      } = state;
      invariant3(transition.state === "loading", "Expected loading transition");
      update({
        location: transition.location,
        matches: state.nextMatches,
        error,
        errorBoundaryId,
        catch: catchVal,
        catchBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad),
        actionData: transition.type === "actionReload" ? state.actionData : void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers)
      });
    } else {
      update({
        fetchers: new Map(state.fetchers),
        error,
        errorBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad)
      });
    }
  }
  function yeetStaleNavigationLoad(landedId) {
    let isLoadingNavigation = state.transition.state === "loading";
    if (isLoadingNavigation && navigationLoadId < landedId) {
      abortNormalNavigation();
      return true;
    }
    return false;
  }
  function markFetchersDone(keys2) {
    for (let key of keys2) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        type: "done",
        data: fetcher.data,
        submission: void 0
      };
      setFetcher(key, doneFetcher);
    }
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id2] of fetchReloadIds) {
      if (id2 < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant3(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    return yeetedKeys.length ? yeetedKeys : false;
  }
  async function handleLoaderFetchSubmission(href, key, submission, match) {
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    fetchControllers.delete(key);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init2.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function handleLoaderFetch(href, key, match) {
    if (typeof AbortController === "undefined") {
      throw new Error("handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback.");
    }
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (controller.signal.aborted)
      return;
    fetchControllers.delete(key);
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init2.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function maybeBailOnCatch(match, key, result) {
    if (isCatchResult(result)) {
      let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers),
        catch: {
          data: result.value.data,
          status: result.value.status,
          statusText: result.value.statusText
        },
        catchBoundaryId
      });
      return true;
    }
    return false;
  }
  function maybeBailOnError(match, key, result) {
    if (isErrorResult(result)) {
      let errorBoundaryId = findNearestBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        fetchers: new Map(state.fetchers),
        error: result.value,
        errorBoundaryId
      });
      return true;
    }
    return false;
  }
  async function handleNotFoundNavigation(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
    update({
      location: location2,
      matches: matches2,
      catch: {
        data: null,
        status: 404,
        statusText: "Not Found"
      },
      catchBoundaryId,
      transition: IDLE_TRANSITION
    });
  }
  async function handleActionSubmissionNavigation(location2, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    let controller = new AbortController();
    pendingNavigationController = controller;
    let actionMatches = matches2;
    if (!isIndexRequestUrl2(createUrl(submission.action)) && actionMatches[matches2.length - 1].route.index) {
      actionMatches = actionMatches.slice(0, -1);
    }
    let leafMatch = actionMatches.slice(-1)[0];
    let result = await callAction(submission, leafMatch, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "action",
        setCookie: result.value.setCookie
      };
      init2.onRedirect(result.value.location, locationState);
      return;
    }
    let catchVal, catchBoundaryId;
    if (isCatchResult(result)) {
      [catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], actionMatches, result) || [];
    }
    let loadTransition = {
      state: "loading",
      type: "actionReload",
      submission,
      location: location2
    };
    update({
      transition: loadTransition,
      actionData: {
        [leafMatch.route.id]: result.value
      }
    });
    await loadPageData(location2, matches2, submission, leafMatch.route.id, result, catchVal, catchBoundaryId);
  }
  async function handleLoaderSubmissionNavigation(location2, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  async function handleHashChange(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    update({
      location: location2,
      matches: matches2,
      transition: IDLE_TRANSITION
    });
  }
  async function handleLoad(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleLoaderRedirect(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalRedirect",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleLoaderSubmissionRedirect(location2, matches2) {
    abortNormalNavigation();
    invariant3(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "loaderSubmissionRedirect",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  async function handleFetchActionRedirect(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "fetchActionRedirect",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleActionRedirect(location2, matches2) {
    abortNormalNavigation();
    invariant3(state.transition.type === "actionSubmission" || state.transition.type === "actionReload", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "actionRedirect",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  function isHashChangeOnly(location2) {
    return createHref(state.location) === createHref(location2) && state.location.hash !== location2.hash;
  }
  async function loadPageData(location2, matches2, submission, submissionRouteId, actionResult, catchVal, catchBoundaryId) {
    let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0;
    let maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0;
    let controller = new AbortController();
    pendingNavigationController = controller;
    navigationLoadId = ++incrementingLoadId;
    let results = await callLoaders(state, location2, matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId, void 0, catchBoundaryId);
    if (controller.signal.aborted) {
      return;
    }
    let redirect2 = findRedirect(results);
    if (redirect2) {
      if (state.transition.type === "actionReload") {
        let locationState = {
          isRedirect: true,
          type: "action",
          setCookie: redirect2.setCookie
        };
        init2.onRedirect(redirect2.location, locationState);
      } else if (state.transition.type === "loaderSubmission") {
        let locationState = {
          isRedirect: true,
          type: "loaderSubmission",
          setCookie: redirect2.setCookie
        };
        init2.onRedirect(redirect2.location, locationState);
      } else {
        let locationState = {
          isRedirect: true,
          type: "loader",
          setCookie: redirect2.setCookie
        };
        init2.onRedirect(redirect2.location, locationState);
      }
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
    [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult) || [catchVal, catchBoundaryId];
    markFetchRedirectsDone();
    let abortedIds = abortStaleFetchLoads(navigationLoadId);
    if (abortedIds) {
      markFetchersDone(abortedIds);
    }
    update({
      location: location2,
      matches: matches2,
      error,
      errorBoundaryId,
      catch: catchVal,
      catchBoundaryId,
      loaderData: makeLoaderData(state, results, matches2),
      actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
      transition: IDLE_TRANSITION,
      fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
    });
  }
  function abortNormalNavigation() {
    if (pendingNavigationController) {
      pendingNavigationController.abort();
    }
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant3(controller, `Expected fetch controller: ${key}`);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant3(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.type === "actionRedirect") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }
    markFetchersDone(doneKeys);
  }
  return {
    send,
    getState,
    getFetcher,
    deleteFetcher,
    dispose,
    get _internalFetchControllers() {
      return fetchControllers;
    }
  };
}
async function callLoaders(state, location2, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  let url = createUrl(createHref(location2));
  let matchesToLoad = filterMatchesToLoad(state, location2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId);
  return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
}
async function callLoader(match, url, signal) {
  invariant3(match.route.loader, `Expected loader for ${match.route.id}`);
  try {
    let {
      params
    } = match;
    let value = await match.route.loader({
      params,
      url,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
async function callAction(submission, match, signal) {
  try {
    let value = await match.route.action({
      url: createUrl(submission.action),
      params: match.params,
      submission,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
function filterMatchesToLoad(state, location2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  var _location$state;
  if (catchBoundaryId || submissionRouteId && (actionCatchResult || actionErrorResult)) {
    let foundProblematicRoute = false;
    matches = matches.filter((match) => {
      if (foundProblematicRoute) {
        return false;
      }
      if (match.route.id === submissionRouteId || match.route.id === catchBoundaryId) {
        foundProblematicRoute = true;
        return false;
      }
      return true;
    });
  }
  let isNew = (match, index2) => {
    if (!state.matches[index2])
      return true;
    return match.route.id !== state.matches[index2].route.id;
  };
  let matchPathChanged = (match, index2) => {
    var _state$matches$index$;
    return state.matches[index2].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index2].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index2].params["*"] !== match.params["*"];
  };
  let url = createUrl(createHref(location2));
  let filterByRouteProps = (match, index2) => {
    if (!match.route.loader) {
      return false;
    }
    if (isNew(match, index2) || matchPathChanged(match, index2)) {
      return true;
    }
    if (match.route.shouldReload) {
      let prevUrl = createUrl(createHref(state.location));
      return match.route.shouldReload({
        prevUrl,
        url,
        submission,
        params: match.params
      });
    }
    return true;
  };
  let isInRootCatchBoundary = state.matches.length === 1;
  if (isInRootCatchBoundary) {
    return matches.filter((match) => !!match.route.loader);
  }
  if ((fetcher === null || fetcher === void 0 ? void 0 : fetcher.type) === "actionReload") {
    return matches.filter(filterByRouteProps);
  } else if (state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search.substring(1) || (_location$state = location2.state) !== null && _location$state !== void 0 && _location$state.setCookie) {
    return matches.filter(filterByRouteProps);
  }
  return matches.filter((match, index2, arr) => {
    var _location$state2;
    if ((actionErrorResult || actionCatchResult) && arr.length - 1 === index2) {
      return false;
    }
    return match.route.loader && (isNew(match, index2) || matchPathChanged(match, index2) || ((_location$state2 = location2.state) === null || _location$state2 === void 0 ? void 0 : _location$state2.setCookie));
  });
}
function isRedirectResult(result) {
  return result.value instanceof TransitionRedirect;
}
function createHref(location2) {
  return location2.pathname + location2.search;
}
function findRedirect(results) {
  for (let result of results) {
    if (isRedirectResult(result)) {
      return result.value;
    }
  }
  return null;
}
async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
  let loaderCatchResult;
  for (let result of results) {
    if (isCatchResult(result)) {
      loaderCatchResult = result;
      break;
    }
  }
  let extractCatchData = async (res) => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data
  });
  if (actionCatchResult && loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(actionCatchResult.value), boundaryId];
  }
  if (loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(loaderCatchResult.value), boundaryId];
  }
  return null;
}
function findErrorAndBoundaryId(results, matches, actionErrorResult) {
  let loaderErrorResult;
  for (let result of results) {
    if (isErrorResult(result)) {
      loaderErrorResult = result;
      break;
    }
  }
  if (actionErrorResult && loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (actionErrorResult) {
    let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [loaderErrorResult.value, boundaryId];
  }
  return [void 0, void 0];
}
function findNearestCatchBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.CatchBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function findNearestBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.ErrorBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function makeLoaderData(state, results, matches) {
  let newData = {};
  for (let {
    match,
    value
  } of results) {
    newData[match.route.id] = value;
  }
  let loaderData = {};
  for (let {
    route
  } of matches) {
    let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
    if (value !== void 0) {
      loaderData[route.id] = value;
    }
  }
  return loaderData;
}
function isCatchResult(result) {
  return result.value instanceof CatchValue;
}
function isErrorResult(result) {
  return result.value instanceof Error;
}
function createUrl(href) {
  return new URL(href, window.location.origin);
}

// node_modules/@remix-run/react/esm/routes.js
function createClientRoute(entryRoute, routeModulesCache, Component) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    element: /* @__PURE__ */ React2.createElement(Component, {
      id: entryRoute.id
    }),
    id: entryRoute.id,
    path: entryRoute.path,
    index: entryRoute.index,
    module: entryRoute.module,
    loader: createLoader(entryRoute, routeModulesCache),
    action: createAction(entryRoute, routeModulesCache),
    shouldReload: createShouldReload(entryRoute, routeModulesCache),
    ErrorBoundary: entryRoute.hasErrorBoundary,
    CatchBoundary: entryRoute.hasCatchBoundary,
    hasLoader: entryRoute.hasLoader
  };
}
function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
  return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
    let route = createClientRoute(routeManifest[key], routeModulesCache, Component);
    let children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
    if (children.length > 0)
      route.children = children;
    return route;
  });
}
function createShouldReload(route, routeModules) {
  let shouldReload = (arg) => {
    let module = routeModules[route.id];
    invariant3(module, `Expected route module to be loaded for ${route.id}`);
    if (module.unstable_shouldReload) {
      return module.unstable_shouldReload(arg);
    }
    return true;
  };
  return shouldReload;
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(routeModule);
  return routeModule;
}
function createLoader(route, routeModules) {
  let loader4 = async ({
    url,
    signal,
    submission
  }) => {
    if (route.hasLoader) {
      let [result] = await Promise.all([fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules)]);
      if (result instanceof Error)
        throw result;
      let redirect2 = await checkRedirect(result);
      if (redirect2)
        return redirect2;
      if (isCatchResponse2(result)) {
        throw new CatchValue(result.status, result.statusText, await extractData2(result.clone()));
      }
      return extractData2(result);
    } else {
      await loadRouteModuleWithBlockingLinks(route, routeModules);
    }
  };
  return loader4;
}
function createAction(route, routeModules) {
  let action = async ({
    url,
    signal,
    submission
  }) => {
    if (!route.hasAction) {
      console.error(`Route "${route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
    }
    let result = await fetchData(url, route.id, signal, submission);
    if (result instanceof Error) {
      throw result;
    }
    let redirect2 = await checkRedirect(result);
    if (redirect2)
      return redirect2;
    await loadRouteModuleWithBlockingLinks(route, routeModules);
    if (isCatchResponse2(result)) {
      throw new CatchValue(result.status, result.statusText, await extractData2(result.clone()));
    }
    return extractData2(result);
  };
  return action;
}
async function checkRedirect(response) {
  if (isRedirectResponse2(response)) {
    let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
    if (url.origin !== window.location.origin) {
      await new Promise(() => {
        window.location.replace(url.href);
      });
    } else {
      return new TransitionRedirect(url.pathname + url.search + url.hash, response.headers.get("X-Remix-Revalidate") !== null);
    }
  }
  return null;
}

// node_modules/@remix-run/react/esm/components.js
var RemixEntryContext = /* @__PURE__ */ React3.createContext(void 0);
function useRemixEntryContext() {
  let context = React3.useContext(RemixEntryContext);
  invariant3(context, "You must render this element inside a <Remix> element");
  return context;
}
function RemixEntry({
  context: entryContext,
  action,
  location: historyLocation,
  navigator: _navigator,
  static: staticProp = false
}) {
  let {
    manifest,
    routeData: documentLoaderData,
    actionData: documentActionData,
    routeModules,
    serverHandoffString,
    appState: entryComponentDidCatchEmulator
  } = entryContext;
  let clientRoutes = React3.useMemo(() => createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]);
  let [clientState, setClientState] = React3.useState(entryComponentDidCatchEmulator);
  let [transitionManager] = React3.useState(() => {
    return createTransitionManager({
      routes: clientRoutes,
      actionData: documentActionData,
      loaderData: documentLoaderData,
      location: historyLocation,
      catch: entryComponentDidCatchEmulator.catch,
      catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
      onRedirect: _navigator.replace,
      onChange: (state) => {
        setClientState({
          catch: state.catch,
          error: state.error,
          catchBoundaryRouteId: state.catchBoundaryId,
          loaderBoundaryRouteId: state.errorBoundaryId,
          renderBoundaryRouteId: null,
          trackBoundaries: false,
          trackCatchBoundaries: false
        });
      }
    });
  });
  let navigator = React3.useMemo(() => {
    let push = (to, state) => {
      return transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state);
    };
    return __spreadProps(__spreadValues({}, _navigator), {
      push
    });
  }, [_navigator, transitionManager]);
  let {
    location: location2,
    matches,
    loaderData,
    actionData
  } = transitionManager.getState();
  React3.useEffect(() => {
    let {
      location: location3
    } = transitionManager.getState();
    if (historyLocation === location3)
      return;
    transitionManager.send({
      type: "navigation",
      location: historyLocation,
      submission: consumeNextNavigationSubmission(),
      action
    });
  }, [transitionManager, historyLocation, action]);
  let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0;
  let ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
  return /* @__PURE__ */ React3.createElement(RemixEntryContext.Provider, {
    value: {
      matches,
      manifest,
      appState: clientState,
      routeModules,
      serverHandoffString,
      clientRoutes,
      routeData: loaderData,
      actionData,
      transitionManager
    }
  }, /* @__PURE__ */ React3.createElement(RemixErrorBoundary, {
    location: location2,
    component: RemixRootDefaultErrorBoundary,
    error: ssrErrorBeforeRoutesRendered
  }, /* @__PURE__ */ React3.createElement(RemixCatchBoundary, {
    location: location2,
    component: RemixRootDefaultCatchBoundary,
    catch: ssrCatchBeforeRoutesRendered
  }, /* @__PURE__ */ React3.createElement(Router2, {
    navigationType: action,
    location: location2,
    navigator,
    static: staticProp
  }, /* @__PURE__ */ React3.createElement(Routes3, null)))));
}
function deserializeError(data) {
  let error = new Error(data.message);
  error.stack = data.stack;
  return error;
}
function Routes3() {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let element = useRoutes2(clientRoutes) || clientRoutes[0].element;
  return element;
}
var RemixRouteContext = /* @__PURE__ */ React3.createContext(void 0);
function useRemixRouteContext() {
  let context = React3.useContext(RemixRouteContext);
  invariant3(context, "You must render this element in a remix route element");
  return context;
}
function DefaultRouteComponent({
  id: id2
}) {
  throw new Error(`Route "${id2}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function RemixRoute({
  id: id2
}) {
  let location2 = useLocation2();
  let {
    routeData,
    routeModules,
    appState
  } = useRemixEntryContext();
  invariant3(routeData, "Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  invariant3(routeModules, "Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  let data = routeData[id2];
  let {
    default: Component,
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id2];
  let element = Component ? /* @__PURE__ */ React3.createElement(Component, null) : /* @__PURE__ */ React3.createElement(DefaultRouteComponent, {
    id: id2
  });
  let context = {
    data,
    id: id2
  };
  if (CatchBoundary) {
    let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id2 ? appState.catch : void 0;
    if (appState.trackCatchBoundaries) {
      appState.catchBoundaryRouteId = id2;
    }
    context = maybeServerCaught ? {
      id: id2,
      get data() {
        console.error("You cannot `useLoaderData` in a catch boundary.");
        return void 0;
      }
    } : {
      id: id2,
      data
    };
    element = /* @__PURE__ */ React3.createElement(RemixCatchBoundary, {
      location: location2,
      component: CatchBoundary,
      catch: maybeServerCaught
    }, element);
  }
  if (ErrorBoundary) {
    let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id2 || appState.loaderBoundaryRouteId === id2) ? deserializeError(appState.error) : void 0;
    if (appState.trackBoundaries) {
      appState.renderBoundaryRouteId = id2;
    }
    context = maybeServerRenderError ? {
      id: id2,
      get data() {
        console.error("You cannot `useLoaderData` in an error boundary.");
        return void 0;
      }
    } : {
      id: id2,
      data
    };
    element = /* @__PURE__ */ React3.createElement(RemixErrorBoundary, {
      location: location2,
      component: ErrorBoundary,
      error: maybeServerRenderError
    }, element);
  }
  return /* @__PURE__ */ React3.createElement(RemixRouteContext.Provider, {
    value: context
  }, element);
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React3.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React3.useState(false);
  let {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React3.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
  }, [prefetch]);
  let setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };
  let cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
    }
  };
  React3.useEffect(() => {
    if (maybePrefetch) {
      let id2 = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id2);
      };
    }
  }, [maybePrefetch]);
  return [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var NavLink3 = /* @__PURE__ */ React3.forwardRef((_a, forwardedRef) => {
  var _b = _a, {
    to,
    prefetch = "none"
  } = _b, props = __objRest(_b, [
    "to",
    "prefetch"
  ]);
  let href = useHref2(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(NavLink2, _extends3({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink3.displayName = "NavLink";
var Link3 = /* @__PURE__ */ React3.forwardRef((_a, forwardedRef) => {
  var _b = _a, {
    to,
    prefetch = "none"
  } = _b, props = __objRest(_b, [
    "to",
    "prefetch"
  ]);
  let href = useHref2(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Link2, _extends3({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link3.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function Links() {
  let {
    matches,
    routeModules,
    manifest
  } = useRemixEntryContext();
  let links2 = React3.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, links2.map((link) => isPageLinkDescriptor(link) ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, _extends3({
    key: link.page
  }, link)) : /* @__PURE__ */ React3.createElement("link", _extends3({
    key: link.rel + link.href
  }, link))));
}
function PrefetchPageLinks(_a) {
  var _b = _a, {
    page
  } = _b, dataLinkProps = __objRest(_b, [
    "page"
  ]);
  let {
    clientRoutes
  } = useRemixEntryContext();
  let matches = React3.useMemo(() => matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ React3.createElement(PrefetchPageLinksImpl, _extends3({
    page,
    matches
  }, dataLinkProps));
}
function usePrefetchedStylesheets(matches) {
  let {
    routeModules
  } = useRemixEntryContext();
  let [styleLinks, setStyleLinks] = React3.useState([]);
  React3.useEffect(() => {
    let interrupted = false;
    getStylesheetPrefetchLinks(matches, routeModules).then((links2) => {
      if (!interrupted)
        setStyleLinks(links2);
    });
    return () => {
      interrupted = true;
    };
  }, [matches, routeModules]);
  return styleLinks;
}
function PrefetchPageLinksImpl(_a) {
  var _b = _a, {
    page,
    matches: nextMatches
  } = _b, linkProps = __objRest(_b, [
    "page",
    "matches"
  ]);
  let location2 = useLocation2();
  let {
    matches,
    manifest
  } = useRemixEntryContext();
  let newMatchesForData = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location2, "data"), [page, nextMatches, matches, location2]);
  let newMatchesForAssets = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location2, "assets"), [page, nextMatches, matches, location2]);
  let dataHrefs = React3.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
  let moduleHrefs = React3.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends3({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends3({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React3.createElement("link", _extends3({
    key: link.href
  }, link))));
}
function Meta() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext();
  let location2 = useLocation2();
  let meta5 = {};
  let parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id;
    let data = routeData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location: location2
      }) : routeModule.meta;
      Object.assign(meta5, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, Object.entries(meta5).map(([name2, value]) => {
    if (!value) {
      return null;
    }
    if (["charset", "charSet"].includes(name2)) {
      return /* @__PURE__ */ React3.createElement("meta", {
        key: "charset",
        charSet: value
      });
    }
    if (name2 === "title") {
      return /* @__PURE__ */ React3.createElement("title", {
        key: "title"
      }, value);
    }
    let isOpenGraphTag = name2.startsWith("og:");
    return [value].flat().map((content) => {
      if (isOpenGraphTag) {
        return /* @__PURE__ */ React3.createElement("meta", {
          content,
          key: name2 + content,
          property: name2
        });
      }
      if (typeof content === "string") {
        return /* @__PURE__ */ React3.createElement("meta", {
          content,
          name: name2,
          key: name2 + content
        });
      }
      return /* @__PURE__ */ React3.createElement("meta", _extends3({
        key: name2 + JSON.stringify(content)
      }, content));
    });
  }));
}
var isHydrated = false;
function Scripts(props) {
  let {
    manifest,
    matches,
    pendingLocation,
    clientRoutes,
    serverHandoffString
  } = useRemixEntryContext();
  React3.useEffect(() => {
    isHydrated = true;
  }, []);
  let initialScripts = React3.useMemo(() => {
    let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "";
    let routeModulesScript = `${matches.map((match, index2) => `import * as route${index2} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index2) => `${JSON.stringify(match.route.id)}:route${index2}`).join(",")}};`;
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("script", _extends3({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: createHtml(contextScript)
    })), /* @__PURE__ */ React3.createElement("script", _extends3({}, props, {
      src: manifest.url
    })), /* @__PURE__ */ React3.createElement("script", _extends3({}, props, {
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module"
    })), /* @__PURE__ */ React3.createElement("script", _extends3({}, props, {
      src: manifest.entry.module,
      type: "module"
    })));
  }, []);
  let nextMatches = React3.useMemo(() => {
    if (pendingLocation) {
      let matches2 = matchClientRoutes(clientRoutes, pendingLocation);
      invariant3(matches2, `No routes match path "${pendingLocation.pathname}"`);
      return matches2;
    }
    return [];
  }, [pendingLocation, clientRoutes]);
  let routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1);
  let preloads = manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, dedupe2(preloads).map((path) => /* @__PURE__ */ React3.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), isHydrated ? null : initialScripts);
}
function dedupe2(array) {
  return [...new Set(array)];
}
var Form = /* @__PURE__ */ React3.forwardRef((props, ref) => {
  return /* @__PURE__ */ React3.createElement(FormImpl, _extends3({}, props, {
    ref
  }));
});
Form.displayName = "Form";
var FormImpl = /* @__PURE__ */ React3.forwardRef((_a, forwardedRef) => {
  var _b = _a, {
    reloadDocument = false,
    replace = false,
    method = "get",
    action = ".",
    encType = "application/x-www-form-urlencoded",
    fetchKey,
    onSubmit
  } = _b, props = __objRest(_b, [
    "reloadDocument",
    "replace",
    "method",
    "action",
    "encType",
    "fetchKey",
    "onSubmit"
  ]);
  let submit = useSubmitImpl(fetchKey);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action);
  let formRef = React3.useRef();
  let ref = useComposedRefs(forwardedRef, formRef);
  let clickedButtonRef = React3.useRef();
  React3.useEffect(() => {
    let form = formRef.current;
    if (!form)
      return;
    function handleClick(event) {
      if (!(event.target instanceof Element))
        return;
      let submitButton = event.target.closest("button,input[type=submit]");
      if (submitButton && submitButton.form === form && submitButton.type === "submit") {
        clickedButtonRef.current = submitButton;
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return /* @__PURE__ */ React3.createElement("form", _extends3({
    ref,
    method: formMethod,
    action: formAction,
    encType,
    onSubmit: reloadDocument ? void 0 : (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented)
        return;
      event.preventDefault();
      submit(clickedButtonRef.current || event.currentTarget, {
        method,
        replace
      });
      clickedButtonRef.current = null;
    }
  }, props));
});
FormImpl.displayName = "FormImpl";
function useFormAction(action = ".", method = "get") {
  let {
    id: id2
  } = useRemixRouteContext();
  let path = useResolvedPath2(action);
  let search = path.search;
  let isIndexRoute = id2.endsWith("/index");
  if (action === "." && isIndexRoute) {
    search = search ? search.replace(/^\?/, "?index&") : "?index";
  }
  return path.pathname + search;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function useSubmitImpl(key) {
  let navigate = useNavigate2();
  let defaultAction = useFormAction();
  let {
    transitionManager
  } = useRemixEntryContext();
  return React3.useCallback((target, options = {}) => {
    let method;
    let action;
    let encType;
    let formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("enctype") || defaultEncType;
      formData = new FormData(target);
      if (submissionTrigger && submissionTrigger.name) {
        formData.append(submissionTrigger.name, submissionTrigger.value);
      }
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(`Cannot submit a <button> without a <form>`);
      }
      method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
      formData = new FormData(form);
      if (target.name) {
        formData.set(target.name, target.value);
      }
    } else {
      if (isHtmlElement(target)) {
        throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
      }
      method = options.method || "get";
      action = options.action || defaultAction;
      encType = options.encType || "application/x-www-form-urlencoded";
      if (target instanceof FormData) {
        formData = target;
      } else {
        formData = new FormData();
        if (target instanceof URLSearchParams) {
          for (let [name2, value] of target) {
            formData.append(name2, value);
          }
        } else if (target != null) {
          for (let name2 of Object.keys(target)) {
            formData.append(name2, target[name2]);
          }
        }
      }
    }
    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    }
    let {
      protocol,
      host
    } = window.location;
    let url = new URL(action, `${protocol}//${host}`);
    if (method.toLowerCase() === "get") {
      for (let [name2, value] of formData) {
        if (typeof value === "string") {
          url.searchParams.append(name2, value);
        } else {
          throw new Error(`Cannot submit binary form data using GET`);
        }
      }
    }
    let submission = {
      formData,
      action: url.pathname + url.search,
      method: method.toUpperCase(),
      encType,
      key: Math.random().toString(36).substr(2, 8)
    };
    if (key) {
      transitionManager.send({
        type: "fetcher",
        href: submission.action,
        submission,
        key
      });
    } else {
      setNextNavigationSubmission(submission);
      navigate(url.pathname + url.search, {
        replace: options.replace
      });
    }
  }, [defaultAction, key, navigate, transitionManager]);
}
var nextNavigationSubmission;
function setNextNavigationSubmission(submission) {
  nextNavigationSubmission = submission;
}
function consumeNextNavigationSubmission() {
  let submission = nextNavigationSubmission;
  nextNavigationSubmission = void 0;
  return submission;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function useBeforeUnload(callback) {
  React3.useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
}
function useLoaderData() {
  return useRemixRouteContext().data;
}
function useTransition() {
  let {
    transitionManager
  } = useRemixEntryContext();
  return transitionManager.getState().transition;
}
var LiveReload = false ? () => null : function LiveReload2({
  port = Number(8002),
  nonce = void 0
}) {
  let setupLiveReload = ((port2) => {
    let protocol = location.protocol === "https:" ? "wss:" : "ws:";
    let host = location.hostname;
    let socketPath = `${protocol}//${host}:${port2}/socket`;
    let ws = new WebSocket(socketPath);
    ws.onmessage = (message) => {
      let event = JSON.parse(message.data);
      if (event.type === "LOG") {
        console.log(event.message);
      }
      if (event.type === "RELOAD") {
        console.log("\u{1F4BF} Reloading window ...");
        window.location.reload();
      }
    };
    ws.onerror = (error) => {
      console.log("Remix dev asset server web socket error:");
      console.error(error);
    };
  }).toString();
  return /* @__PURE__ */ React3.createElement("script", {
    nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${setupLiveReload})(${port})`
    }
  });
};
function useComposedRefs(...refs) {
  return React3.useCallback((node) => {
    for (let ref of refs) {
      if (ref == null)
        continue;
      if (typeof ref === "function") {
        ref(node);
      } else {
        try {
          ref.current = node;
        } catch (_) {
        }
      }
    }
  }, refs);
}

// node_modules/@remix-run/react/esm/scroll-restoration.js
init_react();
var React4 = __toESM(require_react());
var STORAGE_KEY = "positions";
var positions = {};
if (typeof document !== "undefined") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  if (sessionPositions) {
    positions = JSON.parse(sessionPositions);
  }
}
function ScrollRestoration({
  nonce = void 0
}) {
  useScrollRestoration();
  React4.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useBeforeUnload(React4.useCallback(() => {
    window.history.scrollRestoration = "auto";
  }, []));
  let restoreScroll = ((STORAGE_KEY2) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key
      }, "");
    }
    try {
      let positions2 = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}");
      let storedY = positions2[window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React4.createElement("script", {
    nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`
    }
  });
}
var hydrated = false;
function useScrollRestoration() {
  let location2 = useLocation2();
  let transition = useTransition();
  let wasSubmissionRef = React4.useRef(false);
  React4.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
  React4.useEffect(() => {
    if (transition.location) {
      positions[location2.key] = window.scrollY;
    }
  }, [transition, location2]);
  useBeforeUnload(React4.useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, []));
  if (typeof document !== "undefined") {
    React4.useLayoutEffect(() => {
      if (!hydrated) {
        hydrated = true;
        return;
      }
      let y = positions[location2.key];
      if (y != void 0) {
        window.scrollTo(0, y);
        return;
      }
      if (location2.hash) {
        let el = document.getElementById(location2.hash.slice(1));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (wasSubmissionRef.current === true) {
        wasSubmissionRef.current = false;
        return;
      }
      window.scrollTo(0, 0);
    }, [location2]);
  }
  React4.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
}

// node_modules/@remix-run/react/esm/server.js
init_react();
init_history();
var React5 = __toESM(require_react());
function RemixServer({
  context,
  url
}) {
  if (typeof url === "string") {
    url = new URL(url);
  }
  let location2 = {
    pathname: url.pathname,
    search: url.search,
    hash: "",
    state: null,
    key: "default"
  };
  let staticNavigator = {
    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    },
    block() {
      throw new Error(`You cannot use navigator.block() on the server because it is a stateless environment.`);
    }
  };
  return /* @__PURE__ */ React5.createElement(RemixEntry, {
    context,
    action: Action.Pop,
    location: location2,
    navigator: staticNavigator,
    static: true
  });
}

// app/entry.server.jsx
var import_server3 = __toESM(require_server());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server3.renderToString)(/* @__PURE__ */ React.createElement(RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();

// app/moul.css
var moul_default = "/build/_assets/moul-SM6MVTN5.css";

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "Moul",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [{ rel: "stylesheet", href: moul_default }];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg"
  })), /* @__PURE__ */ React.createElement("body", {
    className: "dark:bg-black dark:text-white bg-white text-black overflow-x-hidden"
  }, /* @__PURE__ */ React.createElement(Outlet2, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/routes/$slug.photo.$hash.jsx
var slug_photo_hash_exports = {};
__export(slug_photo_hash_exports, {
  default: () => Photo,
  headers: () => headers,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_cloudflare2 = __toESM(require_cloudflare());
var import_react42 = __toESM(require_react());

// node_modules/framer-motion/dist/es/index.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
init_react();

// node_modules/tslib/modules/index.js
init_react();
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/framer-motion/dist/es/motion/index.mjs
init_react();
var React7 = __toESM(require_react(), 1);
var import_react23 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/motion/features/use-features.mjs
init_react();
var React6 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/process.mjs
init_react();
var mockProcess = { env: { NODE_ENV: "production" } };
var safeProcess = typeof process === "undefined" ? mockProcess : process;
var process$1 = safeProcess;

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
init_react();
var createDefinition = function(propNames) {
  return {
    isEnabled: function(props) {
      return propNames.some(function(name2) {
        return !!props[name2];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function loadFeatures(features) {
  for (var key in features) {
    if (features[key] === null)
      continue;
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}

// node_modules/hey-listen/dist/hey-listen.es.js
init_react();
var warning3 = function() {
};
var invariant4 = function() {
};
if (true) {
  warning3 = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant4 = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
init_react();
var import_react8 = __toESM(require_react(), 1);
var LazyContext = (0, import_react8.createContext)({ strict: false });

// node_modules/framer-motion/dist/es/motion/features/use-features.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
function useFeatures(props, visualElement2, preloadedFeatures) {
  var features = [];
  var lazyContext = (0, import_react9.useContext)(LazyContext);
  if (!visualElement2)
    return null;
  if (process$1.env.NODE_ENV !== "production" && preloadedFeatures && lazyContext.strict) {
    invariant4(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  }
  for (var i = 0; i < numFeatures; i++) {
    var name_1 = featureNames[i];
    var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
    if (isEnabled(props) && Component) {
      features.push(React6.createElement(Component, __assign({ key: name_1 }, props, { visualElement: visualElement2 })));
    }
  }
  return features;
}

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
init_react();
var import_react10 = __toESM(require_react(), 1);
var MotionConfigContext = (0, import_react10.createContext)({
  transformPagePoint: function(p) {
    return p;
  },
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
init_react();
var import_react11 = __toESM(require_react(), 1);
var MotionContext = (0, import_react11.createContext)({});
function useVisualElementContext() {
  return (0, import_react11.useContext)(MotionContext).visualElement;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
init_react();
var import_react15 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
init_react();
var import_react12 = __toESM(require_react(), 1);
var PresenceContext = (0, import_react12.createContext)(null);

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
init_react();
var import_react13 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
init_react();
var isBrowser = typeof window !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? import_react13.useLayoutEffect : import_react13.useEffect;

// node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs
init_react();
var import_react14 = __toESM(require_react(), 1);
var prefersReducedMotion = { current: null };
var hasDetected = false;
function initPrefersReducedMotion() {
  hasDetected = true;
  if (typeof window === "undefined")
    return;
  if (window.matchMedia) {
    var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
    var setReducedMotionPreferences = function() {
      return prefersReducedMotion.current = motionMediaQuery_1.matches;
    };
    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}
function useReducedMotion() {
  !hasDetected && initPrefersReducedMotion();
  var _a = __read((0, import_react14.useState)(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
  return shouldReduceMotion;
}
function useReducedMotionConfig() {
  var reducedMotionPreference = useReducedMotion();
  var reducedMotion = (0, import_react14.useContext)(MotionConfigContext).reducedMotion;
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement) {
  var lazyContext = (0, import_react15.useContext)(LazyContext);
  var parent = useVisualElementContext();
  var presenceContext = (0, import_react15.useContext)(PresenceContext);
  var shouldReduceMotion = useReducedMotionConfig();
  var visualElementRef = (0, import_react15.useRef)(void 0);
  if (!createVisualElement)
    createVisualElement = lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
      shouldReduceMotion
    });
  }
  var visualElement2 = visualElementRef.current;
  useIsomorphicLayoutEffect(function() {
    visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
  });
  (0, import_react15.useEffect)(function() {
    var _a;
    (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  useIsomorphicLayoutEffect(function() {
    return function() {
      return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
    };
  }, []);
  return visualElement2;
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
init_react();
var import_react16 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
init_react();
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement2, externalRef) {
  return (0, import_react16.useCallback)(function(instance) {
    var _a;
    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
    if (visualElement2) {
      instance ? visualElement2.mount(instance) : visualElement2.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement2]);
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
init_react();
var import_react17 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/variants.mjs
init_react();
function isVariantLabels(v) {
  return Array.isArray(v);
}
function isVariantLabel(v) {
  return typeof v === "string" || isVariantLabels(v);
}
function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function(value, key) {
    return current[key] = value.get();
  });
  return current;
}
function getVelocity(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}
function resolveVariant(visualElement2, definition, custom) {
  var props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity(visualElement2));
}
function checkIfControllingVariants(props) {
  var _a;
  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial = props.initial, animate3 = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate3) ? animate3 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  var _a = getCurrentTreeVariants(props, (0, import_react17.useContext)(MotionContext)), initial = _a.initial, animate3 = _a.animate;
  return (0, import_react17.useMemo)(function() {
    return { initial, animate: animate3 };
  }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate3)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/projection/node/id.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
init_react();
var import_react18 = __toESM(require_react(), 1);
function useConstant(init2) {
  var ref = (0, import_react18.useRef)(null);
  if (ref.current === null) {
    ref.current = init2();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
init_react();

// node_modules/framesync/dist/es/index.mjs
init_react();

// node_modules/framesync/dist/es/on-next-frame.mjs
init_react();
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// node_modules/framesync/dist/es/create-render-step.mjs
init_react();
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var getFrameData = () => frame;
var es_default = sync;

// node_modules/popmotion/dist/es/index.mjs
init_react();

// node_modules/popmotion/dist/es/animations/index.mjs
init_react();

// node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
init_react();

// node_modules/popmotion/dist/es/animations/generators/spring.mjs
init_react();

// node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
init_react();

// node_modules/popmotion/dist/es/utils/clamp.mjs
init_react();
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning3(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from: from2 = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from2 };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from2;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from2) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from2, to] = [to, from2];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
var zero = (_t) => 0;

// node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
init_react();

// node_modules/popmotion/dist/es/utils/interpolate.mjs
init_react();

// node_modules/popmotion/dist/es/utils/progress.mjs
init_react();
var progress = (from2, to, value) => {
  const toFromDifference = to - from2;
  return toFromDifference === 0 ? 1 : (value - from2) / toFromDifference;
};

// node_modules/popmotion/dist/es/utils/mix.mjs
init_react();
var mix = (from2, to, progress2) => -progress2 * from2 + progress2 * to + from2;

// node_modules/popmotion/dist/es/utils/mix-color.mjs
init_react();

// node_modules/style-value-types/dist/es/index.mjs
init_react();

// node_modules/style-value-types/dist/es/numbers/index.mjs
init_react();

// node_modules/style-value-types/dist/es/utils.mjs
init_react();
var clamp2 = (min, max) => (v) => Math.max(Math.min(v, max), min);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString2(v) {
  return typeof v === "string";
}

// node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp2(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });

// node_modules/style-value-types/dist/es/numbers/units.mjs
init_react();
var createUnitType = (unit) => ({
  test: (v) => isString2(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

// node_modules/style-value-types/dist/es/color/hsla.mjs
init_react();

// node_modules/style-value-types/dist/es/color/utils.mjs
init_react();
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString2(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString2(v))
    return v;
  const [a2, b2, c2, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/style-value-types/dist/es/color/rgba.mjs
init_react();
var clampRgbUnit = clamp2(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/style-value-types/dist/es/color/hex.mjs
init_react();
function parseHex(v) {
  let r = "";
  let g = "";
  let b2 = "";
  let a2 = "";
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b2 = v.substr(5, 2);
    a2 = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b2 = v.substr(3, 1);
    a2 = v.substr(4, 1);
    r += r;
    g += g;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
var hex2 = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/style-value-types/dist/es/color/index.mjs
init_react();
var color = {
  test: (v) => rgba.test(v) || hex2.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex2.parse(v);
    }
  },
  transform: (v) => {
    return isString2(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/style-value-types/dist/es/complex/index.mjs
init_react();
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && isString2(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v };
}
function parse2(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  const { values, numColors, tokenised } = analyse(v);
  const numValues = values.length;
  return (v2) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse2(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse: parse2, createTransformer, getAnimatableNone };

// node_modules/style-value-types/dist/es/complex/filter.mjs
init_react();
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  let [name2, value] = v.slice(0, -1).split("(");
  if (name2 === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name2) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name2 + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
  const functions = v.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v;
} });

// node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
init_react();
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from2, to, v) => {
  const fromExpo = from2 * from2;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex2, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from2, to) => {
  let fromColorType = getColorType(from2);
  let toColorType = getColorType(to);
  invariant4(!!fromColorType, notAnimatable(from2));
  invariant4(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from2);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

// node_modules/popmotion/dist/es/utils/mix-complex.mjs
init_react();

// node_modules/popmotion/dist/es/utils/inc.mjs
init_react();
var isNum = (v) => typeof v === "number";

// node_modules/popmotion/dist/es/utils/pipe.mjs
init_react();
var combineFunctions = (a2, b2) => (v) => b2(a2(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/popmotion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v) => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from2, to) => {
  const output = [...from2];
  const numValues = output.length;
  const blendValue = from2.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
function analyse2(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse2(origin);
  const targetStats = analyse2(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    warning3(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// node_modules/popmotion/dist/es/utils/interpolate.mjs
var mixNumber = (from2, to) => (p) => mix(from2, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from2, to], [mixer]) {
  return (v) => mixer(progress(from2, to, v));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant4(inputLength === output.length, "Both input and output ranges must be the same length");
  invariant4(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/popmotion/dist/es/easing/index.mjs
init_react();

// node_modules/popmotion/dist/es/easing/utils.mjs
init_react();
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var createExpoIn = (power) => (p) => Math.pow(p, power);
var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
var createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

// node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var linear = (p) => p;
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p) => {
  if (p === 1 || p === 0)
    return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);
var bounceInOut = (p) => p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;

// node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function keyframes({ from: from2 = 0, to = 1, ease, offset, duration = 300 }) {
  const state = { done: false, value: from2 };
  const values = Array.isArray(to) ? to : [from2, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t) => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

// node_modules/popmotion/dist/es/animations/generators/decay.mjs
init_react();
function decay({ velocity = 0, from: from2 = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from2 };
  let amplitude = power * velocity;
  const ideal = from2 + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from2;
  return {
    next: (t) => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}

// node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = { keyframes, spring, decay };
function detectAnimationFromOptions(config2) {
  if (Array.isArray(config2.to)) {
    return keyframes;
  } else if (types[config2.type]) {
    return types[config2.type];
  }
  const keys2 = new Set(Object.keys(config2));
  if (keys2.has("ease") || keys2.has("duration") && !keys2.has("dampingRatio")) {
    return keyframes;
  } else if (keys2.has("dampingRatio") || keys2.has("stiffness") || keys2.has("mass") || keys2.has("damping") || keys2.has("restSpeed") || keys2.has("restDelta")) {
    return spring;
  }
  return keyframes;
}

// node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
init_react();
function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

// node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => es_default.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate(_a) {
  var _b, _c;
  var { from: from2, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from2, to)) {
    interpolateFromNumber = interpolate([0, 100], [from2, to], {
      clamp: false
    });
    from2 = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from: from2, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

// node_modules/popmotion/dist/es/animations/inertia.mjs
init_react();

// node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
init_react();
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/popmotion/dist/es/animations/inertia.mjs
function inertia({ from: from2 = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v) {
    return min !== void 0 && v < min || max !== void 0 && v > max;
  }
  function boundaryNearest(v) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from2)) {
    startSpring({ from: from2, velocity, to: boundaryNearest(from2) });
  } else {
    let target = power * velocity + from2;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v) => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, getFrameData().delta);
      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({ from: v, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from: from2,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}

// node_modules/popmotion/dist/es/utils/distance.mjs
init_react();

// node_modules/popmotion/dist/es/utils/is-point.mjs
init_react();
var isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");

// node_modules/popmotion/dist/es/utils/is-point-3d.mjs
init_react();
var isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");

// node_modules/popmotion/dist/es/utils/distance.mjs
var distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}

// node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
init_react();
var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var b = (a1, a2) => 3 * a2 - 6 * a1;
var c = (a1) => 3 * a1;
var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/animation/animate.mjs
init_react();

// node_modules/framer-motion/dist/es/value/index.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/array.mjs
init_react();
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
  var index2 = arr.indexOf(item);
  index2 > -1 && arr.splice(index2, 1);
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = function() {
  function SubscriptionManager2() {
    this.subscriptions = [];
  }
  SubscriptionManager2.prototype.add = function(handler) {
    var _this = this;
    addUniqueItem(this.subscriptions, handler);
    return function() {
      return removeItem(_this.subscriptions, handler);
    };
  };
  SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c2);
    } else {
      for (var i = 0; i < numSubscriptions; i++) {
        var handler = this.subscriptions[i];
        handler && handler(a2, b2, c2);
      }
    }
  };
  SubscriptionManager2.prototype.getSize = function() {
    return this.subscriptions.length;
  };
  SubscriptionManager2.prototype.clear = function() {
    this.subscriptions.length = 0;
  };
  return SubscriptionManager2;
}();

// node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = function() {
  function MotionValue2(init2) {
    var _this = this;
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;
    this.updateAndNotify = function(v, render) {
      if (render === void 0) {
        render = true;
      }
      _this.prev = _this.current;
      _this.current = v;
      var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        es_default.postRender(_this.scheduleVelocityCheck);
      }
      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      }
      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };
    this.scheduleVelocityCheck = function() {
      return es_default.postRender(_this.velocityCheck);
    };
    this.velocityCheck = function(_a) {
      var timestamp = _a.timestamp;
      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init2;
    this.canTrackVelocity = isFloat(this.current);
  }
  MotionValue2.prototype.onChange = function(subscription) {
    return this.updateSubscribers.add(subscription);
  };
  MotionValue2.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  };
  MotionValue2.prototype.onRenderRequest = function(subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };
  MotionValue2.prototype.attach = function(passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  MotionValue2.prototype.set = function(v, render) {
    if (render === void 0) {
      render = true;
    }
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  };
  MotionValue2.prototype.get = function() {
    return this.current;
  };
  MotionValue2.prototype.getPrevious = function() {
    return this.prev;
  };
  MotionValue2.prototype.getVelocity = function() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  MotionValue2.prototype.start = function(animation) {
    var _this = this;
    this.stop();
    return new Promise(function(resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation(resolve);
    }).then(function() {
      return _this.clearAnimation();
    });
  };
  MotionValue2.prototype.stop = function() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  };
  MotionValue2.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  };
  MotionValue2.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  };
  MotionValue2.prototype.destroy = function() {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };
  return MotionValue2;
}();
function motionValue(init2) {
  return new MotionValue(init2);
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
init_react();
var isMotionValue = function(value) {
  return Boolean(value !== null && typeof value === "object" && value.getVelocity);
};

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
init_react();
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};

// node_modules/framer-motion/dist/es/animation/utils/easing.mjs
init_react();
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = function(definition) {
  if (Array.isArray(definition)) {
    invariant4(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant4(easingLookup[definition] !== void 0, "Invalid easing type '".concat(definition, "'"));
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = function(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
init_react();
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
init_react();

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
init_react();
var isKeyframesTarget = function(v) {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
};
var linearTween = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes2 = function(values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes2;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __assign({ to }, transitionFactory(to));
};

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
init_react();
var int = __assign(__assign({}, number), { transform: Math.round });

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = __assign(__assign({}, numberValueTypes), {
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = function(key) {
  return defaultValueTypes[key];
};

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  var _a;
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
init_react();
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
init_react();
var isCustomValue = function(v) {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = __assign({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    warning3(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a, _b;
  var valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to), false);
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = __assign(__assign({}, transition), getDefaultTransition(key, options.to));
  }
  return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone2(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  var isOriginAnimatable = isAnimatable(key, origin);
  warning3(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, ' from "').concat(origin, '" to "').concat(target, '". ').concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));
  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function(v) {
        return value.set(v);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign(__assign({}, options), valueTransition)) : animate(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v) {
      var _a2;
      options.onUpdate(v);
      (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
    }, onComplete: function() {
      var _a2;
      options.onComplete();
      (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    } }));
  }
  function set() {
    var _a2, _b;
    var finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
    (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
    return { stop: function() {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }
  if (instantAnimationState.current) {
    transition = { type: false };
  }
  return value.start(function(onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);
    var start = function() {
      return controls = animation();
    };
    if (delay) {
      delayTimer = window.setTimeout(start, secondsToMilliseconds(delay));
    } else {
      start();
    }
    return function() {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}

// node_modules/framer-motion/dist/es/animation/animate.mjs
function animate2(from2, to, transition) {
  if (transition === void 0) {
    transition = {};
  }
  var value = isMotionValue(from2) ? from2 : motionValue(from2);
  startAnimation("", value, to, transition);
  return {
    stop: function() {
      return value.stop();
    },
    isAnimating: function() {
      return value.isAnimating();
    }
  };
}

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
init_react();
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = function(value) {
  return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function(value) {
  return typeof value === "number" || px.test(value);
};
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0, (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress2));
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress2);
  }
  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border".concat(borders[i], "Radius");
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  var _a;
  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);
function compress(min, max, easing) {
  return function(p) {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(progress(min, max, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
init_react();
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
init_react();

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
init_react();
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale(_a) {
  var scale2 = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function hasTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, _a) {
  var x = _a.x, y = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
  var _a, _b;
  if (isSharedTransition === void 0) {
    isSharedTransition = false;
  }
  var treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;
  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys);
  transformAxis(box.y, transform, yKeys);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
init_react();
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return distance(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
init_react();
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate, scale2, origin, boxScale, originAxis, sourceAxis) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  if (origin === void 0) {
    origin = 0.5;
  }
  if (originAxis === void 0) {
    originAxis = axis;
  }
  if (sourceAxis === void 0) {
    sourceAxis = axis;
  }
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  var originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
init_react();
var createAxisDelta = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};
var createDelta = function() {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};
var createAxis = function() {
  return { min: 0, max: 0 };
};
var createBox = function() {
  return {
    x: createAxis(),
    y: createAxis()
  };
};

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
init_react();
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a2, b2) {
  return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
init_react();
var NodeStack = function() {
  function NodeStack2() {
    this.members = [];
  }
  NodeStack2.prototype.add = function(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  };
  NodeStack2.prototype.remove = function(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      var prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  };
  NodeStack2.prototype.relegate = function(node) {
    var indexOfNode = this.members.findIndex(function(member2) {
      return node === member2;
    });
    if (indexOfNode === 0)
      return false;
    var prevLead;
    for (var i = indexOfNode; i >= 0; i--) {
      var member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  };
  NodeStack2.prototype.promote = function(node, preserveFollowOpacity) {
    var _a;
    var prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      var crossfade = node.options.crossfade;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  };
  NodeStack2.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(node) {
      var _a, _b, _c, _d, _e;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  };
  NodeStack2.prototype.scheduleRender = function() {
    this.members.forEach(function(node) {
      node.instance && node.scheduleRender(false);
    });
  };
  NodeStack2.prototype.removeLeadSnapshot = function() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  };
  return NodeStack2;
}();

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
init_react();
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
init_react();
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
  if (latestTransform) {
    var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
    if (rotate)
      transform += "rotate(".concat(rotate, "deg) ");
    if (rotateX)
      transform += "rotateX(".concat(rotateX, "deg) ");
    if (rotateY)
      transform += "rotateY(".concat(rotateY, "deg) ");
  }
  transform += "scale(".concat(delta.x.scale, ", ").concat(delta.y.scale, ")");
  return transform === identityProjection ? "none" : transform;
}

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
init_react();
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
init_react();
var transformAxes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function(operationKey) {
  return transformAxes.forEach(function(axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
function sortTransformProps(a2, b2) {
  return transformProps.indexOf(a2) - transformProps.indexOf(b2);
}
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
init_react();
var compareByDepth = function(a2, b2) {
  return a2.depth - b2.depth;
};

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = function() {
  function FlatTree2() {
    this.children = [];
    this.isDirty = false;
  }
  FlatTree2.prototype.add = function(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.remove = function(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.forEach = function(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  };
  return FlatTree2;
}();

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
init_react();
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var animationTarget = 1e3;
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};
function createProjectionNode(_a) {
  var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, resetTransform = _a.resetTransform;
  return function() {
    function ProjectionNode(id2, latestValues, parent) {
      var _this = this;
      if (latestValues === void 0) {
        latestValues = {};
      }
      if (parent === void 0) {
        parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
      }
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = function() {
        if (_this.isUpdating) {
          _this.isUpdating = false;
          _this.clearAllSnapshots();
        }
      };
      this.updateProjection = function() {
        _this.nodes.forEach(resolveTargetDelta);
        _this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.id = id2;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? __spreadArray(__spreadArray([], __read(parent.path), false), [parent], false) : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      id2 && this.root.registerPotentialNode(id2, this);
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    ProjectionNode.prototype.addEventListener = function(name2, handler) {
      if (!this.eventHandlers.has(name2)) {
        this.eventHandlers.set(name2, new SubscriptionManager());
      }
      return this.eventHandlers.get(name2).add(handler);
    };
    ProjectionNode.prototype.notifyListeners = function(name2) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var subscriptionManager = this.eventHandlers.get(name2);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, __spreadArray([], __read(args), false));
    };
    ProjectionNode.prototype.hasListeners = function(name2) {
      return this.eventHandlers.has(name2);
    };
    ProjectionNode.prototype.registerPotentialNode = function(id2, node) {
      this.potentialNodes.set(id2, node);
    };
    ProjectionNode.prototype.mount = function(instance, isLayoutDirty) {
      var _this = this;
      var _a2;
      if (isLayoutDirty === void 0) {
        isLayoutDirty = false;
      }
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement2 = _b.visualElement;
      if (visualElement2 && !visualElement2.getInstance()) {
        visualElement2.mount(instance);
      }
      this.root.nodes.add(this);
      (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
      this.id && this.root.potentialNodes.delete(this.id);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        var unblockTimeout_1;
        var resizeUnblockUpdate_1 = function() {
          return _this.root.updateBlockedByResize = false;
        };
        attachResizeListener(instance, function() {
          _this.root.updateBlockedByResize = true;
          clearTimeout(unblockTimeout_1);
          unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            _this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
        this.addEventListener("didUpdate", function(_a3) {
          var _b2, _c, _d, _e, _f;
          var delta = _a3.delta, hasLayoutChanged = _a3.hasLayoutChanged, hasRelativeTargetChanged = _a3.hasRelativeTargetChanged, newLayout = _a3.layout;
          if (_this.isTreeAnimationBlocked()) {
            _this.target = void 0;
            _this.relativeTarget = void 0;
            return;
          }
          var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
          var onLayoutAnimationComplete = visualElement2.getProps().onLayoutAnimationComplete;
          var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
          var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
            if (_this.resumeFrom) {
              _this.resumingFrom = _this.resumeFrom;
              _this.resumingFrom.resumingFrom = void 0;
            }
            _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            var animationOptions = __assign(__assign({}, getValueTransition(layoutTransition, "layout")), { onComplete: onLayoutAnimationComplete });
            if (visualElement2.shouldReduceMotion) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            _this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && _this.animationProgress === 0) {
              _this.finishAnimation();
            }
            _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
          }
          _this.targetLayout = newLayout;
        });
      }
    };
    ProjectionNode.prototype.unmount = function() {
      var _a2, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync.preRender(this.updateProjection);
    };
    ProjectionNode.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = true;
    };
    ProjectionNode.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = false;
    };
    ProjectionNode.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    };
    ProjectionNode.prototype.isTreeAnimationBlocked = function() {
      var _a2;
      return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
    };
    ProjectionNode.prototype.startUpdate = function() {
      var _a2;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
    };
    ProjectionNode.prototype.willUpdate = function(shouldNotifyListeners) {
      var _a2, _b, _c;
      if (shouldNotifyListeners === void 0) {
        shouldNotifyListeners = true;
      }
      if (this.root.isUpdateBlocked()) {
        (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll();
      }
      var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
      if (layoutId === void 0 && !layout)
        return;
      var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    };
    ProjectionNode.prototype.didUpdate = function() {
      var updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    };
    ProjectionNode.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    };
    ProjectionNode.prototype.scheduleUpdateProjection = function() {
      es_default.preRender(this.updateProjection, false, true);
    };
    ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
      var _this = this;
      es_default.postRender(function() {
        if (_this.isLayoutDirty) {
          _this.root.didUpdate();
        } else {
          _this.root.checkUpdateFailed();
        }
      });
    };
    ProjectionNode.prototype.updateSnapshot = function() {
      if (this.snapshot || !this.instance)
        return;
      var measured = this.measure();
      var layout = this.removeTransform(this.removeElementScroll(measured));
      roundBox(layout);
      this.snapshot = {
        measured,
        layout,
        latestValues: {}
      };
    };
    ProjectionNode.prototype.updateLayout = function() {
      var _a2;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.updateScroll();
        }
      }
      var measured = this.measure();
      roundBox(measured);
      var prevLayout = this.layout;
      this.layout = {
        measured,
        actual: this.removeElementScroll(measured)
      };
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.actual);
      (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
    };
    ProjectionNode.prototype.updateScroll = function() {
      if (this.options.layoutScroll && this.instance) {
        this.scroll = measureScroll(this.instance);
      }
    };
    ProjectionNode.prototype.resetTransform = function() {
      var _a2;
      if (!resetTransform)
        return;
      var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    };
    ProjectionNode.prototype.measure = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return createBox();
      var box = visualElement2.measureViewportBox();
      var scroll = this.root.scroll;
      if (scroll) {
        translateAxis(box.x, scroll.x);
        translateAxis(box.y, scroll.y);
      }
      return box;
    };
    ProjectionNode.prototype.removeElementScroll = function(box) {
      var boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        var scroll_1 = node.scroll, options = node.options;
        if (node !== this.root && scroll_1 && options.layoutScroll) {
          translateAxis(boxWithoutScroll.x, scroll_1.x);
          translateAxis(boxWithoutScroll.y, scroll_1.y);
        }
      }
      return boxWithoutScroll;
    };
    ProjectionNode.prototype.applyTransform = function(box, transformOnly) {
      if (transformOnly === void 0) {
        transformOnly = false;
      }
      var withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    };
    ProjectionNode.prototype.removeTransform = function(box) {
      var _a2;
      var boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        var sourceBox = createBox();
        var nodeBox = node.measure();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    };
    ProjectionNode.prototype.setTargetDelta = function(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    };
    ProjectionNode.prototype.setOptions = function(options) {
      var _a2;
      this.options = __assign(__assign(__assign({}, this.options), options), { crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true });
    };
    ProjectionNode.prototype.clearMeasurements = function() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    };
    ProjectionNode.prototype.resolveTargetDelta = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      if (!this.layout || !(layout || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && this.relativeParent.layout) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.actual);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.actual);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
    };
    ProjectionNode.prototype.getClosestProjectingParent = function() {
      if (!this.parent || hasTransform(this.parent.latestValues))
        return void 0;
      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    };
    ProjectionNode.prototype.calcProjection = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      var lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.actual);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      var target = lead.target;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      var prevTreeScaleX = this.treeScale.x;
      var prevTreeScaleY = this.treeScale.y;
      var prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    };
    ProjectionNode.prototype.hide = function() {
      this.isVisible = false;
    };
    ProjectionNode.prototype.show = function() {
      this.isVisible = true;
    };
    ProjectionNode.prototype.scheduleRender = function(notifyAll) {
      var _a2, _b, _c;
      if (notifyAll === void 0) {
        notifyAll = true;
      }
      (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
      notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    };
    ProjectionNode.prototype.setAnimationOrigin = function(delta, hasOnlyRelativeTargetChanged) {
      var _this = this;
      var _a2;
      if (hasOnlyRelativeTargetChanged === void 0) {
        hasOnlyRelativeTargetChanged = false;
      }
      var snapshot = this.snapshot;
      var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      var mixedValues = __assign({}, this.latestValues);
      var targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      var relativeLayout = createBox();
      var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
      var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = function(latest) {
        var _a3;
        var progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        _this.setTargetDelta(targetDelta);
        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
          calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
          mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress2);
        }
        if (isSharedLayoutAnimation) {
          _this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        _this.root.scheduleUpdateProjection();
        _this.scheduleRender();
        _this.animationProgress = progress2;
      };
      this.mixTargetDelta(0);
    };
    ProjectionNode.prototype.startAnimation = function(options) {
      var _this = this;
      var _a2, _b;
      (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = es_default.update(function() {
        globalProjectionState.hasAnimatedSinceResize = true;
        _this.currentAnimation = animate2(0, animationTarget, __assign(__assign({}, options), { onUpdate: function(latest) {
          var _a3;
          _this.mixTargetDelta(latest);
          (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
        }, onComplete: function() {
          var _a3;
          (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);
          _this.completeAnimation();
        } }));
        if (_this.resumingFrom) {
          _this.resumingFrom.currentAnimation = _this.currentAnimation;
        }
        _this.pendingAnimation = void 0;
      });
    };
    ProjectionNode.prototype.completeAnimation = function() {
      var _a2;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    };
    ProjectionNode.prototype.finishAnimation = function() {
      var _a2;
      if (this.currentAnimation) {
        (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    };
    ProjectionNode.prototype.applyTransformsToTarget = function() {
      var _a2 = this.getLead(), targetWithTransforms = _a2.targetWithTransforms, target = _a2.target, layout = _a2.layout, latestValues = _a2.latestValues;
      if (!targetWithTransforms || !target || !layout)
        return;
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    };
    ProjectionNode.prototype.registerSharedNode = function(layoutId, node) {
      var _a2, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      var stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    };
    ProjectionNode.prototype.isLead = function() {
      var stack = this.getStack();
      return stack ? stack.lead === this : true;
    };
    ProjectionNode.prototype.getLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
    };
    ProjectionNode.prototype.getPrevLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
    };
    ProjectionNode.prototype.getStack = function() {
      var layoutId = this.options.layoutId;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    };
    ProjectionNode.prototype.promote = function(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
      var stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    };
    ProjectionNode.prototype.relegate = function() {
      var stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    };
    ProjectionNode.prototype.resetRotation = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return;
      var hasRotate = false;
      var resetValues = {};
      for (var i = 0; i < transformAxes.length; i++) {
        var axis = transformAxes[i];
        var key = "rotate" + axis;
        if (!visualElement2.getStaticValue(key)) {
          continue;
        }
        hasRotate = true;
        resetValues[key] = visualElement2.getStaticValue(key);
        visualElement2.setStaticValue(key, 0);
      }
      if (!hasRotate)
        return;
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
      for (var key in resetValues) {
        visualElement2.setStaticValue(key, resetValues[key]);
      }
      visualElement2.scheduleRender();
    };
    ProjectionNode.prototype.getProjectionStyles = function(styleProp) {
      var _a2, _b, _c, _d, _e, _f;
      if (styleProp === void 0) {
        styleProp = {};
      }
      var styles = {};
      if (!this.instance || this.isSVG)
        return styles;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles.visibility = "";
      }
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      var lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        var emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      var valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      var _g = this.projectionDelta, x = _g.x, y = _g.y;
      styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
      }
      for (var key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        var _h = scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
        var corrected = correct(valuesToRender[key], lead);
        if (applyTo) {
          var num = applyTo.length;
          for (var i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    };
    ProjectionNode.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    };
    ProjectionNode.prototype.resetTree = function() {
      this.root.nodes.forEach(function(node) {
        var _a2;
        return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    };
    return ProjectionNode;
  }();
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c, _d;
  var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
    if (node.options.animationType === "size") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout_1[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (node.options.animationType === "position") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(layout_1[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }
    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
    var visualDelta = createDelta();
    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout_1, snapshot.layout);
    }
    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();
      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          var relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout_1,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
  node.options.transition = void 0;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  var visualElement2 = node.options.visualElement;
  if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
    visualElement2.notifyBeforeLayoutMeasure();
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from2, to, p) {
  output.min = mix(from2.min, to.min, p);
  output.max = mix(from2.max, to.max, p);
}
function mixBox(output, from2, to, p) {
  mixAxis(output.x, from2.x, to.x, p);
  mixAxis(output.y, from2.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, id2) {
  var searchNode = node.root;
  for (var i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }
  var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  var element = searchElement.querySelector('[data-projection-id="'.concat(id2, '"]'));
  if (element)
    node.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}

// node_modules/framer-motion/dist/es/projection/node/id.mjs
var id = 1;
function useProjectionId() {
  return useConstant(function() {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
init_react();
var import_react19 = __toESM(require_react(), 1);
var LayoutGroupContext = (0, import_react19.createContext)({});

// node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
init_react();
var import_react21 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
init_react();
var import_react20 = __toESM(require_react(), 1);
var SwitchLayoutGroupContext = (0, import_react20.createContext)({});

// node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
  var _b;
  var layoutId = _a.layoutId, layout = _a.layout, drag2 = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
  var initialPromotionConfig = (0, import_react21.useContext)(SwitchLayoutGroupContext);
  if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
    return;
  }
  visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
  visualElement2.projection.setOptions({
    layoutId,
    layout,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement: visualElement2,
    scheduleRender: function() {
      return visualElement2.scheduleRender();
    },
    animationType: typeof layout === "string" ? layout : "both",
    initialPromotionConfig,
    layoutScroll
  });
}

// node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs
init_react();
var import_react22 = __toESM(require_react(), 1);
var VisualElementHandler = function(_super) {
  __extends(VisualElementHandler2, _super);
  function VisualElementHandler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function() {
    this.updateProps();
    return null;
  };
  VisualElementHandler2.prototype.componentDidUpdate = function() {
  };
  VisualElementHandler2.prototype.updateProps = function() {
    var _a = this.props, visualElement2 = _a.visualElement, props = _a.props;
    if (visualElement2)
      visualElement2.setProps(props);
  };
  VisualElementHandler2.prototype.render = function() {
    return this.props.children;
  };
  return VisualElementHandler2;
}(import_react22.default.Component);

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    var layoutId = useLayoutId(props);
    props = __assign(__assign({}, props), { layoutId });
    var config2 = (0, import_react23.useContext)(MotionConfigContext);
    var features = null;
    var context = useCreateMotionContext(props);
    var projectionId = config2.isStatic ? void 0 : useProjectionId();
    var visualState = useVisualState(props, config2.isStatic);
    if (!config2.isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component, visualState, __assign(__assign({}, config2), props), createVisualElement);
      useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
      features = useFeatures(props, context.visualElement, preloadedFeatures);
    }
    return React7.createElement(VisualElementHandler, { visualElement: context.visualElement, props: __assign(__assign({}, config2), props) }, features, React7.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config2.isStatic, context.visualElement)));
  }
  return (0, import_react23.forwardRef)(MotionComponent);
}
function useLayoutId(_a) {
  var _b;
  var layoutId = _a.layoutId;
  var layoutGroupId = (_b = (0, import_react23.useContext)(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
init_react();
function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  var componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: function(_target, key) {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
init_react();

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
init_react();
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
init_react();
var import_react26 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
init_react();
var import_react24 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
init_react();
function isForcedMotionValue(key, _a) {
  var layout = _a.layout, layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
init_react();

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
init_react();
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform, transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;
  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys2[i];
    transformString += "".concat(translateAlias[key] || key, "(").concat(transform[key], ") ");
    if (key === "z")
      transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildTransformOrigin(_a) {
  var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
  return "".concat(originX, " ").concat(originY, " ").concat(originZ);
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
init_react();
function isCSSVariable(key) {
  return key.startsWith("--");
}

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
init_react();
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  var _a;
  var style = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform2 = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;
  for (var key in latestValues) {
    var value = latestValues[key];
    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    }
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform2 = true;
      transform[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
        transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      style[key] = valueAsType;
    }
  }
  if (hasTransform2) {
    style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
  } else if (transformTemplate) {
    style.transform = transformTemplate({}, "");
  } else if (!latestValues.transform && style.transform) {
    style.transform = "none";
  }
  if (hasTransformOrigin) {
    style.transformOrigin = buildTransformOrigin(transformOrigin);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
init_react();
var createHtmlRenderState = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate = _a.transformTemplate;
  return (0, import_react24.useMemo)(function() {
    var state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    var vars = state.vars, style = state.style;
    return __assign(__assign({}, vars), style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  if (props.transformValues) {
    style = props.transformValues(style);
  }
  return style;
}
function useHTMLProps(props, visualState, isStatic) {
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);
  if (Boolean(props.drag) && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
init_react();

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
init_react();
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = function(key) {
  return !isValidMotionProp(key);
};
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = function(key) {
    return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  };
}
try {
  loadExternalIsValidProp((init_is_prop_valid_esm(), __toCommonJS(is_prop_valid_esm_exports)).default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
init_react();
var import_react25 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
init_react();

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
init_react();
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return "".concat(pxOriginX, " ").concat(pxOriginY);
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
init_react();
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (useDashCase === void 0) {
    useDashCase = true;
  }
  attrs.pathLength = 1;
  var keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  var pathLength = px.transform(length);
  var pathSpacing = px.transform(spacing);
  attrs[keys2.array] = "".concat(pathLength, " ").concat(pathSpacing);
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, _a, options, transformTemplate) {
  var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
init_react();
var createSvgRenderState = function() {
  return __assign(__assign({}, createHtmlRenderState()), { attrs: {} });
};

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState) {
  var visualProps = (0, import_react25.useMemo)(function() {
    var state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
    return __assign(__assign({}, state.attrs), { style: __assign({}, state.style) });
  }, [visualState]);
  if (props.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }
  var useRender = function(Component, props, projectionId, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props, latestValues, isStatic);
    var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), { ref });
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return (0, import_react26.createElement)(Component, elementProps);
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
init_react();

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
init_react();
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
init_react();
function renderHTML(element, _a, styleProp, projection) {
  var style = _a.style, vars = _a.vars;
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
init_react();
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState) {
  renderHTML(element, renderState);
  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
init_react();

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
init_react();
function scrapeMotionValuesFromProps(props) {
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props) {
  var newValues = scrapeMotionValuesFromProps(props);
  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
init_react();
var import_react27 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
init_react();
function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState(_a, props, context, presenceContext) {
  var scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
  var state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = function(instance) {
      return onMount(props, instance, state);
    };
  }
  return state;
}
var makeUseVisualState = function(config2) {
  return function(props, isStatic) {
    var context = (0, import_react27.useContext)(MotionContext);
    var presenceContext = (0, import_react27.useContext)(PresenceContext);
    return isStatic ? makeState(config2, props, context, presenceContext) : useConstant(function() {
      return makeState(config2, props, context, presenceContext);
    });
  };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props);
  for (var key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  var initial = props.initial, animate3 = props.animate;
  var isControllingVariants = checkIfControllingVariants(props);
  var isVariantNode = checkIfVariantNode(props);
  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate3 !== null && animate3 !== void 0 ? animate3 : animate3 = context.animate;
  }
  var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
  var variantToSet = initialAnimationIsBlocked ? animate3 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(function(definition) {
      var resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;
      var target = __rest(resolved, ["transitionEnd", "transition"]);
      for (var key2 in target) {
        var valueTarget = target[key2];
        if (Array.isArray(valueTarget)) {
          var index2 = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index2];
        }
        if (valueTarget !== null) {
          values[key2] = valueTarget;
        }
      }
      for (var key2 in transitionEnd)
        values[key2] = transitionEnd[key2];
    });
  }
  return values;
}

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: function(props, instance, _a) {
      var renderState = _a.renderState, latestValues = _a.latestValues;
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
init_react();
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return __assign(__assign({}, baseConfig), { preloadedFeatures, useRender: createUseRender(forwardMotionProps), createVisualElement, projectionNodeConstructor, Component });
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/types.mjs
init_react();
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
init_react();
var import_react28 = __toESM(require_react(), 1);
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler, options);
  };
}
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react28.useEffect)(function() {
    var element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
  var onFocus = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
  };
  var onBlur = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
  };
  useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
}

// node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs
init_react();
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}

// node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
init_react();

// node_modules/framer-motion/dist/es/events/event-info.mjs
init_react();
function filterPrimaryPointer(eventHandler) {
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};

// node_modules/framer-motion/dist/es/events/utils.mjs
init_react();
var supportsPointerEvents = function() {
  return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser && window.onmousedown === null;
};

// node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name2) {
  if (supportsPointerEvents()) {
    return name2;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name2];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name2];
  }
  return name2;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
init_react();
function createLock(name2) {
  var lock = null;
  return function() {
    var openLock = function() {
      lock = null;
    };
    if (lock === null) {
      lock = name2;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  var lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock;
}
function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
function createHoverEvent(visualElement2, isActive, callback) {
  return function(event, info) {
    var _a;
    if (!isMouseEvent(event) || isDragActive())
      return;
    (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
    callback === null || callback === void 0 ? void 0 : callback(event, info);
  };
}
function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
  usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0);
  usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0);
}

// node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
init_react();
var import_react30 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
init_react();
var isNodeOrChild = function(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
init_react();
var import_react29 = __toESM(require_react(), 1);
function useUnmountEffect(callback) {
  return (0, import_react29.useEffect)(function() {
    return function() {
      return callback();
    };
  }, []);
}

// node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
function useTapGesture(_a) {
  var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = (0, import_react30.useRef)(false);
  var cancelPointerEndListeners = (0, import_react30.useRef)(null);
  function removePointerEndListener() {
    var _a2;
    (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    var _a2;
    removePointerEndListener();
    isPressing.current = false;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd())
      return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    var _a2;
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
  }
  usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0);
  useUnmountEffect(removePointerEndListener);
}

// node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
init_react();
var import_react31 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
init_react();
var warned = /* @__PURE__ */ new Set();
function warnOnce2(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
init_react();
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = function(entry2) {
  var _a;
  (_a = observerCallbacks.get(entry2.target)) === null || _a === void 0 ? void 0 : _a(entry2);
};
var fireAllObserverCallbacks = function(entries) {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
  var root = _a.root, options = __rest(_a, ["root"]);
  var lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __assign({ root }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return function() {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
function useViewport(_a) {
  var visualElement2 = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
  var state = (0, import_react31.useRef)({
    hasEnteredView: false,
    isInView: false
  });
  var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView)
    shouldObserve = false;
  var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement2, viewport);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var root = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once3 = _a.once;
  (0, import_react31.useEffect)(function() {
    if (!shouldObserve)
      return;
    var options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    var intersectionCallback = function(entry2) {
      var _a2;
      var isIntersecting = entry2.isIntersecting;
      if (state.isInView === isIntersecting)
        return;
      state.isInView = isIntersecting;
      if (once3 && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, isIntersecting);
      var props = visualElement2.getProps();
      var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback === null || callback === void 0 ? void 0 : callback(entry2);
    };
    return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
  (0, import_react31.useEffect)(function() {
    if (!shouldObserve || !fallback)
      return;
    if (process$1.env.NODE_ENV !== "production") {
      warnOnce2(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    requestAnimationFrame(function() {
      var _a2;
      state.hasEnteredView = true;
      var onViewportEnter = visualElement2.getProps().onViewportEnter;
      onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, true);
    });
  }, [shouldObserve]);
}

// node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs
init_react();
var makeRenderlessComponent = function(hook) {
  return function(props) {
    hook(props);
    return null;
  };
};

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
init_react();
var import_react33 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
init_react();
var import_react32 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-id.mjs
init_react();
var counter = 0;
var incrementId = function() {
  return counter++;
};
var useId = function() {
  return useConstant(incrementId);
};

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function usePresence() {
  var context = (0, import_react32.useContext)(PresenceContext);
  if (context === null)
    return [true, null];
  var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
  var id2 = useId();
  (0, import_react32.useEffect)(function() {
    return register(id2);
  }, []);
  var safeToRemove = function() {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id2);
  };
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
init_react();
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/animation.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
init_react();
var isNumericalString = function(v) {
  return /^\-?\d*\.?\d+$/.test(v);
};

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
init_react();
var isZeroValueString = function(v) {
  return /^0[^.\s]+$/.test(v);
};

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
init_react();
var testValueType = function(v) {
  return function(type) {
    return type.test(v);
  };
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
init_react();
var auto = {
  test: function(v) {
    return v === "auto";
  },
  parse: function(v) {
    return v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = function(v) {
  return dimensionValueTypes.find(testValueType(v));
};

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes), false), [color, complex], false);
var findValueType = function(v) {
  return valueTypes.find(testValueType(v));
};

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition) {
  var resolved = resolveVariant(visualElement2, definition);
  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = __rest(_a, ["transitionEnd", "transition"]);
  target = __assign(__assign({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function(key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement2) {
  var _a, _b;
  var origin = {};
  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin;
}

// node_modules/framer-motion/dist/es/render/utils/animation.mjs
function animateVisualElement(visualElement2, definition, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement2.notifyAnimationStart(definition);
  var animation;
  if (Array.isArray(definition)) {
    var animations2 = definition.map(function(variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement2, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation.then(function() {
    return visualElement2.notifyAnimationComplete(definition);
  });
}
function animateVariant(visualElement2, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  var getAnimation2 = resolved ? function() {
    return animateTarget(visualElement2, resolved, options);
  } : function() {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function() {
    return Promise.resolve();
  };
  var when = transition.when;
  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
  var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
  if (transitionOverride)
    transition = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var valueTransition = __assign({ delay }, transition);
    if (visualElement2.shouldReduceMotion && isTransformProp(key)) {
      valueTransition = __assign(__assign({}, valueTransition), { type: false, delay: 0 });
    }
    var animation = startAnimation(key, value, valueTarget, valueTransition);
    animations2.push(animation);
  }
  return Promise.all(animations2).then(function() {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function(i) {
    if (i === void 0) {
      i = 0;
    }
    return i * staggerChildren;
  } : function(i) {
    if (i === void 0) {
      i = 0;
    }
    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
    animations2.push(animateVariant(child, variant, __assign(__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return function(animations2) {
    return Promise.all(animations2.map(function(_a) {
      var animation = _a.animation, options = _a.options;
      return animateVisualElement(visualElement2, animation, options);
    }));
  };
}
function createAnimationState(visualElement2) {
  var animate3 = animateList(visualElement2);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  var buildResolvedTypeValues = function(acc, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
      acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }
  function setAnimateFunction(makeAnimator) {
    animate3 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    var props = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */ new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;
    var _loop_1 = function(i2) {
      var type = reversePriorityOrder[i2];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i2;
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = __assign({}, encounteredKeys);
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return "continue";
      }
      var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop) ? prop : [prop];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function(key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
          return {
            animation,
            options: __assign({ type }, options)
          };
        })), false));
      }
    };
    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }
    allAnimatedKeys = __assign({}, encounteredKeys);
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function(key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation_1 });
    }
    var shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate3(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    var animations2 = animateChanges(options, type);
    for (var key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function() {
      return state;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: makeRenderlessComponent(function(_a) {
    var visualElement2 = _a.visualElement, animate3 = _a.animate;
    visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
    if (isAnimationControls(animate3)) {
      (0, import_react33.useEffect)(function() {
        return animate3.subscribe(visualElement2);
      }, [animate3]);
    }
  }),
  exit: makeRenderlessComponent(function(props) {
    var custom = props.custom, visualElement2 = props.visualElement;
    var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
    var presenceContext = (0, import_react33.useContext)(PresenceContext);
    (0, import_react33.useEffect)(function() {
      var _a2, _b;
      visualElement2.isPresent = isPresent;
      var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
      !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
    }, [isPresent]);
  })
};

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
init_react();
var import_react34 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/PanSession.mjs
init_react();
var PanSession = function() {
  function PanSession2(event, handlers, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = function() {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
        return;
      var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      var point2 = info2.point;
      var timestamp2 = getFrameData().timestamp;
      _this.history.push(__assign(__assign({}, point2), { timestamp: timestamp2 }));
      var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info2);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info2);
    };
    this.handlePointerMove = function(event2, info2) {
      _this.lastMoveEvent = event2;
      _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
      if (isMouseEvent(event2) && event2.buttons === 0) {
        _this.handlePointerUp(event2, info2);
        return;
      }
      es_default.update(_this.updatePoint, true);
    };
    this.handlePointerUp = function(event2, info2) {
      _this.end();
      var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
      if (_this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = getFrameData().timestamp;
    this.history = [__assign(__assign({}, point), { timestamp })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  PanSession2.prototype.updateHandlers = function(handlers) {
    this.handlers = handlers;
  };
  PanSession2.prototype.end = function() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  };
  return PanSession2;
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
init_react();
function applyConstraints(point, _a, elastic) {
  var min = _a.min, max = _a.max;
  if (min !== void 0 && point < min) {
    point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max, min], 2), min = _a[0], max = _a[1];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic) {
  if (dragElastic === void 0) {
    dragElastic = defaultElastic;
  }
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
init_react();

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
init_react();
function convertBoundingBoxToBox(_a) {
  var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox(_a) {
  var x = _a.x, y = _a.y;
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  var topLeft = transformPoint2({ x: point.left, y: point.top });
  var bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  var viewportBox = measureViewportBox(element, transformPagePoint);
  var scroll = rootProjectionNode2.scroll;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.x);
    translateAxis(viewportBox.y, scroll.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = function() {
  function VisualElementDragControls2(visualElement2) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement2;
  }
  VisualElementDragControls2.prototype.start = function(originEvent, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
    if (this.visualElement.isPresent === false)
      return;
    var onSessionStart = function(event) {
      _this.stopAnimation();
      if (snapToCursor) {
        _this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    var onStart = function(event, info) {
      var _a2;
      var _b2 = _this.getProps(), drag2 = _b2.drag, dragPropagation = _b2.dragPropagation, onDragStart = _b2.onDragStart;
      if (drag2 && !dragPropagation) {
        if (_this.openGlobalLock)
          _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag2);
        if (!_this.openGlobalLock)
          return;
      }
      _this.isDragging = true;
      _this.currentDirection = null;
      _this.resolveConstraints();
      if (_this.visualElement.projection) {
        _this.visualElement.projection.isAnimationBlocked = true;
        _this.visualElement.projection.target = void 0;
      }
      eachAxis(function(axis) {
        var _a3, _b3;
        var current = _this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];
          if (measuredAxis) {
            var length_1 = calcLength(measuredAxis);
            current = length_1 * (parseFloat(current) / 100);
          }
        }
        _this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Drag, true);
    };
    var onMove = function(event, info) {
      var _a2 = _this.getProps(), dragPropagation = _a2.dragPropagation, dragDirectionLock = _a2.dragDirectionLock, onDirectionLock = _a2.onDirectionLock, onDrag = _a2.onDrag;
      if (!dragPropagation && !_this.openGlobalLock)
        return;
      var offset = info.offset;
      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset);
        if (_this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
        }
        return;
      }
      _this.updateAxis("x", info.point, offset);
      _this.updateAxis("y", info.point, offset);
      _this.visualElement.syncRender();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    var onSessionEnd = function(event, info) {
      return _this.stop(event, info);
    };
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  };
  VisualElementDragControls2.prototype.stop = function(event, info) {
    var isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    var velocity = info.velocity;
    this.startAnimation(velocity);
    var onDragEnd = this.getProps().onDragEnd;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  };
  VisualElementDragControls2.prototype.cancel = function() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    var dragPropagation = this.getProps().dragPropagation;
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  };
  VisualElementDragControls2.prototype.updateAxis = function(axis, _point, offset) {
    var drag2 = this.getProps().drag;
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    var axisValue = this.getAxisMotionValue(axis);
    var next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  };
  VisualElementDragControls2.prototype.resolveConstraints = function() {
    var _this = this;
    var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
    var layout = (this.visualElement.projection || {}).layout;
    var prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(function(axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
        }
      });
    }
  };
  VisualElementDragControls2.prototype.resolveRefConstraints = function() {
    var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
    if (!constraints || !isRefObject(constraints))
      return false;
    var constraintsElement = constraints.current;
    invariant4(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var projection = this.visualElement.projection;
    if (!projection || !projection.layout)
      return false;
    var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  };
  VisualElementDragControls2.prototype.startAnimation = function(velocity) {
    var _this = this;
    var _a = this.getProps(), drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
    var constraints = this.constraints || {};
    var momentumAnimations = eachAxis(function(axis) {
      var _a2;
      if (!shouldDrag(axis, drag2, _this.currentDirection)) {
        return;
      }
      var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      var bounceStiffness = dragElastic ? 200 : 1e6;
      var bounceDamping = dragElastic ? 40 : 1e7;
      var inertia2 = __assign(__assign({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness, bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
      return _this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  };
  VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
    var axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  };
  VisualElementDragControls2.prototype.stopAnimation = function() {
    var _this = this;
    eachAxis(function(axis) {
      return _this.getAxisMotionValue(axis).stop();
    });
  };
  VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
    var _a, _b;
    var dragKey = "_drag" + axis.toUpperCase();
    var externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  };
  VisualElementDragControls2.prototype.snapToCursor = function(point) {
    var _this = this;
    eachAxis(function(axis) {
      var drag2 = _this.getProps().drag;
      if (!shouldDrag(axis, drag2, _this.currentDirection))
        return;
      var projection = _this.visualElement.projection;
      var axisValue = _this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
        axisValue.set(point[axis] - mix(min, max, 0.5));
      }
    });
  };
  VisualElementDragControls2.prototype.scalePositionWithinConstraints = function() {
    var _this = this;
    var _a;
    var _b = this.getProps(), drag2 = _b.drag, dragConstraints = _b.dragConstraints;
    var projection = this.visualElement.projection;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    var boxProgress = { x: 0, y: 0 };
    eachAxis(function(axis) {
      var axisValue = _this.getAxisMotionValue(axis);
      if (axisValue) {
        var latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, _this.constraints[axis]);
      }
    });
    var transformTemplate = this.visualElement.getProps().transformTemplate;
    this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(function(axis) {
      if (!shouldDrag(axis, drag2, null))
        return;
      var axisValue = _this.getAxisMotionValue(axis);
      var _a2 = _this.constraints[axis], min = _a2.min, max = _a2.max;
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  };
  VisualElementDragControls2.prototype.addListeners = function() {
    var _this = this;
    var _a;
    elementDragControls.set(this.visualElement, this);
    var element = this.visualElement.getInstance();
    var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
      var _a2 = _this.getProps(), drag2 = _a2.drag, _b = _a2.dragListener, dragListener = _b === void 0 ? true : _b;
      drag2 && dragListener && _this.start(event);
    });
    var measureDragConstraints = function() {
      var dragConstraints = _this.getProps().dragConstraints;
      if (isRefObject(dragConstraints)) {
        _this.constraints = _this.resolveRefConstraints();
      }
    };
    var projection = this.visualElement.projection;
    var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    var stopResizeListener = addDomEvent(window, "resize", function() {
      _this.scalePositionWithinConstraints();
    });
    projection.addEventListener("didUpdate", function(_a2) {
      var delta = _a2.delta, hasLayoutChanged = _a2.hasLayoutChanged;
      if (_this.isDragging && hasLayoutChanged) {
        eachAxis(function(axis) {
          var motionValue2 = _this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          _this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        _this.visualElement.syncRender();
      }
    });
    return function() {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
    };
  };
  VisualElementDragControls2.prototype.getProps = function() {
    var props = this.visualElement.getProps();
    var _a = props.drag, drag2 = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props.dragElastic, dragElastic = _e === void 0 ? defaultElastic : _e, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
    return __assign(__assign({}, props), { drag: drag2, dragDirectionLock, dragPropagation, dragConstraints, dragElastic, dragMomentum });
  };
  return VisualElementDragControls2;
}();
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
function useDrag(props) {
  var groupDragControls = props.dragControls, visualElement2 = props.visualElement;
  var dragControls = useConstant(function() {
    return new VisualElementDragControls(visualElement2);
  });
  (0, import_react34.useEffect)(function() {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls, groupDragControls]);
  (0, import_react34.useEffect)(function() {
    return dragControls.addListeners();
  }, [dragControls]);
}

// node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs
init_react();
var import_react35 = __toESM(require_react(), 1);
function usePanGesture(_a) {
  var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = (0, import_react35.useRef)(null);
  var transformPagePoint = (0, import_react35.useContext)(MotionConfigContext).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function(event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  (0, import_react35.useEffect)(function() {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(function() {
    return panSession.current && panSession.current.end();
  });
}

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
init_react();

// node_modules/framer-motion/dist/es/render/html/visual-element.mjs
init_react();

// node_modules/framer-motion/dist/es/render/index.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs
init_react();
var names = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  var managers = names.map(function() {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function() {
      return managers.forEach(function(manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function(props) {
      names.forEach(function(name2) {
        var _a;
        var on2 = "on" + name2;
        var propListener = props[on2];
        (_a = propSubscriptions[name2]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        if (propListener) {
          propSubscriptions[name2] = lifecycles[on2](propListener);
        }
      });
    }
  };
  managers.forEach(function(manager, i) {
    lifecycles["on" + names[i]] = function(handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names[i]] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, __spreadArray([], __read(args), false));
    };
  });
  return lifecycles;
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
init_react();
function updateMotionValuesFromProps(element, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  for (var key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/index.mjs
var visualElement = function(_a) {
  var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox2 = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps;
  return function(_a2, options) {
    var parent = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState, shouldReduceMotion = _a2.shouldReduceMotion;
    if (options === void 0) {
      options = {};
    }
    var isMounted = false;
    var latestValues = visualState.latestValues, renderState = visualState.renderState;
    var instance;
    var lifecycles = createLifecycles();
    var values = /* @__PURE__ */ new Map();
    var valueSubscriptions = /* @__PURE__ */ new Map();
    var prevMotionValues = {};
    var baseTarget = __assign({}, latestValues);
    var removeFromVariantTree;
    function render() {
      if (!instance || !isMounted)
        return;
      triggerBuild();
      renderInstance(instance, renderState, props.style, element.projection);
    }
    function triggerBuild() {
      build(element, renderState, latestValues, options, props);
    }
    function update() {
      lifecycles.notifyUpdate(latestValues);
    }
    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function(latestValue) {
        latestValues[key2] = latestValue;
        props.onUpdate && es_default.update(update, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key2, function() {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    var initialMotionValues = scrapeMotionValuesFromProps3(props);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    var element = __assign(__assign({
      treeType,
      current: null,
      depth: parent ? parent.depth + 1 : 0,
      parent,
      children: /* @__PURE__ */ new Set(),
      presenceId,
      shouldReduceMotion,
      variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      blockInitialAnimation,
      isMounted: function() {
        return Boolean(instance);
      },
      mount: function(newInstance) {
        isMounted = true;
        instance = element.current = newInstance;
        if (element.projection) {
          element.projection.mount(newInstance);
        }
        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
        }
        values.forEach(function(value2, key2) {
          return bindToMotionValue(key2, value2);
        });
        parent === null || parent === void 0 ? void 0 : parent.children.add(element);
        element.setProps(props);
      },
      unmount: function() {
        var _a3;
        (_a3 = element.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
        cancelSync.update(update);
        cancelSync.render(render);
        valueSubscriptions.forEach(function(remove) {
          return remove();
        });
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
        lifecycles.clearAllListeners();
        instance = void 0;
        isMounted = false;
      },
      addVariantChild: function(child) {
        var _a3;
        var closestVariantNode = element.getClosestVariantNode();
        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function() {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function(other) {
        if (!sortNodePosition || treeType !== other.treeType)
          return 0;
        return sortNodePosition(element.getInstance(), other.getInstance());
      },
      getClosestVariantNode: function() {
        return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      getLayoutId: function() {
        return props.layoutId;
      },
      getInstance: function() {
        return instance;
      },
      getStaticValue: function(key2) {
        return latestValues[key2];
      },
      setStaticValue: function(key2, value2) {
        return latestValues[key2] = value2;
      },
      getLatestValues: function() {
        return latestValues;
      },
      setVisibility: function(visibility) {
        if (element.isVisible === visibility)
          return;
        element.isVisible = visibility;
        element.scheduleRender();
      },
      makeTargetAnimatable: function(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return makeTargetAnimatable(element, target, props, canMutate);
      },
      measureViewportBox: function() {
        return measureViewportBox2(instance, props);
      },
      addValue: function(key2, value2) {
        if (element.hasValue(key2))
          element.removeValue(key2);
        values.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      removeValue: function(key2) {
        var _a3;
        values.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      hasValue: function(key2) {
        return values.has(key2);
      },
      getValue: function(key2, defaultValue) {
        var value2 = values.get(key2);
        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element.addValue(key2, value2);
        }
        return value2;
      },
      forEachValue: function(callback) {
        return values.forEach(callback);
      },
      readValue: function(key2) {
        var _a3;
        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
      },
      setBaseTarget: function(key2, value2) {
        baseTarget[key2] = value2;
      },
      getBaseTarget: function(key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key2);
          if (target !== void 0 && !isMotionValue(target))
            return target;
        }
        return baseTarget[key2];
      }
    }, lifecycles), {
      build: function() {
        triggerBuild();
        return renderState;
      },
      scheduleRender: function() {
        es_default.render(render, false, true);
      },
      syncRender: render,
      setProps: function(newProps) {
        if (newProps.transformTemplate || props.transformTemplate) {
          element.scheduleRender();
        }
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps3(props), prevMotionValues);
      },
      getProps: function() {
        return props;
      },
      getVariant: function(name2) {
        var _a3;
        return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name2];
      },
      getDefaultTransition: function() {
        return props.transition;
      },
      getTransformPagePoint: function() {
        return props.transformPagePoint;
      },
      getVariantContext: function(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent)
          return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
          if (props.initial !== void 0) {
            context_1.initial = props.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props[name_1];
          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }
        return context;
      }
    });
    return element;
  };
};
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder), false);
var numVariantProps = variantProps.length;

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
init_react();
function isCSSVariable2(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  var _a = __read(match, 3), token = _a[1], fallback = _a[2];
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
  if (depth === void 0) {
    depth = 1;
  }
  invariant4(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'));
  var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable2(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;
  var target = __rest(_a, []);
  var element = visualElement2.getInstance();
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __assign({}, transitionEnd);
  }
  visualElement2.forEachValue(function(value) {
    var current2 = value.get();
    if (!isCSSVariable2(current2))
      return;
    var resolved2 = getVariableValue(current2, element);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable2(current))
      continue;
    var resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd)
      (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
init_react();
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v) {
  return v === number || v === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
      return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  width: function(_a, _b) {
    var x = _a.x;
    var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
    return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function(_a, _b) {
    var y = _a.y;
    var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
    return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function(_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function(_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function(_a, _b) {
    var y = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y.max - y.min);
  },
  right: function(_a, _b) {
    var x = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x.max - x.min);
  },
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display;
  var origin = {};
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach(function(key) {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = __assign({}, target);
  transitionEnd = __assign({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    var from2 = origin[key];
    var fromType = findDimensionValueType(from2);
    var to = target[key];
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      var fromIndex = to[0] === null ? 1 : 0;
      from2 = to[fromIndex];
      fromType = findDimensionValueType(from2);
      for (var i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant4(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant4(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from2 === 0 || to === 0)) {
        if (from2 === 0) {
          value.set(toType.transform(from2));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
};

// node_modules/framer-motion/dist/es/render/html/visual-element.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function(domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle2(domElement);
      return (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  },
  getBaseTarget: function(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function(element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return measureViewportBox(element, transformPagePoint);
  },
  resetTransform: function(element, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element.scheduleRender();
  },
  restoreTransform: function(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function(key, _a) {
    var vars = _a.vars, style = _a.style;
    delete vars[key];
    delete style[key];
  },
  makeTargetAnimatable: function(element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition || {}, element);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(element, target, origin);
      var parsed = parseDomVariant(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return __assign({ transition, transitionEnd }, target);
  },
  scrapeMotionValuesFromProps,
  build: function(element, renderState, latestValues, options, props) {
    if (element.isVisible !== void 0) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);

// node_modules/framer-motion/dist/es/render/svg/visual-element.mjs
init_react();
var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), { getBaseTarget: function(props, key) {
  return props[key];
}, readValueFromInstance: function(domElement, key) {
  var _a;
  if (isTransformProp(key)) {
    return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
  }
  key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
  return domElement.getAttribute(key);
}, scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, build: function(_element, renderState, latestValues, options, props) {
  buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
}, render: renderSVG }));

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = function(Component, options) {
  return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};

// node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
init_react();

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
init_react();
var import_react36 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
init_react();
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: function(latest, node) {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    var x = pixelsToPercent(latest, node.target.x);
    var y = pixelsToPercent(latest, node.target.y);
    return "".concat(x, "% ").concat(y, "%");
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
init_react();
var varToken = "_$css";
var correctBoxShadow = {
  correct: function(latest, _a) {
    var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
    var original = latest;
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function(match) {
        cssVariables.push(match);
        return varToken;
      });
    }
    var shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    var template = complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    var averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function() {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }
    return output;
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = function(_super) {
  __extends(MeasureLayoutWithContext2, _super);
  function MeasureLayoutWithContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MeasureLayoutWithContext2.prototype.componentDidMount = function() {
    var _this = this;
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
    var projection = visualElement2.projection;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.add(projection);
      if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", function() {
        _this.safeToRemove();
      });
      projection.setOptions(__assign(__assign({}, projection.options), { onExitComplete: function() {
        return _this.safeToRemove();
      } }));
    }
    globalProjectionState.hasEverUpdated = true;
  };
  MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
    var _this = this;
    var _a = this.props, layoutDependency = _a.layoutDependency, visualElement2 = _a.visualElement, drag2 = _a.drag, isPresent = _a.isPresent;
    var projection = visualElement2.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        es_default.postRender(function() {
          var _a2;
          if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
            _this.safeToRemove();
          }
        });
      }
    }
    return null;
  };
  MeasureLayoutWithContext2.prototype.componentDidUpdate = function() {
    var projection = this.props.visualElement.projection;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  };
  MeasureLayoutWithContext2.prototype.componentWillUnmount = function() {
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
    var projection = visualElement2.projection;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  };
  MeasureLayoutWithContext2.prototype.safeToRemove = function() {
    var safeToRemove = this.props.safeToRemove;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  };
  MeasureLayoutWithContext2.prototype.render = function() {
    return null;
  };
  return MeasureLayoutWithContext2;
}(import_react36.default.Component);
function MeasureLayout(props) {
  var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
  var layoutGroup = (0, import_react36.useContext)(LayoutGroupContext);
  return import_react36.default.createElement(MeasureLayoutWithContext, __assign({}, props, { layoutGroup, switchLayoutGroup: (0, import_react36.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove }));
}
var defaultScaleCorrectors = {
  borderRadius: __assign(__assign({}, correctBorderRadius), { applyTo: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ] }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
var layoutFeatures = {
  measureLayout: MeasureLayout
};

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
init_react();

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
init_react();
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function(ref, notify) {
    ref.addEventListener("resize", notify, { passive: true });
    return function() {
      return ref.removeEventListener("resize", notify);
    };
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  }
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function(instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function() {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: function(instance, value) {
    instance.style.transform = value !== null && value !== void 0 ? value : "none";
  }
});

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var featureBundle = __assign(__assign(__assign(__assign({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = /* @__PURE__ */ createMotionProxy(function(Component, config2) {
  return createDomMotionConfig(Component, config2, featureBundle, createDomVisualElement, HTMLProjectionNode);
});

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
init_react();
var React9 = __toESM(require_react(), 1);
var import_react40 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
init_react();
var import_react38 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
init_react();
var import_react37 = __toESM(require_react(), 1);
function useIsMounted() {
  var isMounted = (0, import_react37.useRef)(false);
  useIsomorphicLayoutEffect(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate() {
  var isMounted = useIsMounted();
  var _a = __read((0, import_react38.useState)(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
  var forceRender = (0, import_react38.useCallback)(function() {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  var deferredForceRender = (0, import_react38.useCallback)(function() {
    return es_default.postRender(forceRender);
  }, [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
init_react();
var React8 = __toESM(require_react(), 1);
var import_react39 = __toESM(require_react(), 1);
var PresenceChild = function(_a) {
  var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
  var presenceChildren = useConstant(newChildrenMap);
  var id2 = useId();
  var context = (0, import_react39.useMemo)(function() {
    return {
      id: id2,
      initial,
      isPresent,
      custom,
      onExitComplete: function(childId) {
        var e_1, _a2;
        presenceChildren.set(childId, true);
        try {
          for (var _b = __values(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var isComplete = _c.value;
            if (!isComplete)
              return;
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return))
              _a2.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
      },
      register: function(childId) {
        presenceChildren.set(childId, false);
        return function() {
          return presenceChildren.delete(childId);
        };
      }
    };
  }, presenceAffectsLayout ? void 0 : [isPresent]);
  (0, import_react39.useMemo)(function() {
    presenceChildren.forEach(function(_, key) {
      return presenceChildren.set(key, false);
    });
  }, [isPresent]);
  React8.useEffect(function() {
    !isPresent && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
  }, [isPresent]);
  return React8.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var getChildKey = function(child) {
  return child.key || "";
};
var isDev = process$1.env.NODE_ENV !== "production";
function updateChildLookup(children, allChildren) {
  var seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
  children.forEach(function(child) {
    var key = getChildKey(child);
    if (isDev && seenChildren && seenChildren.has(key)) {
      console.warn('Children of AnimatePresence require unique keys. "'.concat(key, '" is a duplicate.'));
      seenChildren.add(key);
    }
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  var filtered = [];
  import_react40.Children.forEach(children, function(child) {
    if ((0, import_react40.isValidElement)(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = function(_a) {
  var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
  var _d = __read(useForceUpdate(), 1), forceRender = _d[0];
  var forceRenderLayoutGroup = (0, import_react40.useContext)(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup)
    forceRender = forceRenderLayoutGroup;
  var isMounted = useIsMounted();
  var filteredChildren = onlyElements(children);
  var childrenToRender = filteredChildren;
  var exiting = /* @__PURE__ */ new Set();
  var presentChildren = (0, import_react40.useRef)(childrenToRender);
  var allChildren = (0, import_react40.useRef)(/* @__PURE__ */ new Map()).current;
  var isInitialRender = (0, import_react40.useRef)(true);
  useIsomorphicLayoutEffect(function() {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(function() {
    isInitialRender.current = true;
    allChildren.clear();
    exiting.clear();
  });
  if (isInitialRender.current) {
    return React9.createElement(React9.Fragment, null, childrenToRender.map(function(child) {
      return React9.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout }, child);
    }));
  }
  childrenToRender = __spreadArray([], __read(childrenToRender), false);
  var presentKeys = presentChildren.current.map(getChildKey);
  var targetKeys = filteredChildren.map(getChildKey);
  var numPresent = presentKeys.length;
  for (var i = 0; i < numPresent; i++) {
    var key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    }
  }
  if (exitBeforeEnter && exiting.size) {
    childrenToRender = [];
  }
  exiting.forEach(function(key2) {
    if (targetKeys.indexOf(key2) !== -1)
      return;
    var child = allChildren.get(key2);
    if (!child)
      return;
    var insertionIndex = presentKeys.indexOf(key2);
    var onExit = function() {
      allChildren.delete(key2);
      exiting.delete(key2);
      var removeIndex = presentChildren.current.findIndex(function(presentChild) {
        return presentChild.key === key2;
      });
      presentChildren.current.splice(removeIndex, 1);
      if (!exiting.size) {
        presentChildren.current = filteredChildren;
        if (isMounted.current === false)
          return;
        forceRender();
        onExitComplete && onExitComplete();
      }
    };
    childrenToRender.splice(insertionIndex, 0, React9.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout }, child));
  });
  childrenToRender = childrenToRender.map(function(child) {
    var key2 = child.key;
    return exiting.has(key2) ? child : React9.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout }, child);
  });
  if (process$1.env.NODE_ENV !== "production" && exitBeforeEnter && childrenToRender.length > 1) {
    console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
  }
  return React9.createElement(React9.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map(function(child) {
    return (0, import_react40.cloneElement)(child);
  }));
};

// app/utils/index.js
init_react();
var isBrowser2 = () => typeof window !== "undefined";
var getDimension = (width, height, maxWidth, maxHeight) => {
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return { width: width * ratio, height: height * ratio };
};
var getPhotoSrcSet = (photo) => {
  const prefix = "/__moul/photos";
  return `${prefix}/${photo == null ? void 0 : photo.hash}/sm/${photo == null ? void 0 : photo.name} 320w,
	${prefix}/${photo == null ? void 0 : photo.hash}/md/${photo == null ? void 0 : photo.name} 768w,
	${prefix}/${photo == null ? void 0 : photo.hash}/lg/${photo == null ? void 0 : photo.name} 1024w,
	${prefix}/${photo == null ? void 0 : photo.hash}/xl/${photo == null ? void 0 : photo.name} 1440w`;
};
var getPhotoSrc = (photo) => {
  const prefix = "/__moul/photos";
  return `${prefix}/${photo == null ? void 0 : photo.hash}/xl/${photo == null ? void 0 : photo.name}`;
};

// data/stories.json
var stories_default = [{ slug: "sunset-at-its-finest", blocks: [{ type: "title", text: "Sunset at its finest" }, { type: "paragraph", text: "Angkor archaeological park is known for lost ruins, abundant ancient temples." }, { type: "paragraph", text: "But one thing that we can't deny is how magnificent the sunset around the temple complex. Do not take my words for it, see for yourself." }, { type: "photos", text: "section-1" }, { type: "paragraph", text: "After I got above photos, I decided to go next day as well. And oh, did I make the right decision!!!" }, { type: "photos", text: "section-2" }, { type: "paragraph", text: "It looks like straight out of a magical world to me. I didn't stop there, the next day I went to the same area." }, { type: "photos", text: "section-3" }, { type: "photos", text: "section-4" }, { type: "paragraph", text: "Well, guess what? I went to that place again!" }, { type: "photos", text: "section-5" }, { type: "quote", text: "There are no post-processing done in all above photos. It is straight out of camera (SOOC)." }], profile: { name: "Phearak S. Tha", bio: "Software Engineer \u2022 Photographer", social: { github: "thasophearak", twitter: "thasophearak", youtube: "thasophearak", facebook: "", instagram: "" }, cover: { name: "dscf3742-4k-by-phearak-s-tha.jpeg", order: 0, hash: "3313ddddca94a498", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AMLwx4ygnlAXXbbH+8OK7+bxDpz2NwW8S264i5+YV+U3hu8nt3n8qeSL5l+45Hc16TfXU0mi6hvmkb/RR1YntXHPAYh6qt3+yu56LzjCUPc9g2/8R//Z", width: 4098, height: 2732, type: "", url: "" }, picture: { name: "dscf1983-1024-by-phearak-s-tha.jpeg", order: 0, hash: "03cf8fda229512c7", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APGfF3i/UNM0m6ktZSZ3IVXKZCe9W/AHjW91vQZ5LicNND+7MgXG/wB8dq8++IHi27tdL154ZYBHaQFlRhnL4yK0/hv4rutT0TT7lLeBLeazDXIT/noR1NAH/9k=", width: 1024, height: 1024, type: "", url: "" } }, photos: [{ name: "dscf3712-4k-by-phearak-s-tha.jpeg", order: 1, hash: "c8dcab98fd3fc77e", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APLbj9oS1DylbuIv6Zrj/FX7UMFjBMDOjZ4wvJP4V5hLaQCaU+THncOdgrkfiTaQLaSsIYwwXIIQZFfO08FRVRJ3d/M+6qV60ozcbK3l/wAE/9k=", width: 4098, height: 2732, type: "cover", url: "" }, { name: "dscf3290-4k-by-phearak-s-tha.jpeg", order: 2, hash: "268b974a7636738d", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APZ/DH7ZHwl8Sahe20AkSRACyMrAr9a8s+O37VXwf04y29xcMbllyIY1Z2/ICvPfBWnWvmam32aHccfN5Yz0r5Y/avs7eLxDbSJBGkhDAuqAEj0zWeEpV6jS9prZvbsd0YwnSk5xTsf/2Q==", width: 4098, height: 2732, type: "section-1", url: "" }, { name: "dscf3295-4k-by-phearak-s-tha.jpeg", order: 3, hash: "e7fa0e4739e6088f", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AHXP7BlxBpd0ottPuCTknzSf614Ze/sB35vbgrHaoPMbCi4bA56dawPD37TFtpnh/UlXxX4yu5XOfMlUuE47EDA/GvG7n49arLcyuvjPxftZywzJFnBP1rtq47GqbjJJ28zFYLDxpxcG436JJH//2Q==", width: 2732, height: 4098, type: "section-1", url: "" }, { name: "dscf3317-4k-by-phearak-s-tha.jpeg", order: 4, hash: "afab3c6dc552cc77", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APjL4OWfw28S6zNDJ4WurmBQGYzEuE+pyasfFo/CLSNS8q08O3Nu+0qqRB0De45Aqt8KXa3vNQ8pjHubnYcZ4rE+KcrnU0y7Hg968qEpOro2lbv5HqxlH6q5cqe/RdLn/9k=", width: 4098, height: 2732, type: "section-1", url: "" }, { name: "dscf3333-4k-by-phearak-s-tha.jpeg", order: 5, hash: "76220b2a95352f19", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APHj4g0C+shPDeW8kUnKsXHNcbceLvDCXEqtqVsGDEEeYPWvIlk0y2sDGmnWjRhsgtNjd+FcDd6ho/2ubNigO9uFfIHPaual9Zk3aX5f5nq3y/lT5X+P/wAif//Z", width: 2732, height: 4098, type: "section-1", url: "" }, { name: "dscf3373-4k-by-phearak-s-tha.jpeg", order: 6, hash: "786ccc1449d13ff6", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APnPwd+1bptxqEEUekXOny/c86cDYqd8nNN+LH7TUOjCK00+xeaA/MrdAfU5r5S8M3Es+s28ckjyRseUdiQfwq749ld9UCs7FVACgngDA6Vx08LGLSV/vZ7s6/tKE5J/gj//2Q==", width: 4098, height: 2732, type: "section-2", url: "" }, { name: "dscf3382-4k-by-phearak-s-tha.jpeg", order: 7, hash: "79086e18a13fd4f4", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AMHxV8M9HstOQDW9SlnmfbCIo8kt78dK8juvhMwupg+v6kj7zlQi8HPT7tLqv7T82laLdI2vWYupZB5Uix7yB9BXhl7+0h4pkvbh016N1aRiG+yHkZ61z4fMcVG6dO3yf/yJ7M8vwc9Y1F98f/kj/9k=", width: 2732, height: 4098, type: "section-2", url: "" }, { name: "dscf3391-4k-by-phearak-s-tha.jpeg", order: 8, hash: "7bbe335c5f46d5d9", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APmTR/gqw0GbFppYVeXMOd31FcbL8HJzK5VIyu44O5hxXsnhD45XLeFJG1Hw1pVhEATHLBdiRmPoRgYrza5/aZ1aO5lUaFpfyuR/x8+/+7Xh0Mwm3KMYrT+8v0Z9RXyOlJRfM/u/4DP/2Q==", width: 2732, height: 4098, type: "section-2", url: "" }, { name: "dscf3398-4k-by-phearak-s-tha.jpeg", order: 9, hash: "29f1f5b6f4cde8d7", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APnL4ReFNAn1Rls9XTay5ZgwIJq18S/Cfhu0muFuNRRJShyC4G73r5/+BMrpq90FdlGAeDioPjXK8+rRtI7SMDgFjkgV5cfbyxEv3n4H0dalg6WW05ex0bta7P/Z", width: 4098, height: 2732, type: "section-2", url: "" }, { name: "dscf3435-4k-by-phearak-s-tha.jpeg", order: 10, hash: "856d766018bdbcd6", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APm2P4CXIuEtonluELfIs/3XXviuZu/2X4/tc2DInzt8ok6c9K29H/aauG0aSFpo5mOVilcbDF9M9a8tuf2h9a+0y7bkuu84bnkZ60sNicY5SvCz9bdz26tDCX92pfa/Xp6n/9k=", width: 2732, height: 4098, type: "section-2", url: "" }, { name: "dscf3464-4k-by-phearak-s-tha.jpeg", order: 11, hash: "4d5dfaa85aae362b", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APYbz9mfxNbx6iFtLCUlcKxY5xivj7Wf2LvFs+sX0gESB55G246ZY8V9teGv2h/iTqdprDap4W0u28uBmV4rzeQcdegr87df/bg+NkGu6lEtlpwVLmRR/o0j8Bj/ABbxn64GfSviqSlNuNKpZ/4l/wAE+0lXnSXNKnv5M//Z", width: 2732, height: 4098, type: "section-3", url: "" }, { name: "dscf3475-4k-by-phearak-s-tha.jpeg", order: 12, hash: "27eaa82b679da229", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APoCD9pe/wBV03xBO3h25he3hJVm6E4r83/Gn7ePibVJ722GhJDEZnBMsmDkEj+7X3GZHGg+IwHYDyT39q/Lb4owRr9tZY1DfaXO4KM/er4zKfZ16/LVje7XV+Z9nmMZ4aknCb27LXY//9k=", width: 4098, height: 2732, type: "section-3", url: "" }, { name: "dscf3495-4k-by-phearak-s-tha.jpeg", order: 13, hash: "e2a0a1b45f375d4f", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ANqHw/8ABd4rvUluLe+ltR5wTfnDAcNXkVx8bfAz3ErJ4ttEQsSq+avAz0rzOw8b+DI9F1m2sbdEaSBvNVeAox0Jr5Ze80VnYrAVUnhWTkCvksLl0JSkqkbW2uv+HPsa+KpwhG07J37/AKI//9k=", width: 2732, height: 4098, type: "section-3", url: "" }, { name: "dscf3519-4k-by-phearak-s-tha.jpeg", order: 14, hash: "f6a64687199497f6", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APMvBGo/Cbx5piWmofDO8tmt5NiPeWu0KPY+leLftAa18LtC8bPo8Pge5tra2iG3yMRA57ghgcUvhbXdSNo4Oo3ZG4cee3+NeJ/F2/ub7xxeNc3EtwyqqgyuWIGOgz2rjpQm7PnfLba77HrNJYZTsr6dEf/Z", width: 4098, height: 2732, type: "section-3", url: "" }, { name: "dscf3533-4k-by-phearak-s-tha.jpeg", order: 15, hash: "1ede43d810575fb9", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APJv2odM+HGjeFW1DT/AmkwSCVBJcJKqSNyBgHrXzS+u+EQ7A+C7MEHp/aI4/WvR/wBqOHTrfwnZR2tnppHngBjd/vF4PQZ5/wAM181/Yov+eNl/4Gj/AOKrhwuIrQg1LTV9fTtJHtYinhXKLutl38/7jP/Z", width: 2732, height: 4098, type: "section-3", url: "" }, { name: "dscf3604-4k-by-phearak-s-tha.jpeg", order: 16, hash: "6c1825b55b8d2550", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APi+x+IlvqMpjSNtzRlgCMVxWofFhYnljWzkEisVJbAFXbFVWQlQAQh5ArzXVmJaTJJy5rJTfNYcqmiutf8Ahj//2Q==", width: 4098, height: 2732, type: "section-4", url: "" }, { name: "dscf3612-4k-by-phearak-s-tha.jpeg", order: 17, hash: "14e30d242522165c", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APmrVtQgW2uJRfIIl5ZgelcW3ibSWYn+2Y+Tn7wrj9TsrW30u/hinnJlBGNxI6V5idOCkgu2RxwKcKk7am6hTlsvxP/Z", width: 2732, height: 4098, type: "section-4", url: "" }, { name: "dscf3671-4k-by-phearak-s-tha.jpeg", order: 18, hash: "253fd9ecd612ed79", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APku38aSXdncMdYt96kEtx+tcVc+OtS+0S7NWtdm84/dMeM12OifFrwKmmagp0C4aYt+62W5IcY6sQMD8a5GX4qeBWlct4abcSScxp/jXzGGhOMpJ4Z2/wC3T9HxmGpOMH/aUE/KM/0Z/9k=", width: 2732, height: 4098, type: "section-4", url: "" }, { name: "dscf3682-4k-by-phearak-s-tha.jpeg", order: 19, hash: "60680694118d0232", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APnKX4n3Fw8rvrlsVBAyQBWFL8TZRK+NXt8bj2rGs/jF4HgtZjJpM0zBsbmg/rXPT/Fjwe00hGhEgsSD5S+v1r4ull8tV9Tl/wCSH6viLtRazOlf1n+jZ//Z", width: 2732, height: 4098, type: "section-4", url: "" }, { name: "dscf3706-4k-by-phearak-s-tha.jpeg", order: 20, hash: "bf308ced58ee51e2", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APEbr4jPHuKXkfPNYz/Eu4Lt/psXX0rx1H1OaN8Wcf131lSf2mJGHkx9T/nrXy9PC0NU5L70faVcbiklJUJ6+Uv8j//Z", width: 2732, height: 4098, type: "section-4", url: "" }, { name: "dscf3735-by-phearak-s-tha.jpeg", order: 21, hash: "e105409c589013ec", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APBtF+EWutZHzF3NuzkLXJ3vwb8RG8nIhcjzGwce9fZfhn42fDO8sZJE13T9qtziZf8AGuSvf2kfhLDeTo2vWAZZGU5mXqD9a9CnnOG191P5HBiOHqslFTdren6n/9k=", width: 2731, height: 4096, type: "section-5", url: "" }, { name: "dscf3742-4k-by-phearak-s-tha.jpeg", order: 22, hash: "3313ddddca94a498", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AMLwx4ygnlAXXbbH+8OK7+bxDpz2NwW8S264i5+YV+U3hu8nt3n8qeSL5l+45Hc16TfXU0mi6hvmkb/RR1YntXHPAYh6qt3+yu56LzjCUPc9g2/8R//Z", width: 4098, height: 2732, type: "section-5", url: "" }, { name: "dscf3750-4k-by-phearak-s-tha.jpeg", order: 23, hash: "e347a515a1a7906f", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APPNM+H9rHC8Zt1Ubui9KzJ/h1Y+fJ/oy/ePb3r03T9V0BV2yeILGKTd3kGKyLnxH4YW4lB8S2GQ5/5ar6/WvMjntO7s3+J7kuGJtJOC078p/9k=", width: 2732, height: 4098, type: "section-5", url: "" }, { name: "dscf3758-4k-by-phearak-s-tha.jpeg", order: 24, hash: "e8e9add95bb0b6ca", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APKD4eUM44+8Ky5vDS+a/A+8arXPxNtoIzIHhbLY27uRXOz/ABhtlnkBMOQx/jHrXPDGzkrpHfUwSjKzP//Z", width: 2732, height: 4098, type: "section-5", url: "" }] }, { slug: "virachey-the-raw-beauty-of-nature", blocks: [{ type: "title", text: "Virachey \u2014 The raw beauty of nature" }, { type: "paragraph", text: "A breathtaking view covering ~3,325 square kilometers, Virachey National Park spans the northern sections of Ratanakiri and Stung Treng provinces of Eastern Cambodia." }, { type: "photos", text: "section-1" }, { type: "heading", text: "The sky during the night" }, { type: "photos", text: "section-2" }], profile: { name: "Phearak S. Tha", bio: "Software Engineer \u2022 Photographer", social: { github: "thasophearak", twitter: "thasophearak", youtube: "thasophearak", facebook: "", instagram: "" }, cover: { name: "dscf3742-4k-by-phearak-s-tha.jpeg", order: 0, hash: "3313ddddca94a498", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AMLwx4ygnlAXXbbH+8OK7+bxDpz2NwW8S264i5+YV+U3hu8nt3n8qeSL5l+45Hc16TfXU0mi6hvmkb/RR1YntXHPAYh6qt3+yu56LzjCUPc9g2/8R//Z", width: 4098, height: 2732, type: "", url: "" }, picture: { name: "dscf1983-1024-by-phearak-s-tha.jpeg", order: 0, hash: "03cf8fda229512c7", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APGfF3i/UNM0m6ktZSZ3IVXKZCe9W/AHjW91vQZ5LicNND+7MgXG/wB8dq8++IHi27tdL154ZYBHaQFlRhnL4yK0/hv4rutT0TT7lLeBLeazDXIT/noR1NAH/9k=", width: 1024, height: 1024, type: "", url: "" } }, photos: [{ name: "photo-03-by-phearak-s-tha.jpeg", order: 1, hash: "071f9a10c62be240", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APW9I/bD+HdoZGh+IGjso7fao+P1rqYv22/AdrbXzp4s04HyeSZ149+tfip8P7G2vb6Rbi3inUKvEqBh1PrXrWp+F9Gj8L30q6RYLKsLFXFsgYHHUHFa15wlVceXW6691fsOFKVOmpJ6M//Z", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-04-by-phearak-s-tha.jpeg", order: 2, hash: "fd52ef5c330613f9", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ALVp+1z8MjqM6jU4VmUYwX5rsI/2zPA+mabcSLfxNCsRyAw6etfmlpen2reIdUY20JYImCYxkV6Zf6ZZpoN4y2kCt9hPIjGen0rXGYudnp/Wn+Z87h8b7+kel/vP/9k=", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-05-by-phearak-s-tha.jpeg", order: 3, hash: "9537e58d7160b93a", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APTbX4ik3Em3xdYugI4yKtX3xAlaO6Mfi6xVfLzgkcV+NPh+9uLe9hEU8sQZ+QjkZro/GGo3UYmVbmZVkiAcCQgMM9/WvolO8PafoeBOk4Vo0uZ6+Z//2Q==", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-10-by-phearak-s-tha.jpeg", order: 4, hash: "f893844c8c0bb471", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ANe1/bL8C3l7MklwqS4GVJwa6B/2qvBJtJma6TiEndu4Ar8/tKtYX1TVGaGNjtXkqK27yCP+xLz92n+q/uj0rhxOKr02o2T+/tc8Shm3NFScd1fof//Z", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-11-by-phearak-s-tha.jpeg", order: 5, hash: "cade254cf0efcb30", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOdbS/hX4i0zUbK6miS5ZwYrgt9wV4R8dPht8J7TXY3t9fgtwbbkpOAZGHfHc1wNiBL4a1FXG8MwBDc5FeU/Ea2htfEWyGJIU8hDtjUKO/pXJQlUi3aTWrOiVRSgrxWyP//Z", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-12-by-phearak-s-tha.jpeg", order: 6, hash: "6057f5e904cf5259", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APEvCniX4U31pcb54JpQp/eB87TXIfYPhZqV7NNL4vsrbLHI+0qMj06184+DUVrHUcqDlCDkdeK5yNQbsggEZPGKv6q5JNy3Z1SpxjGEmlqf/9k=", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-13-by-phearak-s-tha.jpeg", order: 7, hash: "8eb12215019ee84a", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APjfVtF+DGpuWhuorF2YLhZyoUd+M4rT+JHhv4GQaNZSaTqMAuY4sSC2nLM5x1wCc189+KYY4rt9kap8w+6AO1dL8Q9Ms7LRdMe3tIIHeNSzRRqpbjuQKxm22nd2LhO8W7I//9k=", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-15-by-phearak-s-tha.jpeg", order: 8, hash: "fdcbc2eeb1462aae", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APJND8ArHpnmp8R4UhDYCAIf1Oa1/EXgmKz0aWWT4qwKDEfkYRAH26V+fOmfvLuJH+ZM/dbkdPSt3VrSBNJuXWGNXGzDBACOR3rWrmFVTS/RdTko4Oik4JbLu/8AM//Z", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-18-by-phearak-s-tha.jpeg", order: 9, hash: "3929247b275183eb", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAgAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOm8L/tzrdskrRZyOMDt61X8c/t0W0Gg3ZWxmfAIBVM7j7V8Z+Bv+PSP/rkal8Z/8i2/0NfIVOIavt4xVKOr8/8AM4ZVa8aLnz6+h//Z", width: 6240, height: 3120, type: "section-1", url: "" }, { name: "photo-20-by-phearak-s-tha.jpeg", order: 10, hash: "bd675ac1696391c0", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAgAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APN/A/w4/ZOkkR8xalIPvp/aEkuf+AlyKsfEzwf+ybaQEnT009guY/JuZISTj/ZYZ+lfHPwS/wCQhL/vf0rR+PX3rT/e/oa6o01KLfkzmnVnGah6dD//2Q==", width: 6240, height: 3120, type: "section-1", url: "" }, { name: "photo-21-by-phearak-s-tha.jpeg", order: 11, hash: "f8b57d1c934fb9b2", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAgAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOj0H9tTxTqc2y31XS1uZEI8wuCqt2Fc/wCJv22/iXp/g/UJdT1DQpL63Zot8TkRlc8dehxivlf4b/8AH4n/AF0/oKd8Vf8AkTNf/wCvhf5iuWWJqLmato307Hh4fGVamF9q5O/Nbfyuf//Z", width: 6240, height: 3120, type: "section-1", url: "" }, { name: "photo-23-by-phearak-s-tha.jpeg", order: 12, hash: "c2667519f9d378ac", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOH+BP7U3wdsEitLiOSynJwRMhXJ+vQ/nXUfGL9pz4MS6ZdwPOJZ/LwIkyznPTgc18JfBG0gnvYmkhjkbe3LICa3vjzp1pFYPMltCkwKgSLGAwGR3qaqbStJ6l0MQnGS5Vo7H//Z", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-24-by-phearak-s-tha.jpeg", order: 13, hash: "85ee09e529925e82", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOJ8Q/s3Q+RcgQoxJB3AkZrwq/8A2ZoXvrhjCuTIx/Wvc/FP7e2kW1ldSnwjf/KwVgIQAv4kgV47cftyafLPI6+GZgrMSMsvr9a9iGNoyXvxueQsBHmbhK3pof/Z", width: 4160, height: 6240, type: "section-1", url: "" }, { name: "photo-25-by-phearak-s-tha.jpeg", order: 14, hash: "56be3d56cbf314c1", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APaLnxj4Hktbkx+JbZFPcyCvnr45+NfhrHaTRXPiqz85kOyPzl3H1wOpr5p8Q2VuukakggiC4ztCDFfO3i2NY9XIRQoMak4GKeDr1/ZSnzGFadKrUVGdNbXP/9k=", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-26-by-phearak-s-tha.jpeg", order: 15, hash: "96bcdb770d13e544", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APHvgR8Wvgtp84tmlWybpiZWjz9N2M10fxl+KfwRv9MuYXvre6JGPJRt7MD/ALI5r4p+C1lb3viSZbiCKdRHwJUDAfnWr8Z9Ms7KK3e3tIIHMmC0UaqSMHjgVzyc5VfjdzSFeMU4cisj/9k=", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-27-by-phearak-s-tha.jpeg", order: 16, hash: "2582daaa1018da62", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APjL4W/BjWrawvJGhz5oxvUHP0NctefATVRdz4gGN7Y5PrX0d8L/ANsjwLb6bdW974f1CKVVyPLt/Mz/AN8Zx+OK5e6/bL8FtczFfDN+ylyQQkfIz/v1zyqrmdoMuWFbpQvV1P/Z", width: 4160, height: 6240, type: "section-1", url: "" }, { name: "photo-29-by-phearak-s-tha.jpeg", order: 17, hash: "51cd9f349d21ff31", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOu8Cft0Wer6erWd5AkRzlmI59q5b4y/toJZaS8s2q2qKynYucsxx0AHJNfAHwgRZPNDgMPMJwRnsKq/GiGNTZsqKG3kZA5xg1eY0pYfEKCm9Tl9pytQavc//9k=", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-30-by-phearak-s-tha.jpeg", order: 18, hash: "3689bf215960bf66", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APUrv9qSdbi4UWBTaOCai1b9p6aDRppTEpURElR1Ar4a1DVr46peA3twR5Y481v8av6je3DeFbxjPKT9lY5Ln0oWNbnKPZmPsp8sXzbn/9k=", width: 6240, height: 4160, type: "section-1", url: "" }, { name: "photo-31-by-phearak-s-tha.jpeg", order: 19, hash: "225466c4be5be998", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APuOfTb4SyIskIG4EZYdawZ9Jv8AzpMyw53HPze9fBbftKF7yUJr2ssnmD5XjYHH5Vl3X7UwS5mUaprOA5H+qf1+ld8cVG7s/wCvvPOlUhZXZ//Z", width: 4160, height: 6240, type: "section-1", url: "" }, { name: "photo-32-by-phearak-s-tha.jpeg", order: 20, hash: "336c3f4a467d216a", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAgAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOBl/bx8YT3d3b2VpapLGAd0zgL9Kux/t0eODo96twdM8xYifklyB7E4r5NtP+Q3qn0H8qfL/wAg3V/+uYrskqjek307dT5X63UTt6/kmf/Z", width: 6240, height: 3120, type: "section-1", url: "" }, { name: "photo-36-by-phearak-s-tha.jpeg", order: 21, hash: "96bc7a015b0c602c", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAgAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOotv+CoPih5biJtBtppIMB/JKkZNUvGv/BUrxJodlIyaVZ2z+QZP3zKDn0HqfpXxX4d/wCQhrX/AF1X/wBBFcr8dv8AVL/1xH/oQruhy+1UeVWObG4WUcVKjCrJJLy7J9j/2Q==", width: 6240, height: 3120, type: "section-1", url: "" }, { name: "photo-50-by-phearak-s-tha.jpeg", order: 22, hash: "4de560c22aa4ff0f", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAACgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APZfD2iSX2ns1ulusZfJfzPmaq8+h6gJ5AEt8BjjL+9fHnhb4of6A7w69cqVk6xzZwfYVm3nxfIu5w3iW+3b2z85HOaKWdU2ryVjw51nCEW9L+h//9k=", width: 4160, height: 6240, type: "section-1", url: "" }, { name: "photo-06-by-phearak-s-tha.jpeg", order: 23, hash: "9c6789461cada4c7", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAgAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzX0jQFF5GZLwHbMq4/2j0ra8f+GpYdTRJbwGYw7gP9ms+w/wCPz/t+j/mK6j4pf8jNbf8AXof6VjKpLmXzO1UYOLP/2Q==", width: 6240, height: 3120, type: "section-2", url: "" }, { name: "photo-07-by-phearak-s-tha.jpeg", order: 24, hash: "1a43c51dec2daec4", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAkAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzR0a2AIH2gHmpPENthcGcA4zg96xtG/wCPkf59KteJv+PiP/cou7ouytc//9k=", width: 6240, height: 3510, type: "section-2", url: "" }, { name: "photo-08-by-phearak-s-tha.jpeg", order: 25, hash: "5b0b9cd521f1a6db", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzH0C3ge4UO/JHX+7TNcsooZpGEmWBx9ao6Yf8ASF/GjU2JnbJJ+tLqaJ+6f//Z", width: 6240, height: 4160, type: "section-2", url: "" }, { name: "photo-22-by-phearak-s-tha.jpeg", order: 26, hash: "68a0ddb011e280f3", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzn8P8Ah22+0xEyeW5U4YmofEHh6EFsOA2eWHesjw9PI86BpHYBTjLE1J4hmk8ofO33sdaZcrqx/9k=", width: 6240, height: 4160, type: "section-2", url: "" }] }];

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/routes/$slug.photo.$hash.jsx
var loader = async ({ request, params }) => {
  var _a;
  const { slug, hash } = params;
  const story = stories_default.find((story2) => story2.slug === slug);
  const currentPhoto = story == null ? void 0 : story.photos.find((p) => p.hash === hash);
  const title2 = (_a = story == null ? void 0 : story.blocks.find((b2) => b2.type === "title")) == null ? void 0 : _a.text;
  return (0, import_cloudflare2.json)({
    currentPhoto,
    photos: story == null ? void 0 : story.photos,
    slug,
    story,
    title: title2
  }, {
    headers: { Link: request.url }
  });
};
var headers = ({ loaderHeaders }) => {
  var _a;
  let cacheControl = ((_a = loaderHeaders.get("Link")) == null ? void 0 : _a.includes("localhost:")) ? "public, max-age=0, must-revalidate" : "public, max-age=1800, s-maxage=2592000, stale-while-revalidate=31540000000";
  return {
    Link: `${loaderHeaders.get("Link")}; rel="canonical"`,
    "Cache-Control": cacheControl
  };
};
var meta2 = ({ data }) => {
  const { name: name2, bio: bio2, social: social2 } = data.story.profile;
  const { title: t, currentPhoto } = data;
  const title2 = t ? `${t} | ${name2}` : name2;
  const imgURL = currentPhoto && currentPhoto.bh ? `` : currentPhoto.url;
  return {
    title: title2,
    description: bio2,
    "og:title": title2,
    "og:url": data.canonical,
    "og:description": bio2,
    "og:image": imgURL,
    "twitter:card": "summary_large_image",
    "twitter:creator": social2.twitter ? social2.twitter : ""
  };
};
var swipeConfidenceThreshold = 1e4;
var swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
function Photo() {
  let { currentPhoto, photos, slug } = useLoaderData();
  let navigation = useNavigate2();
  let [photo, setPhoto] = (0, import_react42.useState)(currentPhoto.hash);
  let [width, setWidth] = (0, import_react42.useState)(0);
  let [height, setHeight] = (0, import_react42.useState)(0);
  let [currentIndex, setCurrentIndex] = (0, import_react42.useState)(0);
  let [next, setNext] = (0, import_react42.useState)("");
  let [prev, setPrev] = (0, import_react42.useState)("");
  let [wrapper, setWrapper] = (0, import_react42.useState)(0);
  let [currentWidth, setCurrentWidth] = (0, import_react42.useState)(0);
  let [ui, setUi] = (0, import_react42.useState)(true);
  let [active, setActive] = (0, import_react42.useState)("translateX(0)");
  let [transition, setTransition] = (0, import_react42.useState)("none");
  (0, import_react42.useEffect)(() => {
    if (isBrowser2()) {
      paintPhotos();
    }
    setCurrentIndex(photos.findIndex((p) => p.hash === photo));
    if (currentIndex > 0 && currentIndex < photos.length - 1) {
      setNext(photos[currentIndex + 1].hash);
      setPrev(photos[currentIndex - 1].hash);
    } else if (currentIndex === photos.length - 1) {
      setNext("");
      setPrev(photos[currentIndex - 1].hash);
    } else if (currentIndex === 0) {
      setPrev("");
      setNext(photos[currentIndex + 1].hash);
    }
    window.addEventListener("resize", paintPhotos);
    window.addEventListener("popstate", handlePopstate);
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
      window.removeEventListener("resize", paintPhotos);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [
    photo,
    currentIndex,
    next,
    prev,
    width,
    height,
    wrapper,
    currentWidth,
    ui,
    active,
    transition
  ]);
  let handlePopstate = () => {
    let pn = location.pathname.split("/");
    if (pn.length) {
      let isPhoto = pn[pn.length - 2] == "photo";
      if (isPhoto) {
        let pIdx = photos.findIndex((p) => p.hash === pn[pn.length - 1]);
        setPhoto(photos[pIdx].hash);
      }
    }
  };
  let paintPhotos = () => {
    const { width: width2, height: height2 } = getDimension(currentPhoto.width, currentPhoto.height, window.innerWidth, window.innerHeight);
    setWidth(width2);
    setHeight(height2);
    setCurrentWidth(window.innerWidth);
    setWrapper(photos.length * window.innerWidth);
    const activeIndex = photos.findIndex((p) => p.hash === photo);
    setActive(`translateX(-${currentWidth * activeIndex}px)`);
    let photosList = document.querySelectorAll(".moul-darkbox-list picture img");
    photosList.forEach((img) => {
      let [w, h] = img.getAttribute("data-size").split(":");
      let { width: width3, height: height3 } = getDimension(w, h, window.innerWidth, window.innerHeight);
      img.style.width = `${width3}px`;
      img.style.height = `${height3}px`;
    });
  };
  let handleKeyup = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    }
    if (event.key === "ArrowLeft") {
      handlePrev();
    }
    if (event.key === "Escape") {
      navigation("/" + slug);
    }
  };
  let handleNext = () => {
    if (!next)
      return;
    setTransition("all var(--transition-photos)");
    let photoIndex = currentIndex + 1;
    setPhoto(photos[photoIndex].hash);
    navigation(`/${slug}/photo/${next}`);
  };
  let handlePrev = () => {
    if (!prev)
      return;
    setTransition("all var(--transition-photos)");
    let photoIndex = currentIndex - 1;
    setPhoto(photos[photoIndex].hash);
    navigation(`/${slug}/photo/${prev}`);
  };
  let toggleUI = () => {
    setUi(!ui);
  };
  let handleUiClick = (event) => {
    if (event.target.className === "moul-darkbox-list") {
      navigation("/" + slug);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "moul-darkbox-photo"
  }, ui && /* @__PURE__ */ React.createElement(React.Fragment, null, prev && /* @__PURE__ */ React.createElement("button", {
    className: "moul-darkbox-btn fixed z-30 border-0 p-0 bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-900/20 dark:hover:bg-neutral-900/60 transition-colors is-prev left-4 rounded-full",
    onClick: handlePrev
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-9 h-9 rounded-full p-1"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
  }))), next && /* @__PURE__ */ React.createElement("button", {
    className: "moul-darkbox-btn fixed z-30 border-0 p-0 bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-900/20 dark:hover:bg-neutral-900/60 transition-colors is-next right-4 rounded-full",
    onClick: handleNext
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-9 h-9 rounded-full p-1"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
  }))), /* @__PURE__ */ React.createElement(Link3, {
    to: "/" + slug,
    className: "moul-darkbox-btn fixed z-30 border-0 p-0 bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-900/20 dark:hover:bg-neutral-900/60 transition-colors top-4 left-4 is-close rounded-full"
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-9 h-9 rounded-full p-1"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "moul-darkbox fixed top-0 bottom-0 left-0 right-0 z-10 transition opacity-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "moul-darkbox-wrap overflow-hidden h-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "moul-darkbox-view relative mx-auto z-20 overflow-hidden",
    onClick: handleUiClick
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${transition}`,
      transform: `${active}`,
      width: `${wrapper}px`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { width: `${currentWidth}px` }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "moul-darkbox-inner flex h-screen"
  }, /* @__PURE__ */ React.createElement(AnimatePresence, {
    initial: false
  }, photos.map((p) => /* @__PURE__ */ React.createElement("div", {
    key: p.hash,
    className: "moul-darkbox-list flex justify-center items-center",
    style: {
      minWidth: `${currentWidth}px`
    }
  }, /* @__PURE__ */ React.createElement("picture", null, p.bh ? /* @__PURE__ */ React.createElement(motion.img, {
    src: `data:image/jpeg;charset=utf-8;base64,${p.bh}`,
    className: "lazy",
    "data-sizes": "auto",
    "data-srcset": getPhotoSrcSet(p),
    onClick: toggleUI,
    "data-size": `${p.width}:${p.height}`,
    drag: "x",
    dragConstraints: {
      left: 0,
      right: 0
    },
    dragElastic: 0,
    onDragEnd: (e, { offset, velocity }) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        handleNext();
      } else if (swipe > swipeConfidenceThreshold) {
        handlePrev();
      }
    },
    alt: "photo"
  }) : /* @__PURE__ */ React.createElement(motion.img, {
    src: p.url,
    className: "lazy",
    "data-sizes": "auto",
    onClick: toggleUI,
    "data-size": `${p.width}:${p.height}`,
    drag: "x",
    dragConstraints: {
      left: 0,
      right: 0
    },
    dragElastic: 0,
    onDragEnd: (e, { offset, velocity }) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        handleNext();
      } else if (swipe > swipeConfidenceThreshold) {
        handlePrev();
      }
    },
    alt: "photo"
  }))))))))))));
}

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/routes/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Story,
  headers: () => headers2,
  loader: () => loader2,
  meta: () => meta3
});
init_react();
var import_cloudflare3 = __toESM(require_cloudflare());
var import_react45 = __toESM(require_react());
var import_image_layout = __toESM(require_image_layout());

// app/components/profile.jsx
init_react();
var Profile = ({ profile }) => {
  const { name: name2, bio: bio2, social: social2, picture: picture2 } = profile;
  return /* @__PURE__ */ React.createElement("section", {
    className: "my-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, picture2 && /* @__PURE__ */ React.createElement(Link3, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("picture", {
    className: "w-36 h-36 rounded-full"
  }, picture2.bh ? /* @__PURE__ */ React.createElement("img", {
    src: `data:image/jpeg;charset=utf-8;base64,${picture2.bh}`,
    "data-srcset": getPhotoSrcSet(picture2),
    "data-sizes": "auto",
    className: "lazy w-36 h-36 rounded-full",
    alt: "Profile picture"
  }) : /* @__PURE__ */ React.createElement("img", {
    src: picture2.url,
    "data-sizes": "auto",
    className: "lazy w-36 h-36 rounded-full mx-auto",
    alt: "Profile picture"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "text-center pb-2 px-6"
  }, /* @__PURE__ */ React.createElement(Link3, {
    to: "/",
    className: "inline-flex"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-bold leading-normal text-neutral-900 dark:text-neutral-100"
  }, name2)), /* @__PURE__ */ React.createElement("p", {
    className: "leading-normal text-neutral-700 dark:text-neutral-400 mb-2"
  }, bio2)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, social2.twitter && /* @__PURE__ */ React.createElement("a", {
    href: `https://twitter.com/` + social2.twitter,
    className: "mx-2"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-6 h-6 transition-colors text-neutral-600 hover:text-neutral-900  dark:text-neutral-400 dark:hover:text-neutral-100"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
  }))), social2.github && /* @__PURE__ */ React.createElement("a", {
    href: `https://github.com/` + social2.github,
    className: "mx-2"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-6 h-6 transition-colors text-neutral-600 hover:text-neutral-900  dark:text-neutral-400 dark:hover:text-neutral-100"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  }))), social2.instagram && /* @__PURE__ */ React.createElement("a", {
    href: `https://www.instagram.com/` + social2.instagram,
    className: "mx-2"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-6 h-6 transition-colors text-neutral-600 hover:text-neutral-900  dark:text-neutral-400 dark:hover:text-neutral-100"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
  }))), social2.facebook && /* @__PURE__ */ React.createElement("a", {
    href: `https://www.facebook.com/` + social2.facebook,
    className: "mx-2"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-6 h-6 transition-colors text-neutral-600 hover:text-neutral-900  dark:text-neutral-400 dark:hover:text-neutral-100"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
  }))), social2.youtube && /* @__PURE__ */ React.createElement("a", {
    href: `https://www.youtube.com/` + social2.youtube,
    className: "mx-2"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "w-6 h-6 transition-colors text-neutral-600 hover:text-neutral-900  dark:text-neutral-400 dark:hover:text-neutral-100"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
  })))));
};

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/routes/$slug.jsx
var loader2 = async ({ request }) => {
  var _a;
  if (new URL(request.url).pathname === "/favicon.ico")
    return null;
  const slug = new URL(request.url).pathname.split("/").pop() || "";
  const story = stories_default.find((s) => s.slug == slug);
  const cover2 = story == null ? void 0 : story.photos.find((p) => p.type === "cover");
  const title2 = (_a = story == null ? void 0 : story.blocks.find((b2) => b2.type === "title")) == null ? void 0 : _a.text;
  return (0, import_cloudflare3.json)({ status: "ok", story, cover: cover2, title: title2, canonical: request.url }, { headers: { Link: request.url } });
};
var headers2 = ({ loaderHeaders }) => {
  var _a;
  const cacheControl = ((_a = loaderHeaders.get("Link")) == null ? void 0 : _a.includes("localhost:")) ? "public, max-age=0, must-revalidate" : "public, max-age=1800, s-maxage=604800, stale-while-revalidate=31540000000";
  return {
    Link: `${loaderHeaders.get("Link")}; rel="canonical"`,
    "Cache-Control": cacheControl
  };
};
var meta3 = ({ data }) => {
  const { name: name2, bio: bio2, social: social2 } = data.story.profile;
  const { title: t, cover: cover2 } = data;
  const title2 = t ? `${t} | ${name2}` : name2;
  const fallback = data.story.photos.find((p) => p.order == 1);
  const imgURL = cover2 && cover2.bh ? getPhotoSrc(cover2) : cover2 && cover2.url ? cover2.url : fallback && fallback.bh ? getPhotoSrc(fallback) : fallback.url;
  return {
    title: title2,
    description: bio2,
    "og:title": title2,
    "og:url": data.canonical,
    "og:description": bio2,
    "og:image": imgURL,
    "twitter:card": "summary_large_image",
    "twitter:creator": social2.twitter ? social2.twitter : ""
  };
};
function Story() {
  const { status, story, cover: cover2, title: title2 } = useLoaderData();
  (0, import_react45.useEffect)(() => {
    paintGrid();
    if (isBrowser2()) {
      window.addEventListener("resize", paintGrid);
    }
    return () => {
      window.removeEventListener("resize", paintGrid);
    };
  }, []);
  const paintGrid = () => {
    const grid = document.querySelectorAll(".moul-content-photos");
    grid.forEach((el) => {
      const photos = el.querySelectorAll(".moul-grid");
      const photosSize = [];
      photos.forEach((photo) => {
        var _a;
        const [w, h] = (_a = photo.getAttribute("data-size")) == null ? void 0 : _a.split(":");
        const { width, height } = getDimension(+w, +h, 2048, 2048);
        photosSize.push({ width, height });
      });
      const idealElementHeight = document.body.clientWidth < 800 ? 280 : 380;
      const containerWidth = document.body.clientWidth > 2e3 && photosSize.length < 4 ? 1800 : document.body.clientWidth > 3e3 ? 2400 : document.body.clientWidth;
      const layout = (0, import_image_layout.fixed_partition)(photosSize, {
        containerWidth,
        idealElementHeight,
        spacing: 16
      });
      el.classList.add("is-grid");
      el.style.width = `${layout.width}px`;
      el.style.height = `${layout.height}px`;
      layout.positions.forEach((_, i) => {
        photos[i].style.position = `absolute`;
        photos[i].style.top = `${layout.positions[i].y}px`;
        photos[i].style.left = `${layout.positions[i].x}px`;
        photos[i].style.width = `${layout.positions[i].width}px`;
        photos[i].style.height = `${layout.positions[i].height}px`;
      });
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, status === "not_found" && /* @__PURE__ */ React.createElement("div", null, "Not found!"), status === "ok" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, cover2 && /* @__PURE__ */ React.createElement("div", {
    className: "moul-cover w-full h-[350px] md:h-[450px] lg:h-[600px] xl:h-[650px] relative mb-16"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, (cover2 == null ? void 0 : cover2.bh) ? /* @__PURE__ */ React.createElement(Link3, {
    to: `photo/${cover2 == null ? void 0 : cover2.hash}`,
    key: cover2 == null ? void 0 : cover2.hash,
    className: ""
  }, /* @__PURE__ */ React.createElement("picture", {
    className: "absolute top-0 left-0 w-full h-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `data:image/jpeg;charset=utf-8;base64,${cover2 == null ? void 0 : cover2.bh}`,
    "data-srcset": getPhotoSrcSet(cover2),
    "data-sizes": "auto",
    className: "lazy w-full h-full object-cover",
    alt: "Story cover"
  }))) : /* @__PURE__ */ React.createElement(Link3, {
    to: `photo/${cover2 == null ? void 0 : cover2.hash}`,
    key: cover2 == null ? void 0 : cover2.hash,
    className: ""
  }, /* @__PURE__ */ React.createElement("picture", {
    className: "absolute top-0 left-0 w-full h-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: cover2.url,
    "data-sizes": "auto",
    className: "lazy w-full h-full object-cover",
    alt: "Story cover"
  }))))), /* @__PURE__ */ React.createElement(Profile, {
    profile: story.profile
  }), title2 && /* @__PURE__ */ React.createElement("div", {
    className: "moul-content-title mx-auto font-bold max-w-3xl mb-6 text-neutral-900 dark:text-neutral-50 px-6 xs:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl sm:text-5xl"
  }, title2))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, story.blocks.map((b2, i) => /* @__PURE__ */ React.createElement("div", {
    className: `mx-auto leading-relaxed moul-content-${b2.type}`,
    key: i
  }, b2.type === "quote" && /* @__PURE__ */ React.createElement("blockquote", {
    className: "px-6 xs:px-0 text-xl text-g max-w-3xl mx-auto my-12 text-neutral-800 border-neutral-800 dark:text-neutral-400 dark:border-neutral-400 border-l-4 pl-4"
  }, b2.text), b2.type === "paragraph" && /* @__PURE__ */ React.createElement("p", {
    className: "px-6 xs:px-0 text-xl max-w-3xl mx-auto my-12 text-neutral-700 dark:text-neutral-200"
  }, b2.text), b2.type === "heading" && /* @__PURE__ */ React.createElement("h2", {
    className: "px-6 xs:px-0 text-3xl font-bold sm:text-4xl max-w-3xl mx-auto my-12 text-neutral-800 dark:text-neutral-100"
  }, b2.text), b2.type === "subheading" && /* @__PURE__ */ React.createElement("h3", {
    className: "px-6 xs:px-0 text-2xl font-bold sm:text-3xl max-w-3xl mx-auto my-12 text-neutral-800 dark:text-neutral-100"
  }, b2.text), b2.type === "photos" && /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, story.photos.filter((p) => p.type === b2.text).map((p) => /* @__PURE__ */ React.createElement(Link3, {
    to: `photo/${p.hash}`,
    key: p.hash
  }, /* @__PURE__ */ React.createElement("picture", {
    className: `moul-grid`,
    "data-size": `${p.width}:${p.height}`
  }, (p == null ? void 0 : p.bh) ? /* @__PURE__ */ React.createElement("img", {
    className: "lazy",
    src: `data:image/jpeg;charset=utf-8;base64,${p == null ? void 0 : p.bh}`,
    "data-sizes": "auto",
    "data-srcset": getPhotoSrcSet(p)
  }) : /* @__PURE__ */ React.createElement("img", {
    className: "lazy",
    src: p.url,
    "data-sizes": "auto"
  })))))))), /* @__PURE__ */ React.createElement("footer", {
    className: "flex flex-col w-full text-center my-16 text-neutral-500 dark:text-neutral-400"
  }, (story == null ? void 0 : story.profile.name) && /* @__PURE__ */ React.createElement("p", null, "Copyright \xA9 ", story.profile.name, ". All Rights Reserved."))));
}

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers3,
  loader: () => loader3,
  meta: () => meta4
});
init_react();
var import_cloudflare4 = __toESM(require_cloudflare());

// app/components/stories.jsx
init_react();
var Stories = ({ stories }) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: "px-6 max-w-3xl mx-auto"
  }, stories && stories.map((story, index2) => {
    var _a, _b, _c;
    return /* @__PURE__ */ React.createElement(Link3, {
      to: story.slug,
      key: index2
    }, (story == null ? void 0 : story.cover) ? /* @__PURE__ */ React.createElement("div", {
      className: "relative h-96 w-full rounded-2xl overflow-hidden group mb-16"
    }, /* @__PURE__ */ React.createElement("picture", {
      className: "absolute top-0 left-0 w-full h-full rounded-2xl transition duration-[4s] ease-in group-hover:scale-150"
    }, ((_a = story == null ? void 0 : story.cover) == null ? void 0 : _a.bh) ? /* @__PURE__ */ React.createElement("img", {
      src: `data:image/jpeg;charset=utf-8;base64,${(_b = story == null ? void 0 : story.cover) == null ? void 0 : _b.bh}`,
      "data-srcset": getPhotoSrcSet(story == null ? void 0 : story.cover),
      "data-sizes": "auto",
      className: "lazy w-full h-full object-cover rounded-2xl",
      alt: "Story cover"
    }) : /* @__PURE__ */ React.createElement("img", {
      src: (_c = story == null ? void 0 : story.cover) == null ? void 0 : _c.url,
      "data-sizes": "auto",
      className: "lazy w-full h-full object-cover rounded-2xl",
      alt: "Story cover"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "absolute bottom-0 w-full transition ease-out duration-1000 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-[#000] z-10 group-hover:translate-y-full"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "relative z-20 text-3xl font-bold leading-normal p-4 text-neutral-100 transition translate-x-0"
    }, story.title))) : /* @__PURE__ */ React.createElement("div", {
      className: "w-full mb-16"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "font-bold leading-normal text-3xl"
    }, story.title)));
  }));
};

// app/components/cover.jsx
init_react();
var Cover = ({ photo }) => {
  return /* @__PURE__ */ React.createElement("picture", {
    className: "absolute top-0 left-0 w-full h-full"
  }, photo.bh ? /* @__PURE__ */ React.createElement("img", {
    src: `data:image/jpeg;charset=utf-8;base64,${photo.bh}`,
    "data-srcset": getPhotoSrcSet(photo),
    "data-sizes": "auto",
    className: "lazy w-full h-full object-cover",
    alt: "Cover"
  }) : /* @__PURE__ */ React.createElement("img", {
    src: photo.url,
    "data-sizes": "auto",
    className: "lazy w-full h-full object-cover",
    alt: "Cover"
  }));
};

// data/profile.json
var name = "Phearak S. Tha";
var bio = "Software Engineer \u2022 Photographer";
var social = { github: "thasophearak", twitter: "thasophearak", youtube: "thasophearak", facebook: "", instagram: "" };
var cover = { name: "dscf3742-4k-by-phearak-s-tha.jpeg", order: 0, hash: "3313ddddca94a498", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAoAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AMLwx4ygnlAXXbbH+8OK7+bxDpz2NwW8S264i5+YV+U3hu8nt3n8qeSL5l+45Hc16TfXU0mi6hvmkb/RR1YntXHPAYh6qt3+yu56LzjCUPc9g2/8R//Z", width: 4098, height: 2732, type: "", url: "" };
var picture = { name: "dscf1983-1024-by-phearak-s-tha.jpeg", order: 0, hash: "03cf8fda229512c7", bh: "/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIABAAEAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APGfF3i/UNM0m6ktZSZ3IVXKZCe9W/AHjW91vQZ5LicNND+7MgXG/wB8dq8++IHi27tdL154ZYBHaQFlRhnL4yK0/hv4rutT0TT7lLeBLeazDXIT/noR1NAH/9k=", width: 1024, height: 1024, type: "", url: "" };
var profile_default = { name, bio, social, cover, picture };

// route:/home/phearak/codes/moulco/moul-cloudflare-page-demo/.moul/app/routes/index.jsx
var loader3 = ({ request }) => {
  const stories = stories_default.map((s) => {
    const cover2 = s.photos.find((p) => p.type === "cover");
    const title2 = s.blocks.find((b2) => b2.type === "title");
    return {
      slug: s.slug,
      cover: cover2,
      title: title2 == null ? void 0 : title2.text
    };
  });
  return (0, import_cloudflare4.json)({
    profile: profile_default,
    stories,
    canonical: request.url
  }, { headers: { Link: request.url } });
};
var headers3 = ({ loaderHeaders }) => {
  var _a;
  const cacheControl = ((_a = loaderHeaders.get("Link")) == null ? void 0 : _a.includes("localhost:")) ? "public, max-age=0, must-revalidate" : "public, max-age=1800, s-maxage=604800, stale-while-revalidate=31540000000";
  return {
    Link: `${loaderHeaders.get("Link")}; rel="canonical"`,
    "Cache-Control": cacheControl
  };
};
var meta4 = ({ data }) => {
  const { name: name2, bio: bio2, social: social2, cover: cover2 } = data.profile;
  const imgURL = cover2 && cover2.bh ? getPhotoSrc(cover2) : cover2 && cover2.url ? cover2.url : "";
  return {
    title: name2,
    description: bio2,
    "og:title": name2,
    "og:url": data.canonical,
    "og:description": bio2,
    "og:image": imgURL,
    "twitter:card": "summary_large_image",
    "twitter:creator": social2.twitter ? social2.twitter : ""
  };
};
function Index() {
  const { profile, stories } = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, (profile == null ? void 0 : profile.cover) && /* @__PURE__ */ React.createElement("section", {
    className: "w-full h-[350px] md:h-[450px] lg:h-[600px] xl:h-[650px] relative mb-16"
  }, /* @__PURE__ */ React.createElement(Cover, {
    photo: profile.cover
  })), /* @__PURE__ */ React.createElement(Profile, {
    profile
  }), /* @__PURE__ */ React.createElement(Stories, {
    stories
  }), profile.name && /* @__PURE__ */ React.createElement("footer", {
    className: "flex flex-col w-full text-center my-16 text-neutral-500 dark:text-neutral-400"
  }, /* @__PURE__ */ React.createElement("p", null, "Copyright \xA9 ", profile.name, ". All Rights Reserved.")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5fc8fea0", "entry": { "module": "/build/entry.client-EMGSPRS4.js", "imports": ["/build/_shared/chunk-YSHM63TB.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Q3IWVMUU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$slug": { "id": "routes/$slug", "parentId": "root", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$slug-6OMYE2WT.js", "imports": ["/build/_shared/chunk-XHNGHJYR.js", "/build/_shared/chunk-AR2JETWV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$slug.photo.$hash": { "id": "routes/$slug.photo.$hash", "parentId": "root", "path": ":slug/photo/:hash", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$slug.photo.$hash-MLAAKR7V.js", "imports": ["/build/_shared/chunk-AR2JETWV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VKBEC7SG.js", "imports": ["/build/_shared/chunk-XHNGHJYR.js", "/build/_shared/chunk-AR2JETWV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5FC8FEA0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$slug.photo.$hash": {
    id: "routes/$slug.photo.$hash",
    parentId: "root",
    path: ":slug/photo/:hash",
    index: void 0,
    caseSensitive: void 0,
    module: slug_photo_hash_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var handleRequest2 = createPagesFunctionHandler({
  build: server_build_exports,
  mode: "development",
  getLoadContext: (context) => context.env
});
function onRequest(context) {
  return handleRequest2(context);
}
export {
  onRequest
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
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
/**
 * @remix-run/cloudflare v1.3.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/cloudflare-pages v1.3.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/** @license React v17.0.2
 * react-dom-server.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/[[path]].js.map
