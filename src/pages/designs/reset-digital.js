import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/reset-digital.png"
import before from "../../images/v2-results/reset-digital-old.png"
import result from "../../images/v2-results/reset-digital.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const ResetDigital = () => (
    <Layout title="Reset Digital" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. Landing page redesign project.">
        <header className="project-header" style={{background: 'linear-gradient(72.44deg, #383933 50%, #191C18 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Reset Digital redesign projects" style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>Reset Digital redesign</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> May 2021</p>

            <h2>Motivation</h2>
            <p>I received an advertisement for this event on Instagram and decided to log on to the site to register.</p>
            <p>As soon as I entered, I already noticed some inconsistent points and some details that were aesthetically unpleasant. Some examples are: the little contrast between the text and the background image in the second section, the footer taking up more space than necessary, the too rounded borders in the third section, and the excess of one color on the page (white).</p>
            <p>So, I decided to do this redesign to bring this consistency and practice my UI design skills.</p>

            <h2>Process</h2>
            <p>Initially, I took screenshots of all the screens and started working in Figma. Taking the points I had listed in the analysis, I started making the new components and then structuring them on the page.</p>
            <p>Thereby, I corrected the points and made the design for the site on mobile devices.</p>

            <h2>Before redesign</h2>
            <img src={before} alt="Before redesign" className="project-result-image"></img>
            <h2>After redesign</h2>
            <img src={result} alt="After redesign" className="project-result-image"></img>

            <h2>Access links</h2>
            <a href="https://www.figma.com/file/z3sgSuLo1ExYnce9tMhIj7/o-reset-digital?node-id=101%3A2" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default ResetDigital