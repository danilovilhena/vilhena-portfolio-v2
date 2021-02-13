import { Link } from "gatsby"
import React from "react"

import LayoutEn from "../../../components/layoutEn"
import SEOEn from "../../../components/seoEn"
import Ellipse from "../../../images/ellipse.svg"
import Game from "../../../images/projects/game.png"
import EmpathyImage from "../../../images/captures/empathy.png"

import AngularIcon from "../../../images/technologies/angular.svg"
import BootstrapIcon from "../../../images/technologies/bootstrap.svg"
import '../../../styles/project.css'

const EmpathyPage = () => (
    <LayoutEn>
        <SEOEn 
        lang="en"
        title="Empathy Lab Project" 
        description="Discover more details about the Empathy Lab game I helped developing"/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Game} alt="Videogame controller illustration"></img>
                <h2>Empathy Lab</h2>
            </div>
            <img id="project-img" src={EmpathyImage} alt="Empathy Lab"></img>
            <div id="buttons">
                <a id="regular-button" href="https://leadfortaleza.com.br/empathywal/" target="_blank" rel="noreferrer">Application</a>
            </div>
            <section id="description">
                <h3>Application details</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Game to demonstrate the difficulties blind or low vision people encounter when using the internet</p>
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
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Project developed during my internship at LEAD Fortaleza</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Internationalized the application to english, spanish and portuguese</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Created a native Javascript screen reader to simulate a blind user experience in the internet</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used semantic tags, alt texts and other good practices to assure the acessibility of the page</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/en/projects">Return</Link>
        </main>
  </LayoutEn>
)

export default EmpathyPage