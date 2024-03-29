import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"
import Seo from "../components/seo"

const NotFoundPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <DefaultLayout>
      <Seo title={siteTitle} />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DefaultLayout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
