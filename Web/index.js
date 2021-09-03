// Setting up Website Backend.
const express = require('express');
const app = express();
const port = 3000;
const base = `${__dirname}/`;
// Middleware for Webhosting.
app.use(express.static(`${base}`));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
});
// Redirect
app.get('/',(req, res) => {
    res.sendFile(`${base}/index.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
