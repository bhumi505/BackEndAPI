const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const corsOptions = {
	credentials: true, 
  origin: true,
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(require("./protected/middlewares/SetupMiddleware"));

const autoRoutes = require('express-auto-routes')(app);
autoRoutes(path.join(__dirname, './protected/controllers'));

app.use(require("./protected/middlewares/basic/404Middleware"));
app.use(require("./protected/middlewares/basic/ErrorMiddleware"));

app.listen(3000, function () {
  console.log('App started on port 3000!');
});

module.exports = app;