import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Ellipse from "../../images/ellipse.svg"
import Computer from "../../images/projects/computer.png"
import WalImage from "../../images/captures/wal.png"
import VueIcon from "../../images/technologies/vue.svg"
import BootstrapIcon from "../../images/technologies/bootstrap.svg"
import '../../styles/project.css'

const WalPage = () => (
    <Layout>
        <SEO 
        lang="pt"
        title="Plugin WAL" 
        description="Descubra mais detalhes sobre o plugin WAL para captura de e-mails que participei do desenvolvimento."/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Computer} alt="Ilustração de um computador"></img>
                <h2>Plugin WAL</h2>
            </div>
            <img id="project-img" src={WalImage} alt="Imagem do plugin WAL"></img>
            <section id="description">
                <h3>Descrição da aplicação</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Plugin para tornar a web mais utilizável e acessível para pessoas com deficiência visual.</p>
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
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Projeto ainda em desenvolvimento, no meu estágio no LEAD Fortaleza</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Internacionalizamos a aplicação para inglês, espanhol e português</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Implementamos uma série de funcionalidades que acessibilizam a internet, como: modificar o tamanho e o tipo de fonte, o espaçamento, as cores da página, ativar alto contraste, bloquear sons que reproduzem automaticamente, etc.</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/projetos">Voltar</Link>
        </main>
  </Layout>
)

export default WalPage