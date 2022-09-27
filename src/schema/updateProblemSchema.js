const joi = require('joi');


module.exports = (req, res, next) => {
    const body = req.body;

    const problemSchema = joi.object({
        name: joi.string().min(3).max(20),
        shortDescription: joi.string().min(5).max(50),
        description: joi.string().min(10),
        departament: joi.string()      
    });

    const schemaResult = problemSchema.validate(body);

    if(schemaResult.error){
        const detailsMessage = schemaResult.error.details.map(item => {
            return item.message
        })

        return res.status(400).json({
            message: detailsMessage.join(';')
        })
    }

    return next()
}
