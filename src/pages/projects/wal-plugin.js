import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

// images & styles
import projectImage from "../../images/v2-sf/wal.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const WalPlugin = () => (
    <Layout title="WAL Plugin" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. WAL Plugin project.">
        <header className="project-header" style={{background: 'linear-gradient(90deg, #075089 0%, #2175AF 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="WAL Plugin project" style={{width: '60%'}}></img>
        </header>
        <main className="project-main">
            <h1>WAL Plugin</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> February 2021</p>

            <h2>Descrição</h2>
            <p>WAL (Website Accessibility Layer) is an extension added to the browser that injects accessibility features into web systems automatically and at runtime. WAL reads the website's code and allows the user to modify its interface in order to have a better experience when using it.</p>
            <p>This extension consists of a floating, retractable bar containing customizable accessibility features in a way that is transparent to the user. Thus, WAL Plugin enables users to overcome barriers when navigating websites and not be excluded from access.</p>

            <h2>Process</h2>
            <p>This was the first project I participated in when I joined my first internship. The extension was with a newly released version that had been sent out for testing with users of different disability profiles.</p>
            <p>So, the initial activities were focused on fixing bugs that came back from testing, aiming to make the extension as comprehensive for as many sites as possible.</p>
            <p>After this moment, the Product Owner elaborated new functionalities for the tool, validated the ideas with users and forwarded them to our development team. We then proceeded to develop these new features to further help users surf the web.</p>
            <p>In conclusion, the extension already has a stable version completed, but it has not yet been made available to end users because it depends on another partner company to distribute it.</p>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default WalPlugin