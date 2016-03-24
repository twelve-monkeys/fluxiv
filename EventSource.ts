export interface IEventSource<T extends Function> {
    add(listener: T): () => void;
    remove(listener: T):void;
    trigger: T;
}

export default class EventSource<T extends Function> implements IEventSource<T> {
    private _listeners: T[] = [];

    /** Registers a new listener for the event. */
    add(listener: T) {
        this._listeners.push(listener);
        return () => this.remove(listener);
    }

    /** Unregisters a listener from the event. 
        If no listener is provided, removes all listeners */
    remove(listener?: T): void {
        if (typeof listener !== 'function') {
            this._listeners = [];
            return;
        }
        for (let i = 0; i < this._listeners.length; i++)
            if (this._listeners[i] === listener) {
                this._listeners.splice(i, 1);
                break;
            }
    }

    /** Invokes all of the listeners for this event. */
    trigger = <T><Function><any>((...a: any[]) => {
        let result:any = undefined;
        const context = {};
        const listeners = this._listeners.slice(0);
        const args = a || [];
        for (let i = 0; i < listeners.length; i++) {
            const handler_result = listeners[i].apply(context, args);
            result = result || handler_result;
        }
        return result;
    });
}