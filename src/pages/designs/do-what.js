import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/do-what.png"
import result from "../../images/v2-results/do-what.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const DoWhat = () => (
    <Layout title="do what?" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. do what? design project">
        <header className="project-header" style={{background: 'linear-gradient(107.56deg, #0C6597 0%, #084668 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="do what? design project" style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>do what?</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> April 2021</p>

            <h2>Motivation</h2>
            <p>For this project, the goal was to build my minimalist yet aesthetically pleasing version of a to-do list (one of the most common applications in development courses) to practice a little UI design.</p>

            <h2>Process</h2>
            <p>As this was a minimalist design, I wanted to put only the fundamental elements to build a functional to-do list. This required self-explanatory and intuitive elements, such as the text field (with text that prompts the user to act) and the action button (add new task) standing out from the rest of the page.</p>
            <p>As for the tasks, it was necessary that they were clearly divided and that the user can easily interact with them, either by deleting or marking as completed.</p>
            <p>Also, the completed tasks section needed to be distinct from the other tasks but still be present in the interface, so that the user can see their progress.</p>

            <h2>Result</h2>
            <img src={result} alt="Resultado do do what?" className="project-result-image"></img>

            <h2>Access links</h2>
            <a href="https://www.figma.com/file/YhNrHPWmb3WDJF4599iMVJ/do-what" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default DoWhat