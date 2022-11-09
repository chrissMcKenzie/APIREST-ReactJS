import React from 'react'
import {Typography} from '@mui/material'
// import Typography from '@mui/material/Typography'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1" color="initial">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3" color="initial">h3 Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
        <Typography variant="h5" color="initial">h5 Heading</Typography>
        <Typography variant="h6" color="initial">h6 Heading</Typography>

        <Typography variant="subtitle1">Sub Title 1</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>

        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut autem, ea eos distinctio, nostrum perferendis modi repellat necessitatibus tempore quos itaque rerum qui quia debitis id laborum quae vitae.
        </Typography>
        <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut autem, ea eos distinctio, nostrum perferendis modi repellat necessitatibus tempore quos itaque rerum qui quia debitis id laborum quae vitae.
        </Typography>
        <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta excepturi quis explicabo maxime pariatur, molestiae obcaecati porro ea quam vitae cumque, doloremque dignissimos! Pariatur ab itaque culpa odit doloribus atque.
        </Typography>

    </div>
  )
}
