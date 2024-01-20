import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import DefaultLayout from "../layouts/DefaultLayout"
import bannerOffice from "../assets/images/banner-office-3.png"

const BlogIndex = ({ data }) => {
  const posts = data.allWpPost.nodes

  return (
    <DefaultLayout>
      <section
        className="bg-cover bg-center bg-no-repeat relative pt-[22%] min-h-[200px]"
        style={{
          backgroundImage: `linear-gradient(
              180deg,
              rgba(98, 97, 102, 0.5) 0%,
              rgba(194, 194, 204, 0.25) 100%
            ),
            url(${bannerOffice})`,
        }}
      >
        <h2 className="c-title-breadcrumb">news</h2>
      </section>

      <div className="container">
        <div className="my-14">
          <section className="grid grid-cols-1 gap-5 my-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {posts.map(item => (
              <article
                key={item.id}
                className="c-transition group bg-white border overflow-hidden hover:bg-gray-200 hover:shadow-lg rounded-[10px]"
              >
                <div className="overflow-hidden">
                  <img
                    className="object-cover c-transition w-full h-full aspect-video group-hover:scale-110"
                    src={item.featuredImage?.node?.mediaItemUrl}
                    alt={item.featuredImage?.node?.altText}
                  />
                </div>
                <div className="p-4 pt-2 lg:p-5">
                  <h3 className="font-bold text-lg c-transition line-clamp-2 text-justify hover:text-primary">
                    <Link to={item.uri} itemProp="url">
                      <span itemProp="headline">{parse(item.title)}</span>
                    </Link>
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                    className="text-sm my-4 line-clamp-2 text-justify"
                  ></div>
                  <div>
                    <div className="flex items-center text-primary">
                      <i className="icon icon-calendar_today"></i>
                      <span className="ml-2">{item.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        id
        uri
        title
        date(formatString: "DD/MM/YYYY")
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
`
