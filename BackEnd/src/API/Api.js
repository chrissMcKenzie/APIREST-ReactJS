const express = require('express')
const router = express.Router()
const TelephoneController = require("./MVC/Controller/TelephoneController.js")

//* Create
router.post("/telephone/create", TelephoneController.ApiPostTelephone)

//* Read All
router.get("/", TelephoneController.ApiHome)
router.get("/telephones", TelephoneController.ApiGetTelephones)
//* Read One
router.get("/telephone/:id", TelephoneController.ApiGetTelephoneById)
router.get("/telephone/:name", TelephoneController.ApiGetTelephoneByName)

//* Update
router.put("/telephone/:id", TelephoneController.ApiUpdateTelephoneById)

//* Delete
router.delete("/telephone/:id", TelephoneController.ApiDeleteTelephoneById)


module.exports = router