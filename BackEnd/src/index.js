const express = require('express')
const Api = express()
const ApiRouter = require("./Api/Api.js")
const PORT = 8081

// DB.js Connexion
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


Api.use(express.json())
Api.use("/", ApiRouter)
Api.listen(PORT, ()=> console.log(`ExpressJS sur http://localhost:${PORT}`))

// Api.get("/", (requête, réponse)=>{
//     réponse.status(200).send({
//         tshirt: 'T',
//         size: 'large'
//     })
// })

// Api.post("/telephone/:id", (requête, réponse)=>{
//     const {id} = requête.params
//     const {logo} = requête.body

//     if(!logo){
//         réponse.status(418).send({message: "We need a log!"})
//     }

//     réponse.send({
//         tshirt: `Z with your ${logo} and ID of ${id}`
//     })

// })

