interface IComponent {
    componentWillMount?: () => void;
    componentDidMount?: () => void;
    componentWillUnmount?: () => void;
    componentWillUpdate?: () => void;
    componentDidUpdate?: () => void;
    componentWillReceiveProps: (next_props: any) => void;
    shouldComponentUpdate: () => boolean;
    render: () => void;
    props: any;
}

export class Component<P, S> {
    state: S;
    constructor(public props: P) { }
    componentWillMount() { };
    componentDidMount() { };
    componentWillUnmount() { };
    shouldComponentUpdate() { return true; }
    componentWillReceiveProps(next_props: any) { };
    render() { };
    setState(state: S) {
        this.state = state;
    }
}

interface VNode {
    parent: VNode;
    key?: string;
    tag: string;
    attrs: { [name: string]: any };
    node?: Node;
    component?: IComponent;
    kids: VNode[];
    text?: string;
}

let open_vnode: VNode;
let next_vnode: VNode;
let previous_vnode: VNode;

export function patch(element: Element, fn: () => void) {
    let node = element["__reactiv_view_node"] as VNode;
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

export function elementVoid(tag: string, key?: string, statics?, a1?, a2?, a3?, a4?, a5?, a6?) {
    elementOpen.apply(null, arguments);
    elementClose.apply(null, arguments);
}

export function text(value: any, formatters?: ((value) => string)[]) {
    const node = _elementOpen("#text", null, null);
    if (node.text !== value) {
        let formatted = node.text = value;
        for (let i = 1; i < arguments.length; i++) {
            const formatter = arguments[i];
            if (formatter)
                formatted = formatter(formatted);
        }
        (node.node as any).data = formatted;
    }
    elementClose();
}

export function elementOpen(tag: string | Function, key?: string, statics?: any[], n1?, v1?, n2?, v2?, n3?, v3?) {
    _elementOpen.apply(null, arguments);
}

function sync_arg(node: HTMLElement, name: string, value: any) {
    if (value === null || value === undefined)
        return false;

    let existing_value = open_vnode.attrs[name];
    switch (name) {
        case "style":
            if (open_vnode.component)
                throw new Error("components don't have dom nodes, you cannot set styles directly on them");

            if (typeof value === "string") {
                node.style.cssText = value;
                break;
            }

            const style = node.style;

            const visited_style: { [name: string]: boolean } = {};
            for (let prop in <Object>value) {
                const prop_value = value[prop];
                visited_style[prop] = true;
                if (!existing_value || existing_value[prop] !== prop_value) {
                    style[prop] = prop_value;
                    (open_vnode.attrs[name] = existing_value = existing_value || {})[prop] = prop_value;
                }
            }

            for (let prop in existing_value)
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
                    ((fn: (event) => void) => {
                        const event_name = name.slice(2).toLowerCase();
                        if (existing_value !== fn)
                            open_vnode.node.removeEventListener(event_name, existing_value);
                        open_vnode.node.addEventListener(event_name, fn);
                    })(value);
            } else if (!open_vnode.component)
                node.setAttribute(name, value);
            break;
    }
    return true;
};


function _elementOpen(tag: string | Function, key?: string, statics?: any[], n1?, v1?, n2?, v2?, n3?, v3?) {

    sync.apply(null, arguments);

    //    if (open_vnode.component)
    //        return open_vnode;

    const visited = {};
    let node = open_vnode.node as HTMLElement;

    if (statics)
        for (let i = 0; i < statics.length; i += 2)
        if(sync_arg(node, statics[i], statics[i + 1]))
            visited[statics[i]] = true;

    for (let i = 3; i < arguments.length; i += 2)
        if(sync_arg(node, arguments[i], arguments[i + 1]))
            visited[arguments[i]] = true;

    for (let name in open_vnode.attrs)
        if (!visited[name]) {
            if (name.slice(0, 2) === "on" && typeof open_vnode.attrs[name] === "function")
                node.removeEventListener(name.slice(2).toLowerCase(), open_vnode.attrs[name]);
            else if (!open_vnode.component)
                (open_vnode.node as HTMLElement).removeAttribute(name);

            delete open_vnode.attrs[name];
        }

    return open_vnode;
}

