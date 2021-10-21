require('dotenv').config()

const app = require('./app')
const mongoose = require('mongoose')
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
  } catch (e) {
    console.error('Server error', e.message)
  }
}

start()
