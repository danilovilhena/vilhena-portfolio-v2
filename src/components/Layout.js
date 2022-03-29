import React from "react"
import SEO from "./seo"
import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''

    return (<>
    <SEO 
        lang="en"
        title={props.title}
        description={props.description ? props.description : "Portfolio made by front-end developer Danilo Vilhena."}/>
    <Header />
    {props.children}
    {!url.includes("404") && <Footer />}
    </>)
}

export default Layout

