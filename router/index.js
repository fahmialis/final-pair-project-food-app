const express = require('express')
const router = express.Router()
const MenuRouter = require('./menu')
const CustomerRouter = require('./customer')


router.get('/', (req,res) =>{
    res.send('ini main page')
})







module.exports = router