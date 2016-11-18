/**
 *  The server
 */
const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/api/data', (req, res) => {
    "use strict";
    console.log(`Received ${req.method} request on endpoint ${req.url}`);

    res.json({name:'Wojtek', length:'185'});
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
