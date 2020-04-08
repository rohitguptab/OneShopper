var path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const StoreTemplate = path.resolve("src/templates/details.js")
    resolve(
      graphql(`{
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
          
        }}
        
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const products = result.data.allProduct.edges;

        products.forEach((edge, index) => {

          const previous = index === products.length - 1 ? null : products[index + 1].node;
          const next = index === 0 ? null : products[index - 1].node;

          createPage({
            path: edge.node.slug,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
              previous,
              next
            },
          })
        });
        return
      })
    )
  })
}
