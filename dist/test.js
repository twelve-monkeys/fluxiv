/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, jsx) {
	    var message = (function (_super) {
	        __extends(message, _super);
	        function message() {
	            _super.apply(this, arguments);
	        }
	        message.prototype.render = function () {
	            jsx.elementOpen("div", null, null, "style", { display: "inline", color: this.props.importance > 5 ? "red" : "gray" });
	            jsx.text(this.props.message);
	            jsx.elementClose();
	        };
	        return message;
	    })(jsx.Component);
	    exports.message = message;
	    var important = (function (_super) {
	        __extends(important, _super);
	        function important(props) {
	            _super.call(this, props);
	            this.setState({ tired: false });
	        }
	        important.prototype.render = function () {
	            jsx.elementVoid(message, null, null, "importance", this.props.importance, "message", this.state.tired ? "tired" : "ok");
	        };
	        return important;
	    })(jsx.Component);
	    exports.important = important;
	    var lc_methods = [];
	    var lc_constructor = 0; // check
	    var lc_componentWillMount = 0; // check
	    var lc_componentDidMount = 0; // check
	    var lc_componentWillReceiveProps = 0; // todo! needs to check args before
	    var lc_shouldComponentUpdate = 0; // check
	    var lc_componentWillUpdate = 0; // check
	    var lc_componentDidUpdate = 0; // check
	    var lc_componentWillUnmount = 0; // check
	    var lc_render = 0; // check
	    var freeze_message = false;
	    var lifecycle = (function () {
	        function lifecycle() {
	            lc_methods.push("constructor");
	            lc_constructor++;
	        }
	        lifecycle.prototype.componentWillMount = function () {
	            lc_methods.push("componentWillMount");
	            lc_componentWillMount++;
	        };
	        lifecycle.prototype.componentDidMount = function () {
	            lc_methods.push("componentDidMount");
	            lc_componentDidMount++;
	        };
	        lifecycle.prototype.componentWillReceiveProps = function (nextProps) {
	            lc_methods.push("componentWillReceiveProps");
	            lc_componentWillReceiveProps++;
	        };
	        lifecycle.prototype.shouldComponentUpdate = function (nextProps, nextState) {
	            lc_methods.push("shouldComponentUpdate");
	            lc_shouldComponentUpdate++;
	            return !freeze_message;
	        };
	        lifecycle.prototype.componentWillUpdate = function (nextProps, nextState) {
	            lc_methods.push("componentWillUpdate");
	            lc_componentWillUpdate++;
	        };
	        lifecycle.prototype.componentDidUpdate = function (prevProps, prevState) {
	            lc_methods.push("componentDidUpdate");
	            lc_componentDidUpdate++;
	        };
	        lifecycle.prototype.componentWillUnmount = function () {
	            lc_methods.push("componentWillUnmount");
	            lc_componentWillUnmount++;
	        };
	        lifecycle.prototype.render = function () {
	            lc_methods.push("render");
	            lc_render++;
	            jsx.elementVoid("div", null, null, "frozen", freeze_message ? "yes" : "no");
	        };
	        return lifecycle;
	    })();
	    exports.lifecycle = lifecycle;
	    function simulateClick(element) {
	        var simulateDivClick = document.createEvent('MouseEvents');
	        simulateDivClick.initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, null, null);
	        return element.dispatchEvent(simulateDivClick);
	    }
	    describe("a patch", function () {
	        var node;
	        var starting_html;
	        var original_properties_of = [];
	        var get_properties = function (container) { return Object.getOwnPropertyNames(container); };
	        beforeEach(function (done) {
	            starting_html = document.body.innerHTML;
	            node = document.createElement("div");
	            document.body.appendChild(node);
	            setTimeout(function () {
	                var conserve_properties_of = [window, document, document.body];
	                original_properties_of = conserve_properties_of.map(function (container) { return get_properties(container); });
	                lc_methods = [];
	                lc_constructor = 0;
	                lc_componentWillMount = 0;
	                lc_componentDidMount = 0;
	                lc_componentWillReceiveProps = 0;
	                lc_shouldComponentUpdate = 0;
	                lc_componentWillUpdate = 0;
	                lc_componentDidUpdate = 0;
	                lc_componentWillUnmount = 0;
	                lc_render = 0;
	                freeze_message = false;
	                done();
	            });
	        });
	        afterEach(function () {
	            document.body.removeChild(node);
	            expect(document.body.innerHTML.trim()).toBe(starting_html.trim());
	            var conserve_properties_of = [window, document, document.body];
	            var new_properties_of = conserve_properties_of.map(function (container) { return get_properties(container); });
	            expect(new_properties_of).toEqual(original_properties_of);
	        });
	        it("does nothing if nothing is rendered", function () {
	            jsx.patch(node, function () { return null; });
	            expect(node.outerHTML).toBe("<div></div>");
	            node.setAttribute("data-id", "3");
	            node.innerHTML = "somestuff";
	            jsx.patch(node, function () { return null; });
	            expect(node.outerHTML).toBe('<div data-id="3">somestuff</div>');
	        });
	        it("can use elementVoid to insert a div", function () {
	            jsx.patch(node, function () {
	                jsx.elementVoid("div");
	            });
	            expect(node.outerHTML).toBe("<div><div></div></div>");
	        });
	        it("will remove something", function () {
	            jsx.patch(node, function () {
	                jsx.elementOpen("span", null, null);
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe("<div><span></span></div>");
	            jsx.patch(node, function () { return null; });
	            expect(node.outerHTML).toBe("<div></div>");
	        });
	        it("can replace and add things", function () {
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null);
	                jsx.elementClose();
	            });
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null);
	                jsx.elementClose();
	                jsx.elementOpen("div", null, null);
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe("<div><div></div><div></div></div>");
	        });
	        it("doesn't re-add the same div", function () {
	            var fn = function () {
	                return jsx.patch(node, function () {
	                    jsx.elementOpen("div", null, null);
	                    jsx.elementClose();
	                });
	            };
	            for (var i = 0; i < 3; i++) {
	                fn();
	                expect(node.outerHTML).toBe("<div><div></div></div>");
	            }
	        });
	        it("handles attributes", function () {
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null, 'id', 'the_id', "style", { color: 'red' });
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id" style="color: red;"></div></div>');
	        });
	        it("mutates attributes", function () {
	            var style = { color: 'red' };
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null, 'id', 'the_id', "style", style);
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id" style="color: red;"></div></div>');
	            style.color = "blue";
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null, 'id', 'the_id', "style", style);
	                jsx.elementClose();
	            });
	            style.backgroundColor = "red";
	            delete style.color;
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null, 'id', 'the_id', "style", style);
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id" style="background-color: red;"></div></div>');
	        });
	        it("adds attributes", function () {
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null, 'id', 'the_id');
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id"></div></div>');
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null, 'id', 'the_id', "name", "fred");
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id" name="fred"></div></div>');
	        });
	        it("removes attributes", function () {
	            jsx.patch(node, function () {
	                jsx.elementOpen("div", null, null, 'id', 'the_id', "name", "fred");
	                jsx.elementClose();
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id" name="fred"></div></div>');
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, null, 'id', 'the_id');
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id"></div></div>');
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, ['id', 'the_id', 'frodo', '121'], 'data-frame', 'anterior');
	            });
	            expect(node.outerHTML).toBe('<div><div id="the_id" frodo="121" data-frame="anterior"></div></div>');
	        });
	        it("deals with a component", function () {
	            jsx.patch(node, function () {
	                jsx.elementVoid(lifecycle);
	            });
	            expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');
	        });
	        it("adds event handlers", function () {
	            var prevent_click_default = false;
	            var count = 0;
	            var test_click = function (event) {
	                count++;
	                if (prevent_click_default)
	                    event.preventDefault();
	            };
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, ["onClick", test_click]);
	            });
	            expect(node.outerHTML).toBe('<div><div></div></div>');
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(false);
	            expect(count).toBe(1);
	            prevent_click_default = true;
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(true);
	            expect(count).toBe(2);
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, ["onClick", test_click]);
	            });
	            prevent_click_default = false;
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(false);
	            expect(count).toBe(3);
	        });
	        it("removes event handlers", function () {
	            var prevent_click_default = false;
	            var count = 0;
	            var test_click = function (event) {
	                count++;
	                if (prevent_click_default)
	                    event.preventDefault();
	            };
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, ["onClick", test_click]);
	            });
	            expect(node.outerHTML).toBe('<div><div></div></div>');
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(false);
	            expect(count).toBe(1);
	            prevent_click_default = true;
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(true);
	            expect(count).toBe(2);
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, null);
	            });
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(false);
	            expect(count).toBe(2);
	        });
	        it("changes event handlers", function () {
	            var count = 0;
	            var test_click = function (event) {
	                count++;
	            };
	            var test_click2 = function (event) {
	                count += 100;
	                event.preventDefault();
	            };
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, ["onClick", test_click]);
	            });
	            expect(node.outerHTML).toBe('<div><div></div></div>');
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(false);
	            expect(count).toBe(1);
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, ["onClick", test_click2]);
	            });
	            var cancelled = !simulateClick(node.children[0]);
	            expect(cancelled).toBe(true);
	            expect(count).toBe(101);
	        });
	        it("allows elements to mutate themselves", function () {
	            jsx.patch(node, function () { return jsx.elementVoid("div"); });
	            node.children[0].innerHTML = "dynamic";
	            jsx.patch(node, function () { return jsx.elementVoid("div"); });
	            expect(node.outerHTML).toBe('<div><div>dynamic</div></div>');
	        });
	        it("constructs components appropriately", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_constructor).toBe(1);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_constructor).toBe(1);
	            jsx.patch(node, function () { return null; });
	            expect(lc_constructor).toBe(1);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_constructor).toBe(2);
	        });
	        it("calls componentWillMount appropriately", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentWillMount).toBe(1);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentWillMount).toBe(1);
	        });
	        it("calls componentDidMount appropriately", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentDidMount).toBe(1);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentDidMount).toBe(1);
	        });
	        it("calls componentWillUnmount appropriately", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentWillUnmount).toBe(0);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentWillUnmount).toBe(0);
	            jsx.patch(node, function () { return null; });
	            expect(lc_componentWillUnmount).toBe(1);
	        });
	        it("calls componentWillUpdate appropriately", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentWillUpdate).toBe(0);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentWillUpdate).toBe(1);
	            jsx.patch(node, function () { return null; });
	            expect(lc_componentWillUpdate).toBe(1);
	        });
	        it("calls componentDidUpdate appropriately", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentDidUpdate).toBe(0);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_componentDidUpdate).toBe(1);
	            jsx.patch(node, function () { return null; });
	            expect(lc_componentDidUpdate).toBe(1);
	        });
	        it("calls shouldComponentUpdate appropriately", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_shouldComponentUpdate).toBe(0);
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_shouldComponentUpdate).toBe(1);
	            jsx.patch(node, function () { return null; });
	            expect(lc_shouldComponentUpdate).toBe(1);
	        });
	        it("calls mounting lifecycle methods in the correct order", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_methods.join(" => ")).toBe("constructor => componentWillMount => render => componentDidMount");
	        });
	        it("calls re-render lifecycle methods in the correct order", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            lc_methods = [];
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_methods.join(" => ")).toBe("componentWillReceiveProps => shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate");
	        });
	        it("respects shouldComponentUpdate", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            lc_methods = [];
	            freeze_message = true;
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            expect(lc_methods.join(" => ")).toBe("componentWillReceiveProps => shouldComponentUpdate");
	            expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');
	        });
	        it("calls unmounting lifecycle methods in the correct order", function () {
	            jsx.patch(node, function () { return jsx.elementVoid(lifecycle); });
	            lc_methods = [];
	            jsx.patch(node, function () { return null; });
	            expect(lc_methods.join(" => ")).toBe("componentWillUnmount");
	        });
	        it("unmounts components", function () {
	            jsx.patch(node, function () {
	                jsx.elementVoid(lifecycle, null, null, null);
	            });
	            expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');
	            expect(lc_componentWillMount).toBe(1);
	            expect(lc_componentDidMount).toBe(1);
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", null, null, null);
	            });
	            expect(node.outerHTML).toBe('<div><div></div></div>');
	            expect(lc_componentWillMount).toBe(1);
	            expect(lc_componentDidMount).toBe(1);
	            expect(lc_componentWillUnmount).toBe(1);
	        });
	        it("recognises nested components", function () {
	            var start = new Date().getTime();
	            jsx.patch(node, function () {
	                jsx.elementVoid(important, null, null, "importance", 7, "name", "bond, jimmy-bob melon-field bond");
	            });
	            expect(node.outerHTML).toBe('<div><div style="display: inline; color: red;">ok</div></div>');
	        });
	        fit("is fast", function () {
	            var start = new Date().getTime();
	            var iterations = 10000;
	            for (var i = 0; i < iterations; i++) {
	                jsx.patch(node, function () {
	                    jsx.elementVoid(important, null, null, "importance", i % 10, "name", "bond, jimmy-bob " + (i % 2 ? "melon-field" : "princess") + " bond");
	                });
	            }
	            var duration = new Date().getTime() - start;
	            console.log("benchmark: " + iterations + " took " + duration + " ms = " + (Math.ceil(duration / iterations * 10000) / 10) + " us per");
	            expect(duration).toBeLessThan(250);
	        });
	        it("deals with keys", function () {
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", "1", null, "id", "iamme");
	            });
	            expect(node.outerHTML).toBe('<div><div id="iamme"></div></div>');
	            jsx.patch(node, function () {
	                jsx.elementVoid("div", "1", null, "id", "iamstillme");
	            });
	            expect(node.outerHTML).toBe('<div><div id="iamstillme"></div></div>');
	        });
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
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
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhkNmM5MjQxZDFlMzQ3NmEyYzEiLCJ3ZWJwYWNrOi8vL0M6L3Byb2plY3RzL3JlYWN0aXYvc3BlYy9kb20vU3BlYy50cyIsIndlYnBhY2s6Ly8vQzovcHJvamVjdHMvcmVhY3Rpdi9yZWFjdGl2LnRzIl0sIm5hbWVzIjpbIm1lc3NhZ2UiLCJtZXNzYWdlLmNvbnN0cnVjdG9yIiwibWVzc2FnZS5yZW5kZXIiLCJpbXBvcnRhbnQiLCJpbXBvcnRhbnQuY29uc3RydWN0b3IiLCJpbXBvcnRhbnQucmVuZGVyIiwibGlmZWN5Y2xlIiwibGlmZWN5Y2xlLmNvbnN0cnVjdG9yIiwibGlmZWN5Y2xlLmNvbXBvbmVudFdpbGxNb3VudCIsImxpZmVjeWNsZS5jb21wb25lbnREaWRNb3VudCIsImxpZmVjeWNsZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibGlmZWN5Y2xlLnNob3VsZENvbXBvbmVudFVwZGF0ZSIsImxpZmVjeWNsZS5jb21wb25lbnRXaWxsVXBkYXRlIiwibGlmZWN5Y2xlLmNvbXBvbmVudERpZFVwZGF0ZSIsImxpZmVjeWNsZS5jb21wb25lbnRXaWxsVW5tb3VudCIsImxpZmVjeWNsZS5yZW5kZXIiLCJzaW11bGF0ZUNsaWNrIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQ29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCIsIkNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCIsIkNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCIsIkNvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUiLCJDb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIkNvbXBvbmVudC5yZW5kZXIiLCJDb21wb25lbnQuc2V0U3RhdGUiLCJwYXRjaCIsImVsZW1lbnRWb2lkIiwidGV4dCIsImVsZW1lbnRPcGVuIiwiZWxlbWVudENsb3NlIiwiZ2V0UHJvcHMiLCJyZW5k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LENBQUNBO3FCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQTt5QkFDN0JBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO3FCQUNuQ0EsS0FBS0EsQ0FBQ0E7YUFDZEEsQ0FBQ0E7U0FDTEEsQ0FBQ0EsQ0FBQ0E7U0FFRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7YUFDUkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7aUJBQ3RDQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtTQUU3Q0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDeENBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1NBRTdDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFJQSxJQUFJQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQTthQUM5QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7aUJBQ2pCQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxJQUFJQSxPQUFPQSxVQUFVQSxDQUFD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QUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxJQUFJQSxVQUFVQSxDQUFDQSxJQUFJQSxJQUFJQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxpQkFBaUJBLENBQUNBO2lCQUNsRkEsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtTQUNqREEsQ0FBQ0E7S0FDTEEsQ0FBQ0EiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODhkNmM5MjQxZDFlMzQ3NmEyYzFcbiAqKi8iLCJpbXBvcnQgKiBhcyBqc3ggZnJvbSBcIi4uLy4uL3JlYWN0aXZcIjtcclxuXHJcbmludGVyZmFjZSBtZXNzYWdlUHJvcHMge1xyXG4gICAgaW1wb3J0YW5jZTogbnVtYmVyO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIG1lc3NhZ2UgZXh0ZW5kcyBqc3guQ29tcG9uZW50PG1lc3NhZ2VQcm9wcywgdm9pZD4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGpzeC5lbGVtZW50T3BlbihcImRpdlwiLCBudWxsLCBudWxsLCBcInN0eWxlXCIsIHsgZGlzcGxheTogXCJpbmxpbmVcIiwgY29sb3I6IHRoaXMucHJvcHMuaW1wb3J0YW5jZSA+IDUgPyBcInJlZFwiIDogXCJncmF5XCIgfSk7XHJcbiAgICAgICAganN4LnRleHQodGhpcy5wcm9wcy5tZXNzYWdlKTtcclxuICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBpbXBvcnRhbnRQcm9wcyB7XHJcbiAgICBpbXBvcnRhbmNlOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBpbXBvcnRhbnRTdGF0ZSB7XHJcbiAgICB0aXJlZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGltcG9ydGFudCBleHRlbmRzIGpzeC5Db21wb25lbnQ8aW1wb3J0YW50UHJvcHMsIGltcG9ydGFudFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogaW1wb3J0YW50UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpcmVkOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBqc3guZWxlbWVudFZvaWQobWVzc2FnZSBhcyBhbnksIG51bGwsIG51bGwsIFwiaW1wb3J0YW5jZVwiLCB0aGlzLnByb3BzLmltcG9ydGFuY2UsIFwibWVzc2FnZVwiLCB0aGlzLnN0YXRlLnRpcmVkID8gXCJ0aXJlZFwiIDogXCJva1wiKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGxjX21ldGhvZHMgPSBbXTtcclxubGV0IGxjX2NvbnN0cnVjdG9yID0gMDsgLy8gY2hlY2tcclxubGV0IGxjX2NvbXBvbmVudFdpbGxNb3VudCA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnREaWRNb3VudCA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gMDsgLy8gdG9kbyEgbmVlZHMgdG8gY2hlY2sgYXJncyBiZWZvcmVcclxubGV0IGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnRXaWxsVXBkYXRlID0gMDsgLy8gY2hlY2tcclxubGV0IGxjX2NvbXBvbmVudERpZFVwZGF0ZSA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnRXaWxsVW5tb3VudCA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19yZW5kZXIgPSAwOy8vIGNoZWNrXHJcblxyXG52YXIgZnJlZXplX21lc3NhZ2UgPSBmYWxzZTtcclxuZXhwb3J0IGNsYXNzIGxpZmVjeWNsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICBsY19jb25zdHJ1Y3RvcisrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb21wb25lbnRXaWxsTW91bnRcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50V2lsbE1vdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGNfbWV0aG9kcy5wdXNoKFwiY29tcG9uZW50RGlkTW91bnRcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50RGlkTW91bnQrKztcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGxjX21ldGhvZHMucHVzaChcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIGxjX21ldGhvZHMucHVzaChcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcclxuICAgICAgICBsY19zaG91bGRDb21wb25lbnRVcGRhdGUrKztcclxuICAgICAgICByZXR1cm4gIWZyZWV6ZV9tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb21wb25lbnRXaWxsVXBkYXRlXCIpO1xyXG4gICAgICAgIGxjX2NvbXBvbmVudFdpbGxVcGRhdGUrKztcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb21wb25lbnREaWRVcGRhdGVcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50RGlkVXBkYXRlKys7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgbGNfbWV0aG9kcy5wdXNoKFwiY29tcG9uZW50V2lsbFVubW91bnRcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50V2lsbFVubW91bnQrKztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGNfbWV0aG9kcy5wdXNoKFwicmVuZGVyXCIpO1xyXG4gICAgICAgIGxjX3JlbmRlcisrO1xyXG4gICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBudWxsLCBcImZyb3plblwiLCBmcmVlemVfbWVzc2FnZSA/IFwieWVzXCIgOiBcIm5vXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaW11bGF0ZUNsaWNrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIHZhciBzaW11bGF0ZURpdkNsaWNrID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XHJcbiAgICBzaW11bGF0ZURpdkNsaWNrLmluaXRNb3VzZUV2ZW50KCdjbGljaycsIHRydWUsIHRydWUsIGRvY3VtZW50LmRlZmF1bHRWaWV3LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgbnVsbCwgbnVsbCk7XHJcbiAgICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KHNpbXVsYXRlRGl2Q2xpY2spO1xyXG59XHJcblxyXG5kZXNjcmliZShcImEgcGF0Y2hcIiwgKCkgPT4ge1xyXG4gICAgdmFyIG5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgdmFyIHN0YXJ0aW5nX2h0bWw6IHN0cmluZztcclxuXHJcbiAgICB2YXIgb3JpZ2luYWxfcHJvcGVydGllc19vZiA9IFtdO1xyXG5cclxuICAgIHZhciBnZXRfcHJvcGVydGllcyA9IChjb250YWluZXIpID0+IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbnRhaW5lcik7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoZG9uZSkgPT4ge1xyXG4gICAgICAgIHN0YXJ0aW5nX2h0bWwgPSBkb2N1bWVudC5ib2R5LmlubmVySFRNTDtcclxuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY29uc2VydmVfcHJvcGVydGllc19vZiA9IFt3aW5kb3csIGRvY3VtZW50LCBkb2N1bWVudC5ib2R5XTtcclxuICAgICAgICAgICAgb3JpZ2luYWxfcHJvcGVydGllc19vZiA9IGNvbnNlcnZlX3Byb3BlcnRpZXNfb2YubWFwKGNvbnRhaW5lciA9PiBnZXRfcHJvcGVydGllcyhjb250YWluZXIpKVxyXG5cclxuICAgICAgICAgICAgbGNfbWV0aG9kcyA9IFtdO1xyXG4gICAgICAgICAgICBsY19jb25zdHJ1Y3RvciA9IDA7XHJcbiAgICAgICAgICAgIGxjX2NvbXBvbmVudFdpbGxNb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxjX2NvbXBvbmVudERpZE1vdW50ID0gMDtcclxuICAgICAgICAgICAgbGNfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IDA7XHJcbiAgICAgICAgICAgIGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGxjX2NvbXBvbmVudFdpbGxVcGRhdGUgPSAwO1xyXG4gICAgICAgICAgICBsY19jb21wb25lbnREaWRVcGRhdGUgPSAwO1xyXG4gICAgICAgICAgICBsY19jb21wb25lbnRXaWxsVW5tb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxjX3JlbmRlciA9IDA7XHJcbiAgICAgICAgICAgIGZyZWV6ZV9tZXNzYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgICAgICBleHBlY3QoZG9jdW1lbnQuYm9keS5pbm5lckhUTUwudHJpbSgpKS50b0JlKHN0YXJ0aW5nX2h0bWwudHJpbSgpKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbnNlcnZlX3Byb3BlcnRpZXNfb2YgPSBbd2luZG93LCBkb2N1bWVudCwgZG9jdW1lbnQuYm9keV07XHJcbiAgICAgICAgdmFyIG5ld19wcm9wZXJ0aWVzX29mID0gY29uc2VydmVfcHJvcGVydGllc19vZi5tYXAoY29udGFpbmVyID0+IGdldF9wcm9wZXJ0aWVzKGNvbnRhaW5lcikpXHJcblxyXG4gICAgICAgIGV4cGVjdChuZXdfcHJvcGVydGllc19vZikudG9FcXVhbChvcmlnaW5hbF9wcm9wZXJ0aWVzX29mKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiZG9lcyBub3RoaW5nIGlmIG5vdGhpbmcgaXMgcmVuZGVyZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBudWxsKTtcclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoXCI8ZGl2PjwvZGl2PlwiKTtcclxuXHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIFwiM1wiKTtcclxuICAgICAgICBub2RlLmlubmVySFRNTCA9IFwic29tZXN0dWZmXCI7XHJcblxyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBudWxsKTtcclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXYgZGF0YS1pZD1cIjNcIj5zb21lc3R1ZmY8L2Rpdj4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FuIHVzZSBlbGVtZW50Vm9pZCB0byBpbnNlcnQgYSBkaXZcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoXCI8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+XCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGl0KFwid2lsbCByZW1vdmUgc29tZXRoaW5nXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudE9wZW4oXCJzcGFuXCIsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKFwiPGRpdj48c3Bhbj48L3NwYW4+PC9kaXY+XCIpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZShcIjxkaXY+PC9kaXY+XCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGl0KFwiY2FuIHJlcGxhY2UgYW5kIGFkZCB0aGluZ3NcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50T3BlbihcImRpdlwiLCBudWxsLCBudWxsKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudE9wZW4oXCJkaXZcIiwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZShcIjxkaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiZG9lc24ndCByZS1hZGQgdGhlIHNhbWUgZGl2XCIsICgpID0+IHtcclxuICAgICAgICB2YXIgZm4gPSAoKSA9PlxyXG4gICAgICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKFwiPGRpdj48ZGl2PjwvZGl2PjwvZGl2PlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImhhbmRsZXMgYXR0cmlidXRlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcInN0eWxlXCIsIHsgY29sb3I6ICdyZWQnIH0pO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGlkPVwidGhlX2lkXCIgc3R5bGU9XCJjb2xvcjogcmVkO1wiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJtdXRhdGVzIGF0dHJpYnV0ZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHsgY29sb3I6ICdyZWQnIH0gYXMgYW55O1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50T3BlbihcImRpdlwiLCBudWxsLCBudWxsLCAnaWQnLCAndGhlX2lkJywgXCJzdHlsZVwiLCBzdHlsZSk7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIHN0eWxlLmNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcInN0eWxlXCIsIHN0eWxlKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgIGRlbGV0ZSBzdHlsZS5jb2xvcjtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcInN0eWxlXCIsIHN0eWxlKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdiBpZD1cInRoZV9pZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmVkO1wiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJhZGRzIGF0dHJpYnV0ZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50T3BlbihcImRpdlwiLCBudWxsLCBudWxsLCAnaWQnLCAndGhlX2lkJyk7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcIm5hbWVcIiwgXCJmcmVkXCIpO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGlkPVwidGhlX2lkXCIgbmFtZT1cImZyZWRcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwicmVtb3ZlcyBhdHRyaWJ1dGVzXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudE9wZW4oXCJkaXZcIiwgbnVsbCwgbnVsbCwgJ2lkJywgJ3RoZV9pZCcsIFwibmFtZVwiLCBcImZyZWRcIik7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIiBuYW1lPVwiZnJlZFwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgbnVsbCwgJ2lkJywgJ3RoZV9pZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdiBpZD1cInRoZV9pZFwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBbJ2lkJywgJ3RoZV9pZCcsICdmcm9kbycsICcxMjEnXSwgJ2RhdGEtZnJhbWUnLCAnYW50ZXJpb3InKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIiBmcm9kbz1cIjEyMVwiIGRhdGEtZnJhbWU9XCJhbnRlcmlvclwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJkZWFscyB3aXRoIGEgY29tcG9uZW50XCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGZyb3plbj1cIm5vXCI+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImFkZHMgZXZlbnQgaGFuZGxlcnNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBwcmV2ZW50X2NsaWNrX2RlZmF1bHQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICB2YXIgdGVzdF9jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAocHJldmVudF9jbGlja19kZWZhdWx0KVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBbXCJvbkNsaWNrXCIsIHRlc3RfY2xpY2tdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMSk7XHJcblxyXG4gICAgICAgIHByZXZlbnRfY2xpY2tfZGVmYXVsdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICFzaW11bGF0ZUNsaWNrKG5vZGUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIGV4cGVjdChjYW5jZWxsZWQpLnRvQmUodHJ1ZSk7XHJcbiAgICAgICAgZXhwZWN0KGNvdW50KS50b0JlKDIpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgW1wib25DbGlja1wiLCB0ZXN0X2NsaWNrXSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByZXZlbnRfY2xpY2tfZGVmYXVsdCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInJlbW92ZXMgZXZlbnQgaGFuZGxlcnNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBwcmV2ZW50X2NsaWNrX2RlZmF1bHQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICB2YXIgdGVzdF9jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAocHJldmVudF9jbGlja19kZWZhdWx0KVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBbXCJvbkNsaWNrXCIsIHRlc3RfY2xpY2tdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMSk7XHJcblxyXG4gICAgICAgIHByZXZlbnRfY2xpY2tfZGVmYXVsdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICFzaW11bGF0ZUNsaWNrKG5vZGUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIGV4cGVjdChjYW5jZWxsZWQpLnRvQmUodHJ1ZSk7XHJcbiAgICAgICAgZXhwZWN0KGNvdW50KS50b0JlKDIpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNoYW5nZXMgZXZlbnQgaGFuZGxlcnNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIHZhciB0ZXN0X2NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGVzdF9jbGljazIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY291bnQgKz0gMTAwO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIsIG51bGwsIFtcIm9uQ2xpY2tcIiwgdGVzdF9jbGlja10pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICB2YXIgY2FuY2VsbGVkID0gIXNpbXVsYXRlQ2xpY2sobm9kZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgZXhwZWN0KGNhbmNlbGxlZCkudG9CZShmYWxzZSk7XHJcbiAgICAgICAgZXhwZWN0KGNvdW50KS50b0JlKDEpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgW1wib25DbGlja1wiLCB0ZXN0X2NsaWNrMl0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY2FuY2VsbGVkID0gIXNpbXVsYXRlQ2xpY2sobm9kZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgZXhwZWN0KGNhbmNlbGxlZCkudG9CZSh0cnVlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMTAxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiYWxsb3dzIGVsZW1lbnRzIHRvIG11dGF0ZSB0aGVtc2VsdmVzXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIpKTtcclxuICAgICAgICAobm9kZS5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXCJkeW5hbWljXCI7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChcImRpdlwiKSk7XHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXY+ZHluYW1pYzwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJjb25zdHJ1Y3RzIGNvbXBvbmVudHMgYXBwcm9wcmlhdGVseVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbnN0cnVjdG9yKS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb25zdHJ1Y3RvcikudG9CZSgxKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbnN0cnVjdG9yKS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb25zdHJ1Y3RvcikudG9CZSgyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50V2lsbE1vdW50IGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsTW91bnQpLnRvQmUoMSk7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxNb3VudCkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50RGlkTW91bnQgYXBwcm9wcmlhdGVseVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudERpZE1vdW50KS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnREaWRNb3VudCkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50V2lsbFVubW91bnQgYXBwcm9wcmlhdGVseVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxVbm1vdW50KS50b0JlKDApO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsVW5tb3VudCkudG9CZSgwKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxVbm1vdW50KS50b0JlKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJjYWxscyBjb21wb25lbnRXaWxsVXBkYXRlIGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsVXBkYXRlKS50b0JlKDApO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsVXBkYXRlKS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBudWxsKTtcclxuICAgICAgICBleHBlY3QobGNfY29tcG9uZW50V2lsbFVwZGF0ZSkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50RGlkVXBkYXRlIGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnREaWRVcGRhdGUpLnRvQmUoMCk7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudERpZFVwZGF0ZSkudG9CZSgxKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudERpZFVwZGF0ZSkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgc2hvdWxkQ29tcG9uZW50VXBkYXRlIGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19zaG91bGRDb21wb25lbnRVcGRhdGUpLnRvQmUoMCk7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSkudG9CZSgxKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgbW91bnRpbmcgbGlmZWN5Y2xlIG1ldGhvZHMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19tZXRob2RzLmpvaW4oXCIgPT4gXCIpKS50b0JlKFwiY29uc3RydWN0b3IgPT4gY29tcG9uZW50V2lsbE1vdW50ID0+IHJlbmRlciA9PiBjb21wb25lbnREaWRNb3VudFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgcmUtcmVuZGVyIGxpZmVjeWNsZSBtZXRob2RzIGluIHRoZSBjb3JyZWN0IG9yZGVyXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ganN4LmVsZW1lbnRWb2lkKGxpZmVjeWNsZSBhcyBhbnkpKTtcclxuICAgICAgICBsY19tZXRob2RzID0gW107XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX21ldGhvZHMuam9pbihcIiA9PiBcIikpLnRvQmUoXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0+IHNob3VsZENvbXBvbmVudFVwZGF0ZSA9PiBjb21wb25lbnRXaWxsVXBkYXRlID0+IHJlbmRlciA9PiBjb21wb25lbnREaWRVcGRhdGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInJlc3BlY3RzIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgbGNfbWV0aG9kcyA9IFtdO1xyXG4gICAgICAgIGZyZWV6ZV9tZXNzYWdlID0gdHJ1ZTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ganN4LmVsZW1lbnRWb2lkKGxpZmVjeWNsZSBhcyBhbnkpKTtcclxuICAgICAgICBleHBlY3QobGNfbWV0aG9kcy5qb2luKFwiID0+IFwiKSkudG9CZShcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT4gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGZyb3plbj1cIm5vXCI+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNhbGxzIHVubW91bnRpbmcgbGlmZWN5Y2xlIG1ldGhvZHMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGxjX21ldGhvZHMgPSBbXTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX21ldGhvZHMuam9pbihcIiA9PiBcIikpLnRvQmUoXCJjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwidW5tb3VudHMgY29tcG9uZW50c1wiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKGxpZmVjeWNsZSBhcyBhbnksIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdiBmcm96ZW49XCJub1wiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBleHBlY3QobGNfY29tcG9uZW50V2lsbE1vdW50KS50b0JlKDEpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnREaWRNb3VudCkudG9CZSgxKTtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxNb3VudCkudG9CZSgxKTtcclxuICAgICAgICBleHBlY3QobGNfY29tcG9uZW50RGlkTW91bnQpLnRvQmUoMSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxVbm1vdW50KS50b0JlKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJyZWNvZ25pc2VzIG5lc3RlZCBjb21wb25lbnRzXCIsICgpID0+IHtcclxuICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKGltcG9ydGFudCBhcyBhbnksIG51bGwsIG51bGwsIFwiaW1wb3J0YW5jZVwiLCA3LCBcIm5hbWVcIiwgXCJib25kLCBqaW1teS1ib2IgbWVsb24tZmllbGQgYm9uZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7IGNvbG9yOiByZWQ7XCI+b2s8L2Rpdj48L2Rpdj4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZpdChcImlzIGZhc3RcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gMTAwMDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChpbXBvcnRhbnQgYXMgYW55LCBudWxsLCBudWxsLCBcImltcG9ydGFuY2VcIiwgaSAlIDEwLCBcIm5hbWVcIiwgXCJib25kLCBqaW1teS1ib2IgXCIgKyAoaSAlIDIgPyBcIm1lbG9uLWZpZWxkXCIgOiBcInByaW5jZXNzXCIpICsgXCIgYm9uZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImJlbmNobWFyazogXCIgKyBpdGVyYXRpb25zICsgXCIgdG9vayBcIiArIGR1cmF0aW9uICsgXCIgbXMgPSBcIiArIChNYXRoLmNlaWwoZHVyYXRpb24gLyBpdGVyYXRpb25zICogMTAwMDApIC8gMTApICsgXCIgdXMgcGVyXCIpO1xyXG4gICAgICAgIGV4cGVjdChkdXJhdGlvbikudG9CZUxlc3NUaGFuKDI1MCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImRlYWxzIHdpdGgga2V5c1wiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIsIFwiMVwiLCBudWxsLCBcImlkXCIsIFwiaWFtbWVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGlkPVwiaWFtbWVcIj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIsIFwiMVwiLCBudWxsLCBcImlkXCIsIFwiaWFtc3RpbGxtZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJpYW1zdGlsbG1lXCI+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICB9KTtcclxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovcHJvamVjdHMvcmVhY3Rpdi9zcGVjL2RvbS9TcGVjLnRzXG4gKiovIiwiaW50ZXJmYWNlIElDb21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudD86ICgpID0+IHZvaWQ7XG4gICAgY29tcG9uZW50RGlkTW91bnQ/OiAoKSA9PiB2b2lkO1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50PzogKCkgPT4gdm9pZDtcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlPzogKCkgPT4gdm9pZDtcbiAgICBjb21wb25lbnREaWRVcGRhdGU/OiAoKSA9PiB2b2lkO1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuZXh0X3Byb3BzOiBhbnkpID0+IHZvaWQ7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiAoKSA9PiBib29sZWFuO1xuICAgIHJlbmRlcjogKCkgPT4gdm9pZDtcbiAgICBwcm9wczogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFAsIFM+IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XG4gICAgc3RhdGU6IFM7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BzOiBQKSB7IH1cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7IH07XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7IH07XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7IH07XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dF9wcm9wczogYW55KSB7IH07XG4gICAgcmVuZGVyKCkgeyB9O1xuICAgIHNldFN0YXRlKHN0YXRlOiBTKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBWTm9kZSB7XG4gICAgcGFyZW50OiBWTm9kZTtcbiAgICBrZXk/OiBzdHJpbmc7XG4gICAgdGFnOiBzdHJpbmc7XG4gICAgYXR0cnM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9O1xuICAgIG5vZGU/OiBOb2RlO1xuICAgIGNvbXBvbmVudD86IElDb21wb25lbnQ7XG4gICAga2lkczogVk5vZGVbXTtcbiAgICB0ZXh0Pzogc3RyaW5nO1xufVxuXG52YXIgb3Blbl92bm9kZTogVk5vZGU7XG52YXIgbmV4dF92bm9kZTogVk5vZGU7XG52YXIgcHJldmlvdXNfdm5vZGU6IFZOb2RlO1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goZWxlbWVudDogRWxlbWVudCwgZm46ICgpID0+IHZvaWQpIHtcbiAgICB2YXIgbm9kZSA9IGVsZW1lbnRbXCJfX21pcnJvcl92aWV3X25vZGVcIl0gYXMgVk5vZGU7XG4gICAgaWYgKCFub2RlKVxuICAgICAgICBlbGVtZW50W1wiX19taXJyb3Jfdmlld19ub2RlXCJdID0gbm9kZSA9IHtcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIHRhZzogZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgbm9kZTogZWxlbWVudCxcbiAgICAgICAgICAgIGtleTogbnVsbCxcbiAgICAgICAgICAgIGF0dHJzOiB7fSxcbiAgICAgICAgICAgIGtpZHM6IFtdXG4gICAgICAgIH07XG5cbiAgICBwcmV2aW91c192bm9kZSA9IG51bGw7XG4gICAgb3Blbl92bm9kZSA9IG51bGw7XG4gICAgbmV4dF92bm9kZSA9IG5vZGU7XG5cbiAgICBlbGVtZW50T3BlbihlbGVtZW50Lm5vZGVOYW1lLCBudWxsLCBudWxsKTtcbiAgICBmbigpO1xuICAgIGVsZW1lbnRDbG9zZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFZvaWQodGFnOiBzdHJpbmcsIGtleT86IHN0cmluZywgc3RhdGljcz8sIGExPywgYTI/LCBhMz8sIGE0PywgYTU/LCBhNj8pIHtcbiAgICBlbGVtZW50T3Blbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGVsZW1lbnRDbG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dCh2YWx1ZTogYW55LCBmb3JtYXR0ZXJzPzogKCh2YWx1ZSkgPT4gc3RyaW5nKVtdKSB7XG4gICAgdmFyIG5vZGUgPSBlbGVtZW50T3BlbihcIiN0ZXh0XCIsIG51bGwsIG51bGwpO1xuICAgIGVsZW1lbnRDbG9zZSgpO1xuXG4gICAgaWYgKG5vZGUudGV4dCAhPT0gdmFsdWUpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZCA9IG5vZGUudGV4dCA9IHZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChmb3JtYXR0ZXIpXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gZm9ybWF0dGVyKGZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgKG5vZGUubm9kZSBhcyBhbnkpLmRhdGEgPSBmb3JtYXR0ZWQ7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudE9wZW4odGFnOiBzdHJpbmcgfCBGdW5jdGlvbiwga2V5Pzogc3RyaW5nLCBzdGF0aWNzPzogYW55W10sIG4xPywgdjE/LCBuMj8sIHYyPywgbjM/LCB2Mz8pIHtcbiAgICBzeW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICAvLyAgICBpZiAob3Blbl92bm9kZS5jb21wb25lbnQpXG4gICAgLy8gICAgICAgIHJldHVybiBvcGVuX3Zub2RlO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHt9O1xuICAgIGxldCBub2RlID0gb3Blbl92bm9kZS5ub2RlIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3Qgc3luY19hcmcgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZpc2l0ZWRbbmFtZV0gPSB0cnVlO1xuXG4gICAgICAgIGxldCBleGlzdGluZ192YWx1ZSA9IG9wZW5fdm5vZGUuYXR0cnNbbmFtZV07XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcInN0eWxlXCI6XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb21wb25lbnRzIGRvbid0IGhhdmUgZG9tIG5vZGVzLCB5b3UgY2Fubm90IHNldCBzdHlsZXMgZGlyZWN0bHkgb24gdGhlbVwiKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IG5vZGUuc3R5bGU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2aXNpdGVkX3N0eWxlOiB7IFtuYW1lOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIDxPYmplY3Q+dmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcF92YWx1ZSA9IHZhbHVlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkX3N0eWxlW3Byb3BdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZ192YWx1ZSB8fCBleGlzdGluZ192YWx1ZVtwcm9wXSAhPT0gcHJvcF92YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbcHJvcF0gPSBwcm9wX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKG9wZW5fdm5vZGUuYXR0cnNbbmFtZV0gPSBleGlzdGluZ192YWx1ZSA9IGV4aXN0aW5nX3ZhbHVlIHx8IHt9KVtwcm9wXSA9IHByb3BfdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGV4aXN0aW5nX3ZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWRfc3R5bGVbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBleGlzdGluZ192YWx1ZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlW3Byb3BdID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdfdmFsdWUgIT09IHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLmF0dHJzW25hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSBcImNsYXNzTmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJjbGFzc1wiO1xuXG4gICAgICAgICAgICAgICAgaWYgKFsnb2JqZWN0JywgJ2Z1bmN0aW9uJ10uaW5kZXhPZih0eXBlb2YgdmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5zbGljZSgwLCAyKSA9PT0gXCJvblwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKChmbjogKGV2ZW50KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50X25hbWUgPSBuYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXhpc3RpbmdfdmFsdWUgIT09IGZuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBleGlzdGluZ192YWx1ZSk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbl92bm9kZS5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgZm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW9wZW5fdm5vZGUuY29tcG9uZW50KVxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN0YXRpY3MpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGljcy5sZW5ndGg7IGkgKz0gMilcbiAgICAgICAgICAgIHN5bmNfYXJnKHN0YXRpY3NbaV0sIHN0YXRpY3NbaSArIDFdKTtcblxuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAyKVxuICAgICAgICBzeW5jX2FyZyhhcmd1bWVudHNbaV0sIGFyZ3VtZW50c1tpICsgMV0pO1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBvcGVuX3Zub2RlLmF0dHJzKVxuICAgICAgICBpZiAoIXZpc2l0ZWRbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmIChuYW1lLnNsaWNlKDAsIDIpID09PSBcIm9uXCIgJiYgdHlwZW9mIG9wZW5fdm5vZGUuYXR0cnNbbmFtZV0gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLCBvcGVuX3Zub2RlLmF0dHJzW25hbWVdKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCFvcGVuX3Zub2RlLmNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAob3Blbl92bm9kZS5ub2RlIGFzIEhUTUxFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSBvcGVuX3Zub2RlLmF0dHJzW25hbWVdO1xuICAgICAgICB9XG5cbiAgICByZXR1cm4gb3Blbl92bm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRDbG9zZSgpIHtcbiAgICBpZiAob3Blbl92bm9kZSkge1xuICAgICAgICBjb25zdCBraWRzID0gb3Blbl92bm9kZS5raWRzO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBraWRzW2tpZHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoIWNoaWxkIHx8IGNoaWxkID09PSBwcmV2aW91c192bm9kZSlcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbXBvbmVudCAmJiBjaGlsZC5jb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQpXG4gICAgICAgICAgICAgICAgY2hpbGQuY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICAgICAgICAgIG9wZW5fdm5vZGUubm9kZS5yZW1vdmVDaGlsZChjaGlsZC5ub2RlKTtcbiAgICAgICAgICAgIGtpZHMuc3BsaWNlKGtpZHMuaW5kZXhPZihjaGlsZCksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Yga2lkcy5zbGljZSgpKVxuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gb3Blbl92bm9kZSlcbiAgICAgICAgICAgICAgICBraWRzLnNwbGljZShraWRzLmluZGV4T2YoY2hpbGQpLCAxKTtcbiAgICB9XG4gICAgcHJldmlvdXNfdm5vZGUgPSBvcGVuX3Zub2RlO1xuICAgIG5leHRfdm5vZGUgPSAob3Blbl92bm9kZSAmJiBvcGVuX3Zub2RlLnBhcmVudCkgPyBvcGVuX3Zub2RlLnBhcmVudC5raWRzW29wZW5fdm5vZGUucGFyZW50LmtpZHMuaW5kZXhPZihvcGVuX3Zub2RlKSArIDFdIDogdW5kZWZpbmVkO1xuICAgIG9wZW5fdm5vZGUgPSBvcGVuX3Zub2RlID8gb3Blbl92bm9kZS5wYXJlbnQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wcyh0YWc6IHN0cmluZyB8IEZ1bmN0aW9uLCBrZXk/OiBzdHJpbmcsIHN0YXRpY3M/OiBhbnlbXSwgbjE/LCB2MT8sIG4yPywgdjI/LCBuMz8sIHYzPykge1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIGlmIChzdGF0aWNzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpY3MubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gc3RhdGljc1tpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHN0YXRpY3NbaSArIDFdO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBwcm9wc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBwcm9wc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChpc19uZXcsIG5leHRfcHJvcHMpIHtcbiAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5wcm9wcyA9IHt9O1xuXG4gICAgaWYgKCFpc19uZXcpIHtcbiAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpXG4gICAgICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRfcHJvcHMpO1xuICAgIH1cblxuICAgIG9wZW5fdm5vZGUuY29tcG9uZW50LnByb3BzID0gbmV4dF9wcm9wcztcblxuICAgIGlmICghaXNfbmV3KSB7XG4gICAgICAgIGlmIChvcGVuX3Zub2RlLmNvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgJiYgIW9wZW5fdm5vZGUuY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSgpKSB7XG4gICAgICAgICAgICBwcmV2aW91c192bm9kZSA9IG5leHRfdm5vZGU7XG4gICAgICAgICAgICBuZXh0X3Zub2RlID0gb3Blbl92bm9kZS5raWRzW29wZW5fdm5vZGUua2lkcy5pbmRleE9mKHByZXZpb3VzX3Zub2RlKSArIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUpXG4gICAgICAgICAgICAgICAgb3Blbl92bm9kZS5jb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuXG4gICAgICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5yZW5kZXIoKTtcblxuICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZSlcbiAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZVxuICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5yZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gc3luYyh0YWc6IHN0cmluZyB8IEZ1bmN0aW9uLCBrZXk/OiBzdHJpbmcsIHN0YXRpY3M/OiBhbnlbXSwgbjE/LCB2MT8sIG4yPywgdjI/LCBuMz8sIHYzPykge1xuICAgIHByZXZpb3VzX3Zub2RlID0gbnVsbDtcblxuICAgIGxldCByZXVzZV9uZXh0X3Zub2RlID0gbmV4dF92bm9kZSAmJiBuZXh0X3Zub2RlLmtleSA9PT0ga2V5O1xuICAgIGlmIChyZXVzZV9uZXh0X3Zub2RlKVxuICAgICAgICBpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldXNlX25leHRfdm5vZGUgPSBuZXh0X3Zub2RlLnRhZyA9PT0gdGFnIHx8IG5leHRfdm5vZGUudGFnID09PSB0YWcudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV1c2VfbmV4dF92bm9kZSA9IG5leHRfdm5vZGUuY29tcG9uZW50ICYmIG5leHRfdm5vZGUuY29tcG9uZW50LmNvbnN0cnVjdG9yW1wibmFtZVwiXSA9PT0gdGFnW1wibmFtZVwiXTtcblxuICAgIGxldCByZXBsYWNpbmdfY2hpbGQ6IFZOb2RlO1xuICAgIGxldCBwYXJlbnRfbm9kZTogTm9kZTtcblxuICAgIGNvbnN0IGtpZHMgPSBvcGVuX3Zub2RlID8gb3Blbl92bm9kZS5raWRzIDogbnVsbDtcblxuICAgIGlmICghcmV1c2VfbmV4dF92bm9kZSkge1xuICAgICAgICByZXBsYWNpbmdfY2hpbGQgPSBuZXh0X3Zub2RlO1xuXG4gICAgICAgIG5leHRfdm5vZGUgPSBrZXkgJiYgb3Blbl92bm9kZSA/IGtpZHMuZmlsdGVyKGMgPT4gYy5rZXkgPT09IGtleSlbMF0gOiBudWxsO1xuXG4gICAgICAgIGlmICghbmV4dF92bm9kZSlcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSB0YWcuYmluZC5hcHBseSh0YWcsIFtudWxsXS5jb25jYXQoW10pKTtcbiAgICAgICAgICAgICAgICBuZXh0X3Zub2RlID0geyBwYXJlbnQ6IG9wZW5fdm5vZGUsIG5vZGU6IG51bGwsIHRhZzogdGFnW1wibmFtZVwiXSwga2V5LCBhdHRyczoge30sIGNvbXBvbmVudDogbmV3IGZuKCksIGtpZHM6IFtdIH07XG4gICAgICAgICAgICAgICAgaWYgKG5leHRfdm5vZGUuY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudClcbiAgICAgICAgICAgICAgICAgICAgbmV4dF92bm9kZS5jb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkb2MgPSBvcGVuX3Zub2RlICYmIG9wZW5fdm5vZGUubm9kZSA/IG9wZW5fdm5vZGUubm9kZS5vd25lckRvY3VtZW50IDogZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgbmV4dF92bm9kZSA9IHsgcGFyZW50OiBvcGVuX3Zub2RlLCBub2RlOiB0YWcgPT09IFwiI3RleHRcIiA/IGRvYy5jcmVhdGVUZXh0Tm9kZSgnJykgOiBkb2MuY3JlYXRlRWxlbWVudCh0YWcgYXMgc3RyaW5nKSwgdGFnOiAodGFnIGFzIHN0cmluZykudG9Mb3dlckNhc2UoKSwga2V5LCBhdHRyczoge30sIGtpZHM6IFtdIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZW5fdm5vZGUpIHtcbiAgICAgICAgICAgIGtpZHMuc3BsaWNlKHJlcGxhY2luZ19jaGlsZCA/IGtpZHMuaW5kZXhPZihyZXBsYWNpbmdfY2hpbGQpIDoga2lkcy5sZW5ndGgsIDAsIG5leHRfdm5vZGUpO1xuICAgICAgICAgICAgcGFyZW50X25vZGUgPSBvcGVuX3Zub2RlLm5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuX3Zub2RlID0gbmV4dF92bm9kZTtcbiAgICBuZXh0X3Zub2RlID0gb3Blbl92bm9kZS5raWRzWzBdO1xuXG4gICAgdmFyIG5leHRfcHJvcHMgPSBnZXRQcm9wcy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50KVxuICAgICAgICByZW5kZXJDb21wb25lbnQoIXJldXNlX25leHRfdm5vZGUsIG5leHRfcHJvcHMpO1xuXG4gICAgaWYgKCFyZXVzZV9uZXh0X3Zub2RlKSB7XG4gICAgICAgIGlmIChvcGVuX3Zub2RlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgaWYgKCFwcmV2aW91c192bm9kZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb21wb25lbnQgZGlkbid0IGNhbGwgYW55IGVsZW1lbnRzXCIpO1xuICAgICAgICAgICAgb3Blbl92bm9kZS5ub2RlID0gcHJldmlvdXNfdm5vZGUubm9kZTtcbiAgICAgICAgICAgIG9wZW5fdm5vZGUubm9kZVtcIl9fbWlycm9yX3ZpZXdfbm9kZVwiXSA9IG9wZW5fdm5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50X25vZGUgJiYgb3Blbl92bm9kZS5ub2RlKSB7XG4gICAgICAgICAgICBpZiAoa2V5KVxuICAgICAgICAgICAgICAgIGtpZHMuZmlsdGVyKGMgPT4gYy5rZXkgPT09IGtleSkuZm9yRWFjaChjID0+IGMubm9kZSA9IG9wZW5fdm5vZGUubm9kZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBub2RlIGhhcyBhIGtleSwgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0byBwcmV2ZW50IGEgbGFyZ2UgbnVtYmVyIG9mIHJlLW9yZGVycyBpbiB0aGUgY2FzZSB0aGF0IGl0IG1vdmVkIGZhciBvciB3YXMgY29tcGxldGVseSByZW1vdmVkLiBTaW5jZSB3ZSBob2xkIG9uIHRvIGEgcmVmZXJlbmNlIHRocm91Z2ggdGhlIGtleU1hcCwgd2UgY2FuIGFsd2F5cyBhZGQgaXQgYmFjay5cbiAgICAgICAgICAgIGlmIChyZXBsYWNpbmdfY2hpbGQgJiYgcmVwbGFjaW5nX2NoaWxkLm5vZGUgJiYgcmVwbGFjaW5nX2NoaWxkLmtleSlcbiAgICAgICAgICAgICAgICBwYXJlbnRfbm9kZS5yZXBsYWNlQ2hpbGQob3Blbl92bm9kZS5ub2RlLCByZXBsYWNpbmdfY2hpbGQubm9kZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcGFyZW50X25vZGUuaW5zZXJ0QmVmb3JlKG9wZW5fdm5vZGUubm9kZSwgcmVwbGFjaW5nX2NoaWxkID8gcmVwbGFjaW5nX2NoaWxkLm5vZGUgOiBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVuX3Zub2RlLmNvbXBvbmVudCAmJiBvcGVuX3Zub2RlLm5vZGUgJiYgb3Blbl92bm9kZS5jb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQpXG4gICAgICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9wcm9qZWN0cy9yZWFjdGl2L3JlYWN0aXYudHNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9