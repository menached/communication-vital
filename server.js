const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));
app.use(express.json()); // For parsing application/json

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Endpoint to handle subscription
app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    if (email) {
        fs.appendFile('subscribers.txt', `${email}\n`, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving email.');
            }
            res.send('Email subscribed successfully!');
        });
    } else {
        res.status(400).send('Invalid email.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

