import { Link } from "gatsby"
import React from "react"

import LayoutEn from "../../../components/layoutEn"
import SEOEn from "../../../components/seoEn"
import Ellipse from "../../../images/ellipse.svg"
import Camera from "../../../images/projects/camera.png"
import MoviesImage from "../../../images/captures/movies.png"
import FigmaIcon from "../../../images/technologies/figma.svg"
import GithubIcon from "../../../images/technologies/github.svg"
import AngularIcon from "../../../images/technologies/angular.svg"
import BootstrapIcon from "../../../images/technologies/bootstrap.svg"
import '../../../styles/project.css'

const MoviesPage = () => (
    <LayoutEn>
        <SEOEn 
        lang="en"
        title="Movie searcher project" 
        description="Discover more details about a movie searcher project I developed"/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Camera} alt="Camera illustration"></img>
                <h2>Movie searcher</h2>
            </div>
            <img id="project-img" src={MoviesImage} alt="Movie searcher"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/angular-themoviedb-spa" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Github"></img>Github
                    </a>
                    <a id="figma-button" href="https://www.figma.com/file/eFP78Pkpr4uMSxCjlJaDp5/SPA-The-Movie-DB" target="_blank" rel="noreferrer">
                        <img src={FigmaIcon} alt="Figma"></img>Figma
                    </a>
                </div>
                <a id="regular-button" href="https://vilhena-movies.netlify.app" target="_blank" rel="noreferrer">Application</a>
            </div>
            <section id="description">
                <h3>Application description</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Website that uses The Movie DB API to show, search and discover more details about a number of movies</p>
                </div>
            </section>
            <section id="technologies">
                <h3>Technologies used</h3>
                <div style={{display: "flex", marginLeft: "1rem", marginTop: "1rem", flexDirection: "column"}}>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={AngularIcon} alt="Angular"></img>
                            <p>Angular</p>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={BootstrapIcon} alt="Bootstrap"></img>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="details">
                <h3>Implementation details</h3>
                <ul style={{marginLeft: '0', paddingLeft: '1rem'}}>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Componentization and reuse of elements</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used The Movie DB API to get data about movies by gender and make searches</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Implemented high contrast and change font size functionalities to make the page more accessible</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used semantic tags, alt texts and other good practices to assure the acessibility of the page</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/en/projects">Return</Link>
        </main>
  </LayoutEn>
)

export default MoviesPage