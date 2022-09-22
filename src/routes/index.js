const usersRoutes = require('../users/routes');
const suggestionsRoutes = require('../suggestions/routes');

module.exports = (app) => {
    app.use("/users", usersRoutes);
    app.use('/suggestions', suggestionsRoutes)
    app.use((req, res) => {
        res.status(404).json({
            message: 'Request not found!'
        })
    });
}