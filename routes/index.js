const usersRoutes = require('../src/users/routes');

module.exports = (app) => {
    app.get("/", (req, res) => {return res.send("Hello world!")});
    app.use("/users", usersRoutes);
}