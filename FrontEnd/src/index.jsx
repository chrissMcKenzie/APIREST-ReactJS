import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Axios from 'axios'
Axios.defaults.baseURL = "http://localhost:8081"

//* Mon App
import App from "./App/App.jsx"

export default class Index extends Component {
    
  render() {
    return (
        <App />
    )
  }
}

ReactDOM.createRoot(document.getElementById("App")).render(<Index />)