import React from "react"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import bannerOffice from "../assets/images/banner-office-3.png"
import DefaultLayout from "../layouts/DefaultLayout"

const BlogPostTemplate = ({ data: { post, allPost } }) => {
  const otherPosts = allPost.nodes.filter(item => item.id !== post.id)

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
        <div className="my-14 text-justify">
          <h3 className="text-2xl font-semibold">{post.title}</h3>
          <span className="flex items-center mt-3">
            <i className="icon icon-calendar_today mr-3"></i>
            <span>{post.date}</span>
          </span>
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
            className="my-5"
          ></div>
          <div
            className="mb-5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <div className="text-xl font-semibold pb-4 border-b-2">
            Other News
          </div>
          <section className="grid grid-cols-1 gap-5 my-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {otherPosts.map(item => (
              <article
                key={item.id}
                className="c-transition group bg-white border overflow-hidden hover:bg-gray-200 hover:shadow-lg rounded-[10px]"
              >
                <Link to={item.uri} itemProp="url">
                  <div className="overflow-hidden">
                    <img
                      className="object-cover c-transition w-full h-full aspect-video group-hover:scale-110"
                      src={item.featuredImage?.node?.mediaItemUrl}
                      alt={item.featuredImage?.node?.altText}
                    />
                  </div>
                  <div className="p-4 pt-2 lg:p-5">
                    <h3 className="font-bold text-lg c-transition line-clamp-2 text-justify hover:text-primary">
                      {parse(item.title)}
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
                </Link>
              </article>
            ))}
          </section>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "DD/MM/YYYY")
    }

    allPost: allWpPost {
      nodes {
        excerpt
        id
        uri
        title
        date
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        content
      }
    }
  }
`
