const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected...');
    })
    .catch(err => console.log(err));


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});