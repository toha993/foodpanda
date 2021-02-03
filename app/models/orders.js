const { Double } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = mongoose.Schema({
    username: String,
    contact: String,
    items: Array,
    specialInstructions: String,
    selectedShop: String,
    selectedShop_id: String,
    favorited: Boolean,
    date: String,
    time: String,
    timeUntilArrival: String,
    secondsUntilArrival: Number,
    timeSelectedForPickup: String,
    expectedPickupTime: String,
    completed: Boolean,
    payment : Array
});

var Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;
