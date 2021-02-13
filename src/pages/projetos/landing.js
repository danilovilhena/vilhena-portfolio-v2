import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Ellipse from "../../images/ellipse.svg"
import Mail from "../../images/projects/mail.png"
import LandingImage from "../../images/captures/landing.png"

import GithubIcon from "../../images/technologies/github.svg"
import VueIcon from "../../images/technologies/vue.svg"
import MailchimpIcon from "../../images/technologies/mailchimp.png"
import BootstrapIcon from "../../images/technologies/bootstrap.svg"
import '../../styles/project.css'

const LandingPage = () => (
    <Layout>
        <SEO 
        lang="pt"
        title="Projeto Landing page para captura de e-mails" 
        description="Descubra mais detalhes sobre o projeto Landing page para captura de e-mails que participei do desenvolvimento."/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Mail} alt="Ilustração de um caixa de email"></img>
                <h2>Landing page para captura de e-mails</h2>
            </div>
            <img id="project-img" src={LandingImage} alt="Imagem de Landing page para captura de e-mails"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/konrad-capture" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Ícone do Github"></img>Github
                    </a>
                </div>
                <a id="regular-button" href="https://konradmota.com.br/#/" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
            <section id="description">
                <h3>Descrição da aplicação</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Landing page para reunir interessados no produto de um cliente em um grupo do Telegram e em uma lista de emails.</p>
                </div>
            </section>
            <section id="technologies">
                <h3>Tecnologias usadas</h3>
                <div style={{display: "flex", marginLeft: "1rem", marginTop: "1rem", flexDirection: "column"}}>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={VueIcon} alt="Ícone do Vue.js"></img>
                            <p>Vue.js</p>
                        </div>
                        <div className="technology">
                            <img src={MailchimpIcon} alt="Ícone do Mailchimp"></img>
                            <p>Mailchimp</p>
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
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Configurei o Mailchimp para armazenar os dados de possíveis clientes</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Conectei o site com o Mailchimp</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Tornei o site responsivo</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Otimizei o site de acordo com o Google Lighthouse</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/projetos">Voltar</Link>
        </main>
  </Layout>
)

export default LandingPage