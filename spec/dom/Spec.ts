import * as jsx from "../../reactiv";

interface messageProps {
    importance: number;
    message: string;
}


export class message extends jsx.Component<messageProps, void> {
    render() {
        jsx.elementOpen("div", null, null, "style", { display: "inline", color: this.props.importance > 5 ? "red" : "gray" });
        jsx.text(this.props.message);
        jsx.elementClose();
    }
}

interface importantProps {
    importance: number;
    name: string;
}

interface importantState {
    tired: boolean;
}

export class important extends jsx.Component<importantProps, importantState> {
    constructor(props: importantProps) {
        super(props);
        this.setState({ tired: false });
    }
    render() {
        jsx.elementVoid(message as any, null, null, "importance", this.props.importance, "message", this.state.tired ? "tired" : "ok");
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
        jsx.elementVoid("div", null, null, "frozen", freeze_message ? "yes" : "no");
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
        jsx.patch(node, () => null);
        expect(node.outerHTML).toBe("<div></div>");

        node.setAttribute("data-id", "3");
        node.innerHTML = "somestuff";

        jsx.patch(node, () => null);
        expect(node.outerHTML).toBe('<div data-id="3">somestuff</div>');
    });

    it("can use elementVoid to insert a div", () => {
        jsx.patch(node, () => {
            jsx.elementVoid("div");
        });
        expect(node.outerHTML).toBe("<div><div></div></div>");
    });


    it("will remove something", () => {
        jsx.patch(node, () => {
            jsx.elementOpen("span", null, null);
            jsx.elementClose();
        });
        expect(node.outerHTML).toBe("<div><span></span></div>");

        jsx.patch(node, () => null);

        expect(node.outerHTML).toBe("<div></div>");
    });


    it("can replace and add things", () => {
        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null);
            jsx.elementClose();
        });

        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null);
            jsx.elementClose();
            jsx.elementOpen("div", null, null);
            jsx.elementClose();
        });

        expect(node.outerHTML).toBe("<div><div></div><div></div></div>");
    });

    it("doesn't re-add the same div", () => {
        var fn = () =>
            jsx.patch(node, () => {
                jsx.elementOpen("div", null, null);
                jsx.elementClose();
            });

        for (var i = 0; i < 3; i++) {
            fn();
            expect(node.outerHTML).toBe("<div><div></div></div>");
        }
    });

    it("handles attributes", () => {
        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null, 'id', 'the_id', "style", { color: 'red' });
            jsx.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" style="color: red;"></div></div>');
    });

    it("mutates attributes", () => {
        var style = { color: 'red' } as any;
        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null, 'id', 'the_id', "style", style);
            jsx.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" style="color: red;"></div></div>');

        style.color = "blue";
        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null, 'id', 'the_id', "style", style);
            jsx.elementClose();
        });

        style.backgroundColor = "red";
        delete style.color;

        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null, 'id', 'the_id', "style", style);
            jsx.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" style="background-color: red;"></div></div>');
    });

    it("adds attributes", () => {
        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null, 'id', 'the_id');
            jsx.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id"></div></div>');

        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null, 'id', 'the_id', "name", "fred");
            jsx.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" name="fred"></div></div>');
    });

    it("removes attributes", () => {
        jsx.patch(node, () => {
            jsx.elementOpen("div", null, null, 'id', 'the_id', "name", "fred");
            jsx.elementClose();
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" name="fred"></div></div>');

        jsx.patch(node, () => {
            jsx.elementVoid("div", null, null, 'id', 'the_id');
        });

        expect(node.outerHTML).toBe('<div><div id="the_id"></div></div>');
        jsx.patch(node, () => {
            jsx.elementVoid("div", null, ['id', 'the_id', 'frodo', '121'], 'data-frame', 'anterior');
        });

        expect(node.outerHTML).toBe('<div><div id="the_id" frodo="121" data-frame="anterior"></div></div>');
    });

    it("deals with a component", () => {
        jsx.patch(node, () => {
            jsx.elementVoid(lifecycle as any);
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

        jsx.patch(node, () => {
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

        jsx.patch(node, () => {
            jsx.elementVoid("div", null, ["onClick", test_click]);
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

        jsx.patch(node, () => {
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

        jsx.patch(node, () => {
            jsx.elementVoid("div", null, null);
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

        jsx.patch(node, () => {
            jsx.elementVoid("div", null, ["onClick", test_click]);
        });

        expect(node.outerHTML).toBe('<div><div></div></div>');
        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(false);
        expect(count).toBe(1);

        jsx.patch(node, () => {
            jsx.elementVoid("div", null, ["onClick", test_click2]);
        });

        var cancelled = !simulateClick(node.children[0]);
        expect(cancelled).toBe(true);
        expect(count).toBe(101);
    });

    it("allows elements to mutate themselves", () => {
        jsx.patch(node, () => jsx.elementVoid("div"));
        (node.children[0] as HTMLElement).innerHTML = "dynamic";
        jsx.patch(node, () => jsx.elementVoid("div"));
        expect(node.outerHTML).toBe('<div><div>dynamic</div></div>');
    });

    it("constructs components appropriately", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_constructor).toBe(1);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_constructor).toBe(1);
        jsx.patch(node, () => null);
        expect(lc_constructor).toBe(1);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_constructor).toBe(2);
    });

    it("calls componentWillMount appropriately", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentWillMount).toBe(1);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentWillMount).toBe(1);
    });

    it("calls componentDidMount appropriately", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentDidMount).toBe(1);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentDidMount).toBe(1);
    });

    it("calls componentWillUnmount appropriately", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentWillUnmount).toBe(0);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentWillUnmount).toBe(0);
        jsx.patch(node, () => null);
        expect(lc_componentWillUnmount).toBe(1);
    });

    it("calls componentWillUpdate appropriately", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentWillUpdate).toBe(0);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentWillUpdate).toBe(1);
        jsx.patch(node, () => null);
        expect(lc_componentWillUpdate).toBe(1);
    });

    it("calls componentDidUpdate appropriately", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentDidUpdate).toBe(0);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_componentDidUpdate).toBe(1);
        jsx.patch(node, () => null);
        expect(lc_componentDidUpdate).toBe(1);
    });

    it("calls shouldComponentUpdate appropriately", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_shouldComponentUpdate).toBe(0);
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_shouldComponentUpdate).toBe(1);
        jsx.patch(node, () => null);
        expect(lc_shouldComponentUpdate).toBe(1);
    });

    it("calls mounting lifecycle methods in the correct order", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_methods.join(" => ")).toBe("constructor => componentWillMount => render => componentDidMount");
    });

    it("calls re-render lifecycle methods in the correct order", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        lc_methods = [];
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_methods.join(" => ")).toBe("componentWillReceiveProps => shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate");
    });

    it("respects shouldComponentUpdate", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        lc_methods = [];
        freeze_message = true;
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        expect(lc_methods.join(" => ")).toBe("componentWillReceiveProps => shouldComponentUpdate");
        expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');
    });

    it("calls unmounting lifecycle methods in the correct order", () => {
        jsx.patch(node, () => jsx.elementVoid(lifecycle as any));
        lc_methods = [];
        jsx.patch(node, () => null);
        expect(lc_methods.join(" => ")).toBe("componentWillUnmount");
    });

    it("unmounts components", () => {
        jsx.patch(node, () => {
            jsx.elementVoid(lifecycle as any, null, null, null);
        });

        expect(node.outerHTML).toBe('<div><div frozen="no"></div></div>');

        expect(lc_componentWillMount).toBe(1);
        expect(lc_componentDidMount).toBe(1);

        jsx.patch(node, () => {
            jsx.elementVoid("div", null, null, null);
        });

        expect(node.outerHTML).toBe('<div><div></div></div>');

        expect(lc_componentWillMount).toBe(1);
        expect(lc_componentDidMount).toBe(1);
        expect(lc_componentWillUnmount).toBe(1);
    });

    it("recognises nested components", () => {
        var start = new Date().getTime();

        jsx.patch(node, () => {
            jsx.elementVoid(important as any, null, null, "importance", 7, "name", "bond, jimmy-bob melon-field bond");
        });

        expect(node.outerHTML).toBe('<div><div style="display: inline; color: red;">ok</div></div>');
    });

    fit("is fast", () => {
        var start = new Date().getTime();

        const iterations = 10000;
        for (var i = 0; i < iterations; i++) {
            jsx.patch(node, () => {
                jsx.elementVoid(important as any, null, null, "importance", i % 10, "name", "bond, jimmy-bob " + (i % 2 ? "melon-field" : "princess") + " bond");
            });
        }

        var duration = new Date().getTime() - start;

        console.log("benchmark: " + iterations + " took " + duration + " ms = " + (Math.ceil(duration / iterations * 10000) / 10) + " us per");
        expect(duration).toBeLessThan(250);
    });

    it("deals with keys", () => {
        jsx.patch(node, () => {
            jsx.elementVoid("div", "1", null, "id", "iamme");
        });

        expect(node.outerHTML).toBe('<div><div id="iamme"></div></div>');

        jsx.patch(node, () => {
            jsx.elementVoid("div", "1", null, "id", "iamstillme");
        });

        expect(node.outerHTML).toBe('<div><div id="iamstillme"></div></div>');
    });
});