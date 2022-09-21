const usersRoutes = require('../src/users/routes');

module.exports = (app) => {
    app.use("/users", usersRoutes);
    app.use((req, res) => {
        res.status(404).json({
            message: 'Request not found!'
        })
    });
}