import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/flow-podcast.png"
import before from "../../images/v2-results/flow-podcast-old.jpg"
import result from "../../images/v2-results/flow-podcast.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const FlowPodcast = () => (
    <Layout title="Flow Podcast" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. Flow Podcast redesign.">
        <header className="project-header" style={{background: '#FFB709', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Flow Podcast redesign" style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>Flow Podcast redesign</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> April 2021</p>

            <h2>Motivation</h2>
            <p>Since they put this site online, I started using it because I follow the podcast a lot. However, since the beginning there were already noticeable design flaws and inconsistencies in the interface that were only increasing.</p>
            <p>Many components ready and characteristic of frameworks (Material, Bootstrap, etc) were scattered throughout the site without following any pattern.</p>
            <p>So, I decided to do this redesign to bring this consistency, solve other problems I identified on the site both to practice UI design and to propose this change to the site developers.</p>

            <h2>Process</h2>
            <p>Initially, I analyzed the pages to identify the interface flaws, such as: hierarchy between elements, contrast, layout, design and accessibility in general.</p>
            <p>After this analysis, I took screenshots of all the screens and started working on Figma. Taking the points I had listed in the analysis, I started making the new components and then structuring them on the page.</p>
            <p>One of the most common errors in the old site was the inconsistency between elements. Several of them that had the same function did not follow the same style (sometimes they differed greatly).</p>
            <p>Another very present point was the lack of hierarchy between the components. Headings, subheadings, and paragraphs had almost no distinction, making sections of the site difficult to understand.</p>

            <h2>Before redesign</h2>
            <img src={before} alt="Website before redesign" className="project-result-image"></img>
            <h2>After redesign</h2>
            <img src={result} alt="Redesign result" className="project-result-image"></img>

            <h2>Access links</h2>
            <a href="https://www.figma.com/file/x8uDJ37ZdP0lgadsgLhJR1/flow-podcast?node-id=202%3A1525" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default FlowPodcast