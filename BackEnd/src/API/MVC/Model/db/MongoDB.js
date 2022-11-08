// MongoDB.js, ApiDB.js ou ApiData.js Connexion
const dotenv = require('dotenv')
dotenv.config()
const {MongoClient} = require('mongodb')
const client = new MongoClient(process.env.CONNEXION_APIRESTREACTJS)

async function connexion(){
    try {
        await client.connect()
        console.log("Connecté à MongoDB")
    } catch (erreur) {
        console.error(erreur)
    }
}
connexion()

module.exports = client