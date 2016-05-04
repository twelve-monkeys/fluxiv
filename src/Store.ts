import {EventSource} from "./EventSource";
import * as log from "./Log";

export class Store {
    protected onChanged: EventSource<() => void> = new EventSource<() => void>();
    
    subscribe(callback: ()=>void) : () => void {
        return this.onChanged.add(callback);
    }
   
    getClassName() {
        var result = ("" + this.constructor).split("function ")[1].split("(")[0];
        if(result[0] === "_")
            return result.slice(1);
        return result;
    }
    
    protected fireChanged() {
        log.group("%cCHANGE", "font-weight: normal; color: #b00");
        try {
            this.onChanged.trigger()
        } finally {
            log.groupEnd();
        }
    }
} 