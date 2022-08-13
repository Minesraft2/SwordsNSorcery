const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const root = path.join(__dirname, 'public');
app.use(express.static(root));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log("server started")
});