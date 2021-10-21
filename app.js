const express = require('express')
const passport = require('passport')

const app = express()

app.use(passport.initialize())
app.use(require('morgan')('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('cors')())

app.use('/api/analytics', require('./routes/analytics.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/order', require('./routes/order.routes'))
app.use('api/position', require('./routes/position.routes'))

module.exports = app
