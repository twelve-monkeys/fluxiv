
// This script allows you to:
//  * use 'bugLog(message)' to record log entries in case an error occurs,

/////////////
// Logging //
/////////////

var logMessages = <string[]>[];

var bugLogGroups: string[] = [];
var bugLogGroupStartTimes:  number[] = [];


function _consoleLog(fn: (message: string, ...parameters: any[]) => void, message: string, parameters: any[]) {
    if (!fn && window.console && window.console.log)
        _consoleLog(console.log, message, parameters);
    else if(fn)
        fn.apply(console, parameters.length ? [message].concat(parameters) : [message]);
}

/** Add a message to the end of the log that is sent up with bug reports,
 * and log it to the console.  This signature matches that of console.log: */
export function bugLog(message?: any, ...parameters: any[]) {
    if (window.console)
        _consoleLog(console.log, message, parameters);
    bugLogRemember(message, parameters);
};

var has_performance = window.performance && typeof window.performance.now === "function";

function getBugLogTime() {
    return has_performance ? performance.now() : Date.now();
}

export function bugLogGroup(message: any, ...parameters: any[]) {
    if (window.console)
        _consoleLog(console.group, message, parameters);

    bugLogRemember("BEGIN " + message, true);
    bugLogGroups.push(message);
    bugLogGroupStartTimes.push(getBugLogTime());
};

export function bugLogGroupEnd() {
    const end_time = getBugLogTime();
    const start_time = bugLogGroupStartTimes.pop();

    const elapsed = end_time - start_time;
    if (elapsed >= 5)
        bugLog("%c" + Math.round(elapsed) + "ms", "color:#aaa");

    if (window.console && typeof console.group === "function")
        console.groupEnd();

    bugLogGroups.pop();
};

function bugLogRemember(message?: any, ...parameters: any[]) {
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
    } else {
        // Callers may supply arbitrary objects as they can with console.log(),
        // but at this stage we need a string.
        message = (message || "").toString();
    }

    message = cleanLogMessage(message);

    // Add timestamp.

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
    for (i = 0; i < bugLogGroups.length; i++)
        full_message += "  ";
    full_message += message;

    logMessages.push(full_message);
    if (logMessages.length > 1024)
        logMessages.shift();
}

var cleanLogMessage = (message: string) => {
    message = message || ""; // protect against nulls

    var maximum = 1024000;
    if (message.length > maximum)
        message = message.substring(0, maximum-1) + '...';

    return message;
};

