import React from "react"

export default function Main() {
    return (
        <main>
            <img src="src/images/main--pic.jpeg" className="main--pic" />
            
            <card className="business--card">
            <h1 className="h1--main">Otilia Toma</h1>
            <h3 className="h3--main">Frontend Developer</h3>
            <h5 className="h5--main">www.github.com/0tilia</h5>
            <a href="https://www.linkedin.com/in/otilia-toma/">
            <img src="src/images/linkedin--button.png" className="linkedin--button" />
            </a>
            <a href="mailto:otiliatoma04@gmail.com" >
            <img src="src/images/email--button.png" className="email--button" />
            </a>

            </card>
        </main>
    )
}