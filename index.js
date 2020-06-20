const express = require('express')
const carsRoute = require('./cars/cars-router')
const db = require('./data/config')


const server = express()
const port = 5000

server.use(express.json())

server.use('/cars', carsRoute)

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})