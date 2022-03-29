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
    {title: "Flow Podcast redesign", subtitle: "New and consistent design proposal for the website of Brazil's largest podcast.", image: designFlow, href: "/designs/flow-podcast"},
    {title: "Digital product landing page", subtitle: "Pages designed to present a digital product and show its details in order to sell.", image: designLanding, href: "/designs/landing-sales"},
    {title: "Reset Digital redesign", subtitle: "New design proposal for an inconsistent email capture page.", image: designReset, href: "/designs/reset-digital"},
    {title: "Give me a font!", subtitle: "Design of an application to generate a random font based on your choice of style.", image: designFont, href: "/designs/give-me-a-font"},
    {title: "Tuttory", subtitle: "Innovative platform for connecting students and private teachers.", image: designTuttory, href: "/designs/tuttory"},
    {title: "do what?", subtitle: "Simple and minimalist design of a to-do tracking application.", image: designDoWhat, href: "/designs/do-what"}
]

const projects = [
    {title: "Tech News blog", subtitle: "Complete application of a blog, with front and back-end, so you can post your own productions.", image: devBlog, href: "/projects/blog"},
    {title: "WAL Empathy Lab", subtitle: "A user experience, where you can interact with the web and experience everyday situations of visually impaired people.", image: devEmpathy, href: "/projects/wal-empathy"},
    {title: "Digital product landing page", subtitle: "Responsive product landing page with optimized performance.", image: designLanding, href: "/projects/landing-sales"},
    {title: "WAL Plugin", subtitle: "Uma ferramenta que injeta recursos de acessibilidade em sites em tempo de execução, retornando uma página bem mais acessível.", image: devWal, href: "/projects/wal-plugin"},
    {title: "Give me a font", subtitle: "A tool that injects accessibility features into websites at runtime, returning a much more accessible page.", image: designFont, href: "/projects/give-me-a-font"},
    {title: "Mail capture page", subtitle: "Page to present an event and display a form to capture possible customers.", image: devEmail, href: "/projects/landing-emails"},
    {title: "Movie searcher", subtitle: "Site that consumes The Movie DB API to view, search, and delve into details of various movies.", image: devFilmes, href: "/projects/movie-searcher"}
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