// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"
import Layout from "../components/test"
import Input from "../components/ui/form/input/input"

const Dddddd = ( props ) => {
    return <p>Hi {props.name}!</p>
}

// Step 2: Define your component
const AboutPage = ( params = {} ) => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <br />
        <Link to="/">Go home</Link><br/>
        <Link to="/about">Go about</Link>
        <Dddddd name="asd" />
        <Dddddd name="asd" />
        <Dddddd name="asd" />
        <Input name="asd" />
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </Layout>
    </main>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage