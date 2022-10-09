module.exports = (error, res) => {
    return res.status(error.statusCode || 500).json(error.message)
}