import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/style.css"

const ProductDetails = data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <div className="product-details">
        {data.data.contentfulProduct.image === null ? "" : <Img fixed={data.data.contentfulProduct.image.fixed} />}
        <h2>{data.data.contentfulProduct.name}</h2>
        <span>{data.data.contentfulProduct.price}</span>
        <div
          dangerouslySetInnerHTML={{
            __html: data.data.contentfulProduct.details.childMarkdownRemark.html
          }}
        />
        <a
          href="#"
          className="Product snipcart-add-item"
          data-item-id={data.data.contentfulProduct.slug}
          data-item-price={data.data.contentfulProduct.price}
          data-item-image={data.data.contentfulProduct.image === null ? "" : data.data.contentfulProduct.image.fixed.src}
          data-item-name={data.data.contentfulProduct.name}
          data-item-url={`/`}
        >
          <i class="fas fa-tags" />
          Buy Now
      </a>
      </div>
    </div>
  </Layout>
)

export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
    contentfulProduct(slug: {eq: $slug }) {
      id
      name
      slug
      image {
        fixed(width: 1120, height: 500) {
          width
          height
          src
          srcSet
        }
      }
      price
      details {
        childMarkdownRemark {
          html
        }
      }
    }
}
`
