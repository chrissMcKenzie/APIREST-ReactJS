import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//* Mes Composents
import AppBody from "./Components/AppBody.jsx"
import MaterialUI from "./Components/MaterialUI/MaterialUI.jsx"
import Telephones from "./Components/Telephones.jsx"
import CreateTelephone from "./Components/CreateTelephone.jsx"
import AppHeader from "./Components/AppHeader.jsx"
import AppFooter from './Components/AppFooter.jsx'

export default class App extends Component {

    render() {
        return (
            <>
            <AppHeader />
            <BrowserRouter>
                <Routes>
                    <Route path="/"/>
                    <Route path="/MaterialUI" element={<MaterialUI />}/>
                    <Route path="/telephones" element={<Telephones/>} />
                    <Route path="/telephone/:id" element={<CreateTelephone />}/>
                    <Route path="/telephone/create"/>
                </Routes>
            </BrowserRouter>
            <AppBody />
            <AppFooter />
            </>
        )
    }

}
