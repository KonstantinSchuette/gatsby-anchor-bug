import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Test from "../components/test"
import SimpleReactLightbox from "simple-react-lightbox"

const IndexPage = () => {
  return (
    <SimpleReactLightbox>
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Test />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </Layout>
    </SimpleReactLightbox>
  )
}

export default IndexPage
