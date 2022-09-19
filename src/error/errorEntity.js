module.exports.BusinessError = class BusinessError extends Error {

    constructor(message, statusCode) {

        super(message);
        this.statusCode = statusCode;

    }

}