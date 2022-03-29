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
            <a id="download" href="https://docs.google.com/document/d/1VgoevBa9XSwNu8n5nzE7ptJLkKMreT8pHf0A0SDQyu0/edit?usp=sharing" target="_blank" rel="noreferrer">Curriculum</a>
        </div>
    </header>
)

export default Header