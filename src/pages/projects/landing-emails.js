import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/landing-emails.png"
import result from "../../images/v2-results/landing-emails.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const LandingEmails = () => (
    <Layout title="Mail capture page" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. Mail capture page">
        <header className="project-header" style={{background: '#181818', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Mail capture page" style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>Mail capture page</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> October 2020</p>
            
            <h2>Motivation</h2>
            <p>In this project, the clients asked for a landing page to direct potential customers to a Telegram group. So, the main goals for this project were: to achieve excellent performance, to be fully responsive and have good CTAs (calls to action) to achieve higher conversion rates.</p>

            <h2>Process</h2>
            <p>The project was very simple with few pages to be developed. So, most of the efforts in this project were focused on performance, always checking the page in Google Lighthouse and making the necessary changes to achieve a score of 100, such as: compressing images, uploading only the necessary files and reducing bundle sizes.</p>
            <p>Moreover, the other focus of the project was to make the page responsive for all devices, especially for cell phones, since most of the access comes from these devices. Already to organize these leads, I used Mailchimp to save people's emails and be able to use the email list later.</p>
            <p>In conclusion, I reached the goals set at the beginning of the development: to achieve a good score on PageSpeed Insights and make the page fully responsive.</p>

            <h2>Result</h2>
            <img src={result} alt="Mail capture page result" className="project-result-image"></img>

            <h2>Access links</h2>
            <a href="https://www.figma.com/file/7zprPZ2ofF2wDXd1CppFBB/audiência-trabalhista" className="project-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default LandingEmails