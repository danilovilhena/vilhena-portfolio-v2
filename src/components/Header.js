import React from "react"
import { Link } from "gatsby"

import Danilo from "../images/pfp.png"
import CV from "../CV-DaniloVilhena.pdf"

const Header = () => (
    <header className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid wrapper">
            <Link className="navbar-brand" to="/">
                <img src={Danilo} alt="Danilo Vilhena"></img>
                <p>Danilo Vilhena</p>
            </Link>
            <a id="download" href={CV} download>Currículo</a>
        </div>
    </header>
)

export default Header