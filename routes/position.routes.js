const { Router } = require('express')
const positionController = require('../controllers/position.controller')

const router = Router()

router.post('/', positionController.create)
router.get('/:categoryId', positionController.getByCategoryId)
router.route('/:id')
  .patch(positionController.update)
  .delete(positionController.remove)

module.exports = router
