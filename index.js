const { resolve } = require('path');
const express = require('express');
const { readFileSync } = require('fs');
const { h } = require('preact');
const renderToString = require('preact-render-to-string');

const indexHtml = readFileSync(resolve(__dirname, 'index.html'), 'utf8');

const App = h('h1', { className: 'server', id: 'id_server' }, 'SERVER');

const port = 3000;

const app = express();

app.get('*', (req, res) => {
    res.send(indexHtml.replace('<!--html-->', renderToString(App)));
});

app.listen(port, () => {
    console.log('starting', `listens on port ${port}.`);
});
