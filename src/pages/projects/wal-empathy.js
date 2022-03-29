import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

// images & styles
import projectImage from "../../images/v2-sf/wal-empathy.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const WalEmpathy = () => (
    <Layout title="WAL Empathy Lab" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. WAL Empathy Lab project.">
        <header className="project-header" style={{background: 'linear-gradient(90deg, #075089 0%, #2175AF 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="WAL Empathy Lab project" style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>WAL Empathy Lab</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> December 2020</p>

            <h2>Description</h2>
            <p>WAL Empathy Lab is an user experience, where you will be able to interact with the Web and experience everyday situations of people with visual impairments: low vision and blind.</p>
            <p>The user will be able to choose a character (blind or low vision), experience the way of navigation and the barriers encountered on the Web, and eliminate them through the use of the Website Accessibility Layer (WAL) features. Experimenting with how the tool can improve the accessibility of Web pages.</p>

            <h2>Process</h2>
            <p>This project was developed in Angular in 9 days, from phase design to release to production. Our team was composed of developers, designers, testers and game Product Owner.</p>
            <p>We worked with an accelerated development, on the same day PRs (pull requests) were opened with ready or partially ready phases, they were already reviewed by the other team members and merge into the main branch.</p>
            <p>At this initial moment, 6 phases were developed (3 simulating the experience of a blind person and 3 of a person with low vision), presenting some difficulties that such people suffer daily when surfing the internet.</p>
            <p>Recently, we have incremented this game by adding 6 more phases (3 of each profile as well) with the same goal: to enable users to experience everyday situations for people with disabilities on the web.</p>

            <h2>Access links</h2>
            <a href="https://leadfortaleza.com.br/empathywal/" className="project-link">
                <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
                </svg>
                Application
            </a>
            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default WalEmpathy