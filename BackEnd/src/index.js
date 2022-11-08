const express = require('express')
const Api = express()
const ApiRouter = require("./Api/Api.js")
const MongoDB = require("./Api/MVC/Model/db/MongoDB.js")
const PORT = 8081

Api.use(express.json())
Api.use("/", ApiRouter)
Api.listen(PORT, ()=> console.log(`ExpressJS sur http://localhost:${PORT}`))



