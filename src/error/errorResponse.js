module.exports = (error, res) => {
    return res.status(error.statusCode || 500).send(error.message)
}