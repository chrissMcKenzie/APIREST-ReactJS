import React, {useEffect} from 'react'
import {Button} from '@mui/material'

export default function AppHome() {
    return (
        <main style={{paddingLeft: "30%", paddingTop: "10%", paddingBottom: "5%", backgroundColor: "black", height: "100%", color:"white"}}>
            <section>
                <div style={{marginLeft: "1.5%"}}>
                    <h1>Application Web (CRUD)</h1>
                </div>
                <Button type="submit" variant="contained" href="/telephone/create">
                    <a style={{ color: "black"}} href="https://github.com/chrissMcKenzie/APIREST-ReactJS">https://github.com/chrissMcKenzie/APIREST-ReactJS</a>
                </Button>
            </section>
        </main>
    )
}