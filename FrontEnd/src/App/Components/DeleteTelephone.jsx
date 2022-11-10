import React, {useState} from 'react'
import Axios from 'axios'
import {TextField, Button} from '@mui/material'

export default function Telephones() {
    // const [telephones, setTelephones] = useState([])
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [type, setType] = useState()
    const [price, setPrice] = useState()
    const [rating, setRating] = useState()
    const [warranty_years, setWarranty_years] = useState()
    const [available, setAvailable] = useState(true)

    console.log(id, name, type, price, rating, warranty_years, available)

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const réponse = await Axios.post(`/telephone/create`, {id, name, type, price, rating, warranty_years, available})
           if(réponse.data){
            console.log("Telephone was created.", réponse.data)
           }else{
            console.log("Not Data.")
           }
        }catch(erreur){
            console.log("There was a problem or the request was cancelled.", erreur)
        }
    }
    const styleForm = {
        margin: "5px", width: "200px", height: "100%", backgroundColor: "white"
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{marginTop: "8%", marginLeft: "27%", backgroundColor: "darkred"}}>
                <TextField style={styleForm} type="number" label="id" variant="outlined"
                    onChange={e=> setId(e.target.value)} />
                <br />
                <TextField style={styleForm} type="text" label="name" variant="outlined"
                    onChange={(e)=> setName(e.target.value)} />
                <br />
                <TextField style={styleForm} type="text" label="type" variant="outlined"
                    onChange={(e)=> setType(e.target.value)} />
                <br />
                <TextField style={styleForm} type="number" label="price" variant="outlined"
                    onChange={(e)=> setPrice(e.target.value)} />
                <br />
                <TextField style={styleForm} type="number" label="rating" variant="outlined"
                    onChange={(e)=> setRating(e.target.value)} />
                <br />
                <TextField style={styleForm} type="number" label="warranty_years" variant="outlined"
                    onChange={(e)=> setWarranty_years(e.target.value)} />
                <br />
                <TextField style={styleForm} type="text" label="available" variant="outlined"
                    onChange={(e)=> e.target.value === "true" ? setAvailable(true) : setAvailable(false)} />
                <br />
                <Button type="submit" variant="contained" href="/telephone/create" color="success">
                    Supprimer un Téléphone
                </Button>
            </form>  
        </>
    )
}
