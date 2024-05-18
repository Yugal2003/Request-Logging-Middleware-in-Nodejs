const express = require("express");
const morgan = require('morgan');

const app = express();

const requestLoggingMiddleware = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const ip = req.ip;
    const timestamp = new Date().toISOString();
    const Author = "Yugal";

    console.log(`
    TimeStamp : [${timestamp}] 
    Method : ${method} 
    URL : ${url} 
    IP : ${ip}
    Author : ${Author}`);
    next();
}

app.use(requestLoggingMiddleware);

app.use(morgan(`dev`));

app.get("/request/logging" , (req,res) => {
    res.send({
        message : "Request Logging Middleware SuccessFully Run"
    })
})

app.listen(7200 , () => {
    console.log("Server Run On 7200");
})