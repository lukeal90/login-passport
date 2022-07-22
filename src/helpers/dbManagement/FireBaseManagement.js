const { initializeApp, applicationDefault } = require('firebase-admin/app');
const logger = require('../logger');
const { DaoProduct, DaoShoppingCart } = require('../../daos/firebase'); 
const { getFirestore } = require('firebase-admin/firestore');

class FirestoreManagement{
    #instance;

    constructor() {
        this.configure();
    }

    configure(){
        try{
            if(!this.#instance){
                initializeApp({
                    credential: applicationDefault(),
                })

                logger.info('Firebase connected');
                this.#instance = { DaoProduct, DaoShoppingCart };
            }            
        }catch(error){
            console.log(error);
        }
    }

    instance() {
        return this.#instance;
    }
}


module.exports = FirestoreManagement;