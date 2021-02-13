import { Link } from "gatsby"
import React from "react"

import LayoutEn from "../../../components/layoutEn"
import SEOEn from "../../../components/seoEn"
import Ellipse from "../../../images/ellipse.svg"
import Virus from "../../../images/projects/covid.png"
import CovidImage from "../../../images/captures/covid.png"

import GithubIcon from "../../../images/technologies/github.svg"
import FigmaIcon from "../../../images/technologies/figma.svg"
import AngularIcon from "../../../images/technologies/angular.svg"
import PythonIcon from "../../../images/technologies/python.svg"
import BootstrapIcon from "../../../images/technologies/bootstrap.svg"
import '../../../styles/project.css'

const CovidPage = () => (
    <LayoutEn>
        <SEOEn 
        lang="en"
        title="COVID-19 Dashboard Project" 
        description="Discover more details about a COVID-19 Dashboard I developed"/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Virus} alt="Virus illustration"></img>
                <h2>COVID-19 Dashboard</h2>
            </div>
            <img id="project-img" src={CovidImage} alt="COVID-19 Dashboard"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/angular-covid-dashboard" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Github"></img>Github
                    </a>
                    <a id="figma-button" href="https://www.figma.com/file/qTJfTwpwZS4qElGaYfUkHQ/COVID-Dashboard" target="_blank" rel="noreferrer">
                        <img src={FigmaIcon} alt="Figma"></img>Figma
                    </a>
                </div>
                <a id="regular-button" href="https://vilhena-covid-dashboard.netlify.app" target="_blank" rel="noreferrer">Application</a>
            </div>
            <section id="description">
                <h3>Application details</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Application to show COVID data about cities and states from Brazil and from the world.</p>
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
                        <div className="technology">
                            <img src={PythonIcon} alt="Python"></img>
                            <p>Python</p>
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
                <h4 style={{marginTop: '1rem'}}>Frontend</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Design and prototyping of the project</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Componentization and reuse of elements</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used 4 APIs to collect data as complete as possible about the COVID-19 in Brazil and in the world</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Processed the data collected to improve user experience in case of the APIs failing</li>
                </ul>
                <h4>Web Scraping</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used Python's library Selenium to collect the amount of money destinated to each brazilian state to combate the COVID-19</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/en/projects">Return</Link>
        </main>
  </LayoutEn>
)

export default CovidPage