const { getFirestore } = require('firebase-admin/firestore');

class DaoProduct {

    constructor(){
        this.query = getFirestore().collection('shoppingCarts');
    }
  
    async getAll() {
        const translations = [];
        const querySnapshot = await this.query.get();
        querySnapshot.forEach(doc => {
            translations.push(doc.data());
        });
        return translations;
    }
}

module.exports = DaoProduct;
