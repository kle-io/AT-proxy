const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public/')));


// app.get('/0.bundle.js', )
app.listen(PORT, () => console.log(`listening in on port ${PORT}`))
