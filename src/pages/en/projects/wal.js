import { Link } from "gatsby"
import React from "react"

import LayoutEn from "../../../components/layoutEn"
import SEOEn from "../../../components/seoEn"
import Ellipse from "../../../images/ellipse.svg"
import Computer from "../../../images/projects/computer.png"
import WalImage from "../../../images/captures/wal.png"
import VueIcon from "../../../images/technologies/vue.svg"
import BootstrapIcon from "../../../images/technologies/bootstrap.svg"
import '../../../styles/project.css'

const WalPage = () => (
    <LayoutEn>
        <SEOEn 
        lang="en"
        title="WAL Web Extension" 
        description="Discover more details about a WAL Web Extension I helped develop"/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Computer} alt="Computer illustration"></img>
                <h2>WAL Web Extension</h2>
            </div>
            <img id="project-img" src={WalImage} alt="WAL Web Extension"></img>
            <section id="description">
                <h3>Application details</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Web extension to make the web more accessible and usable for people with visual impairment.</p>
                </div>
            </section>
            <section id="technologies">
                <h3>Technologies used</h3>
                <div style={{display: "flex", marginLeft: "1rem", marginTop: "1rem", flexDirection: "column"}}>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={VueIcon} alt="Vue.js"></img>
                            <p>Vue.js</p>
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
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Project still in development in my internship at LEAD Fortaleza</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Internationalized the application to english, spanish and portuguese</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Implemented a series of functionalities that make the web more acessible, like: change font type and size, line height, page colors, activate high contrast, stop sounds that reproduce automatically, etc.</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/en/projects">Return</Link>
        </main>
  </LayoutEn>
)

export default WalPage