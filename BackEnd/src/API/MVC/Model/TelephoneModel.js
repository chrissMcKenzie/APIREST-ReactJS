const TelephonesCollection = require('./db/MongoDB.js').db().collection("telephones")

class Telephone {
    constructor(_data){
        this.data = _data
    }

    createTelephone(){
        TelephonesCollection.insertOne(this.data)
    }

    // async readTelephone(){
    //     try {
    //         const telephones = TelephonesCollection.findById()
    //     } catch (error) {
            
    //     }
    // }
}

module.exports = {TelephonesCollection, Telephone}