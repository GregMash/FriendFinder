//====================== Dependencies =============================
const express = require('express');

//====================== Constants =============================
const app = express();
const PORT = process.env.PORT || 8080;

//====================== Data Parsing =============================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app/public'));

//====================== Routing =============================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//====================== Listener =============================
app.listen(PORT, () => {
    console.log(`App listening on Port: http://localhost:${PORT}`);
});