import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StarRatingComponent from 'react-star-rating-component';
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetails = data => (
  < Layout >

    <SEO title={data.data.contentfulProduct.name} keywords={[`gatsby`, `application`, `react`]} />
    <div className="container details-page">
      <div className="product-details">
        <div className="Product-Screenshot">
          {data.data.contentfulProduct.productMorePhotos === null ? <div className="no-image">No Image</div> :
            <Tabs>
              {data.data.contentfulProduct.productMorePhotos.map(items => (
                <TabPanel key={items.id}>
                  <Tab><img src={items.fixed.src} alt={items.id}/></Tab>
                </TabPanel>
              ))}
              <TabList>
                {data.data.contentfulProduct.productMorePhotos.map(items => (
                  <Tab key={items.id}><img src={items.fixed.src} alt={items.id}/></Tab>
                ))}
              </TabList>
            </Tabs>}

        </div>
        <div>
          <h2>{data.data.contentfulProduct.name}</h2>
        </div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={data.data.contentfulProduct.rating}
        />
        <div className="row buynowinner">
          <div className="col-sm-2">
            <span className="price">Price: ${data.data.contentfulProduct.price}</span>
          </div>
          <div className="col-sm-10 text-left">
            <a
              href="#"
              className="Product snipcart-add-item"
              data-item-id={data.data.contentfulProduct.slug}
              data-item-price={data.data.contentfulProduct.price}
              data-item-image={data.data.contentfulProduct.image === null ? "" : data.data.contentfulProduct.image.fixed.src}
              data-item-name={data.data.contentfulProduct.name}
              data-item-url={`/`}
            >
              <i className="fas fa-tags" />
              Buy Now
            </a>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.data.contentfulProduct.details.childMarkdownRemark.html
          }}
        />
      </div>
    </div>
  </Layout >
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
    productMorePhotos {
      id
      fixed(width: 1120, height: 600){
        src
      }
    }
    rating
  }
}
`