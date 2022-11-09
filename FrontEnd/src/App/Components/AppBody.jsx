import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function AppBody() {
    const [telephones, setTelephones] = useState()

    useEffect(()=>{
        async function fetchGet(){
            try{
                const réponse = await Axios.get(`/telephones`)
                // alert("Congrats, post updated")
                setTelephones(réponse.data)
                console.log(réponse.data)
                console.log(réponse.body.data)
            }catch(e){
                console.log("There was a problem or the request was cancelled.", e)
            }
        }
        fetchGet()
    }, [])

    return (
        <>
            <h1>Bonjour, APIREST-ReactJS</h1>
        </>
    )
}