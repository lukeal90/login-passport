const { getFirestore } = require('firebase-admin/firestore');

class DaoProduct {

    constructor(){
        this.query = getFirestore().collection('products');
    }
  
    async getAll() {
        const querySnapshot = await this.query.get();
        const translations = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return translations;
    }
    async getById(productId){
        const prodRef = this.query.doc(productId);
        const doc = async () => {
            const res = await prodRef.get();
            const docData = res.data();
            return docData;
        }
        return  doc().then(res => res);
    }    

    async addProduct(newProduct){
        const ref = await query.doc();
        newProduct.id = ref.id;
        newProduct = {...newProduct};
        const data = await ref.set(newProduct).then(() => { return newProduct});
        return data;
    }    
}

module.exports = DaoProduct;
