import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO: React.FC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={defaultTitle}
      meta={[
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    >
      <script
        src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
        type="text/javascript"
      />
    </Helmet>
  )
}

export default SEO
