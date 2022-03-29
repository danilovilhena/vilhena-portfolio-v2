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
import "../styles/index.responsivity.css"

const linkGithub = "https://github.com/danilovilhena"
const linkInstagram = "https://instagram.com/dev_danilo"
const linkLinkedin = "https://www.linkedin.com/in/danilo-vilhena/"

const designs = [
    {title: "Redesign do Flow Podcast", subtitle: "Nova e consistente proposta de design para o site do maior podcast do Brasil.", image: designFlow, href: "/designs/flow-podcast"},
    {title: "Landing pages de vendas", subtitle: "Páginas projetadas para apresentar um produto digital e mostrar seus detalhes visando a conversão.", image: designLanding, href: "/designs/landing-vendas"},
    {title: "Redesign do Reset Digital", subtitle: "Nova proposta de design para uma página inconsistente de captura de e-mails.", image: designReset, href: "/designs/reset-digital"},
    {title: "Give me a font!", subtitle: "Design de uma aplicação para gerar uma fonte aleatória com base na escolha de um estilo.", image: designFont, href: "/designs/give-me-a-font"},
    {title: "Tuttory", subtitle: "Plataforma inovadora para conectar alunos e professores particulares.", image: designTuttory, href: "/designs/tuttory"},
    {title: "do what?", subtitle: "Design simples e minimalista de uma aplicação de acompanhamento de tarefas a fazer.", image: designDoWhat, href: "/designs/do-what"}
]

const projects = [
    {title: "Blog Tech News", subtitle: "Aplicação completa de um blog, com a possibilidade de cadastro, você pode postar suas próprias produções.", image: devBlog, href: "/projetos/blog"},
    {title: "WAL Empathy Lab", subtitle: "Uma experiência de usuário, onde você poderá interagir com a web e vivenciar situações cotidianas de pessoas com deficiência visual.", image: devEmpathy, href: "/projetos/wal-empathy"},
    {title: "Landing pages de vendas", subtitle: "Página de apresentação de um produto responsiva e buscando a performance máxima.", image: designLanding, href: "/projetos/landing-vendas"},
    {title: "WAL Plugin", subtitle: "Uma ferramenta que injeta recursos de acessibilidade em sites em tempo de execução, retornando uma página bem mais acessível.", image: devWal, href: "/projetos/wal-plugin"},
    {title: "Give me a font", subtitle: "Aplicação para gerar uma fonte aleatória com base na escolha de um estilo para usar no seu próximo projeto.", image: designFont, href: "/projetos/give-me-a-font"},
    {title: "Página de captura de e-mails", subtitle: "Página para apresentar um evento e exibir um formulário para captar clientes", image: devEmail, href: "/projetos/landing-emails"},
    {title: "Buscador de filmes", subtitle: "Site que consome a API do The Movie DB para exibir, buscar e se aprofundar em detalhes de diversos filmes.", image: devFilmes, href: "/projetos/buscador-de-filmes"}
]

const Introduction = () => (
    <section id="introduction">
        <div>
            <h1>Hello, I'm Danilo! <span id="wave" role="img" aria-label="Wave">👋🏼</span></h1>
            <h2>I'm a <b>front-end developer</b> from Brazil. I <a href={linkGithub}>code</a>, I used to <Link to="/v2">design</Link> and <a href={linkInstagram}>share content</a>.</h2>

            <p>I'm a dev focused on <b>performance</b>, <b>usability</b> and <b>accessibility</b>. Currently I work at <a href="http://leadfortaleza.com.br/portal">LEAD Dell</a>.</p>

            <p>I build applications using technologies such as Gatsby, Angular e Vue.</p>
            <p>I used to design web/mobile interfaces using Figma.</p>
            <p>You can find me at <a href={linkGithub}>Github</a>, <a href={linkInstagram}>Instagram</a> e <a href={linkLinkedin}>LinkedIn</a>.</p>
        </div>
        <img src={Danilo} alt="Danilo Vilhena"></img>
    </section>
)

const Designs = (props) => (
    <section id="designs" className="section-container" style={{marginTop: '3rem'}}>
        <h2 className="section-title">Designs</h2>
        <div className="section-subtitle-div">
            <h3 className="section-subtitle">Complete projects and UI redesigns</h3>
        </div>
        <CardHolder obj={props.obj}/>
    </section>
)

const Projects = (props) => (
    <section id="projects" className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="section-subtitle-div">
            <h3 className="section-subtitle">Main applications I developed</h3>
        </div>
        <CardHolder obj={props.obj}/>
    </section>
)

const Contact = () => (
    <section id="contact" className="section-container">
        <h2 className="section-title">Contact</h2>
        <h3 className="section-subtitle" style={{marginBottom: '1rem'}}>Let's build something together!</h3>
        <p className="section-paragraph">Feel free to send me an email if you're looking for a front-end developer, have a question or just want to say hi! <span role="img" aria-label="Wave">🙋‍♂️</span></p>
        <a href="mailto:danilo.vilhena@gmail.com" rel="noopener noreferrer" target="_blank">Contact me</a>
    </section>
)

const Index = () => {
    return (
    <Layout title="Front-end developer" description="Front-end developer focused on accessibility and website optimization.">
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