export function elementClose() {
    if (open_vnode) {
        const kids = open_vnode.kids;
        while (true) {
            const child = kids[kids.length - 1];
            if (!child || child === previous_vnode)
                break;

            if (child.component && child.component.componentWillUnmount)
                child.component.componentWillUnmount();

            open_vnode.node.removeChild(child.node);
            kids.splice(kids.indexOf(child), 1);
        }

        for (let child of kids.slice())
            if (child.parent !== open_vnode)
                kids.splice(kids.indexOf(child), 1);
    }
    previous_vnode = open_vnode;
    next_vnode = (open_vnode && open_vnode.parent) ? open_vnode.parent.kids[open_vnode.parent.kids.indexOf(open_vnode) + 1] : undefined;
    open_vnode = open_vnode ? open_vnode.parent : null;
}

function getProps(tag: string | Function, key?: string, statics?: any[], n1?, v1?, n2?, v2?, n3?, v3?) {
    const props = {};
    if (statics)
        for (let i = 0; i < statics.length; i += 2) {
            let name = statics[i];
            let value = statics[i + 1];

            if (value !== null && value !== undefined)
                props[name] = value;
        }
    for (let i = 3; i < arguments.length; i += 2) {
        let name = arguments[i];
        let value = arguments[i + 1];

        if (value !== null && value !== undefined)
            props[name] = value;
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
        } else {
            if (open_vnode.component.componentWillUpdate)
                open_vnode.component.componentWillUpdate();

            open_vnode.component.render();

            if (open_vnode.component.componentDidUpdate)
                open_vnode.component.componentDidUpdate();
        }
    } else
        open_vnode.component.render();
}

function sync(tag: string | Function, key?: string, statics?: any[], n1?, v1?, n2?, v2?, n3?, v3?) {
    previous_vnode = null;

    let reuse_next_vnode = next_vnode && next_vnode.key === key;
    if (reuse_next_vnode)
        if (typeof tag === "string")
            reuse_next_vnode = next_vnode.tag === tag || next_vnode.tag === tag.toLowerCase();
        else
            reuse_next_vnode = next_vnode.component && next_vnode.component.constructor["name"] === tag["name"];

    let replacing_child: VNode;
    let parent_node: Node;

    const kids = open_vnode ? open_vnode.kids : null;

    if (!reuse_next_vnode) {
        replacing_child = next_vnode;

        next_vnode = key && open_vnode ? kids.filter(c => c.key === key)[0] : null;

        if (!next_vnode)
            if (typeof tag === "function") {
                const fn = tag.bind.apply(tag, [null].concat([]));
                next_vnode = { parent: open_vnode, node: null, tag: tag["name"], key, attrs: {}, component: new fn(), kids: [] };
                if (next_vnode.component.componentWillMount)
                    next_vnode.component.componentWillMount();
            } else {
                const doc = open_vnode && open_vnode.node ? open_vnode.node.ownerDocument : document;
                next_vnode = { parent: open_vnode, node: tag === "#text" ? doc.createTextNode("") : doc.createElement(tag as string), tag: (tag as string).toLowerCase(), key, attrs: {}, kids: [] };
            }

        if (open_vnode) {
            kids.splice(replacing_child ? kids.indexOf(replacing_child) : kids.length, 0, next_vnode);
            parent_node = open_vnode.node;
        }
    }

    open_vnode = next_vnode;
    next_vnode = open_vnode.kids[0];

    const next_props = getProps.apply(null, arguments);

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
                kids.filter(c => c.key === key).forEach(c => c.node = open_vnode.node);

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
