'use strict'

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const router=require('./routes/index')

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use((err, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETED,DELETE,OPTIONS')
    res.header('Allow', 'GET,POST,PUT,DELETED,DELETE,OPTIONS')
  
    next()
  }) 

  app.use(bodyParser.json())
  app.use('/api',router)

module.exports=app