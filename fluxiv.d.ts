/// <reference path="typings/tsd.d.ts" />
declare module "Action" {
    /** The base type for "actions"" to change "stores". Just has a name. If needed, override and add other data. */
    export interface Action {
        name: string;
    }
}
declare module "BugLog" {
    /** Add a message to the end of the log that is sent up with bug reports,
     * and log it to the console.  This signature matches that of console.log: */
    export function bugLog(message?: any, ...parameters: any[]): void;
    export function bugLogGroup(message: any, ...parameters: any[]): void;
    export function bugLogGroupEnd(): void;
}
declare module "EventSource" {
    export interface IEventSource<T extends Function> {
        add(listener: T): () => void;
        remove(listener: T): void;
        trigger: T;
    }
    export default class EventSource<T extends Function> implements IEventSource<T> {
        private _listeners;
        /** Registers a new listener for the event. */
        add(listener: T): () => void;
        /** Unregisters a listener from the event.
            If no listener is provided, removes all listeners */
        remove(listener?: T): void;
        /** Invokes all of the listeners for this event. */
        trigger: T;
    }
}
declare module "Store" {
    export default class Store {
        private _onChanged;
        subscribe(callback: () => void): () => void;
        getClassName(): string;
        protected fireChanged(): void;
    }
}
declare module "Dispatcher" {
    import Store from "Store";
    import { Action } from "Action";
    export class Dispatcher {
        private _stores;
        register(store: Store): void;
        private _storesCalled;
        private _callsWaiting;
        private _callsQueued;
        dispatch(action: Action): void;
        waitFor(store: Store, callback: Function): void;
    }
    declare var _default: Dispatcher;
    export default _default;
}
declare module "StoreComponent" {
    import * as jsx from 'reactiv';
    import Store from "Store";
    export default class StoreComponent<P, S> extends jsx.Component<P, S> {
        state: S;
        props: P;
        private _callOnDismount;
        private _stores;
        setState(f: S | ((prevState: S, props: P) => S), callback?: () => any): void;
        constructor(props: P, ...stores: Store[]);
        context: {};
        refs: {
            [key: string]: any;
        };
        getClassName(): string;
        getState(): S;
        forceUpdate(callBack?: () => any): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        storeComponentDidMount(): void;
        storeComponentWillUnmount(): void;
        onStoreChanged(): void;
    }
}
declare module "fluxiv" {
    export * from "Action";
    export * from "Dispatcher";
    export * from "Store";
    export * from "StoreComponent";
}
