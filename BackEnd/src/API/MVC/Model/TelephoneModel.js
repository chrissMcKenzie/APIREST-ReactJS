const TelephonesCollection = require('./db/MongoDB.js').db().collection("telephones")

class Telephone {
    constructor(_data){
        this.data = _data
        console.log(this.data)
    }

    createTelephone(){
        TelephonesCollection.insertOne(this.data)
    }

    readTelephones(){
        TelephonesCollection.find({})
        // TelephonesCollection.findOne({id: idTelephone}) 
    }

}

module.exports = {TelephonesCollection, Telephone}