import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Ellipse from "../../images/ellipse.svg"
import Sales from "../../images/projects/discount.png"
import LandingImage from "../../images/captures/landing-2.png"
import FigmaIcon from "../../images/technologies/figma.svg"
import '../../styles/project.css'

const LandingVendasPage = () => {
    return (
    <Layout>
        <SEO 
        lang="pt"
        title="Landing page de vendas" 
        description="Descubra mais detalhes sobre a página landing page de vendas que desenvolvi."/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Sales} height="60" alt="Ilustração de uma caixa de lápis"></img>
                <h2>Landing page de vendas</h2>
            </div>
            <img id="project-img" src={LandingImage} alt="Imagem do Give me a Font" style={{marginBottom: '2rem'}}></img>
            <div id="buttons">
                <a id="figma-button" href="https://www.figma.com/file/7zprPZ2ofF2wDXd1CppFBB/Audi%C3%AAncia-Trabalhista" target="_blank" rel="noreferrer">
                    <img src={FigmaIcon} alt="Ícone do Figma"></img>Figma
                </a>
                <a id="regular-button" href="https://recjus.com.br" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
            <section id="description">
                <h3>Descrição da aplicação</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Aplicação para apresentar um produto e direcionar os clientes para a plataforma de vendas.</p>
                </div>
            </section>
            <section id="technologies">
                <h3>Tecnologias usadas</h3>
                <div style={{display: "flex", marginLeft: "1rem", marginTop: "1rem", flexDirection: "column"}}>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <svg viewBox="0 0 128 128" width="44" height="44" aria-label="Gatsby">
                            <path fill="#64328B" d="M64,0C28.7,0,0,28.7,0,64v0c0,35.3,28.7,64,64,64s64-28.7,64-64v0C128,28.7,99.3,0,64,0z M13.2,64L64,114.8 C35.9,114.8,13.2,92.1,13.2,64z M75.4,113.5l-60.9-61C19.7,30,39.9,13.2,64,13.2c16.6,0,31.3,7.9,40.5,20.2l-7.5,7.2 C89.7,30.2,77.7,23.5,64,23.5c-17.6,0-32.5,11.2-38.1,26.8C33.1,57,75.4,98.8,78.1,102c12.7-4.7,22.3-15.5,25.4-28.9H81.9v-9.4 l33,0.2C114.8,88.2,98,108.4,75.4,113.5z"></path>
                            </svg>
                            <p>Gatsby</p>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <svg viewBox="0 0 50 50" width="44" height="44" aria-label="Tailwind">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#06B6D4"></path>
                            </svg>
                            <p>Tailwind</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="details">
                <h3>Detalhes da implementação</h3>
                <ul style={{marginLeft: "-1rem"}}>
                    <li style={{marginBottom: "1rem"}}><img style={{marginTop: "-0.5rem"}} src={Ellipse} aria-hidden="true" alt=""></img>Utilizei o Gatsby por conta do SSG e dos diversos módulos de otimização e performance</li>
                    <li style={{marginBottom: "1rem"}}><img style={{marginTop: "-0.5rem"}} src={Ellipse} aria-hidden="true" alt=""></img>Utilizei o Tailwind para um desenvolvimento CSS mais prático e que ocupe menos espaço</li>
                    <li style={{marginBottom: "1rem"}}><img style={{marginTop: "-0.5rem"}} src={Ellipse} aria-hidden="true" alt=""></img>Otimizei o site de acordo com o Google Lighthouse e com módulos próprios do Gatsby</li>
                    <li><img style={{marginTop: "-0.5rem"}} src={Ellipse} aria-hidden="true" alt=""></img>Componentizei e reutilizei elementos</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/projetos">Voltar</Link>
        </main>
  </Layout>)
}

export default LandingVendasPage