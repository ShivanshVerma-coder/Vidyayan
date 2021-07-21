import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import MidBody from "./components/MidBody"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const newtheme = createTheme({
  palette: {
    primaryOrange: {
      main: "#FB5B16",
    },
    black: {
      main: "#000",
    },
  },
})
function App() {
  return (
    <ThemeProvider theme={newtheme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Route path="/" exact>
          <Header />
          <MidBody />
        </Route>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
