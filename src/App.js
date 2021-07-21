import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import MidBody from "./components/MidBody"
import CssBaseline from "@material-ui/core/CssBaseline"
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Route path="/" exact>
        <Header />
        <MidBody />
      </Route>
    </BrowserRouter>
  )
}

export default App
