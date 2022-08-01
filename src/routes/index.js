const {Router} = require('express');
const {
    errorHandler
} = require('./middleWares');

const Errors = require('../helpers/error')
const Logger = require('../helpers/logger');
const api = require('./api');

class Routes {
    static configure(app) {
        app.use('/', require('./api/auth')(Router()));    
        Logger.info('Loading api...');
        app.use('/api', require('./api')(Router()));
        app.use(errorHandler);   
        app.use('*', (req, res) => Errors.send404(req, res));              
    }
}

module.exports = Routes;
