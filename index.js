(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["shared-components"] = factory();
	else
		root["shared-components"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), !(function webpackMissingModule() { var e = new Error("Cannot find module \"./Store\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Action_1, Dispatcher_1, Store_1, StoreComponent_1) {
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(Action_1);
	    __export(Dispatcher_1);
	    __export(Store_1);
	    __export(StoreComponent_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, BugLog_1) {
	    var Dispatcher = (function () {
	        function Dispatcher() {
	            this._stores = [];
	            this._storesCalled = [];
	            this._callsWaiting = [];
	            this._callsQueued = [];
	        }
	        Dispatcher.prototype.register = function (store) {
	            this._stores.push(store);
	        };
	        Dispatcher.prototype.dispatch = function (action) {
	            BugLog_1.bugLogGroup("%cACTION " + action.name + "%c %o", "font-weight: normal; color: #b00", "font-weight: normal", action);
	            try {
	                this._callsQueued = this._stores.slice()
	                    .filter(function (s) { return typeof s[action.name] === "function"; })
	                    .map(function (store) { return { store: store, callback: function () { return store[action.name].call(store, action); } }; });
	                this._storesCalled = [];
	                while (this._callsQueued.length) {
	                    var call = this._callsQueued[0];
	                    this._callsQueued = this._callsQueued.slice(1);
	                    try {
	                        BugLog_1.bugLogGroup("%cSTORE " + call.store.getClassName(), "font-weight: normal; color: #b22");
	                        try {
	                            call.callback();
	                        }
	                        finally {
	                            BugLog_1.bugLogGroupEnd();
	                        }
	                    }
	                    catch (error) {
	                        BugLog_1.bugLog("error dispatching action " + action.name + " to store " + call.store.getClassName());
	                        console.dir && console.dir(error);
	                    }
	                    this._storesCalled.push(call.store);
	                    for (var _i = 0, _a = this._callsWaiting.filter(function (w) { return w.store === call.store; }); _i < _a.length; _i++) {
	                        var waiting = _a[_i];
	                        this._callsQueued.splice(0, 0, waiting);
	                    }
	                    this._callsWaiting = this._callsWaiting.filter(function (w) { return w.store !== call.store; });
	                }
	            }
	            finally {
	                BugLog_1.bugLogGroupEnd();
	            }
	        };
	        Dispatcher.prototype.waitFor = function (store, callback) {
	            if (this._storesCalled.indexOf(store) !== -1 || !this._callsQueued.some(function (c) { return c.store === store; })) {
	                callback();
	                return;
	            }
	            this._callsWaiting.push({ store: store, callback: callback });
	        };
	        return Dispatcher;
	    })();
	    exports.__esModule = true;
	    exports["default"] = new Dispatcher();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// This script allows you to:
	//  * use 'bugLog(message)' to record log entries in case an error occurs,
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    /////////////
	    // Logging //
	    /////////////
	    var logMessages = [];
	    var bugLogGroups = [];
	    var bugLogGroupStartTimes = [];
	    function _consoleLog(fn, message, parameters) {
	        if (!fn && window.console && window.console.log)
	            _consoleLog(console.log, message, parameters);
	        else if (fn)
	            fn.apply(console, parameters.length ? [message].concat(parameters) : [message]);
	    }
	    /** Add a message to the end of the log that is sent up with bug reports,
	     * and log it to the console.  This signature matches that of console.log: */
	    function bugLog(message) {
	        var parameters = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            parameters[_i - 1] = arguments[_i];
	        }
	        if (window.console)
	            _consoleLog(console.log, message, parameters);
	        bugLogRemember(message, parameters);
	    }
	    exports.bugLog = bugLog;
	    ;
	    var has_performance = window.performance && typeof window.performance.now === "function";
	    function getBugLogTime() {
	        return has_performance ? performance.now() : Date.now();
	    }
	    function bugLogGroup(message) {
	        var parameters = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            parameters[_i - 1] = arguments[_i];
	        }
	        if (window.console)
	            _consoleLog(console.group, message, parameters);
	        bugLogRemember("BEGIN " + message, true);
	        bugLogGroups.push(message);
	        bugLogGroupStartTimes.push(getBugLogTime());
	    }
	    exports.bugLogGroup = bugLogGroup;
	    ;
	    function bugLogGroupEnd() {
	        var end_time = getBugLogTime();
	        var start_time = bugLogGroupStartTimes.pop();
	        var elapsed = end_time - start_time;
	        if (elapsed >= 5)
	            bugLog("%c" + Math.round(elapsed) + "ms", "color:#aaa");
	        if (window.console && typeof console.group === "function")
	            console.groupEnd();
	        bugLogGroups.pop();
	    }
	    exports.bugLogGroupEnd = bugLogGroupEnd;
	    ;
	    function bugLogRemember(message) {
	        var parameters = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            parameters[_i - 1] = arguments[_i];
	        }
	        var i;
	        if (typeof message === 'string') {
	            var messagestring = message;
	            for (i = 0; i < parameters.length; i++)
	                try {
	                    var pct_index = messagestring.indexOf('%');
	                    if (pct_index === -1)
	                        break;
	                    messagestring = messagestring.substring(0, pct_index) + messagestring.substring(pct_index + 2);
	                }
	                catch (error) {
	                    console.log("problem replacing bugLog args: " + error.toString());
	                }
	            message = messagestring;
	        }
	        else {
	            // Callers may supply arbitrary objects as they can with console.log(),
	            // but at this stage we need a string.
	            message = (message || "").toString();
	        }
	        message = cleanLogMessage(message);
	        // Add timestamp.
	        var d = new Date();
	        function pad(value) {
	            if (value < 10)
	                return '0' + value;
	            return String(value);
	        }
	        var timestamp = d.getUTCFullYear() +
	            '-' + pad(d.getUTCMonth() + 1) +
	            '-' + pad(d.getUTCDate()) +
	            ' ' + pad(d.getUTCHours()) +
	            ':' + pad(d.getUTCMinutes()) +
	            ':' + pad(d.getUTCSeconds()) +
	            '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
	            ' UTC ';
	        var full_message = timestamp;
	        for (i = 0; i < bugLogGroups.length; i++)
	            full_message += "  ";
	        full_message += message;
	        logMessages.push(full_message);
	        if (logMessages.length > 1024)
	            logMessages.shift();
	    }
	    var cleanLogMessage = function (message) {
	        message = message || ""; // protect against nulls
	        var maximum = 1024000;
	        if (message.length > maximum)
	            message = message.substring(0, maximum - 1) + '...';
	        return message;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, jsx, BugLog_1) {
	    // interface Document {
	    //     registerElement(name: string, prototype: any): {new:() => HTMLElement};
	    // }
	    // 
	    // export var defineComponent = (function() {
	    //     class Component extends HTMLElement {
	    //         shadowRoot;
	    //         firstUpdate = false;
	    //         
	    //         createdCallback = function() {
	    //             // Create a shadow root for the content of the component to render into
	    //             this.shadowRoot = this.createShadowRoot();
	    //             this.firstUpdate = true;
	    //             this.props = null;
	    // 
	    //             // Handle lazy upgrade - take the existing props from the Element and
	    //             // re-apply them so that they go through (and do not shadow) the setter.
	    //             var props = this.props;
	    //             if (props) {
	    //                 delete this.props;
	    //                 this.props = props;
	    //             }
	    //         };
	    // 
	    // 
	    //         /**
	    //          * Renders / diffs the contents of the component's shadow root using the
	    //          * render function defined by the component's spec.
	    //          */
	    //         render = function() {
	    //             jsx.patch(this.shadowRoot, this.render.bind(this));
	    //         };
	    // 
	    //         willReceiveProps = function(newProps, oldProps) { };
	    //         componentDidUpdate = function() { };
	    //         shouldComponentUpdate = function(newProps, oldProps) {
	    //             return true;
	    //         };
	    // 
	    //         private _props: any;
	    //         /**
	    //          * Incremental DOM will update the 'props' property on the DOM node for our
	    //          * component. This setter notifies us when the props have changed so that
	    //          * we can check if an update is needed, and if so, call render. 
	    //          * 
	    //          */
	    //         set props(newProps) {
	    //             this.willReceiveProps(newProps, this.props);
	    // 
	    //             var shouldUpdate = this.firstUpdate ||
	    //                 this.shouldComponentUpdate(newProps, this.props);
	    // 
	    //             this.firstUpdate = false;
	    //             this._props = newProps;
	    // 
	    //             if (shouldUpdate) {
	    //                 this.render();
	    //                 this.componentDidUpdate();
	    //             }
	    //         }
	    // 
	    //         get props() {
	    //             return this._props;
	    //         }
	    //     }
	    // 
	    //     /**
	    //      * Define a component with a React-like lifecycle. Spec is an object
	    //      * containing.
	    //      * - render (required)
	    //      * - shouldComponentUpdate
	    //      * - willReceiveProps
	    //      * - componentDidUpdate
	    //      * - attachedCallback
	    //      * - detachedCallback
	    //      * 
	    //      * The attachedCallback / detachedCallback are the native custom element
	    //      * lifecycle callbacks, corresponding to componentWillMount and
	    //      * componentWillUnmount in React.
	    //      */
	    //     function defineComponent(spec) {
	    //         throw new Error();
	    // //         var prototype = Object.create(Component.prototype);
	    // // 
	    // //         for (var name in spec) {
	    // //             prototype[name] = spec[name];
	    // //         }
	    // // 
	    // //         return document.registerElement(spec.tag, {
	    // //             prototype: prototype
	    // //         });
	    //     };
	    // 
	    //     return defineComponent;
	    // })();
	    var StoreComponent = (function (_super) {
	        __extends(StoreComponent, _super);
	        function StoreComponent(props) {
	            var stores = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                stores[_i - 1] = arguments[_i];
	            }
	            _super.call(this, props);
	            this._callOnDismount = [];
	            this._stores = stores || [];
	            this.props = props || {};
	            this.state = this.getState() || {};
	        }
	        StoreComponent.prototype.setState = function (f, callback) {
	            if (f instanceof Object) {
	                this.state = f;
	                return;
	            }
	        };
	        StoreComponent.prototype.getClassName = function () {
	            return ("" + this.constructor).split("function ")[1].split("(")[0];
	        };
	        StoreComponent.prototype.getState = function () {
	            return {};
	        };
	        StoreComponent.prototype.forceUpdate = function (callBack) { };
	        StoreComponent.prototype.componentDidMount = function () {
	            var _this = this;
	            for (var _i = 0, _a = this._stores; _i < _a.length; _i++) {
	                var store = _a[_i];
	                this._callOnDismount.push(store.subscribe(function () { return _this.onStoreChanged(); }));
	            }
	            this.storeComponentDidMount();
	        };
	        StoreComponent.prototype.componentWillUnmount = function () {
	            for (var _i = 0, _a = this._callOnDismount; _i < _a.length; _i++) {
	                var fn = _a[_i];
	                fn();
	            }
	            this.storeComponentWillUnmount();
	        };
	        StoreComponent.prototype.storeComponentDidMount = function () { };
	        StoreComponent.prototype.storeComponentWillUnmount = function () { };
	        StoreComponent.prototype.onStoreChanged = function () {
	            BugLog_1.bugLog("%cCOMPONENT " + this.getClassName(), "color: #0b0");
	            this.setState(this.getState());
	        };
	        return StoreComponent;
	    })(jsx.Component);
	    exports.__esModule = true;
	    exports["default"] = StoreComponent;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["shared-components"] = factory();
		else
			root["shared-components"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
		    var Component = (function () {
		        function Component(props) {
		            this.props = props;
		        }
		        Component.prototype.componentWillMount = function () { };
		        ;
		        Component.prototype.componentDidMount = function () { };
		        ;
		        Component.prototype.componentWillUnmount = function () { };
		        ;
		        Component.prototype.shouldComponentUpdate = function () { return true; };
		        Component.prototype.componentWillReceiveProps = function (next_props) { };
		        ;
		        Component.prototype.render = function () { };
		        ;
		        Component.prototype.setState = function (state) {
		            this.state = state;
		        };
		        return Component;
		    })();
		    exports.Component = Component;
		    var open_vnode;
		    var next_vnode;
		    var previous_vnode;
		    function patch(element, fn) {
		        var node = element["__mirror_view_node"];
		        if (!node)
		            element["__mirror_view_node"] = node = {
		                parent: null,
		                tag: element.nodeName.toLowerCase(),
		                node: element,
		                key: null,
		                attrs: {},
		                kids: []
		            };
		        previous_vnode = null;
		        open_vnode = null;
		        next_vnode = node;
		        elementOpen(element.nodeName, null, null);
		        fn();
		        elementClose();
		    }
		    exports.patch = patch;
		    function elementVoid(tag, key, statics, a1, a2, a3, a4, a5, a6) {
		        elementOpen.apply(null, arguments);
		        elementClose.apply(null, arguments);
		    }
		    exports.elementVoid = elementVoid;
		    function text(value, formatters) {
		        var node = elementOpen("#text", null, null);
		        elementClose();
		        if (node.text !== value) {
		            var formatted = node.text = value;
		            for (var i = 1; i < arguments.length; i++) {
		                var formatter = arguments[i];
		                if (formatter)
		                    formatted = formatter(formatted);
		            }
		            node.node.data = formatted;
		        }
		    }
		    exports.text = text;
		    function elementOpen(tag, key, statics, n1, v1, n2, v2, n3, v3) {
		        sync.apply(null, arguments);
		        //    if (open_vnode.component)
		        //        return open_vnode;
		        var visited = {};
		        var node = open_vnode.node;
		        var sync_arg = function (name, value) {
		            if (value === null || value === undefined)
		                return;
		            visited[name] = true;
		            var existing_value = open_vnode.attrs[name];
		            switch (name) {
		                case "style":
		                    if (open_vnode.component)
		                        throw new Error("components don't have dom nodes, you cannot set styles directly on them");
		                    if (typeof value === 'string') {
		                        node.style.cssText = value;
		                        break;
		                    }
		                    var style = node.style;
		                    var visited_style = {};
		                    for (var prop in value) {
		                        var prop_value = value[prop];
		                        visited_style[prop] = true;
		                        if (!existing_value || existing_value[prop] !== prop_value) {
		                            style[prop] = prop_value;
		                            (open_vnode.attrs[name] = existing_value = existing_value || {})[prop] = prop_value;
		                        }
		                    }
		                    for (var prop in existing_value)
		                        if (!visited_style[prop]) {
		                            delete existing_value[prop];
		                            style[prop] = '';
		                        }
		                    break;
		                default:
		                    if (existing_value !== value)
		                        open_vnode.attrs[name] = value;
		                    if (name == "className")
		                        name = "class";
		                    if (['object', 'function'].indexOf(typeof value) !== -1) {
		                        if (name.slice(0, 2) === "on" && typeof value === "function")
		                            (function (fn) {
		                                var event_name = name.slice(2).toLowerCase();
		                                if (existing_value !== fn)
		                                    open_vnode.node.removeEventListener(event_name, existing_value);
		                                open_vnode.node.addEventListener(event_name, fn);
		                            })(value);
		                    }
		                    else if (!open_vnode.component)
		                        node.setAttribute(name, value);
		                    break;
		            }
		        };
		        if (statics)
		            for (var i = 0; i < statics.length; i += 2)
		                sync_arg(statics[i], statics[i + 1]);
		        for (var i = 3; i < arguments.length; i += 2)
		            sync_arg(arguments[i], arguments[i + 1]);
		        for (var name_1 in open_vnode.attrs)
		            if (!visited[name_1]) {
		                if (name_1.slice(0, 2) === "on" && typeof open_vnode.attrs[name_1] === "function")
		                    node.removeEventListener(name_1.slice(2).toLowerCase(), open_vnode.attrs[name_1]);
		                else if (!open_vnode.component)
		                    open_vnode.node.removeAttribute(name_1);
		                delete open_vnode.attrs[name_1];
		            }
		        return open_vnode;
		    }
		    exports.elementOpen = elementOpen;
		    function elementClose() {
		        if (open_vnode) {
		            var kids = open_vnode.kids;
		            while (true) {
		                var child = kids[kids.length - 1];
		                if (!child || child === previous_vnode)
		                    break;
		                if (child.component && child.component.componentWillUnmount)
		                    child.component.componentWillUnmount();
		                open_vnode.node.removeChild(child.node);
		                kids.splice(kids.indexOf(child), 1);
		            }
		            for (var _i = 0, _a = kids.slice(); _i < _a.length; _i++) {
		                var child = _a[_i];
		                if (child.parent !== open_vnode)
		                    kids.splice(kids.indexOf(child), 1);
		            }
		        }
		        previous_vnode = open_vnode;
		        next_vnode = (open_vnode && open_vnode.parent) ? open_vnode.parent.kids[open_vnode.parent.kids.indexOf(open_vnode) + 1] : undefined;
		        open_vnode = open_vnode ? open_vnode.parent : null;
		    }
		    exports.elementClose = elementClose;
		    function getProps(tag, key, statics, n1, v1, n2, v2, n3, v3) {
		        var props = {};
		        if (statics)
		            for (var i = 0; i < statics.length; i += 2) {
		                var name_2 = statics[i];
		                var value = statics[i + 1];
		                if (value !== null && value !== undefined)
		                    props[name_2] = value;
		            }
		        for (var i = 3; i < arguments.length; i += 2) {
		            var name_3 = arguments[i];
		            var value = arguments[i + 1];
		            if (value !== null && value !== undefined)
		                props[name_3] = value;
		        }
		        return props;
		    }
		    function renderComponent(is_new, next_props) {
		        open_vnode.component.props = {};
		        if (!is_new) {
		            if (open_vnode.component.componentWillReceiveProps)
		                open_vnode.component.componentWillReceiveProps(next_props);
		        }
		        open_vnode.component.props = next_props;
		        if (!is_new) {
		            if (open_vnode.component.shouldComponentUpdate && !open_vnode.component.shouldComponentUpdate()) {
		                previous_vnode = next_vnode;
		                next_vnode = open_vnode.kids[open_vnode.kids.indexOf(previous_vnode) + 1];
		            }
		            else {
		                if (open_vnode.component.componentWillUpdate)
		                    open_vnode.component.componentWillUpdate();
		                open_vnode.component.render();
		                if (open_vnode.component.componentDidUpdate)
		                    open_vnode.component.componentDidUpdate();
		            }
		        }
		        else
		            open_vnode.component.render();
		    }
		    function sync(tag, key, statics, n1, v1, n2, v2, n3, v3) {
		        previous_vnode = null;
		        var reuse_next_vnode = next_vnode && next_vnode.key === key;
		        if (reuse_next_vnode)
		            if (typeof tag === "string")
		                reuse_next_vnode = next_vnode.tag === tag || next_vnode.tag === tag.toLowerCase();
		            else
		                reuse_next_vnode = next_vnode.component && next_vnode.component.constructor["name"] === tag["name"];
		        var replacing_child;
		        var parent_node;
		        var kids = open_vnode ? open_vnode.kids : null;
		        if (!reuse_next_vnode) {
		            replacing_child = next_vnode;
		            next_vnode = key && open_vnode ? kids.filter(function (c) { return c.key === key; })[0] : null;
		            if (!next_vnode)
		                if (typeof tag === "function") {
		                    var fn = tag.bind.apply(tag, [null].concat([]));
		                    next_vnode = { parent: open_vnode, node: null, tag: tag["name"], key: key, attrs: {}, component: new fn(), kids: [] };
		                    if (next_vnode.component.componentWillMount)
		                        next_vnode.component.componentWillMount();
		                }
		                else {
		                    var doc = open_vnode && open_vnode.node ? open_vnode.node.ownerDocument : document;
		                    next_vnode = { parent: open_vnode, node: tag === "#text" ? doc.createTextNode('') : doc.createElement(tag), tag: tag.toLowerCase(), key: key, attrs: {}, kids: [] };
		                }
		            if (open_vnode) {
		                kids.splice(replacing_child ? kids.indexOf(replacing_child) : kids.length, 0, next_vnode);
		                parent_node = open_vnode.node;
		            }
		        }
		        open_vnode = next_vnode;
		        next_vnode = open_vnode.kids[0];
		        var next_props = getProps.apply(null, arguments);
		        if (open_vnode.component)
		            renderComponent(!reuse_next_vnode, next_props);
		        if (!reuse_next_vnode) {
		            if (open_vnode.component) {
		                if (!previous_vnode)
		                    throw new Error("component didn't call any elements");
		                open_vnode.node = previous_vnode.node;
		                open_vnode.node["__mirror_view_node"] = open_vnode;
		            }
		            if (parent_node && open_vnode.node) {
		                if (key)
		                    kids.filter(function (c) { return c.key === key; }).forEach(function (c) { return c.node = open_vnode.node; });
		                // If the node has a key, remove it from the DOM to prevent a large number of re-orders in the case that it moved far or was completely removed. Since we hold on to a reference through the keyMap, we can always add it back.
		                if (replacing_child && replacing_child.node && replacing_child.key)
		                    parent_node.replaceChild(open_vnode.node, replacing_child.node);
		                else
		                    parent_node.insertBefore(open_vnode.node, replacing_child ? replacing_child.node : null);
		            }
		            if (open_vnode.component && open_vnode.node && open_vnode.component.componentDidMount)
		                open_vnode.component.componentDidMount();
		        }
		    }
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ }
	/******/ ])
	});
	;

/***/ }
/******/ ])
});
;