const express = require('express')
const router = express.Router()

//* Create
router.post("/", (requête, réponse)=>{
    
})
//* Read All
router.get("/", (requête, réponse)=>{
    réponse.send(`Bonjour, APIRESTReatJS`)
})
router.get("/telephones", (requête, réponse)=>{
    réponse.send(`Liste des téléphones`)
})
//* Read One
router.get("/telephone/:id", (requête, réponse)=>{
    réponse.send(requête.params.id)
})
//* Update
// router.put("/:id", (requête, réponse)=>{ // update tout les données
    
// })
router.patch("/:id", (requête, réponse)=>{ // update les données qu'on a passé
    
})
//* Delete
router.delete("/:id", (requête, réponse)=>{
    
})


module.exports = router