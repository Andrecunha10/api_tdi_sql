module.exports = (req, res, next) => {
    const user = req.user;

    if (user.type !== 1){
        return res.status(401).send("You don't have authorization to execute this service.");
    }

    return next();
}