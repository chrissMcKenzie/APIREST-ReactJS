import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//* Mes Composents
import AppBody from './Components/AppBody.jsx'
import MaterialUI from './Components/MaterialUI/MaterialUI.jsx'

export default class App extends Component {

    render() {
        return (
            <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"/>
                    <Route path="/MaterialUI" element={<MaterialUI />}/>
                    {/* <Route path="/MaterialUI" element={<MuiTypography />}>
                        <MuiButtion />
                    </Route> */}
                    <Route path="/telephones"/>
                    <Route path="/telephone/:id"/>
                    <Route path="/telephone/create"/>
                </Routes>
            </BrowserRouter>
            <AppBody />
            </>
        )
    }

}
