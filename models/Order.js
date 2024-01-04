const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema(
    {
        userId: {type: String, requried: true},
        products: [
            {
                productId:{
                    type:String,
                },
                quantity:{
                    type: Number,
                    default:1,
                },
            },
        ],
        amount: {type: Number, requried : true},
        address: {type: Object, requried : true},
        status: {type: String, default: "panding"},     
    },
    {timestamps : true}
);

module.exports = mongoose.model("Order",OrderSchema);