const express = require('express')
const router = express.Router()
const {TelephonesCollection, Telephone} = require("./MVC/Model/TelephoneModel.js")

//* Create
router.post("/", (requête, réponse)=>{
    
})

router.post("/telephones", async (requête, réponse)=>{
    const telephone = new Telephone({
        id: requête.body.id,
        name: requête.body.name,
        type: requête.body.type,
        price: requête.body.price,
        rating: requête.body.rating,
        warranty_years: requête.body.warranty_years,
        available: requête.body.available
    })
    // console.log(telephone)
    try {
        const nouveauTelephone = await telephone.createTelephone()
        réponse.status(201).json(nouveauTelephone) // 201 = Created
    } catch (erreur) {
        réponse.status(400).json({message: erreur.message}) // 400 = Bad Request
    }
})

//* Read All
router.get("/", (requête, réponse)=>{
    réponse.send(`Bonjour, APIRESTReatJS`)
})
router.get("/telephones", async (requête, réponse)=>{
    try {
        // réponse.send(`Liste des téléphones`)
        const telephones = await TelephonesCollection.find({})
        réponse.json(telephones)
    } catch (erreur) {
        réponse.status(500).json({message: erreur.message})
    }
})

//* Read One
router.get("/telephone/:id", getTelephone, (requête, réponse)=>{
    // réponse.send(requête.params.id)
    // réponse.send(réponse.téléphone.name)
    // réponse.send(réponse.téléphone)
    réponse.json(réponse.téléphone)
})

//* Update
// router.put("/telephone/:id", (requête, réponse)=>{ // update tout les données
    
// })
router.patch("/telephone/:id", getTelephone, async(requête, réponse)=>{ // update les données qu'on a passé
    if(requête.body.name != null){
        réponse.téléphone.name = requête.body.name
    }

    if(requête.body.type != null){
        réponse.téléphone.type = requête.body.type
    }

    try {
        const updateTelephone = await TelephonesCollection.createTelephone()
        réponse.json(updateTelephone) // 201 = Created
    } catch (erreur) {
        réponse.status(400).json({message: erreur.message}) // 400 = Bad Request
    }
})

//* Delete
router.delete("/telephone/:id", getTelephone, async (requête, réponse)=>{
    try {
        await réponse.téléphone.remove()
        réponse.json({message: "Suppréssion du Téléphone"})
    } catch (erreur) {
        réponse.status(500).json({message: erreur.message})
    }
})


async function getTelephone(requête, réponse, fonctionSuivante){
    let téléphone
    try {
        téléphone = await TelephonesCollection.findOne({id: requête.params.id})
        if(téléphone == null){
            return réponse.status(404).json({message: "Ne peut trouver le téléphone"})
        }
    } catch (erreur) {
        return réponse.status(500).json({message: erreur.message})
    }

    réponse.téléphone = téléphone
    fonctionSuivante()
}

module.exports = router