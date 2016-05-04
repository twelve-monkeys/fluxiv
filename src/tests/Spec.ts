/// <reference path="jasmine.d.ts" />

import * as ActionSpec from "./Action";
ActionSpec.include;

import * as reactiv from 'reactiv';

export interface messageProps {
    importance: number;
    message: string;
}


export class message extends reactiv.Component<messageProps, void> {
    render() {
        reactiv.elementOpen("div", null, null, "style", { display: "inline", color: this.props.importance > 5 ? "red" : "gray" });
        reactiv.text(this.props.message);
        reactiv.elementClose();
    }
}

export interface importantProps {
    importance: number;
    name: string;
}

export interface importantState {
    tired: boolean;
}

export class important extends reactiv.Component<importantProps, importantState> {
    constructor(props: importantProps) {
        super(props);
        this.setState({ tired: false });
    }
    render() {
        reactiv.elementVoid(message as any, null, null, "importance", this.props.importance, "message", this.state.tired ? "tired" : "ok");
    }
}

let lc_methods = [];
let lc_constructor = 0; // check
let lc_componentWillMount = 0; // check
let lc_componentDidMount = 0; // check
let lc_componentWillReceiveProps = 0; // todo! needs to check args before
let lc_shouldComponentUpdate = 0; // check
let lc_componentWillUpdate = 0; // check
let lc_componentDidUpdate = 0; // check
let lc_componentWillUnmount = 0; // check
let lc_render = 0;// check

var freeze_message = false;
export class lifecycle {
    constructor() {
        lc_methods.push("constructor");
        lc_constructor++;
    }

    componentWillMount() {
        lc_methods.push("componentWillMount");
        lc_componentWillMount++;
    }

    componentDidMount() {
        lc_methods.push("componentDidMount");
        lc_componentDidMount++;
    }

    componentWillReceiveProps(nextProps) {
        lc_methods.push("componentWillReceiveProps");
        lc_componentWillReceiveProps++;
    }

    shouldComponentUpdate(nextProps, nextState) {
        lc_methods.push("shouldComponentUpdate");
        lc_shouldComponentUpdate++;
        return !freeze_message;
    }

    componentWillUpdate(nextProps, nextState) {
        lc_methods.push("componentWillUpdate");
        lc_componentWillUpdate++;
    }

    componentDidUpdate(prevProps, prevState) {
        lc_methods.push("componentDidUpdate");
        lc_componentDidUpdate++;
    }

    componentWillUnmount() {
        lc_methods.push("componentWillUnmount");
        lc_componentWillUnmount++;
    }

    render() {
        lc_methods.push("render");
        lc_render++;
        reactiv.elementVoid("div", null, null, "frozen", freeze_message ? "yes" : "no");
    }
}

function simulateClick(element: Element) {
    var simulateDivClick = document.createEvent('MouseEvents');
    simulateDivClick.initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, null, null);
    return element.dispatchEvent(simulateDivClick);
}

