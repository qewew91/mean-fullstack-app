const { Router } = require('express')
const orderController = require('../controllers/order.controller')

const router = Router()

router.route('/')
  .get(orderController.getAll)
  .post(orderController.create)

module.exports = router
