import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Ellipse from "../../images/ellipse.svg"
import Virus from "../../images/projects/covid.png"
import CovidImage from "../../images/captures/covid.png"

import GithubIcon from "../../images/technologies/github.svg"
import FigmaIcon from "../../images/technologies/figma.svg"
import AngularIcon from "../../images/technologies/angular.svg"
import PythonIcon from "../../images/technologies/python.svg"
import BootstrapIcon from "../../images/technologies/bootstrap.svg"
import '../../styles/project.css'

const CovidPage = () => (
    <Layout>
        <SEO 
        lang="pt"
        title="Projeto Dashboard COVID-19" 
        description="Descubra mais detalhes sobre o projeto Dashboard COVID-19 que participei do desenvolvimento."/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Virus} alt="Ilustração de um computador"></img>
                <h2>Dashboard COVID-19</h2>
            </div>
            <img id="project-img" src={CovidImage} alt="Imagem do Dashboard COVID-19"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/angular-covid-dashboard" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Ícone do Github"></img>Github
                    </a>
                    <a id="figma-button" href="https://www.figma.com/file/qTJfTwpwZS4qElGaYfUkHQ/COVID-Dashboard" target="_blank" rel="noreferrer">
                        <img src={FigmaIcon} alt="Ícone do Figma"></img>Figma
                    </a>
                </div>
                <a id="regular-button" href="https://vilhena-covid-dashboard.netlify.app" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
            <section id="description">
                <h3>Descrição da aplicação</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Aplicação para exibir as informações do COVID em cidades e estados do Brasil e do mundo.</p>
                </div>
            </section>
            <section id="technologies">
                <h3>Tecnologias usadas</h3>
                <div style={{display: "flex", marginLeft: "1rem", marginTop: "1rem", flexDirection: "column"}}>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={AngularIcon} alt="Ícone do Angular"></img>
                            <p>Angular</p>
                        </div>
                        <div className="technology">
                            <img src={PythonIcon} alt="Ícone do Python"></img>
                            <p>Python</p>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={BootstrapIcon} alt="Ícone do Bootstrap"></img>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="details">
                <h3>Detalhes da implementação</h3>
                <h4 style={{marginTop: '1rem'}}>Frontend</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Fiz o design e a prototipagem do projeto</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Componentizei e reutilizei os elementos</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Consumi 4 APIs para coletar de forma mais completa os dados do COVID-19 no Brasil e no mundo</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Tratei os dados recebidos para melhorar a experiência do usuário em casos de falhas nas APIs</li>
                </ul>
                <h4>Web Scraping</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Utilizei a biblioteca selenium do Python para coletar a quantia destinada a cada estado no combate ao COVID-19</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/projetos">Voltar</Link>
        </main>
  </Layout>
)

export default CovidPage