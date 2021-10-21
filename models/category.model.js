const { Types, Schema, model } = require('mongoose')

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  imageSrc: { type: String, default: '' },
  user: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Category', categorySchema)
