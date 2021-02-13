import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Ellipse from "../../images/ellipse.svg"
import Game from "../../images/projects/game.png"
import EmpathyImage from "../../images/captures/empathy.png"

import AngularIcon from "../../images/technologies/angular.svg"
import BootstrapIcon from "../../images/technologies/bootstrap.svg"
import '../../styles/project.css'

const EmpathyPage = () => (
    <Layout>
        <SEO 
        lang="pt"
        title="Projeto Empathy Lab" 
        description="Descubra mais detalhes sobre o projeto Empathy Lab que participei do desenvolvimento."/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Game} alt="Ilustração de um controle de videogame"></img>
                <h2>Empathy Lab</h2>
            </div>
            <img id="project-img" src={EmpathyImage} alt="Imagem do Empathy Lab"></img>
            <div id="buttons">
                <a id="regular-button" href="https://leadfortaleza.com.br/empathywal/" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
            <section id="description">
                <h3>Descrição da aplicação</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Jogo para demonstrar as dificuldades de uma pessoa cega ou com baixa visão ao acessar a web.</p>
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
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Projeto desenvolvido durante meu estágio no LEAD Fortaleza</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Internacionalizamos a aplicação para inglês, espanhol e português</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Criamos uma leitor de tela nativo de Javascript para simular a experiência do usuário cego na internet</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Utilizei tags semânticas, textos alternativos e outras práticas para garantir a acessibilidade do site</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/projetos">Voltar</Link>
        </main>
  </Layout>
)

export default EmpathyPage