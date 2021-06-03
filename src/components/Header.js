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
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir menu de navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <nav>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Design</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Desenvolvimento</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Sobre</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
)

export default Header