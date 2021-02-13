import React from "react"

import LayoutEn from "../../components/layoutEn"
import SEOEn from "../../components/seoEn"
import AvatarImage from '../../images/avatar.webp'
import MailIcon from '../../images/mail.svg'
import GithubIcon from '../../images/github.svg'
import InstagramIcon from '../../images/instagram.svg'
import '../../styles/contato.css'

const ContactPage = () => (
  <LayoutEn>
    <SEOEn 
      lang="en"
      title="Contact" 
      description="Get in touch with me so we can build an excellent site for your business"/>
    
    <main className="mx-auto" id="ContactMain">
        <h2>Contact</h2>
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
                    <p>dani.developer</p>
                </div>
            </div>
        </section>
    </main>
  </LayoutEn>
)

export default ContactPage