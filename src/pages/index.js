import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"
import Seo from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <DefaultLayout location={location} title={siteTitle}>
      <Seo title="Lorem ipsum dolor" />
      <h1>Main Screen</h1>
    </DefaultLayout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
