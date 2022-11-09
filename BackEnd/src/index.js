const express = require('express')
const Api = express()
const ApiRouter = require("./Api/Api.js")
const {Client} = require("./Api/MVC/Model/db/MongoDB.js")
const PORT = 8081
const cors = require('cors')

Api.use(express.json())
Api.use(cors())

Api.use("/", ApiRouter)

Api.listen(PORT, ()=> console.log(`ExpressJS sur http://localhost:${PORT}`))