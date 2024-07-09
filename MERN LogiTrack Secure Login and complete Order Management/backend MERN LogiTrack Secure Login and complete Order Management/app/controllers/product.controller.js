const db = require("../models");
const Product = db.products;
exports.create = (req, res ) => {
    const product = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price
    });

    product
    .save(product)
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
            msg:
                err.msg || "Error while creating Product"
        });
    });
};

exports.findAll = (req,res) => {
    Product.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    msg:
                        err.msg || "Error while retrieving Product"
                });
            });
}

// Fetch record by Id
exports.findOne = (req,res) => {
    const id = req.params.id;
    Product.findById(id).then(
        data => {
            if( !data ){
                res.status(404).send({msg:"Product Not Found"})
            }
            else {
                res.send(data);
            }
        }
    ).catch(err => {
        res.status(500)
        .send({msg:"Error retrieving Product with id=" + id});
    });
};

// Update record by Id
exports.updateProduct = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            msg: "Product to update can not be empty !"
        });
    }
    const id = req.params.id;
    Product.findByIdAndUpdate({ _id:id}, req.body,{ useFindAndModify: true })
    .then( data => {
        if(!data){
            res.status(404).send({
                msg: `Cannot update Product with id=${id}.!`
            });
        } else {
            res.send({msg: "Product updated Successfully"});
        }

    })
    .catch(err => {
        res.status(500).send({
            msg: "Error updating Product with id=" + id
        });
    });
};
// Delete Record by Id
exports.deleteProduct = (req,res) => {
    const id = req.params.id;
    Product.findByIdAndDelete({_id: id}, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({
                msg: `cannot delete Product with id=${id}`
            })
        } else {
            res.send({
                msg:"Product deleted Successfully"
            });
        }      
    })
    .catch(err => {
        res.status(500).send({
            msg: "Eroor Deleting Product with id=" + id
        });
    })
}