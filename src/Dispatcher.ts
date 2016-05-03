import {Store} from "./Store";
import {Action} from "./action";
import {bugLogGroup, bugLog, bugLogGroupEnd} from "./BugLog";
import {EventSource} from "./EventSource";

type DispatcherCall = {store: Store, callback:Function};

export class Dispatcher {
    private _stores = <Store[]>[];

    register(store: Store) {
        this._stores.push(store);
    }
       
    private _storesCalled: Store[] = [];
    private _callsWaiting: DispatcherCall[] = [];
    private _callsQueued: DispatcherCall[] = [];

    onWillDispatch = new EventSource<(action: Action) => void>();
    onDidDispatch = new EventSource<(action: Action) => void>();

    dispatch(action: Action) {
        bugLogGroup("%cACTION " + action.name + "%c %o", "font-weight: normal; color: #b00", "font-weight: normal", action);
        try {
            this.onWillDispatch.trigger(action);
            
            this._callsQueued = this._stores.slice()
                .filter(s => typeof s[action.name] === "function")
                .map(store => <DispatcherCall>{ store, callback: () => (<Function>store[action.name]).call(store, action)});
            
            this._storesCalled = [];
            
            while(this._callsQueued.length) {
                var call = this._callsQueued.shift();
                try {
                    bugLogGroup("%cSTORE " + call.store.getClassName(), "font-weight: normal; color: #b22");
                    try {
                       call.callback();
                    } finally {
                        bugLogGroupEnd();
                    }
                } catch (error) {
                    bugLog("error dispatching action " + action.name + " to store " + call.store.getClassName());
                    console.dir && console.dir(error);
                }
                
                this._storesCalled.push(call.store);
                
                for(var waiting of this._callsWaiting.filter(w => w.store === call.store))
                    this._callsQueued.splice(0, 0, waiting);
                                       
                this._callsWaiting = this._callsWaiting.filter(w => w.store !== call.store);                                        
            }
            
            this.onDidDispatch.trigger(action);
        } finally {
            bugLogGroupEnd();
        }
    }
    
    waitFor(store: Store, callback: Function) {
        if(this._storesCalled.indexOf(store) !== -1 || !this._callsQueued.some(c => c.store === store)) {
            callback();
            return;
        }
    
        this._callsWaiting.push({store, callback});
    }
}

export default new Dispatcher();