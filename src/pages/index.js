import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import CardHolder from "../components/CardHolder"
import Danilo from "../images/pfp.png"
import designLanding from "../images/v2/pagina-de-vendas.png"
import designFlow from "../images/v2/flow-podcast.png"
import designReset from "../images/v2/reset-digital.png"
import designFont from "../images/v2/give-me-a-font.png"
import designTuttory from "../images/v2/tuttory.png"
import designDoWhat from "../images/v2/do-what.png"
import devEmail from "../images/v2/captura-email.png"
import devBlog from "../images/v2/blog.png"
import devFilmes from "../images/v2/buscador-filmes.png"
import devEmpathy from "../images/v2/empathy-lab.png"
import devWal from "../images/v2/wal.png"

import "../styles/index.css"

const linkGithub = "https://github.com/danilovilhena"
const linkInstagram = "https://instagram.com/dev_danilo"
const linkLinkedin = "https://www.linkedin.com/in/danilo-vilhena/"

const designs = [
    {title: "Landing pages de vendas", subtitle: "Páginas projetadas para apresentar um produto digital e mostrar seus detalhes visando a conversão.", image: designLanding, href: "/designs/landing-vendas"},
    {title: "Redesign do Flow Podcast", subtitle: "Nova e consistente proposta de design para o site do maior podcast do Brasil.", image: designFlow, href: "/designs/flow-podcast"},
    {title: "Redesign do Reset Digital", subtitle: "Nova proposta de design para uma página inconsistente de captura de e-mails.", image: designReset, href: "/designs/reset-digital"},
    {title: "Give me a font!", subtitle: "Design de uma aplicação para gerar uma fonte aleatória com base na escolha de um estilo.", image: designFont, href: "/designs/give-me-a-font"},
    {title: "Tuttory", subtitle: "Plataforma inovadora para conectar alunos e professores particulares.", image: designTuttory, href: "/designs/tuttory"},
    {title: "do what?", subtitle: "Design simples e minimalista de uma aplicação de acompanhamento de tarefas a fazer.", image: designDoWhat, href: "/designs/do-what"}
]

const projects = [
    {title: "Landing pages de vendas", subtitle: "Página de apresentação de um produto responsiva e buscando a performance máxima.", image: designLanding, href: "/projetos/landing-vendas"},
    {title: "WAL Empathy Lab", subtitle: "Uma experiência de usuário, onde você poderá interagir com a web e vivenciar situações cotidianas de pessoas com deficiência visual.", image: devEmpathy, href: "/projetos/wal-empathy"},
    {title: "WAL Plugin", subtitle: "Uma ferramenta que injeta recursos de acessibilidade em sites em tempo de execução, retornando uma página bem mais acessível.", image: devWal, href: "/projetos/wal-plugin"},
    {title: "Give me a font", subtitle: "Aplicação para gerar uma fonte aleatória com base na escolha de um estilo para usar no seu próximo projeto.", image: designFont, href: "/projetos/give-me-a-font"},
    {title: "Blog Tech News", subtitle: "Aplicação completa de um blog, com a possibilidade de cadastro, você pode postar suas próprias produções.", image: devBlog, href: "/projetos/blog"},
    {title: "Página de captura de e-mails", subtitle: "Página para apresentar um evento e exibir um formulário para captar clientes", image: devEmail, href: "/projetos/landing-emails"},
    {title: "Buscador de filmes", subtitle: "Site que consome a API do The Movie DB para exibir, buscar e se aprofundar em detalhes de diversos filmes.", image: devFilmes, href: "/projetos/buscador-de-filmes"}
]

const Introduction = () => (
    <section id="introduction">
        <div>
            <h1>Olá, eu sou o Danilo! <span id="wave" role="img" aria-label="Acenar">👋🏼</span></h1>
            <h2>Sou um <b>desenvolvedor front-end</b> em Fortaleza. Eu <a href={linkGithub}>programo</a>, faço <Link to="/v2">designs</Link> e <a href={linkInstagram}>compartilho conhecimento</a>.</h2>

            <p>Sou um dev focado em <b>performance</b>, <b>usabilidade</b> e <b>acessibilidade</b>. Atualmente trabalho no <a href="http://leadfortaleza.com.br/portal">LEAD Dell</a>.</p>
            <p>Construo aplicações usando tecnologias como Gatsby, Angular e Vue.</p>
            <p>Faço design de interfaces web/mobile usando o Figma.</p>
            <p>Você pode me encontrar no <a href={linkGithub}>Github</a>, <a href={linkInstagram}>Instagram</a> e <a href={linkLinkedin}>LinkedIn</a>.</p>
        </div>
        <img src={Danilo} alt="Danilo Vilhena" data-aos="fade-left"></img>
    </section>
)

const Designs = (props) => (
    <section id="designs" className="section-container" style={{marginTop: '3rem'}}>
        <h2 className="section-title">Designs</h2>
        <div className="section-subtitle-div">
            <h3 className="section-subtitle">Projetos do zero e redesigns de UI</h3>
        </div>
        <CardHolder obj={props.obj}/>
    </section>
)

const Projects = (props) => (
    <section id="designs" className="section-container">
        <h2 className="section-title">Projetos</h2>
        <div className="section-subtitle-div">
            <h3 className="section-subtitle">Principais aplicações que desenvolvi</h3>
        </div>
        <CardHolder obj={props.obj}/>
    </section>
)

const Contact = () => (
    <section id="contact" className="section-container">
        <h2 className="section-title">Contato</h2>
        <h3 className="section-subtitle" style={{marginBottom: '1rem'}}>Vamos construir algum projeto juntos!</h3>
        <p className="section-paragraph">Por favor envie um e-mail se estiver procurando por um desenvolvedor front-end, UI designer ou só quiser entrar em contato! <span role="img" aria-label="Acenar">🙋‍♂️</span></p>
        <a href="mailto:danilo.vilhena@gmail.com" rel="noopener noreferrer" target="_blank">Fale comigo</a>
    </section>
)

const Index = () => {
    return (
    <Layout title="Desenvolvedor front-end" description="Desenvolvedor front-end e UI designer 
com ênfase na acessibilidade e otimização dos sites.">
        <main className="wrapper">
            <Introduction />
            <Projects obj={projects}/>
            <Designs obj={designs}/>
            <Contact />
        </main>
    </Layout>
    )
}

export default Index