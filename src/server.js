import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from './components/App';

const app = express();

app.get('/', function (request, response) {
    const html = renderToString(<App />);
    response.send(html)
});

app.listen(3000, function () {
    console.log("Server started!")
});

