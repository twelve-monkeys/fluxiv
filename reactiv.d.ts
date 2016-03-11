declare module reactiv {
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
    class Component<P, S> implements IComponent {
        props: P;
        state: S;
        constructor(props: P);
        componentWillMount(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        shouldComponentUpdate(): boolean;
        componentWillReceiveProps(next_props: any): void;
        render(): void;
        setState(state: S): void;
    }
    function patch(element: Element, fn: () => void): void;
    function elementVoid(tag: string, key?: string, statics?: any, a1?: any, a2?: any, a3?: any, a4?: any, a5?: any, a6?: any): void;
    function text(value: any, formatters?: ((value) => string)[]): void;
    function elementOpen(tag: string | Function, key?: string, statics?: any[], n1?: any, v1?: any, n2?: any, v2?: any, n3?: any, v3?: any): void;
    function elementClose(): void;
}
