declare var require : any;
declare var __dirname : any;

let express = require('express')
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

console.log("starte Server...");

app.use(express.static(__dirname + '/client/presentation/'));

app.use(function(req, res, next)
{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/diagrams", function(req, res)
{
  res.send(`[{"name": "Diagram 1"}, {"name": "Diagram 2"}, {"name": "Diagram 3"}]`);
});

http.listen(3000, function ()
{
    console.log('listening on *:3000');
});
