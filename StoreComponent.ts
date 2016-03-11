import * as jsx from 'reactiv';

import Store from "./store";
import {bugLogGroup, bugLog, bugLogGroupEnd} from "./BugLog";

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

export default class StoreComponent<P, S> extends jsx.Component<P,S> {
    state: S;
    props: P;

    private _callOnDismount: Function[] = [];
    private _stores: Store[];

    setState(f: S | ((prevState: S, props: P) => S), callback?: () => any): void {
        if (f instanceof Object) {
            this.state = <S><Object>f;
            return;
        }
    }

    constructor(props: P, ...stores: Store[]) {
        super(props);

        this._stores = stores || [];
        this.props = props || <P>{};
        this.state = this.getState() || <S>{};
    }

    context: {};
    refs: {
        [key: string]: any
    };

    getClassName() {
        return ("" + this.constructor).split("function ")[1].split("(")[0];
    }

    getState(): S {
        return {} as any as S;
    }

    forceUpdate(callBack?: () => any): void { }

    componentDidMount() {
        for (var store of this._stores)
            this._callOnDismount.push(store.subscribe(() => this.onStoreChanged()));
        this.storeComponentDidMount();
    }

    componentWillUnmount() {
        for (var fn of this._callOnDismount)
            fn();
        this.storeComponentWillUnmount();
    }

    storeComponentDidMount() { }
    storeComponentWillUnmount() { }

    onStoreChanged() {
        bugLog("%cCOMPONENT " + this.getClassName(), "color: #0b0");
        this.setState(this.getState());
    }
}