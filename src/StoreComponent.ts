// <reference path="./typings/tsd.d.ts" />

import * as jsx from 'reactiv';

import Store from "./Store";
import {bugLogGroup, bugLog, bugLogGroupEnd} from "./BugLog";

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