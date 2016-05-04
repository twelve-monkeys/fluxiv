/** The base type for "actions"" to change "stores". 
 * Has a name and an optional value. 
 * Any arguments should be packaged into the value. */
export interface Action {
    name: string;
    value?:any;
}
