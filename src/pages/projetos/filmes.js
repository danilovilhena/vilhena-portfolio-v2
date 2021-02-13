import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Ellipse from "../../images/ellipse.svg"
import Camera from "../../images/projects/camera.png"
import MoviesImage from "../../images/captures/movies.png"
import FigmaIcon from "../../images/technologies/figma.svg"
import GithubIcon from "../../images/technologies/github.svg"
import AngularIcon from "../../images/technologies/angular.svg"
import BootstrapIcon from "../../images/technologies/bootstrap.svg"
import '../../styles/project.css'

const MoviesPage = () => (
    <Layout>
        <SEO 
        lang="pt"
        title="Projeto buscador de filmes" 
        description="Descubra mais detalhes sobre o projeto buscador de filmes que participei do desenvolvimento."/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Camera} alt="Ilustração de uma câmera"></img>
                <h2>Buscador de filmes</h2>
            </div>
            <img id="project-img" src={MoviesImage} alt="Imagem do buscador de filmes"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/angular-themoviedb-spa" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Ícone do Github"></img>Github
                    </a>
                    <a id="figma-button" href="https://www.figma.com/file/eFP78Pkpr4uMSxCjlJaDp5/SPA-The-Movie-DB" target="_blank" rel="noreferrer">
                        <img src={FigmaIcon} alt="Ícone do Figma"></img>Figma
                    </a>
                </div>
                <a id="regular-button" href="https://vilhena-movies.netlify.app" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
            <section id="description">
                <h3>Descrição da aplicação</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Site que consome a API do The Movie DB para exibir, buscar e se aprofundar em mais detalhes de diversos filmes.</p>
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
                <ul style={{marginLeft: '0', paddingLeft: '1rem'}}>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Componentizei e reutilizei os elementos</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Consumi a API do The Movie DB para receber os dados por gênero de filme e realizar buscas</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Implementei as funcionalidade de alto contraste e mudança no tamanho da fonte para acessibilizar mais a página</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Utilizei tags semânticas, textos alternativos e outras práticas para garantir a acessibilidade do site</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/projetos">Voltar</Link>
        </main>
  </Layout>
)

export default MoviesPage