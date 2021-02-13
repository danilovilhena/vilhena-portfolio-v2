import { navigate } from "gatsby"
import React from "react"

import LayoutEn from "../../components/layoutEn"
import SEOEn from "../../components/seoEn"
import AvatarImage from '../../images/avatar.webp'
import RocketIllustration from '../../images/rocket.svg'
import ComputerIllustration from '../../images/computer.svg'
import '../../styles/home.css'

const IndexPage = () => (
  <LayoutEn>
    <SEOEn 
      lang="en"
      title="Fullstack Web Developer" 
      description="Fullstack web developer that emphasises acessibility, usability and ensuring excellent user experience."/>
    
    <main className="mx-auto">
      <section id="top-section" className="mx-auto">
          <img src={AvatarImage} alt="Danilo Vilhena's Avatar" id="top-section-img"></img>
          <h2 id="top-section-h2">Hello, I'm Danilo!</h2>
          <p id="top-section-p">I am a <span>web developer</span> from Brazil. <br></br>I emphasize acessibility, usability and ensuring an excellent user experience.</p>
      </section>
      <section id="bottom-section" className="mx-auto">
          <section className="section">
              <img src={RocketIllustration} alt="Rocket illustration"></img>
              <h3>Projects</h3>
              <p>Discover more details about the applications I developed</p>
              <button onClick={() => navigate('projects')}>See more</button>
          </section>
          <section className="section">
              <img src={ComputerIllustration} alt="Computer illustration"></img>
              <h3>Technologies</h3>
              <p>Find out the technologies I know and have experience</p>
              <button onClick={() => navigate('tech')}>See more</button>
          </section>
      </section>
    </main>
  </LayoutEn>
)

export default IndexPage
