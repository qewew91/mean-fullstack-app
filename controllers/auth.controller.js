const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

const register = async (req, res) => {
  try {
    const { email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(409).json({ message: 'User already exists' })
    }


    const genSalt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, genSalt)

    const user = new User({ email, password: hashedPassword })
    await user.save()

    res.status(201).json(user)

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' })
  }
}

module.exports = {
  login,
  register
}
