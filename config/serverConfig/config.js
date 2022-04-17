exports.serverConfig = {
    ip: "127.0.0.1",
    port : 17200
}
exports.corsOptions = {
    "origin": "*",//如何識別來源
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  };
