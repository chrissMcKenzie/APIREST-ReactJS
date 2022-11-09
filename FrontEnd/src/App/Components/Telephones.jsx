import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function Telephones() {
    const [telephones, setTelephones] = useState([])

    useEffect(()=>{
        const ourRequest = Axios.CancelToken.source()

        async function fetchGet(){
            try{
                const réponse = await Axios.get(`/telephones`)
                // alert("Congrats, post updated")
                setTelephones(réponse.data)
                // console.log(réponse.data)
            }catch(e){
                console.log("There was a problem or the request was cancelled.", e)
            }
        }
        fetchGet()
        return () => {
            ourRequest.cancel()
        }
    }, [])

    return (
        <>
            <h1>Liste de Téléphones</h1>
            {telephones.map(telephone =>{
               return <li>{telephone}</li>
            })}
        </>
    )
}
