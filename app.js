const express = require('express');
resolve = require('path').resolve

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to Revisoro repository");
});

app.get('/download', (req, res)=>{
    res.status(200);
    res.sendFile(resolve("./cloud/core.jar"))
});

app.get('/packages', (req, res)=>{
    res.status(200);

    res.json({
        version: 1,
        download: "/download",
        structures: []
    });
}); 

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and app is listening on port " + PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);