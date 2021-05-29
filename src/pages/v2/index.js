import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"

import Danilo from "../../images/pfp.png"
import "../../styles/v2.css"

const linkGithub = "https://github.com/danilovilhena"
const linkInstagram = "https://instagram.com/dev_danilo"
const linkLinkedin = "https://www.linkedin.com/in/danilo-vilhena/"

const Header = () => (
    <header className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid wrapper">
            <Link className="navbar-brand" to="/v2">
                <img src={Danilo} alt="Danilo Vilhena"></img>
                <p>Danilo Vilhena</p>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir menu de navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <nav>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/v2">Design</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/v2">Desenvolvimento</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/v2">Sobre</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
)

const Introduction = () => (
    <section id="introduction">
        <div>
            <h1>Olá, eu sou o Danilo! <span id="wave">👋🏼</span></h1>
            <h2>Sou um <b>desenvolvedor front-end</b> em Fortaleza. Eu <a href={linkGithub}>programo</a>, faço <Link to="/v2">designs</Link> e <a href={linkInstagram}>compartilho conhecimento</a>.</h2>

            <p>Sou um dev focado em <b>performance</b>, <b>usabilidade</b> e <b>acessibilidade</b>. Atualmente trabalho no <a href="http://leadfortaleza.com.br/portal">LEAD Dell</a>.</p>
            <p>Construo aplicações usando tecnologias como Gatsby, Angular e Vue.</p>
            <p>Faço design de interfaces web/mobile usando o Figma.</p>
            <p>Você pode me encontrar no <a href={linkGithub}>Github</a>, <a href={linkInstagram}>Instagram</a> e <a href={linkLinkedin}>LinkedIn</a>.</p>
        </div>
        <img src={Danilo} alt="Danilo Vilhena"></img>
    </section>
)

const Contact = () => (
    <section id="contact">
        <h2>Contato</h2>
        <h3>Vamos construir algum projeto juntos!</h3>
        <p>Por favor envie um e-mail se estiver procurando por um desenvolvedor front-end, UI designer ou só quiser entrar em contato! 🙋‍♂️</p>
        <a href="mailto:danilo.vilhena@gmail.com" rel="noopener noreferrer" target="_blank">Fale comigo</a>
    </section>
)

const Footer = () => (
    <footer className="wrapper">
        <a className="nav-link" href="https://danilovilhena.com">danilovilhena.com</a>

        <div>
            <a href={linkGithub}>
                <svg width="110" height="107" viewBox="0 0 110 107" title="Github" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.6387 4.57107e-06C24.4507 -0.0122025 0 24.4263 0 54.5898C0 78.4424 15.2954 98.7183 36.5967 106.165C39.4653 106.885 39.0259 104.846 39.0259 103.455V93.9941C22.4609 95.9351 21.7896 84.9731 20.6787 83.1421C18.4326 79.3091 13.1226 78.3325 14.7095 76.5015C18.4814 74.5605 22.3267 76.9898 26.7822 83.5693C30.0049 88.3423 36.2915 87.5366 39.4775 86.7432C40.1733 83.8745 41.6626 81.311 43.7134 79.3213C26.5503 76.2451 19.397 65.7715 19.397 53.3203C19.397 47.2778 21.3867 41.7236 25.293 37.2437C22.8027 29.8584 25.5249 23.5352 25.8911 22.5952C32.9834 21.9605 40.3564 27.6733 40.9302 28.125C44.9585 27.0386 49.5605 26.4648 54.7119 26.4648C59.8877 26.4648 64.502 27.063 68.5669 28.1616C69.9463 27.1118 76.7822 22.2046 83.374 22.8027C83.728 23.7427 86.3892 29.9194 84.0454 37.207C88.0005 41.6992 90.0147 47.3023 90.0147 53.3569C90.0147 65.8325 82.8125 76.3184 65.6006 79.3457C67.0748 80.7955 68.2454 82.5246 69.0439 84.4318C69.8425 86.3391 70.253 88.3864 70.2515 90.4541V104.187C70.3491 105.286 70.2515 106.372 72.0825 106.372C93.7012 99.0845 109.265 78.6621 109.265 54.6021C109.265 24.4263 84.8022 4.57107e-06 54.6387 4.57107e-06V4.57107e-06Z" fill="#fff"/>
                </svg>
            </a>
            <a href={linkInstagram}>
                <svg width="98" height="98" viewBox="0 0 98 98" title="Instagram" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.7829 32.5232C39.823 32.5232 32.511 39.8352 32.511 48.7951C32.511 57.7551 39.823 65.0671 48.7829 65.0671C57.7429 65.0671 65.0549 57.7551 65.0549 48.7951C65.0549 39.8352 57.7429 32.5232 48.7829 32.5232ZM97.5866 48.7951C97.5866 42.0569 97.6477 35.3796 97.2693 28.6535C96.8908 20.841 95.1086 13.9074 89.3957 8.19455C83.6706 2.46945 76.7492 0.699432 68.9367 0.321014C62.1985 -0.0574044 55.5212 0.00363091 48.7951 0.00363091C42.0568 0.00363091 35.3796 -0.0574044 28.6535 0.321014C20.841 0.699432 13.9074 2.48166 8.19455 8.19455C2.46945 13.9196 0.699431 20.841 0.321014 28.6535C-0.0574044 35.3918 0.00363091 42.0691 0.00363091 48.7951C0.00363091 55.5212 -0.0574044 62.2107 0.321014 68.9367C0.699431 76.7492 2.48166 83.6828 8.19455 89.3957C13.9196 95.1208 20.841 96.8908 28.6535 97.2693C35.3918 97.6477 42.0691 97.5866 48.7951 97.5866C55.5334 97.5866 62.2107 97.6477 68.9367 97.2693C76.7492 96.8908 83.6828 95.1086 89.3957 89.3957C95.1208 83.6706 96.8908 76.7492 97.2693 68.9367C97.6599 62.2107 97.5866 55.5334 97.5866 48.7951V48.7951ZM48.7829 73.8318C34.9279 73.8318 23.7463 62.6501 23.7463 48.7951C23.7463 34.9402 34.9279 23.7585 48.7829 23.7585C62.6379 23.7585 73.8195 34.9402 73.8195 48.7951C73.8195 62.6501 62.6379 73.8318 48.7829 73.8318ZM74.8449 28.5803C71.6101 28.5803 68.9978 25.968 68.9978 22.7331C68.9978 19.4983 71.6101 16.886 74.8449 16.886C78.0798 16.886 80.6921 19.4983 80.6921 22.7331C80.6931 23.5013 80.5425 24.262 80.249 24.9719C79.9555 25.6817 79.5248 26.3267 78.9817 26.8698C78.4385 27.413 77.7935 27.8437 77.0837 28.1372C76.3739 28.4307 75.6131 28.5813 74.8449 28.5803V28.5803Z" fill="#fff"/>
                </svg>
            </a>
            <a href={linkLinkedin}>
                <svg viewBox="0 0 128 128" title="Linkedin">
                    <path fill="#fff" id="plain" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"></path>
                </svg>
            </a>
        </div>
    </footer>
)

const Index = () => (<>
    <SEO 
        lang="pt"
        title="Desenvolvedor front-end" 
        description="Desenvolvedor front-end com ênfase na acessibilidade e otimização dos sites."/>
    <Header />
    <main className="wrapper">
        <Introduction />
        <Contact />
    </main>
    <Footer />
</>)

export default Index