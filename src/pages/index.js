import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Test from "../components/test"

const IndexPage = () => {
  return (
    <Layout>
      <AnchorLink className="block text-blue-400 hover:underline" to="/page-2">
        GO TO PAGE 2
      </AnchorLink>
      <AnchorLink className="block text-blue-400 hover:underline" to="/#sample">
        GO TO ANCHOR
      </AnchorLink>
      <SEO title="Home" />
      <Test />
    </Layout>
  )
}

export default IndexPage
