const TelephoneModel = require("./../Model/TelephoneModel.js")

exports.FindById = async function(requête, réponse){
    try {
        // await TelephoneModel.FindById(requête.params.id)
        TelephonesCollection.findOne({id: requête.params.id})
    } catch {
        res.json("Sorry, invalid user requested.")
    }
}