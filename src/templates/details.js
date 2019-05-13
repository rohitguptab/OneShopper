import React from "react"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.css"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/style.css"

const ProductDetails = data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="product-details">
      <h2>{data.data.datoCmsProduct.name}</h2>
      <Img sizes={data.data.datoCmsProduct.image.sizes} />
      <span>{data.data.datoCmsProduct.price}</span>
      <p>{data.data.datoCmsProduct.details}</p>
      <a
        href="#"
        className="Product snipcart-add-item"
        data-item-id={data.data.datoCmsProduct.slug}
        data-item-price={data.data.datoCmsProduct.price}
        data-item-image={data.data.datoCmsProduct.image.url}
        data-item-name={data.data.datoCmsProduct.name}
        data-item-url={`/`}
      >
        Buy Now
      </a>
    </div>
  </Layout>
)

export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      id
      name
      slug
      image {
        url
        sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
          src
        }
      }
      price
      details
    }
  }
`
