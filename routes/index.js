'use strict'

const express=require('express')
const api=express.Router()
const ctrlCesar=require('../controllers/index')

 api.post('/cesar',ctrlCesar.init,ctrlCesar.decriptCesar)
module.exports=api