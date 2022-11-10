import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function GetTelephones() {
    const [telephones, setTelephones] = useState()

    useEffect(()=>{
        async function fetchGet(){
            try{
                const réponse = await Axios.get(`/telephones`)
                // alert("Congrats, post updated")
                setTelephones(réponse.data)
                console.log(réponse.data)
            }catch(e){
                console.log("There was a problem or the request was cancelled.", e)
            }
        }
        fetchGet()
    }, [telephones])

    const Telephones =  [
        { id: 1, name: "AC1 Phone1", type: "phone", price: 200.05, rating: 3.8, warranty_years: 1, available: true },
        { id: 2, name: "AC2 Phone2", type: "phone", price: 147.21, rating: 1, warranty_years: 3, available: false },
        { id: 3, name: "AC3 Phone3", type: "phone", price: 150, rating: 2, warranty_years: 1, available: true },
        { id: 4, name: "AC4 Phone4", type: "phone", price: 50.20, rating: 3, warranty_years: 2, available: true }
    ]

    return (
        <>
            <form style={{marginTop: "8%", marginLeft: "13%", backgroundColor: "mediumblue", color: "white"}}>
            <h1>Liste des Téléphones {/* <i>(Ne proviennent pas de la base de données)</i> */}</h1>

                {/* {Telephones.forEach(telephone =>{
                    return <li key={telephone.id}>{telephone}</li>
                })} */}
            </form>
        </>
    )
}
