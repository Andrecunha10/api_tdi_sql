require('dotenv').config();
const express = require('express');
const app = express();
const routes = require("./src/routes");
const PORT = process.env.PORT || 3003;


app.use(express.json());

routes(app);


app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));