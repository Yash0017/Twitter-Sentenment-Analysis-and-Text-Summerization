var express = require('express');
var app = module.exports =  express();
const output = require('./project_output.json');

app.get('/text', async (req, res) => {
   return res.status(201).json({output: output})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`You are currently using our Port ${PORT}`));