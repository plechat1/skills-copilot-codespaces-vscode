// Create web server
// Use express framework
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const app = express();

// Define port
const PORT = 3000;

// Define data file
const DATA_FILE = 'data/comments.json';

// Define data
let comments = [];

// Read data file
fs.readFile(DATA_FILE, (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    comments = JSON.parse(data);
});

// Set up middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.get('/api/comments', (req, res) => {
    res.send(comments);
});

app.post('/api/comments', (req, res) => {
    const comment = {
        id: Date.now(),