import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function Telephones() {
    const [telephones, setTelephones] = useState([])

    useEffect(()=>{

        async function fetchPost(){
            try{
                Axios.post(`/telephone/create`, {id: 5, name: "AC4 Phone4", type: "phone", price: 50.20, rating: 3, warranty_years: 2, available: true})
                console.log("Telephone was created.")
            }catch(e){
                console.log("There was a problem or the request was cancelled.", e)
            }
        }
        fetchPost()
    }, [])

    return (
        <>
            <h1>Ajouter un Téléphone</h1>
        </>
    )
}
