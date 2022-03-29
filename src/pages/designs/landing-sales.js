import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/pagina-de-vendas.png"
import result from "../../images/v2-results/landing_vendas.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const LandingVendas = () => (
    <Layout title="Digital product landing page" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. Digital product landing page.">
        <header className="project-header" style={{background: 'linear-gradient(107.56deg, #0C1B41 0%, #132D6C 100%)'}}>
            <img src={projectImage} alt="Digital product landing page" style={{width: 'auto'}}></img>
        </header>
        <main className="project-main">
            <h1>Digital product landing page</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> April 2021</p>

            <h2>Motivation</h2>
            <p>For this project, the clients asked for a sales page for a course they produced. As such, the design should contain information about the teachers and details about the course.</p>
            <p>In addition, the page should have its sections consistent and have clear and prominent CTA buttons to achieve higher conversion rates.</p>

            <h2>Process</h2>
            <p>Since this was a simpler page, the sections had to be very straightforward. So I consulted with the clients to find out what information they thought they needed for their product's sales page.</p>
            <p>After he handed me such information, I made an outline on paper of how it should be structured on the page so that buyers could easily get their questions answered and proceed to the sales platform.</p>
            <p>Finally, I used Figma to make both a wireframing and a more complete version to present and validate with the client.</p>

            <h2>Result</h2>
            <img src={result} alt="Digital product landing page result" className="project-result-image"></img>

            <h2>Access links</h2>
            <a href="https://recjus.com.br" className="project-link">
                <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
                </svg>
                Application
            </a>
            <a href="https://www.figma.com/file/0zZTx9yDxeMpQs4J7s16uM/execu%C3%A7%C3%A3o-trabalhista" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default LandingVendas