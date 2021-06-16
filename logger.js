const EventEmitter = require("events");

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        //Raised an event
        this.emit("messageLogged", { id: 1, url: url });
    };
}


module.exports = Logger;
