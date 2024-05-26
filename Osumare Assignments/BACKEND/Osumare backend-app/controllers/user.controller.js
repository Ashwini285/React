const db = require("../models");
const User = db.users;
//saving user into mongodb
exports.create = (req, res ) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user
        .save(user)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                msg:
                    err.msg || "Error while creating User"
            });
        });
};

exports.findAll = (req,res) => {
    User.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    msg:
                        err.msg || "Error while retrieving User"
                });
            });
}

// Fetch record by Id
exports.findOne = (req,res) => {
    const id = req.params.id;
    User.findById(id).then(
        data => {
            if( !data ){
                res.status(404).send({msg:"User Not Found"})
            }
            else {
                res.send(data);
            }
        }
    ).catch(err => {
        res.status(500)
        .send({msg:"Error retrieving User with id=" + id});
    });
};

// Update record by Id
exports.updateUser = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            msg: "User to update can not be empty !"
        });
    }
    const id = req.params.id;
    User.findByIdAndUpdate({ _id:id}, req.body,{ useFindAndModify: true })
    .then( data => {
        if(!data){
            res.status(404).send({
                msg: `Cannot update User with id=${id}.!`
            });
        } else {
            res.send({msg: "User updated Successfully"});
        }

    })
    .catch(err => {
        res.status(500).send({
            msg: "Error updating User with id=" + id
        });
    });
};
// Delete Record by Id
exports.deleteUser = (req,res) => {
    const id = req.params.id;
    User.findByIdAndDelete({_id: id}, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({
                msg: `cannot delete User with id=${id}`
            })
        } else {
            res.send({
                msg:"User deleted Successfully"
            });
        }      
    })
    .catch(err => {
        res.status(500).send({
            msg: "Eroor Deleting User with id=" + id
        });
    })
}