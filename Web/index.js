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
<<<<<<< HEAD:Web/index.js
app.get('/',(req, res) => {
    res.sendFile(`${base}/index.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
=======
//app.get();

//test
>>>>>>> aca7b8cb4f4ddb83eb1ae5cc754c467b8a3f9a98:index.js
