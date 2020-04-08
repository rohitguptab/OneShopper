import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPost extends React.Component {

  render() {

    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="row product-main">
          {data.data.allProduct.edges.map(items => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
              <div className="details_List">

                  { items.node.productImage && items.node.productImage[0] ? <Img sizes={{
                      "src": `${process.env.GATSBY_FLOTIQ_BASE_URL}/image/1920x0/${items.node.productImage[0].id}.${items.node.productImage[0].extension}`,
                      "aspectRatio": 1.77,
                      "sizes": '',
                      "srcSet": ''
                  }} /> : <div className="no-image">No Image</div>}


                  <div className="details_inner">

                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      <span className="price">${items.node.price}</span>
                    </div>
                    <div className="col-sm-8 text-right align-self-center">
                      <a
                        href="/"
                        className="Product snipcart-add-item"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={items.node.productImage && items.node.productImage[0] ? `${process.env.GATSBY_FLOTIQ_BASE_URL}/image/1920x0/${items.node.productImage[0].id}.${items.node.productImage[0].extension}` : ""}
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                      >
                        <i className="fas fa-shopping-bag" />Add to Cart
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const IndexPage = data => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <div className="text-center mt-5"><h2 className="with-underline">All Items</h2></div>
      <IndexPost data={data}></IndexPost>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allProduct(sort: {fields: flotiqInternal___createdAt, order: DESC}) {
      edges{
        node{
          id
          slug,
          name,
          price,
          description,
          productImage {
             id,
             extension
          },
          productGallery {
             id,
             extension
          }
        }
      }
    }
  }
`



