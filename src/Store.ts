import EventSource from "./EventSource";
import {bugLogGroup, bugLog, bugLogGroupEnd} from "./BugLog";

export default class Store {
    private _onChanged = new EventSource<() => void>();
    
    subscribe(callback: ()=>void) : () => void {
        return this._onChanged.add(callback);
    }
    
    getClassName() {
        var result = ("" + this.constructor).split("function ")[1].split("(")[0];
        if(result[0] === "_")
            return result.slice(1);
        return result;
    }
    
    protected fireChanged() {
        bugLogGroup("%cCHANGE", "font-weight: normal; color: #b00");
        try {
            this._onChanged.trigger()
        } finally {
            bugLogGroupEnd();
        }
    }
} 