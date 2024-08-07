module.exports = mongoose => {
    var schema = mongoose.Schema({
        product_name: String,
        product_price: String,
    });
    schema.method("toJSON", function(){
        const { __v,_id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Product = mongoose.model("product",schema);
    return Product;
};

