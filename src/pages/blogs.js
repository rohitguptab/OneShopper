import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogsPost extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { data } = this.props;

    return (
      <React.Fragment>
        <ul className="blog-list">
          {data.data.allContentfulBlogs.edges.map(items => (
            <li>
              <div class="post-item template-square columned">
                <div class="post-thumbnail">
                  <Img sizes={items.node.featureImage.fixed} />
                </div>
                <div class="post-details">
                  <h2 class="post-title"><a href="#" class="">{items.node.title}</a></h2>
                  <div className="author">
                    <Img sizes={items.node.author.photo.fixed} />
                    <strong className="name">{items.node.author.name}</strong>
                  </div>
                  <p>{items.node.description.childMarkdownRemark.excerpt}</p>
                  <div class="post-date">
                    <i class="fas fa-calendar-alt"></i>
                    {items.node.publicData}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const Blogs = data => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container blog-page">
      <BlogsPost data={data}></BlogsPost>
    </div>
  </Layout>
)

export default Blogs

export const query = graphql`
  query BlogsQuery {
    allContentfulBlogs {
        edges {
          node {
            id
            title
            slug
            publicData(formatString: "MMMM D, YYYY")
            author {
              name
              photo {
                fixed(width: 50, height: 50) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            description {
              childMarkdownRemark {
                excerpt(pruneLength: 250)
              }
            }
            featureImage {
              fixed(width: 1120, height: 500) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
  }
`



