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
    }, [])

    return (
        <>
            <form style={{marginTop: "8%", marginLeft: "13%", backgroundColor: "mediumblue", color: "white"}}>
            <h1>Liste des Téléphones</h1>
                {/* {telephones.map(telephone =>{
                    return <li>{telephone}</li>
                })} */}
            </form>
        </>
    )
}
