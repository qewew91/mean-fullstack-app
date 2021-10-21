const { Router } = require('express')
const analyticsController = require('../controllers/analytics.controller')

const router = Router()

router.get('/', analyticsController.analytics)
router.get('/overview', analyticsController.overview)

module.exports = router
