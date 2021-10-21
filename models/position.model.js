const { Types, Schema, model } = require('mongoose')

const positionSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  category: { type: Types.ObjectId, ref: 'Category' },
  user: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Position', positionSchema)
