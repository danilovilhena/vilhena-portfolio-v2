import { Link } from "gatsby"
import React, { useEffect } from "react"

import LayoutEn from "../../../components/layoutEn"
import SEOEn from "../../../components/seoEn"
import Ellipse from "../../../images/ellipse.svg"
import Computer from "../../../images/projects/blog.png"
import BlogImage from "../../../images/captures/blog.png"
import GithubIcon from "../../../images/technologies/github.svg"
import FigmaIcon from "../../../images/technologies/figma.svg"
import AngularIcon from "../../../images/technologies/angular.svg"
import ExpressIcon from "../../../images/technologies/express.svg"
import BootstrapIcon from "../../../images/technologies/bootstrap.svg"
import MongoIcon from "../../../images/technologies/mongodb.svg"
import '../../../styles/project.css'

const BlogPage = () => {
    useEffect(() => {
        fetch('https://github.com/danilovilhena/angular-express-blog')
    })

    return (
    <LayoutEn>
        <SEOEn 
        lang="pt"
        title="Tech Blog Project" 
        description="Discover more details about a tech blog I developed"/>

        <main className="mx-auto" id="ProjectMain">
            <div id="title">
                <img src={Computer} alt="Computer illustration"></img>
                <h2>Tech News Blog</h2>
            </div>
            <img id="project-img" src={BlogImage} alt="Tech News Blog"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/angular-express-blog" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Github"></img>Github
                    </a>
                    <a id="figma-button" href="https://www.figma.com/file/sQaWT6nuNp4uw6ZsOfGpjV/Tech-News-Blog" target="_blank" rel="noreferrer">
                        <img src={FigmaIcon} alt="Figma"></img>Figma
                    </a>
                </div>
                <a id="regular-button" href="https://danilovilhena.github.io/angular-express-blog" target="_blank" rel="noreferrer">Application</a>
            </div>
            <section id="description">
                <h3>Application description</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Blog with news about technology, divided by topic or post date. With the option to register, you can post your own content.</p>
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
                            <img src={ExpressIcon} alt="Express"></img>
                            <p>Express</p>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={BootstrapIcon} alt="Bootstrap"></img>
                            <p>Bootstrap</p>
                        </div>
                        <div className="technology">
                            <img src={MongoIcon} alt="MongoDB"></img>
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="details">
                <h3>Implementation details</h3>
                <h4 style={{marginTop: '1rem'}}>Frontend</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Componentization and reuse of elements</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used semantic tags, alt texts and other good practices to assure the acessibility of the page</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Made the page responsive</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Optimized according to Google Lighthouse</li>
                </ul>
                <h4>Backend</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used Mongoose to interact with the database</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Encrypted users passwords with the library Bcrypt</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Used JSON Web Token to valid user access, storing it in the localStorage</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/en/projects">Return</Link>
        </main>
  </LayoutEn>)
}

export default BlogPage