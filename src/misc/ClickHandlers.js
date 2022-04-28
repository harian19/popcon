var newRelicLogger = function (msg) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
    };
    
    fetch('https://log-api.newrelic.com/log/v1', requestOptions)
        .then(response => response.json());

    console.log("Logged on new relic server" + msg);
}

var consoleLogger = function (msg) {
    console.log("Logger 2 - visited: " + msg);
}

export { consoleLogger, newRelicLogger };
