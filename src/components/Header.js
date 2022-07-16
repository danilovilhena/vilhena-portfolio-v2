import React from "react"
import { Link } from "gatsby"

import Danilo from "../images/pfp.png"

const Header = () => (
    <header className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid wrapper">
            <Link className="navbar-brand" to="/">
                <img src={Danilo} alt="Danilo Vilhena"></img>
                <p>Danilo Vilhena</p>
            </Link>
            <a id="download" href="https://drive.google.com/uc?export=download&id=103-PP9v61hxyOX0Mj78WIwUzV-8vX4RV" target="_blank" rel="noreferrer">Curriculum</a>
        </div>
    </header>
)

export default Header