const product = require("../routes/Product")


const products = (req,res) =>{
    res.send(product)

}

module.exports = {products}
