const express = require('express');
const router = require('./../controller/router');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

app.set('view engine', 'ejs');

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT || 3000, () => console.log(`server started: [http://localhost:${PORT}]`));
