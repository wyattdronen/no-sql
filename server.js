const express = require('express');
const routes = require('./routes');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});