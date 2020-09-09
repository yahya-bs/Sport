const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// code de securité de request
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
app.get('/matches', (req, res) => {
    console.log('Well received in BE');
    const matches = [
        { id: 1, teamOne: 'FCB', teamTwo: 'Madrid', scoreOne: 0, scoreTwo: 2, date: 'February, 10th, 2016', Time: '7:30 PM GMT+0' },
        { id: 2, teamOne: 'CA', teamTwo: 'EST', scoreOne: 4, scoreTwo: 1 },
        { id: 3, teamOne: 'CSS', teamTwo: 'Bizerte', scoreOne: 2, scoreTwo: 2 },
        { id: 4, teamOne: 'ATM', teamTwo: 'Bayern', scoreOne: 3, scoreTwo: 1 },
        { id: 5, teamOne: 'Sevilla', teamTwo: 'PSG', scoreOne: 0, scoreTwo: 1 }
    ];
    res.status(200).json({
        message: 'Here All Matches',
        matches: matches
    })
});
app.get('/matches/:id',(req,res) => {
    console.log('this is my id', req.params.id);
});
app.delete('/matches/:id',(req,res) => {
    console.log('Deleted Match By ID', req.params.id);
});
app.post('/matches',(req,res) => {
    console.log('Added Match');
});
module.exports = app;