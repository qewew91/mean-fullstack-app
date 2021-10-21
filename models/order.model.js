const { Types, Schema, model } = require('mongoose')

const orderSchema = new Schema({
  date: { type: Date, default: Date.now },
  order: { type: Number, required: true },
  list: [
    {
      name: { type: String },
      quantity: { type: Number },
      cost: { type: Number }
    }
  ],
  user: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Order', orderSchema)
