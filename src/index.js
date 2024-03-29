const path = require('path');
const loadedEnv = require('dotenv').config({
    path: path.join(__dirname, '../.env')
});
if(loadedEnv.error) throw new Error("No .env file found.");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { errors } = require('celebrate');
const { setupWebSocket } = require('./WebSocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server)

mongoose.connect(process.env.MONGO_DB_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({
    origin: process.env.INHOME_URL,
    credentials: true,
}));

app.use(express.json());
app.use(routes);
app.use(errors());


server.listen(process.env.PORT || 3000);
