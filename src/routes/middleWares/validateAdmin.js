module.exports = async (req, res, next) => {
    
    const path = req.originalUrl;
    const method = req.method;    
    let ADMIN = true;
    
    if (!ADMIN) {
        return res.status(401).send({
            error: -1,
            message: `ruta ${path} método ${method} no autorizada`,
        });
    }
    next();
};