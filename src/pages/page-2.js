import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AnchorLink className="text-blue-400 hover:underline" to="/#sample">
      GO TO ANCHOR
    </AnchorLink>
  </Layout>
)

export default SecondPage
