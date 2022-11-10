import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//* Mes Composents
import MaterialUI from "./Components/MaterialUI/MaterialUI.jsx"
import AppHeader from "./Components/AppHeader.jsx"
import AppFooter from './Components/AppFooter.jsx'
import CreateTelephone from "./Components/CreateTelephone.jsx"
import GetTelephones from "./Components/GetTelephones.jsx"
import UpdateTelephone from "./Components/UpdateTelephone.jsx"
import DeleteTelephone from "./Components/DeleteTelephone.jsx"
import AppHome from './Components/AppHome.jsx'

export default class App extends Component {

    render() {
        return (
            <>
            <AppHeader />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppHome/>}/>
                    <Route path="/MaterialUI" element={<MaterialUI />}/>
                    <Route path="/telephone/create" element={<CreateTelephone />}/>
                    <Route path="/telephones" element={<GetTelephones/>} />
                    <Route path="/telephone/:id/update" element={<UpdateTelephone />}/>
                    <Route path="/telephone/:id/delete" element={<DeleteTelephone />}/>
                    {/* <Route path="/telephone/create"/> */}
                </Routes>
            </BrowserRouter>
            <AppFooter />
            </>
        )
    }

}
