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
	    "use strict";
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
	    }(jsx.Component));
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
	    }(jsx.Component));
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
	    }());
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
	        it("is fast", function () {
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
		    "use strict";
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
		    }());
		    exports.Component = Component;
		    var open_vnode;
		    var next_vnode;
		    var previous_vnode;
		    function patch(element, fn) {
		        var node = element["__reactiv_view_node"];
		        if (!node)
		            element["__reactiv_view_node"] = node = {
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
		        var node = _elementOpen("#text", null, null);
		        if (node.text !== value) {
		            var formatted = node.text = value;
		            for (var i = 1; i < arguments.length; i++) {
		                var formatter = arguments[i];
		                if (formatter)
		                    formatted = formatter(formatted);
		            }
		            node.node.data = formatted;
		        }
		        elementClose();
		    }
		    exports.text = text;
		    function elementOpen(tag, key, statics, n1, v1, n2, v2, n3, v3) {
		        _elementOpen.apply(null, arguments);
		    }
		    exports.elementOpen = elementOpen;
		    function sync_arg(node, name, value) {
		        if (value === null || value === undefined)
		            return false;
		        var existing_value = open_vnode.attrs[name];
		        switch (name) {
		            case "style":
		                if (open_vnode.component)
		                    throw new Error("components don't have dom nodes, you cannot set styles directly on them");
		                if (typeof value === "string") {
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
		                        style[prop] = "";
		                    }
		                break;
		            default:
		                if (existing_value !== value)
		                    open_vnode.attrs[name] = value;
		                if (name === "className")
		                    name = "class";
		                if (["object", "function"].indexOf(typeof value) !== -1) {
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
		        return true;
		    }
		    ;
		    function _elementOpen(tag, key, statics, n1, v1, n2, v2, n3, v3) {
		        sync.apply(null, arguments);
		        //    if (open_vnode.component)
		        //        return open_vnode;
		        var visited = {};
		        var node = open_vnode.node;
		        if (statics)
		            for (var i = 0; i < statics.length; i += 2)
		                if (sync_arg(node, statics[i], statics[i + 1]))
		                    visited[statics[i]] = true;
		        for (var i = 3; i < arguments.length; i += 2)
		            if (sync_arg(node, arguments[i], arguments[i + 1]))
		                visited[arguments[i]] = true;
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
		                    next_vnode = { parent: open_vnode, node: tag === "#text" ? doc.createTextNode("") : doc.createElement(tag), tag: tag.toLowerCase(), key: key, attrs: {}, kids: [] };
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
		                open_vnode.node["__reactiv_view_node"] = open_vnode;
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
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI0ZWViNjkwNzBkOWExOWNkZjUiLCJ3ZWJwYWNrOi8vLy4vU3BlYy50cyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0aXYvbGliL3JlYWN0aXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tDOUJBO1NBQTZCLDJCQUFpQztTQUE5RDthQUE2Qiw4QkFBaUM7U0FNOUQsQ0FBQztTQUxHLHdCQUFNLEdBQU47YUFDSSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUN0SCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0IsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCLENBQUM7U0FDTCxjQUFDO0tBQUQsQ0FBQyxDQU40QixHQUFHLENBQUMsU0FBUyxHQU16QztLQU5ZLGVBQU8sVUFNbkI7S0FXRDtTQUErQiw2QkFBNkM7U0FDeEUsbUJBQVksS0FBcUI7YUFDN0Isa0JBQU0sS0FBSyxDQUFDLENBQUM7YUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEMsQ0FBQztTQUNELDBCQUFNLEdBQU47YUFDSSxHQUFHLENBQUMs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBd0Usc0JBQXNCLEVBQUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHNFQUFzRTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHlJQUF5STtBQUM1SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLHNCQUFzQixFQUFFLHdCQUF3QixpQ0FBaUMsRUFBRTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7OztBQUdGO0FBQ0E7QUFDQSxFQUFDO0FBQ0QsRSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwYjRlZWI2OTA3MGQ5YTE5Y2RmNVxuICoqLyIsImltcG9ydCAqIGFzIGpzeCBmcm9tICcuL25vZGVfbW9kdWxlcy9yZWFjdGl2L2xpYi9yZWFjdGl2JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbWVzc2FnZVByb3BzIHtcclxuICAgIGltcG9ydGFuY2U6IG51bWJlcjtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBtZXNzYWdlIGV4dGVuZHMganN4LkNvbXBvbmVudDxtZXNzYWdlUHJvcHMsIHZvaWQ+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBqc3guZWxlbWVudE9wZW4oXCJkaXZcIiwgbnVsbCwgbnVsbCwgXCJzdHlsZVwiLCB7IGRpc3BsYXk6IFwiaW5saW5lXCIsIGNvbG9yOiB0aGlzLnByb3BzLmltcG9ydGFuY2UgPiA1ID8gXCJyZWRcIiA6IFwiZ3JheVwiIH0pO1xyXG4gICAgICAgIGpzeC50ZXh0KHRoaXMucHJvcHMubWVzc2FnZSk7XHJcbiAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGltcG9ydGFudFByb3BzIHtcclxuICAgIGltcG9ydGFuY2U6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpbXBvcnRhbnRTdGF0ZSB7XHJcbiAgICB0aXJlZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGltcG9ydGFudCBleHRlbmRzIGpzeC5Db21wb25lbnQ8aW1wb3J0YW50UHJvcHMsIGltcG9ydGFudFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogaW1wb3J0YW50UHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpcmVkOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBqc3guZWxlbWVudFZvaWQobWVzc2FnZSBhcyBhbnksIG51bGwsIG51bGwsIFwiaW1wb3J0YW5jZVwiLCB0aGlzLnByb3BzLmltcG9ydGFuY2UsIFwibWVzc2FnZVwiLCB0aGlzLnN0YXRlLnRpcmVkID8gXCJ0aXJlZFwiIDogXCJva1wiKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGxjX21ldGhvZHMgPSBbXTtcclxubGV0IGxjX2NvbnN0cnVjdG9yID0gMDsgLy8gY2hlY2tcclxubGV0IGxjX2NvbXBvbmVudFdpbGxNb3VudCA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnREaWRNb3VudCA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gMDsgLy8gdG9kbyEgbmVlZHMgdG8gY2hlY2sgYXJncyBiZWZvcmVcclxubGV0IGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnRXaWxsVXBkYXRlID0gMDsgLy8gY2hlY2tcclxubGV0IGxjX2NvbXBvbmVudERpZFVwZGF0ZSA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19jb21wb25lbnRXaWxsVW5tb3VudCA9IDA7IC8vIGNoZWNrXHJcbmxldCBsY19yZW5kZXIgPSAwOy8vIGNoZWNrXHJcblxyXG52YXIgZnJlZXplX21lc3NhZ2UgPSBmYWxzZTtcclxuZXhwb3J0IGNsYXNzIGxpZmVjeWNsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICBsY19jb25zdHJ1Y3RvcisrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb21wb25lbnRXaWxsTW91bnRcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50V2lsbE1vdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGNfbWV0aG9kcy5wdXNoKFwiY29tcG9uZW50RGlkTW91bnRcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50RGlkTW91bnQrKztcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGxjX21ldGhvZHMucHVzaChcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIGxjX21ldGhvZHMucHVzaChcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcclxuICAgICAgICBsY19zaG91bGRDb21wb25lbnRVcGRhdGUrKztcclxuICAgICAgICByZXR1cm4gIWZyZWV6ZV9tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb21wb25lbnRXaWxsVXBkYXRlXCIpO1xyXG4gICAgICAgIGxjX2NvbXBvbmVudFdpbGxVcGRhdGUrKztcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBsY19tZXRob2RzLnB1c2goXCJjb21wb25lbnREaWRVcGRhdGVcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50RGlkVXBkYXRlKys7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgbGNfbWV0aG9kcy5wdXNoKFwiY29tcG9uZW50V2lsbFVubW91bnRcIik7XHJcbiAgICAgICAgbGNfY29tcG9uZW50V2lsbFVubW91bnQrKztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGNfbWV0aG9kcy5wdXNoKFwicmVuZGVyXCIpO1xyXG4gICAgICAgIGxjX3JlbmRlcisrO1xyXG4gICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBudWxsLCBcImZyb3plblwiLCBmcmVlemVfbWVzc2FnZSA/IFwieWVzXCIgOiBcIm5vXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaW11bGF0ZUNsaWNrKGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIHZhciBzaW11bGF0ZURpdkNsaWNrID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XHJcbiAgICBzaW11bGF0ZURpdkNsaWNrLmluaXRNb3VzZUV2ZW50KCdjbGljaycsIHRydWUsIHRydWUsIGRvY3VtZW50LmRlZmF1bHRWaWV3LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgbnVsbCwgbnVsbCk7XHJcbiAgICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KHNpbXVsYXRlRGl2Q2xpY2spO1xyXG59XHJcblxyXG5kZXNjcmliZShcImEgcGF0Y2hcIiwgKCkgPT4ge1xyXG4gICAgdmFyIG5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgdmFyIHN0YXJ0aW5nX2h0bWw6IHN0cmluZztcclxuXHJcbiAgICB2YXIgb3JpZ2luYWxfcHJvcGVydGllc19vZiA9IFtdO1xyXG5cclxuICAgIHZhciBnZXRfcHJvcGVydGllcyA9IChjb250YWluZXIpID0+IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbnRhaW5lcik7XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoZG9uZSkgPT4ge1xyXG4gICAgICAgIHN0YXJ0aW5nX2h0bWwgPSBkb2N1bWVudC5ib2R5LmlubmVySFRNTDtcclxuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY29uc2VydmVfcHJvcGVydGllc19vZiA9IFt3aW5kb3csIGRvY3VtZW50LCBkb2N1bWVudC5ib2R5XTtcclxuICAgICAgICAgICAgb3JpZ2luYWxfcHJvcGVydGllc19vZiA9IGNvbnNlcnZlX3Byb3BlcnRpZXNfb2YubWFwKGNvbnRhaW5lciA9PiBnZXRfcHJvcGVydGllcyhjb250YWluZXIpKVxyXG5cclxuICAgICAgICAgICAgbGNfbWV0aG9kcyA9IFtdO1xyXG4gICAgICAgICAgICBsY19jb25zdHJ1Y3RvciA9IDA7XHJcbiAgICAgICAgICAgIGxjX2NvbXBvbmVudFdpbGxNb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxjX2NvbXBvbmVudERpZE1vdW50ID0gMDtcclxuICAgICAgICAgICAgbGNfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IDA7XHJcbiAgICAgICAgICAgIGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGxjX2NvbXBvbmVudFdpbGxVcGRhdGUgPSAwO1xyXG4gICAgICAgICAgICBsY19jb21wb25lbnREaWRVcGRhdGUgPSAwO1xyXG4gICAgICAgICAgICBsY19jb21wb25lbnRXaWxsVW5tb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxjX3JlbmRlciA9IDA7XHJcbiAgICAgICAgICAgIGZyZWV6ZV9tZXNzYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFmdGVyRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgICAgICBleHBlY3QoZG9jdW1lbnQuYm9keS5pbm5lckhUTUwudHJpbSgpKS50b0JlKHN0YXJ0aW5nX2h0bWwudHJpbSgpKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbnNlcnZlX3Byb3BlcnRpZXNfb2YgPSBbd2luZG93LCBkb2N1bWVudCwgZG9jdW1lbnQuYm9keV07XHJcbiAgICAgICAgdmFyIG5ld19wcm9wZXJ0aWVzX29mID0gY29uc2VydmVfcHJvcGVydGllc19vZi5tYXAoY29udGFpbmVyID0+IGdldF9wcm9wZXJ0aWVzKGNvbnRhaW5lcikpXHJcblxyXG4gICAgICAgIGV4cGVjdChuZXdfcHJvcGVydGllc19vZikudG9FcXVhbChvcmlnaW5hbF9wcm9wZXJ0aWVzX29mKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiZG9lcyBub3RoaW5nIGlmIG5vdGhpbmcgaXMgcmVuZGVyZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBudWxsKTtcclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoXCI8ZGl2PjwvZGl2PlwiKTtcclxuXHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIFwiM1wiKTtcclxuICAgICAgICBub2RlLmlubmVySFRNTCA9IFwic29tZXN0dWZmXCI7XHJcblxyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBudWxsKTtcclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXYgZGF0YS1pZD1cIjNcIj5zb21lc3R1ZmY8L2Rpdj4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FuIHVzZSBlbGVtZW50Vm9pZCB0byBpbnNlcnQgYSBkaXZcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoXCI8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+XCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGl0KFwid2lsbCByZW1vdmUgc29tZXRoaW5nXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudE9wZW4oXCJzcGFuXCIsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKFwiPGRpdj48c3Bhbj48L3NwYW4+PC9kaXY+XCIpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZShcIjxkaXY+PC9kaXY+XCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGl0KFwiY2FuIHJlcGxhY2UgYW5kIGFkZCB0aGluZ3NcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50T3BlbihcImRpdlwiLCBudWxsLCBudWxsKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudE9wZW4oXCJkaXZcIiwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZShcIjxkaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiZG9lc24ndCByZS1hZGQgdGhlIHNhbWUgZGl2XCIsICgpID0+IHtcclxuICAgICAgICB2YXIgZm4gPSAoKSA9PlxyXG4gICAgICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKFwiPGRpdj48ZGl2PjwvZGl2PjwvZGl2PlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImhhbmRsZXMgYXR0cmlidXRlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcInN0eWxlXCIsIHsgY29sb3I6ICdyZWQnIH0pO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGlkPVwidGhlX2lkXCIgc3R5bGU9XCJjb2xvcjogcmVkO1wiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJtdXRhdGVzIGF0dHJpYnV0ZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHsgY29sb3I6ICdyZWQnIH0gYXMgYW55O1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50T3BlbihcImRpdlwiLCBudWxsLCBudWxsLCAnaWQnLCAndGhlX2lkJywgXCJzdHlsZVwiLCBzdHlsZSk7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIHN0eWxlLmNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcInN0eWxlXCIsIHN0eWxlKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgIGRlbGV0ZSBzdHlsZS5jb2xvcjtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcInN0eWxlXCIsIHN0eWxlKTtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRDbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdiBpZD1cInRoZV9pZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmVkO1wiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJhZGRzIGF0dHJpYnV0ZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50T3BlbihcImRpdlwiLCBudWxsLCBudWxsLCAnaWQnLCAndGhlX2lkJyk7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRPcGVuKFwiZGl2XCIsIG51bGwsIG51bGwsICdpZCcsICd0aGVfaWQnLCBcIm5hbWVcIiwgXCJmcmVkXCIpO1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudENsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGlkPVwidGhlX2lkXCIgbmFtZT1cImZyZWRcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwicmVtb3ZlcyBhdHRyaWJ1dGVzXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudE9wZW4oXCJkaXZcIiwgbnVsbCwgbnVsbCwgJ2lkJywgJ3RoZV9pZCcsIFwibmFtZVwiLCBcImZyZWRcIik7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Q2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIiBuYW1lPVwiZnJlZFwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgbnVsbCwgJ2lkJywgJ3RoZV9pZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdiBpZD1cInRoZV9pZFwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBbJ2lkJywgJ3RoZV9pZCcsICdmcm9kbycsICcxMjEnXSwgJ2RhdGEtZnJhbWUnLCAnYW50ZXJpb3InKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJ0aGVfaWRcIiBmcm9kbz1cIjEyMVwiIGRhdGEtZnJhbWU9XCJhbnRlcmlvclwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJkZWFscyB3aXRoIGEgY29tcG9uZW50XCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGZyb3plbj1cIm5vXCI+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImFkZHMgZXZlbnQgaGFuZGxlcnNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBwcmV2ZW50X2NsaWNrX2RlZmF1bHQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICB2YXIgdGVzdF9jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAocHJldmVudF9jbGlja19kZWZhdWx0KVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBbXCJvbkNsaWNrXCIsIHRlc3RfY2xpY2tdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMSk7XHJcblxyXG4gICAgICAgIHByZXZlbnRfY2xpY2tfZGVmYXVsdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICFzaW11bGF0ZUNsaWNrKG5vZGUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIGV4cGVjdChjYW5jZWxsZWQpLnRvQmUodHJ1ZSk7XHJcbiAgICAgICAgZXhwZWN0KGNvdW50KS50b0JlKDIpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgW1wib25DbGlja1wiLCB0ZXN0X2NsaWNrXSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByZXZlbnRfY2xpY2tfZGVmYXVsdCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInJlbW92ZXMgZXZlbnQgaGFuZGxlcnNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBwcmV2ZW50X2NsaWNrX2RlZmF1bHQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICB2YXIgdGVzdF9jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAocHJldmVudF9jbGlja19kZWZhdWx0KVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGpzeC5lbGVtZW50Vm9pZChcImRpdlwiLCBudWxsLCBbXCJvbkNsaWNrXCIsIHRlc3RfY2xpY2tdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMSk7XHJcblxyXG4gICAgICAgIHByZXZlbnRfY2xpY2tfZGVmYXVsdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICFzaW11bGF0ZUNsaWNrKG5vZGUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIGV4cGVjdChjYW5jZWxsZWQpLnRvQmUodHJ1ZSk7XHJcbiAgICAgICAgZXhwZWN0KGNvdW50KS50b0JlKDIpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSAhc2ltdWxhdGVDbGljayhub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBleHBlY3QoY2FuY2VsbGVkKS50b0JlKGZhbHNlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNoYW5nZXMgZXZlbnQgaGFuZGxlcnNcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIHZhciB0ZXN0X2NsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGVzdF9jbGljazIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY291bnQgKz0gMTAwO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIsIG51bGwsIFtcIm9uQ2xpY2tcIiwgdGVzdF9jbGlja10pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICB2YXIgY2FuY2VsbGVkID0gIXNpbXVsYXRlQ2xpY2sobm9kZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgZXhwZWN0KGNhbmNlbGxlZCkudG9CZShmYWxzZSk7XHJcbiAgICAgICAgZXhwZWN0KGNvdW50KS50b0JlKDEpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgbnVsbCwgW1wib25DbGlja1wiLCB0ZXN0X2NsaWNrMl0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY2FuY2VsbGVkID0gIXNpbXVsYXRlQ2xpY2sobm9kZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgZXhwZWN0KGNhbmNlbGxlZCkudG9CZSh0cnVlKTtcclxuICAgICAgICBleHBlY3QoY291bnQpLnRvQmUoMTAxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiYWxsb3dzIGVsZW1lbnRzIHRvIG11dGF0ZSB0aGVtc2VsdmVzXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIpKTtcclxuICAgICAgICAobm9kZS5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXCJkeW5hbWljXCI7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChcImRpdlwiKSk7XHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXY+ZHluYW1pYzwvZGl2PjwvZGl2PicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJjb25zdHJ1Y3RzIGNvbXBvbmVudHMgYXBwcm9wcmlhdGVseVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbnN0cnVjdG9yKS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb25zdHJ1Y3RvcikudG9CZSgxKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbnN0cnVjdG9yKS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb25zdHJ1Y3RvcikudG9CZSgyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50V2lsbE1vdW50IGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsTW91bnQpLnRvQmUoMSk7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxNb3VudCkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50RGlkTW91bnQgYXBwcm9wcmlhdGVseVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudERpZE1vdW50KS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnREaWRNb3VudCkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50V2lsbFVubW91bnQgYXBwcm9wcmlhdGVseVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxVbm1vdW50KS50b0JlKDApO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsVW5tb3VudCkudG9CZSgwKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxVbm1vdW50KS50b0JlKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJjYWxscyBjb21wb25lbnRXaWxsVXBkYXRlIGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsVXBkYXRlKS50b0JlKDApO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnRXaWxsVXBkYXRlKS50b0JlKDEpO1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBudWxsKTtcclxuICAgICAgICBleHBlY3QobGNfY29tcG9uZW50V2lsbFVwZGF0ZSkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgY29tcG9uZW50RGlkVXBkYXRlIGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnREaWRVcGRhdGUpLnRvQmUoMCk7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudERpZFVwZGF0ZSkudG9CZSgxKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudERpZFVwZGF0ZSkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgc2hvdWxkQ29tcG9uZW50VXBkYXRlIGFwcHJvcHJpYXRlbHlcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19zaG91bGRDb21wb25lbnRVcGRhdGUpLnRvQmUoMCk7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSkudG9CZSgxKTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX3Nob3VsZENvbXBvbmVudFVwZGF0ZSkudG9CZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgbW91bnRpbmcgbGlmZWN5Y2xlIG1ldGhvZHMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGV4cGVjdChsY19tZXRob2RzLmpvaW4oXCIgPT4gXCIpKS50b0JlKFwiY29uc3RydWN0b3IgPT4gY29tcG9uZW50V2lsbE1vdW50ID0+IHJlbmRlciA9PiBjb21wb25lbnREaWRNb3VudFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2FsbHMgcmUtcmVuZGVyIGxpZmVjeWNsZSBtZXRob2RzIGluIHRoZSBjb3JyZWN0IG9yZGVyXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ganN4LmVsZW1lbnRWb2lkKGxpZmVjeWNsZSBhcyBhbnkpKTtcclxuICAgICAgICBsY19tZXRob2RzID0gW107XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX21ldGhvZHMuam9pbihcIiA9PiBcIikpLnRvQmUoXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0+IHNob3VsZENvbXBvbmVudFVwZGF0ZSA9PiBjb21wb25lbnRXaWxsVXBkYXRlID0+IHJlbmRlciA9PiBjb21wb25lbnREaWRVcGRhdGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInJlc3BlY3RzIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IGpzeC5lbGVtZW50Vm9pZChsaWZlY3ljbGUgYXMgYW55KSk7XHJcbiAgICAgICAgbGNfbWV0aG9kcyA9IFtdO1xyXG4gICAgICAgIGZyZWV6ZV9tZXNzYWdlID0gdHJ1ZTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ganN4LmVsZW1lbnRWb2lkKGxpZmVjeWNsZSBhcyBhbnkpKTtcclxuICAgICAgICBleHBlY3QobGNfbWV0aG9kcy5qb2luKFwiID0+IFwiKSkudG9CZShcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT4gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xyXG4gICAgICAgIGV4cGVjdChub2RlLm91dGVySFRNTCkudG9CZSgnPGRpdj48ZGl2IGZyb3plbj1cIm5vXCI+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNhbGxzIHVubW91bnRpbmcgbGlmZWN5Y2xlIG1ldGhvZHMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgIGpzeC5wYXRjaChub2RlLCAoKSA9PiBqc3guZWxlbWVudFZvaWQobGlmZWN5Y2xlIGFzIGFueSkpO1xyXG4gICAgICAgIGxjX21ldGhvZHMgPSBbXTtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgZXhwZWN0KGxjX21ldGhvZHMuam9pbihcIiA9PiBcIikpLnRvQmUoXCJjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwidW5tb3VudHMgY29tcG9uZW50c1wiLCAoKSA9PiB7XHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKGxpZmVjeWNsZSBhcyBhbnksIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdiBmcm96ZW49XCJub1wiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBleHBlY3QobGNfY29tcG9uZW50V2lsbE1vdW50KS50b0JlKDEpO1xyXG4gICAgICAgIGV4cGVjdChsY19jb21wb25lbnREaWRNb3VudCkudG9CZSgxKTtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKFwiZGl2XCIsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxNb3VudCkudG9CZSgxKTtcclxuICAgICAgICBleHBlY3QobGNfY29tcG9uZW50RGlkTW91bnQpLnRvQmUoMSk7XHJcbiAgICAgICAgZXhwZWN0KGxjX2NvbXBvbmVudFdpbGxVbm1vdW50KS50b0JlKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJyZWNvZ25pc2VzIG5lc3RlZCBjb21wb25lbnRzXCIsICgpID0+IHtcclxuICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAganN4LnBhdGNoKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKGltcG9ydGFudCBhcyBhbnksIG51bGwsIG51bGwsIFwiaW1wb3J0YW5jZVwiLCA3LCBcIm5hbWVcIiwgXCJib25kLCBqaW1teS1ib2IgbWVsb24tZmllbGQgYm9uZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7IGNvbG9yOiByZWQ7XCI+b2s8L2Rpdj48L2Rpdj4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiaXMgZmFzdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSAxMDAwMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAganN4LmVsZW1lbnRWb2lkKGltcG9ydGFudCBhcyBhbnksIG51bGwsIG51bGwsIFwiaW1wb3J0YW5jZVwiLCBpICUgMTAsIFwibmFtZVwiLCBcImJvbmQsIGppbW15LWJvYiBcIiArIChpICUgMiA/IFwibWVsb24tZmllbGRcIiA6IFwicHJpbmNlc3NcIikgKyBcIiBib25kXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmVuY2htYXJrOiBcIiArIGl0ZXJhdGlvbnMgKyBcIiB0b29rIFwiICsgZHVyYXRpb24gKyBcIiBtcyA9IFwiICsgKE1hdGguY2VpbChkdXJhdGlvbiAvIGl0ZXJhdGlvbnMgKiAxMDAwMCkgLyAxMCkgKyBcIiB1cyBwZXJcIik7XHJcbiAgICAgICAgZXhwZWN0KGR1cmF0aW9uKS50b0JlTGVzc1RoYW4oMjUwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiZGVhbHMgd2l0aCBrZXlzXCIsICgpID0+IHtcclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgXCIxXCIsIG51bGwsIFwiaWRcIiwgXCJpYW1tZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KG5vZGUub3V0ZXJIVE1MKS50b0JlKCc8ZGl2PjxkaXYgaWQ9XCJpYW1tZVwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBqc3gucGF0Y2gobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBqc3guZWxlbWVudFZvaWQoXCJkaXZcIiwgXCIxXCIsIG51bGwsIFwiaWRcIiwgXCJpYW1zdGlsbG1lXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBleHBlY3Qobm9kZS5vdXRlckhUTUwpLnRvQmUoJzxkaXY+PGRpdiBpZD1cImlhbXN0aWxsbWVcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1NwZWMudHNcbiAqKi8iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzaGFyZWQtY29tcG9uZW50c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaGFyZWQtY29tcG9uZW50c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187IShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW19fd2VicGFja19yZXF1aXJlX18sIGV4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcblx0ICAgIFwidXNlIHN0cmljdFwiO1xyXG5cdCAgICB2YXIgQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgIGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcykge1xyXG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG5cdCAgICAgICAgO1xyXG5cdCAgICAgICAgQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuXHQgICAgICAgIDtcclxuXHQgICAgICAgIENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7IH07XHJcblx0ICAgICAgICA7XHJcblx0ICAgICAgICBDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07XHJcblx0ICAgICAgICBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dF9wcm9wcykgeyB9O1xyXG5cdCAgICAgICAgO1xyXG5cdCAgICAgICAgQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7IH07XHJcblx0ICAgICAgICA7XHJcblx0ICAgICAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cdCAgICAgICAgfTtcclxuXHQgICAgICAgIHJldHVybiBDb21wb25lbnQ7XHJcblx0ICAgIH0oKSk7XHJcblx0ICAgIGV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG5cdCAgICB2YXIgb3Blbl92bm9kZTtcclxuXHQgICAgdmFyIG5leHRfdm5vZGU7XHJcblx0ICAgIHZhciBwcmV2aW91c192bm9kZTtcclxuXHQgICAgZnVuY3Rpb24gcGF0Y2goZWxlbWVudCwgZm4pIHtcclxuXHQgICAgICAgIHZhciBub2RlID0gZWxlbWVudFtcIl9fcmVhY3Rpdl92aWV3X25vZGVcIl07XHJcblx0ICAgICAgICBpZiAoIW5vZGUpXHJcblx0ICAgICAgICAgICAgZWxlbWVudFtcIl9fcmVhY3Rpdl92aWV3X25vZGVcIl0gPSBub2RlID0ge1xyXG5cdCAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXHJcblx0ICAgICAgICAgICAgICAgIHRhZzogZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG5cdCAgICAgICAgICAgICAgICBub2RlOiBlbGVtZW50LFxyXG5cdCAgICAgICAgICAgICAgICBrZXk6IG51bGwsXHJcblx0ICAgICAgICAgICAgICAgIGF0dHJzOiB7fSxcclxuXHQgICAgICAgICAgICAgICAga2lkczogW11cclxuXHQgICAgICAgICAgICB9O1xyXG5cdCAgICAgICAgcHJldmlvdXNfdm5vZGUgPSBudWxsO1xyXG5cdCAgICAgICAgb3Blbl92bm9kZSA9IG51bGw7XHJcblx0ICAgICAgICBuZXh0X3Zub2RlID0gbm9kZTtcclxuXHQgICAgICAgIGVsZW1lbnRPcGVuKGVsZW1lbnQubm9kZU5hbWUsIG51bGwsIG51bGwpO1xyXG5cdCAgICAgICAgZm4oKTtcclxuXHQgICAgICAgIGVsZW1lbnRDbG9zZSgpO1xyXG5cdCAgICB9XHJcblx0ICAgIGV4cG9ydHMucGF0Y2ggPSBwYXRjaDtcclxuXHQgICAgZnVuY3Rpb24gZWxlbWVudFZvaWQodGFnLCBrZXksIHN0YXRpY3MsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcclxuXHQgICAgICAgIGVsZW1lbnRPcGVuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0ICAgICAgICBlbGVtZW50Q2xvc2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHQgICAgfVxyXG5cdCAgICBleHBvcnRzLmVsZW1lbnRWb2lkID0gZWxlbWVudFZvaWQ7XHJcblx0ICAgIGZ1bmN0aW9uIHRleHQodmFsdWUsIGZvcm1hdHRlcnMpIHtcclxuXHQgICAgICAgIHZhciBub2RlID0gX2VsZW1lbnRPcGVuKFwiI3RleHRcIiwgbnVsbCwgbnVsbCk7XHJcblx0ICAgICAgICBpZiAobm9kZS50ZXh0ICE9PSB2YWx1ZSkge1xyXG5cdCAgICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSBub2RlLnRleHQgPSB2YWx1ZTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gYXJndW1lbnRzW2ldO1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoZm9ybWF0dGVyKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gZm9ybWF0dGVyKGZvcm1hdHRlZCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIG5vZGUubm9kZS5kYXRhID0gZm9ybWF0dGVkO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgZWxlbWVudENsb3NlKCk7XHJcblx0ICAgIH1cclxuXHQgICAgZXhwb3J0cy50ZXh0ID0gdGV4dDtcclxuXHQgICAgZnVuY3Rpb24gZWxlbWVudE9wZW4odGFnLCBrZXksIHN0YXRpY3MsIG4xLCB2MSwgbjIsIHYyLCBuMywgdjMpIHtcclxuXHQgICAgICAgIF9lbGVtZW50T3Blbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdCAgICB9XHJcblx0ICAgIGV4cG9ydHMuZWxlbWVudE9wZW4gPSBlbGVtZW50T3BlbjtcclxuXHQgICAgZnVuY3Rpb24gc3luY19hcmcobm9kZSwgbmFtZSwgdmFsdWUpIHtcclxuXHQgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgICAgIHZhciBleGlzdGluZ192YWx1ZSA9IG9wZW5fdm5vZGUuYXR0cnNbbmFtZV07XHJcblx0ICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuXHQgICAgICAgICAgICBjYXNlIFwic3R5bGVcIjpcclxuXHQgICAgICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50KVxyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29tcG9uZW50cyBkb24ndCBoYXZlIGRvbSBub2RlcywgeW91IGNhbm5vdCBzZXQgc3R5bGVzIGRpcmVjdGx5IG9uIHRoZW1cIik7XHJcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHZpc2l0ZWRfc3R5bGUgPSB7fTtcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB2YWx1ZSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BfdmFsdWUgPSB2YWx1ZVtwcm9wXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRfc3R5bGVbcHJvcF0gPSB0cnVlO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZ192YWx1ZSB8fCBleGlzdGluZ192YWx1ZVtwcm9wXSAhPT0gcHJvcF92YWx1ZSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlW3Byb3BdID0gcHJvcF92YWx1ZTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAob3Blbl92bm9kZS5hdHRyc1tuYW1lXSA9IGV4aXN0aW5nX3ZhbHVlID0gZXhpc3RpbmdfdmFsdWUgfHwge30pW3Byb3BdID0gcHJvcF92YWx1ZTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIGV4aXN0aW5nX3ZhbHVlKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCF2aXNpdGVkX3N0eWxlW3Byb3BdKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGV4aXN0aW5nX3ZhbHVlW3Byb3BdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlW3Byb3BdID0gXCJcIjtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgZGVmYXVsdDpcclxuXHQgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nX3ZhbHVlICE9PSB2YWx1ZSlcclxuXHQgICAgICAgICAgICAgICAgICAgIG9wZW5fdm5vZGUuYXR0cnNbbmFtZV0gPSB2YWx1ZTtcclxuXHQgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpXHJcblx0ICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJjbGFzc1wiO1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoW1wib2JqZWN0XCIsIFwiZnVuY3Rpb25cIl0uaW5kZXhPZih0eXBlb2YgdmFsdWUpICE9PSAtMSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuc2xpY2UoMCwgMikgPT09IFwib25cIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKGZuKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudF9uYW1lID0gbmFtZS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdfdmFsdWUgIT09IGZuKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbl92bm9kZS5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgZXhpc3RpbmdfdmFsdWUpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBmbik7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSkodmFsdWUpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFvcGVuX3Zub2RlLmNvbXBvbmVudClcclxuXHQgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcclxuXHQgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHQgICAgfVxyXG5cdCAgICA7XHJcblx0ICAgIGZ1bmN0aW9uIF9lbGVtZW50T3Blbih0YWcsIGtleSwgc3RhdGljcywgbjEsIHYxLCBuMiwgdjIsIG4zLCB2Mykge1xyXG5cdCAgICAgICAgc3luYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdCAgICAgICAgLy8gICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50KVxyXG5cdCAgICAgICAgLy8gICAgICAgIHJldHVybiBvcGVuX3Zub2RlO1xyXG5cdCAgICAgICAgdmFyIHZpc2l0ZWQgPSB7fTtcclxuXHQgICAgICAgIHZhciBub2RlID0gb3Blbl92bm9kZS5ub2RlO1xyXG5cdCAgICAgICAgaWYgKHN0YXRpY3MpXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0aWNzLmxlbmd0aDsgaSArPSAyKVxyXG5cdCAgICAgICAgICAgICAgICBpZiAoc3luY19hcmcobm9kZSwgc3RhdGljc1tpXSwgc3RhdGljc1tpICsgMV0pKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtzdGF0aWNzW2ldXSA9IHRydWU7XHJcblx0ICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMilcclxuXHQgICAgICAgICAgICBpZiAoc3luY19hcmcobm9kZSwgYXJndW1lbnRzW2ldLCBhcmd1bWVudHNbaSArIDFdKSlcclxuXHQgICAgICAgICAgICAgICAgdmlzaXRlZFthcmd1bWVudHNbaV1dID0gdHJ1ZTtcclxuXHQgICAgICAgIGZvciAodmFyIG5hbWVfMSBpbiBvcGVuX3Zub2RlLmF0dHJzKVxyXG5cdCAgICAgICAgICAgIGlmICghdmlzaXRlZFtuYW1lXzFdKSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmIChuYW1lXzEuc2xpY2UoMCwgMikgPT09IFwib25cIiAmJiB0eXBlb2Ygb3Blbl92bm9kZS5hdHRyc1tuYW1lXzFdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0ICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZV8xLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIG9wZW5fdm5vZGUuYXR0cnNbbmFtZV8xXSk7XHJcblx0ICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFvcGVuX3Zub2RlLmNvbXBvbmVudClcclxuXHQgICAgICAgICAgICAgICAgICAgIG9wZW5fdm5vZGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZV8xKTtcclxuXHQgICAgICAgICAgICAgICAgZGVsZXRlIG9wZW5fdm5vZGUuYXR0cnNbbmFtZV8xXTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICByZXR1cm4gb3Blbl92bm9kZTtcclxuXHQgICAgfVxyXG5cdCAgICBmdW5jdGlvbiBlbGVtZW50Q2xvc2UoKSB7XHJcblx0ICAgICAgICBpZiAob3Blbl92bm9kZSkge1xyXG5cdCAgICAgICAgICAgIHZhciBraWRzID0gb3Blbl92bm9kZS5raWRzO1xyXG5cdCAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGtpZHNba2lkcy5sZW5ndGggLSAxXTtcclxuXHQgICAgICAgICAgICAgICAgaWYgKCFjaGlsZCB8fCBjaGlsZCA9PT0gcHJldmlvdXNfdm5vZGUpXHJcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNvbXBvbmVudCAmJiBjaGlsZC5jb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQpXHJcblx0ICAgICAgICAgICAgICAgICAgICBjaGlsZC5jb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQoKTtcclxuXHQgICAgICAgICAgICAgICAgb3Blbl92bm9kZS5ub2RlLnJlbW92ZUNoaWxkKGNoaWxkLm5vZGUpO1xyXG5cdCAgICAgICAgICAgICAgICBraWRzLnNwbGljZShraWRzLmluZGV4T2YoY2hpbGQpLCAxKTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGtpZHMuc2xpY2UoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSBvcGVuX3Zub2RlKVxyXG5cdCAgICAgICAgICAgICAgICAgICAga2lkcy5zcGxpY2Uoa2lkcy5pbmRleE9mKGNoaWxkKSwgMSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgcHJldmlvdXNfdm5vZGUgPSBvcGVuX3Zub2RlO1xyXG5cdCAgICAgICAgbmV4dF92bm9kZSA9IChvcGVuX3Zub2RlICYmIG9wZW5fdm5vZGUucGFyZW50KSA/IG9wZW5fdm5vZGUucGFyZW50LmtpZHNbb3Blbl92bm9kZS5wYXJlbnQua2lkcy5pbmRleE9mKG9wZW5fdm5vZGUpICsgMV0gOiB1bmRlZmluZWQ7XHJcblx0ICAgICAgICBvcGVuX3Zub2RlID0gb3Blbl92bm9kZSA/IG9wZW5fdm5vZGUucGFyZW50IDogbnVsbDtcclxuXHQgICAgfVxyXG5cdCAgICBleHBvcnRzLmVsZW1lbnRDbG9zZSA9IGVsZW1lbnRDbG9zZTtcclxuXHQgICAgZnVuY3Rpb24gZ2V0UHJvcHModGFnLCBrZXksIHN0YXRpY3MsIG4xLCB2MSwgbjIsIHYyLCBuMywgdjMpIHtcclxuXHQgICAgICAgIHZhciBwcm9wcyA9IHt9O1xyXG5cdCAgICAgICAgaWYgKHN0YXRpY3MpXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0aWNzLmxlbmd0aDsgaSArPSAyKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBuYW1lXzIgPSBzdGF0aWNzW2ldO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0aWNzW2kgKyAxXTtcclxuXHQgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpXHJcblx0ICAgICAgICAgICAgICAgICAgICBwcm9wc1tuYW1lXzJdID0gdmFsdWU7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDIpIHtcclxuXHQgICAgICAgICAgICB2YXIgbmFtZV8zID0gYXJndW1lbnRzW2ldO1xyXG5cdCAgICAgICAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMV07XHJcblx0ICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpXHJcblx0ICAgICAgICAgICAgICAgIHByb3BzW25hbWVfM10gPSB2YWx1ZTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIHJldHVybiBwcm9wcztcclxuXHQgICAgfVxyXG5cdCAgICBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoaXNfbmV3LCBuZXh0X3Byb3BzKSB7XHJcblx0ICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5wcm9wcyA9IHt9O1xyXG5cdCAgICAgICAgaWYgKCFpc19uZXcpIHtcclxuXHQgICAgICAgICAgICBpZiAob3Blbl92bm9kZS5jb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcylcclxuXHQgICAgICAgICAgICAgICAgb3Blbl92bm9kZS5jb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0X3Byb3BzKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIG9wZW5fdm5vZGUuY29tcG9uZW50LnByb3BzID0gbmV4dF9wcm9wcztcclxuXHQgICAgICAgIGlmICghaXNfbmV3KSB7XHJcblx0ICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSAmJiAhb3Blbl92bm9kZS5jb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkpIHtcclxuXHQgICAgICAgICAgICAgICAgcHJldmlvdXNfdm5vZGUgPSBuZXh0X3Zub2RlO1xyXG5cdCAgICAgICAgICAgICAgICBuZXh0X3Zub2RlID0gb3Blbl92bm9kZS5raWRzW29wZW5fdm5vZGUua2lkcy5pbmRleE9mKHByZXZpb3VzX3Zub2RlKSArIDFdO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUpXHJcblx0ICAgICAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKCk7XHJcblx0ICAgICAgICAgICAgICAgIG9wZW5fdm5vZGUuY29tcG9uZW50LnJlbmRlcigpO1xyXG5cdCAgICAgICAgICAgICAgICBpZiAob3Blbl92bm9kZS5jb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKVxyXG5cdCAgICAgICAgICAgICAgICAgICAgb3Blbl92bm9kZS5jb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgICAgZWxzZVxyXG5cdCAgICAgICAgICAgIG9wZW5fdm5vZGUuY29tcG9uZW50LnJlbmRlcigpO1xyXG5cdCAgICB9XHJcblx0ICAgIGZ1bmN0aW9uIHN5bmModGFnLCBrZXksIHN0YXRpY3MsIG4xLCB2MSwgbjIsIHYyLCBuMywgdjMpIHtcclxuXHQgICAgICAgIHByZXZpb3VzX3Zub2RlID0gbnVsbDtcclxuXHQgICAgICAgIHZhciByZXVzZV9uZXh0X3Zub2RlID0gbmV4dF92bm9kZSAmJiBuZXh0X3Zub2RlLmtleSA9PT0ga2V5O1xyXG5cdCAgICAgICAgaWYgKHJldXNlX25leHRfdm5vZGUpXHJcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpXHJcblx0ICAgICAgICAgICAgICAgIHJldXNlX25leHRfdm5vZGUgPSBuZXh0X3Zub2RlLnRhZyA9PT0gdGFnIHx8IG5leHRfdm5vZGUudGFnID09PSB0YWcudG9Mb3dlckNhc2UoKTtcclxuXHQgICAgICAgICAgICBlbHNlXHJcblx0ICAgICAgICAgICAgICAgIHJldXNlX25leHRfdm5vZGUgPSBuZXh0X3Zub2RlLmNvbXBvbmVudCAmJiBuZXh0X3Zub2RlLmNvbXBvbmVudC5jb25zdHJ1Y3RvcltcIm5hbWVcIl0gPT09IHRhZ1tcIm5hbWVcIl07XHJcblx0ICAgICAgICB2YXIgcmVwbGFjaW5nX2NoaWxkO1xyXG5cdCAgICAgICAgdmFyIHBhcmVudF9ub2RlO1xyXG5cdCAgICAgICAgdmFyIGtpZHMgPSBvcGVuX3Zub2RlID8gb3Blbl92bm9kZS5raWRzIDogbnVsbDtcclxuXHQgICAgICAgIGlmICghcmV1c2VfbmV4dF92bm9kZSkge1xyXG5cdCAgICAgICAgICAgIHJlcGxhY2luZ19jaGlsZCA9IG5leHRfdm5vZGU7XHJcblx0ICAgICAgICAgICAgbmV4dF92bm9kZSA9IGtleSAmJiBvcGVuX3Zub2RlID8ga2lkcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMua2V5ID09PSBrZXk7IH0pWzBdIDogbnVsbDtcclxuXHQgICAgICAgICAgICBpZiAoIW5leHRfdm5vZGUpXHJcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHRhZy5iaW5kLmFwcGx5KHRhZywgW251bGxdLmNvbmNhdChbXSkpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgbmV4dF92bm9kZSA9IHsgcGFyZW50OiBvcGVuX3Zub2RlLCBub2RlOiBudWxsLCB0YWc6IHRhZ1tcIm5hbWVcIl0sIGtleToga2V5LCBhdHRyczoge30sIGNvbXBvbmVudDogbmV3IGZuKCksIGtpZHM6IFtdIH07XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZiAobmV4dF92bm9kZS5jb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG5leHRfdm5vZGUuY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCgpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGRvYyA9IG9wZW5fdm5vZGUgJiYgb3Blbl92bm9kZS5ub2RlID8gb3Blbl92bm9kZS5ub2RlLm93bmVyRG9jdW1lbnQgOiBkb2N1bWVudDtcclxuXHQgICAgICAgICAgICAgICAgICAgIG5leHRfdm5vZGUgPSB7IHBhcmVudDogb3Blbl92bm9kZSwgbm9kZTogdGFnID09PSBcIiN0ZXh0XCIgPyBkb2MuY3JlYXRlVGV4dE5vZGUoXCJcIikgOiBkb2MuY3JlYXRlRWxlbWVudCh0YWcpLCB0YWc6IHRhZy50b0xvd2VyQ2FzZSgpLCBrZXk6IGtleSwgYXR0cnM6IHt9LCBraWRzOiBbXSB9O1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUpIHtcclxuXHQgICAgICAgICAgICAgICAga2lkcy5zcGxpY2UocmVwbGFjaW5nX2NoaWxkID8ga2lkcy5pbmRleE9mKHJlcGxhY2luZ19jaGlsZCkgOiBraWRzLmxlbmd0aCwgMCwgbmV4dF92bm9kZSk7XHJcblx0ICAgICAgICAgICAgICAgIHBhcmVudF9ub2RlID0gb3Blbl92bm9kZS5ub2RlO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIG9wZW5fdm5vZGUgPSBuZXh0X3Zub2RlO1xyXG5cdCAgICAgICAgbmV4dF92bm9kZSA9IG9wZW5fdm5vZGUua2lkc1swXTtcclxuXHQgICAgICAgIHZhciBuZXh0X3Byb3BzID0gZ2V0UHJvcHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHQgICAgICAgIGlmIChvcGVuX3Zub2RlLmNvbXBvbmVudClcclxuXHQgICAgICAgICAgICByZW5kZXJDb21wb25lbnQoIXJldXNlX25leHRfdm5vZGUsIG5leHRfcHJvcHMpO1xyXG5cdCAgICAgICAgaWYgKCFyZXVzZV9uZXh0X3Zub2RlKSB7XHJcblx0ICAgICAgICAgICAgaWYgKG9wZW5fdm5vZGUuY29tcG9uZW50KSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmICghcHJldmlvdXNfdm5vZGUpXHJcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb21wb25lbnQgZGlkbid0IGNhbGwgYW55IGVsZW1lbnRzXCIpO1xyXG5cdCAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLm5vZGUgPSBwcmV2aW91c192bm9kZS5ub2RlO1xyXG5cdCAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLm5vZGVbXCJfX3JlYWN0aXZfdmlld19ub2RlXCJdID0gb3Blbl92bm9kZTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgaWYgKHBhcmVudF9ub2RlICYmIG9wZW5fdm5vZGUubm9kZSkge1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoa2V5KVxyXG5cdCAgICAgICAgICAgICAgICAgICAga2lkcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMua2V5ID09PSBrZXk7IH0pLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubm9kZSA9IG9wZW5fdm5vZGUubm9kZTsgfSk7XHJcblx0ICAgICAgICAgICAgICAgIC8vIElmIHRoZSBub2RlIGhhcyBhIGtleSwgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0byBwcmV2ZW50IGEgbGFyZ2UgbnVtYmVyIG9mIHJlLW9yZGVycyBpbiB0aGUgY2FzZSB0aGF0IGl0IG1vdmVkIGZhciBvciB3YXMgY29tcGxldGVseSByZW1vdmVkLiBTaW5jZSB3ZSBob2xkIG9uIHRvIGEgcmVmZXJlbmNlIHRocm91Z2ggdGhlIGtleU1hcCwgd2UgY2FuIGFsd2F5cyBhZGQgaXQgYmFjay5cclxuXHQgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2luZ19jaGlsZCAmJiByZXBsYWNpbmdfY2hpbGQubm9kZSAmJiByZXBsYWNpbmdfY2hpbGQua2V5KVxyXG5cdCAgICAgICAgICAgICAgICAgICAgcGFyZW50X25vZGUucmVwbGFjZUNoaWxkKG9wZW5fdm5vZGUubm9kZSwgcmVwbGFjaW5nX2NoaWxkLm5vZGUpO1xyXG5cdCAgICAgICAgICAgICAgICBlbHNlXHJcblx0ICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbm9kZS5pbnNlcnRCZWZvcmUob3Blbl92bm9kZS5ub2RlLCByZXBsYWNpbmdfY2hpbGQgPyByZXBsYWNpbmdfY2hpbGQubm9kZSA6IG51bGwpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICBpZiAob3Blbl92bm9kZS5jb21wb25lbnQgJiYgb3Blbl92bm9kZS5ub2RlICYmIG9wZW5fdm5vZGUuY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KVxyXG5cdCAgICAgICAgICAgICAgICBvcGVuX3Zub2RlLmNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCgpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblx0fS5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xyXG5cblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0aXYvbGliL3JlYWN0aXYuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9