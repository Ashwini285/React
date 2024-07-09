const db = require("../models");
const Order = db.orders;
exports.create = (req, res ) => {
    const order = new Order({
        customer_name: req.body.customer_name,
        product_details: req.body.product_details
    });

    order
    .save(order)
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
            msg:
                err.msg || "Error while creating order"
        });
    });
};

exports.findAll = (req,res) => {
    Order.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    msg:
                        err.msg || "Error while retrieving Order"
                });
            });
}

// Fetch record by Id
exports.findOne = (req,res) => {
    const id = req.params.id;
    Order.findById(id).then(
        data => {
            if( !data ){
                res.status(404).send({msg:"Order Not Found"})
            }
            else {
                res.send(data);
            }
        }
    ).catch(err => {
        res.status(500)
        .send({msg:"Error retrieving Order with id=" + id});
    });
};

// Update record by Id
exports.updateOrder = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            msg: "Order to update can not be empty !"
        });
    }
    const id = req.params.id;
    Order.findByIdAndUpdate({ _id:id}, req.body,{ useFindAndModify: true })
    .then( data => {
        if(!data){
            res.status(404).send({
                msg: `Cannot update Order with id=${id}.!`
            });
        } else {
            res.send({msg: "Order updated Successfully"});
        }

    })
    .catch(err => {
        res.status(500).send({
            msg: "Error updating Order with id=" + id
        });
    });
};
// Delete Record by Id
exports.deleteOrder = (req,res) => {
    const id = req.params.id;
    Order.findByIdAndDelete({_id: id}, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({
                msg: `cannot delete Order with id=${id}`
            })
        } else {
            res.send({
                msg:"Order deleted Successfully"
            });
        }      
    })
    .catch(err => {
        res.status(500).send({
            msg: "Eroor Deleting Order with id=" + id
        });
    })
}