describe("a patch", () => {
    var node: HTMLElement;
    var starting_html: string;

    var original_properties_of = [];

    var get_properties = (container) => Object.getOwnPropertyNames(container);

    beforeEach((done) => {
        starting_html = document.body.innerHTML;
        node = document.createElement("div");
        document.body.appendChild(node);
        setTimeout(() => {
            var conserve_properties_of = [window, document, document.body];
            original_properties_of = conserve_properties_of.map(container => get_properties(container))

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

    afterEach(() => {
        document.body.removeChild(node);
        expect(document.body.innerHTML.trim()).toBe(starting_html.trim());

        var conserve_properties_of = [window, document, document.body];
        var new_properties_of = conserve_properties_of.map(container => get_properties(container))

        expect(new_properties_of).toEqual(original_properties_of);
    });

    it("does nothing if nothing is rendered", () => {
        reactiv.patch(node, () => null);
        expect(node.outerHTML).toBe("<div></div>");

        node.setAttribute("data-id", "3");
        node.innerHTML = "somestuff";

        reactiv.patch(node, () => null);
        expect(node.outerHTML).toBe('<div data-id="3">somestuff</div>');
    });

    it("can use elementVoid to insert a div", () => {
        reactiv.patch(node, () => {
            reactiv.elementVoid("div");
        });
        expect(node.outerHTML).toBe("<div><div></div></div>");
    });


    it("will remove something", () => {
        reactiv.patch(node, () => {
            reactiv.elementOpen("span", null, null);
            reactiv.elementClose();
        });
        expect(node.outerHTML).toBe("<div><span></span></div>");

        reactiv.patch(node, () => null);

        expect(node.outerHTML).toBe("<div></div>");
    });


    it("can replace and add things", () => {
        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null);
            reactiv.elementClose();
        });

        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null);
            reactiv.elementClose();
            reactiv.elementOpen("div", null, null);
            reactiv.elementClose();
        });

        expect(node.outerHTML).toBe("<div><div></div><div></div></div>");
    });

    it("doesn't re-add the same div", () => {
        var fn = () =>
            reactiv.patch(node, () => {
                reactiv.elementOpen("div", null, null);
                reactiv.elementClose();
            });

        for (var i = 0; i < 3; i++) {
            fn();
            expect(node.outerHTML).toBe("<div><div></div></div>");
        }
    });

    it("handles attributes", () => {
        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null, 'id', 'the_id', "style", { color: 'red' });
            reactiv.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" style="color: red;"></div></div>');
    });

    it("mutates attributes", () => {
        var style = { color: 'red' } as any;
        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null, 'id', 'the_id', "style", style);
            reactiv.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" style="color: red;"></div></div>');

        style.color = "blue";
        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null, 'id', 'the_id', "style", style);
            reactiv.elementClose();
        });

        style.backgroundColor = "red";
        delete style.color;

        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null, 'id', 'the_id', "style", style);
            reactiv.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" style="background-color: red;"></div></div>');
    });

    it("adds attributes", () => {
        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null, 'id', 'the_id');
            reactiv.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id"></div></div>');

        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null, 'id', 'the_id', "name", "fred");
            reactiv.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" name="fred"></div></div>');
    });

    it("removes attributes", () => {
        reactiv.patch(node, () => {
            reactiv.elementOpen("div", null, null, 'id', 'the_id', "name", "fred");
            reactiv.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" name="fred"></div></div>');

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, null, 'id', 'the_id');
        });

        expect(node.outerHTML).toBe('<div><div id="the_id"></div></div>');
        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, ['id', 'the_id', 'frodo', '121'], 'data-frame', 'anterior');
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" frodo="121" data-frame="anterior"></div></div>');
    });

    it("deals with a component", () => {
        reactiv.patch(node, () => {
            reactiv.elementVoid(lifecycle as any);
        });

        expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');
    });

    it("adds event handlers", () => {
        var prevent_click_default = false;
        var count = 0;

        var test_click = (event) => {
            count++;
            if (prevent_click_default)
                event.preventDefault();
        }

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, ["onClick", test_click]);
        });

        expect(node.outerHTML).toBe('<div><div></div></div>');

        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(false);
        expect(count).toBe(1);

        prevent_click_default = true;
        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(true);
        expect(count).toBe(2);

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, ["onClick", test_click]);
        });

        prevent_click_default = false;
        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(false);
        expect(count).toBe(3);
    });

    it("removes event handlers", () => {
        var prevent_click_default = false;
        var count = 0;

        var test_click = (event) => {
            count++;
            if (prevent_click_default)
                event.preventDefault();
        }

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, ["onClick", test_click]);
        });

        expect(node.outerHTML).toBe('<div><div></div></div>');

        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(false);
        expect(count).toBe(1);

        prevent_click_default = true;
        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(true);
        expect(count).toBe(2);

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, null);
        });

        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(false);
        expect(count).toBe(2);
    });

    it("changes event handlers", () => {
        var count = 0;

        var test_click = (event) => {
            count++;
        }

        var test_click2 = (event) => {
            count += 100;
            event.preventDefault();
        }

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, ["onClick", test_click]);
        });

        expect(node.outerHTML).toBe('<div><div></div></div>');
        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(false);
        expect(count).toBe(1);

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, ["onClick", test_click2]);
        });

        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(true);
        expect(count).toBe(101);
    });

    it("allows elements to mutate themselves", () => {
        reactiv.patch(node, () => reactiv.elementVoid("div"));
        (node.children[0] as HTMLElement).innerHTML = "dynamic";
        reactiv.patch(node, () => reactiv.elementVoid("div"));
        expect(node.outerHTML).toBe('<div><div>dynamic</div></div>');
    });

    it("constructs components appropriately", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_constructor).toBe(1);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_constructor).toBe(1);
        reactiv.patch(node, () => null);
        expect(lc_constructor).toBe(1);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_constructor).toBe(2);
    });

    it("calls componentWillMount appropriately", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentWillMount).toBe(1);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentWillMount).toBe(1);
    });

    it("calls componentDidMount appropriately", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentDidMount).toBe(1);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentDidMount).toBe(1);
    });

    it("calls componentWillUnmount appropriately", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentWillUnmount).toBe(0);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentWillUnmount).toBe(0);
        reactiv.patch(node, () => null);
        expect(lc_componentWillUnmount).toBe(1);
    });

    it("calls componentWillUpdate appropriately", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentWillUpdate).toBe(0);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentWillUpdate).toBe(1);
        reactiv.patch(node, () => null);
        expect(lc_componentWillUpdate).toBe(1);
    });

    it("calls componentDidUpdate appropriately", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentDidUpdate).toBe(0);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_componentDidUpdate).toBe(1);
        reactiv.patch(node, () => null);
        expect(lc_componentDidUpdate).toBe(1);
    });

    it("calls shouldComponentUpdate appropriately", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_shouldComponentUpdate).toBe(0);
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_shouldComponentUpdate).toBe(1);
        reactiv.patch(node, () => null);
        expect(lc_shouldComponentUpdate).toBe(1);
    });

    it("calls mounting lifecycle methods in the correct order", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_methods.join(" => ")).toBe("constructor => componentWillMount => render => componentDidMount");
    });

    it("calls re-render lifecycle methods in the correct order", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        lc_methods = [];
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_methods.join(" => ")).toBe("componentWillReceiveProps => shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate");
    });

    it("respects shouldComponentUpdate", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        lc_methods = [];
        freeze_message = true;
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        expect(lc_methods.join(" => ")).toBe("componentWillReceiveProps => shouldComponentUpdate");
        expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');
    });

    it("calls unmounting lifecycle methods in the correct order", () => {
        reactiv.patch(node, () => reactiv.elementVoid(lifecycle as any));
        lc_methods = [];
        reactiv.patch(node, () => null);
        expect(lc_methods.join(" => ")).toBe("componentWillUnmount");
    });

    it("unmounts components", () => {
        reactiv.patch(node, () => {
            reactiv.elementVoid(lifecycle as any, null, null, null);
        });

        expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');

        expect(lc_componentWillMount).toBe(1);
        expect(lc_componentDidMount).toBe(1);

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", null, null, null);
        });

        expect(node.outerHTML).toBe('<div><div></div></div>');

        expect(lc_componentWillMount).toBe(1);
        expect(lc_componentDidMount).toBe(1);
        expect(lc_componentWillUnmount).toBe(1);
    });

    it("recognises nested components", () => {
        var start = new Date().getTime();

        reactiv.patch(node, () => {
            reactiv.elementVoid(important as any, null, null, "importance", 7, "name", "bond, jimmy-bob melon-field bond");
        });

        expect(node.outerHTML).toBe('<div><div style="display: inline; color: red;">ok</div></div>');
    });

    it("is fast", () => {

        const fn = () => 
            reactiv.patch(node, () => 
                reactiv.elementVoid(important as any, null, null, "importance", i % 10, "name", "bond, jimmy-bob " + (i % 2 ? "melon-field" : "princess") + " bond"));

        const iterations = 10000;

        //warm-up
        for (var i = 0; i < iterations/10; i++) 
            fn();
        
        var start = new Date().getTime();
        
        for (var i = 0; i < iterations; i++) 
            fn();

        var duration = new Date().getTime() - start;

        console.log("benchmark: " + iterations + " took " + duration + " ms = " + (Math.ceil(duration / iterations * 10000) / 10) + " us per");
        expect(duration).toBeLessThan(1000);
    });

    it("deals with keys", () => {
        reactiv.patch(node, () => {
            reactiv.elementVoid("div", "1", null, "id", "iamme");
        });

        expect(node.outerHTML).toBe('<div><div id="iamme"></div></div>');

        reactiv.patch(node, () => {
            reactiv.elementVoid("div", "1", null, "id", "iamstillme");
        });

        expect(node.outerHTML).toBe('<div><div id="iamstillme"></div></div>');
    });
});