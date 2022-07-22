const { MAX_TIME }= process.env;
class DaoCrudMongo{

    constructor(model){
        this.model = model;
    }

    async getAll() {
        return await this.model.find();
    }

    async getById(id) {
        return await this.model.findById(id);
    }    

    async saveOne(params, object) {
            return this.model
                .updateOne(params || { _id: object._id }, object, { upsert: true })
                .maxTime(MAX_TIME)
                .lean()
                .exec();
    }    
    
    async updateById(id, object){
        const response = await this.model.findOneAndUpdate({ _id: id },object);
        return response;
    }

    async delete(id) {
        return this.model.findOneAndDelete({ _id: id });
    }        
}

module.exports = DaoCrudMongo;