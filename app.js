const os = require("os");
const fs = require("fs");

//#region server http module
const http = require("http");
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('Hello World');
    res.end();
  }

  if(req.url === '/api/courses'){
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }

  if(req.url === '/api/courses.json'){
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(202);
    res.write(JSON.stringify({ msg: "Here are courses!" }));
    res.end();
  }

  
});
const port = 3000;
//#endregion

//#region os module test
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var usedMemory = totalMemory - freeMemory;
console.log(
    "Total memory : " + totalMemory,
    "Free Memory : " + freeMemory,
    "Used Memory : " + usedMemory,
    "\n"
);
//#endregion

//#region file system module test
const files = fs.readdirSync("./");
console.log(files);
fs.readdir("./", function (err, files) {
    if (err) console.log("Error", err);
    else console.log("Result", files);
});
//#endregion

//#region events module
const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messageLogged", (arg) => {
    console.log("Listener called", arg);
});

logger.log("hello message");

server.on("connection", (socket) => {
    console.log("New connection");
});

server.listen(port);
console.log("Server is listening on port " + port + " !");

//Make a noise, produce - singalling

//#endregion
