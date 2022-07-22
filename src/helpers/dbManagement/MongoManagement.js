const mongoose = require('mongoose');
const logger = require('../logger');
const {MONGO_URL} = process.env;
const { DaoProduct, DaoShoppingCart } = require('../../daos/mongoDb'); 
class MongoManagement {
    #instance;

    constructor() {
        this.configure();
    }
    configure() {
        if(!this.#instance){
            if (MONGO_URL) {
                mongoose.Promise = Promise;
                mongoose.connect(MONGO_URL, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
                mongoose.connection.once('open',
                    () => logger.info(
                        'Mongoose connected'
                    )
                );
                mongoose.connection.on('close', () => logger.info('connection closed'));
                mongoose.connection.on('error', err => logger.error(`connection error ${err}`));

                this.#instance = { DaoProduct, DaoShoppingCart };
            }
        }
    }

    instance() {
        return this.#instance;
    }
}

module.exports = MongoManagement;
