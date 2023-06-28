const Car = require('./cars-model')
const router = require('express').Router()

// router.get('/', async (req, res, next) => {
//     const cars = await Car.getAll()
//     res.status(200).json(cars)
// })

router.get('/:id', async (req, res, next) => {
    console.log('get id ROUTER')
})

router.post('/post', async (req, res, next) => {
    console.log('psot ROUTER')
})

module.exports = router