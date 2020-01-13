import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetails = data => (
  < Layout >

    <SEO title={data.data.flotiqProduct.name} keywords={[`gatsby`, `application`, `react`]} />
    <div className="container details-page">
      <div className="product-details">
        <div className="Product-Screenshot">
          {data.data.flotiqProduct.productGallery && data.data.flotiqProduct.productGallery.length ?
            <Tabs>
              {data.data.flotiqProduct.productGallery.map(items => (
                <TabPanel key={items.id}>
                  <Tab><img src={`${process.env.GATSBY_FLOTIQ_BASE_URL}/image/1920x0/${items.id}.${items.extension}`} /></Tab>
                </TabPanel>
              ))}
              <TabList>
                {data.data.flotiqProduct.productGallery.map(items => (
                  <Tab key={items.id}><img src={`${process.env.GATSBY_FLOTIQ_BASE_URL}/image/1920x0/${items.id}.${items.extension}`} /></Tab>
                ))}
              </TabList>
            </Tabs> :
            <div className="no-image">No Image</div>
          }

        </div>
        <div>
          <h2>{data.data.flotiqProduct.name}</h2>

        </div>
        <div className="row buynowinner">
          <div className="col-sm-2">
            <span className="price">Price: ${data.data.flotiqProduct.price}</span>
          </div>
          <div className="col-sm-10 text-left">
            <a
              href="#"
              className="Product snipcart-add-item"
              data-item-id={data.data.flotiqProduct.slug}
              data-item-price={data.data.flotiqProduct.price}
              data-item-image={data.data.flotiqProduct.productImage && data.data.flotiqProduct.productImage[0] ? `${process.env.GATSBY_FLOTIQ_BASE_URL}/image/1920x0/${data.data.flotiqProduct.productImage[0].id}.${data.data.flotiqProduct.productImage[0].extension}` : ""}              data-item-name={data.data.flotiqProduct.name}
              data-item-url={`/`}
            >
              <i className="fas fa-tags" />
              Buy Now
            </a>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.data.flotiqProduct.description
          }}
        />
      </div>
    </div>
  </Layout >
)

export default ProductDetails

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
      flotiqProduct(slug: {eq: $slug }) {
        id
        slug
        name
        price
        description
        productImage {
          id
          extension
        },
        productGallery {
          id
          extension
        }
      }
  }
`
