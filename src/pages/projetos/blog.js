import { Link } from "gatsby"
import React, { useEffect } from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Ellipse from "../../images/ellipse.svg"
import Computer from "../../images/projects/blog.png"
import BlogImage from "../../images/captures/blog.png"
import GithubIcon from "../../images/technologies/github.svg"
import FigmaIcon from "../../images/technologies/figma.svg"
import AngularIcon from "../../images/technologies/angular.svg"
import ExpressIcon from "../../images/technologies/express.svg"
import BootstrapIcon from "../../images/technologies/bootstrap.svg"
import MongoIcon from "../../images/technologies/mongodb.svg"
import '../../styles/blog.css'

const BlogPage = () => {
    useEffect(() => {
        fetch('https://github.com/danilovilhena/angular-express-blog')
    })

    return (
    <Layout>
        <SEO 
        lang="pt"
        title="Projeto Blog" 
        description="Descubra mais detalhes sobre o blog de tecnologia que desenvolvi."/>

        <main className="mx-auto" id="BlogMain">
            <div id="title">
                <img src={Computer} alt="Ilustração de um computador"></img>
                <h2>Blog Tech News</h2>
            </div>
            <img id="project-img" src={BlogImage} alt="Imagem do Blog Tech News"></img>
            <div id="buttons">
                <div style={{display: 'flex'}}>
                    <a id="github-button" href="https://github.com/danilovilhena/angular-express-blog" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Ícone do Github"></img>Github
                    </a>
                    <a id="figma-button" href="https://www.figma.com/file/sQaWT6nuNp4uw6ZsOfGpjV/Tech-News-Blog" target="_blank" rel="noreferrer">
                        <img src={FigmaIcon} alt="Ícone do Figma"></img>Figma
                    </a>
                </div>
                <a id="regular-button" href="https://danilovilhena.github.io/angular-express-blog" target="_blank" rel="noreferrer">Aplicação</a>
            </div>
            <section id="description">
                <h3>Descrição da aplicação</h3>
                <div style={{display: 'flex', alignItems: 'center', margintop: '1rem'}}>
                    <img src={Ellipse} aria-hidden="true" alt=""></img>
                    <p>Blog com notícias de tecnologia, agrupadas por assunto ou meses do ano. Com a possibilidade de cadastro, você pode postar suas próprias produções.</p>
                </div>
            </section>
            <section id="technologies">
                <h3>Tecnologias usadas</h3>
                <div style={{display: "flex", marginLeft: "1rem", marginTop: "1rem", flexDirection: "column"}}>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={AngularIcon} alt="Ícone do Angular"></img>
                            <p>Angular</p>
                        </div>
                        <div className="technology">
                            <img src={ExpressIcon} alt="Ícone do Express"></img>
                            <p>Express</p>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="technology" style={{marginRight: '2rem'}}>
                            <img src={BootstrapIcon} alt="Ícone do Bootstrap"></img>
                            <p>Bootstrap</p>
                        </div>
                        <div className="technology">
                            <img src={MongoIcon} alt="Ícone do MongoDB"></img>
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="details">
                <h3>Detalhes da implementação</h3>
                <h4 style={{marginTop: '1rem'}}>Frontend</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Componentizei e reutilizei os elementos</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Utilizei tags semânticas, textos alternativos e outras práticas para garantir a acessibilidade do site</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Tornei o site responsivo</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Otimizei o site de acordo com o Google Lighthouse</li>
                </ul>
                <h4>Backend</h4>
                <ul>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Utilizei o Mongoose, para interagir com o banco de dados</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Encriptei as senhas do usuário com a biblioteca Bcrypt</li>
                    <li><img src={Ellipse} aria-hidden="true" alt=""></img>Utilizei JSON Web Token para validar o acesso do usuário, salvando-o no localStorage</li>
                </ul>
            </section>
            <Link id="inverted-button" to="/projetos">Voltar</Link>
        </main>
  </Layout>)
}

export default BlogPage