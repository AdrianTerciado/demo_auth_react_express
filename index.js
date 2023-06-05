require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
require('./config/mongoConnection');

const usersRouter = require('./routes/users');
const resourcesRouter = require('./routes/resources');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/test', (req, res) => { res.status(200).json({ status: "connected" }) })
app.use('/api/users', usersRouter);
app.use('/api/resources', resourcesRouter);


app.get("*", (req, res) => { res.sendFile(path.join(__dirname + '/client/build/index.html')) });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});