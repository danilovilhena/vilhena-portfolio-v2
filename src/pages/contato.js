import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AvatarImage from '../images/avatar.webp'
import MailIcon from '../images/mail.svg'
import GithubIcon from '../images/github.svg'
import InstagramIcon from '../images/instagram.svg'
import './styles/contato.css'

const ContactPage = () => (
  <Layout>
    <SEO 
      lang="pt"
      title="Contato" 
      description="Entre em contato comigo para construirmos um excelente site para o seu negócio."/>
    
    <main className="mx-auto" id="ContactMain">
        <h2>Contato</h2>
        <section>
            <img src={AvatarImage} alt="Avatar do Danilo Vilhena"></img>
            <div>
                <h3>E-mail</h3>
                <div className="line">
                    <img src={MailIcon} alt="Ícone de email"></img>
                    <p>danilo.vilhena@gmail.com</p>
                </div>
                <h3>Github</h3>
                <div className="line">
                    <img src={GithubIcon} alt="Ícone do Github"></img>
                    <p>danilovilhena</p>
                </div>
                <h3>Instagram</h3>
                <div className="line">
                    <img src={InstagramIcon} alt="Ícone do Instagram"></img>
                    <p>@devdanilo</p>
                </div>
            </div>
        </section>
    </main>
  </Layout>
)

export default ContactPage