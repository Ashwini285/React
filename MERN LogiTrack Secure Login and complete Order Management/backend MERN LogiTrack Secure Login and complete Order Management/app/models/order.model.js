module.exports = mongoose => {
    var schema = mongoose.Schema({
        customer_name: String,
        product_details: String,
    });
    schema.method("toJSON", function(){
        const { __v,_id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Order = mongoose.model("order",schema);
    return Order;
};

