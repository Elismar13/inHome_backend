const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

mongoose.connect("mongodb+srv://knigth11:knigth11@cluster0-l6ync.mongodb.net/test?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
