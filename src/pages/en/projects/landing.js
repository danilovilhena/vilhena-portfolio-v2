import { Link } from "gatsby"
import React from "react"

import LayoutEn from "../../../components/layoutEn"
import SEOEn from "../../../components/seoEn"
import Ellipse from "../../../images/ellipse.svg"
import Mail from "../../../images/projects/mail.png"
import LandingImage from "../../../images/captures/landing.png"

import GithubIcon from "../../../images/technologies/github.svg"
import VueIcon from "../../../images/technologies/vue.svg"
import MailchimpIcon from "../../../images/technologies/mailchimp.png"
import BootstrapIcon from "../../../images/technologies/bootstrap.svg"
import '../../../styles/project.css'

const LandingPage = () => (
    <LayoutEn>
        <SEOEn 
        lang="en"
        title="Mail capture landing page project" 
        description="Discover more details about a mail capture landing page project I developed"/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Mail} alt="Mail box illustration"></img>
                <h2>Mail capture landing page</h2>
            </div>
            <img id="project-img" src={LandingImage} alt="Mail capture landing page"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/konrad-capture" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Github"></img>Github
                    </a>
                </div>
                <a id="regular-button" href="https://konradmota.com.br/#/" target="_blank" rel="noreferrer">Application</a>
            </div>
            <section id="description">
                <h3>Application details</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Landing page to gather interest people in my client's product in a telegram group and in an e-mail list.</p>
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
                        <div className="technology">
                            <img src={MailchimpIcon} alt="Mailchimp"></img>
                            <p>Mailchimp</p>
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
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Configured Mailchimp to store data about possible costumers</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Connected the page with Mailchimp</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Made the page responsive</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Optimized according to Google Lighthouse</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/en/projects">Return</Link>
        </main>
  </LayoutEn>
)

export default LandingPage