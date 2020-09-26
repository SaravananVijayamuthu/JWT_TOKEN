require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require("./config");
const routes = require("./routes");

require("./models");
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

require("./services/passport");

routes(app);

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});