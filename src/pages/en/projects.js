import { Link } from "gatsby"
import React from "react"

import LayoutEn from "../../components/layoutEn"
import SEOEn from "../../components/seoEn"
import BlogIllustration from "../../images/projects/blog.png"
import CovidIllustration from "../../images/projects/covid.png"
import GameIllustration from "../../images/projects/game.png"
import MailIllustration from "../../images/projects/mail.png"
import ComputerIllustration from "../../images/projects/computer.png"
import CameraIllustration from "../../images/projects/camera.png"
import PencilIllustration from "../../images/projects/pencil.png"
import '../../styles/projetos.css'

const ProjectsPage = () => (
  <LayoutEn>
    <SEOEn 
      lang="en"
      title="Projects" 
      description="Discover more details about the applications I developed"/>
    
    <main className="mx-auto" id="ProjectsMain">
        <h2>Projects</h2>
        <div id="sections">
            {/* Give me a font  */}
            <section className="section">
                <div id="title">
                    <img src={PencilIllustration} alt="Ilustração de uma caixa de lápis"></img>
                    <h3>Give me a font</h3>
                </div>
                <p>Application that gives you random free fonts based on style choice for your next project.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/en/projects/givemeafont">Mais detalhes</Link>
                    <a href="https://danilovilhena.github.io/give-me-a-font/" target="_blank" rel="noreferrer">Ver aplicação</a>
                </div>
            </section>
            {/* Blog  */}
            <section className="section">
                <div id="title">
                    <img src={BlogIllustration} alt="Computer illustration"></img>
                    <h3>Tech News Blog</h3>
                </div>
                <p>Blog with news about technology, divided by topic or post date. With the option to register, you can post your own content.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/en/projects/blog">More details</Link>
                    <a href="https://danilovilhena.github.io/angular-express-blog/" target="_blank" rel="noreferrer">Open application</a>
                </div>
            </section>
            {/* COVID19 */}
            <section className="section">
                <div id="title">
                    <img src={CovidIllustration} alt="Virus illustration" width="56"></img>
                    <h3>COVID-19 Dashboard</h3>
                </div>
                <p>Application to show COVID data about cities and states from Brazil and from the world.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/en/projects/covid">More details</Link>
                    <a href="https://vilhena-covid-dashboard.netlify.app" target="_blank" rel="noreferrer">Open application</a>
                </div>
            </section>
            {/* Empathy Lab */}
            <section className="section">
                <div id="title">
                    <img src={GameIllustration} alt="Videogame controller illustration" width="56" height="56"></img>
                    <h3>Empathy Lab</h3>
                </div>
                <p>Game to demonstrate the difficulties blind or low vision people encounter when using the internet</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/en/projects/empathy">More details</Link>
                    <a href="leadfortaleza.com.br/empathywal/" target="_blank" rel="noreferrer">Open application</a>
                </div>
            </section>
            {/* Landing page */}
            <section className="section">
                <div id="title">
                    <img src={MailIllustration} alt="Mail box illustration" width="56"></img>
                    <h3>Mail capture landing page</h3>
                </div>
                <p>Landing page to gather interest people in my client's product in a telegram group and in an e-mail list.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/en/projects/landing">More details</Link>
                    <a href="https://konradmota.com.br/#/" target="_blank" rel="noreferrer">Open application</a>
                </div>
            </section>
            {/* Plugin WAL */}
            <section className="section">
                <div id="title">
                    <img src={ComputerIllustration} alt="Computer illustration" width="56"></img>
                    <h3>WAL Web Extension</h3>
                </div>
                <p>Web extension to make the web more accessible and usable for people with visual impairment.</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/en/projects/wal">More details</Link>
                    <a href="https://brasil.estadao.com.br/blogs/vencer-limites/dell-cria-software-que-inclui-acessibilidade-em-navegadores-e-sistemas/" target="_blank" rel="noreferrer">Open application</a>
                </div>
            </section>
            {/* Filmes */}
            <section className="section">
                <div id="title">
                    <img src={CameraIllustration} alt="Camera illustration" width="56"></img>
                    <h3>Movie searcher</h3>
                </div>
                <p>Website that uses The Movie DB API to show, search and discover more details about a number of movies</p>
                <div id="buttons">
                    <Link className="button-inverted" to="/en/projects/movies">More details</Link>
                    <a href="https://vilhena-movies.netlify.app" target="_blank" rel="noreferrer">Open application</a>
                </div>
            </section>
        </div>
    </main>
  </LayoutEn>
)

export default ProjectsPage
