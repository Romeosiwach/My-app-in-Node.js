const express = require('express');

var app = express();
app.get("/",function(request,response)
{
    response.send('Hi I am implementing my first Node.js Project');
});
app.listen(8080, function()
{
    console.log('Started Node.js application on port number %d',8080);
});