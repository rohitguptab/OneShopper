import React from "react"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.css"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/style.css"

const IndexPage = data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="row product-main">
      {data.data.allDatoCmsProduct.edges.map(items => (
        <div className="Catalogue__item col-sm-4" key={items.node.id}>
          <div className="details_List">
            <Img sizes={items.node.image.sizes} />
            <div className="details_inner">
              <h2>
                <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
              </h2>
              <span>{items.node.price}</span>
              <a
                href="#"
                className="Product snipcart-add-item"
                data-item-id={items.node.slug}
                data-item-price={items.node.price}
                data-item-image={items.node.image.url}
                data-item-name={items.node.name}
                data-item-url={`/`}
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <a href="#" className="Header__summary snipcart-summary snipcart-checkout">
      <div className="Header__summary__title">🛍 MY CART 🛍</div>
      <div className="Header__summary__line">
        Number of items: <span className="snipcart-total-items" />
      </div>
      <div className="Header__summary__line">
        Total price: <span className="snipcart-total-price" />
      </div>
    </a>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allDatoCmsProduct {
      edges {
        node {
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
        }
      }
    }
  }
`
