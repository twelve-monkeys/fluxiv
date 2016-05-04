
var messages = <string[]>[];

var groups: string[] = [];
var groupsStarted:  number[] = [];

function _log(fn: (message: string, ...parameters: any[]) => void, message: string, parameters: any[]) {
    if (!fn && console && console.log)
        _log(console.log, message, parameters);
    else if(fn)
        fn.apply(console, parameters.length ? [message].concat(parameters) : [message]);
}

/** Add a message to the end of the log that is sent up with bug reports,
 * and log it to the console.  This signature matches that of console.log: */
export function write(message?: any, ...parameters: any[]) {
    save(message, parameters);
};

var use_perf = false;
try {
     use_perf = performance && typeof performance.now === "function";
} catch(error) {}

function getTimestamp() {
    return use_perf ? performance.now() : Date.now();
}

export function group(message: any, ...parameters: any[]) {
    if (console)
        _log(console.group, message, parameters);

    save("BEGIN " + message, true);
    groups.push(message);
    groupsStarted.push(getTimestamp());
};

export function groupEnd() {
    const end_time = getTimestamp();
    const start_time = groupsStarted.pop();

    const elapsed = end_time - start_time;
    if (elapsed >= 5)
        write("%c" + Math.round(elapsed) + "ms", "color:#aaa");

    if (console && typeof console.group === "function")
        console.groupEnd();

    groups.pop();
};

function save(message?: any, ...parameters: any[]) {
    var i: number;
    if (typeof message === 'string') {
        var messagestring = <string>message;
        for (i = 0; i < parameters.length; i++)
            try {
                const pct_index = messagestring.indexOf('%');
                if (pct_index === -1)
                    break;
                messagestring = messagestring.substring(0, pct_index) + messagestring.substring(pct_index + 2);
            } catch (error) {
                console.log("problem replacing bugLog args: " + error.toString());
            }
        message = messagestring;
    } else
        message = (message || "").toString();

    message = clean(message);

    const d = new Date();

    function pad(value: number): string {
        if (value < 10)
            return '0' + value;
        return String(value);
    }

    const timestamp = d.getUTCFullYear() +
        '-' + pad(d.getUTCMonth() + 1) +
        '-' + pad(d.getUTCDate()) +
        ' ' + pad(d.getUTCHours()) +
        ':' + pad(d.getUTCMinutes()) +
        ':' + pad(d.getUTCSeconds()) +
        '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        ' UTC ';

    let full_message = timestamp;
    for (i = 0; i < groups.length; i++)
        full_message += "  ";
    full_message += message;

    if (console)
        _log(console.log, full_message, []);

    messages.push(full_message);
    if (messages.length > 1024)
        messages.shift();
}

var clean = (message: string) => {
    message = message || ""; // protect against nulls

    var maximum = 1024000;
    if (message.length > maximum)
        message = message.substring(0, maximum-1) + '...';

    return message;
};