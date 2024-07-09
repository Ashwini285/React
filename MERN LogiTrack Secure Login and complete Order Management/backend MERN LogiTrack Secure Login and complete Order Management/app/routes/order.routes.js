module.exports = app => {
    const orders = require("../controllers/order.controller.js");
    var router = require("express").Router();
    router.post("/",orders.create);
    router.get("/",orders.findAll);
    router.get("/:id",orders.findOne);
    router.put("/:id",orders.updateOrder);
    router.delete("/:id",orders.deleteOrder);
    app.use("/api/orders", router);
}