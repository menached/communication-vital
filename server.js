const express = require('express');
const app = express();
const port = 3000;

// Serve static files (CSS)
app.use(express.static('public'));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

