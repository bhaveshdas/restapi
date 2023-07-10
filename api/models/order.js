// const Sequelize = require('sequelize');

// const sequelize = require('../middleware/database');

// const Order = sequelize.define('order', {
//   _id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   }
// });

// module.exports = Order;

const Sequelize = require('sequelize');

const sequelize = require('../middleware/database');

const Order = sequelize.define('orderItem', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = Order;

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const orderSchema = new Schema({
//     product:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'Product', 
//         required: true
//     },
//     quantity: {
//         type: Number,
//         default:1
//     }

// });

// module.exports = mongoose.model('Order', orderSchema);