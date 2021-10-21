const { Router } = require('express')
const categoryController = require('../controllers/category.controller')

const router = Router()

router.route('/')
  .get(categoryController.getAll)
  .post(categoryController.create)
router.route('/:id')
  .get(categoryController.getById)
  .patch(categoryController.update)
  .delete(categoryController.remove)

module.exports = router
