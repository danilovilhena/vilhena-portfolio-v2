import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIllustration from "../images/projects/blog.png"
import CovidIllustration from "../images/projects/covid.png"
import GameIllustration from "../images/projects/game.png"
import MailIllustration from "../images/projects/mail.png"
import ComputerIllustration from "../images/projects/computer.png"
import CameraIllustration from "../images/projects/camera.png"
import '../styles/projetos.css'

const ProjectsPage = () => (
  <Layout>
    <SEO 
      lang="pt"
      title="Projetos" 
      description="Descubra mais detalhes sobre os projetos que já desenvolvi."/>
    
    <main className="mx-auto" id="ProjectsMain">
        <h2>Projetos</h2>
        <div id="sections">
            {/* Blog  */}
            <section className="section">
                <div id="title">
                    <img src={BlogIllustration} alt="Ilustração de um computador"></img>
                    <h3>Blog Tech News</h3>
                </div>
                <p>Blog com notícias de tecnologia, agrupadas por assunto ou meses do ano. Com a possibilidade de cadastro, você pode postar suas próprias produções.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/projetos/blog">Mais detalhes</Link>
                    <a href="https://danilovilhena.github.io/angular-express-blog/" target="_blank" rel="noreferrer">Ver aplicação</a>
                </div>
            </section>
            {/* COVID19 */}
            <section className="section">
                <div id="title">
                    <img src={CovidIllustration} alt="Ilustração de um virus" width="56"></img>
                    <h3>Dashboard COVID-19</h3>
                </div>
                <p>Aplicação para exibir as informações do COVID em cidades e estados do Brasil e do mundo.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/projetos/covid">Mais detalhes</Link>
                    <a href="https://vilhena-covid-dashboard.netlify.app" target="_blank" rel="noreferrer">Ver aplicação</a>
                </div>
            </section>
            {/* Empathy Lab */}
            <section className="section">
                <div id="title">
                    <img src={GameIllustration} alt="Ilustração de um controle de videogame" width="56" height="56"></img>
                    <h3>Empathy Lab</h3>
                </div>
                <p>Jogo para demonstrar as dificuldades de uma pessoa cega ou com baixa visão ao acessar a web</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/projetos/empathy">Mais detalhes</Link>
                    <a href="leadfortaleza.com.br/empathywal/" target="_blank" rel="noreferrer">Ver aplicação</a>
                </div>
            </section>
            {/* Landing page */}
            <section className="section">
                <div id="title">
                    <img src={MailIllustration} alt="Ilustração de um caixa de email" width="56"></img>
                    <h3>Landing page para captura de e-mails</h3>
                </div>
                <p>Landing page para reunir interessados no produto de um cliente em um grupo do Telegram e em uma lista de emails.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/projetos/landing">Mais detalhes</Link>
                    <a href="https://konradmota.com.br/#/" target="_blank" rel="noreferrer">Ver aplicação</a>
                </div>
            </section>
            {/* Plugin WAL */}
            <section className="section">
                <div id="title">
                    <img src={ComputerIllustration} alt="Ilustração de um computador" width="56"></img>
                    <h3>Plugin WAL</h3>
                </div>
                <p>Plugin para tornar a web mais utilizável e acessível para pessoas com deficiência visual.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/projetos/wal">Mais detalhes</Link>
                    <a href="https://brasil.estadao.com.br/blogs/vencer-limites/dell-cria-software-que-inclui-acessibilidade-em-navegadores-e-sistemas/" target="_blank" rel="noreferrer">Ver aplicação</a>
                </div>
            </section>
            {/* Filmes */}
            <section className="section">
                <div id="title">
                    <img src={CameraIllustration} alt="Ilustração de uma câmera" width="56"></img>
                    <h3>Buscador de filmes</h3>
                </div>
                <p>Site que consome a API do The Movie DB para exibir, buscar e se aprofundar em mais detalhes de diversos filmes.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/projetos/filmes">Mais detalhes</Link>
                    <a href="https://vilhena-movies.netlify.app" target="_blank" rel="noreferrer">Ver aplicação</a>
                </div>
            </section>
        </div>
    </main>
  </Layout>
)

export default ProjectsPage
