const { Router } = require('express')
const usersRoutes = require('../routes/usersRoutes')
// const productsRoutes = require('../routes/productsRoutes')
// const ordersRoutes = require('../routes/ordersRoutes')

const router = Router()

router.use('/usersRoutes', usersRoutes)
// router.use('/productsRoutes', productsRoutes)
// router.use('/ordersRoutes', ordersRoutes)

module.exports = router
