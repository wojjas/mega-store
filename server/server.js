/**
 *  The server
 */
const express = require('express');

const app = express();

const PRODUCTS = [
    {id: 0, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {id: 1, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {id: 2, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {id: 3, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {id: 4, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {id: 5, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/api/data', (req, res) => {
    "use strict";
    console.log(`Received ${req.method} request on endpoint ${req.url}`);

    res.json(PRODUCTS);
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
