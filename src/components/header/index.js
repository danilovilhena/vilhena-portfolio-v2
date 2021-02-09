import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import BrazilFlag from '../../images/brazil.svg'
import './header.css'

const Header = () => {
  const { sitePage } = useStaticQuery(graphql`
    query {
      sitePage {
        path
      }
    }
  `)
  
  return <nav className="navbar navbar-expand-lg mx-auto" id="nav">
    <div className="container-fluid">
      <h1 className="navbar-brand" href="/"><Link to="/">Danilo Vilhena</Link></h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#right-side" aria-controls="right-side" aria-expanded="false" aria-label="Exibir menu de navegação">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="right-side">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/projetos" className={sitePage.path.includes('projetos') ? 'nav-link active': 'nav-link'}>Projetos</Link>
          </li>
          <li className="nav-item ms-lg-3">
            <Link to="/tecnologias" className={sitePage.path.includes('tecnologias') ? 'nav-link active': 'nav-link'}>Tecnologias</Link>
          </li>
          <li className="nav-item ms-lg-3">
            <Link to="/contato" className={sitePage.path.includes('contato') ? 'nav-link active': 'nav-link'}>Contato</Link>
          </li>
          <li className="nav-item ms-lg-3">
            <img src={BrazilFlag} alt="Bandeira do Brasil" id="flag-btn"></img>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Header
