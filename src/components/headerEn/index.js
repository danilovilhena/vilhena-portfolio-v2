import { globalHistory } from "@reach/router"
import { Link, navigate } from "gatsby"
import React from "react"
import USAFlag from '../../images/usa.svg'
import './header.css'

const HeaderEn = () => {
  const { location } = globalHistory
  
  return <nav className="navbar navbar-expand-lg mx-auto" id="nav">
    <div className="container-fluid">
      <h1 className="navbar-brand"><Link to="/en">Danilo Vilhena</Link></h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#right-side" aria-controls="right-side" aria-expanded="false" aria-label="Exibir menu de navegação">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="right-side">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/en/projects" className={location.pathname.includes('projects') ? 'nav-link active': 'nav-link'}>Projects</Link>
          </li>
          <li className="nav-item ms-lg-3">
            <Link to="/en/tech" className={location.pathname.includes('tech') ? 'nav-link active': 'nav-link'}>Technologies</Link>
          </li>
          <li className="nav-item ms-lg-3">
            <Link to="/en/contact" className={location.pathname.includes('contact') ? 'nav-link active': 'nav-link'}>Contact</Link>
          </li>
          <li className="nav-item ms-lg-3" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            <img src={USAFlag} alt="USA Flag" id="flag-btn"></img>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default HeaderEn
