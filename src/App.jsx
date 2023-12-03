import './style.css'
import React from "react"
import About from "./components/About.jsx"
import Main from "./components/Main.jsx"
import Interests from "./components/Interests.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
      <div className="container">

          <Main />
          <About />
          <Interests />
          <Footer />

      </div>
  )
}
