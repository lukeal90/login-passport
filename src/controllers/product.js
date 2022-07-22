const { BAD_REQUEST } = require('../helpers/error')
const _ = require('lodash');
const { ProductService } = require('../services');

class ProductController {

    static async getAll(req, res) {
        try {
            let response = await ProductService.getAll();
            res.send(response);
        } catch (error) {
            return [];
        }
    }

    static async prueba(req, res) {
        console.log("entro")
        ProductService.getAll();
    }
    static async getByIdOrAll(req, res) {
        try {
            let response;

            if(_.isNil(req.params.id)){
                response = await ProductService.getAll();
            }else{
                response = await ProductService.getById(req.params.id);
            }
            
            res.send(response);
        } catch (error) {
            console.log("Algo salio mal al obtener los productos : " + error.message);
        }
    }

    static async addProduct(req, res) {
        try {
            let response = await ProductService.addProduct(req.body);
            res.send(response);
        } catch (error) {
            console.log("Algo salio mal al agregar los productos : " + error.message);
        }
    }
    
    static async updateProduct(req, res) {
        try {
            let response = await ProductService.updateProduct(req.body, req.params.id);
            res.send(response);
        } catch (error) {
            console.log("Algo salio mal al obtener los productos : " + error.message);
        }
    }
    
    static async deleteProduct(req, res) {
        try {
            let response = await ProductService.deleteProduct(req.params.id);
            res.send(response);
        } catch (error) {
            console.log("Algo salio mal al obtener los productos : " + error.message);
        }
    }    
}

module.exports = ProductController;