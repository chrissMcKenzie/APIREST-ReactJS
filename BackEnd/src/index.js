const express = require('express')
const Api = express()
const ApiRouter = require("./Api/Api.js")
const {Client} = require("./Api/MVC/Model/db/MongoDB.js")
const PORT = 8081
const cors = require('cors')

Api.use(express.urlencoded({extended: false}))
Api.use(express.json())
Api.use(cors())
Api.use((requête, réponse, next)=>{
    réponse.setHeader('Access-Control-Allow-Origin', "*")
    réponse.setHeader('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE")
    réponse.setHeader('Access-Control-Allow-Headers', "Content-Type")
    next()
})
Api.use("/", ApiRouter)

Api.listen(PORT, ()=> console.log(`ExpressJS sur http://localhost:${PORT}`))