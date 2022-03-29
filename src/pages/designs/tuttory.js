import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/tuttory.png"
import result from "../../images/v2/tuttory.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const Tuttory = () => (
    <Layout title="Tuttory" description="Danilo Vilhena, desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Tuttory design project.">
        <header className="project-header" style={{background: 'linear-gradient(107.57deg, #55D96B -4.12%, #25AA3B 104.25%)'}}>
            <img src={projectImage} alt="Tuttory design project."></img>
        </header>
        <main className="project-main">
            <h1>Tuttory</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> Maio  2021</p>

            <h2>Motivation</h2>
            <p>This project was motivated by a class in my Computer Science course. The goal was to deliver a product using in a 4 week sprint.</p>
            <p>That way, we decided to build an application to facilitate the connection between private teachers and students and I was responsible for the design part of the team.</p>

            <h2>Process</h2>
            <p>As we only had one sprint, the Tuttory app would consist of an onboarding process, login/registration and a look at the features (decided beforehand) both as a teacher and as a student, since the app would be used by both.</p>
            <p>I initially made a wireframe of the project screens, to get an overview of the elements and be able to structure them on the screens.</p>
            <p>After that, we decided on the colors of the product and I started writing the interface texts. Then, I applied both to the wireframes and presented the project to the team for validation.</p>

            <h2>Result</h2>
            <p>As this is a mobile project, I have put only three demo screens on this page. To see the other screens, go to the Figma link below the image.</p>
            <img src={result} alt="Tuttory result" className="project-result-image"></img>

            <h2>Access links</h2>
            <a href="https://www.figma.com/file/vEbTiEOYDMnq6WrsWz9UgL/Tuttory" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default Tuttory