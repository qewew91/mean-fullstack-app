const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const register = async (req, res) => {
  try {
    const { email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(409).json({ message: 'User already exists.' })
    }


    const genSalt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, genSalt)

    const user = new User({ email, password: hashedPassword })
    await user.save()

    res.status(201).json(user)

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again.' })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User doesn\'t exist.' })
    }

    const passwordsMatch = bcrypt.compareSync(password, user.password)
    if (!passwordsMatch) {
      return res.status(401).json({ message: 'Passwords don\'t match. Try another one.' })
    }

    const token = jwt.sign(
      { email, userId: user.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    )

    res.json({ token })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again.' })
  }
}

module.exports = {
  login,
  register
}
