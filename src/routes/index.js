const {Router} = require('express');
const {
    errorHandler
} = require('./middleWares');

const Errors = require('../helpers/error')
const Logger = require('../helpers/logger');

class Routes {
    static configure(app) {
        app.use('/', require('./api/auth')(Router()));    
        Logger.info('Loading api...');
        app.use('/api', require('./api')(Router()));
        app.use(errorHandler);        
    }
}

module.exports = Routes;
