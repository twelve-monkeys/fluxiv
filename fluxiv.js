var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("Action", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
// This script allows you to:
//  * use 'bugLog(message)' to record log entries in case an error occurs,
System.register("BugLog", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var logMessages, bugLogGroups, bugLogGroupStartTimes, has_performance, cleanLogMessage;
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
    exports_2("bugLog", bugLog);
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
    exports_2("bugLogGroup", bugLogGroup);
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
    exports_2("bugLogGroupEnd", bugLogGroupEnd);
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
    return {
        setters:[],
        execute: function() {
            /////////////
            // Logging //
            /////////////
            logMessages = [];
            bugLogGroups = [];
            bugLogGroupStartTimes = [];
            ;
            has_performance = window.performance && typeof window.performance.now === "function";
            ;
            ;
            cleanLogMessage = function (message) {
                message = message || ""; // protect against nulls
                var maximum = 1024000;
                if (message.length > maximum)
                    message = message.substring(0, maximum - 1) + '...';
                return message;
            };
        }
    }
});
System.register("EventSource", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var EventSource;
    return {
        setters:[],
        execute: function() {
            EventSource = (function () {
                function EventSource() {
                    var _this = this;
                    this._listeners = [];
                    /** Invokes all of the listeners for this event. */
                    this.trigger = (function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i - 0] = arguments[_i];
                        }
                        var result = undefined;
                        var context = {};
                        var listeners = _this._listeners.slice(0);
                        var args = a || [];
                        for (var i = 0; i < listeners.length; i++) {
                            var handler_result = listeners[i].apply(context, args);
                            result = result || handler_result;
                        }
                        return result;
                    });
                }
                /** Registers a new listener for the event. */
                EventSource.prototype.add = function (listener) {
                    var _this = this;
                    this._listeners.push(listener);
                    return function () { return _this.remove(listener); };
                };
                /** Unregisters a listener from the event.
                    If no listener is provided, removes all listeners */
                EventSource.prototype.remove = function (listener) {
                    if (typeof listener !== 'function') {
                        this._listeners = [];
                        return;
                    }
                    for (var i = 0; i < this._listeners.length; i++)
                        if (this._listeners[i] === listener) {
                            this._listeners.splice(i, 1);
                            break;
                        }
                };
                return EventSource;
            }());
            exports_3("default", EventSource);
        }
    }
});
System.register("Store", ["EventSource", "BugLog"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var EventSource_1, BugLog_1;
    var Store;
    return {
        setters:[
            function (EventSource_1_1) {
                EventSource_1 = EventSource_1_1;
            },
            function (BugLog_1_1) {
                BugLog_1 = BugLog_1_1;
            }],
        execute: function() {
            Store = (function () {
                function Store() {
                    this._onChanged = new EventSource_1["default"]();
                }
                Store.prototype.subscribe = function (callback) {
                    return this._onChanged.add(callback);
                };
                Store.prototype.getClassName = function () {
                    var result = ("" + this.constructor).split("function ")[1].split("(")[0];
                    if (result[0] === "_")
                        return result.slice(1);
                    return result;
                };
                Store.prototype.fireChanged = function () {
                    BugLog_1.bugLogGroup("%cCHANGE", "font-weight: normal; color: #b00");
                    try {
                        this._onChanged.trigger();
                    }
                    finally {
                        BugLog_1.bugLogGroupEnd();
                    }
                };
                return Store;
            }());
            exports_4("default", Store);
        }
    }
});
System.register("Dispatcher", ["BugLog"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var BugLog_2;
    var Dispatcher;
    return {
        setters:[
            function (BugLog_2_1) {
                BugLog_2 = BugLog_2_1;
            }],
        execute: function() {
            Dispatcher = (function () {
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
                    BugLog_2.bugLogGroup("%cACTION " + action.name + "%c %o", "font-weight: normal; color: #b00", "font-weight: normal", action);
                    try {
                        this._callsQueued = this._stores.slice()
                            .filter(function (s) { return typeof s[action.name] === "function"; })
                            .map(function (store) { return { store: store, callback: function () { return store[action.name].call(store, action); } }; });
                        this._storesCalled = [];
                        while (this._callsQueued.length) {
                            var call = this._callsQueued[0];
                            this._callsQueued = this._callsQueued.slice(1);
                            try {
                                BugLog_2.bugLogGroup("%cSTORE " + call.store.getClassName(), "font-weight: normal; color: #b22");
                                try {
                                    call.callback();
                                }
                                finally {
                                    BugLog_2.bugLogGroupEnd();
                                }
                            }
                            catch (error) {
                                BugLog_2.bugLog("error dispatching action " + action.name + " to store " + call.store.getClassName());
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
                        BugLog_2.bugLogGroupEnd();
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
            }());
            exports_5("Dispatcher", Dispatcher);
            exports_5("default",new Dispatcher());
        }
    }
});
/// <reference path="./typings/tsd.d.ts" />
System.register("StoreComponent", ['reactiv', "BugLog"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var jsx, BugLog_3;
    var StoreComponent;
    return {
        setters:[
            function (jsx_1) {
                jsx = jsx_1;
            },
            function (BugLog_3_1) {
                BugLog_3 = BugLog_3_1;
            }],
        execute: function() {
            StoreComponent = (function (_super) {
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
                    BugLog_3.bugLog("%cCOMPONENT " + this.getClassName(), "color: #0b0");
                    this.setState(this.getState());
                };
                return StoreComponent;
            }(jsx.Component));
            exports_6("default", StoreComponent);
        }
    }
});
System.register("fluxiv", ["Dispatcher", "Store", "StoreComponent"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_7(exports);
    }
    return {
        setters:[
            function (Dispatcher_1_1) {
                exportStar_1(Dispatcher_1_1);
            },
            function (Store_1_1) {
                exportStar_1(Store_1_1);
            },
            function (StoreComponent_1_1) {
                exportStar_1(StoreComponent_1_1);
            }],
        execute: function() {
        }
    }
});
