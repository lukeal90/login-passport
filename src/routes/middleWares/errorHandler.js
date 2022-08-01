const Logger = require('../../helpers/logger');

module.exports = (err, req, res, next) => {
    if (err) {
        Logger.warn(err.message)
        return res.status(err.status || 403).send({
            message: err.message,
            errors: err.errors
        });
    }
    next();
};
