// const TelephoneModel = require("./../Model/TelephoneModel.js")
const {Telephone, TelephonesCollection} = require("./../Model/TelephoneModel.js")

exports.ApiHome = (requête, réponse)=>{
    réponse.send(`Welcome To, APIRESTReatJS`)
}

exports.ApiPostTelephone = async (requête, réponse)=>{
    const telephone = new Telephone({
        id: requête.body.id,
        name: requête.body.name,
        type: requête.body.type,
        price: parseFloat(requête.body.price),
        rating: requête.body.rating,
        warranty_years: requête.body.warranty_years,
        available: requête.body.available
    })
    try {
        // const nouveauTelephone = await telephone.createTelephone()
        const nouveauTelephone = await TelephonesCollection.insertOne(telephone).then(resultat => {
            console.log(resultat)
        }).catch(erreur => {
            console.log(erreur)
        })
        console.log(nouveauTelephone)
        réponse.status(201).json(nouveauTelephone) // 201 = Created
    } catch (erreur) {
        réponse.status(400).json({message: erreur.message}) // 400 = Bad Request
    }
}

exports.ApiGetTelephones = async (requête, réponse)=>{
    try {
        const telephones = await TelephonesCollection.find().then(resultat => {
            console.log(resultat)
        }).catch(erreur => {
            console.log(erreur)
        })
        console.log(telephones)
        réponse.status(200).json(telephones)
    } catch (erreur) {
        réponse.status(500).json({message: erreur.message})
    }
}

exports.ApiGetTelephoneById = async (requête, réponse)=>{
    try {
        const telephoneById = await TelephonesCollection.findOne({id: requête.params.id}).then(resultat => {
            console.log(resultat)
        }).catch(erreur => {
            console.log(erreur)
        })
        console.log(telephoneById)
        réponse.status(200).json(telephoneById)
    } catch (erreur) {
        réponse.status(500).json({message: erreur.message})
    }
    // res.json("Sorry, invalid user requested.")
}

exports.ApiGetTelephoneByName = async (requête, réponse)=>{
    try {
        const telephoneByName = await TelephonesCollection.findOne({name: requête.params.name}).then(resultat => {
            console.log(resultat)
        }).catch(erreur => {
            console.log(erreur)
        })
        console.log(telephoneByName)
        réponse.status(200).json(telephoneByName)
    } catch (erreur) {
        réponse.status(500).json({message: erreur.message})
    }
}

exports.ApiUpdateTelephoneById = async(requête, réponse)=>{ // update tout les données
    try {
        const updatedTelephoneById = await TelephonesCollection.updateOne({id: requête.params.id}).then(resultat => {
            console.log(resultat)
        }).catch(erreur => {
            console.log(erreur)
        })
        console.log(updatedTelephoneById)
        réponse.status(201).json(updatedTelephoneById) // 201 = Created
    } catch (erreur) {
        réponse.status(400).json({message: erreur.message}) // 400 = Bad Request
    }
}

exports.ApiDeleteTelephoneById = async (requête, réponse)=>{
    try {
        const DeletedTelephoneById = await TelephonesCollection.deleteOne({id: requête.params.id}).then(resultat => {
            console.log(resultat)
        }).catch(erreur => {
            console.log(erreur)
        })
        console.log(DeletedTelephoneById)
        réponse.json(DeletedTelephoneById) // 201 = Created
        // await réponse.téléphone.remove()
        réponse.json({message: "Suppréssion du Téléphone"})
    } catch (erreur) {
        réponse.status(500).json({message: erreur.message})
    }
}