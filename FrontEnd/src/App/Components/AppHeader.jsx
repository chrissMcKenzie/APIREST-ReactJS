import React from 'react'
import {Stack, Button} from '@mui/material'


export default function AppHeader() {
  return (
    <header style={{backgroundColor: "white"}}>
        <section>
          <div className="container d-flex flex-column flex-md-row align-items-center p-3">
              <h4>
                <a href="/"> APIREST-ReactJS </a>
                
              </h4>
              
          </div>
          <div>
            <Stack spacing={2} direction="row">
              <Button href="/telephone/create" variant="contained" color='primary'>Create</Button>
              <Button href="/telephones" variant="contained" color='secondary'>Read</Button>
              <Button href="/telephone/:id/update" variant="contained" color='error'>Update</Button>
              <Button href="/telephone/:id/delete" variant="contained" color='warning'>Delete</Button>
            </Stack>
          </div>
        </section>
        
    </header>
  )
}
