module.exports = mongoose => {
    var schema = mongoose.Schema({
        email: String,
        password: String,
    });
    schema.method("toJSON", function(){
        const { __v,_id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user",schema);
    return User;
};

